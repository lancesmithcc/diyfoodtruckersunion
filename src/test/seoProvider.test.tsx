import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { SEOProvider } from '../components/seo/SEOProvider';
import { SEOConfig } from '../types/seo';

// Mock SEO configuration for testing
const mockSEOConfig: SEOConfig = {
  title: 'Test Page Title',
  description: 'Test page description for SEO testing',
  keywords: ['food truck', 'business', 'startup'],
  canonical: 'https://example.com/test-page',
  openGraph: {
    title: 'Test OG Title',
    description: 'Test OG description',
    type: 'article',
    url: 'https://example.com/test-page',
    image: 'https://example.com/og-image.jpg',
    siteName: 'DIY Food Truckers Union'
  },
  twitterCard: {
    card: 'summary_large_image',
    title: 'Test Twitter Title',
    description: 'Test Twitter description',
    image: 'https://example.com/twitter-image.jpg'
  },
  structuredData: [{
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Test Article',
    description: 'Test article description'
  }]
};

describe('SEOProvider Component', () => {
  it('should render without crashing', () => {
    render(
      <HelmetProvider>
        <SEOProvider config={mockSEOConfig}>
          <div>Test content</div>
        </SEOProvider>
      </HelmetProvider>
    );
  });

  it('should render children correctly', () => {
    const { getByText } = render(
      <HelmetProvider>
        <SEOProvider config={mockSEOConfig}>
          <div>Test content</div>
        </SEOProvider>
      </HelmetProvider>
    );
    
    expect(getByText('Test content')).toBeInTheDocument();
  });

  it('should handle minimal SEO config', () => {
    const minimalConfig: SEOConfig = {
      title: 'Minimal Title',
      description: 'Minimal description'
    };

    render(
      <HelmetProvider>
        <SEOProvider config={minimalConfig}>
          <div>Minimal content</div>
        </SEOProvider>
      </HelmetProvider>
    );
  });

  it('should handle noIndex and noFollow flags', () => {
    const restrictedConfig: SEOConfig = {
      title: 'Restricted Page',
      description: 'This page should not be indexed',
      noIndex: true,
      noFollow: true
    };

    render(
      <HelmetProvider>
        <SEOProvider config={restrictedConfig}>
          <div>Restricted content</div>
        </SEOProvider>
      </HelmetProvider>
    );
  });
});