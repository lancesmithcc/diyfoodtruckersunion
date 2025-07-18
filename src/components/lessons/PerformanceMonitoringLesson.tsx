import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart3, TrendingUp, DollarSign, Users, Target, RefreshCw, CheckCircle, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PerformanceMonitoringLesson: React.FC = () => {
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
      icon: BarChart3,
      title: 'Key Performance Indicators (KPIs) & Metrics Setup',
      priority: 'Critical',
      impact: 'Data-driven decisions',
      content: `Establishing the right KPIs and metrics provides the foundation for performance monitoring and business improvement. Effective metrics systems track what matters most for food truck success while avoiding information overload.

**Financial Performance Metrics:**
**Revenue Tracking:** Monitor daily, weekly, and monthly revenue patterns to identify trends, seasonal variations, and growth opportunities. Track revenue by location, time period, and menu category to understand performance drivers.

**Profit Margin Analysis:** Calculate and monitor gross profit margins, net profit margins, and contribution margins by menu item and service category. Margin analysis identifies profitable offerings and cost control opportunities.

**Average Order Value (AOV):** Track average order value trends to measure upselling effectiveness and customer spending patterns. AOV improvements directly impact profitability without increasing customer acquisition costs.

**Cost Ratios:** Monitor key cost ratios including food cost percentage, labor cost percentage, and overhead ratios. Cost ratio tracking identifies efficiency opportunities and budget variance issues.

**Operational Performance Metrics:**
**Service Speed:** Measure average service times including order taking, preparation, and delivery to customers. Service speed directly impacts customer satisfaction and capacity utilization.

**Order Accuracy:** Track order accuracy rates to identify training needs and process improvements. Accuracy affects customer satisfaction and operational efficiency.

**Customer Count and Frequency:** Monitor daily customer counts and visit frequency to understand traffic patterns and customer loyalty trends.

**Equipment Utilization:** Track equipment usage rates and efficiency to optimize capacity and identify upgrade needs.

**Customer Experience Metrics:**
**Customer Satisfaction Scores:** Implement customer satisfaction surveys and track scores over time. Satisfaction metrics predict customer retention and referral likelihood.

**Net Promoter Score (NPS):** Measure customer loyalty and likelihood to recommend your business. NPS provides a simple metric for overall customer relationship strength.

**Customer Retention Rate:** Track repeat customer rates and frequency to measure loyalty program effectiveness and service quality.

**Complaint Resolution Time:** Monitor how quickly customer complaints are resolved and track resolution satisfaction rates.

**Staff Performance Metrics:**
**Productivity Measures:** Track staff productivity including orders per hour, sales per employee, and efficiency improvements over time.

**Training Completion:** Monitor staff training completion rates and certification maintenance to ensure compliance and skill development.

**Turnover Rates:** Track employee turnover rates and analyze causes to improve retention strategies and reduce recruitment costs.

**Safety Incident Rates:** Monitor workplace safety incidents and near-misses to identify improvement opportunities and ensure compliance.

**Technology Integration and Automation:**
**POS System Analytics:** Leverage POS system data for real-time performance tracking and automated reporting. Modern systems provide comprehensive analytics with minimal manual effort.

**Dashboard Development:** Create performance dashboards that provide at-a-glance views of critical metrics. Visual dashboards make data more accessible and actionable.

**Automated Reporting:** Implement automated reporting systems that generate regular performance updates and exception alerts. Automation ensures consistent monitoring without manual effort.

**Mobile Analytics:** Use mobile analytics tools that allow performance monitoring from anywhere. Mobile access enables real-time decision-making and problem resolution.

**Benchmarking and Industry Comparison:**
**Industry Standards:** Compare your metrics to food truck industry benchmarks to understand relative performance and identify improvement opportunities.

**Competitive Analysis:** Monitor competitor performance where possible to understand market positioning and competitive advantages.

**Best Practice Research:** Research best practices from successful food truck operations and adapt relevant strategies to your business.

**Canadian Market Considerations:**
Canadian food truck operations often have distinct seasonal patterns, regional preferences, and regulatory requirements that affect performance metrics. Establish benchmarks that reflect Canadian market conditions and operational realities.`,
      actionItems: [
        'Establish comprehensive KPI tracking system covering financial, operational, and customer metrics',
        'Implement technology solutions for automated data collection and dashboard reporting',
        'Create performance benchmarks based on industry standards and business goals',
        'Design regular reporting schedule with weekly, monthly, and quarterly reviews',
        'Develop staff training on metrics importance and data collection procedures'
      ],
      tips: [
        'Start with 5-7 key metrics rather than trying to track everything - focus on what drives your business',
        'Make metrics visible to staff so everyone understands how their work impacts business performance',
        'Use metrics to celebrate successes and identify opportunities, not just to find problems'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Sales Tracking & Revenue Analysis',
      priority: 'Critical',
      impact: 'Optimize revenue 25%',
      content: `Comprehensive sales tracking and revenue analysis provide insights for pricing optimization, menu development, and strategic decision-making. Systematic revenue analysis identifies growth opportunities and performance trends.

**Sales Data Collection and Organization:**
**Transaction-Level Tracking:** Capture detailed transaction data including items sold, quantities, prices, payment methods, and timestamps. Granular data enables comprehensive analysis and trend identification.

**Location-Based Analysis:** Track sales performance by location to identify high-performing sites and optimization opportunities. Location analysis guides route planning and expansion decisions.

**Time-Based Patterns:** Analyze sales patterns by hour, day, week, and season to optimize staffing, inventory, and operational schedules. Time analysis reveals demand patterns and capacity optimization opportunities.

**Weather Impact Analysis:** Track weather impact on sales to improve forecasting and operational planning. Weather correlation helps predict demand and adjust operations accordingly.

**Menu Performance Analysis:**
**Item-Level Profitability:** Analyze profitability by menu item including food costs, preparation time, and popularity. Item analysis guides menu optimization and pricing decisions.

**Category Performance:** Track performance by menu category to understand customer preferences and identify expansion opportunities. Category analysis reveals market demand patterns.

**Seasonal Menu Analysis:** Monitor seasonal item performance to optimize menu rotation and inventory planning. Seasonal analysis guides menu development and promotional strategies.

**Price Sensitivity Analysis:** Test price changes and analyze impact on sales volume and profitability. Price analysis optimizes revenue while maintaining customer satisfaction.

**Customer Behavior Analysis:**
**Purchase Patterns:** Analyze customer purchase patterns including frequency, timing, and spending levels. Pattern analysis guides marketing and operational strategies.

**Loyalty Program Performance:** Track loyalty program participation and impact on customer behavior. Program analysis optimizes retention strategies and customer lifetime value.

**Upselling Effectiveness:** Monitor upselling success rates and impact on average order value. Upselling analysis improves training and sales strategies.

**Customer Segmentation:** Segment customers by behavior, spending, and preferences to develop targeted strategies. Segmentation enables personalized marketing and service approaches.

**Revenue Forecasting and Planning:**
**Historical Trend Analysis:** Use historical data to identify trends and predict future performance. Trend analysis supports budgeting and strategic planning.

**Seasonal Forecasting:** Develop seasonal forecasting models that account for Canadian weather patterns and event schedules. Seasonal forecasting improves inventory and staffing planning.

**Event Impact Modeling:** Model the impact of special events, promotions, and external factors on revenue. Event modeling improves planning and resource allocation.

**Growth Projection:** Project revenue growth based on expansion plans, market development, and operational improvements. Growth projections guide investment and strategic decisions.

**Competitive Revenue Analysis:**
**Market Share Estimation:** Estimate market share and competitive position based on location performance and market research. Market analysis guides competitive strategy and positioning.

**Pricing Comparison:** Compare pricing strategies with competitors and analyze impact on sales volume and market position. Pricing analysis optimizes competitive positioning.

**Service Differentiation Impact:** Measure the revenue impact of service differentiation and unique offerings. Differentiation analysis guides brand development and positioning strategies.

**Technology and Analytics Tools:**
**Advanced Analytics:** Use advanced analytics tools including regression analysis, predictive modeling, and machine learning for deeper insights. Advanced tools reveal patterns and opportunities that basic analysis might miss.

**Real-Time Monitoring:** Implement real-time sales monitoring that enables immediate response to performance changes. Real-time data supports dynamic decision-making and problem resolution.

**Integration Systems:** Integrate sales data with inventory, staffing, and marketing systems for comprehensive business intelligence. Integration provides holistic performance insights.

**Canadian Revenue Considerations:**
Canadian food truck revenue patterns often reflect seasonal tourism, regional economic conditions, and cultural preferences. Analyze revenue in the context of Canadian market dynamics and seasonal variations.`,
      actionItems: [
        'Implement comprehensive sales tracking system with transaction-level detail and location analysis',
        'Develop menu performance analysis with item profitability and category tracking',
        'Create customer behavior analysis system with purchase patterns and loyalty tracking',
        'Establish revenue forecasting models with seasonal and event impact considerations',
        'Design competitive analysis framework with market positioning and pricing comparison'
      ],
      tips: [
        'Track sales data daily but analyze trends weekly to avoid overreacting to short-term fluctuations',
        'Focus on profit per hour, not just total sales - some busy periods may be less profitable',
        'Use sales data to validate or challenge your assumptions about customer preferences and behavior'
      ]
    },
    {
      icon: DollarSign,
      title: 'Cost Analysis & Profit Optimization',
      priority: 'Critical',
      impact: 'Improve margins 20%',
      content: `Systematic cost analysis and profit optimization identify opportunities to improve profitability without compromising quality or customer satisfaction. Effective cost management ensures sustainable business growth and competitive positioning.

**Comprehensive Cost Tracking:**
**Food Cost Management:** Track food costs by item, category, and total percentage of revenue. Monitor ingredient price fluctuations, portion control effectiveness, and waste impact on costs. Food costs typically represent 25-35% of revenue for successful operations.

**Labor Cost Analysis:** Analyze labor costs including wages, benefits, training, and productivity measures. Track labor cost percentage and efficiency metrics to optimize staffing and scheduling decisions.

**Overhead Cost Allocation:** Allocate overhead costs including insurance, permits, equipment depreciation, and administrative expenses to understand true operational costs. Proper allocation ensures accurate profitability analysis.

**Variable vs Fixed Cost Analysis:** Distinguish between variable costs that change with sales volume and fixed costs that remain constant. Understanding cost structure guides pricing and volume decisions.

**Cost Control Strategies:**
**Inventory Optimization:** Optimize inventory levels to reduce carrying costs while preventing stockouts. Implement just-in-time ordering and supplier relationship management to minimize inventory investment.

**Waste Reduction Programs:** Implement systematic waste reduction programs that track, analyze, and minimize food waste. Waste reduction directly improves profitability while supporting sustainability goals.

**Energy Efficiency:** Monitor and optimize energy consumption through efficient equipment operation, maintenance, and usage patterns. Energy efficiency reduces operating costs and environmental impact.

**Process Improvement:** Identify and eliminate inefficient processes that increase labor costs or reduce productivity. Process improvement often provides quick wins with immediate cost benefits.

**Pricing Strategy and Optimization:**
**Cost-Plus Pricing:** Develop cost-plus pricing models that ensure adequate margins while remaining competitive. Understand true costs to set prices that generate sustainable profits.

**Value-Based Pricing:** Implement value-based pricing for premium items and services that customers perceive as high-value. Value pricing can significantly improve margins on differentiated offerings.

**Dynamic Pricing:** Consider dynamic pricing strategies that adjust prices based on demand, location, and market conditions. Dynamic pricing optimizes revenue while managing demand patterns.

**Menu Engineering:** Use menu engineering techniques to promote high-margin items while maintaining customer satisfaction. Strategic menu design guides customer choices toward profitable options.

**Profitability Analysis by Segment:**
**Location Profitability:** Analyze profitability by operating location to identify high-performing sites and optimization opportunities. Location analysis guides route planning and expansion decisions.

**Time-Based Profitability:** Track profitability by time period to identify peak profit hours and optimize scheduling. Time analysis reveals when operations are most efficient and profitable.

**Customer Segment Profitability:** Analyze profitability by customer segment to understand which customers drive the most value. Segment analysis guides marketing and service strategies.

**Service Type Profitability:** Compare profitability between regular service, catering, and special events to optimize service mix and resource allocation.

**Technology and Cost Management:**
**Cost Tracking Systems:** Implement technology systems that automate cost tracking and provide real-time cost visibility. Automated systems reduce manual effort while improving accuracy.

**Predictive Analytics:** Use predictive analytics to forecast cost trends and identify optimization opportunities. Predictive tools help anticipate and prevent cost increases.

**Benchmarking Tools:** Use benchmarking tools to compare costs against industry standards and best practices. Benchmarking identifies improvement opportunities and validates performance.

**ROI Analysis Tools:** Implement ROI analysis tools that evaluate the financial impact of cost reduction initiatives and investments. ROI analysis guides resource allocation and strategic decisions.

**Continuous Cost Optimization:**
**Regular Cost Reviews:** Conduct regular cost reviews to identify trends, variances, and improvement opportunities. Systematic reviews ensure ongoing cost optimization and problem prevention.

**Supplier Negotiations:** Regularly negotiate with suppliers to optimize costs while maintaining quality standards. Supplier relationships significantly impact cost structure and profitability.

**Process Automation:** Identify opportunities for process automation that reduce labor costs while maintaining or improving quality. Automation often provides long-term cost benefits.

**Canadian Cost Considerations:**
Canadian food truck operations face unique cost challenges including seasonal variations, regulatory compliance costs, and regional price differences. Develop cost management strategies that address Canadian-specific factors and market conditions.`,
      actionItems: [
        'Implement comprehensive cost tracking system covering food, labor, overhead, and variable costs',
        'Develop cost control strategies with waste reduction, inventory optimization, and energy efficiency',
        'Create pricing optimization framework with cost-plus, value-based, and dynamic pricing models',
        'Establish profitability analysis by location, time, customer segment, and service type',
        'Design continuous cost optimization process with regular reviews and supplier negotiations'
      ],
      tips: [
        'Track costs daily but analyze trends monthly to identify patterns and make strategic adjustments',
        'Focus on cost per unit sold rather than just total costs - efficiency matters more than absolute spending',
        'Involve staff in cost control efforts - they often have the best ideas for reducing waste and improving efficiency'
      ]
    },
    {
      icon: Users,
      title: 'Customer Satisfaction & Feedback Systems',
      priority: 'High',
      impact: 'Increase retention 40%',
      content: `Customer satisfaction measurement and feedback systems provide insights for service improvement and relationship building. Systematic feedback collection and analysis drive customer-focused improvements that increase loyalty and business growth.

**Customer Satisfaction Measurement:**
**Survey Design and Implementation:** Design customer satisfaction surveys that capture meaningful feedback without being burdensome. Use short, focused surveys with rating scales and open-ended questions that provide actionable insights.

**Net Promoter Score (NPS) Tracking:** Implement NPS tracking to measure customer loyalty and likelihood to recommend your business. NPS provides a simple, standardized metric for customer relationship strength.

**Customer Effort Score (CES):** Measure customer effort required to complete transactions or resolve issues. Lower effort scores indicate smoother, more satisfying customer experiences.

**Real-Time Feedback Collection:** Implement real-time feedback collection through digital tools, comment cards, and direct interaction. Immediate feedback enables quick response and problem resolution.

**Feedback Collection Channels:**
**Digital Platforms:** Use digital platforms including social media, review sites, and mobile apps to collect customer feedback. Digital channels provide convenient feedback options and reach tech-savvy customers.

**In-Person Interaction:** Train staff to collect feedback through natural conversation and observation. Personal interaction often provides more detailed and honest feedback than formal surveys.

**Follow-Up Communication:** Implement follow-up communication systems that proactively seek feedback after service or events. Follow-up demonstrates care and provides opportunities for relationship building.

**Anonymous Feedback Options:** Provide anonymous feedback options for customers who prefer privacy. Anonymous systems often capture more honest feedback about sensitive issues.

**Feedback Analysis and Insights:**
**Trend Analysis:** Analyze feedback trends over time to identify patterns, recurring issues, and improvement opportunities. Trend analysis reveals systemic issues and successful practices.

**Sentiment Analysis:** Use sentiment analysis tools to understand emotional tone and satisfaction levels in customer feedback. Sentiment analysis provides deeper insights than rating scores alone.

**Root Cause Analysis:** Conduct root cause analysis for negative feedback to identify underlying issues and prevent recurrence. Root cause analysis addresses problems at their source rather than just symptoms.

**Competitive Comparison:** Compare customer feedback with competitor reviews and industry benchmarks to understand relative performance and positioning.

**Response and Action Systems:**
**Rapid Response Protocols:** Develop rapid response protocols for negative feedback that demonstrate care and commitment to improvement. Quick response often turns negative experiences into positive relationships.

**Service Recovery Programs:** Implement service recovery programs that address customer concerns and exceed expectations. Exceptional recovery often creates stronger loyalty than perfect initial service.

**Feedback Implementation:** Create systems for implementing customer suggestions and communicating changes back to customers. Visible action on feedback demonstrates that customer input drives real improvements.

**Recognition and Appreciation:** Recognize and appreciate customers who provide valuable feedback. Recognition encourages continued engagement and builds stronger relationships.

**Staff Training and Engagement:**
**Feedback Awareness Training:** Train staff to recognize feedback opportunities and collect information naturally during customer interactions. Staff awareness multiplies feedback collection opportunities.

**Response Training:** Train staff in appropriate responses to both positive and negative feedback. Proper responses can strengthen relationships and resolve issues effectively.

**Improvement Participation:** Engage staff in analyzing feedback and developing improvement solutions. Staff involvement builds ownership and often identifies practical solutions.

**Customer Service Standards:** Use feedback to refine customer service standards and training programs. Feedback-driven standards ensure relevance and effectiveness.

**Technology and Automation:**
**Feedback Management Systems:** Implement feedback management systems that organize, analyze, and track customer input. Systematic management ensures no feedback is overlooked or forgotten.

**Automated Surveys:** Use automated survey systems that trigger based on customer interactions or time periods. Automation ensures consistent feedback collection without manual effort.

**Analytics and Reporting:** Implement analytics and reporting tools that provide insights and trends from customer feedback data. Analytics reveal patterns and opportunities that manual analysis might miss.

**Integration with Operations:** Integrate feedback systems with operational systems to connect customer input with business performance metrics. Integration provides comprehensive performance insights.

**Canadian Customer Expectations:**
Canadian customers often have high expectations for service quality and responsiveness. Understand Canadian cultural values including politeness, fairness, and community connection when designing feedback systems and response strategies.`,
      actionItems: [
        'Design comprehensive customer satisfaction measurement system with surveys, NPS, and real-time collection',
        'Establish multiple feedback collection channels including digital platforms and in-person interaction',
        'Implement feedback analysis system with trend analysis, sentiment tracking, and root cause investigation',
        'Create rapid response and service recovery protocols with implementation and communication procedures',
        'Develop staff training program for feedback collection, response, and improvement participation'
      ],
      tips: [
        'Make feedback collection easy and convenient - the easier it is, the more feedback you\'ll receive',
        'Respond to all feedback, positive and negative - acknowledgment shows you value customer input',
        'Use feedback to celebrate what\'s working well, not just to identify problems'
      ]
    },
    {
      icon: Target,
      title: 'Operational Efficiency Measurement',
      priority: 'High',
      impact: 'Increase efficiency 35%',
      content: `Operational efficiency measurement identifies bottlenecks, optimization opportunities, and resource allocation improvements. Systematic efficiency analysis drives productivity improvements while maintaining quality standards.

**Workflow and Process Analysis:**
**Service Time Measurement:** Measure service times for each step of the customer experience including order taking, preparation, and delivery. Time measurement identifies bottlenecks and optimization opportunities.

**Kitchen Efficiency Tracking:** Track kitchen efficiency including prep time, cooking time, and assembly time for different menu items. Kitchen efficiency directly impacts capacity and customer satisfaction.

**Staff Productivity Analysis:** Analyze staff productivity including orders per hour, tasks completed, and efficiency improvements over time. Productivity analysis guides training and scheduling decisions.

**Equipment Utilization Monitoring:** Monitor equipment utilization rates and efficiency to optimize capacity and identify upgrade needs. Equipment analysis ensures maximum return on investment.

**Capacity and Throughput Analysis:**
**Peak Hour Performance:** Analyze performance during peak hours to identify capacity constraints and optimization opportunities. Peak analysis guides staffing and process improvements.

**Bottleneck Identification:** Identify operational bottlenecks that limit throughput and customer satisfaction. Bottleneck analysis focuses improvement efforts on highest-impact areas.

**Queue Management:** Monitor customer queue times and management effectiveness. Queue analysis improves customer experience and operational flow.

**Service Capacity Planning:** Plan service capacity based on demand patterns, staffing levels, and operational constraints. Capacity planning optimizes resource allocation and customer service.

**Resource Utilization Optimization:**
**Staff Scheduling Efficiency:** Analyze staff scheduling efficiency including coverage adequacy, overtime usage, and productivity optimization. Scheduling analysis reduces labor costs while maintaining service quality.

**Inventory Turnover:** Monitor inventory turnover rates and efficiency to optimize cash flow and reduce waste. Inventory analysis improves working capital management.

**Space Utilization:** Analyze space utilization in mobile kitchens to optimize layout and workflow efficiency. Space analysis maximizes productivity in limited areas.

**Energy Efficiency:** Monitor energy consumption and efficiency to reduce operating costs and environmental impact. Energy analysis identifies conservation opportunities and cost savings.

**Quality and Consistency Metrics:**
**Error Rate Tracking:** Track error rates including order mistakes, food quality issues, and service failures. Error analysis identifies training needs and process improvements.

**Consistency Measurement:** Measure consistency in service delivery, food quality, and customer experience across different times and staff. Consistency analysis ensures reliable performance.

**Rework and Waste Analysis:** Analyze rework requirements and waste generation to identify efficiency improvements. Waste analysis reduces costs while improving sustainability.

**Customer Wait Time Analysis:** Monitor customer wait times and analyze factors that affect service speed. Wait time analysis improves customer satisfaction and operational efficiency.

**Technology and Automation Impact:**
**System Efficiency Analysis:** Analyze the efficiency impact of technology systems including POS, inventory management, and communication tools. Technology analysis guides investment and optimization decisions.

**Automation Opportunities:** Identify opportunities for process automation that improve efficiency while maintaining quality. Automation analysis focuses on highest-impact improvements.

**Data Collection Efficiency:** Evaluate the efficiency of data collection and reporting systems. Efficient data systems reduce administrative burden while improving insights.

**Integration Benefits:** Analyze the benefits of system integration for operational efficiency and decision-making. Integration analysis guides technology strategy and investment.

**Continuous Improvement Processes:**
**Efficiency Benchmarking:** Benchmark efficiency metrics against industry standards and best practices. Benchmarking identifies improvement opportunities and validates performance.

**Process Optimization:** Implement systematic process optimization that identifies and eliminates inefficiencies. Optimization focuses on highest-impact improvements with measurable results.

**Innovation Implementation:** Evaluate and implement innovations that improve operational efficiency. Innovation analysis balances improvement potential with implementation costs and risks.

**Performance Tracking:** Track efficiency improvements over time to measure progress and identify additional opportunities. Performance tracking ensures continuous improvement and goal achievement.

**Canadian Operational Considerations:**
Canadian food truck operations face unique efficiency challenges including seasonal variations, weather impacts, and regulatory requirements. Develop efficiency measures that account for Canadian operational realities and market conditions.`,
      actionItems: [
        'Implement comprehensive workflow analysis with service time measurement and bottleneck identification',
        'Establish capacity and throughput analysis with peak hour performance and queue management',
        'Create resource utilization optimization system with staff scheduling and inventory efficiency',
        'Develop quality and consistency metrics with error tracking and wait time analysis',
        'Design continuous improvement process with benchmarking, optimization, and innovation implementation'
      ],
      tips: [
        'Measure efficiency during different conditions - busy periods often reveal different bottlenecks than slow times',
        'Focus on improving your biggest constraint first - small improvements to bottlenecks have big impacts',
        'Involve staff in efficiency analysis - they often see problems and solutions that management misses'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Continuous Improvement & Performance Reviews',
      priority: 'Medium',
      impact: 'Ongoing optimization',
      content: `Continuous improvement and regular performance reviews ensure your food truck operation evolves and adapts to changing conditions. Systematic improvement processes drive long-term success and competitive advantage.

**Performance Review Framework:**
**Regular Review Cycles:** Establish regular performance review cycles including daily debriefs, weekly assessments, monthly deep dives, and quarterly strategic reviews. Systematic reviews ensure consistent attention to performance improvement.

**Comprehensive Performance Assessment:** Conduct comprehensive assessments that cover financial performance, operational efficiency, customer satisfaction, and staff development. Holistic assessment provides complete performance pictures.

**Goal Setting and Tracking:** Set specific, measurable goals for performance improvement and track progress systematically. Goal tracking maintains focus and motivation for improvement efforts.

**Variance Analysis:** Analyze variances between planned and actual performance to identify causes and corrective actions. Variance analysis prevents small problems from becoming major issues.

**Improvement Opportunity Identification:**
**Data-Driven Analysis:** Use performance data to identify improvement opportunities based on trends, patterns, and benchmarks. Data-driven analysis focuses efforts on highest-impact opportunities.

**Staff Input and Suggestions:** Collect and evaluate staff suggestions for operational improvements. Front-line staff often identify practical solutions that management might overlook.

**Customer Feedback Integration:** Integrate customer feedback into improvement planning to ensure customer-focused enhancements. Customer input guides improvements that matter most to business success.

**Industry Best Practice Research:** Research industry best practices and evaluate applicability to your operation. External learning accelerates improvement and prevents reinventing solutions.

**Implementation and Change Management:**
**Improvement Planning:** Develop detailed improvement plans with specific objectives, timelines, resources, and success metrics. Systematic planning ensures successful implementation and measurable results.

**Change Management:** Implement change management processes that engage staff, communicate benefits, and manage resistance. Effective change management ensures improvement adoption and sustainability.

**Pilot Testing:** Use pilot testing for significant improvements to validate effectiveness before full implementation. Testing reduces risk and allows refinement before major changes.

**Progress Monitoring:** Monitor improvement implementation progress and adjust plans based on results and feedback. Progress monitoring ensures improvements achieve intended benefits.

**Innovation and Adaptation:**
**Innovation Culture:** Foster innovation culture that encourages experimentation, learning, and creative problem-solving. Innovation culture drives continuous improvement and competitive advantage.

**Market Adaptation:** Adapt operations based on market changes, customer preferences, and competitive dynamics. Market adaptation ensures continued relevance and success.

**Technology Integration:** Evaluate and integrate new technologies that improve performance and efficiency. Technology integration often provides significant improvement opportunities.

**Seasonal Adjustments:** Adjust operations and performance expectations based on seasonal patterns and conditions. Seasonal adaptation optimizes performance throughout the year.

**Knowledge Management and Learning:**
**Best Practice Documentation:** Document successful improvements and best practices for future reference and training. Documentation preserves institutional knowledge and accelerates learning.

**Lesson Learned Capture:** Capture lessons learned from both successful and unsuccessful improvement efforts. Learning documentation prevents repeating mistakes and builds improvement capability.

**Training and Development:** Use performance insights to guide staff training and development programs. Performance-driven training ensures relevance and effectiveness.

**Knowledge Sharing:** Share improvement successes and lessons with industry peers and networks. Knowledge sharing builds relationships and accelerates learning.

**Strategic Performance Alignment:**
**Business Strategy Integration:** Align performance improvement efforts with overall business strategy and goals. Strategic alignment ensures improvements support long-term success.

**Resource Allocation:** Allocate resources to improvement efforts based on potential impact and strategic importance. Resource allocation maximizes improvement return on investment.

**Competitive Positioning:** Use performance improvement to strengthen competitive positioning and market differentiation. Improvement-driven differentiation creates sustainable competitive advantages.

**Long-Term Planning:** Integrate performance improvement into long-term business planning and development. Long-term integration ensures sustained improvement and growth.

**Canadian Improvement Considerations:**
Canadian food truck operations must adapt to unique market conditions including seasonal variations, regulatory changes, and cultural preferences. Develop improvement processes that address Canadian-specific challenges and opportunities.`,
      actionItems: [
        'Establish regular performance review framework with daily, weekly, monthly, and quarterly cycles',
        'Create improvement opportunity identification system with data analysis and staff input',
        'Implement change management process with planning, testing, and progress monitoring',
        'Develop innovation culture with experimentation, adaptation, and technology integration',
        'Design knowledge management system with documentation, learning capture, and strategic alignment'
      ],
      tips: [
        'Make improvement everyone\'s responsibility, not just management\'s - engage the whole team in continuous improvement',
        'Celebrate improvement successes to build momentum and motivation for ongoing efforts',
        'Focus on small, consistent improvements rather than major overhauls - incremental change is more sustainable'
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
    <section ref={sectionRef} id="performance-monitoring-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Performance Monitoring & <span className="text-primary-500">Analytics</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Track key metrics and KPIs to continuously improve your operations and profitability. Learn data-driven decision making and performance optimization for food truck success.
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
                      Impact: {currentStepData.impact}
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
                                Performance Monitoring Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've mastered performance monitoring and analytics for food truck operations. You now have the tools to track, analyze, and optimize your business performance continuously.
                              </p>
                              <Link
                                to="/operations"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Return to Operations Overview
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

export default PerformanceMonitoringLesson;