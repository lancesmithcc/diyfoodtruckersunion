import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Package, TrendingDown, Users, Calculator, BarChart3, RefreshCw, CheckCircle, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const InventoryManagementLesson: React.FC = () => {
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
      icon: Package,
      title: 'Inventory Tracking Systems & Organization',
      priority: 'Critical',
      costImpact: 'Reduce waste by 25%',
      content: `Effective inventory tracking is the foundation of profitable food truck operations. Systematic inventory management prevents stockouts, reduces waste, and optimizes cash flow through better purchasing decisions.

**Digital vs Manual Tracking Systems:**
Modern food truck operations benefit from digital inventory systems that integrate with POS systems and provide real-time tracking. However, simple manual systems can be effective for smaller operations. Choose systems that match your operational complexity and technical comfort level.

**Inventory Categories and Classification:**
**Perishable Ingredients:** Fresh produce, dairy, meat, and seafood require daily monitoring and FIFO (First In, First Out) rotation. Track expiration dates, storage temperatures, and usage rates to minimize spoilage.

**Non-Perishable Supplies:** Dry goods, canned items, and frozen products have longer shelf lives but still require systematic tracking to prevent overstocking and ensure freshness rotation.

**Packaging and Disposables:** Containers, napkins, utensils, and bags are essential for service but often overlooked in inventory systems. Track usage rates and maintain adequate stock levels.

**Cleaning and Sanitation Supplies:** Essential for health compliance and daily operations. Monitor usage patterns and maintain safety stock levels to prevent operational disruptions.

**Par Level Establishment:**
Determine optimal inventory levels for each item based on usage patterns, supplier delivery schedules, and storage capacity. Par levels should account for lead times, seasonal variations, and special events that affect demand.

**Storage Organization and Labeling:**
Implement systematic storage organization with clear labeling, dating, and location systems. Use color-coded labels for different categories and ensure all staff understand the organization system. Proper organization reduces waste and improves efficiency.

**Temperature and Quality Monitoring:**
Establish procedures for monitoring storage temperatures, checking product quality, and identifying items approaching expiration. Document temperature readings and quality checks as required by health departments.

**Inventory Counting Procedures:**
Develop systematic counting procedures including daily spot checks, weekly comprehensive counts, and monthly full inventory assessments. Train multiple staff members in counting procedures to ensure consistency and coverage.

**Technology Integration:**
Consider inventory management apps, barcode scanning systems, or integrated POS solutions that automate tracking and provide real-time data. Technology can reduce errors and provide valuable analytics for decision-making.

**Canadian Supplier Considerations:**
Canadian food service suppliers often have different delivery schedules, minimum orders, and seasonal availability patterns. Factor these considerations into your inventory planning and par level calculations.`,
      actionItems: [
        'Choose and implement inventory tracking system (digital or manual) appropriate for your operation size',
        'Categorize all inventory items and establish par levels based on usage patterns and storage capacity',
        'Create systematic storage organization with labeling and dating procedures',
        'Develop daily, weekly, and monthly inventory counting schedules with staff training',
        'Implement temperature monitoring and quality control procedures with documentation'
      ],
      tips: [
        'Start with simple systems and add complexity as your operation grows - over-complicated systems often fail',
        'Train multiple staff members on inventory procedures to ensure consistency and coverage',
        'Use your POS system data to validate inventory usage patterns and identify discrepancies'
      ]
    },
    {
      icon: TrendingDown,
      title: 'Waste Reduction & Cost Control Strategies',
      priority: 'Critical',
      costImpact: 'Save $500-2000 monthly',
      content: `Food waste directly impacts profitability and represents one of the largest controllable costs in food truck operations. Systematic waste reduction strategies can improve profit margins by 15-25% while supporting environmental sustainability.

**Waste Tracking and Analysis:**
Implement systematic waste tracking to identify patterns, causes, and opportunities for reduction. Track waste by category (spoilage, over-preparation, customer returns, cooking errors) to target specific improvement areas.

**Menu Engineering for Waste Reduction:**
Design menus that maximize ingredient utilization across multiple items. Use versatile ingredients that can be incorporated into various dishes and develop recipes that utilize trim and by-products effectively.

**Portion Control and Standardization:**
Establish precise portion control standards with measuring tools, standardized recipes, and staff training. Consistent portioning reduces waste while ensuring customer satisfaction and cost predictability.

**Prep Planning and Batch Management:**
Develop prep planning systems based on sales forecasts, historical data, and event schedules. Implement batch cooking strategies that minimize over-preparation while maintaining food quality and service speed.

**FIFO and Stock Rotation Systems:**
Implement strict First In, First Out rotation procedures with clear labeling and dating systems. Train staff to identify and use older inventory first while maintaining quality standards.

**Creative Menu Applications:**
Develop daily specials, staff meals, or value items that utilize ingredients approaching expiration or excess inventory. Creative applications can convert potential waste into revenue opportunities.

**Supplier Relationship Management:**
Work with suppliers to optimize order quantities, delivery schedules, and product specifications. Negotiate return policies for defective products and explore options for smaller, more frequent deliveries.

**Storage Optimization:**
Implement proper storage procedures including temperature control, humidity management, and container selection that extend product life and maintain quality. Invest in quality storage equipment that pays for itself through reduced spoilage.

**Staff Training and Accountability:**
Train all staff in waste reduction techniques, proper handling procedures, and cost awareness. Create accountability systems that encourage waste reduction without compromising food safety or quality.

**Donation and Composting Programs:**
Explore food donation programs for excess safe food and composting systems for organic waste. These programs can reduce disposal costs while supporting community and environmental goals.

**Cost Analysis and ROI Tracking:**
Calculate the true cost of waste including ingredient costs, labor, and disposal fees. Track waste reduction initiatives and measure return on investment to justify continued improvement efforts.

**Canadian Waste Management:**
Canadian municipalities often have specific requirements for commercial food waste disposal and may offer composting programs or incentives. Research local options and factor compliance costs into waste management planning.`,
      actionItems: [
        'Implement waste tracking system categorizing waste by type and cause with weekly analysis',
        'Establish portion control standards with measuring tools and staff training procedures',
        'Develop prep planning system based on sales forecasts and historical usage data',
        'Create FIFO rotation procedures with clear labeling and dating systems',
        'Design creative menu applications for excess inventory and approaching expiration items'
      ],
      tips: [
        'Track waste costs in dollars, not just quantities - the financial impact motivates better practices',
        'Involve staff in waste reduction goals with incentives for achieving targets',
        'Review waste patterns weekly and adjust prep quantities based on actual usage data'
      ]
    },
    {
      icon: Users,
      title: 'Supplier Relationship Management',
      priority: 'High',
      costImpact: 'Improve margins 10-15%',
      content: `Strong supplier relationships are crucial for consistent quality, competitive pricing, and reliable service. Effective supplier management ensures product availability while optimizing costs and maintaining quality standards.

**Supplier Selection and Evaluation:**
Develop criteria for supplier selection including quality standards, pricing competitiveness, delivery reliability, customer service, and financial stability. Evaluate suppliers regularly and maintain backup options for critical items.

**Contract Negotiation and Terms:**
Negotiate favorable terms including pricing, payment schedules, delivery requirements, and quality guarantees. Understand minimum order requirements, volume discounts, and seasonal pricing variations that affect your costs.

**Quality Standards and Specifications:**
Establish clear quality specifications for all products including grade standards, packaging requirements, and delivery conditions. Communicate standards clearly and implement receiving procedures that verify compliance.

**Delivery Scheduling and Logistics:**
Coordinate delivery schedules that align with your operational needs, storage capacity, and cash flow requirements. Consider consolidating deliveries to reduce costs while ensuring adequate inventory levels.

**Payment Terms and Cash Flow Management:**
Negotiate payment terms that support your cash flow while maintaining good supplier relationships. Understand early payment discounts, net terms, and penalties for late payment that affect your costs.

**Performance Monitoring and Feedback:**
Track supplier performance including on-time delivery, quality consistency, order accuracy, and customer service responsiveness. Provide regular feedback and work collaboratively to address issues.

**Relationship Building and Communication:**
Build personal relationships with key supplier representatives through regular communication, facility visits, and industry events. Strong relationships often lead to better service, pricing, and problem resolution.

**Backup Supplier Development:**
Maintain relationships with backup suppliers for critical items to ensure continuity during supply disruptions. Test backup suppliers periodically to ensure they meet your standards and requirements.

**Local and Seasonal Sourcing:**
Explore local supplier options that can provide fresh, seasonal ingredients while supporting community relationships. Local sourcing can differentiate your menu and appeal to customers who value local businesses.

**Technology Integration:**
Use technology for order placement, delivery tracking, and invoice management where available. Electronic systems can reduce errors, improve efficiency, and provide better documentation.

**Cost Analysis and Benchmarking:**
Regularly analyze supplier costs and benchmark against market rates and alternative suppliers. Understand total cost of ownership including delivery fees, minimum orders, and quality factors.

**Canadian Supplier Landscape:**
Canadian food service suppliers often specialize in regional markets and may have different service levels, product availability, and pricing structures. Build relationships with suppliers who understand food truck operations and can provide flexible service.`,
      actionItems: [
        'Evaluate current suppliers using quality, pricing, reliability, and service criteria',
        'Negotiate contract terms including pricing, payment schedules, and delivery requirements',
        'Establish quality specifications and receiving procedures for all product categories',
        'Develop backup supplier relationships for critical inventory items',
        'Implement supplier performance tracking system with regular review and feedback'
      ],
      tips: [
        'Treat suppliers as partners, not just vendors - collaborative relationships benefit both parties',
        'Pay suppliers on time to maintain good relationships and potentially negotiate better terms',
        'Visit supplier facilities when possible to understand their operations and build stronger relationships'
      ]
    },
    {
      icon: Calculator,
      title: 'Order Quantity Optimization & Forecasting',
      priority: 'High',
      costImpact: 'Optimize cash flow 20%',
      content: `Optimal order quantities balance inventory costs, storage limitations, and service requirements while minimizing waste and stockouts. Effective forecasting systems predict demand patterns and guide purchasing decisions.

**Demand Forecasting Methods:**
**Historical Data Analysis:** Use sales history to identify patterns, trends, and seasonal variations that affect demand. Analyze data by day of week, weather conditions, events, and seasonal factors.

**Event-Based Forecasting:** Adjust forecasts for special events, festivals, catering orders, and promotional activities that create demand spikes. Maintain event history to improve future forecasting accuracy.

**Weather Impact Analysis:** Canadian weather significantly affects food truck sales. Develop weather-based forecasting models that adjust orders based on temperature, precipitation, and seasonal conditions.

**Economic Order Quantity (EOQ) Calculations:**
Calculate optimal order quantities that minimize total inventory costs including purchase price, ordering costs, carrying costs, and stockout costs. Consider storage limitations and perishability in EOQ calculations.

**Lead Time and Safety Stock Management:**
Account for supplier lead times and demand variability in order planning. Maintain appropriate safety stock levels that prevent stockouts without excessive carrying costs.

**ABC Analysis and Prioritization:**
Classify inventory items by value and importance using ABC analysis. Focus detailed forecasting and optimization efforts on high-value items while using simpler systems for low-value items.

**Seasonal and Promotional Planning:**
Plan inventory levels around seasonal demand patterns, promotional activities, and special events. Coordinate with marketing activities to ensure adequate inventory for promotional items.

**Technology and Analytics Tools:**
Use POS data, inventory management software, and analytics tools to improve forecasting accuracy. Technology can identify patterns and trends that manual analysis might miss.

**Collaborative Planning with Suppliers:**
Share forecasts and promotional plans with key suppliers to improve their planning and potentially negotiate better terms. Collaborative planning can improve service levels and reduce costs.

**Continuous Improvement and Adjustment:**
Regularly review forecasting accuracy and adjust methods based on performance. Learn from forecasting errors and incorporate new information into future predictions.

**Cash Flow Optimization:**
Balance inventory investment with cash flow requirements and working capital constraints. Consider payment terms, seasonal cash flow patterns, and growth funding needs in order planning.

**Canadian Market Considerations:**
Canadian food truck operations often have distinct seasonal patterns with high summer demand and reduced winter activity. Plan inventory and cash flow around these seasonal variations while maintaining supplier relationships year-round.`,
      actionItems: [
        'Analyze historical sales data to identify demand patterns and seasonal variations',
        'Calculate economic order quantities for major inventory categories considering storage and perishability',
        'Establish lead time and safety stock levels for all suppliers and product categories',
        'Implement ABC analysis to prioritize forecasting efforts on high-value items',
        'Develop seasonal and event-based forecasting procedures with regular accuracy reviews'
      ],
      tips: [
        'Start with simple forecasting methods and add complexity as you gather more data and experience',
        'Track forecasting accuracy and learn from both over and under-ordering situations',
        'Consider cash flow timing when planning large orders - spreading purchases can improve cash management'
      ]
    },
    {
      icon: BarChart3,
      title: 'Performance Metrics & Analytics',
      priority: 'Medium',
      costImpact: 'Data-driven decisions',
      content: `Inventory performance metrics provide insights for continuous improvement and informed decision-making. Analytics help identify trends, optimize operations, and measure the effectiveness of inventory management initiatives.

**Key Performance Indicators (KPIs):**
**Inventory Turnover Rate:** Measure how quickly inventory converts to sales. Higher turnover indicates efficient inventory management and fresh products. Calculate turnover by category to identify optimization opportunities.

**Food Cost Percentage:** Track food costs as a percentage of sales to monitor profitability and identify cost control opportunities. Industry benchmarks typically range from 25-35% for food trucks.

**Waste Percentage:** Monitor waste as a percentage of purchases to track waste reduction efforts and identify problem areas. Target waste levels below 5% of total food purchases.

**Stockout Frequency:** Track how often items are unavailable during service. Frequent stockouts indicate inadequate inventory planning or supplier issues.

**Days of Inventory on Hand:** Calculate average days of inventory for different categories to optimize cash flow and storage utilization.

**Sales Forecasting Accuracy:**
Measure forecasting accuracy by comparing predicted versus actual sales. Track accuracy by item, category, and time period to identify improvement opportunities and adjust forecasting methods.

**Supplier Performance Metrics:**
**On-Time Delivery Rate:** Track supplier delivery performance to identify reliability issues and optimize delivery scheduling.

**Quality Rejection Rate:** Monitor product quality issues and rejections to evaluate supplier performance and identify training needs.

**Order Accuracy:** Track order fulfillment accuracy to identify supplier issues and internal ordering problems.

**Cost Analysis and Trends:**
**Price Variance Analysis:** Monitor price changes and variances from budgeted costs. Identify trends and negotiate with suppliers or adjust menu pricing accordingly.

**Total Cost of Ownership:** Calculate true inventory costs including purchase price, delivery fees, storage costs, and waste disposal to make informed sourcing decisions.

**Seasonal Cost Patterns:** Track seasonal price variations to optimize purchasing timing and menu planning.

**Technology and Reporting Systems:**
Implement reporting systems that provide regular performance updates and trend analysis. Use dashboards and automated reports to monitor KPIs without manual calculation.

**Benchmarking and Industry Comparison:**
Compare your performance metrics to industry benchmarks and similar operations. Identify areas where performance lags and opportunities for improvement.

**Continuous Improvement Process:**
Use performance data to identify improvement opportunities and measure the effectiveness of changes. Implement regular review processes that translate data into actionable improvements.

**Canadian Market Analytics:**
Consider Canadian-specific factors in performance analysis including seasonal variations, regional preferences, and regulatory requirements that affect inventory performance.`,
      actionItems: [
        'Establish KPI tracking system for inventory turnover, food cost percentage, and waste metrics',
        'Implement sales forecasting accuracy measurement with regular performance reviews',
        'Create supplier performance tracking system monitoring delivery, quality, and accuracy',
        'Develop cost analysis procedures tracking price trends and total ownership costs',
        'Design reporting dashboard providing regular performance updates and trend analysis'
      ],
      tips: [
        'Focus on a few key metrics initially rather than trying to track everything - quality over quantity',
        'Use performance data to celebrate successes and identify specific improvement opportunities',
        'Share relevant metrics with staff to build awareness and engagement in inventory management'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Continuous Improvement & System Updates',
      priority: 'Medium',
      costImpact: 'Ongoing optimization',
      content: `Inventory management systems require regular review and improvement to maintain effectiveness and adapt to changing business conditions. Continuous improvement processes ensure systems evolve with your operation and market conditions.

**Regular System Reviews and Audits:**
Conduct quarterly reviews of inventory management systems, procedures, and performance. Identify areas for improvement, system gaps, and opportunities for optimization. Include staff feedback in review processes.

**Process Optimization and Efficiency Improvements:**
Regularly evaluate inventory processes for efficiency opportunities including workflow improvements, technology upgrades, and procedure simplification. Focus on changes that reduce labor while maintaining accuracy.

**Technology Upgrades and Integration:**
Stay current with inventory management technology including POS integration, mobile apps, and analytics tools. Evaluate new technologies based on ROI and operational improvement potential.

**Staff Training and Development:**
Provide ongoing training on inventory procedures, new systems, and best practices. Cross-train staff on multiple inventory functions to ensure coverage and flexibility.

**Seasonal Adjustments and Adaptations:**
Adjust inventory systems and procedures for seasonal variations in demand, product availability, and operational patterns. Plan for seasonal staff changes and training needs.

**Supplier Relationship Evolution:**
Regularly evaluate and evolve supplier relationships based on performance, market changes, and business growth. Explore new suppliers and negotiate improved terms with existing partners.

**Menu and Product Line Changes:**
Adapt inventory systems when adding new menu items, changing recipes, or modifying product lines. Ensure inventory procedures support menu changes without disrupting operations.

**Growth and Scaling Considerations:**
Plan inventory system changes to support business growth including multiple locations, increased volume, and expanded operations. Ensure systems can scale without major disruptions.

**Regulatory and Compliance Updates:**
Stay current with food safety regulations, health department requirements, and industry standards that affect inventory management. Update procedures to maintain compliance.

**Cost-Benefit Analysis of Improvements:**
Evaluate improvement initiatives based on cost-benefit analysis and return on investment. Prioritize improvements that provide the greatest operational and financial benefits.

**Documentation and Knowledge Management:**
Maintain current documentation of inventory procedures, system changes, and best practices. Create knowledge management systems that preserve institutional knowledge and support training.

**Canadian Regulatory Environment:**
Monitor changes in Canadian food safety regulations, provincial health requirements, and municipal standards that affect inventory management. Ensure systems remain compliant with evolving requirements.`,
      actionItems: [
        'Schedule quarterly inventory system reviews with staff feedback and performance analysis',
        'Evaluate current technology and identify upgrade opportunities with ROI analysis',
        'Develop ongoing staff training program for inventory procedures and system updates',
        'Create seasonal adjustment procedures for demand patterns and operational changes',
        'Implement documentation system for procedures, changes, and best practices'
      ],
      tips: [
        'Make small, incremental improvements rather than major system overhauls - gradual change is more sustainable',
        'Involve staff in improvement planning - they often have the best insights into operational challenges',
        'Document what works well, not just what needs improvement - preserve successful practices'
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

  return (
    <section ref={sectionRef} id="inventory-management-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Inventory Management <span className="text-primary-500">Systems</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Master inventory control to reduce waste, prevent stockouts, and optimize cash flow. Learn systematic approaches to tracking, ordering, and managing food truck inventory efficiently.
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
                    <span className="text-sm opacity-90">
                      Impact: {currentStepData.costImpact}
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
                                Inventory Management Systems Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've mastered inventory management systems for food truck operations. You now have the tools to reduce waste, optimize costs, and maintain efficient inventory control.
                              </p>
                              <Link
                                to="/operations/staff-management"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Next: Staff Training & Management
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

export default InventoryManagementLesson;