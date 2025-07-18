import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, DollarSign, Calculator, Target, BarChart3, RefreshCw, CheckCircle, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProfitOptimizationLesson: React.FC = () => {
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
      icon: Calculator,
      title: 'Cost Analysis & Reduction Strategies',
      priority: 'Critical',
      impact: 'Reduce costs 15-25%',
      content: `Systematic cost analysis identifies opportunities to reduce expenses without compromising quality or customer satisfaction. Effective cost management directly improves profitability and provides competitive advantages through operational efficiency.

**Comprehensive Cost Analysis Framework:**
**Direct Cost Analysis:** Analyze all direct costs including food ingredients, packaging, disposables, and labor directly involved in food preparation and service. Direct costs typically represent 50-70% of total expenses and offer the greatest optimization opportunities.

**Indirect Cost Evaluation:** Evaluate indirect costs including fuel, insurance, permits, equipment maintenance, and administrative expenses. While smaller individually, indirect costs accumulate significantly and often contain hidden optimization opportunities.

**Fixed vs Variable Cost Classification:** Classify costs as fixed (remain constant regardless of sales volume) or variable (change with sales volume) to understand cost behavior and optimize pricing and volume decisions.

**Activity-Based Cost Analysis:** Analyze costs by activity including prep time, cooking time, service time, and cleanup to identify efficiency opportunities and resource allocation improvements.

**Food Cost Optimization Strategies:**
**Ingredient Cost Management:** Negotiate better pricing with suppliers, explore alternative suppliers, and consider bulk purchasing for non-perishable items. Supplier relationship management can reduce food costs by 10-20% without quality compromise.

**Portion Control Implementation:** Implement precise portion control systems using standardized recipes, measuring tools, and staff training. Consistent portioning reduces waste while ensuring customer satisfaction and predictable costs.

**Menu Engineering:** Analyze menu item profitability and promote high-margin items while eliminating or repositioning low-margin offerings. Strategic menu design guides customer choices toward profitable options.

**Waste Reduction Programs:** Implement systematic waste reduction including better forecasting, FIFO inventory rotation, creative use of trim and leftovers, and staff training on waste prevention.

**Labor Cost Optimization:**
**Scheduling Efficiency:** Optimize staff scheduling based on demand patterns, cross-training capabilities, and productivity requirements. Efficient scheduling reduces labor costs while maintaining service quality.

**Productivity Improvement:** Improve staff productivity through better training, workflow optimization, equipment upgrades, and performance incentives. Productivity improvements reduce labor cost per unit sold.

**Task Automation:** Identify opportunities for task automation including prep work, inventory management, and administrative functions. Automation reduces labor requirements while improving consistency.

**Cross-Training Benefits:** Cross-train staff in multiple roles to provide scheduling flexibility and reduce overtime costs during peak periods or staff absences.

**Overhead Cost Reduction:**
**Equipment Efficiency:** Optimize equipment usage, maintenance, and energy consumption to reduce operating costs. Well-maintained equipment operates more efficiently and lasts longer.

**Insurance Optimization:** Review insurance coverage annually and shop for competitive rates while maintaining adequate protection. Insurance optimization can reduce costs without compromising coverage.

**Permit and License Efficiency:** Streamline permit and license management to avoid late fees, duplicate coverage, or unnecessary permits. Efficient compliance reduces administrative costs.

**Technology Cost Management:** Evaluate technology costs including POS systems, payment processing, and communication tools to ensure cost-effectiveness and eliminate redundant services.

**Canadian Cost Considerations:**
**Seasonal Cost Management:** Plan for seasonal cost variations including heating, equipment winterization, and off-season storage. Canadian operations require specific cost management for climate challenges.

**Provincial Cost Variations:** Understand provincial variations in labor costs, tax rates, and regulatory fees that affect overall cost structure and profitability.

**Currency and Supply Chain:** Consider currency fluctuations and supply chain costs that affect ingredient pricing and equipment purchases in Canadian markets.

**Regulatory Compliance Costs:** Factor regulatory compliance costs including health inspections, permit renewals, and safety requirements into cost optimization planning.`,
      actionItems: [
        'Conduct comprehensive cost analysis categorizing direct, indirect, fixed, and variable costs',
        'Implement food cost optimization with supplier negotiations, portion control, and waste reduction',
        'Develop labor cost optimization through scheduling efficiency and productivity improvement',
        'Create overhead cost reduction plan with equipment, insurance, and technology optimization',
        'Design seasonal cost management strategy addressing Canadian climate and regulatory variations'
      ],
      tips: [
        'Focus on your largest cost categories first - small improvements to big expenses have bigger impact than large improvements to small expenses',
        'Track cost reductions monthly to ensure initiatives are working and identify additional opportunities',
        'Involve staff in cost reduction efforts - they often have the best ideas for eliminating waste and improving efficiency'
      ]
    },
    {
      icon: DollarSign,
      title: 'Pricing Strategy Optimization & Revenue Enhancement',
      priority: 'Critical',
      impact: 'Increase revenue 20-30%',
      content: `Strategic pricing optimization and revenue enhancement maximize profitability while maintaining customer satisfaction and competitive positioning. Effective pricing strategies balance value perception with profit requirements.

**Pricing Strategy Framework:**
**Cost-Plus Pricing Foundation:** Establish cost-plus pricing as your foundation, ensuring all costs are covered with adequate profit margins. Calculate true costs including direct costs, overhead allocation, and desired profit margin.

**Value-Based Pricing Opportunities:** Identify opportunities for value-based pricing where customers perceive high value and are willing to pay premium prices. Unique menu items, superior quality, or exceptional service can justify premium pricing.

**Competitive Pricing Analysis:** Analyze competitor pricing and position your offerings strategically within the market. Understand when to price above, at, or below competitors based on value proposition and positioning.

**Dynamic Pricing Implementation:** Consider dynamic pricing strategies that adjust prices based on demand, location, time, and market conditions. Dynamic pricing optimizes revenue while managing demand patterns.

**Menu Pricing Optimization:**
**Menu Engineering Techniques:** Use menu engineering to promote high-margin items through strategic placement, descriptions, and visual design. Guide customer choices toward profitable options without compromising satisfaction.

**Price Anchoring Strategies:** Use price anchoring techniques including premium options that make standard items appear more reasonably priced. Anchoring influences customer perception and purchasing decisions.

**Bundle and Combo Pricing:** Create bundles and combos that increase average order value while providing customer value. Strategic bundling improves profitability while enhancing customer experience.

**Seasonal Pricing Adjustments:** Adjust pricing seasonally to reflect ingredient costs, demand patterns, and competitive dynamics. Seasonal pricing optimizes revenue throughout the year.

**Revenue Stream Diversification:**
**Catering Premium Pricing:** Implement premium pricing for catering services that reflects additional value, convenience, and service requirements. Catering typically commands 20-40% higher margins than regular service.

**Event and Festival Pricing:** Optimize pricing for events and festivals where customers expect premium pricing and have limited alternatives. Event pricing should reflect unique value and limited competition.

**Loyalty Program Revenue:** Design loyalty programs that increase customer frequency and spending while providing perceived value. Effective programs increase customer lifetime value significantly.

**Merchandise and Add-On Revenue:** Explore merchandise sales, branded items, and add-on services that provide additional revenue streams with high profit margins.

**Psychological Pricing Techniques:**
**Price Point Optimization:** Optimize price points using psychological pricing techniques including charm pricing ($9.99 vs $10.00) and price bundling that influences customer perception.

**Menu Design Psychology:** Use menu design psychology including item placement, font sizes, and visual cues that guide customer choices toward high-margin items.

**Scarcity and Urgency:** Create scarcity and urgency through limited-time offers, daily specials, and exclusive items that encourage immediate purchase decisions.

**Social Proof Integration:** Use social proof including customer reviews, popularity indicators, and recommendation systems that influence purchasing decisions.

**Technology and Revenue Optimization:**
**POS Analytics:** Use POS system analytics to track pricing effectiveness, identify optimization opportunities, and measure revenue impact of pricing changes.

**A/B Testing:** Implement A/B testing for pricing changes to measure impact before full implementation. Testing validates pricing strategies and guides optimization decisions.

**Customer Segmentation:** Use customer segmentation to implement targeted pricing strategies for different customer groups based on price sensitivity and value perception.

**Revenue Forecasting:** Develop revenue forecasting models that predict pricing impact and guide strategic pricing decisions.

**Canadian Pricing Considerations:**
**Regional Price Variations:** Understand regional price variations across Canadian markets and adjust pricing strategies accordingly. Urban vs rural markets often have different price expectations and competitive dynamics.

**Currency and Economic Factors:** Consider currency fluctuations, economic conditions, and regional prosperity that affect customer spending and price sensitivity.

**Cultural Pricing Expectations:** Understand Canadian cultural expectations for value, fairness, and pricing transparency that influence customer acceptance of pricing strategies.

**Seasonal Demand Pricing:** Optimize pricing for Canadian seasonal demand patterns including peak summer pricing and off-season value positioning.`,
      actionItems: [
        'Develop comprehensive pricing strategy framework with cost-plus foundation and value-based opportunities',
        'Implement menu pricing optimization with engineering techniques and psychological pricing',
        'Create revenue stream diversification with catering, events, and loyalty program pricing',
        'Design technology-supported pricing optimization with analytics, testing, and forecasting',
        'Establish Canadian market pricing strategy addressing regional, cultural, and seasonal considerations'
      ],
      tips: [
        'Test price increases gradually and monitor customer response - small increases are often accepted without resistance',
        'Focus on increasing average order value through upselling and bundling rather than just raising prices',
        'Use data to justify pricing decisions rather than gut feelings - customer behavior often surprises business owners'
      ]
    },
    {
      icon: Target,
      title: 'Waste Reduction & Efficiency Improvement',
      priority: 'High',
      impact: 'Improve margins 10-20%',
      content: `Systematic waste reduction and efficiency improvement directly impact profitability while supporting environmental sustainability. Effective waste management and operational efficiency create competitive advantages through cost reduction and quality improvement.

**Food Waste Reduction Strategies:**
**Inventory Management Optimization:** Implement precise inventory management including demand forecasting, FIFO rotation, and optimal ordering quantities. Effective inventory management reduces spoilage while ensuring product availability.

**Prep Planning and Batch Management:** Optimize prep planning based on sales forecasts and historical data to minimize over-preparation while maintaining service speed. Batch cooking strategies balance efficiency with waste reduction.

**Menu Design for Waste Reduction:** Design menus that maximize ingredient utilization across multiple items and minimize specialized ingredients with limited applications. Versatile ingredients reduce waste while simplifying operations.

**Creative Utilization Programs:** Develop creative programs for utilizing trim, leftovers, and approaching-expiration ingredients including daily specials, staff meals, and value items that convert potential waste into revenue.

**Operational Efficiency Improvement:**
**Workflow Optimization:** Analyze and optimize workflows to eliminate unnecessary steps, reduce movement, and improve productivity. Efficient workflows reduce labor costs while improving service speed.

**Equipment Utilization:** Maximize equipment utilization through better scheduling, multi-purpose applications, and maintenance optimization. Efficient equipment use reduces costs while extending equipment life.

**Energy Efficiency Programs:** Implement energy efficiency programs including equipment optimization, usage monitoring, and conservation practices. Energy efficiency reduces operating costs while supporting environmental goals.

**Space Utilization Optimization:** Optimize space utilization in mobile kitchens through better organization, storage solutions, and workflow design. Efficient space use improves productivity and reduces operational stress.

**Technology and Automation:**
**Process Automation:** Identify opportunities for process automation that reduce labor requirements while maintaining or improving quality. Automation often provides long-term efficiency gains.

**Technology Integration:** Integrate technology solutions that improve efficiency including inventory management, ordering systems, and communication tools. Technology integration reduces manual effort while improving accuracy.

**Data Analytics for Efficiency:** Use data analytics to identify efficiency opportunities and measure improvement impact. Analytics reveal patterns and opportunities that manual observation might miss.

**Mobile Technology Optimization:** Optimize mobile technology including POS systems, payment processing, and communication tools for maximum efficiency and reliability.

**Staff Training and Engagement:**
**Efficiency Training:** Train staff in efficiency techniques including time management, multitasking, and workflow optimization. Well-trained staff operate more efficiently while maintaining quality standards.

**Waste Awareness Programs:** Implement waste awareness programs that engage staff in waste reduction efforts and provide incentives for improvement. Staff engagement multiplies waste reduction effectiveness.

**Continuous Improvement Culture:** Foster continuous improvement culture where staff actively seek efficiency improvements and waste reduction opportunities. Cultural change creates sustainable improvement.

**Performance Measurement:** Measure and communicate efficiency improvements to maintain focus and motivation for ongoing improvement efforts.

**Quality Maintenance During Optimization:**
**Quality Standards Protection:** Ensure efficiency improvements don't compromise quality standards or customer satisfaction. Sustainable efficiency maintains quality while reducing costs.

**Customer Experience Focus:** Maintain customer experience focus during efficiency improvements to ensure changes enhance rather than detract from customer satisfaction.

**Safety Considerations:** Ensure efficiency improvements don't compromise safety standards or create additional risks for staff or customers.

**Gradual Implementation:** Implement efficiency improvements gradually to allow staff adaptation and identify any unintended consequences before full implementation.

**Measurement and Monitoring:**
**Waste Tracking Systems:** Implement waste tracking systems that measure waste by category and identify reduction opportunities. Systematic tracking enables targeted improvement efforts.

**Efficiency Metrics:** Track efficiency metrics including labor productivity, equipment utilization, and energy consumption to measure improvement impact and identify additional opportunities.

**Cost-Benefit Analysis:** Conduct cost-benefit analysis for efficiency initiatives to ensure positive return on investment and guide resource allocation decisions.

**Benchmarking and Comparison:** Benchmark efficiency performance against industry standards and best practices to identify improvement opportunities and validate performance.

**Canadian Efficiency Considerations:**
**Seasonal Efficiency Challenges:** Address seasonal efficiency challenges including weather impacts, equipment winterization, and off-season optimization for Canadian operations.

**Regional Resource Availability:** Consider regional variations in resource availability, supplier options, and operational constraints that affect efficiency opportunities.

**Environmental Regulations:** Comply with environmental regulations and sustainability expectations that influence waste management and efficiency practices in Canadian markets.

**Cultural Sustainability Values:** Align efficiency and waste reduction efforts with Canadian cultural values emphasizing environmental responsibility and community stewardship.`,
      actionItems: [
        'Implement comprehensive food waste reduction with inventory optimization and creative utilization programs',
        'Develop operational efficiency improvement through workflow optimization and equipment utilization',
        'Create technology and automation strategy with process improvement and data analytics integration',
        'Establish staff training and engagement programs with efficiency culture and performance measurement',
        'Design measurement and monitoring systems with waste tracking, efficiency metrics, and benchmarking'
      ],
      tips: [
        'Start with the biggest waste sources first - focus your efforts where you can make the biggest impact',
        'Involve staff in identifying waste and efficiency opportunities - they see problems and solutions you might miss',
        'Measure everything you want to improve - what gets measured gets managed and improved'
      ]
    },
    {
      icon: BarChart3,
      title: 'Revenue Stream Diversification & Growth',
      priority: 'High',
      impact: 'Add 30-50% revenue',
      content: `Revenue stream diversification reduces business risk while creating new growth opportunities. Multiple revenue streams provide stability during seasonal fluctuations and market changes while maximizing asset utilization.

**Core Revenue Stream Optimization:**
**Regular Service Enhancement:** Optimize regular food truck service through location strategy, menu development, and customer experience improvement. Core service optimization provides the foundation for diversification efforts.

**Peak Hour Maximization:** Maximize revenue during peak hours through capacity optimization, menu streamlining, and service efficiency. Peak hour optimization often provides the highest return on investment.

**Location Portfolio Development:** Develop diverse location portfolios that balance high-volume business districts with steady residential routes and seasonal event opportunities. Location diversity reduces risk while maximizing revenue potential.

**Customer Base Expansion:** Expand customer base through targeted marketing, referral programs, and community engagement that increases regular customer frequency and spending.

**Catering Service Development:**
**Corporate Catering Programs:** Develop corporate catering programs targeting business meetings, employee events, and office celebrations. Corporate catering provides higher margins and predictable revenue.

**Private Event Catering:** Expand into private event catering including weddings, parties, and family celebrations. Private events often command premium pricing and provide marketing opportunities.

**Institutional Catering:** Explore institutional catering opportunities including schools, healthcare facilities, and community organizations. Institutional contracts provide steady revenue and community connections.

**Catering Package Development:** Create catering packages that simplify ordering while increasing average order value. Package pricing improves profitability while providing customer convenience.

**Seasonal and Special Revenue Streams:**
**Holiday and Seasonal Specialties:** Develop holiday and seasonal specialties that capitalize on cultural celebrations and seasonal demand. Seasonal items often command premium pricing and create customer excitement.

**Festival and Event Partnerships:** Build partnerships with festivals, farmers markets, and special events that provide exclusive or preferred vendor status. Event partnerships create high-revenue opportunities with built-in marketing.

**Subscription and Meal Plan Services:** Explore subscription services or meal plans that provide recurring revenue and customer convenience. Subscription models improve cash flow predictability and customer retention.

**Retail Product Development:** Develop retail products including sauces, spice blends, or packaged items that extend your brand and provide additional revenue streams.

**Technology-Enabled Revenue Streams:**
**Online Ordering and Delivery:** Implement online ordering and delivery services that expand your reach and provide convenience for customers. Digital services often increase order frequency and average order value.

**Meal Kit and Take-Home Options:** Develop meal kits or take-home options that allow customers to recreate your food at home. Take-home products provide additional revenue while building brand loyalty.

**Virtual Cooking Classes:** Offer virtual cooking classes or demonstrations that monetize your expertise while building customer relationships. Educational services provide high-margin revenue opportunities.

**Digital Content and Merchandise:** Create digital content, branded merchandise, or licensing opportunities that leverage your brand recognition for additional revenue streams.

**Partnership and Collaboration Revenue:**
**Cross-Promotion Partnerships:** Develop cross-promotion partnerships with complementary businesses including breweries, coffee shops, and retail stores. Partnerships expand customer reach while sharing marketing costs.

**Commissary and Kitchen Rental:** If you have excess commissary capacity, consider renting space or services to other food entrepreneurs. Commissary rental provides steady income while building industry relationships.

**Consulting and Training Services:** Offer consulting or training services to aspiring food truck operators based on your experience and expertise. Knowledge monetization provides high-margin revenue opportunities.

**Franchise or Licensing Opportunities:** Explore franchise or licensing opportunities that allow expansion without direct investment. Franchise models provide ongoing revenue while leveraging others' capital and effort.

**Revenue Stream Management:**
**Performance Analysis:** Analyze performance of different revenue streams to identify the most profitable and scalable opportunities. Focus resources on highest-return activities while maintaining core service quality.

**Resource Allocation:** Allocate resources strategically across revenue streams to maximize overall profitability while maintaining operational efficiency and quality standards.

**Risk Management:** Manage risks associated with revenue diversification including operational complexity, quality control, and resource strain. Balanced diversification provides growth without compromising core operations.

**Integration and Synergy:** Develop synergies between revenue streams that leverage shared resources, customer relationships, and operational capabilities for maximum efficiency and profitability.

**Canadian Market Opportunities:**
**Regional Specialization:** Develop revenue streams that capitalize on regional Canadian preferences, cultural celebrations, and local market opportunities.

**Seasonal Tourism:** Leverage seasonal tourism patterns in Canadian markets through specialized offerings, event partnerships, and tourist-focused services.

**Cultural Diversity:** Capitalize on Canadian cultural diversity through authentic ethnic offerings, cultural event catering, and community-specific services.

**Local Sourcing Partnerships:** Develop partnerships with local farmers, producers, and suppliers that create unique offerings while supporting community relationships and values.`,
      actionItems: [
        'Optimize core revenue streams with service enhancement and location portfolio development',
        'Develop comprehensive catering services with corporate, private, and institutional programs',
        'Create seasonal and special revenue streams with holiday specialties and event partnerships',
        'Implement technology-enabled revenue streams with online ordering and digital services',
        'Establish partnership and collaboration revenue with cross-promotion and knowledge monetization'
      ],
      tips: [
        'Start with one new revenue stream at a time and perfect it before adding others - quality over quantity',
        'Choose revenue streams that leverage your existing strengths and customer relationships',
        'Test new revenue streams on a small scale before making major investments or commitments'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Profitability Analysis & Performance Metrics',
      priority: 'High',
      impact: 'Data-driven optimization',
      content: `Comprehensive profitability analysis and performance metrics provide insights for strategic decision-making and continuous improvement. Systematic measurement enables data-driven optimization that maximizes profitability while maintaining quality and customer satisfaction.

**Profitability Analysis Framework:**
**Gross Profit Analysis:** Calculate and analyze gross profit by menu item, category, and time period to identify the most profitable offerings and optimization opportunities. Gross profit analysis guides menu development and pricing decisions.

**Net Profit Analysis:** Analyze net profit after all expenses to understand true business profitability and identify areas for improvement. Net profit analysis reveals the overall financial health and sustainability of operations.

**Contribution Margin Analysis:** Calculate contribution margins for different products and services to understand their impact on fixed cost coverage and profitability. Contribution analysis guides resource allocation and strategic decisions.

**Customer Profitability Analysis:** Analyze profitability by customer segment, location, and service type to identify the most valuable customers and optimize service strategies accordingly.

**Key Performance Indicators (KPIs):**
**Financial Performance Metrics:** Track key financial metrics including revenue growth, profit margins, return on investment, and cash flow ratios. Financial KPIs provide comprehensive performance visibility and trend analysis.

**Operational Efficiency Metrics:** Monitor operational metrics including labor productivity, equipment utilization, waste percentages, and service speed. Efficiency metrics identify optimization opportunities and measure improvement impact.

**Customer Performance Metrics:** Track customer metrics including average order value, customer frequency, retention rates, and satisfaction scores. Customer metrics guide marketing and service strategies.

**Market Performance Metrics:** Monitor market metrics including market share, competitive positioning, and growth rates relative to industry benchmarks. Market metrics provide context for performance evaluation.

**Profitability Optimization Strategies:**
**High-Margin Focus:** Focus on promoting and optimizing high-margin items and services while maintaining customer satisfaction. High-margin focus improves profitability without necessarily increasing sales volume.

**Cost Structure Optimization:** Optimize cost structure through strategic sourcing, operational efficiency, and overhead management. Cost optimization improves profitability at any revenue level.

**Price Optimization:** Optimize pricing strategies based on profitability analysis and customer value perception. Strategic pricing balances profitability with market positioning and customer satisfaction.

**Mix Optimization:** Optimize product and service mix to emphasize profitable offerings while maintaining customer choice and satisfaction. Mix optimization guides menu development and promotional strategies.

**Performance Benchmarking:**
**Industry Benchmarking:** Compare performance metrics to food truck industry benchmarks to understand relative performance and identify improvement opportunities. Benchmarking provides context and validation for performance assessment.

**Internal Benchmarking:** Compare performance across different time periods, locations, and service types to identify best practices and optimization opportunities. Internal benchmarking reveals successful strategies and improvement areas.

**Competitive Benchmarking:** Where possible, benchmark performance against competitors to understand market positioning and competitive advantages. Competitive insights guide strategic positioning and differentiation.

**Best Practice Research:** Research best practices from successful food truck operations and adapt relevant strategies to your business. External learning accelerates improvement and innovation.

**Technology and Analytics:**
**Advanced Analytics:** Use advanced analytics tools including regression analysis, predictive modeling, and machine learning to identify patterns and optimization opportunities. Advanced analytics reveal insights that basic analysis might miss.

**Real-Time Monitoring:** Implement real-time performance monitoring that enables immediate response to performance changes and optimization opportunities. Real-time data supports dynamic decision-making.

**Automated Reporting:** Use automated reporting systems that generate regular performance updates and exception alerts. Automation ensures consistent monitoring without manual effort.

**Integration and Dashboards:** Integrate performance data from multiple sources into comprehensive dashboards that provide holistic performance visibility and trend analysis.

**Continuous Improvement Process:**
**Regular Performance Reviews:** Conduct regular performance reviews that analyze trends, identify opportunities, and plan improvement initiatives. Systematic reviews ensure ongoing optimization and goal achievement.

**Improvement Implementation:** Implement performance improvements through structured change management that includes planning, testing, and monitoring. Systematic implementation ensures successful improvement adoption.

**Goal Setting and Tracking:** Set specific performance goals and track progress systematically to maintain focus and motivation for improvement efforts. Goal tracking provides accountability and direction.

**Learning and Adaptation:** Use performance insights to guide learning and adaptation that keeps your business competitive and profitable in changing market conditions.

**Canadian Performance Considerations:**
**Seasonal Performance Patterns:** Analyze performance considering Canadian seasonal patterns and adjust expectations and strategies accordingly. Seasonal analysis provides realistic performance context.

**Regional Performance Variations:** Understand regional performance variations across Canadian markets and adapt strategies to local conditions and opportunities.

**Regulatory Impact Analysis:** Analyze the impact of Canadian regulatory requirements on performance and identify optimization opportunities within compliance constraints.

**Cultural Performance Factors:** Consider Canadian cultural factors that influence customer behavior, employee performance, and business success in performance analysis and optimization.`,
      actionItems: [
        'Establish comprehensive profitability analysis framework with gross profit, net profit, and contribution margin tracking',
        'Implement KPI tracking system covering financial, operational, customer, and market performance metrics',
        'Create profitability optimization strategy with high-margin focus and cost structure optimization',
        'Design performance benchmarking system with industry, internal, and competitive comparison',
        'Set up technology and analytics platform with advanced analytics, real-time monitoring, and automated reporting'
      ],
      tips: [
        'Focus on profit per hour, not just total profit - some busy periods may be less profitable than slower times',
        'Use performance data to identify your most profitable customers and replicate those relationships',
        'Review performance metrics weekly but make strategic changes monthly - avoid overreacting to short-term fluctuations'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Continuous Profit Improvement & Strategic Planning',
      priority: 'Medium',
      impact: 'Sustainable growth',
      content: `Continuous profit improvement and strategic planning ensure long-term business sustainability and growth. Systematic improvement processes adapt to changing market conditions while maintaining profitability and competitive advantage.

**Strategic Profit Planning:**
**Long-Term Profitability Goals:** Establish long-term profitability goals that balance growth ambitions with realistic market conditions and operational capabilities. Strategic goals provide direction and motivation for improvement efforts.

**Market Positioning Strategy:** Develop market positioning strategies that support profitability through differentiation, value creation, and competitive advantage. Strategic positioning enables premium pricing and customer loyalty.

**Investment Planning:** Plan investments in equipment, technology, and capabilities that support long-term profitability and competitive advantage. Strategic investment maximizes return while building business capabilities.

**Growth Strategy Integration:** Integrate profit optimization with growth strategies to ensure expansion maintains or improves profitability rather than sacrificing margins for volume.

**Continuous Improvement Framework:**
**Regular Profit Reviews:** Conduct regular profit reviews that analyze trends, identify opportunities, and plan improvement initiatives. Systematic reviews ensure ongoing optimization and adaptation to changing conditions.

**Improvement Opportunity Identification:** Systematically identify improvement opportunities through data analysis, staff feedback, customer input, and industry research. Comprehensive opportunity identification focuses efforts on highest-impact improvements.

**Implementation and Testing:** Implement improvements through structured testing and measurement that validates effectiveness before full adoption. Testing reduces risk while ensuring improvements achieve intended benefits.

**Performance Monitoring:** Monitor improvement implementation and adjust strategies based on results and feedback. Continuous monitoring ensures improvements achieve intended benefits and identify additional opportunities.

**Innovation and Adaptation:**
**Market Trend Analysis:** Analyze market trends and customer preferences to identify innovation opportunities that support profitability. Trend analysis guides product development and service innovation.

**Technology Integration:** Evaluate and integrate new technologies that improve efficiency, reduce costs, or enhance revenue opportunities. Technology integration often provides significant profit improvement opportunities.

**Service Innovation:** Develop service innovations that create value for customers while improving operational efficiency and profitability. Innovation balances customer benefit with business improvement.

**Competitive Response:** Adapt strategies based on competitive changes and market dynamics while maintaining profitability focus. Competitive adaptation ensures continued market relevance and advantage.

**Risk Management and Sustainability:**
**Profit Risk Assessment:** Assess risks to profitability including market changes, cost increases, competitive threats, and operational challenges. Risk assessment enables proactive planning and mitigation strategies.

**Sustainability Planning:** Plan for long-term sustainability including environmental responsibility, community relationships, and stakeholder value creation. Sustainable practices often improve profitability while building brand value.

**Contingency Planning:** Develop contingency plans for various scenarios including economic downturns, competitive threats, and operational challenges. Contingency planning protects profitability during difficult periods.

**Diversification Strategy:** Plan diversification strategies that reduce risk while creating new profit opportunities. Strategic diversification balances risk reduction with growth potential.

**Stakeholder Value Creation:**
**Customer Value Enhancement:** Continuously enhance customer value through service improvements, product innovation, and experience optimization. Customer value creation supports pricing power and loyalty.

**Employee Value Creation:** Create value for employees through fair compensation, development opportunities, and positive work environment. Employee value creation improves productivity and reduces turnover costs.

**Community Value Creation:** Create value for communities through local sourcing, community involvement, and economic contribution. Community value creation builds brand reputation and customer loyalty.

**Supplier Relationship Value:** Build valuable supplier relationships through fair dealing, prompt payment, and collaborative planning. Strong supplier relationships often provide cost advantages and service improvements.

**Performance Culture Development:**
**Profit Awareness Culture:** Develop organizational culture that emphasizes profit awareness and improvement at all levels. Cultural change creates sustainable improvement and employee engagement.

**Accountability Systems:** Implement accountability systems that connect individual performance with business profitability and improvement goals. Accountability drives performance and improvement focus.

**Recognition and Rewards:** Recognize and reward contributions to profit improvement and business success. Recognition motivates continued improvement efforts and builds positive culture.

**Learning and Development:** Invest in learning and development that builds capabilities for profit improvement and business growth. Capability building creates long-term competitive advantages.

**Strategic Planning Integration:**
**Business Plan Updates:** Regularly update business plans to reflect profit improvement insights and changing market conditions. Updated planning ensures strategic alignment and goal achievement.

**Resource Allocation:** Allocate resources strategically based on profit improvement opportunities and strategic priorities. Strategic allocation maximizes return on investment and improvement impact.

**Goal Alignment:** Align all business activities and decisions with profitability goals and strategic objectives. Alignment ensures consistent focus and coordinated improvement efforts.

**Success Measurement:** Measure success based on profit improvement and strategic goal achievement rather than just revenue growth or operational metrics.

**Canadian Strategic Considerations:**
**Regional Strategy Development:** Develop regional strategies that capitalize on Canadian market opportunities while addressing local challenges and competitive conditions.

**Seasonal Strategy Planning:** Plan seasonal strategies that optimize profitability throughout Canadian climate cycles and market patterns.

**Regulatory Strategy Integration:** Integrate regulatory compliance and changes into strategic planning to ensure continued profitability within legal requirements.

**Cultural Strategy Alignment:** Align profit improvement strategies with Canadian cultural values and business practices to ensure market acceptance and community support.`,
      actionItems: [
        'Establish strategic profit planning with long-term goals and market positioning strategy',
        'Implement continuous improvement framework with regular reviews and opportunity identification',
        'Create innovation and adaptation strategy with market trend analysis and technology integration',
        'Design risk management and sustainability planning with contingency and diversification strategies',
        'Develop performance culture with profit awareness, accountability, and strategic planning integration'
      ],
      tips: [
        'Make profit improvement everyone\'s responsibility, not just management\'s - engage the whole team in finding opportunities',
        'Balance short-term profit improvements with long-term sustainability - some investments take time to pay off',
        'Celebrate profit improvement successes to build momentum and motivation for ongoing efforts'
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
    <section ref={sectionRef} id="profit-optimization-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Profit <span className="text-primary-500">Optimization</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Identify opportunities to increase profitability and reduce unnecessary costs. Learn systematic approaches to cost analysis, revenue enhancement, and strategic profit improvement.
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
                                Profit Optimization Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've mastered profit optimization for food truck operations. You now have the tools to systematically improve profitability through cost reduction, revenue enhancement, and strategic planning.
                              </p>
                              <Link
                                to="/financial-management/funding-financing"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Next: Funding & Financing
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

export default ProfitOptimizationLesson;