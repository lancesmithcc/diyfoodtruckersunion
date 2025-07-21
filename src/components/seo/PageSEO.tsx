import React from 'react';
import { SEOProvider } from './SEOProvider';
import { useSEO } from './useSEO';
import { PageSEOData } from '../../types/seo';

interface PageSEOProps {
  pageData: Partial<PageSEOData> & { title: string; description: string };
  children: React.ReactNode;
}

/**
 * Wrapper component that applies SEO configuration to a page
 */
export const PageSEO: React.FC<PageSEOProps> = ({ pageData, children }) => {
  const seoConfig = useSEO(pageData);

  return (
    <SEOProvider config={seoConfig}>
      {children}
    </SEOProvider>
  );
};

export default PageSEO;