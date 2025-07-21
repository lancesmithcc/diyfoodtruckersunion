import { PageSEOData } from '../types/seo';
import { seoConfigManager } from './seoConfigManager';
import pagesConfig from '../config/pages-seo.json';

/**
 * Loads SEO configurations from JSON files and initializes the config manager
 */
export class SEOConfigLoader {
  private static isLoaded = false;

  /**
   * Load page configurations from JSON and initialize the config manager
   */
  public static async loadConfigurations(): Promise<void> {
    if (SEOConfigLoader.isLoaded) return;

    try {
      // Load page configurations from JSON
      const pageConfigs = pagesConfig as PageSEOData[];
      
      // Initialize the config manager with loaded data
      await seoConfigManager.initialize(pageConfigs);
      
      SEOConfigLoader.isLoaded = true;
      
      if (process.env.NODE_ENV === 'development') {
        console.log('SEO configurations loaded successfully');
        console.log('Config stats:', seoConfigManager.getStats());
      }
    } catch (error) {
      console.error('Failed to load SEO configurations:', error);
      
      // Initialize with empty config to enable fallback mechanisms
      await seoConfigManager.initialize([]);
      SEOConfigLoader.isLoaded = true;
    }
  }

  /**
   * Reload configurations (useful for development)
   */
  public static async reloadConfigurations(): Promise<void> {
    seoConfigManager.reset();
    SEOConfigLoader.isLoaded = false;
    await SEOConfigLoader.loadConfigurations();
  }

  /**
   * Get configuration for a specific page with automatic loading
   */
  public static async getPageConfig(slug: string, fallbackData?: Partial<PageSEOData>) {
    await SEOConfigLoader.loadConfigurations();
    return seoConfigManager.getPageSEO(slug, fallbackData);
  }

  /**
   * Add or update a page configuration
   */
  public static async setPageConfig(slug: string, pageData: PageSEOData) {
    await SEOConfigLoader.loadConfigurations();
    return seoConfigManager.setPageSEO(slug, pageData);
  }

  /**
   * Get all loaded configurations
   */
  public static async getAllConfigs() {
    await SEOConfigLoader.loadConfigurations();
    return seoConfigManager.getAllPageConfigs();
  }

  /**
   * Validate all configurations
   */
  public static async validateAllConfigs() {
    await SEOConfigLoader.loadConfigurations();
    return seoConfigManager.validateAllConfigs();
  }

  /**
   * Get configuration statistics
   */
  public static async getStats() {
    await SEOConfigLoader.loadConfigurations();
    return seoConfigManager.getStats();
  }
}

// Auto-load configurations when module is imported
SEOConfigLoader.loadConfigurations().catch(console.error);

export default SEOConfigLoader;