/**
 * SEO Infrastructure Setup
 * Initializes and configures all SEO-related systems
 */

import { SEODevTools } from './seoDevTools';
import { SEODevUtils, SEO_DEV_CONFIG } from '../config/seo-dev';
import { SEOConfigLoader } from './seoConfigLoader';

/**
 * SEO Setup Manager
 * Handles initialization and configuration of SEO infrastructure
 */
export class SEOSetup {
  private static instance: SEOSetup;
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): SEOSetup {
    if (!SEOSetup.instance) {
      SEOSetup.instance = new SEOSetup();
    }
    return SEOSetup.instance;
  }

  /**
   * Initialize SEO infrastructure
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) {
      SEODevUtils.log('SEO infrastructure already initialized', 'info');
      return;
    }

    SEODevUtils.mark('seo-init-start');
    SEODevUtils.log('🚀 Initializing SEO infrastructure...', 'info');

    try {
      // 1. Validate environment
      await this.validateEnvironment();

      // 2. Initialize configuration system
      await this.initializeConfigurationSystem();

      // 3. Set up development tools
      await this.initializeDevelopmentTools();

      // 4. Configure performance monitoring
      await this.initializePerformanceMonitoring();

      // 5. Set up error handling
      await this.initializeErrorHandling();

      this.isInitialized = true;
      SEODevUtils.mark('seo-init-end');
      SEODevUtils.measure('initialization', 'seo-init-start', 'seo-init-end');
      SEODevUtils.log('✅ SEO infrastructure initialized successfully', 'success');

    } catch (error) {
      SEODevUtils.log(`❌ Failed to initialize SEO infrastructure: ${error}`, 'error');
      throw error;
    }
  }

  /**
   * Validate environment and dependencies
   */
  private async validateEnvironment(): Promise<void> {
    SEODevUtils.log('🔍 Validating SEO environment...', 'info');

    // Check required dependencies
    const dependencies = [
      { name: 'React Helmet Async', check: () => typeof window !== 'undefined', critical: false },
      { name: 'Schema-DTS', check: () => true, critical: false }, // Already imported in types
      { name: 'Zod', check: () => true, critical: false }, // Already imported in validation
    ];

    const missingDeps = dependencies.filter(dep => !dep.check());
    if (missingDeps.length > 0) {
      const criticalMissing = missingDeps.filter(dep => dep.critical);
      if (criticalMissing.length > 0) {
        throw new Error(`Missing critical dependencies: ${criticalMissing.map(d => d.name).join(', ')}`);
      } else {
        SEODevUtils.log(`⚠️ Missing optional dependencies: ${missingDeps.map(d => d.name).join(', ')}`, 'warning');
      }
    }

    // Validate development environment
    if (SEO_DEV_CONFIG.enabled) {
      const envValid = SEODevUtils.validateEnvironment();
      if (!envValid) {
        SEODevUtils.log('⚠️ Some development features may not work properly', 'warning');
      }
    }

    SEODevUtils.log('✅ Environment validation complete', 'success');
  }

  /**
   * Initialize SEO configuration system
   */
  private async initializeConfigurationSystem(): Promise<void> {
    SEODevUtils.log('⚙️ Initializing configuration system...', 'info');

    try {
      // Load and validate all SEO configurations
      const stats = await SEOConfigLoader.getStats();
      SEODevUtils.log(`📊 Loaded ${stats.totalPages} page configurations`, 'info');

      // Validate configurations
      const validations = await SEOConfigLoader.validateAllConfigs();
      const invalidConfigs = validations.filter(v => !v.validation.isValid);
      
      if (invalidConfigs.length > 0) {
        SEODevUtils.log(`⚠️ Found ${invalidConfigs.length} invalid configurations`, 'warning');
        invalidConfigs.forEach(({ slug, validation }) => {
          SEODevUtils.log(`  - ${slug}: ${validation.errors.join(', ')}`, 'warning');
        });
      }

      SEODevUtils.log('✅ Configuration system initialized', 'success');
    } catch (error) {
      SEODevUtils.log(`❌ Configuration system initialization failed: ${error}`, 'error');
      throw error;
    }
  }

  /**
   * Initialize development tools
   */
  private async initializeDevelopmentTools(): Promise<void> {
    if (!SEO_DEV_CONFIG.enabled) {
      SEODevUtils.log('🔧 Development tools disabled in production', 'info');
      return;
    }

    SEODevUtils.log('🔧 Initializing development tools...', 'info');

    try {
      const devTools = SEODevTools.getInstance();

      // Set up keyboard shortcuts
      this.setupKeyboardShortcuts();

      // Initialize performance monitoring
      devTools.monitorCoreWebVitals();

      // Set up automatic page analysis
      this.setupAutomaticAnalysis();

      SEODevUtils.log('✅ Development tools initialized', 'success');
    } catch (error) {
      SEODevUtils.log(`❌ Development tools initialization failed: ${error}`, 'error');
      // Don't throw - development tools are not critical
    }
  }

  /**
   * Initialize performance monitoring
   */
  private async initializePerformanceMonitoring(): Promise<void> {
    SEODevUtils.log('⚡ Initializing performance monitoring...', 'info');

    try {
      // Set up Core Web Vitals monitoring
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            this.handlePerformanceEntry(entry);
          });
        });

        // Observe different performance metrics
        const entryTypes = ['navigation', 'paint', 'largest-contentful-paint', 'first-input'];
        entryTypes.forEach(type => {
          try {
            observer.observe({ entryTypes: [type] });
          } catch (error) {
            // Entry type not supported
          }
        });
      }

      SEODevUtils.log('✅ Performance monitoring initialized', 'success');
    } catch (error) {
      SEODevUtils.log(`❌ Performance monitoring initialization failed: ${error}`, 'error');
      // Don't throw - performance monitoring is not critical
    }
  }

  /**
   * Initialize error handling for SEO operations
   */
  private async initializeErrorHandling(): Promise<void> {
    SEODevUtils.log('🛡️ Initializing error handling...', 'info');

    // Set up global error handler for SEO-related errors
    if (typeof window !== 'undefined') {
      const originalError = window.onerror;
      window.onerror = (message, source, lineno, colno, error) => {
        // Check if error is SEO-related
        if (typeof message === 'string' && (
          message.includes('seo') || 
          message.includes('helmet') || 
          message.includes('meta')
        )) {
          SEODevUtils.log(`🚨 SEO Error: ${message}`, 'error');
        }

        // Call original error handler
        if (originalError) {
          return originalError(message, source, lineno, colno, error);
        }
        return false;
      };
    }

    SEODevUtils.log('✅ Error handling initialized', 'success');
  }

  /**
   * Set up keyboard shortcuts for development
   */
  private setupKeyboardShortcuts(): void {
    if (typeof document === 'undefined') return;

    document.addEventListener('keydown', (e) => {
      // Ctrl+Shift+S: Open SEO debug panel
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        SEODevTools.getInstance().createDebugPanel();
      }

      // Ctrl+Shift+A: Run SEO audit
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        SEODevTools.getInstance().runSEOAudit();
      }

      // Ctrl+Shift+H: Analyze page structure
      if (e.ctrlKey && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        SEODevTools.getInstance().analyzePageStructure();
      }
    });

    SEODevUtils.log('⌨️ Keyboard shortcuts registered:', 'info');
    SEODevUtils.log('  - Ctrl+Shift+S: Open debug panel', 'debug');
    SEODevUtils.log('  - Ctrl+Shift+A: Run SEO audit', 'debug');
    SEODevUtils.log('  - Ctrl+Shift+H: Analyze page structure', 'debug');
  }

  /**
   * Set up automatic page analysis
   */
  private setupAutomaticAnalysis(): void {
    if (typeof window === 'undefined') return;

    // Analyze page on load
    window.addEventListener('load', () => {
      setTimeout(() => {
        const health = SEODevUtils.getPageSEOHealth();
        if (health.score < SEO_DEV_CONFIG.validation.warningThreshold) {
          SEODevUtils.log(`⚠️ Page SEO score: ${health.score}/100`, 'warning');
          if (health.issues.length > 0) {
            SEODevUtils.log(`Issues: ${health.issues.join(', ')}`, 'warning');
          }
        } else {
          SEODevUtils.log(`✅ Page SEO score: ${health.score}/100`, 'success');
        }
      }, 1000);
    });

    // Analyze on route changes (for SPAs)
    let currentPath = window.location.pathname;
    const checkRouteChange = () => {
      if (window.location.pathname !== currentPath) {
        currentPath = window.location.pathname;
        setTimeout(() => {
          SEODevUtils.log(`🔄 Route changed to: ${currentPath}`, 'info');
          const health = SEODevUtils.getPageSEOHealth();
          SEODevUtils.log(`SEO score: ${health.score}/100`, health.score >= 90 ? 'success' : 'warning');
        }, 500);
      }
    };

    // Check for route changes periodically
    setInterval(checkRouteChange, 1000);
  }

  /**
   * Handle performance entries
   */
  private handlePerformanceEntry(entry: PerformanceEntry): void {
    const { name, entryType } = entry;

    switch (entryType) {
      case 'navigation':
        const navEntry = entry as PerformanceNavigationTiming;
        const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
        if (loadTime > 3000) {
          SEODevUtils.log(`⚠️ Slow page load: ${loadTime}ms`, 'warning');
        }
        break;

      case 'largest-contentful-paint':
        const lcpEntry = entry as PerformanceEntry & { value: number };
        if (lcpEntry.value > SEO_DEV_CONFIG.performance.lcp.needsImprovement) {
          SEODevUtils.log(`⚠️ Poor LCP: ${lcpEntry.value}ms`, 'warning');
        }
        break;

      case 'first-input':
        const fidEntry = entry as PerformanceEntry & { processingStart: number; startTime: number };
        const fid = fidEntry.processingStart - fidEntry.startTime;
        if (fid > SEO_DEV_CONFIG.performance.fid.needsImprovement) {
          SEODevUtils.log(`⚠️ Poor FID: ${fid}ms`, 'warning');
        }
        break;
    }
  }

  /**
   * Get initialization status
   */
  public isReady(): boolean {
    return this.isInitialized;
  }

  /**
   * Reset SEO infrastructure (for testing)
   */
  public reset(): void {
    this.isInitialized = false;
    SEODevUtils.log('🔄 SEO infrastructure reset', 'info');
  }
}

/**
 * Initialize SEO infrastructure on module load
 */
export const initializeSEO = async (): Promise<void> => {
  const setup = SEOSetup.getInstance();
  await setup.initialize();
};

// Auto-initialize in browser environment
if (typeof window !== 'undefined') {
  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSEO);
  } else {
    initializeSEO();
  }
}

export default SEOSetup;