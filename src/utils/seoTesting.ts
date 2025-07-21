/**
 * SEO Testing Utilities
 * Provides testing helpers and mock data for SEO development
 */

import { SEOConfig, PageSEOData, SEOValidationResult } from '../types/seo';
import { validateSEOConfig, validatePageSEOData } from './seoValidation';
import { SEO_DEV_CONFIG } from '../config/seo-dev';

/**
 * SEO Testing Helper Class
 */
export class SEOTesting {
  /**
   * Create mock SEO configuration for testing
   */
  public static createMockSEOConfig(overrides: Partial<SEOConfig> = {}): SEOConfig {
    return {
      title: 'Test Food Truck Business Guide',
      description: 'Learn how to start and run a successful food truck business with our comprehensive testing guide.',
      keywords: ['food truck', 'business', 'startup', 'testing'],
      canonical: 'https://example.com/test-page',
      openGraph: {
        title: 'Test Food Truck Business Guide',
        description: 'Learn how to start and run a successful food truck business.',
        type: 'article',
        url: 'https://example.com/test-page',
        image: 'https://example.com/test-image.jpg',
        siteName: 'DIY Food Truckers Union',
        locale: 'en_US'
      },
      twitterCard: {
        card: 'summary_large_image',
        site: '@diyfoodtruckers',
        title: 'Test Food Truck Business Guide',
        description: 'Learn how to start and run a successful food truck business.',
        image: 'https://example.com/test-image.jpg'
      },
      structuredData: [],
      noIndex: false,
      noFollow: false,
      ...overrides
    };
  }

  /**
   * Create mock page SEO data for testing
   */
  public static createMockPageSEOData(overrides: Partial<PageSEOData> = {}): PageSEOData {
    return {
      slug: 'test-page',
      title: 'Test Food Truck Business Guide',
      description: 'Learn how to start and run a successful food truck business with our comprehensive testing guide.',
      keywords: ['food truck', 'business', 'startup', 'testing'],
      category: 'getting-started',
      difficulty: 'beginner',
      estimatedReadTime: 5,
      lastUpdated: new Date().toISOString(),
      author: {
        name: 'Test Author',
        url: 'https://example.com/author',
        description: 'Expert in food truck business'
      },
      relatedPages: ['related-page-1', 'related-page-2'],
      breadcrumbs: [
        { name: 'Home', url: '/', position: 1 },
        { name: 'Getting Started', url: '/getting-started', position: 2 },
        { name: 'Test Page', url: '/test-page', position: 3 }
      ],
      structuredData: [],
      ...overrides
    };
  }

  /**
   * Create test DOM environment
   */
  public static setupTestDOM(config: {
    title?: string;
    description?: string;
    headings?: Array<{ level: number; text: string }>;
    canonical?: string;
    metaTags?: Array<{ name: string; content: string }>;
  } = {}): void {
    // Set title
    if (config.title) {
      document.title = config.title;
    }

    // Set meta description
    if (config.description) {
      let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = config.description;
    }

    // Add custom meta tags
    if (config.metaTags) {
      config.metaTags.forEach(({ name, content }) => {
        let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement('meta');
          meta.name = name;
          document.head.appendChild(meta);
        }
        meta.content = content;
      });
    }

    // Add headings
    if (config.headings) {
      const container = document.createElement('div');
      container.id = 'seo-test-content';
      
      config.headings.forEach(({ level, text }) => {
        const heading = document.createElement(`h${level}`);
        heading.textContent = text;
        container.appendChild(heading);
      });
      
      document.body.appendChild(container);
    }

