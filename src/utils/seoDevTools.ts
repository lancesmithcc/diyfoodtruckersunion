import { SEOConfig, PerformanceMetrics } from '../types/seo';
import { validateSEOConfig, validateHeadingHierarchy, checkReadability } from './seoValidation';
import { SEOConfigLoader } from './seoConfigLoader';

/**
 * Development tools for SEO testing and debugging
 * Only available in development mode
 */

export class SEODevTools {
  private static instance: SEODevTools;
  private isEnabled: boolean;

  private constructor() {
    this.isEnabled = process.env.NODE_ENV === 'development';
  }

  public static getInstance(): SEODevTools {
    if (!SEODevTools.instance) {
      SEODevTools.instance = new SEODevTools();
    }
    return SEODevTools.instance;
  }

  /**
   * Logs SEO configuration validation results
   */
  public validateAndLogSEO(config: SEOConfig, pagePath: string): void {
    if (!this.isEnabled) return;

    const validation = validateSEOConfig(config);

    console.group(`🔍 SEO Validation: ${pagePath}`);
    console.log('Score:', validation.score);

    if (validation.errors.length > 0) {
      console.error('❌ Errors:', validation.errors);
    }

    if (validation.warnings.length > 0) {
      console.warn('⚠️ Warnings:', validation.warnings);
    }

    if (validation.suggestions.length > 0) {
      console.info('💡 Suggestions:', validation.suggestions);
    }

    console.groupEnd();
  }

  /**
   * Analyzes page content structure
   */
  public analyzePageStructure(): void {
    if (!this.isEnabled) return;

    // Extract headings from the page
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .map(heading => ({
        level: parseInt(heading.tagName.charAt(1)),
        text: heading.textContent || '',
        element: heading
      }));

    const headingValidation = validateHeadingHierarchy(headings);

    console.group('📋 Page Structure Analysis');
    console.log('Headings found:', headings.length);
    console.table(headings.map(h => ({ level: `H${h.level}`, text: h.text.substring(0, 50) })));

    if (!headingValidation.isValid) {
      console.error('❌ Heading Errors:', headingValidation.errors);
    }

    if (headingValidation.warnings.length > 0) {
      console.warn('⚠️ Heading Warnings:', headingValidation.warnings);
    }

    console.groupEnd();
  }

  /**
   * Checks meta tags in the document head
   */
  public analyzeMetaTags(): void {
    if (!this.isEnabled) return;

    const metaTags = Array.from(document.querySelectorAll('meta'))
      .map(meta => ({
        name: meta.getAttribute('name') || meta.getAttribute('property') || 'unknown',
        content: meta.getAttribute('content') || '',
        attribute: meta.getAttribute('name') ? 'name' : 'property'
      }));

    const title = document.querySelector('title')?.textContent || '';
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';

    console.group('🏷️ Meta Tags Analysis');
    console.log('Title:', title, `(${title.length} chars)`);
    console.log('Canonical:', canonical);
    console.table(metaTags);
    console.groupEnd();
  }

