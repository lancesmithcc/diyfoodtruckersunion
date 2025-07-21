import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOConfig } from '../../types/seo';

interface SEOProviderProps {
  config: SEOConfig;
  children?: React.ReactNode;
}

/**
 * Centralized SEO provider component that manages meta tags, Open Graph data,
 * Twitter Cards, and structured data for all pages
 */
export const SEOProvider: React.FC<SEOProviderProps> = ({ config, children }) => {
  const {
    title,
    description,
    keywords = [],
    canonical,
    openGraph,
    twitterCard,
    structuredData = [],
    noIndex = false,
    noFollow = false
  } = config;

  // Generate robots meta content
  const robotsContent = [
    noIndex ? 'noindex' : 'index',
    noFollow ? 'nofollow' : 'follow'
  ].join(', ');

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords.length > 0 && (
          <meta name="keywords" content={keywords.join(', ')} />
        )}
        <meta name="robots" content={robotsContent} />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph Meta Tags */}
        {openGraph && (
          <>
            <meta property="og:title" content={openGraph.title || title} />
            <meta property="og:description" content={openGraph.description || description} />
            <meta property="og:type" content={openGraph.type || 'website'} />
            {openGraph.url && <meta property="og:url" content={openGraph.url} />}
            {openGraph.image && <meta property="og:image" content={openGraph.image} />}
            {openGraph.siteName && <meta property="og:site_name" content={openGraph.siteName} />}
            {openGraph.locale && <meta property="og:locale" content={openGraph.locale} />}
          </>
        )}
        
        {/* Twitter Card Meta Tags */}
        {twitterCard && (
          <>
            <meta name="twitter:card" content={twitterCard.card || 'summary'} />
            {twitterCard.site && <meta name="twitter:site" content={twitterCard.site} />}
            {twitterCard.creator && <meta name="twitter:creator" content={twitterCard.creator} />}
            <meta name="twitter:title" content={twitterCard.title || title} />
            <meta name="twitter:description" content={twitterCard.description || description} />
            {twitterCard.image && <meta name="twitter:image" content={twitterCard.image} />}
          </>
        )}
        
        {/* Structured Data (JSON-LD) */}
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema)
            }}
          />
        ))}
      </Helmet>
      {children}
    </>
  );
};

export default SEOProvider;