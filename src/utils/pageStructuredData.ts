import { SchemaGenerator, DEFAULT_ORGANIZATION_DATA } from './schemaGenerator';
import type { 
  ArticleSchemaData, 
  CourseSchemaData, 
  OrganizationSchemaData 
} from './schemaGenerator';
import type { 
  PageSEOData, 
  FAQItem, 
  BreadcrumbItem, 
  StructuredDataSchema 
} from '../types/seo';
import { WithContext } from 'schema-dts';

/**
 * Generate structured data for different page types
 */
export class PageStructuredDataGenerator {
  
  /**
   * Generate structured data for lesson pages (Course + Article schemas)
   */
  static generateLessonPageSchemas(pageData: PageSEOData): StructuredDataSchema[] {
    const schemas: StructuredDataSchema[] = [];

    // Organization schema for authority
    schemas.push(SchemaGenerator.generateOrganizationSchema(DEFAULT_ORGANIZATION_DATA));

    // Article schema for the lesson content
    const articleData: ArticleSchemaData = {
      headline: pageData.title,
      description: pageData.description,
      url: `https://diyfoodtruckersunion.com${pageData.slug}`,
      datePublished: pageData.lastUpdated,
      dateModified: pageData.lastUpdated,
      author: pageData.author || {
        name: 'DIY Food Truckers Union',
        url: 'https://diyfoodtruckersunion.com',
        description: 'Expert guidance for food truck entrepreneurs'
      },
      category: pageData.category,
      keywords: pageData.keywords,
      readingTime: pageData.estimatedReadTime
    };
    schemas.push(SchemaGenerator.generateArticleSchema(articleData));

    // Course schema for educational content
    const courseData: CourseSchemaData = {
      name: pageData.title,
      description: pageData.description,
      url: `https://diyfoodtruckersunion.com${pageData.slug}`,
      provider: DEFAULT_ORGANIZATION_DATA,
      author: pageData.author,
      datePublished: pageData.lastUpdated,
      dateModified: pageData.lastUpdated,
      difficulty: pageData.difficulty,
      estimatedDuration: pageData.estimatedReadTime ? `PT${pageData.estimatedReadTime}M` : undefined,
      category: pageData.category,
      keywords: pageData.keywords,
      learningOutcomes: this.getLearningOutcomes(pageData.category)
    };
    schemas.push(SchemaGenerator.generateCourseSchema(courseData));

    // Breadcrumb schema if available
    if (pageData.breadcrumbs && pageData.breadcrumbs.length > 0) {
      schemas.push(SchemaGenerator.generateBreadcrumbSchema(pageData.breadcrumbs));
    }

    return schemas;
  }

  /**
   * Generate structured data for resource pages
   */
  static generateResourcePageSchemas(pageData: PageSEOData): StructuredDataSchema[] {
    const schemas: StructuredDataSchema[] = [];

    // Organization schema
    schemas.push(SchemaGenerator.generateOrganizationSchema(DEFAULT_ORGANIZATION_DATA));

    // Article schema for resource content
    const articleData: ArticleSchemaData = {
      headline: pageData.title,
      description: pageData.description,
      url: `https://diyfoodtruckersunion.com${pageData.slug}`,
      datePublished: pageData.lastUpdated,
      dateModified: pageData.lastUpdated,
      author: pageData.author || {
        name: 'DIY Food Truckers Union',
        url: 'https://diyfoodtruckersunion.com',
        description: 'Expert guidance for food truck entrepreneurs'
      },
      category: 'resources',
      keywords: pageData.keywords
    };
    schemas.push(SchemaGenerator.generateArticleSchema(articleData));

    // Breadcrumb schema
    if (pageData.breadcrumbs && pageData.breadcrumbs.length > 0) {
      schemas.push(SchemaGenerator.generateBreadcrumbSchema(pageData.breadcrumbs));
    }

    return schemas;
  }

