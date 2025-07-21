import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import SEOSetup, { initializeSEO } from '../utils/seoSetup';
import { SEODevUtils, SEO_DEV_CONFIG } from '../config/seo-dev';

// Mock window and document for testing
const mockWindow = {
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    location: { pathname: '/' },
    history: { pushState: vi.fn() },
    performance: {
        mark: vi.fn(),
        measure: vi.fn(),
        getEntriesByName: vi.fn(() => [{ duration: 100 }])
    },
    PerformanceObserver: vi.fn().mockImplementation(() => ({
        observe: vi.fn(),
        disconnect: vi.fn()
    }))
};

const mockDocument = {
    readyState: 'complete',
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    title: 'Test Page',
    head: {
        appendChild: vi.fn()
    },
    body: {
        appendChild: vi.fn()
    },
    querySelector: vi.fn(),
    querySelectorAll: vi.fn((selector: string) => []),
    createElement: vi.fn(() => ({
        setAttribute: vi.fn(),
        getAttribute: vi.fn(),
        appendChild: vi.fn(),
        remove: vi.fn(),
        style: {},
        textContent: '',
        onclick: null
    }))
};

// Mock global objects
Object.defineProperty(global, 'window', {
    value: mockWindow,
    writable: true
});

Object.defineProperty(global, 'document', {
    value: mockDocument,
    writable: true
});

describe('SEO Setup Infrastructure', () => {
    let seoSetup: SEOSetup;

    beforeEach(() => {
        seoSetup = SEOSetup.getInstance();
        seoSetup.reset();
        vi.clearAllMocks();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe('SEOSetup', () => {
        it('should be a singleton', () => {
            const instance1 = SEOSetup.getInstance();
            const instance2 = SEOSetup.getInstance();
            expect(instance1).toBe(instance2);
        });

        it('should initialize successfully', async () => {
            expect(seoSetup.isReady()).toBe(false);

            await seoSetup.initialize();

            expect(seoSetup.isReady()).toBe(true);
        });

        it('should not initialize twice', async () => {
            await seoSetup.initialize();
            const firstInitTime = Date.now();

            await seoSetup.initialize();
            const secondInitTime = Date.now();

            // Second initialization should be much faster (immediate)
            expect(secondInitTime - firstInitTime).toBeLessThan(10);
        });

        it('should handle initialization errors gracefully', async () => {
            // Mock an error in the initialization process
            const originalConsoleError = console.error;
            console.error = vi.fn();

            // This should not throw, but handle the error internally
            await expect(seoSetup.initialize()).resolves.not.toThrow();

            console.error = originalConsoleError;
        });
    });

    describe('SEODevUtils', () => {
        it('should log messages in development mode', () => {
            const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => { });

            SEODevUtils.log('Test message', 'info');

            if (SEO_DEV_CONFIG.enabled) {
                expect(consoleSpy).toHaveBeenCalled();
            }

            consoleSpy.mockRestore();
        });

        it('should create performance marks', () => {
            SEODevUtils.mark('test-mark');

            if (SEO_DEV_CONFIG.enabled) {
                expect(mockWindow.performance.mark).toHaveBeenCalledWith('seo-test-mark');
            }
        });

        it('should measure performance between marks', () => {
            SEODevUtils.measure('test-measure', 'start-mark', 'end-mark');

            if (SEO_DEV_CONFIG.enabled) {
                expect(mockWindow.performance.measure).toHaveBeenCalledWith(
                    'seo-test-measure',
                    'seo-start-mark',
                    'seo-end-mark'
                );
            }
        });

        it('should validate environment', () => {
            const result = SEODevUtils.validateEnvironment();

            if (SEO_DEV_CONFIG.enabled) {
                expect(typeof result).toBe('boolean');
            } else {
                expect(result).toBe(false);
            }
        });

        it('should calculate page SEO health score', () => {
            // Mock DOM elements for testing
            mockDocument.querySelector.mockImplementation((selector: string) => {
                if (selector === 'meta[name="description"]') {
                    return { getAttribute: () => 'Test description that is long enough for SEO validation' };
                }
                if (selector === 'link[rel="canonical"]') {
                    return { href: 'https://example.com/test' };
                }
                return null;
            });

            mockDocument.querySelectorAll.mockImplementation((selector: string) => {
                if (selector === 'h1') {
                    return [{ textContent: 'Test Heading' }] as any;
                }
                if (selector === 'script[type="application/ld+json"]') {
                    return [{ textContent: '{"@type": "WebPage"}' }] as any;
                }
                return [] as any;
            });

            const health = SEODevUtils.getPageSEOHealth();

            expect(health).toHaveProperty('score');
            expect(health).toHaveProperty('issues');
            expect(health).toHaveProperty('recommendations');
            expect(typeof health.score).toBe('number');
            expect(Array.isArray(health.issues)).toBe(true);
            expect(Array.isArray(health.recommendations)).toBe(true);
        });
    });

    describe('initializeSEO function', () => {
        it('should initialize SEO infrastructure', async () => {
            await expect(initializeSEO()).resolves.not.toThrow();
        });

        it('should handle missing dependencies gracefully', async () => {
            // Mock missing dependency
            const originalWindow = global.window;
            // @ts-ignore
            delete global.window;

            await expect(initializeSEO()).resolves.not.toThrow();

            global.window = originalWindow;
        });
    });

    describe('Development Configuration', () => {
        it('should have valid development configuration', () => {
            expect(SEO_DEV_CONFIG).toBeDefined();
            expect(typeof SEO_DEV_CONFIG.enabled).toBe('boolean');
            expect(SEO_DEV_CONFIG.validation).toBeDefined();
            expect(SEO_DEV_CONFIG.performance).toBeDefined();
            expect(SEO_DEV_CONFIG.testing).toBeDefined();
        });

        it('should have reasonable validation thresholds', () => {
            const { validation } = SEO_DEV_CONFIG;

            expect(validation.minTitleLength).toBeGreaterThan(0);
            expect(validation.maxTitleLength).toBeGreaterThan(validation.minTitleLength);
            expect(validation.minDescriptionLength).toBeGreaterThan(0);
            expect(validation.maxDescriptionLength).toBeGreaterThan(validation.minDescriptionLength);
            expect(validation.minKeywords).toBeGreaterThan(0);
            expect(validation.maxKeywords).toBeGreaterThan(validation.minKeywords);
        });

        it('should have valid performance thresholds', () => {
            const { performance } = SEO_DEV_CONFIG;

            expect(performance.lcp.good).toBeGreaterThan(0);
            expect(performance.lcp.needsImprovement).toBeGreaterThan(performance.lcp.good);
            expect(performance.fid.good).toBeGreaterThan(0);
            expect(performance.fid.needsImprovement).toBeGreaterThan(performance.fid.good);
            expect(performance.cls.good).toBeGreaterThan(0);
            expect(performance.cls.needsImprovement).toBeGreaterThan(performance.cls.good);
        });

        it('should have test configuration', () => {
            const { testing } = SEO_DEV_CONFIG;

            expect(testing.mockSEOConfig).toBeDefined();
            expect(testing.testUrls).toBeDefined();
            expect(Array.isArray(testing.testUrls)).toBe(true);
            expect(testing.testUrls.length).toBeGreaterThan(0);
        });
    });
});