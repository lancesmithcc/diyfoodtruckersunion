import { PageSEOData } from '../types/seo';

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface SitemapConfig {
  baseUrl: string;
  urls: SitemapUrl[];
  includeImages?: boolean;
  includeNews?: boolean;
}

/**
 * Generate XML sitemap for better search engine indexing
 */
export class SitemapGenerator {
  private config: SitemapConfig;

  constructor(config: SitemapConfig) {
    this.config = config;
  }

  /**
   * Generate XML sitemap string
   */
  generateXML(): string {
    const { baseUrl, urls } = this.config;
    
    const xmlUrls = urls.map(url => {
      const loc = url.loc.startsWith('http') ? url.loc : `${baseUrl}${url.loc}`;
      const lastmod = url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : '';
      const changefreq = url.changefreq ? `\n    <changefreq>${url.changefreq}</changefreq>` : '';
      const priority = url.priority ? `\n    <priority>${url.priority}</priority>` : '';
      
      return `  <url>
    <loc>${loc}</loc>${lastmod}${changefreq}${priority}
  </url>`;
    }).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
  }

  /**
   * Generate sitemap from page SEO data
   */
  static fromPageData(baseUrl: string, pages: PageSEOData[]): SitemapGenerator {
    const urls: SitemapUrl[] = pages.map(page => ({
      loc: page.slug,
      lastmod: page.lastUpdated,
      changefreq: this.getChangeFreqForCategory(page.category),
      priority: this.getPriorityForCategory(page.category)
    }));

    return new SitemapGenerator({ baseUrl, urls });
  }

  /**
   * Get change frequency based on page category
   */
  private static getChangeFreqForCategory(category: PageSEOData['category']): SitemapUrl['changefreq'] {
    switch (category) {
      case 'getting-started':
        return 'monthly';
      case 'operations':
        return 'weekly';
      case 'financial':
        return 'monthly';
      case 'marketing':
        return 'weekly';
      case 'resources':
        return 'monthly';
      case 'community':
        return 'daily';
      default:
        return 'monthly';
    }
  }

  /**
   * Get priority based on page category
   */
  private static getPriorityForCategory(category: PageSEOData['category']): number {
    switch (category) {
      case 'getting-started':
        return 1.0;
      case 'operations':
        return 0.9;
      case 'financial':
        return 0.8;
      case 'marketing':
        return 0.8;
      case 'resources':
        return 0.7;
      case 'community':
        return 0.6;
      default:
        return 0.5;
    }
  }

  /**
   * Save sitemap to file (for Node.js environments)
   */
  async saveToFile(filePath: string): Promise<void> {
    if (typeof window !== 'undefined') {
      throw new Error('saveToFile is only available in Node.js environments');
    }

    const fs = await import('fs/promises');
    const xml = this.generateXML();
    await fs.writeFile(filePath, xml, 'utf-8');
  }

  /**
   * Generate sitemap index for multiple sitemaps
   */
  static generateSitemapIndex(baseUrl: string, sitemaps: string[]): string {
    const sitemapUrls = sitemaps.map(sitemap => {
      const loc = sitemap.startsWith('http') ? sitemap : `${baseUrl}${sitemap}`;
      return `  <sitemap>
    <loc>${loc}</loc>
  </sitemap>`;
    }).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</sitemapindex>`;
  }
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt(baseUrl: string, sitemapUrl?: string): string {
  const sitemapLine = sitemapUrl ? `\nSitemap: ${sitemapUrl}` : '';
  
  return `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Allow important pages
Allow: /getting-started/
Allow: /operations/
Allow: /financial-management/
Allow: /marketing-growth/
Allow: /resources/
Allow: /community/

# Crawl delay (optional)
Crawl-delay: 1${sitemapLine}`;
}

/**
 * Generate sitemap for specific page types
 */
export function generatePageTypeSitemap(
  baseUrl: string,
  pages: PageSEOData[],
  pageType: 'lessons' | 'resources' | 'tools'
): SitemapGenerator {
  const filteredPages = pages.filter(page => {
    switch (pageType) {
      case 'lessons':
        return ['getting-started', 'operations', 'financial', 'marketing'].includes(page.category);
      case 'resources':
        return page.category === 'resources';
      case 'tools':
        return page.slug.includes('/tools/') || page.slug.includes('/calculator/');
      default:
        return false;
    }
  });

  const urls: SitemapUrl[] = filteredPages.map(page => ({
    loc: page.slug,
    lastmod: page.lastUpdated,
    changefreq: 'weekly',
    priority: 0.8
  }));

  return new SitemapGenerator({ baseUrl, urls });
} 