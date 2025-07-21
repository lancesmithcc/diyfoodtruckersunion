import React from 'react';
import { render, renderHook } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect, vi } from 'vitest';
import {
  StructuredDataProvider,
  SingleSchemaProvider,
  useStructuredData,
  createContentStructuredData,
  withStructuredData
} from '../components/seo/StructuredDataProvider';
import type { PageSEOData } from '../types/seo';
import { afterEach } from 'node:test';

// Mock console methods to avoid noise in tests
const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => { });
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { });

// Test wrapper component
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <HelmetProvider>
    {children}
  </HelmetProvider>
);

describe('StructuredDataProvider', () => {
  const mockPageData: PageSEOData = {
    slug: '/test-lesson',
    title: 'Test Lesson',
    description: 'A test lesson for structured data',
    keywords: ['test', 'lesson'],
    category: 'getting-started',
    difficulty: 'beginner',
    estimatedReadTime: 10,
    lastUpdated: '2024-01-01T00:00:00.000Z',
    author: {
      name: 'Test Author',
      url: 'https://example.com/author'
    }
  };

  afterEach(() => {
    consoleSpy.mockClear();
    consoleErrorSpy.mockClear();
  });

  it('should render without crashing', () => {
    render(
      <TestWrapper>
        <StructuredDataProvider pageData={mockPageData}>
          <div>Test content</div>
        </StructuredDataProvider>
      </TestWrapper>
    );
  });

  it('should generate structured data for page', () => {
    const { result } = renderHook(() => useStructuredData(mockPageData));
    const { schemas } = result.current;

    expect(schemas).toBeDefined();
    expect(schemas.length).toBeGreaterThan(0);

    // Should include organization schema
    expect(schemas.some(s => (s as any)['@type'] === 'Organization')).toBe(true);

    // Should include course schema for lesson pages
    expect(schemas.some(s => (s as any)['@type'] === 'Course')).toBe(true);

    // Should include article schema
    expect(schemas.some(s => (s as any)['@type'] === 'Article')).toBe(true);
  });

  it('should include organization schema with correct data', () => {
    const { result } = renderHook(() => useStructuredData(mockPageData));
    const { schemas } = result.current;

    const orgSchema = schemas.find(s => (s as any)['@type'] === 'Organization');
    expect(orgSchema).toBeDefined();
    expect((orgSchema as any).name).toBe('DIY Food Truckers Union');
    expect((orgSchema as any).url).toBe('https://diyfoodtruckersunion.com');
  });

  it('should include course schema with correct data', () => {
    const { result } = renderHook(() => useStructuredData(mockPageData));
    const { schemas } = result.current;

    const courseSchema = schemas.find(s => (s as any)['@type'] === 'Course');
    expect(courseSchema).toBeDefined();
    expect((courseSchema as any).name).toBe('Test Lesson');
    expect((courseSchema as any).educationalLevel).toBe('beginner');
    expect((courseSchema as any).timeRequired).toBe('PT10M');
  });

  it('should handle additional schemas', () => {
    const additionalSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Test Person'
    } as any;

    render(
      <TestWrapper>
        <StructuredDataProvider
          pageData={mockPageData}
          additionalSchemas={[additionalSchema]}
        >
          <div>Test content</div>
        </StructuredDataProvider>
      </TestWrapper>
    );

    // Test passes if no errors are thrown during rendering
    expect(true).toBe(true);
  });

  it('should filter out invalid schemas', () => {
    const invalidSchema = {
      '@context': 'https://invalid.com',
      name: 'Invalid Schema'
    };

    render(
      <TestWrapper>
        <StructuredDataProvider
          pageData={mockPageData}
          additionalSchemas={[invalidSchema as any]}
        >
          <div>Test content</div>
        </StructuredDataProvider>
      </TestWrapper>
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Invalid structured data schema detected:'),
      expect.any(Array),
      invalidSchema
    );
  });
});

