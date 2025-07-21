import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageStructuredDataGenerator, generateEnhancedSEOData } from '../../utils/pageStructuredData';
import { SchemaGenerator } from '../../utils/schemaGenerator';
import type { PageSEOData, StructuredDataSchema } from '../../types/seo';

interface StructuredDataProviderProps {
  pageData: PageSEOData;
  additionalSchemas?: StructuredDataSchema[];
  children?: React.ReactNode;
}

/**
 * StructuredDataProvider component that dynamically injects JSON-LD structured data
 * into the page head based on page type and content
 */
export const StructuredDataProvider: React.FC<StructuredDataProviderProps> = ({
  pageData,
  additionalSchemas = [],
  children
}) => {
  // Generate enhanced SEO data with structured schemas
  const enhancedSEOData = generateEnhancedSEOData(pageData);
  
  // Combine generated schemas with any additional schemas
  const allSchemas = [...enhancedSEOData.structuredData, ...additionalSchemas];
  
  // Validate and filter schemas
  const validSchemas = allSchemas.filter(schema => {
    const validation = SchemaGenerator.validateSchema(schema);
    if (!validation.isValid) {
      console.warn('Invalid structured data schema detected:', validation.errors, schema);
      return false;
    }
    return true;
  });

  // Generate JSON-LD script tags
  const jsonLdScripts = validSchemas.map((schema, index) => {
    try {
      const jsonString = JSON.stringify(schema, null, 0);
      return (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonString }}
        />
      );
    } catch (error) {
      console.error('Error serializing structured data schema:', error, schema);
      return null;
    }
  }).filter(Boolean);

  return (
    <>
      <Helmet>
        {jsonLdScripts}
      </Helmet>
      {children}
    </>
  );
};

/**
 * Hook to get structured data for a specific page
 */
export const useStructuredData = (pageData: PageSEOData) => {
  const enhancedSEOData = React.useMemo(() => {
    return generateEnhancedSEOData(pageData);
  }, [pageData]);

  return {
    schemas: enhancedSEOData.structuredData,
    breadcrumbs: enhancedSEOData.breadcrumbs,
    enhancedSEOData
  };
};

/**
 * Component for injecting a single structured data schema
 */
interface SingleSchemaProviderProps {
  schema: StructuredDataSchema;
  validate?: boolean;
}

export const SingleSchemaProvider: React.FC<SingleSchemaProviderProps> = ({
  schema,
  validate = true
}) => {
  // Validate schema if requested
  if (validate) {
    const validation = SchemaGenerator.validateSchema(schema);
    if (!validation.isValid) {
      console.warn('Invalid structured data schema:', validation.errors, schema);
      return null;
    }
  }

  let jsonString: string;
  try {
    jsonString = JSON.stringify(schema, null, 0);
  } catch (error) {
    console.error('Error serializing structured data schema:', error, schema);
    return null;
  }

  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonString }}
      />
    </Helmet>
  );
};

/**
 * Higher-order component that wraps a page component with structured data
 */
export const withStructuredData = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  getPageData: (props: P) => PageSEOData
) => {
  const WithStructuredDataComponent: React.FC<P> = (props) => {
    const pageData = getPageData(props);
    
    return (
      <StructuredDataProvider pageData={pageData}>
        <WrappedComponent {...props} />
      </StructuredDataProvider>
    );
  };

  WithStructuredDataComponent.displayName = `withStructuredData(${WrappedComponent.displayName || WrappedComponent.name})`;
  
  return WithStructuredDataComponent;
};

/**
 * Utility function to create structured data for specific content types
 */
export const createContentStructuredData = {
  /**
   * Create structured data for a lesson/course page
   */
  lesson: (data: {
    title: string;
    description: string;
    slug: string;
    author?: { name: string; url?: string };
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
    estimatedReadTime?: number;
    keywords?: string[];
    lastUpdated: string;
  }): PageSEOData => ({
    slug: data.slug,
    title: data.title,
    description: data.description,
    keywords: data.keywords || [],
    category: 'getting-started',
    difficulty: data.difficulty,
    estimatedReadTime: data.estimatedReadTime,
    lastUpdated: data.lastUpdated,
    author: data.author
  }),

  /**
   * Create structured data for a resource page
   */
  resource: (data: {
    title: string;
    description: string;
    slug: string;
    keywords?: string[];
    lastUpdated: string;
  }): PageSEOData => ({
    slug: data.slug,
    title: data.title,
    description: data.description,
    keywords: data.keywords || [],
    category: 'resources',
    lastUpdated: data.lastUpdated
  }),

  /**
   * Create structured data for a community page
   */
  community: (data: {
    title: string;
    description: string;
    slug: string;
    keywords?: string[];
    lastUpdated: string;
  }): PageSEOData => ({
    slug: data.slug,
    title: data.title,
    description: data.description,
    keywords: data.keywords || [],
    category: 'community',
    lastUpdated: data.lastUpdated
  })
};

export default StructuredDataProvider;