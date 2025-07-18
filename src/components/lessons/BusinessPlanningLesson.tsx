import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, TrendingUp, MapPin, DollarSign, FileText, CheckCircle, ArrowRight, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BusinessPlanningLesson: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedActions, setCompletedActions] = useState<{ [key: number]: boolean[] }>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.lesson-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [currentStep]);

  const toggleActionItem = (stepIndex: number, actionIndex: number) => {
    setCompletedActions(prev => ({
      ...prev,
      [stepIndex]: {
        ...prev[stepIndex],
        [actionIndex]: !prev[stepIndex]?.[actionIndex]
      }
    }));
  };

  const getCompletedCount = (stepIndex: number) => {
    const actions = completedActions[stepIndex];
    if (!actions) return 0;
    return Object.values(actions).filter(Boolean).length;
  };

  const lessonSteps = [
    {
      icon: Target,
      title: 'Define Your Food Truck Concept',
      content: `Your food truck concept is the foundation of your entire business. This isn't just about choosing what food to serve – it's about creating a unique identity that will set you apart in a competitive market.

**Why This Matters:**
Starting with a clear, well-defined concept helps you make consistent decisions throughout your business journey. It guides everything from your menu design to your marketing strategy, and most importantly, it helps potential customers understand what makes you special.

**The "Start Smart, Not Expensive" Approach:**
Many new food truck owners think they need to serve everything to everyone. This is expensive and confusing. Instead, focus on doing a few things exceptionally well. This reduces your startup costs, simplifies operations, and creates a memorable brand.

**Key Considerations:**
- **Cuisine Focus**: Choose a cuisine you're passionate about and skilled in preparing
- **Unique Selling Proposition**: What makes your food truck different from the 20 others in your city?
- **Target Market Alignment**: Your concept should appeal to your ideal customers
- **Operational Feasibility**: Can you execute this concept efficiently in a mobile kitchen?
- **Scalability**: Will this concept allow you to grow and expand?

**Real-World Example:**
Instead of "Mexican Food Truck," consider "Authentic Oaxacan Street Tacos with Handmade Tortillas." The second concept is specific, memorable, and immediately communicates quality and authenticity.`,
      actionItems: [
        'Write a one-paragraph elevator pitch describing your food truck concept',
        'List your top 5-7 signature menu items that define your concept',
        'Identify 3 specific things that make your concept unique',
        'Survey 10 potential customers about your concept and gather feedback',
        'Research 3 successful food trucks with similar concepts for inspiration'
      ],
      tips: [
        'Your concept should be something you can explain in 30 seconds or less',
        'Test your concept with friends and family before committing',
        'Consider seasonal variations and how your concept adapts'
      ]
    },
    {
      icon: Users,
      title: 'Identify Your Target Market',
      content: `Understanding your ideal customers is crucial for every business decision you'll make. Your target market determines where you park, what you charge, how you market, and even what equipment you need.

**The Community-Driven Approach:**
Successful food truck owners don't just serve food – they build communities. Your target market isn't just demographics; it's about understanding the lifestyle, values, and needs of the people you want to serve.

**Demographics vs. Psychographics:**
While age and income matter, psychographics (lifestyle, values, interests) are often more important for food trucks. A 25-year-old tech worker and a 45-year-old teacher might both be your ideal customers if they share similar food values and lifestyle patterns.

**Location Intelligence:**
Your target market directly impacts your location strategy. Office workers need quick service during lunch hours, while families at weekend markets want a more relaxed experience. Understanding this helps you optimize your operations and maximize revenue.

**Key Research Areas:**
- **Primary Demographics**: Age, income, occupation, family status
- **Geographic Patterns**: Where do they work, live, and spend leisure time?
- **Food Preferences**: Dietary restrictions, price sensitivity, flavor preferences
- **Behavioral Patterns**: When do they eat out? How often? What influences their choices?
- **Pain Points**: What problems can your food truck solve for them?

**Budget-Conscious Insight:**
Knowing your target market helps you avoid expensive mistakes. If your customers are price-sensitive, you can focus on value rather than premium ingredients. If they're health-conscious, you can invest in organic options that command higher prices.`,
      actionItems: [
        'Create 2-3 detailed customer personas with names, ages, jobs, and lifestyles',
        'Map out the daily and weekly patterns of your target customers',
        'Identify the top 5 locations where your customers spend time',
        'Determine the optimal price range based on your target market research',
        'List the specific problems your food truck will solve for these customers'
      ],
      tips: [
        'Talk to potential customers in person – surveys only tell part of the story',
        'Observe successful businesses that serve your target market',
        'Consider multiple target segments but prioritize your primary market'
      ]
    },
    {
      icon: MapPin,
      title: 'Analyze Your Competition',
      content: `Competition analysis isn't about copying what others do – it's about finding opportunities and understanding the market landscape. In the food truck industry, your competition includes both other food trucks and brick-and-mortar restaurants.

**Types of Competition:**
- **Direct Competitors**: Other food trucks serving similar cuisine
- **Indirect Competitors**: Different food types competing for the same customers and locations
- **Substitute Competition**: Grocery stores, meal kits, and other food alternatives

**The "Real Advice from Real Operators" Method:**
Don't just look at competitors from the outside. Talk to other food truck operators, visit them as a customer, and understand their challenges. The food truck community is generally supportive, and you can learn valuable lessons from their experiences.

**What to Analyze:**
- **Menu and Pricing**: What do they serve and how much do they charge?
- **Location Strategy**: Where do they park and when?
- **Service Style**: Fast casual, gourmet, family-friendly?
- **Marketing Approach**: How do they attract and retain customers?
- **Operational Efficiency**: How quickly do they serve customers?
- **Customer Feedback**: What do reviews and social media say?

**Finding Your Competitive Advantage:**
Look for gaps in the market. Maybe everyone serves lunch but nobody focuses on breakfast. Perhaps there's a cuisine that's popular in restaurants but underrepresented in food trucks. Your competitive advantage might be better ingredients, faster service, unique flavors, or superior customer experience.

**Budget-Friendly Research:**
You don't need expensive market research. Visit competitors during different times and days. Order from them. Follow their social media. Talk to their customers. This hands-on research costs little but provides invaluable insights.`,
      actionItems: [
        'Visit and order from 8-10 competing food trucks and restaurants',
        'Create a competitive analysis spreadsheet comparing menus, prices, and locations',
        'Identify 3 specific gaps in the market that your concept could fill',
        'Analyze competitor social media and customer reviews for insights',
        'Determine your key competitive advantages and how to communicate them'
      ],
      tips: [
        'Visit competitors at different times to understand their peak hours',
        'Pay attention to what customers complain about – these are opportunities',
        'Network with other food truck operators – competition can become collaboration'
      ]
    },
    {
      icon: DollarSign,
      title: 'Financial Projections & Budgeting',
      content: `Realistic financial projections are essential for making informed decisions and securing funding. Many food truck startups fail because they underestimate costs or overestimate revenue. Our approach focuses on conservative, achievable projections.

**The "Start Smart, Not Expensive" Financial Philosophy:**
Begin with conservative revenue estimates and realistic cost projections. It's better to be pleasantly surprised than to run out of money. Plan for the worst-case scenario while working toward the best-case outcome.

**Key Financial Components:**

**Startup Costs:**
- Food truck or trailer: $15,000 - $120,000
- Kitchen equipment: $8,000 - $40,000
- Permits and licenses: $1,500 - $6,000
- Insurance: $2,000 - $8,000 annually
- Initial marketing: $500 - $6,000
- Working capital: $3,000 - $12,000

**Monthly Operating Expenses:**
- Food costs (25-35% of revenue)
- Fuel and maintenance: $800 - $1,500
- Insurance: $200 - $600
- Permits and renewals: $100 - $300
- Marketing: $200 - $800
- Commissary fees: $200 - $800

**Revenue Projections:**
Start conservatively. A new food truck might average $300-800 per day initially, growing to $800-2,000+ as you build a customer base. Consider seasonal variations and local factors.

**Break-Even Analysis:**
Calculate how many customers you need daily to cover expenses. If your average order is $12 and you need $600 daily revenue to break even, you need 50 customers per day. Is this realistic for your concept and locations?`,
      actionItems: [
        'Complete a detailed startup cost estimate using our calculator',
        'Project monthly revenues for your first year, accounting for seasonality',
        'Calculate your break-even point in customers per day',
        'Create a cash flow forecast for the first 12 months',
        'Identify potential funding sources and amounts needed'
      ],
      tips: [
        'Add 20% buffer to all cost estimates for unexpected expenses',
        'Revenue often starts slower than expected – plan accordingly',
        'Track every expense from day one to validate your projections'
      ]
    },
    {
      icon: TrendingUp,
      title: 'SWOT Analysis',
      content: `A SWOT analysis helps you honestly assess your business idea by examining Strengths, Weaknesses, Opportunities, and Threats. This strategic planning tool guides decision-making and helps you prepare for challenges.

**Conducting an Honest SWOT:**
Be brutally honest about your weaknesses and realistic about opportunities. The goal isn't to create a perfect picture but to understand your situation clearly so you can make informed decisions.

**Strengths (Internal Positive Factors):**
What advantages do you have? This might include:
- Culinary skills and experience
- Unique recipes or family traditions
- Strong local connections
- Previous business experience
- Financial resources
- Passionate personality that attracts customers

**Weaknesses (Internal Negative Factors):**
What limitations do you face? Consider:
- Limited food service experience
- Tight budget constraints
- Lack of business management skills
- Limited time availability
- No existing customer base
- Unfamiliarity with regulations

**Opportunities (External Positive Factors):**
What market conditions favor your success?
- Growing food truck market in your area
- Underserved cuisine or location
- Upcoming events or developments
- Supportive local regulations
- Strong local food culture
- Economic conditions favoring affordable dining

**Threats (External Negative Factors):**
What challenges might you face?
- Established competition
- Changing regulations
- Economic downturns
- Seasonal weather impacts
- Rising food or fuel costs
- Permit limitations

**Turning Analysis into Action:**
Use your SWOT to develop strategies. Leverage strengths to capitalize on opportunities. Address weaknesses before they become problems. Prepare contingency plans for threats.`,
      actionItems: [
        'List 5 specific strengths you bring to your food truck business',
        'Honestly identify 5 weaknesses you need to address or manage',
        'Research and document 3 market opportunities you can pursue',
        'Identify 3 potential threats and develop mitigation strategies',
        'Create action plans to leverage strengths and address weaknesses'
      ],
      tips: [
        'Get input from trusted friends or mentors for objective perspective',
        'Update your SWOT analysis regularly as conditions change',
        'Focus on actionable insights rather than just listing items'
      ]
    },
    {
      icon: FileText,
      title: 'Write Your Business Plan',
      content: `Your business plan compiles all your research into a comprehensive document that guides your decisions and communicates your vision to potential investors, partners, or lenders.

**The Practical Business Plan Approach:**
Your business plan should be a working document, not just something to satisfy investors. It should help you make daily decisions and track progress toward your goals.

**Essential Sections:**

**Executive Summary:**
A compelling 1-2 page overview of your entire business. Write this last, but put it first. It should capture the essence of your concept, target market, competitive advantage, and financial projections.

**Market Analysis:**
Summarize your target market research and competitive analysis. Demonstrate that you understand your customers and the competitive landscape.

**Marketing and Sales Strategy:**
Explain how you'll attract and retain customers. Include your pricing strategy, promotional plans, and customer acquisition tactics.

**Operations Plan:**
Detail your daily operations, including location strategy, hours of operation, staffing plans, and supplier relationships.

**Management Team:**
Describe your background and any key team members. If you're lacking experience in certain areas, explain how you'll address these gaps.

**Financial Projections:**
Include your startup costs, revenue projections, expense forecasts, and break-even analysis. Be conservative and show multiple scenarios.

**Funding Request (if applicable):**
If seeking funding, clearly state how much you need, how you'll use it, and how investors will benefit.

**Making It Actionable:**
Your business plan should include specific milestones and timelines. Break down your launch process into manageable steps with deadlines.`,
      actionItems: [
        'Download and customize our food truck business plan template',
        'Write a compelling executive summary that captures your vision',
        'Complete all sections with specific, researched information',
        'Create a timeline with milestones for your first year',
        'Review your plan with a mentor, advisor, or experienced operator'
      ],
      tips: [
        'Keep your plan concise but comprehensive – aim for 15-25 pages',
        'Use charts and graphs to make financial data easy to understand',
        'Update your business plan regularly as you learn and grow'
      ]
    }
  ];

  const currentStepData = lessonSteps[currentStep];
  const isStepComplete = currentStepData && getCompletedCount(currentStep) === currentStepData.actionItems.length;

  return (
    <section ref={sectionRef} id="business-planning-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Business Planning & <span className="text-primary-500">Market Research</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Master the fundamentals of food truck business planning with our step-by-step approach. 
            This lesson will guide you through market research, competition analysis, and creating a solid business foundation.
          </p>
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            {lessonSteps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index <= currentStep ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="text-sm font-redhat text-gray-500">
            Step {currentStep + 1} of {lessonSteps.length}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="lesson-content">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <currentStepData.icon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-caprasimo">{currentStepData.title}</h2>
                  <div className="text-sm opacity-90">
                    Step {currentStep + 1} of {lessonSteps.length}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              {/* Lesson Content */}
              <div className="prose prose-lg max-w-none mb-8">
                {currentStepData.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-caprasimo text-gray-800 mt-6 mb-3">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="font-redhat text-gray-700 mb-4 leading-relaxed">
                      {paragraph.split('**').map((part, partIndex) => 
                        partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part
                      )}
                    </p>
                  );
                })}
              </div>

              {/* Pro Tips */}
              {currentStepData.tips && (
                <div className="bg-accent-50 rounded-lg p-6 mb-8 border border-accent-200">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-5 w-5 text-accent-600 mr-2" />
                    <h3 className="text-lg font-caprasimo text-accent-800">Pro Tips</h3>
                  </div>
                  <ul className="space-y-2">
                    {currentStepData.tips.map((tip, index) => (
                      <li key={index} className="flex items-start font-redhat text-accent-700">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Items */}
              <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <h3 className="text-xl font-caprasimo text-primary-800 mb-4">
                  Action Items - Complete to Continue
                </h3>
                <div className="space-y-3">
                  {currentStepData.actionItems.map((action, index) => (
                    <div key={index} className="flex items-start">
                      <button
                        onClick={() => toggleActionItem(currentStep, index)}
                        className={`w-6 h-6 rounded border-2 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center transition-colors duration-200 ${
                          completedActions[currentStep]?.[index]
                            ? 'bg-primary-500 border-primary-500 text-white'
                            : 'border-primary-300 hover:border-primary-500'
                        }`}
                      >
                        {completedActions[currentStep]?.[index] && (
                          <CheckCircle size={16} />
                        )}
                      </button>
                      <span className={`font-redhat ${
                        completedActions[currentStep]?.[index]
                          ? 'text-primary-700 line-through'
                          : 'text-primary-800'
                      }`}>
                        {action}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-primary-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-redhat text-primary-700">
                      {getCompletedCount(currentStep)} of {currentStepData.actionItems.length} completed
                    </div>
                    {currentStep < lessonSteps.length - 1 ? (
                      <button
                        onClick={() => setCurrentStep(currentStep + 1)}
                        disabled={!isStepComplete}
                        className={`px-6 py-3 rounded-lg font-redhat font-medium transition-all duration-200 flex items-center ${
                          isStepComplete
                            ? 'bg-primary-500 text-white hover:bg-primary-600'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Next Step
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    ) : (
                      <button
                        disabled={!isStepComplete}
                        className={`px-6 py-3 rounded-lg font-redhat font-medium transition-all duration-200 ${
                          isStepComplete
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Complete Lesson
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        {currentStep > 0 && (
          <div className="text-center lesson-content">
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-redhat font-medium hover:bg-gray-300 transition-colors duration-200"
            >
              Previous Step
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BusinessPlanningLesson;