describe('SingleSchemaProvider', () => {
  const validSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Test Organization'
  } as any;

  it('should render valid schema', () => {
    render(
      <TestWrapper>
        <SingleSchemaProvider schema={validSchema} />
      </TestWrapper>
    );

    // Test passes if no errors are thrown during rendering
    expect(true).toBe(true);
  });

  it('should not render invalid schema when validation is enabled', () => {
    const invalidSchema = {
      '@context': 'https://invalid.com',
      name: 'Invalid'
    };

    render(
      <TestWrapper>
        <SingleSchemaProvider schema={invalidSchema as any} validate={true} />
      </TestWrapper>
    );

    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should render invalid schema when validation is disabled', () => {
    const invalidSchema = {
      '@context': 'https://invalid.com',
      name: 'Invalid'
    };

    render(
      <TestWrapper>
        <SingleSchemaProvider schema={invalidSchema as any} validate={false} />
      </TestWrapper>
    );

    // Test passes if no errors are thrown during rendering
    expect(true).toBe(true);
  });
});

describe('useStructuredData', () => {
  const TestComponent: React.FC<{ pageData: PageSEOData }> = ({ pageData }) => {
    const { schemas, breadcrumbs } = useStructuredData(pageData);

    return (
      <div>
        <div data-testid="schema-count">{schemas.length}</div>
        <div data-testid="breadcrumb-count">{breadcrumbs?.length || 0}</div>
      </div>
    );
  };

  it('should return structured data and breadcrumbs', () => {
    const { getByTestId } = render(
      <TestComponent pageData={{
        slug: '/test',
        title: 'Test',
        description: 'Test description',
        keywords: [],
        category: 'getting-started',
        lastUpdated: '2024-01-01T00:00:00.000Z'
      }} />
    );

    expect(parseInt(getByTestId('schema-count').textContent || '0')).toBeGreaterThan(0);
    expect(parseInt(getByTestId('breadcrumb-count').textContent || '0')).toBeGreaterThan(0);
  });
});

describe('withStructuredData', () => {
  const TestComponent: React.FC<{ title: string }> = ({ title }) => (
    <div data-testid="title">{title}</div>
  );

  const getPageData = (props: { title: string }): PageSEOData => ({
    slug: '/test',
    title: props.title,
    description: 'Test description',
    keywords: [],
    category: 'getting-started',
    lastUpdated: '2024-01-01T00:00:00.000Z'
  });

  it('should wrap component with structured data', () => {
    const WrappedComponent = withStructuredData(TestComponent, getPageData);

    const { getByTestId } = render(
      <TestWrapper>
        <WrappedComponent title="Test Title" />
      </TestWrapper>
    );

    expect(getByTestId('title')).toHaveTextContent('Test Title');
  });
});

describe('createContentStructuredData', () => {
  it('should create lesson structured data', () => {
    const lessonData = createContentStructuredData.lesson({
      title: 'Test Lesson',
      description: 'Test lesson description',
      slug: '/test-lesson',
      difficulty: 'beginner',
      estimatedReadTime: 15,
      keywords: ['test', 'lesson'],
      lastUpdated: '2024-01-01T00:00:00.000Z'
    });

    expect(lessonData.category).toBe('getting-started');
    expect(lessonData.difficulty).toBe('beginner');
    expect(lessonData.estimatedReadTime).toBe(15);
    expect(lessonData.title).toBe('Test Lesson');
  });

  it('should create resource structured data', () => {
    const resourceData = createContentStructuredData.resource({
      title: 'Test Resource',
      description: 'Test resource description',
      slug: '/test-resource',
      keywords: ['test', 'resource'],
      lastUpdated: '2024-01-01T00:00:00.000Z'
    });

    expect(resourceData.category).toBe('resources');
    expect(resourceData.title).toBe('Test Resource');
  });

  it('should create community structured data', () => {
    const communityData = createContentStructuredData.community({
      title: 'Test Community',
      description: 'Test community description',
      slug: '/test-community',
      keywords: ['test', 'community'],
      lastUpdated: '2024-01-01T00:00:00.000Z'
    });

    expect(communityData.category).toBe('community');
    expect(communityData.title).toBe('Test Community');
  });
});