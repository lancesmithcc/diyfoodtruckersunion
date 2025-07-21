import { useMemo, useEffect, useState } from 'react';
import { SEOConfig, PageSEOData } from '../../types/seo';
import { SEOConfigLoader } from '../../utils/seoConfigLoader';

/**
 * Hook to generate SEO configuration from page data with config manager integration
 */
export const useSEO = (pageData: Partial<PageSEOData> & { title: string; description: string }): SEOConfig => {
  const [configuredSEO, setConfiguredSEO] = useState<SEOConfig | null>(null);

  useEffect(() => {
    const loadSEOConfig = async () => {
      try {
        const slug = pageData.slug || (typeof window !== 'undefined' ? window.location.pathname : '/');
        const config = await SEOConfigLoader.getPageConfig(slug, pageData);
        setConfiguredSEO(config);
      } catch (error) {
        console.warn('Failed to load SEO config, using fallback:', error);
        // Fallback to basic configuration
        setConfiguredSEO(generateFallbackSEO(pageData));
      }
    };

    loadSEOConfig();
  }, [pageData]);

  return useMemo(() => {
    return configuredSEO || generateFallbackSEO(pageData);
  }, [configuredSEO, pageData]);
};

/**
 * Generate fallback SEO configuration when config manager fails
 */
const generateFallbackSEO = (pageData: Partial<PageSEOData> & { title: string; description: string }): SEOConfig => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://diyfoodtruckersunion.com';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `${baseUrl}${pageData.slug || ''}`;

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords || [],
    canonical: currentUrl,
    openGraph: {
      siteName: 'DIY Food Truckers Union',
      type: 'website',
      locale: 'en_US',
      title: pageData.title,
      description: pageData.description,
      url: currentUrl,
      image: `${baseUrl}/img/og-image.jpg`
    },
    twitterCard: {
      card: 'summary_large_image',
      site: '@diyfoodtruckers',
      title: pageData.title,
      description: pageData.description,
      image: `${baseUrl}/img/twitter-card.jpg`
    },
    structuredData: pageData.structuredData || [],
    noIndex: false,
    noFollow: false
  };
};

/**
 * Generate SEO configuration for lesson pages
 */
export const useLessonSEO = (lessonData: {
  title: string;
  description: string;
  category: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedReadTime?: number;
  keywords?: string[];
  slug?: string;
}): SEOConfig => {
  const basePageData = {
    ...lessonData,
    category: lessonData.category as PageSEOData['category']
  };

  const seoConfig = useSEO(basePageData);

  // Enhance for lesson-specific SEO
  const enhancedKeywords = [
    ...(lessonData.keywords || []),
    'food truck business',
    'food truck startup',
    lessonData.category.replace('-', ' '),
    ...(lessonData.difficulty ? [lessonData.difficulty] : [])
  ];

  return {
    ...seoConfig,
    keywords: enhancedKeywords,
    openGraph: {
      ...seoConfig.openGraph,
      type: 'article'
    }
  };
};

/**
 * Generate SEO configuration for resource pages
 */
export const useResourceSEO = (resourceData: {
  title: string;
  description: string;
  keywords?: string[];
  slug?: string;
}): SEOConfig => {
  const basePageData = {
    ...resourceData,
    category: 'resources' as const
  };

  const seoConfig = useSEO(basePageData);

  // Enhance for resource-specific SEO
  const enhancedKeywords = [
    ...(resourceData.keywords || []),
    'food truck resources',
    'food truck tools',
    'food truck guides'
  ];

  return {
    ...seoConfig,
    keywords: enhancedKeywords
  };
};

export default useSEO;