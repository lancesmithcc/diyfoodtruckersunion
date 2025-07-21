import { describe, it, expect } from 'vitest';
import { SchemaGenerator, DEFAULT_ORGANIZATION_DATA } from '../utils/schemaGenerator';
import type { ArticleSchemaData, CourseSchemaData } from '../utils/schemaGenerator';
import type { FAQItem, BreadcrumbItem } from '../types/seo';

describe('SchemaGenerator', () => {
    describe('generateOrganizationSchema', () => {
        it('should generate valid organization schema', () => {
            const schema = SchemaGenerator.generateOrganizationSchema(DEFAULT_ORGANIZATION_DATA);

            expect((schema as any)['@context']).toBe('https://schema.org');
            expect((schema as any)['@type']).toBe('Organization');
            expect(schema.name).toBe('DIY Food Truckers Union');
            expect(schema.url).toBe('https://diyfoodtruckersunion.com');
            expect(schema.description).toContain('food truck entrepreneurs');
        });

        it('should include logo when provided', () => {
            const schema = SchemaGenerator.generateOrganizationSchema(DEFAULT_ORGANIZATION_DATA);

            expect(schema.logo).toBeDefined();
            expect(schema.logo).toEqual({
                '@type': 'ImageObject',
                url: 'https://diyfoodtruckersunion.com/img/logo.svg'
            });
        });
    });

    describe('generateArticleSchema', () => {
        const articleData: ArticleSchemaData = {
            headline: 'How to Start a Food Truck Business',
            description: 'Complete guide to starting your food truck business',
            url: 'https://diyfoodtruckersunion.com/getting-started',
            datePublished: '2024-01-01',
            author: {
                name: 'DIY Food Truckers Union',
                url: 'https://diyfoodtruckersunion.com',
                description: 'Food truck business experts'
            },
            category: 'getting-started',
            keywords: ['food truck', 'business', 'startup']
        };

        it('should generate valid article schema', () => {
            const schema = SchemaGenerator.generateArticleSchema(articleData);

            expect((schema as any)['@context']).toBe('https://schema.org');
            expect((schema as any)['@type']).toBe('Article');
            expect(schema.headline).toBe(articleData.headline);
            expect(schema.description).toBe(articleData.description);
            expect(schema.url).toBe(articleData.url);
            expect(schema.datePublished).toBe(articleData.datePublished);
        });

        it('should include author information', () => {
            const schema = SchemaGenerator.generateArticleSchema(articleData);

            expect(schema.author).toEqual({
                '@type': 'Person',
                name: 'DIY Food Truckers Union',
                url: 'https://diyfoodtruckersunion.com',
                description: 'Food truck business experts'
            });
        });

        it('should include publisher information', () => {
            const schema = SchemaGenerator.generateArticleSchema(articleData);

            expect(schema.publisher).toEqual({
                '@type': 'Organization',
                name: 'DIY Food Truckers Union',
                url: 'https://diyfoodtruckersunion.com',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://diyfoodtruckersunion.com/img/logo.svg'
                }
            });
        });

        it('should include keywords when provided', () => {
            const schema = SchemaGenerator.generateArticleSchema(articleData);

            expect(schema.keywords).toBe('food truck, business, startup');
        });
    });

    describe('generateCourseSchema', () => {
        const courseData: CourseSchemaData = {
            name: 'Food Truck Business Planning',
            description: 'Learn how to plan your food truck business',
            url: 'https://diyfoodtruckersunion.com/business-planning',
            provider: DEFAULT_ORGANIZATION_DATA,
            difficulty: 'beginner',
            estimatedDuration: 'PT2H',
            category: 'planning',
            keywords: ['business planning', 'food truck'],
            learningOutcomes: ['Create a business plan', 'Understand market research']
        };

        it('should generate valid course schema', () => {
            const schema = SchemaGenerator.generateCourseSchema(courseData);

            expect((schema as any)['@context']).toBe('https://schema.org');
            expect((schema as any)['@type']).toBe('Course');
            expect(schema.name).toBe(courseData.name);
            expect(schema.description).toBe(courseData.description);
            expect(schema.url).toBe(courseData.url);
        });

        it('should include provider information', () => {
            const schema = SchemaGenerator.generateCourseSchema(courseData);

            expect(schema.provider).toEqual({
                '@type': 'Organization',
                name: 'DIY Food Truckers Union',
                url: 'https://diyfoodtruckersunion.com'
            });
        });

        it('should include educational metadata', () => {
            const schema = SchemaGenerator.generateCourseSchema(courseData);

            expect(schema.educationalLevel).toBe('beginner');
            expect(schema.timeRequired).toBe('PT2H');
            expect(schema.teaches).toEqual(['Create a business plan', 'Understand market research']);
        });
    });

    describe('generateFAQSchema', () => {
        const faqData: FAQItem[] = [
            {
                question: 'How much does it cost to start a food truck?',
                answer: 'Starting costs typically range from $40,000 to $200,000 depending on various factors.'
            },
            {
                question: 'Do I need a special license for a food truck?',
                answer: 'Yes, you need various permits including business license, food handler permit, and mobile vendor permit.'
            }
        ];

        it('should generate valid FAQ schema', () => {
            const schema = SchemaGenerator.generateFAQSchema(faqData);

            expect((schema as any)['@context']).toBe('https://schema.org');
            expect((schema as any)['@type']).toBe('FAQPage');
            expect(schema.mainEntity).toHaveLength(2);
        });

        it('should format questions and answers correctly', () => {
            const schema = SchemaGenerator.generateFAQSchema(faqData);

            const firstQuestion = schema.mainEntity[0];
            expect((firstQuestion as any)['@type']).toBe('Question');
            expect(firstQuestion.name).toBe(faqData[0].question);
            expect(firstQuestion.acceptedAnswer).toEqual({
                '@type': 'Answer',
                text: faqData[0].answer
            });
        });

        it('should throw error for empty FAQ data', () => {
            expect(() => SchemaGenerator.generateFAQSchema([])).toThrow('FAQ data is required');
        });
    });

    describe('generateBreadcrumbSchema', () => {
        const breadcrumbData: BreadcrumbItem[] = [
            { name: 'Home', url: 'https://diyfoodtruckersunion.com', position: 1 },
            { name: 'Getting Started', url: 'https://diyfoodtruckersunion.com/getting-started', position: 2 },
            { name: 'Business Planning', url: 'https://diyfoodtruckersunion.com/business-planning', position: 3 }
        ];

        it('should generate valid breadcrumb schema', () => {
            const schema = SchemaGenerator.generateBreadcrumbSchema(breadcrumbData);

            expect((schema as any)['@context']).toBe('https://schema.org');
            expect((schema as any)['@type']).toBe('BreadcrumbList');
            expect(schema.itemListElement).toHaveLength(3);
        });

        it('should format breadcrumb items correctly', () => {
            const schema = SchemaGenerator.generateBreadcrumbSchema(breadcrumbData);

            const firstItem = schema.itemListElement[0];
            expect((firstItem as any)['@type']).toBe('ListItem');
            expect(firstItem.position).toBe(1);
            expect(firstItem.name).toBe('Home');
            expect(firstItem.item).toBe('https://diyfoodtruckersunion.com');
        });

        it('should throw error for empty breadcrumb data', () => {
            expect(() => SchemaGenerator.generateBreadcrumbSchema([])).toThrow('Breadcrumb data is required');
        });
    });

    describe('validateSchema', () => {
        it('should validate correct schema', () => {
            const validSchema = {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Test'
            };

            const result = SchemaGenerator.validateSchema(validSchema);
            expect(result.isValid).toBe(true);
            expect(result.errors).toHaveLength(0);
        });

        it('should detect missing @context', () => {
            const invalidSchema = {
                '@type': 'Organization',
                name: 'Test'
            };

            const result = SchemaGenerator.validateSchema(invalidSchema);
            expect(result.isValid).toBe(false);
            expect(result.errors).toContain('Missing @context property');
        });

        it('should detect missing @type', () => {
            const invalidSchema = {
                '@context': 'https://schema.org',
                name: 'Test'
            };

            const result = SchemaGenerator.validateSchema(invalidSchema);
            expect(result.isValid).toBe(false);
            expect(result.errors).toContain('Missing @type property');
        });

        it('should detect invalid @context', () => {
            const invalidSchema = {
                '@context': 'https://example.com',
                '@type': 'Organization',
                name: 'Test'
            };

            const result = SchemaGenerator.validateSchema(invalidSchema);
            expect(result.isValid).toBe(false);
            expect(result.errors).toContain('Invalid @context value, should be "https://schema.org"');
        });
    });

    describe('generatePageSchemas', () => {
        it('should generate multiple schemas for a lesson page', () => {
            const pageData = {
                type: 'lesson' as const,
                organization: DEFAULT_ORGANIZATION_DATA,
                article: {
                    headline: 'Test Lesson',
                    description: 'Test description',
                    url: 'https://example.com/test',
                    datePublished: '2024-01-01',
                    author: { name: 'Test Author' }
                } as ArticleSchemaData,
                course: {
                    name: 'Test Course',
                    description: 'Test course description',
                    url: 'https://example.com/course',
                    provider: DEFAULT_ORGANIZATION_DATA
                } as CourseSchemaData,
                breadcrumbs: [
                    { name: 'Home', url: 'https://example.com', position: 1 }
                ]
            };

            const schemas = SchemaGenerator.generatePageSchemas(pageData);

            expect(schemas).toHaveLength(4); // Organization, Article, Course, Breadcrumb
            expect((schemas[0] as any)['@type']).toBe('Organization');
            expect((schemas[1] as any)['@type']).toBe('Article');
            expect((schemas[2] as any)['@type']).toBe('Course');
            expect((schemas[3] as any)['@type']).toBe('BreadcrumbList');
        });
    });
});