  /**
   * Analyzes structured data on the page
   */
  public analyzeStructuredData(): void {
    if (!this.isEnabled) return;

    const jsonLdScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));

    console.group('📊 Structured Data Analysis');
    console.log('JSON-LD scripts found:', jsonLdScripts.length);

    jsonLdScripts.forEach((script, index) => {
      try {
        const data = JSON.parse(script.textContent || '');
        console.log(`Schema ${index + 1}:`, data);
      } catch (error) {
        console.error(`Invalid JSON-LD in script ${index + 1}:`, error);
      }
    });

    console.groupEnd();
  }

  /**
   * Performs content readability analysis
   */
  public analyzeContentReadability(): void {
    if (!this.isEnabled) return;

    const mainContent = document.querySelector('main')?.textContent ||
      document.querySelector('article')?.textContent ||
      document.body.textContent || '';

    const readability = checkReadability(mainContent);

    console.group('📖 Content Readability Analysis');
    console.log('Word count:', readability.wordCount);
    console.log('Sentence count:', readability.sentenceCount);
    console.log('Average words per sentence:', readability.averageWordsPerSentence);
    console.log('Readability level:', readability.level);
    console.groupEnd();
  }

  /**
   * Checks internal links
   */
  public analyzeInternalLinks(): void {
    if (!this.isEnabled) return;

    const links = Array.from(document.querySelectorAll('a[href]'))
      .filter(link => {
        const href = link.getAttribute('href') || '';
        return href.startsWith('/') || href.includes(window.location.hostname);
      })
      .map(link => ({
        text: link.textContent?.trim() || '',
        href: link.getAttribute('href') || '',
        hasTitle: !!link.getAttribute('title'),
        isExternal: !link.getAttribute('href')?.startsWith('/')
      }));

    console.group('🔗 Internal Links Analysis');
    console.log('Internal links found:', links.length);
    console.table(links);

    const emptyLinks = links.filter(link => !link.text);
    if (emptyLinks.length > 0) {
      console.warn('⚠️ Links without text:', emptyLinks);
    }

    console.groupEnd();
  }

  /**
   * Monitors Core Web Vitals
   */
  public monitorCoreWebVitals(): void {
    if (!this.isEnabled) return;

    // Simple performance monitoring
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        // Check if entry has value property (for LCP, FID, CLS entries)
        const value = 'value' in entry ? (entry as any).value : entry.duration;
        console.log(`⚡ ${entry.name}:`, value);
      });
    });

    // Observe different performance metrics
    try {
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    } catch (error) {
      console.warn('Performance monitoring not fully supported:', error);
    }

    // Log basic timing information
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

        console.group('⚡ Performance Metrics');
        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        console.log('Load Complete:', navigation.loadEventEnd - navigation.loadEventStart);
        console.log('Total Load Time:', navigation.loadEventEnd - navigation.startTime);
        console.groupEnd();
      }, 1000);
    });
  }

  /**
   * Analyzes SEO configuration management system
   */
  public async analyzeConfigurationSystem(): Promise<void> {
    if (!this.isEnabled) return;

    try {
      const stats = await SEOConfigLoader.getStats();
      const validations = await SEOConfigLoader.validateAllConfigs();

      console.group('⚙️ Configuration System Analysis');
      console.log('Total pages configured:', stats.totalPages);
      console.log('Average SEO score:', stats.averageScore);
      console.log('Total issues:', stats.issueCount);
      console.log('Category distribution:', stats.categoryCounts);

      const failedValidations = validations.filter(v => !v.validation.isValid);
      if (failedValidations.length > 0) {
        console.warn('❌ Pages with validation errors:', failedValidations.length);
        failedValidations.forEach(({ slug, validation }) => {
          console.error(`${slug}:`, validation.errors);
        });
      }

      console.groupEnd();
    } catch (error) {
      console.error('Failed to analyze configuration system:', error);
    }
  }

  /**
   * Runs a complete SEO audit
   */
  public async runSEOAudit(): Promise<void> {
    if (!this.isEnabled) return;

    console.log('🚀 Running Complete SEO Audit...');

    this.analyzePageStructure();
    this.analyzeMetaTags();
    this.analyzeStructuredData();
    this.analyzeContentReadability();
    this.analyzeInternalLinks();
    await this.analyzeConfigurationSystem();
    this.monitorCoreWebVitals();

    console.log('✅ SEO Audit Complete');
  }

  /**
   * Creates a floating SEO debug panel
   */
  public createDebugPanel(): void {
    if (!this.isEnabled) return;

    // Remove existing panel if it exists
    const existingPanel = document.getElementById('seo-debug-panel');
    if (existingPanel) {
      existingPanel.remove();
    }

    const panel = document.createElement('div');
    panel.id = 'seo-debug-panel';
    panel.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      width: 300px;
      background: #1a1a1a;
      color: #fff;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 12px;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      max-height: 400px;
      overflow-y: auto;
    `;

    const title = document.createElement('h3');
    title.textContent = '🔍 SEO Debug Panel';
    title.style.cssText = 'margin: 0 0 10px 0; color: #4CAF50;';

    const auditButton = document.createElement('button');
    auditButton.textContent = 'Run SEO Audit';
    auditButton.style.cssText = `
      background: #4CAF50;
      color: white;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 10px;
      width: 100%;
    `;
    auditButton.onclick = () => this.runSEOAudit();

    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.cssText = `
      position: absolute;
      top: 5px;
      right: 10px;
      background: none;
      border: none;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
    `;
    closeButton.onclick = () => panel.remove();

    panel.appendChild(title);
    panel.appendChild(closeButton);
    panel.appendChild(auditButton);

    document.body.appendChild(panel);
  }
}

// Initialize SEO dev tools in development
if (process.env.NODE_ENV === 'development') {
  // Add keyboard shortcut to open debug panel
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
      e.preventDefault();
      SEODevTools.getInstance().createDebugPanel();
    }
  });

  // Auto-run audit on page load in development
  window.addEventListener('load', () => {
    setTimeout(() => {
      console.log('💡 Press Ctrl+Shift+S to open SEO Debug Panel');
    }, 1000);
  });
}