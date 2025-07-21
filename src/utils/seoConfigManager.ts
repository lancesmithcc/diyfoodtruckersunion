import { SEOConfig, PageSEOData, SEOValidationResult } from '../types/seo';
import { validateSEOConfig, validatePageSEOData } from './seoValidation';
import { 
  DEFAULT_SEO, 
  SITE_CONFIG, 
  DEFAULT_AUTHOR, 
  SEO_TEMPLATES, 
  CATEGORY_SEO,
  generateCanonicalUrl,
  generatePageTitle,
  generateMetaDescription
} from '../config/seo';

/**
 * Configuration manager for SEO data with JSON-based storage and fallback mechanisms
 */
export class SEOConfigManager {
  private static instance: SEOConfigManager;
  private pageConfigs: Map<string, PageSEOData> = new Map();
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): SEOConfigManager {
    if (!SEOConfigManager.instance) {
      SEOConfigManager.instance = new SEOConfigManager();
    }
    return SEOConfigManager.instance;
  }

  /**
   * Initialize the configuration manager with page data
   */
  public async initialize(pageConfigs?: PageSEOData[]): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Load page configurations (in a real app, this might come from a CMS or JSON files)
      if (pageConfigs) {
        pageConfigs.forEach(config => {
          this.pageConfigs.set(config.slug, config);
        });
      }

      this.isInitialized = true;
    } catch (error) {
      console.warn('Failed to initialize SEO config manager:', error);
      this.isInitialized = true; // Continue with fallbacks
    }
  }

  /**
   * Get SEO configuration for a specific page
   */
  public getPageSEO(slug: string, fallbackData?: Partial<PageSEOData>): SEOConfig {
    const pageData = this.pageConfigs.get(slug) || this.generateFallbackPageData(slug, fallbackData);
    return this.convertPageDataToSEOConfig(pageData);
  }

  /**
   * Set or update SEO configuration for a page
   */
  public setPageSEO(slug: string, pageData: PageSEOData): SEOValidationResult {
    const validation = validatePageSEOData(pageData);
    
    if (validation.isValid || validation.errors.length === 0) {
      this.pageConfigs.set(slug, pageData);
    }
    
    return validation;
  }

  /**
   * Get all page configurations
   */
  public getAllPageConfigs(): PageSEOData[] {
    return Array.from(this.pageConfigs.values());
  }

  /**
   * Generate fallback page data when no configuration exists
   */
  private generateFallbackPageData(slug: string, fallbackData?: Partial<PageSEOData>): PageSEOData {
    const category = this.inferCategoryFromSlug(slug);
    const categoryConfig = CATEGORY_SEO[category];
    
    return {
      slug,
      title: fallbackData?.title || categoryConfig?.title || 'Food Truck Business Guide',
      description: fallbackData?.description || categoryConfig?.description || 'Learn about food truck business with our comprehensive guides.',
      keywords: fallbackData?.keywords || categoryConfig?.keywords || DEFAULT_SEO.keywords || [],
      category,
      lastUpdated: new Date().toISOString(),
      author: DEFAULT_AUTHOR,
      ...fallbackData
    };
  }

  /**
   * Convert PageSEOData to SEOConfig
   */
  private convertPageDataToSEOConfig(pageData: PageSEOData): SEOConfig {
    const baseUrl = SITE_CONFIG.url;
    const pageUrl = generateCanonicalUrl(pageData.slug);
    const pageType = this.getPageTypeFromCategory(pageData.category);

    return {
      title: generatePageTitle(pageData.title, pageType),
      description: pageData.description,
      keywords: [
        ...pageData.keywords,
        ...(SEO_TEMPLATES[pageType]?.keywords || []),
        ...(CATEGORY_SEO[pageData.category]?.keywords || [])
      ],
      canonical: pageUrl,
      openGraph: {
        ...DEFAULT_SEO.openGraph,
        title: pageData.title,
        description: pageData.description,
        url: pageUrl,
        type: pageType === 'lesson' || pageType === 'guide' ? 'article' : 'website',
        image: `${baseUrl}/img/og-${pageData.category}.jpg`,
        siteName: SITE_CONFIG.name
      },
      twitterCard: {
        ...DEFAULT_SEO.twitterCard,
        title: pageData.title,
        description: pageData.description,
        image: `${baseUrl}/img/twitter-${pageData.category}.jpg`
      },
      structuredData: pageData.structuredData || [],
      noIndex: false,
      noFollow: false
    };
  }

  /**
   * Infer category from slug
   */
  private inferCategoryFromSlug(slug: string): PageSEOData['category'] {
    if (slug.includes('getting-started') || slug.includes('startup')) return 'getting-started';
    if (slug.includes('operations') || slug.includes('management')) return 'operations';
    if (slug.includes('financial') || slug.includes('money') || slug.includes('budget')) return 'financial';
    if (slug.includes('marketing') || slug.includes('promotion')) return 'marketing';
    if (slug.includes('community') || slug.includes('discord')) return 'community';
    if (slug.includes('resources') || slug.includes('tools')) return 'resources';
    return 'getting-started'; // Default fallback
  }

  /**
   * Get page type from category
   */
  private getPageTypeFromCategory(category: PageSEOData['category']): keyof typeof SEO_TEMPLATES {
    switch (category) {
      case 'getting-started':
      case 'operations':
      case 'financial':
        return 'lesson';
      case 'marketing':
        return 'guide';
      case 'resources':
        return 'resource';
      case 'community':
      default:
        return 'landing';
    }
  }

  /**
   * Validate all stored configurations
   */
  public validateAllConfigs(): { slug: string; validation: SEOValidationResult }[] {
    return Array.from(this.pageConfigs.entries()).map(([slug, config]) => ({
      slug,
      validation: validatePageSEOData(config)
    }));
  }

  /**
   * Get configuration statistics
   */
  public getStats(): {
    totalPages: number;
    categoryCounts: Record<string, number>;
    averageScore: number;
    issueCount: number;
  } {
    const configs = this.getAllPageConfigs();
    const validations = this.validateAllConfigs();
    
    const categoryCounts = configs.reduce((acc, config) => {
      acc[config.category] = (acc[config.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const averageScore = validations.reduce((sum, { validation }) => sum + validation.score, 0) / validations.length || 0;
    const issueCount = validations.reduce((sum, { validation }) => sum + validation.errors.length + validation.warnings.length, 0);

    return {
      totalPages: configs.length,
      categoryCounts,
      averageScore: Math.round(averageScore),
      issueCount
    };
  }

  /**
   * Export configurations as JSON
   */
  public exportConfigs(): string {
    const configs = this.getAllPageConfigs();
    return JSON.stringify(configs, null, 2);
  }

  /**
   * Import configurations from JSON
   */
  public importConfigs(jsonData: string): { success: boolean; errors: string[] } {
    try {
      const configs: PageSEOData[] = JSON.parse(jsonData);
      const errors: string[] = [];

      configs.forEach(config => {
        const validation = validatePageSEOData(config);
        if (validation.isValid) {
          this.pageConfigs.set(config.slug, config);
        } else {
          errors.push(`${config.slug}: ${validation.errors.join(', ')}`);
        }
      });

      return { success: errors.length === 0, errors };
    } catch (error) {
      return { success: false, errors: ['Invalid JSON format'] };
    }
  }

  /**
   * Clear all configurations
   */
  public clearConfigs(): void {
    this.pageConfigs.clear();
  }

  /**
   * Reset to default state
   */
  public reset(): void {
    this.clearConfigs();
    this.isInitialized = false;
  }
}

// Export singleton instance
export const seoConfigManager = SEOConfigManager.getInstance();