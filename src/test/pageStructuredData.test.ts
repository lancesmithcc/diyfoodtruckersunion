import { describe, it, expect } from 'vitest';
import { PageStructuredDataGenerator, generateEnhancedSEOData } from '../utils/pageStructuredData';
import type { PageSEOData } from '../types/seo';

describe('PageStructuredDataGenerator', () => {
  const basePage: PageSEOData = {
    slug: '/business-planning',
    title: 'Food Truck Business Planning Guide',
    description: 'Complete guide to planning your food truck business',
    keywords: ['business planning', 'food truck', 'startup'],
    category: 'getting-started',
    difficulty: 'beginner',
    estimatedReadTime: 15,
    lastUpdated: '2024-01-01T00:00:00.000Z',
    author: {
      name: 'DIY Food Truckers Union',
      url: 'https://diyfoodtruckersunion.com'
    }
  };

  describe('generateLessonPageSchemas', () => {
    it('should generate schemas for lesson pages', () => {
      const schemas = PageStructuredDataGenerator.generateLessonPageSchemas(basePage);

      expect(schemas).toHaveLength(3); // Organization, Article, Course
      expect((schemas[0] as any)['@type']).toBe('Organization');
      expect((schemas[1] as any)['@type']).toBe('Article');
      expect((schemas[2] as any)['@type']).toBe('Course');
    });

    it('should include breadcrumbs when provided', () => {
      const pageWithBreadcrumbs: PageSEOData = {
        ...basePage,
        breadcrumbs: [
          { name: 'Home', url: 'https://diyfoodtruckersunion.com', position: 1 },
          { name: 'Getting Started', url: 'https://diyfoodtruckersunion.com/getting-started', position: 2 }
        ]
      };

      const schemas = PageStructuredDataGenerator.generateLessonPageSchemas(pageWithBreadcrumbs);

      expect(schemas).toHaveLength(4); // Organization, Article, Course, Breadcrumb
      expect((schemas[3] as any)['@type']).toBe('BreadcrumbList');
    });

    it('should set correct course duration format', () => {
      const schemas = PageStructuredDataGenerator.generateLessonPageSchemas(basePage);
      const courseSchema = schemas.find(s => (s as any)['@type'] === 'Course');

      expect((courseSchema as any)?.timeRequired).toBe('PT15M');
    });
  });

  describe('generateResourcePageSchemas', () => {
    const resourcePage: PageSEOData = {
      ...basePage,
      category: 'resources',
      slug: '/resources'
    };

    it('should generate schemas for resource pages', () => {
      const schemas = PageStructuredDataGenerator.generateResourcePageSchemas(resourcePage);

      expect(schemas).toHaveLength(2); // Organization, Article
      expect((schemas[0] as any)['@type']).toBe('Organization');
      expect((schemas[1] as any)['@type']).toBe('Article');
    });

    it('should set correct article category', () => {
      const schemas = PageStructuredDataGenerator.generateResourcePageSchemas(resourcePage);
      const articleSchema = schemas.find(s => (s as any)['@type'] === 'Article');

      expect((articleSchema as any)?.articleSection).toBe('resources');
    });
  });

  describe('generateCommunityPageSchemas', () => {
    const communityPage: PageSEOData = {
      ...basePage,
      category: 'community',
      slug: '/community'
    };

    it('should generate schemas for community pages', () => {
      const schemas = PageStructuredDataGenerator.generateCommunityPageSchemas(communityPage);

      expect(schemas).toHaveLength(3); // Organization, Article, FAQ
      expect((schemas[0] as any)['@type']).toBe('Organization');
      expect((schemas[1] as any)['@type']).toBe('Article');
      expect((schemas[2] as any)['@type']).toBe('FAQPage');
    });

    it('should include community-specific FAQs', () => {
      const schemas = PageStructuredDataGenerator.generateCommunityPageSchemas(communityPage);
      const faqSchema = schemas.find(s => (s as any)['@type'] === 'FAQPage');

      expect((faqSchema as any)?.mainEntity).toBeDefined();
      expect((faqSchema as any)?.mainEntity.length).toBeGreaterThan(0);
      expect((faqSchema as any)?.mainEntity[0].name).toContain('community');
    });
  });

  describe('generateHomePageSchemas', () => {
    const homePage: PageSEOData = {
      ...basePage,
      slug: '/',
      title: 'DIY Food Truckers Union - Start Smart, Not Expensive'
    };

    it('should generate schemas for home page', () => {
      const schemas = PageStructuredDataGenerator.generateHomePageSchemas(homePage);

      expect(schemas).toHaveLength(3); // Organization, WebSite, FAQ
      expect((schemas[0] as any)['@type']).toBe('Organization');
      expect((schemas[1] as any)['@type']).toBe('WebSite');
      expect((schemas[2] as any)['@type']).toBe('FAQPage');
    });

    it('should include search functionality in WebSite schema', () => {
      const schemas = PageStructuredDataGenerator.generateHomePageSchemas(homePage);
      const websiteSchema = schemas.find(s => (s as any)['@type'] === 'WebSite');

      expect((websiteSchema as any)?.potentialAction).toBeDefined();
      expect(((websiteSchema as any)?.potentialAction as any)['@type']).toBe('SearchAction');
    });

    it('should include enhanced organization data', () => {
      const schemas = PageStructuredDataGenerator.generateHomePageSchemas(homePage);
      const orgSchema = schemas.find(s => (s as any)['@type'] === 'Organization');

      expect((orgSchema as any)?.contactPoint).toBeDefined();
      expect((orgSchema as any)?.contactPoint.email).toBe('hello@diyfoodtruckersunion.com');
    });
  });

  describe('generatePageSchemas', () => {
    it('should route to correct schema generator based on category', () => {
      const gettingStartedPage = { ...basePage, category: 'getting-started' as const };
      const resourcePage = { ...basePage, category: 'resources' as const };
      const communityPage = { ...basePage, category: 'community' as const };
      const homePage = { ...basePage, slug: '/' };

      const gettingStartedSchemas = PageStructuredDataGenerator.generatePageSchemas(gettingStartedPage);
      const resourceSchemas = PageStructuredDataGenerator.generatePageSchemas(resourcePage);
      const communitySchemas = PageStructuredDataGenerator.generatePageSchemas(communityPage);
      const homeSchemas = PageStructuredDataGenerator.generatePageSchemas(homePage);

      expect(gettingStartedSchemas.some(s => (s as any)['@type'] === 'Course')).toBe(true);
      expect(resourceSchemas.some(s => (s as any)['@type'] === 'Course')).toBe(false);
      expect(communitySchemas.some(s => (s as any)['@type'] === 'FAQPage')).toBe(true);
      expect(homeSchemas.some(s => (s as any)['@type'] === 'WebSite')).toBe(true);
    });
  });

  describe('generateDefaultBreadcrumbs', () => {
    it('should generate breadcrumbs for category pages', () => {
      const categoryPage = { ...basePage, slug: '/getting-started' };
      const breadcrumbs = PageStructuredDataGenerator.generateDefaultBreadcrumbs(categoryPage);

      expect(breadcrumbs).toHaveLength(2);
      expect(breadcrumbs[0].name).toBe('Home');
      expect(breadcrumbs[1].name).toBe('Getting Started');
    });

    it('should generate breadcrumbs for specific pages', () => {
      const specificPage = { ...basePage, slug: '/getting-started/business-planning' };
      const breadcrumbs = PageStructuredDataGenerator.generateDefaultBreadcrumbs(specificPage);

      expect(breadcrumbs).toHaveLength(3);
      expect(breadcrumbs[0].name).toBe('Home');
      expect(breadcrumbs[1].name).toBe('Getting Started');
      expect(breadcrumbs[2].name).toBe(specificPage.title);
    });

    it('should generate only home breadcrumb for home page', () => {
      const homePage = { ...basePage, slug: '/' };
      const breadcrumbs = PageStructuredDataGenerator.generateDefaultBreadcrumbs(homePage);

      expect(breadcrumbs).toHaveLength(1);
      expect(breadcrumbs[0].name).toBe('Home');
    });
  });

  describe('generateEnhancedSEOData', () => {
    it('should generate enhanced SEO data with structured schemas', () => {
      const enhanced = generateEnhancedSEOData(basePage);

      expect(enhanced.structuredData).toBeDefined();
      expect(enhanced.structuredData.length).toBeGreaterThan(0);
      expect(enhanced.breadcrumbs).toBeDefined();
    });

    it('should preserve existing breadcrumbs', () => {
      const existingBreadcrumbs = [
        { name: 'Custom', url: 'https://example.com', position: 1 }
      ];
      const pageWithBreadcrumbs = { ...basePage, breadcrumbs: existingBreadcrumbs };

      const enhanced = generateEnhancedSEOData(pageWithBreadcrumbs);

      expect(enhanced.breadcrumbs).toEqual(existingBreadcrumbs);
    });

    it('should generate default breadcrumbs when none exist', () => {
      const enhanced = generateEnhancedSEOData(basePage);

      expect(enhanced.breadcrumbs).toBeDefined();
      expect(enhanced.breadcrumbs!.length).toBeGreaterThan(0);
      expect(enhanced.breadcrumbs![0].name).toBe('Home');
    });
  });
});