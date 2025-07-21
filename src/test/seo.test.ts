import { describe, it, expect } from 'vitest';
import { 
  validateSEOConfig, 
  validatePageSEOData, 
  analyzeKeywordDensity,
  validateHeadingHierarchy,
  checkReadability
} from '../utils/seoValidation';
import { 
  DEFAULT_SEO, 
  SITE_CONFIG, 
  generateCanonicalUrl, 
  generatePageTitle,
  generateMetaDescription
} from '../config/seo';
import { SEOConfig, PageSEOData } from '../types/seo';

describe('SEO Configuration', () => {
  it('should have valid default SEO configuration', () => {
    const validation = validateSEOConfig(DEFAULT_SEO);
    expect(validation.isValid).toBe(true);
    expect(validation.errors).toHaveLength(0);
  });

  it('should generate canonical URLs correctly', () => {
    const url = generateCanonicalUrl('/test-page');
    expect(url).toMatch(/^https?:\/\/.+\/test-page$/);
  });

  it('should generate page titles with templates', () => {
    const title = generatePageTitle('Test Page', 'lesson');
    expect(title).toBe('Test Page - Food Truck Lesson | DIY Food Truckers Union');
  });

  it('should generate meta descriptions with templates', () => {
    const description = generateMetaDescription('Learn about testing', 'testing', 'guide');
    expect(description).toBe('Complete guide to testing for food truck entrepreneurs. Learn about testing');
  });
});

describe('SEO Validation', () => {
  it('should validate SEO config with warnings for poor quality', () => {
    const poorConfig: SEOConfig = {
      title: 'Short', // Short title will generate warning
      description: 'Short description', // Short description will generate warning
      keywords: ['test']
    };

    const validation = validateSEOConfig(poorConfig);
    expect(validation.isValid).toBe(true); // Schema is valid, just has warnings
    expect(validation.warnings.length).toBeGreaterThan(0);
    expect(validation.score).toBeLessThan(100);
  });

  it('should validate page SEO data', () => {
    const validPageData: PageSEOData = {
      slug: 'test-page',
      title: 'Test Page',
      description: 'This is a test page for validation',
      keywords: ['test', 'validation', 'seo'],
      category: 'getting-started',
      lastUpdated: '2025-01-01'
    };

    const validation = validatePageSEOData(validPageData);
    expect(validation.isValid).toBe(true);
    expect(validation.errors).toHaveLength(0);
  });

  it('should analyze keyword density', () => {
    const content = 'This is a test content with test keywords. Testing is important for test quality.';
    const keywords = ['test', 'content'];
    
    const analysis = analyzeKeywordDensity(content, keywords);
    expect(analysis).toHaveLength(2);
    expect(analysis[0].keyword).toBe('test');
    expect(analysis[0].count).toBeGreaterThan(0);
    expect(analysis[0].density).toBeGreaterThan(0);
  });

  it('should validate heading hierarchy', () => {
    const validHeadings = [
      { level: 1, text: 'Main Title' },
      { level: 2, text: 'Section Title' },
      { level: 3, text: 'Subsection' }
    ];

    const validation = validateHeadingHierarchy(validHeadings);
    expect(validation.isValid).toBe(true);
    expect(validation.errors).toHaveLength(0);
  });

  it('should detect heading hierarchy issues', () => {
    const invalidHeadings = [
      { level: 2, text: 'Section Title' }, // Missing H1
      { level: 4, text: 'Subsection' } // Skip from H2 to H4
    ];

    const validation = validateHeadingHierarchy(invalidHeadings);
    expect(validation.isValid).toBe(false);
    expect(validation.errors.length).toBeGreaterThan(0);
  });

  it('should check content readability', () => {
    const content = 'This is a simple sentence. This is another sentence with more words to test readability.';
    
    const readability = checkReadability(content);
    expect(readability.wordCount).toBeGreaterThan(0);
    expect(readability.sentenceCount).toBe(2);
    expect(readability.averageWordsPerSentence).toBeGreaterThan(0);
    expect(['easy', 'moderate', 'difficult']).toContain(readability.level);
  });
});

describe('Site Configuration', () => {
  it('should have valid site configuration', () => {
    expect(SITE_CONFIG.name).toBeDefined();
    expect(SITE_CONFIG.url).toBeDefined();
    expect(SITE_CONFIG.description).toBeDefined();
  });

  it('should have proper URL format', () => {
    expect(SITE_CONFIG.url).toMatch(/^https?:\/\/.+/);
  });
});