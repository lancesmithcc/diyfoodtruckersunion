import React from 'react';
import { FAQItem } from '../types/seo';
import { SchemaGenerator } from '../utils/schemaGenerator';
import { SingleSchemaProvider } from './seo/StructuredDataProvider';

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  className?: string;
  showSchema?: boolean;
}

/**
 * FAQ Section component for improved SEO and featured snippets
 */
export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  faqs,
  className = "",
  showSchema = true
}) => {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  // Generate structured data for FAQs
  const faqSchema = React.useMemo(() => {
    if (!showSchema || faqs.length === 0) return null;
    return SchemaGenerator.generateFAQSchema(faqs);
  }, [faqs, showSchema]);

  if (faqs.length === 0) {
    return null;
  }

  return (
    <section className={`faq-section ${className}`}>
      {faqSchema && <SingleSchemaProvider schema={faqSchema} />}
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                aria-expanded={openItems.has(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openItems.has(index) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`px-6 py-4 bg-white transition-all duration-200 ${
                  openItems.has(index) ? 'block' : 'hidden'
                }`}
              >
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Predefined FAQ sets for common food truck topics
 */
export const FOOD_TRUCK_FAQS: Record<string, FAQItem[]> = {
  startup: [
    {
      question: "How much does it cost to start a food truck business?",
      answer: "Startup costs typically range from $50,000 to $200,000, including the truck ($20,000-$100,000), equipment ($10,000-$50,000), permits ($1,000-$5,000), and initial inventory ($2,000-$10,000). Additional costs include insurance, marketing, and working capital for the first few months.",
      category: "costs"
    },
    {
      question: "What permits do I need for a food truck?",
      answer: "You'll need a business license, food service permit, mobile food vendor permit, and potentially health department approvals. Requirements vary by location, so check with your local city and county offices. You may also need special event permits for festivals and private catering.",
      category: "permits"
    },
    {
      question: "How long does it take to start a food truck business?",
      answer: "The timeline varies from 3-12 months depending on your location and preparation. Key steps include: business planning (1-2 months), securing permits (1-3 months), purchasing/outfitting truck (1-2 months), and testing your concept (1-2 months).",
      category: "timeline"
    },
    {
      question: "Do I need a commercial kitchen for a food truck?",
      answer: "Requirements vary by location. Some areas require a commissary kitchen for food prep and storage, while others allow full preparation in the truck. Check your local health department regulations. Many food truck owners rent space in commercial kitchens or partner with restaurants.",
      category: "requirements"
    }
  ],
  operations: [
    {
      question: "How do I find good locations for my food truck?",
      answer: "Research high-traffic areas like business districts, universities, construction sites, and events. Use apps like Roaming Hunger or Food Truck Finder. Network with other food truck owners and event organizers. Consider office parks, hospitals, and industrial areas for lunch crowds.",
      category: "location"
    },
    {
      question: "What's the best way to manage food truck inventory?",
      answer: "Use inventory management software or simple spreadsheets to track stock levels, expiration dates, and costs. Plan menus based on ingredient shelf life. Build relationships with local suppliers for better pricing and delivery options. Consider prep-to-order items to reduce waste.",
      category: "inventory"
    },
    {
      question: "How do I handle food truck maintenance and repairs?",
      answer: "Schedule regular maintenance for both the vehicle and kitchen equipment. Keep emergency repair contacts handy. Budget 5-10% of revenue for maintenance costs. Learn basic troubleshooting for common issues. Consider a service contract for major equipment.",
      category: "maintenance"
    },
    {
      question: "What's the best way to handle food truck staffing?",
      answer: "Start with a small, reliable team of 2-3 people. Cross-train staff on all positions. Use scheduling apps to manage shifts and payroll. Consider hiring experienced food service workers who understand the fast-paced environment. Offer competitive pay and flexible schedules.",
      category: "staffing"
    }
  ],
  financial: [
    {
      question: "How much profit can I expect from a food truck?",
      answer: "Profit margins typically range from 15-30% depending on your concept and efficiency. Average daily revenue is $500-$2,000. Successful food trucks can generate $100,000-$500,000 annually. Focus on high-margin items and efficient operations to maximize profits.",
      category: "profit"
    },
    {
      question: "What are the biggest food truck expenses?",
      answer: "Major expenses include: food costs (25-35% of revenue), labor (20-30%), fuel and vehicle maintenance (5-10%), permits and insurance (5-10%), and marketing (5-15%). Track all expenses carefully and look for ways to reduce costs without sacrificing quality.",
      category: "expenses"
    },
    {
      question: "How do I price my food truck menu items?",
      answer: "Calculate food costs and add 3-4x markup for profit. Research competitor pricing in your area. Consider your target market's price sensitivity. Factor in overhead costs and desired profit margin. Test pricing with small batches before committing to menu prices.",
      category: "pricing"
    },
    {
      question: "What financing options are available for food trucks?",
      answer: "Options include: SBA loans, equipment financing, personal loans, crowdfunding, and partnerships. Food truck financing typically requires 10-30% down payment. Consider leasing equipment initially to reduce upfront costs. Build good credit and prepare a solid business plan.",
      category: "financing"
    }
  ],
  marketing: [
    {
      question: "How do I market my food truck effectively?",
      answer: "Use social media (Instagram, Facebook, Twitter) to share your location, menu, and behind-the-scenes content. Partner with local businesses and events. Use food truck apps to reach customers. Create a memorable brand with consistent visuals and messaging.",
      category: "marketing"
    },
    {
      question: "What's the best way to build a food truck customer base?",
      answer: "Consistency is key - show up at the same locations regularly. Engage with customers on social media and in person. Offer loyalty programs or punch cards. Partner with local businesses for catering opportunities. Attend community events and festivals.",
      category: "customers"
    },
    {
      question: "How do I handle food truck competition?",
      answer: "Differentiate your concept and menu from competitors. Focus on quality, service, and unique offerings. Build relationships with other food truck owners for collaboration opportunities. Stay updated on food trends and customer preferences. Consider niche markets or specialty cuisines.",
      category: "competition"
    },
    {
      question: "What social media platforms work best for food trucks?",
      answer: "Instagram is essential for food photography and location updates. Facebook is great for events and community engagement. Twitter works well for real-time location updates. TikTok can help reach younger audiences. Focus on platforms where your target customers are most active.",
      category: "social-media"
    }
  ]
};

export default FAQSection; 