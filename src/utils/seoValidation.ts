import { z } from 'zod';
import { SEOConfig, SEOValidationResult, PageSEOData } from '../types/seo';

// Zod schemas for validation
const SEOConfigSchema = z.object({
  title: z.string().min(1, 'Title is required').max(60, 'Title should be under 60 characters'),
  description: z.string().min(1, 'Description is required').max(160, 'Description should be under 160 characters'),
  keywords: z.array(z.string()).optional(),
  canonical: z.string().url().optional(),
  openGraph: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    type: z.enum(['website', 'article', 'profile', 'book']).optional(),
    url: z.string().url().optional(),
    image: z.string().url().optional(),
    siteName: z.string().optional(),
    locale: z.string().optional()
  }).optional(),
  twitterCard: z.object({
    card: z.enum(['summary', 'summary_large_image', 'app', 'player']).optional(),
    site: z.string().optional(),
    creator: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().url().optional()
  }).optional(),
  structuredData: z.array(z.any()).optional(),
  noIndex: z.boolean().optional(),
  noFollow: z.boolean().optional()
});

const PageSEODataSchema = z.object({
  slug: z.string().min(1, 'Slug is required'),
  title: z.string().min(1, 'Title is required').max(60, 'Title should be under 60 characters'),
  description: z.string().min(1, 'Description is required').max(160, 'Description should be under 160 characters'),
  keywords: z.array(z.string()).min(1, 'At least one keyword is required'),
  category: z.enum(['getting-started', 'operations', 'financial', 'marketing', 'resources', 'community']),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  estimatedReadTime: z.number().positive().optional(),
  lastUpdated: z.string().min(1, 'Last updated date is required'),
  author: z.object({
    name: z.string().min(1, 'Author name is required'),
    url: z.string().url().optional(),
    image: z.string().url().optional(),
    description: z.string().optional()
  }).optional(),
  relatedPages: z.array(z.string()).optional(),
  breadcrumbs: z.array(z.object({
    name: z.string().min(1, 'Breadcrumb name is required'),
    url: z.string().min(1, 'Breadcrumb URL is required'),
    position: z.number().positive()
  })).optional(),
  structuredData: z.array(z.any()).optional()
});

/**
 * Validates SEO configuration
 */
export const validateSEOConfig = (config: SEOConfig): SEOValidationResult => {
  const result: SEOValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    score: 100,
    suggestions: []
  };

  try {
    SEOConfigSchema.parse(config);
  } catch (error) {
    if (error instanceof z.ZodError) {
      result.isValid = false;
      result.errors = error.issues.map((err: z.ZodIssue) => `${err.path.join('.') || 'unknown'}: ${err.message}`);
      result.score -= result.errors.length * 10;
    }
  }

  // Additional validation checks
  if (config.title.length < 30) {
    result.warnings.push('Title is quite short, consider making it more descriptive');
    result.score -= 5;
  }

  if (config.description.length < 120) {
    result.warnings.push('Description could be longer to better utilize the 160 character limit');
    result.score -= 5;
  }

  if (!config.keywords || config.keywords.length === 0) {
    result.warnings.push('Consider adding keywords for better SEO');
    result.score -= 10;
  }

  if (!config.openGraph) {
    result.warnings.push('Open Graph data missing - important for social sharing');
    result.score -= 15;
  }

  if (!config.canonical) {
    result.warnings.push('Canonical URL not set - important for preventing duplicate content');
    result.score -= 10;
  }

  // Generate suggestions
  if (result.score < 90) {
    result.suggestions.push('Review and address validation errors and warnings');
  }
  if (!config.structuredData || config.structuredData.length === 0) {
    result.suggestions.push('Add structured data (JSON-LD) for better search engine understanding');
  }

  return result;
};

/**
 * Validates page-specific SEO data
 */
export const validatePageSEOData = (data: PageSEOData): SEOValidationResult => {
  const result: SEOValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    score: 100,
    suggestions: []
  };

  try {
    PageSEODataSchema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      result.isValid = false;
      result.errors = error.issues.map((err: z.ZodIssue) => `${err.path.join('.') || 'unknown'}: ${err.message}`);
      result.score -= result.errors.length * 10;
    }
  }

  // Content quality checks
  if (data.keywords.length < 3) {
    result.warnings.push('Consider adding more keywords for better targeting');
    result.score -= 5;
  }

  if (data.keywords.length > 10) {
    result.warnings.push('Too many keywords might dilute focus - consider reducing');
    result.score -= 5;
  }

  if (!data.estimatedReadTime) {
    result.suggestions.push('Add estimated read time for better user experience');
  }

  if (!data.author) {
    result.suggestions.push('Add author information for better authority signals');
  }

  if (!data.relatedPages || data.relatedPages.length === 0) {
    result.suggestions.push('Add related pages for better internal linking');
  }

  return result;
};

/**
 * Analyzes keyword density in content
 */
export const analyzeKeywordDensity = (content: string, keywords: string[]): {
  keyword: string;
  count: number;
  density: number;
  recommendation: 'good' | 'low' | 'high';
}[] => {
  const words = content.toLowerCase().split(/\s+/);
  const totalWords = words.length;

  return keywords.map(keyword => {
    const keywordLower = keyword.toLowerCase();
    const count = words.filter(word => word.includes(keywordLower)).length;
    const density = (count / totalWords) * 100;

    let recommendation: 'good' | 'low' | 'high' = 'good';
    if (density < 0.5) recommendation = 'low';
    if (density > 3) recommendation = 'high';

    return {
      keyword,
      count,
      density: Math.round(density * 100) / 100,
      recommendation
    };
  });
};

/**
 * Validates heading hierarchy
 */
export const validateHeadingHierarchy = (headings: { level: number; text: string }[]): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} => {
  const result = {
    isValid: true,
    errors: [] as string[],
    warnings: [] as string[]
  };

  if (headings.length === 0) {
    result.errors.push('No headings found - content should have proper heading structure');
    result.isValid = false;
    return result;
  }

  // Check for H1
  const h1Count = headings.filter(h => h.level === 1).length;
  if (h1Count === 0) {
    result.errors.push('Missing H1 tag - every page should have exactly one H1');
    result.isValid = false;
  } else if (h1Count > 1) {
    result.errors.push('Multiple H1 tags found - should have only one H1 per page');
    result.isValid = false;
  }

  // Check hierarchy
  for (let i = 1; i < headings.length; i++) {
    const current = headings[i];
    const previous = headings[i - 1];

    if (current.level > previous.level + 1) {
      result.warnings.push(
        `Heading hierarchy skip: H${previous.level} followed by H${current.level} - consider using H${previous.level + 1}`
      );
    }
  }

  return result;
};

/**
 * Checks content readability
 */
export const checkReadability = (content: string): {
  wordCount: number;
  sentenceCount: number;
  averageWordsPerSentence: number;
  readabilityScore: number;
  level: 'easy' | 'moderate' | 'difficult';
} => {
  const words = content.split(/\s+/).filter(word => word.length > 0);
  const sentences = content.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
  
  const wordCount = words.length;
  const sentenceCount = sentences.length;
  const averageWordsPerSentence = wordCount / sentenceCount;

  // Simple readability score (lower is better)
  const readabilityScore = Math.round(averageWordsPerSentence * 100) / 100;

  let level: 'easy' | 'moderate' | 'difficult' = 'moderate';
  if (readabilityScore < 15) level = 'easy';
  if (readabilityScore > 25) level = 'difficult';

  return {
    wordCount,
    sentenceCount,
    averageWordsPerSentence,
    readabilityScore,
    level
  };
};