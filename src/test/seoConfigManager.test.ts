import { describe, it, expect, beforeEach } from 'vitest';
import { SEOConfigManager } from '../utils/seoConfigManager';
import { PageSEOData } from '../types/seo';

const mockPageData: PageSEOData = {
  slug: '/test-page',
  title: 'Test Page Title',
  description: 'Test page description for configuration testing',
  keywords: ['test', 'food truck', 'configuration'],
  category: 'getting-started',
  lastUpdated: '2025-01-20T00:00:00.000Z',
  author: {
    name: 'Test Author',
    url: 'https://example.com/author'
  }
};

describe('SEOConfigManager', () => {
  let configManager: SEOConfigManager;

  beforeEach(() => {
    configManager = SEOConfigManager.getInstance();
    configManager.reset();
  });

  it('should initialize with page configurations', async () => {
    await configManager.initialize([mockPageData]);
    
    const configs = configManager.getAllPageConfigs();
    expect(configs).toHaveLength(1);
    expect(configs[0].slug).toBe('/test-page');
  });

  it('should generate SEO config from page data', async () => {
    await configManager.initialize([mockPageData]);
    
    const seoConfig = configManager.getPageSEO('/test-page');
    
    expect(seoConfig.title).toContain('Test Page Title');
    expect(seoConfig.description).toBe('Test page description for configuration testing');
    expect(seoConfig.keywords).toContain('test');
    expect(seoConfig.canonical).toContain('/test-page');
    expect(seoConfig.openGraph?.title).toBe('Test Page Title');
  });

  it('should provide fallback for missing page configurations', async () => {
    await configManager.initialize([]);
    
    const seoConfig = configManager.getPageSEO('/missing-page', {
      title: 'Fallback Title',
      description: 'Fallback description'
    });
    
    expect(seoConfig.title).toContain('Fallback Title');
    expect(seoConfig.description).toBe('Fallback description');
  });

  it('should validate page configurations', async () => {
    const validation = configManager.setPageSEO('/test-page', mockPageData);
    
    expect(validation.isValid).toBe(true);
    expect(validation.errors).toHaveLength(0);
  });

  it('should handle invalid configurations', async () => {
    const invalidData = {
      ...mockPageData,
      title: '', // Invalid: empty title
      description: '' // Invalid: empty description
    };
    
    const validation = configManager.setPageSEO('/invalid-page', invalidData);
    
    expect(validation.isValid).toBe(false);
    expect(validation.errors.length).toBeGreaterThan(0);
  });

  it('should provide configuration statistics', async () => {
    await configManager.initialize([mockPageData]);
    
    const stats = configManager.getStats();
    
    expect(stats.totalPages).toBe(1);
    expect(stats.categoryCounts['getting-started']).toBe(1);
    expect(stats.averageScore).toBeGreaterThan(0);
  });

  it('should export and import configurations', async () => {
    await configManager.initialize([mockPageData]);
    
    const exported = configManager.exportConfigs();
    expect(exported).toContain('Test Page Title');
    
    configManager.clearConfigs();
    expect(configManager.getAllPageConfigs()).toHaveLength(0);
    
    const importResult = configManager.importConfigs(exported);
    expect(importResult.success).toBe(true);
    expect(configManager.getAllPageConfigs()).toHaveLength(1);
  });

  it('should handle malformed JSON import', async () => {
    const importResult = configManager.importConfigs('invalid json');
    
    expect(importResult.success).toBe(false);
    expect(importResult.errors).toContain('Invalid JSON format');
  });
});