    // Set canonical URL
    if (config.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = config.canonical;
    }
  }

  /**
   * Clean up test DOM
   */
  public static cleanupTestDOM(): void {
    // Remove test content
    const testContent = document.getElementById('seo-test-content');
    if (testContent) {
      testContent.remove();
    }

    // Remove test meta tags
    const testMetas = document.querySelectorAll('meta[data-test="true"]');
    testMetas.forEach(meta => meta.remove());

    // Remove test canonical
    const testCanonical = document.querySelector('link[rel="canonical"][data-test="true"]');
    if (testCanonical) {
      testCanonical.remove();
    }
  }

  /**
   * Run comprehensive SEO test suite
   */
  public static async runTestSuite(): Promise<{
    passed: number;
    failed: number;
    results: Array<{
      test: string;
      passed: boolean;
      message: string;
    }>;
  }> {
    const results: Array<{ test: string; passed: boolean; message: string }> = [];

    // Test 1: SEO Config Validation
    try {
      const mockConfig = this.createMockSEOConfig();
      const validation = validateSEOConfig(mockConfig);
      results.push({
        test: 'SEO Config Validation',
        passed: validation.isValid,
        message: validation.isValid ? 'Valid configuration' : validation.errors.join(', ')
      });
    } catch (error) {
      results.push({
        test: 'SEO Config Validation',
        passed: false,
        message: `Error: ${error}`
      });
    }

    // Test 2: Page SEO Data Validation
    try {
      const mockPageData = this.createMockPageSEOData();
      const validation = validatePageSEOData(mockPageData);
      results.push({
        test: 'Page SEO Data Validation',
        passed: validation.isValid,
        message: validation.isValid ? 'Valid page data' : validation.errors.join(', ')
      });
    } catch (error) {
      results.push({
        test: 'Page SEO Data Validation',
        passed: false,
        message: `Error: ${error}`
      });
    }

    // Test 3: DOM Structure Test
    try {
      this.setupTestDOM({
        title: 'Test Page',
        description: 'Test description',
        headings: [
          { level: 1, text: 'Main Heading' },
          { level: 2, text: 'Sub Heading' }
        ],
        canonical: 'https://example.com/test'
      });

      const hasTitle = !!document.title;
      const hasDescription = !!document.querySelector('meta[name="description"]');
      const hasH1 = document.querySelectorAll('h1').length === 1;
      const hasCanonical = !!document.querySelector('link[rel="canonical"]');

      const domTestPassed = hasTitle && hasDescription && hasH1 && hasCanonical;
      
      results.push({
        test: 'DOM Structure Test',
        passed: domTestPassed,
        message: domTestPassed ? 'DOM structure is valid' : 'DOM structure issues detected'
      });

      this.cleanupTestDOM();
    } catch (error) {
      results.push({
        test: 'DOM Structure Test',
        passed: false,
        message: `Error: ${error}`
      });
    }

    // Test 4: Configuration System Test
    try {
      const testConfig = this.createMockSEOConfig({
        title: 'A'.repeat(70), // Too long
        description: 'Short' // Too short
      });
      
      const validation = validateSEOConfig(testConfig);
      const hasExpectedErrors = validation.errors.some(error => 
        error.includes('Title should be under 60 characters')
      );

      results.push({
        test: 'Configuration Validation Test',
        passed: !validation.isValid && hasExpectedErrors,
        message: hasExpectedErrors ? 'Validation correctly caught errors' : 'Validation did not catch expected errors'
      });
    } catch (error) {
      results.push({
        test: 'Configuration Validation Test',
        passed: false,
        message: `Error: ${error}`
      });
    }

    // Calculate summary
    const passed = results.filter(r => r.passed).length;
    const failed = results.filter(r => !r.passed).length;

    return { passed, failed, results };
  }

  /**
   * Generate test report
   */
  public static async generateTestReport(): Promise<string> {
    const testResults = await this.runTestSuite();
    
    let report = '# SEO Testing Report\n\n';
    report += `**Summary:** ${testResults.passed} passed, ${testResults.failed} failed\n\n`;
    
    report += '## Test Results\n\n';
    testResults.results.forEach(result => {
      const status = result.passed ? '✅' : '❌';
      report += `${status} **${result.test}**: ${result.message}\n\n`;
    });

    report += '## Recommendations\n\n';
    if (testResults.failed > 0) {
      report += '- Review failed tests and fix underlying issues\n';
      report += '- Run tests again after making changes\n';
    } else {
      report += '- All tests passed! SEO infrastructure is working correctly\n';
    }

    return report;
  }

  /**
   * Performance testing utilities
   */
  public static measureSEOPerformance<T>(
    operation: () => T,
    operationName: string
  ): { result: T; duration: number } {
    const startTime = performance.now();
    const result = operation();
    const endTime = performance.now();
    const duration = endTime - startTime;

    if (SEO_DEV_CONFIG.enabled) {
      console.log(`⚡ ${operationName}: ${duration.toFixed(2)}ms`);
    }

    return { result, duration };
  }

  /**
   * Async performance testing utilities
   */
  public static async measureSEOPerformanceAsync<T>(
    operation: () => Promise<T>,
    operationName: string
  ): Promise<{ result: T; duration: number }> {
    const startTime = performance.now();
    const result = await operation();
    const endTime = performance.now();
    const duration = endTime - startTime;

    if (SEO_DEV_CONFIG.enabled) {
      console.log(`⚡ ${operationName}: ${duration.toFixed(2)}ms`);
    }

    return { result, duration };
  }

  /**
   * Create test scenarios for different page types
   */
  public static getTestScenarios(): Array<{
    name: string;
    config: SEOConfig;
    expectedScore: number;
  }> {
    return [
      {
        name: 'Perfect SEO Page',
        config: this.createMockSEOConfig({
          title: 'Complete Food Truck Business Guide - Start Smart',
          description: 'Learn everything you need to know about starting and running a successful food truck business. From permits to profits, we cover it all.',
          keywords: ['food truck business', 'mobile food', 'startup guide', 'entrepreneur'],
          canonical: 'https://diyfoodtruckersunion.com/complete-guide'
        }),
        expectedScore: 100
      },
      {
        name: 'Minimal SEO Page',
        config: this.createMockSEOConfig({
          title: 'Food Truck Guide',
          description: 'Basic food truck information.',
          keywords: ['food truck'],
          openGraph: undefined,
          twitterCard: undefined
        }),
        expectedScore: 70
      },
      {
        name: 'Poor SEO Page',
        config: this.createMockSEOConfig({
          title: 'Guide',
          description: 'Info.',
          keywords: [],
          canonical: undefined,
          openGraph: undefined,
          twitterCard: undefined
        }),
        expectedScore: 40
      }
    ];
  }
}

// Export for testing
export default SEOTesting;