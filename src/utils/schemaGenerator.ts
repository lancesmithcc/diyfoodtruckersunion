import { 
  Organization, 
  Article, 
  Course, 
  FAQPage, 
  BreadcrumbList,
  WithContext,
  Person,
  WebSite,
  Question,
  Answer,
  LocalBusiness,
  Service,
  CreativeWork,
  LearningResource,
  HowTo,
  ItemList
} from 'schema-dts';
import { AuthorData, FAQItem, BreadcrumbItem, ContentTaxonomy } from '../types/seo';

// Input data interfaces for schema generation
export interface OrganizationSchemaData {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType?: string;
  };
  sameAs?: string[];
}

export interface ArticleSchemaData {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: AuthorData;
  image?: string;
  category?: string;
  keywords?: string[];
  wordCount?: number;
  readingTime?: number;
}

export interface CourseSchemaData {
  name: string;
  description: string;
  url: string;
  provider: OrganizationSchemaData;
  author?: AuthorData;
  datePublished?: string;
  dateModified?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedDuration?: string;
  category?: string;
  keywords?: string[];
  prerequisites?: string[];
  learningOutcomes?: string[];
}

/**
 * SchemaGenerator class for creating structured data (JSON-LD) schemas
 * Supports Organization, Article, Course, FAQ, and BreadcrumbList schemas
 */
export class SchemaGenerator {
  /**
   * Generate Organization schema for site-wide data
   */
  static generateOrganizationSchema(data: OrganizationSchemaData): WithContext<Organization> {
    const schema: WithContext<Organization> = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: data.name,
      url: data.url,
      description: data.description,
    };

    if (data.logo) {
      schema.logo = {
        '@type': 'ImageObject',
        url: data.logo
      };
    }

    if (data.contactPoint) {
      schema.contactPoint = {
        '@type': 'ContactPoint',
        telephone: data.contactPoint.telephone,
        email: data.contactPoint.email,
        contactType: data.contactPoint.contactType || 'customer service'
      };
    }

    if (data.sameAs && data.sameAs.length > 0) {
      schema.sameAs = data.sameAs;
    }

