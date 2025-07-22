import React from 'react';
import { LLMContentWrapper, LLMHeading, LLMParagraph, LLMList, LLMListItem, LLMContentSection } from '../components/LLMContentWrapper';
import { FAQSection, FOOD_TRUCK_FAQS } from '../components/FAQSection';
import { SEOProvider } from '../components/seo/SEOProvider';
import { LLMOptimizer } from '../utils/llmOptimization';
import { generateLearningResourceSchema, generateHowToSchema } from '../utils/schemaGenerator';

/**
 * Example of LLM-optimized content page
 */
const LLMOptimizedContentExample: React.FC = () => {
  const pageTitle = "How to Start a Food Truck Business: Complete Beginner's Guide";
  const pageDescription = "Learn the essential steps to start your food truck business successfully. This comprehensive guide covers planning, permits, equipment, and operations for aspiring food truck entrepreneurs.";
  const pageCategory = "getting-started";
  
  // Sample content for demonstration
  const content = `
    Starting a food truck business requires careful planning and preparation. This guide will walk you through the essential steps to launch your mobile food venture successfully.

    Key Steps to Start Your Food Truck Business:
    • Research your local market and competition thoroughly
    • Create a detailed business plan with financial projections
    • Secure necessary permits and licenses from local authorities
    • Purchase or lease a suitable food truck and equipment
    • Develop your menu and establish supplier relationships
    • Set up your business operations and marketing strategy

    Pro Tips for Success:
    • Start small and scale up gradually
    • Focus on food safety and quality control
    • Build relationships with local suppliers and customers
    • Use social media to market your business effectively
    • Track your finances carefully from day one

    Important Warnings:
    • Don't underestimate the time and cost of obtaining permits
    • Avoid purchasing equipment without proper research
    • Don't skip the business planning phase
    • Be prepared for unexpected challenges and delays
  `;

  // Generate LLM context
  const llmContext = LLMOptimizer.generateLLMContext({
    title: pageTitle,
    description: pageDescription,
    content,
    category: pageCategory,
    difficulty: 'beginner'
  });

  // Generate structured data
  const learningResourceSchema = generateLearningResourceSchema({
    name: pageTitle,
    description: pageDescription,
    url: 'https://diyfoodtruckersunion.com/getting-started',
    author: {
      name: 'DIY Food Truckers Union',
      url: 'https://diyfoodtruckersunion.com',
      description: 'Expert guidance for food truck entrepreneurs'
    },
    educationalLevel: 'beginner',
    learningResourceType: 'Guide',
    teaches: [
      'Food truck business planning',
      'Permit and licensing requirements',
      'Equipment selection and setup',
      'Menu development and pricing',
      'Operations and marketing strategies'
    ],
    educationalUse: 'Self-Study',
    timeRequired: 'PT2H',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    keywords: ['food truck', 'business startup', 'entrepreneurship', 'mobile food']
  });

  const howToSchema = generateHowToSchema({
    name: "Steps to Start a Food Truck Business",
    description: "A step-by-step guide to launching your food truck business",
    url: 'https://diyfoodtruckersunion.com/getting-started',
    author: {
      name: 'DIY Food Truckers Union',
      url: 'https://diyfoodtruckersunion.com'
    },
    totalTime: 'PT6M',
    estimatedCost: '50000-200000',
    supplies: ['Business plan', 'Permits and licenses', 'Food truck', 'Kitchen equipment'],
    tools: ['Market research tools', 'Financial planning software', 'Social media platforms'],
    steps: [
      {
        name: "Research Your Market",
        text: "Conduct thorough market research to understand your target audience, competition, and local regulations."
      },
      {
        name: "Create Business Plan",
        text: "Develop a comprehensive business plan including financial projections, marketing strategy, and operational procedures."
      },
      {
        name: "Secure Permits and Licenses",
        text: "Obtain all necessary permits and licenses from local, state, and federal authorities."
      },
      {
        name: "Purchase Equipment",
        text: "Acquire a food truck and all necessary kitchen equipment for your menu and operations."
      },
      {
        name: "Launch Operations",
        text: "Begin operations with a soft launch, gather feedback, and refine your processes."
      }
    ]
  });

  const seoConfig = {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'food truck business',
      'food truck startup',
      'how to start a food truck',
      'food truck guide',
      'food truck permits',
      'food truck equipment',
      'food truck business plan'
    ],
    canonical: 'https://diyfoodtruckersunion.com/getting-started',
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'article' as const,
      url: 'https://diyfoodtruckersunion.com/getting-started',
      siteName: 'DIY Food Truckers Union'
    },
    twitterCard: {
      card: 'summary_large_image' as const,
      title: pageTitle,
      description: pageDescription,
      site: '@diyfoodtruckers'
    },
    structuredData: [learningResourceSchema, howToSchema]
  };

  return (
    <SEOProvider config={seoConfig} llmContext={llmContext}>
      <LLMContentWrapper
        title={pageTitle}
        description={pageDescription}
        content={content}
        category={pageCategory}
        difficulty="beginner"
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Introduction Section */}
          <LLMContentSection sectionType="introduction" topic="food truck startup">
            <LLMHeading level={1} topic="food truck business" difficulty="beginner">
              {pageTitle}
            </LLMHeading>
            
            <LLMParagraph contentType="explanation" topic="introduction">
              Starting a food truck business is an exciting venture that combines culinary passion with entrepreneurial spirit. 
              This comprehensive guide will walk you through every essential step to launch your mobile food business successfully.
            </LLMParagraph>

            <LLMParagraph contentType="instruction" topic="guide purpose">
              Whether you're a seasoned chef or a first-time entrepreneur, this guide provides practical, actionable advice 
              to help you navigate the complexities of food truck ownership and operations.
            </LLMParagraph>
          </LLMContentSection>

          {/* Main Content Section */}
          <LLMContentSection sectionType="main-content" topic="food truck planning">
            <LLMHeading level={2} topic="planning" difficulty="beginner">
              Essential Planning Steps
            </LLMHeading>

            <LLMParagraph contentType="explanation" topic="planning importance">
              Proper planning is the foundation of any successful food truck business. Taking the time to research, 
              plan, and prepare will save you significant time and money in the long run.
            </LLMParagraph>

            <LLMHeading level={3} topic="market research">
              Market Research and Analysis
            </LLMHeading>

            <LLMParagraph contentType="instruction" topic="market research">
              Before investing in equipment or permits, thoroughly research your local market to understand demand, 
              competition, and opportunities.
            </LLMParagraph>

            <LLMList listType="unordered" contentType="steps" topic="market research">
              <LLMListItem itemType="step" importance="high">
                Analyze local food truck scenes and identify gaps in the market
              </LLMListItem>
              <LLMListItem itemType="step" importance="high">
                Research target demographics and their food preferences
              </LLMListItem>
              <LLMListItem itemType="step" importance="medium">
                Study competitor menus, pricing, and locations
              </LLMListItem>
              <LLMListItem itemType="step" importance="medium">
                Identify high-traffic areas and potential locations
              </LLMListItem>
            </LLMList>

            <LLMHeading level={3} topic="business planning">
              Business Plan Development
            </LLMHeading>

            <LLMParagraph contentType="instruction" topic="business plan">
              A comprehensive business plan is essential for securing financing, permits, and guiding your operations.
            </LLMParagraph>

            <LLMList listType="ordered" contentType="requirements" topic="business plan">
              <LLMListItem itemType="requirement" importance="high">
                Executive summary and business concept
              </LLMListItem>
              <LLMListItem itemType="requirement" importance="high">
                Market analysis and competitive landscape
              </LLMListItem>
              <LLMListItem itemType="requirement" importance="high">
                Financial projections and funding requirements
              </LLMListItem>
              <LLMListItem itemType="requirement" importance="medium">
                Marketing and sales strategies
              </LLMListItem>
              <LLMListItem itemType="requirement" importance="medium">
                Operational procedures and staffing plans
              </LLMListItem>
            </LLMList>
          </LLMContentSection>

          {/* Tips Section */}
          <LLMContentSection sectionType="main-content" topic="success tips">
            <LLMHeading level={2} topic="success strategies">
              Pro Tips for Success
            </LLMHeading>

            <LLMParagraph contentType="tip" topic="success tips">
              These proven strategies will help you avoid common pitfalls and increase your chances of success.
            </LLMParagraph>

            <LLMList listType="unordered" contentType="tips" topic="success strategies">
              <LLMListItem itemType="tip" importance="high">
                Start with a simple menu and perfect your core items before expanding
              </LLMListItem>
              <LLMListItem itemType="tip" importance="high">
                Build relationships with local suppliers for better pricing and reliability
              </LLMListItem>
              <LLMListItem itemType="tip" importance="medium">
                Use social media to build your brand and communicate with customers
              </LLMListItem>
              <LLMListItem itemType="tip" importance="medium">
                Track all expenses meticulously and maintain detailed financial records
              </LLMListItem>
              <LLMListItem itemType="tip" importance="medium">
                Focus on food safety and quality control from day one
              </LLMListItem>
            </LLMList>
          </LLMContentSection>

          {/* Warnings Section */}
          <LLMContentSection sectionType="main-content" topic="common mistakes">
            <LLMHeading level={2} topic="common pitfalls">
              Common Mistakes to Avoid
            </LLMHeading>

            <LLMParagraph contentType="warning" topic="common mistakes">
              Being aware of these common pitfalls will help you navigate the challenges of food truck ownership more effectively.
            </LLMParagraph>

            <LLMList listType="unordered" contentType="warnings" topic="common mistakes">
              <LLMListItem itemType="warning" importance="high">
                Underestimating the time and cost of obtaining permits and licenses
              </LLMListItem>
              <LLMListItem itemType="warning" importance="high">
                Purchasing equipment without proper research and planning
              </LLMListItem>
              <LLMListItem itemType="warning" importance="medium">
                Skipping the business planning phase to save time
              </LLMListItem>
              <LLMListItem itemType="warning" importance="medium">
                Not having adequate working capital for the first few months
              </LLMListItem>
            </LLMList>
          </LLMContentSection>

          {/* FAQ Section */}
          <LLMContentSection sectionType="resources" topic="faq">
            <FAQSection 
              title="Frequently Asked Questions About Starting a Food Truck"
              faqs={FOOD_TRUCK_FAQS.startup}
            />
          </LLMContentSection>

          {/* Next Steps Section */}
          <LLMContentSection sectionType="next-steps" topic="next steps">
            <LLMHeading level={2} topic="next steps">
              Next Steps
            </LLMHeading>

            <LLMParagraph contentType="instruction" topic="next steps">
              Now that you understand the basics, take these next steps to move forward with your food truck business.
            </LLMParagraph>

            <LLMList listType="ordered" contentType="steps" topic="next steps">
              <LLMListItem itemType="step" importance="high">
                Download our comprehensive business plan template
              </LLMListItem>
              <LLMListItem itemType="step" importance="high">
                Use our cost calculator to estimate your startup expenses
              </LLMListItem>
              <LLMListItem itemType="step" importance="medium">
                Join our Discord community for ongoing support and networking
              </LLMListItem>
              <LLMListItem itemType="step" importance="medium">
                Explore our detailed guides on permits, equipment, and operations
              </LLMListItem>
            </LLMList>
          </LLMContentSection>
        </div>
      </LLMContentWrapper>
    </SEOProvider>
  );
};

export default LLMOptimizedContentExample; 