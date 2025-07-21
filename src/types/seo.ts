import { Thing, WithContext } from 'schema-dts';

// Base SEO Configuration Types
export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: OpenGraphData;
  twitterCard?: TwitterCardData;
  structuredData?: StructuredDataSchema[];
  noIndex?: boolean;
  noFollow?: boolean;
}

// Open Graph Types
export interface OpenGraphData {
  title?: string;
  description?: string;
  type?: 'website' | 'article' | 'profile' | 'book';
  url?: string;
  image?: string;
  siteName?: string;
  locale?: string;
}

// Twitter Card Types
export interface TwitterCardData {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
}

// Structured Data Types
export type StructuredDataSchema = WithContext<Thing>;

// Page-specific SEO Data
export interface PageSEOData {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: 'getting-started' | 'operations' | 'financial' | 'marketing' | 'resources' | 'community';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedReadTime?: number;
  lastUpdated: string;
  author?: AuthorData;
  relatedPages?: string[];
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: StructuredDataSchema[];
}

// Author Information
export interface AuthorData {
  name: string;
  url?: string;
  image?: string;
  description?: string;
}

// Breadcrumb Navigation
export interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

// Content Taxonomy for LLM Optimization
export interface ContentTaxonomy {
  primaryTopic: string;
  secondaryTopics: string[];
  targetAudience: 'aspiring-owners' | 'current-operators' | 'investors' | 'general';
  businessStage: 'planning' | 'startup' | 'operations' | 'growth' | 'all';
  contentType: 'lesson' | 'guide' | 'tool' | 'resource' | 'community' | 'landing';
  tags: string[];
}

// LLM Context Data
export interface LLMContextData {
  pageContext: string;
  expertiseLevel: string;
  keyInsights: string[];
  actionableAdvice: string[];
  relatedConcepts: string[];
  commonQuestions: FAQItem[];
  authoritySignals: string[];
}

// FAQ Structure
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// Content Section Structure
export interface ContentSection {
  id: string;
  heading: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  content: string;
  keywords?: string[];
  relatedTopics?: string[];
}

// SEO Validation Results
export interface SEOValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  score: number;
  suggestions: string[];
}

// Performance Metrics
export interface PerformanceMetrics {
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
  };
  seoScore: number;
  accessibilityScore: number;
  timestamp: string;
}