    return schema;
  }

  /**
   * Generate Article schema for lesson content and blog posts
   */
  static generateArticleSchema(data: ArticleSchemaData): WithContext<Article> {
    const schema: WithContext<Article> = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.headline,
      description: data.description,
      url: data.url,
      datePublished: data.datePublished,
      dateModified: data.dateModified || data.datePublished,
      author: {
        '@type': 'Person',
        name: data.author.name,
        url: data.author.url,
        description: data.author.description
      }
    };

    if (data.image) {
      schema.image = {
        '@type': 'ImageObject',
        url: data.image
      };
    }

    if (data.category) {
      schema.articleSection = data.category;
    }

    if (data.keywords && data.keywords.length > 0) {
      schema.keywords = data.keywords.join(', ');
    }

    if (data.wordCount) {
      schema.wordCount = data.wordCount;
    }

    // Add publisher information (DIY Food Truckers Union)
    schema.publisher = {
      '@type': 'Organization',
      name: 'DIY Food Truckers Union',
      url: 'https://diyfoodtruckersunion.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://diyfoodtruckersunion.com/img/logo.svg'
      }
    };

    return schema;
  }

  /**
   * Generate Course schema for educational lesson content
   */
  static generateCourseSchema(data: CourseSchemaData): WithContext<Course> {
    const schema: WithContext<Course> = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: data.name,
      description: data.description,
      url: data.url,
      provider: {
        '@type': 'Organization',
        name: data.provider.name,
        url: data.provider.url
      }
    };

    if (data.author) {
      (schema as any).instructor = {
        '@type': 'Person',
        name: data.author.name,
        url: data.author.url,
        description: data.author.description
      };
    }

    if (data.datePublished) {
      schema.datePublished = data.datePublished;
    }

    if (data.dateModified) {
      schema.dateModified = data.dateModified;
    }

    if (data.difficulty) {
      schema.educationalLevel = data.difficulty;
    }

    if (data.estimatedDuration) {
      schema.timeRequired = data.estimatedDuration;
    }

    if (data.category) {
      schema.courseCode = data.category;
    }

    if (data.keywords && data.keywords.length > 0) {
      schema.keywords = data.keywords.join(', ');
    }

    if (data.prerequisites && data.prerequisites.length > 0) {
      schema.coursePrerequisites = data.prerequisites.join(', ');
    }

    if (data.learningOutcomes && data.learningOutcomes.length > 0) {
      schema.teaches = data.learningOutcomes;
    }

    return schema;
  }

  /**
   * Generate FAQ schema for question-answer content
   */
  static generateFAQSchema(faqs: FAQItem[]): WithContext<FAQPage> {
    if (!faqs || faqs.length === 0) {
      throw new Error('FAQ data is required to generate FAQ schema');
    }

    const schema: WithContext<FAQPage> = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question' as const,
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer' as const,
          text: faq.answer
        }
      }))
    };

    return schema;
  }

  /**
   * Generate BreadcrumbList schema for navigation
   */
  static generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]): WithContext<BreadcrumbList> {
    if (!breadcrumbs || breadcrumbs.length === 0) {
      throw new Error('Breadcrumb data is required to generate breadcrumb schema');
    }

    const schema: WithContext<BreadcrumbList> = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map(crumb => ({
        '@type': 'ListItem' as const,
        position: crumb.position,
        name: crumb.name,
        item: crumb.url
      }))
    };

    return schema;
  }

  /**
   * Generate WebSite schema for the main site
   */
  static generateWebSiteSchema(data: { 
    name: string; 
    url: string; 
    description?: string;
    potentialAction?: {
      target: string;
      queryInput: string;
    };
  }): WithContext<WebSite> {
    const schema: WithContext<WebSite> = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: data.name,
      url: data.url,
      description: data.description
    };

    if (data.potentialAction) {
      (schema as any).potentialAction = {
        '@type': 'SearchAction',
        target: data.potentialAction.target,
        'query-input': data.potentialAction.queryInput
      };
    }

    return schema;
  }

  /**
   * Validate a schema object for basic structure
   */
  static validateSchema(schema: WithContext<any>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!schema['@context']) {
      errors.push('Missing @context property');
    }

    if (!schema['@type']) {
      errors.push('Missing @type property');
    }

    if (schema['@context'] !== 'https://schema.org') {
      errors.push('Invalid @context value, should be "https://schema.org"');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Generate multiple schemas for a page based on content type and data
   */
  static generatePageSchemas(pageData: {
    type: 'lesson' | 'resource' | 'guide' | 'landing' | 'community';
    article?: ArticleSchemaData;
    course?: CourseSchemaData;
    faqs?: FAQItem[];
    breadcrumbs?: BreadcrumbItem[];
    organization?: OrganizationSchemaData;
  }): WithContext<any>[] {
    const schemas: WithContext<any>[] = [];

    // Always include organization schema for authority
    if (pageData.organization) {
      schemas.push(this.generateOrganizationSchema(pageData.organization));
    }

    // Add article schema for content pages
    if (pageData.article) {
      schemas.push(this.generateArticleSchema(pageData.article));
    }

    // Add course schema for lesson pages
    if (pageData.course && pageData.type === 'lesson') {
      schemas.push(this.generateCourseSchema(pageData.course));
    }

    // Add FAQ schema if FAQs are present
    if (pageData.faqs && pageData.faqs.length > 0) {
      schemas.push(this.generateFAQSchema(pageData.faqs));
    }

    // Add breadcrumb schema for navigation
    if (pageData.breadcrumbs && pageData.breadcrumbs.length > 0) {
      schemas.push(this.generateBreadcrumbSchema(pageData.breadcrumbs));
    }

    return schemas;
  }
}

// Default organization data for DIY Food Truckers Union
export const DEFAULT_ORGANIZATION_DATA: OrganizationSchemaData = {
  name: 'DIY Food Truckers Union',
  url: 'https://diyfoodtruckersunion.com',
  logo: 'https://diyfoodtruckersunion.com/img/logo.svg',
  description: 'Comprehensive resources and guidance for aspiring food truck entrepreneurs. Start smart, not expensive.',
  sameAs: [
    // Add social media URLs when available
  ]
};

/**
 * Generate LearningResource schema for educational content
 */
export interface LearningResourceSchemaData {
  name: string;
  description: string;
  url: string;
  author: AuthorData;
  educationalLevel?: 'beginner' | 'intermediate' | 'advanced';
  learningResourceType?: string;
  teaches?: string[];
  educationalUse?: string;
  timeRequired?: string;
  inLanguage?: string;
  isAccessibleForFree?: boolean;
  keywords?: string[];
}

export function generateLearningResourceSchema(data: LearningResourceSchemaData): WithContext<LearningResource> {
  const schema: WithContext<LearningResource> = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: data.name,
    description: data.description,
    url: data.url,
    author: {
      '@type': 'Person',
      name: data.author.name,
      url: data.author.url,
      description: data.author.description
    }
  };

  if (data.educationalLevel) {
    schema.educationalLevel = data.educationalLevel;
  }

  if (data.learningResourceType) {
    schema.learningResourceType = data.learningResourceType;
  }

  if (data.teaches && data.teaches.length > 0) {
    schema.teaches = data.teaches;
  }

  if (data.educationalUse) {
    schema.educationalUse = data.educationalUse;
  }

  if (data.timeRequired) {
    schema.timeRequired = data.timeRequired;
  }

  if (data.inLanguage) {
    schema.inLanguage = data.inLanguage;
  }

  if (data.isAccessibleForFree !== undefined) {
    schema.isAccessibleForFree = data.isAccessibleForFree;
  }

  if (data.keywords && data.keywords.length > 0) {
    schema.keywords = data.keywords.join(', ');
  }

  return schema;
}

