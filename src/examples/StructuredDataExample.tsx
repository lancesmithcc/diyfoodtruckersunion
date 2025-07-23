import React from 'react';
import { StructuredDataProvider, createContentStructuredData } from '../components/seo/StructuredDataProvider';

/**
 * Example of how to use StructuredDataProvider in a page component
 */
const ExampleLessonPage: React.FC = () => {
  // Create page data for structured data generation
  const pageData = createContentStructuredData.lesson({
    title: 'Food Truck Business Planning Fundamentals',
    description: 'Learn the essential steps to plan your food truck business successfully. This comprehensive guide covers market research, financial planning, and operational considerations.',
    slug: '/lessons/business-planning-fundamentals',
    author: {
      name: 'DIY Food Truckers Union',
      url: 'https://diyfoodtruckers.ca'
    },
    difficulty: 'beginner',
    estimatedReadTime: 25,
    keywords: ['food truck', 'business planning', 'startup', 'market research', 'financial planning'],
    lastUpdated: '2024-01-20T00:00:00.000Z'
  });

  // Optional: Add custom structured data schemas
  const customSchemas: any[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does it cost to start a food truck business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Startup costs typically range from $50,000 to $200,000, including the truck, equipment, permits, and initial inventory. Our cost calculator can help you estimate your specific needs.'
          }
        },
        {
          '@type': 'Question',
          name: 'What permits do I need for a food truck?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You\'ll need a business license, food service permit, mobile food vendor permit, and potentially health department approvals. Requirements vary by location.'
          }
        }
      ]
    }
  ];

  return (
    <StructuredDataProvider 
      pageData={pageData}
      additionalSchemas={customSchemas}
    >
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Food Truck Business Planning Fundamentals
          </h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
              Beginner
            </span>
            <span>25 min read</span>
            <span>Updated Jan 20, 2024</span>
          </div>
        </header>

        <section className="prose prose-lg max-w-none">
          <p className="lead">
            Starting a food truck business requires careful planning and preparation. 
            This lesson will guide you through the essential steps to create a solid 
            foundation for your mobile food venture.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>How to conduct effective market research</li>
            <li>Financial planning and budgeting strategies</li>
            <li>Operational considerations for mobile food service</li>
            <li>Legal requirements and permit processes</li>
          </ul>

          <h2>Market Research Fundamentals</h2>
          <p>
            Understanding your target market is crucial for food truck success. 
            You need to identify who your customers are, where they gather, 
            and what they're willing to pay for your offerings.
          </p>

          <h3>Key Research Areas</h3>
          <ul>
            <li>Demographics and psychographics of potential customers</li>
            <li>Competition analysis in your target areas</li>
            <li>Location scouting and foot traffic patterns</li>
            <li>Pricing research and market positioning</li>
          </ul>

          <h2>Financial Planning</h2>
          <p>
            Creating realistic financial projections helps you understand startup 
            costs, ongoing expenses, and revenue potential. This planning is 
            essential for securing funding and managing cash flow.
          </p>

          <h3>Startup Cost Categories</h3>
          <ul>
            <li>Food truck purchase or lease</li>
            <li>Kitchen equipment and setup</li>
            <li>Permits and licensing fees</li>
            <li>Initial inventory and supplies</li>
            <li>Marketing and branding materials</li>
            <li>Working capital for first few months</li>
          </ul>
        </section>

        <aside className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Next Steps
          </h3>
          <p className="text-blue-800 mb-4">
            Ready to dive deeper into food truck business planning? 
            Check out our comprehensive business plan template and 
            financial calculator tools.
          </p>
          <div className="space-x-4">
            <a 
              href="/resources/business-plan-template" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Get Business Plan Template
            </a>
            <a 
              href="/tools/financial-calculator" 
              className="inline-block bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50"
            >
              Use Financial Calculator
            </a>
          </div>
        </aside>
      </article>
    </StructuredDataProvider>
  );
};

/**
 * Example of using the withStructuredData HOC
 */
interface ResourcePageProps {
  title: string;
  description: string;
  resourceType: 'template' | 'calculator' | 'guide';
}

const ExampleResourcePage: React.FC<ResourcePageProps> = ({ title, description, resourceType }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-600">
          {description}
        </p>
        <div className="mt-4">
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
            {resourceType}
          </span>
        </div>
      </header>

      <section className="prose prose-lg max-w-none">
        <p>
          This resource provides practical tools and templates to help you 
          succeed in your food truck business journey.
        </p>
        
        <h2>How to Use This Resource</h2>
        <ol>
          <li>Download the template or access the tool</li>
          <li>Follow the step-by-step instructions</li>
          <li>Customize for your specific business needs</li>
          <li>Save and update regularly as your business evolves</li>
        </ol>
      </section>
    </article>
  );
};

// Using the HOC approach
import { withStructuredData } from '../components/seo/StructuredDataProvider';

const EnhancedResourcePage = withStructuredData(
  ExampleResourcePage,
  (props: ResourcePageProps) => createContentStructuredData.resource({
    title: props.title,
    description: props.description,
    slug: `/resources/${props.resourceType}`,
    keywords: ['food truck', 'resources', props.resourceType],
    lastUpdated: new Date().toISOString()
  })
);

/**
 * Example usage in a route or parent component
 */
const ExampleUsage: React.FC = () => {
  return (
    <div>
      <h1>Structured Data Examples</h1>
      
      {/* Direct usage with StructuredDataProvider */}
      <ExampleLessonPage />
      
      {/* HOC usage */}
      <EnhancedResourcePage 
        title="Food Truck Business Plan Template"
        description="Comprehensive template to create your food truck business plan"
        resourceType="template"
      />
    </div>
  );
};

export default ExampleUsage;
export { ExampleLessonPage, EnhancedResourcePage };