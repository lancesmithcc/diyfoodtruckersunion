import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Building, Users, MapPin, DollarSign, Target, CheckCircle, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GrowthStrategiesLesson: React.FC = () => {
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
      icon: TrendingUp,
      title: 'Revenue Optimization & Menu Expansion',
      priority: 'Critical',
      difficulty: 'Moderate',
      content: `Sustainable growth starts with maximizing revenue from your existing operations before expanding. Smart menu development and pricing optimization can significantly increase profitability without additional overhead.

**Menu Engineering for Growth:**
Analyze your sales data to identify high-margin, popular items that drive profitability. Use the "star, plow horse, puzzle, dog" classification system to optimize your menu mix. Stars (high profit, high popularity) should be promoted heavily, while dogs (low profit, low popularity) should be eliminated or repositioned.

**Seasonal Menu Development:**
Canadian markets offer distinct seasonal opportunities that can boost revenue throughout the year. Summer festivals demand fresh, light options and premium pricing. Winter markets favor comfort foods and warm beverages. Develop seasonal specialties that command higher prices and create customer anticipation.

**Premium Product Lines:**
Introduce premium versions of popular items using higher-quality ingredients or unique preparation methods. "Signature" or "chef's special" items can command 20-40% higher prices while using similar base ingredients. This strategy increases average order value without proportional cost increases.

**Upselling and Cross-Selling Systems:**
Train staff to suggest complementary items and upgrades systematically. Implement combo deals that increase order value while providing customer value. Use visual merchandising and menu design to guide customers toward higher-margin items.

**Dynamic Pricing Strategies:**
Implement location and time-based pricing that reflects demand and competition. Business district lunch pricing can be higher than residential evening service. Event pricing should reflect the premium experience and limited competition.

**Catering Service Development:**
Catering provides higher-margin revenue with predictable volume and advance payment. Develop catering packages for corporate lunches, private parties, and special events. Catering often generates 2-3x higher revenue per hour than regular service.

**Loyalty Program Implementation:**
Create loyalty programs that increase customer frequency and average order value. Digital punch cards, points systems, or subscription models can increase customer lifetime value by 25-50%. Focus on rewarding frequent customers rather than attracting new ones.

**Revenue Stream Diversification:**
Explore complementary revenue streams like branded merchandise, cooking classes, meal kits, or retail products. These streams can provide income during slow periods and strengthen brand recognition.

**Canadian Market Considerations:**
Canadian consumers often value local sourcing, sustainability, and community connection. Premium pricing is more acceptable when justified by local ingredients, environmental responsibility, or community support. Emphasize these values in your growth strategy.`,
      actionItems: [
        'Analyze 3 months of sales data to identify your most profitable menu items',
        'Develop 3 seasonal menu items for each quarter with premium pricing',
        'Create upselling scripts and train staff on systematic suggestive selling',
        'Design catering packages for 3 different event types with pricing',
        'Implement a digital loyalty program with measurable rewards structure'
      ],
      tips: [
        'Focus on increasing average order value before expanding locations - it\'s more profitable',
        'Test new menu items at single locations before rolling out system-wide',
        'Track customer lifetime value, not just individual transaction amounts'
      ]
    },
    {
      icon: Building,
      title: 'Multi-Location Operations Strategy',
      priority: 'High',
      difficulty: 'Advanced',
      content: `Expanding to multiple locations requires systematic planning, operational standardization, and careful market analysis. Successful multi-location operations balance consistency with local market adaptation.

**Market Analysis for Expansion:**
Research potential markets using demographic data, competition analysis, and regulatory requirements. Look for markets with similar customer profiles to your successful locations but less competition. Consider seasonal patterns and local economic conditions that affect food truck viability.

**Location Portfolio Strategy:**
Develop a diverse portfolio of location types to reduce risk and maximize revenue opportunities. Combine high-volume business districts with steady residential routes and seasonal event circuits. This diversification protects against location-specific downturns.

**Operational Standardization:**
Create detailed operational procedures, training materials, and quality standards that ensure consistency across locations. Standardize recipes, portion sizes, service procedures, and customer interaction protocols. Consistency builds brand trust and simplifies management.

**Staff Management and Training:**
Develop comprehensive training programs that can be replicated across locations. Create clear job descriptions, performance standards, and advancement opportunities. Consider promoting successful staff to manage new locations rather than hiring external managers.

**Supply Chain Optimization:**
Negotiate better pricing through increased volume while maintaining quality standards. Develop relationships with suppliers who can serve multiple locations efficiently. Consider central commissary operations for food prep and inventory management.

**Technology Integration:**
Implement POS systems, inventory management, and communication tools that provide real-time visibility across all locations. Use technology to monitor performance, track inventory, and coordinate schedules efficiently.

**Financial Management Systems:**
Establish separate profit and loss tracking for each location while maintaining consolidated financial oversight. This allows you to identify successful locations, address underperforming sites, and make data-driven expansion decisions.

**Brand Consistency and Local Adaptation:**
Maintain core brand elements while allowing for local market adaptation. Your logo, core menu, and service standards should be consistent, but local preferences, seasonal items, and community engagement can vary by location.

**Quality Control and Monitoring:**
Develop systems for regular quality audits, customer feedback collection, and performance monitoring across all locations. Mystery shopping, customer surveys, and regular site visits ensure standards are maintained.

**Expansion Timing and Funding:**
Plan expansion timing based on cash flow, market opportunities, and operational capacity. Avoid expanding too quickly and compromising quality or financial stability. Consider equipment leasing, investor partnerships, or franchise models to fund growth.

**Canadian Regulatory Considerations:**
Each province and municipality has different regulations for mobile food vendors. Research permit requirements, health department standards, and operational restrictions for each expansion market. Budget for legal and regulatory compliance costs.`,
      actionItems: [
        'Research and evaluate 3 potential expansion markets with demographic and competition analysis',
        'Create standardized operational procedures manual for all locations',
        'Develop comprehensive staff training program that can be replicated',
        'Design financial tracking system that monitors each location\'s profitability',
        'Create expansion timeline with funding requirements and milestones'
      ],
      tips: [
        'Perfect operations at your first location before expanding - problems multiply with growth',
        'Start with locations similar to your successful sites before trying new market types',
        'Maintain hands-on involvement in new locations until they\'re fully established'
      ]
    },
    {
      icon: Users,
      title: 'Team Building & Management Systems',
      priority: 'High',
      difficulty: 'Advanced',
      content: `Building a strong team is essential for sustainable growth. Effective team management systems enable you to scale operations while maintaining quality and reducing your personal workload.

**Hiring Strategy and Recruitment:**
Develop clear job descriptions, compensation structures, and hiring criteria that attract quality candidates. Look for cultural fit, work ethic, and growth potential rather than just experience. Consider hiring from your customer base - loyal customers often make passionate employees.

**Training and Development Programs:**
Create comprehensive training programs covering food safety, customer service, equipment operation, and brand standards. Implement progressive training levels that provide advancement opportunities and increased responsibility. Well-trained staff reduce turnover and improve customer experience.

**Performance Management Systems:**
Establish clear performance metrics, regular review processes, and recognition programs. Track key performance indicators like service speed, customer satisfaction, sales per hour, and food waste. Provide regular feedback and coaching to help staff improve.

**Leadership Development:**
Identify and develop potential managers from within your team. Provide leadership training, increased responsibilities, and clear advancement paths. Promoting from within maintains culture and provides motivation for all staff members.

**Compensation and Benefits Strategy:**
Develop competitive compensation packages that include base wages, performance bonuses, and benefits where possible. Consider profit-sharing, health benefits, or flexible scheduling as retention tools. Fair compensation reduces turnover and improves performance.

**Communication Systems:**
Implement effective communication tools and processes for scheduling, policy updates, and feedback. Use group messaging apps, regular team meetings, and suggestion systems to maintain open communication across all locations and shifts.

**Delegation and Empowerment:**
Gradually delegate operational responsibilities to trusted team members. Empower staff to make customer service decisions within defined parameters. This reduces your workload while improving customer satisfaction and staff engagement.

**Culture and Team Building:**
Foster a positive work culture that emphasizes teamwork, customer service, and continuous improvement. Organize team building activities, celebrate successes, and create an environment where staff feel valued and motivated.

**Scheduling and Workforce Management:**
Develop efficient scheduling systems that balance labor costs with service requirements. Use historical data to predict staffing needs and avoid over or under-staffing. Consider cross-training staff for flexibility across different roles and locations.

**Retention Strategies:**
Implement strategies to reduce turnover including competitive compensation, advancement opportunities, flexible scheduling, and positive work environment. Calculate the true cost of turnover including recruitment, training, and lost productivity.

**Legal Compliance and HR Management:**
Understand employment law requirements including minimum wage, overtime, breaks, and workplace safety. Maintain proper documentation, handle disciplinary actions appropriately, and ensure compliance with provincial employment standards.

**Canadian Employment Considerations:**
Understand provincial employment standards, workers' compensation requirements, and payroll tax obligations. Consider seasonal employment patterns common in Canadian food service and plan accordingly for staff retention during off-seasons.`,
      actionItems: [
        'Create detailed job descriptions and hiring criteria for each position',
        'Develop comprehensive training program with measurable competency standards',
        'Implement performance tracking system with regular review processes',
        'Design compensation structure that includes performance incentives',
        'Establish delegation plan that reduces your daily operational involvement'
      ],
      tips: [
        'Invest heavily in training - well-trained staff are more productive and stay longer',
        'Promote from within whenever possible to maintain culture and motivate staff',
        'Document all policies and procedures to ensure consistency and legal compliance'
      ]
    },
    {
      icon: MapPin,
      title: 'Market Expansion & Territory Development',
      priority: 'Medium',
      difficulty: 'Advanced',
      content: `Strategic market expansion requires careful analysis of new territories, understanding of local market conditions, and systematic approach to establishing presence in new areas.

**Territory Analysis and Selection:**
Research potential expansion territories using demographic data, economic indicators, and competition analysis. Look for markets with favorable demographics, growing populations, supportive business environments, and reasonable competition levels. Consider proximity to existing operations for management efficiency.

**Market Entry Strategies:**
**Gradual Expansion:** Start with occasional visits to test market response before committing to regular service. This low-risk approach allows market validation without major investment.

**Partnership Approach:** Partner with local businesses, event organizers, or other food trucks to gain market knowledge and customer access. Local partnerships provide credibility and reduce entry barriers.

**Event-Based Entry:** Enter new markets through festivals, farmers markets, and special events before establishing regular routes. This provides market exposure and customer feedback with limited commitment.

**Competitive Landscape Assessment:**
Analyze existing food trucks, restaurants, and food service options in target markets. Identify gaps in cuisine types, price points, service styles, or operating hours that your concept could fill. Understand local customer preferences and spending patterns.

**Regulatory and Permit Research:**
Research permit requirements, health department standards, parking regulations, and operational restrictions in target markets. Some municipalities have limited permits, waiting lists, or specific requirements that affect expansion feasibility and timing.

**Local Market Adaptation:**
Adapt your menu, pricing, and marketing approach to local preferences while maintaining brand consistency. Regional taste preferences, cultural demographics, and economic conditions may require menu modifications or pricing adjustments.

**Marketing and Brand Introduction:**
Develop market entry marketing strategies that introduce your brand effectively to new customers. Use social media, local partnerships, promotional pricing, and community events to build awareness and trial.

**Operational Logistics:**
Plan operational logistics for serving multiple markets including travel time, fuel costs, staff scheduling, and supply chain management. Consider whether new markets require additional equipment, staff, or operational modifications.

**Performance Monitoring and Optimization:**
Establish metrics for evaluating new market performance including revenue per visit, customer acquisition rates, repeat business levels, and profitability. Use this data to optimize routes, timing, and market selection.

**Long-term Territory Development:**
Develop long-term plans for territory development including market penetration strategies, customer base building, and competitive positioning. Consider how new territories fit into overall business growth strategy.

**Canadian Regional Considerations:**
Canadian markets vary significantly by region in terms of cuisine preferences, economic conditions, and regulatory environments. Maritime provinces may prefer seafood options, while Prairie markets favor hearty comfort foods. Research regional preferences and adapt accordingly.

**Seasonal Market Planning:**
Plan market expansion around Canadian seasonal patterns. Summer expansion takes advantage of festival season and outdoor dining preferences. Winter expansion requires indoor venues and cold-weather menu adaptations.`,
      actionItems: [
        'Research and rank 5 potential expansion territories using demographic and competition data',
        'Develop market entry strategy for your top-ranked territory including timeline and budget',
        'Create local market adaptation plan for menu, pricing, and marketing approaches',
        'Research permit requirements and regulatory compliance for target markets',
        'Design performance monitoring system to evaluate new market success'
      ],
      tips: [
        'Test new markets through events and occasional visits before committing to regular service',
        'Partner with local businesses or organizations to gain credibility and market knowledge',
        'Focus on markets within reasonable driving distance to maintain operational efficiency'
      ]
    },
    {
      icon: DollarSign,
      title: 'Franchise & Licensing Opportunities',
      priority: 'Medium',
      difficulty: 'Advanced',
      content: `Franchising and licensing provide opportunities to scale your concept rapidly while reducing capital requirements and operational burden. These growth strategies require careful planning and legal structure.

**Franchise Model Development:**
Develop a replicable business model with standardized operations, training programs, and support systems. Document all procedures, recipes, supplier relationships, and operational standards. Your franchise system should enable others to replicate your success consistently.

**Franchise vs. Licensing Comparison:**
**Franchising:** Provides comprehensive business system including operations, marketing, training, and ongoing support. Franchisees pay initial fees plus ongoing royalties. Requires extensive legal documentation and regulatory compliance.

**Licensing:** Allows others to use your brand, recipes, and basic systems with less comprehensive support. Lower initial investment and ongoing fees but less control over operations and quality.

**Legal Structure and Documentation:**
Work with franchise attorneys to develop proper legal documentation including franchise disclosure documents, franchise agreements, and operational manuals. Ensure compliance with provincial franchise regulations and disclosure requirements.

**Territory and Market Development:**
Develop territory maps, market analysis, and expansion plans that provide franchisees with protected territories and growth opportunities. Consider population density, competition levels, and market potential when defining territories.

**Training and Support Systems:**
Create comprehensive training programs covering operations, marketing, financial management, and customer service. Develop ongoing support systems including regular communication, performance monitoring, and problem-solving assistance.

**Marketing and Brand Management:**
Establish brand standards, marketing guidelines, and promotional programs that maintain consistency across all franchise locations. Develop cooperative advertising programs and marketing materials that franchisees can use effectively.

**Financial Structure and Projections:**
Develop franchise fee structures, royalty rates, and financial projections that provide value to franchisees while generating sustainable revenue for your organization. Consider initial franchise fees, ongoing royalties, and marketing fund contributions.

**Franchisee Selection and Qualification:**
Establish criteria for selecting qualified franchisees including financial capacity, business experience, and cultural fit. Develop application processes, interview procedures, and approval criteria that identify successful franchise partners.

**Quality Control and Monitoring:**
Implement systems for monitoring franchise performance, maintaining quality standards, and addressing performance issues. Regular audits, mystery shopping, and performance metrics ensure brand consistency and customer satisfaction.

**Growth and Expansion Planning:**
Develop strategic plans for franchise system growth including target markets, expansion timelines, and support infrastructure development. Plan for the resources needed to support growing franchise networks effectively.

**Canadian Franchise Considerations:**
Understand Canadian franchise regulations including disclosure requirements, relationship laws, and provincial variations. Consider the unique aspects of Canadian markets including bilingual requirements, regional preferences, and regulatory differences.

**Alternative Growth Models:**
Consider alternative growth models like company-owned expansion, joint ventures, or management contracts that might better fit your situation and goals. Each model has different capital requirements, control levels, and profit potential.`,
      actionItems: [
        'Evaluate whether your business model is suitable for franchising with documented systems',
        'Research franchise legal requirements and consult with franchise attorney',
        'Develop comprehensive operations manual and training program',
        'Create financial projections and fee structure for potential franchisees',
        'Identify target markets and ideal franchisee profiles for expansion'
      ],
      tips: [
        'Perfect your business model thoroughly before considering franchising - problems multiply across locations',
        'Invest in proper legal documentation - franchise law is complex and penalties for non-compliance are severe',
        'Choose franchisees carefully - their success or failure reflects on your brand'
      ]
    },
    {
      icon: Target,
      title: 'Exit Strategy & Business Valuation',
      priority: 'Medium',
      difficulty: 'Advanced',
      content: `Planning your exit strategy from the beginning helps you build a more valuable, saleable business while providing options for your future. Understanding business valuation helps you make decisions that maximize long-term value.

**Exit Strategy Options:**
**Business Sale:** Sell your entire operation to another operator, investor, or competitor. This provides immediate liquidity but ends your involvement in the business you built.

**Management Buyout:** Sell to existing managers or employees who understand the business and can maintain operations. This often provides better transition and legacy preservation.

**Franchise Conversion:** Convert your operation to a franchise system and sell franchise rights while maintaining ownership of the brand and ongoing royalty income.

**Partial Sale/Partnership:** Sell partial ownership to investors or partners while maintaining involvement and ongoing income. This provides capital for growth while preserving your role.

**Family Succession:** Transfer ownership to family members through gradual transition, sale, or inheritance planning. This preserves family legacy while providing retirement income.

**Business Valuation Fundamentals:**
Food truck businesses are typically valued using multiple approaches including asset valuation, income multiples, and comparable sales. Factors affecting valuation include profitability, growth trends, market position, operational systems, and transferability.

**Value Enhancement Strategies:**
**Financial Performance:** Maintain detailed financial records, consistent profitability, and growth trends. Clean financial statements and tax compliance increase buyer confidence and valuation multiples.

**Operational Systems:** Develop documented procedures, training programs, and management systems that allow the business to operate without your daily involvement. Systematic operations increase transferability and value.

**Brand Development:** Build strong brand recognition, customer loyalty, and market position. Established brands with loyal customer bases command premium valuations.

**Asset Optimization:** Maintain equipment in good condition, secure favorable lease agreements, and optimize asset utilization. Well-maintained assets reduce buyer investment requirements.

**Market Position:** Establish strong competitive position, diverse revenue streams, and growth opportunities. Market-leading businesses with expansion potential receive higher valuations.

**Timing and Market Conditions:**
Plan exit timing around business performance, market conditions, and personal goals. Strong financial performance, favorable market conditions, and strategic buyer interest optimize sale prices and terms.

**Due Diligence Preparation:**
Prepare comprehensive documentation including financial statements, tax returns, operational procedures, legal documents, and market analysis. Thorough preparation speeds the sale process and supports higher valuations.

**Professional Support Team:**
Assemble a team of professionals including business brokers, accountants, lawyers, and financial advisors who specialize in food service business transactions. Professional support ensures proper valuation, legal compliance, and optimal deal structure.

**Tax Planning and Structure:**
Plan the tax implications of your exit strategy including capital gains treatment, installment sales, and retirement planning. Proper tax planning can significantly impact your net proceeds from the sale.

**Transition Planning:**
Plan the transition process including training periods, non-compete agreements, and ongoing support requirements. Smooth transitions protect business value and ensure buyer success.

**Canadian Tax and Legal Considerations:**
Understand Canadian tax implications of business sales including capital gains treatment, lifetime capital gains exemption, and provincial tax variations. Consider legal requirements for business transfers and employment obligations.

**Legacy and Impact Planning:**
Consider the legacy you want to leave including impact on employees, customers, and community. Plan transitions that preserve positive relationships and community contributions while achieving your financial goals.`,
      actionItems: [
        'Define your preferred exit strategy and timeline based on personal and financial goals',
        'Assess current business value using multiple valuation methods',
        'Identify specific improvements that would increase business value',
        'Develop systems and documentation that reduce dependence on your daily involvement',
        'Assemble professional advisory team for future exit planning'
      ],
      tips: [
        'Start exit planning early - building a saleable business takes years of systematic development',
        'Focus on building systems and reducing owner dependence to maximize transferability',
        'Maintain detailed financial records and legal compliance to support higher valuations'
      ]
    }
  ];

  const currentStepData = lessonSteps[currentStep];
  const isStepComplete = currentStepData && getCompletedCount(currentStep) === currentStepData.actionItems.length;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section ref={sectionRef} id="growth-strategies-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Growth & <span className="text-primary-500">Scaling Strategies</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Scale your food truck business strategically with proven growth methods. Learn revenue optimization, multi-location operations, team building, and long-term exit planning for sustainable success.
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
                  <div className="flex items-center space-x-4 mt-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(currentStepData.priority)}`}>
                      {currentStepData.priority}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(currentStepData.difficulty)}`}>
                      {currentStepData.difficulty}
                    </span>
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
                      <div className="space-x-4">
                        {isStepComplete ? (
                          <div className="text-center">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                              </div>
                              <h3 className="text-lg font-caprasimo text-green-800 mb-2">
                                Growth & Scaling Strategies Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've completed the comprehensive growth and scaling strategies lesson. You now have the knowledge to build a sustainable, scalable food truck business with multiple growth pathways.
                              </p>
                              <Link
                                to="/getting-started"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Return to Getting Started Overview
                                <ArrowRight size={16} className="ml-2" />
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <button
                            disabled={true}
                            className="px-6 py-3 bg-gray-300 text-gray-500 font-redhat font-medium rounded-lg cursor-not-allowed"
                          >
                            Complete all items to continue
                          </button>
                        )}
                      </div>
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

export default GrowthStrategiesLesson;