/**
 * Generate HowTo schema for step-by-step instructions
 */
export interface HowToSchemaData {
  name: string;
  description: string;
  url: string;
  author: AuthorData;
  totalTime?: string;
  estimatedCost?: string;
  supplies?: string[];
  tools?: string[];
  steps: {
    name: string;
    text: string;
    url?: string;
    image?: string;
  }[];
}

export function generateHowToSchema(data: HowToSchemaData): WithContext<HowTo> {
  const schema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.name,
    description: data.description,
    url: data.url,
    author: {
      '@type': 'Person',
      name: data.author.name,
      url: data.author.url,
      description: data.author.description
    },
    step: data.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url,
      image: step.image
    }))
  };

  if (data.totalTime) {
    schema.totalTime = data.totalTime;
  }

  if (data.estimatedCost) {
    schema.estimatedCost = {
      '@type': 'MonetaryAmount',
      value: data.estimatedCost,
      currency: 'USD'
    };
  }

  if (data.supplies && data.supplies.length > 0) {
    schema.supply = data.supplies.map(supply => ({
      '@type': 'HowToSupply',
      name: supply
    }));
  }

  if (data.tools && data.tools.length > 0) {
    schema.tool = data.tools.map(tool => ({
      '@type': 'HowToTool',
      name: tool
    }));
  }

  return schema;
}

/**
 * Generate ItemList schema for structured content lists
 */
export interface ItemListSchemaData {
  name: string;
  description: string;
  url: string;
  itemListElement: {
    name: string;
    description?: string;
    url?: string;
    position: number;
  }[];
}

export function generateItemListSchema(data: ItemListSchemaData): WithContext<ItemList> {
  const schema: WithContext<ItemList> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: data.name,
    description: data.description,
    url: data.url,
    itemListElement: data.itemListElement.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      description: item.description,
      url: item.url
    }))
  };

  return schema;
}

/**
 * Generate LocalBusiness schema for local SEO optimization
 */
export interface LocalBusinessSchemaData {
  name: string;
  url: string;
  description: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  servesCuisine?: string[];
  areaServed?: string[];
}

export function generateLocalBusinessSchema(data: LocalBusinessSchemaData): WithContext<LocalBusiness> {
  const schema: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    url: data.url,
    description: data.description
  };

  if (data.telephone) {
    schema.telephone = data.telephone;
  }

  if (data.email) {
    schema.email = data.email;
  }

  if (data.address) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry || 'US'
    };
  }

  if (data.geo) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: data.geo.latitude,
      longitude: data.geo.longitude
    };
  }

  if (data.openingHours && data.openingHours.length > 0) {
    schema.openingHours = data.openingHours;
  }

  if (data.priceRange) {
    schema.priceRange = data.priceRange;
  }

  if (data.servesCuisine && data.servesCuisine.length > 0) {
    (schema as any).servesCuisine = data.servesCuisine;
  }

  if (data.areaServed && data.areaServed.length > 0) {
    schema.areaServed = data.areaServed.map(area => ({
      '@type': 'City',
      name: area
    }));
  }

  return schema;
}

/**
 * Generate Service schema for food truck services
 */
export interface ServiceSchemaData {
  name: string;
  description: string;
  url: string;
  provider: OrganizationSchemaData;
  areaServed?: string[];
  serviceType?: string[];
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}

export function generateServiceSchema(data: ServiceSchemaData): WithContext<Service> {
  const schema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    url: data.url,
    provider: {
      '@type': 'Organization',
      name: data.provider.name,
      url: data.provider.url
    }
  };

  if (data.areaServed && data.areaServed.length > 0) {
    schema.areaServed = data.areaServed.map(area => ({
      '@type': 'City',
      name: area
    }));
  }

  if (data.serviceType && data.serviceType.length > 0) {
    schema.serviceType = data.serviceType;
  }

  if (data.offers) {
    schema.offers = {
      '@type': 'Offer',
      price: data.offers.price,
      priceCurrency: data.offers.priceCurrency || 'USD',
      availability: (data.offers.availability as any) || 'https://schema.org/InStock'
    };
  }

  return schema;
}