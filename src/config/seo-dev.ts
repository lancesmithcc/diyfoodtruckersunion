/**
 * SEO Development Configuration
 * Settings and utilities for SEO development and testing
 */

export const SEO_DEV_CONFIG = {
  // Enable/disable SEO development tools
  enabled: process.env.NODE_ENV === 'development',
  
  // Debug panel settings
  debugPanel: {
    position: 'top-right' as 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left',
    autoShow: false,
    keyboardShortcut: 'Ctrl+Shift+S'
  },
  
  // Validation settings
  validation: {
    // Minimum content quality scores
    minTitleLength: 30,
    maxTitleLength: 60,
    minDescriptionLength: 120,
    maxDescriptionLength: 160,
    minKeywords: 3,
    maxKeywords: 10,
    
    // Content quality thresholds
    minWordCount: 300,
    maxWordsPerSentence: 25,
    
    // SEO score thresholds
    minSEOScore: 80,
    warningThreshold: 90
  },
  
  // Performance monitoring
  performance: {
    // Core Web Vitals thresholds (in milliseconds)
    lcp: {
      good: 2500,
      needsImprovement: 4000
    },
    fid: {
      good: 100,
      needsImprovement: 300
    },
    cls: {
      good: 0.1,
      needsImprovement: 0.25
    }
  },
  
  // Testing configuration
  testing: {
    // Mock data for testing
    mockSEOConfig: {
      title: 'Test Page Title',
      description: 'This is a test page description for SEO validation testing purposes.',
      keywords: ['test', 'seo', 'validation']
    },
    
    // Test URLs
    testUrls: [
      '/',
      '/getting-started',
      '/operations',
      '/financial-management',
      '/marketing-growth',
      '/resources',
      '/community'
    ]
  },
  
  // Console styling for development logs
  consoleStyles: {
    success: 'color: #4CAF50; font-weight: bold;',
    warning: 'color: #FF9800; font-weight: bold;',
    error: 'color: #F44336; font-weight: bold;',
    info: 'color: #2196F3; font-weight: bold;',
    debug: 'color: #9E9E9E;'
  }
};

/**
 * SEO Development Utilities
 */
export class SEODevUtils {
  /**
   * Logs a styled message to console (development only)
   */
  static log(message: string, type: keyof typeof SEO_DEV_CONFIG.consoleStyles = 'info'): void {
    if (!SEO_DEV_CONFIG.enabled) return;
    
    const style = SEO_DEV_CONFIG.consoleStyles[type];
    console.log(`%c${message}`, style);
  }
  
  /**
   * Creates a performance mark for SEO operations
   */
  static mark(name: string): void {
    if (!SEO_DEV_CONFIG.enabled) return;
    
    try {
      performance.mark(`seo-${name}`);
    } catch (error) {
      // Performance API not available
    }
  }
  
  /**
   * Measures time between two SEO performance marks
   */
  static measure(name: string, startMark: string, endMark?: string): void {
    if (!SEO_DEV_CONFIG.enabled) return;
    
    try {
      performance.measure(
        `seo-${name}`,
        `seo-${startMark}`,
        endMark ? `seo-${endMark}` : undefined
      );
      
      const measure = performance.getEntriesByName(`seo-${name}`)[0];
      this.log(`⚡ ${name}: ${measure.duration.toFixed(2)}ms`, 'debug');
    } catch (error) {
      // Performance API not available or marks don't exist
    }
  }
  
  /**
   * Validates environment for SEO development
   */
  static validateEnvironment(): boolean {
    if (!SEO_DEV_CONFIG.enabled) return false;
    
    const checks = [
      { name: 'React Helmet Async', check: () => !!window.document },
      { name: 'Performance API', check: () => !!window.performance },
      { name: 'Console API', check: () => !!window.console },
      { name: 'Local Storage', check: () => !!window.localStorage }
    ];
    
    const results = checks.map(({ name, check }) => {
      const passed = check();
      this.log(`${passed ? '✅' : '❌'} ${name}`, passed ? 'success' : 'error');
      return passed;
    });
    
    return results.every(Boolean);
  }
  
  /**
   * Gets current page SEO health score
   */
  static getPageSEOHealth(): {
    score: number;
    issues: string[];
    recommendations: string[];
  } {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let score = 100;
    
    // Check title
    const title = document.title;
    if (!title) {
      issues.push('Missing page title');
      score -= 20;
    } else if (title.length < SEO_DEV_CONFIG.validation.minTitleLength) {
      issues.push('Title too short');
      score -= 10;
    } else if (title.length > SEO_DEV_CONFIG.validation.maxTitleLength) {
      issues.push('Title too long');
      score -= 10;
    }
    
    // Check meta description
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
    if (!description) {
      issues.push('Missing meta description');
      score -= 20;
    } else if (description.length < SEO_DEV_CONFIG.validation.minDescriptionLength) {
      recommendations.push('Consider lengthening meta description');
      score -= 5;
    }
    
    // Check headings
    const h1Count = document.querySelectorAll('h1').length;
    if (h1Count === 0) {
      issues.push('Missing H1 tag');
      score -= 15;
    } else if (h1Count > 1) {
      issues.push('Multiple H1 tags found');
      score -= 10;
    }
    
    // Check canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      recommendations.push('Add canonical URL');
      score -= 5;
    }
    
    // Check structured data
    const jsonLd = document.querySelectorAll('script[type="application/ld+json"]');
    if (jsonLd.length === 0) {
      recommendations.push('Add structured data (JSON-LD)');
      score -= 10;
    }
    
    return { score: Math.max(0, score), issues, recommendations };
  }
}

/**
 * SEO Testing Helpers
 */
export class SEOTestHelpers {
  /**
   * Creates a mock DOM environment for testing
   */
  static createMockDOM(config: {
    title?: string;
    description?: string;
    headings?: Array<{ level: number; text: string }>;
    canonical?: string;
  } = {}): void {
    if (!SEO_DEV_CONFIG.enabled) return;
    
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
   * Cleans up mock DOM elements
   */
  static cleanupMockDOM(): void {
    if (!SEO_DEV_CONFIG.enabled) return;
    
    const testContent = document.getElementById('seo-test-content');
    if (testContent) {
      testContent.remove();
    }
  }
  
  /**
   * Simulates page navigation for testing
   */
  static simulateNavigation(path: string): void {
    if (!SEO_DEV_CONFIG.enabled) return;
    
    // Update URL without actually navigating
    window.history.pushState({}, '', path);
    
    // Dispatch navigation event
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}

// Export configuration for external use
export default SEO_DEV_CONFIG;