  /**
   * Generate structured data for community pages
   */
  static generateCommunityPageSchemas(pageData: PageSEOData): StructuredDataSchema[] {
    const schemas: StructuredDataSchema[] = [];

    // Organization schema
    schemas.push(SchemaGenerator.generateOrganizationSchema(DEFAULT_ORGANIZATION_DATA));

    // Article schema
    const articleData: ArticleSchemaData = {
      headline: pageData.title,
      description: pageData.description,
      url: `https://diyfoodtruckersunion.com${pageData.slug}`,
      datePublished: pageData.lastUpdated,
      dateModified: pageData.lastUpdated,
      author: pageData.author || {
        name: 'DIY Food Truckers Union',
        url: 'https://diyfoodtruckersunion.com',
        description: 'Expert guidance for food truck entrepreneurs'
      },
      category: 'community',
      keywords: pageData.keywords
    };
    schemas.push(SchemaGenerator.generateArticleSchema(articleData));

    // FAQ schema for community support questions
    const communityFAQs = this.getCommunityFAQs();
    if (communityFAQs.length > 0) {
      schemas.push(SchemaGenerator.generateFAQSchema(communityFAQs));
    }

    // Breadcrumb schema
    if (pageData.breadcrumbs && pageData.breadcrumbs.length > 0) {
      schemas.push(SchemaGenerator.generateBreadcrumbSchema(pageData.breadcrumbs));
    }

    return schemas;
  }

  /**
   * Generate structured data for the home page
   */
  static generateHomePageSchemas(pageData: PageSEOData): StructuredDataSchema[] {
    const schemas: StructuredDataSchema[] = [];

    // Organization schema with enhanced data
    const enhancedOrgData: OrganizationSchemaData = {
      ...DEFAULT_ORGANIZATION_DATA,
      contactPoint: {
        contactType: 'customer service',
        email: 'hello@diyfoodtruckersunion.com'
      }
    };
    schemas.push(SchemaGenerator.generateOrganizationSchema(enhancedOrgData));

    // WebSite schema with search functionality
    const websiteSchema = SchemaGenerator.generateWebSiteSchema({
      name: 'DIY Food Truckers Union',
      url: 'https://diyfoodtruckersunion.com',
      description: pageData.description,
      potentialAction: {
        target: 'https://diyfoodtruckersunion.com/search?q={search_term_string}',
        queryInput: 'required name=search_term_string'
      }
    });
    schemas.push(websiteSchema);

    // FAQ schema for common questions
    const homeFAQs = this.getHomeFAQs();
    if (homeFAQs.length > 0) {
      schemas.push(SchemaGenerator.generateFAQSchema(homeFAQs));
    }

    return schemas;
  }

  /**
   * Generate structured data based on page type
   */
  static generatePageSchemas(pageData: PageSEOData): StructuredDataSchema[] {
    // Check for home page first, regardless of category
    if (pageData.slug === '/') {
      return this.generateHomePageSchemas(pageData);
    }

    switch (pageData.category) {
      case 'getting-started':
      case 'operations':
      case 'financial':
      case 'marketing':
        return this.generateLessonPageSchemas(pageData);
      
      case 'resources':
        return this.generateResourcePageSchemas(pageData);
      
      case 'community':
        return this.generateCommunityPageSchemas(pageData);
      
      default:
        return this.generateResourcePageSchemas(pageData);
    }
  }

  /**
   * Get learning outcomes based on category
   */
  private static getLearningOutcomes(category: string): string[] {
    const outcomes: Record<string, string[]> = {
      'getting-started': [
        'Develop a comprehensive food truck business plan',
        'Understand permit and licensing requirements',
        'Calculate startup costs and financial projections',
        'Choose the right equipment and truck setup'
      ],
      'operations': [
        'Optimize daily operational workflows',
        'Manage staff effectively',
        'Implement quality control systems',
        'Handle customer service challenges'
      ],
      'financial': [
        'Create accurate financial projections',
        'Manage cash flow effectively',
        'Understand food truck accounting basics',
        'Optimize pricing strategies'
      ],
      'marketing': [
        'Develop effective marketing strategies',
        'Build a strong social media presence',
        'Create customer loyalty programs',
        'Implement growth tactics'
      ]
    };

    return outcomes[category] || [];
  }

  /**
   * Get community-specific FAQs
   */
  private static getCommunityFAQs(): FAQItem[] {
    return [
      {
        question: 'How do I join the DIY Food Truckers Union community?',
        answer: 'You can join our Discord community for free by clicking the Discord link on our community page. We welcome all food truck entrepreneurs, from beginners to experienced operators.'
      },
      {
        question: 'Is there a cost to access community resources?',
        answer: 'No, our community support and basic resources are completely free. We believe in helping food truck entrepreneurs succeed without expensive barriers.'
      },
      {
        question: 'Can I get personalized advice for my food truck business?',
        answer: 'Yes! Our community members regularly share experiences and advice. You can ask questions in our Discord channels and get real-world insights from other operators.'
      }
    ];
  }

  /**
   * Get home page FAQs
   */
  private static getHomeFAQs(): FAQItem[] {
    return [
      {
        question: 'How much does it cost to start a food truck business?',
        answer: 'Food truck startup costs typically range from $40,000 to $200,000, depending on whether you buy new or used equipment, your location, and your concept. Our guides help you start smart and minimize unnecessary expenses.'
      },
      {
        question: 'Do I need experience in the food industry to start a food truck?',
        answer: 'While food industry experience is helpful, it\'s not required. Many successful food truck owners started with passion and learned the business through resources like ours and hands-on experience.'
      },
      {
        question: 'What permits do I need for a food truck?',
        answer: 'Permit requirements vary by location but typically include a business license, food handler\'s permit, mobile vendor permit, and health department approval. Our guides cover the specific requirements for different areas.'
      },
      {
        question: 'How long does it take to start a food truck business?',
        answer: 'The timeline varies, but most entrepreneurs can launch within 3-6 months with proper planning. This includes securing permits, finding and outfitting a truck, and completing all legal requirements.'
      }
    ];
  }

  /**
   * Generate default breadcrumbs for a page
   */
  static generateDefaultBreadcrumbs(pageData: PageSEOData): BreadcrumbItem[] {
    const breadcrumbs: BreadcrumbItem[] = [
      {
        name: 'Home',
        url: 'https://diyfoodtruckersunion.com',
        position: 1
      }
    ];

    if (pageData.slug !== '/') {
      const categoryNames: Record<string, string> = {
        'getting-started': 'Getting Started',
        'operations': 'Operations',
        'financial': 'Financial Management',
        'marketing': 'Marketing & Growth',
        'resources': 'Resources',
        'community': 'Community'
      };

      if (pageData.category && categoryNames[pageData.category]) {
        breadcrumbs.push({
          name: categoryNames[pageData.category],
          url: `https://diyfoodtruckersunion.com/${pageData.category}`,
          position: 2
        });
      }

      // Add current page if it's not a category page
      if (pageData.slug !== `/${pageData.category}` && pageData.slug !== `/${pageData.category.replace('-', '')}`) {
        breadcrumbs.push({
          name: pageData.title,
          url: `https://diyfoodtruckersunion.com${pageData.slug}`,
          position: breadcrumbs.length + 1
        });
      }
    }

    return breadcrumbs;
  }
}

/**
 * Enhanced page SEO data with structured data
 */
export interface EnhancedPageSEOData extends PageSEOData {
  structuredData: StructuredDataSchema[];
}

/**
 * Generate enhanced SEO data with structured schemas
 */
export function generateEnhancedSEOData(pageData: PageSEOData): EnhancedPageSEOData {
  // Generate breadcrumbs if not provided
  const breadcrumbs = pageData.breadcrumbs || PageStructuredDataGenerator.generateDefaultBreadcrumbs(pageData);
  
  // Create enhanced page data with breadcrumbs
  const enhancedPageData: PageSEOData = {
    ...pageData,
    breadcrumbs
  };

  // Generate structured data schemas
  const structuredData = PageStructuredDataGenerator.generatePageSchemas(enhancedPageData);

  return {
    ...enhancedPageData,
    structuredData
  };
}