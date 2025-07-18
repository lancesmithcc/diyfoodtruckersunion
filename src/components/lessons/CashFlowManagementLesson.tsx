import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DollarSign, TrendingUp, Calendar, AlertTriangle, PiggyBank, BarChart3, CheckCircle, ArrowRight, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CashFlowManagementLesson: React.FC = () => {
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
      icon: DollarSign,
      title: 'Cash Flow Forecasting & Planning',
      priority: 'Critical',
      impact: 'Prevent cash shortages',
      content: `Cash flow forecasting is essential for food truck success, especially given the seasonal nature of Canadian operations. Accurate forecasting prevents cash shortages and enables strategic decision-making for growth and sustainability.

**Understanding Cash Flow vs Profit:**
Cash flow represents actual money moving in and out of your business, while profit is an accounting concept that may not reflect your actual cash position. A profitable food truck can still face cash flow problems if customers pay slowly or if you invest heavily in inventory or equipment.

**Cash Flow Components:**
**Operating Cash Flow:** Daily sales receipts, supplier payments, payroll, rent, utilities, and other operational expenses. Operating cash flow is the lifeblood of your food truck and should be monitored daily.

**Investing Cash Flow:** Equipment purchases, truck modifications, technology investments, and other capital expenditures that improve your business capabilities but require significant cash outlay.

**Financing Cash Flow:** Loan proceeds, loan payments, owner investments, and owner withdrawals. Financing activities affect your cash position but don't reflect operational performance.

**Forecasting Methodology:**
**Historical Analysis:** Use historical sales data to identify patterns, trends, and seasonal variations that affect cash flow. Canadian food trucks often see 60-80% of annual revenue during the 5-6 month peak season.

**Rolling Forecasts:** Create 13-week rolling cash flow forecasts that update weekly with actual results and revised projections. Rolling forecasts provide early warning of potential cash flow issues.

**Scenario Planning:** Develop best-case, worst-case, and most-likely scenarios to understand potential cash flow ranges and plan accordingly. Scenario planning helps prepare for various market conditions.

**Seasonal Cash Flow Management:**
**Peak Season Planning:** Plan for peak season cash flow including increased inventory needs, additional staff costs, and equipment maintenance. Peak season generates most annual cash flow but requires careful management.

**Off-Season Survival:** Plan for reduced or eliminated cash flow during Canadian winters. Many successful operators save 40-60% of peak season cash flow to cover off-season expenses.

**Transition Period Management:** Manage cash flow during spring startup and fall shutdown periods when expenses continue but revenue is limited. Transition periods require careful cash management and planning.

**Daily Cash Flow Monitoring:**
**Daily Cash Position:** Track daily cash position including bank balances, outstanding receivables, and pending payments. Daily monitoring enables immediate response to cash flow issues.

**Weekly Cash Flow Review:** Conduct weekly reviews comparing actual cash flow to forecasts and adjusting projections based on current performance and market conditions.

**Cash Flow Triggers:** Establish cash flow triggers that prompt specific actions when cash falls below predetermined levels. Triggers enable proactive management before crisis situations develop.

**Technology and Tools:**
**Cash Flow Software:** Use cash flow management software that integrates with your accounting system and provides real-time visibility into cash position and projections.

**Mobile Monitoring:** Implement mobile cash flow monitoring that allows real-time visibility while operating your truck. Mobile access enables immediate decision-making and problem resolution.

**Automated Alerts:** Set up automated alerts for low cash balances, overdue receivables, and forecast variances. Automation ensures important issues receive immediate attention.

**Canadian Seasonal Considerations:**
Canadian food truck operations face unique cash flow challenges due to extreme seasonal variations. Successful operators plan for 4-6 months of limited or no revenue while maintaining equipment, insurance, and other fixed costs.`,
      actionItems: [
        'Create 13-week rolling cash flow forecast with weekly updates and scenario planning',
        'Implement daily cash position monitoring with bank balance and receivables tracking',
        'Develop seasonal cash flow planning with peak season savings and off-season survival strategies',
        'Establish cash flow triggers and automated alerts for proactive management',
        'Set up cash flow software with mobile access and real-time monitoring capabilities'
      ],
      tips: [
        'Plan for the worst-case scenario - Canadian weather can shut down operations unexpectedly',
        'Save aggressively during peak season - winter expenses continue even when revenue stops',
        'Monitor cash flow daily during peak season and weekly during slower periods'
      ]
    },
    {
      icon: Calendar,
      title: 'Seasonal Planning & Revenue Management',
      priority: 'Critical',
      impact: 'Optimize seasonal performance',
      content: `Canadian food truck operations require sophisticated seasonal planning due to extreme weather variations and distinct peak/off-season patterns. Strategic seasonal management maximizes revenue during peak periods while ensuring survival during challenging months.

**Canadian Seasonal Patterns:**
**Peak Season (May-September):** Most Canadian food trucks generate 70-85% of annual revenue during the 5-month peak season. Peak season requires maximum operational efficiency and cash generation for year-round sustainability.

**Shoulder Seasons (April, October):** Transition periods with variable weather and customer demand. Shoulder seasons require flexible operations and conservative cash management while building toward or winding down from peak operations.

**Off-Season (November-March):** Limited or no revenue generation for most outdoor food truck operations. Off-season survival requires careful cash management, equipment maintenance, and business development planning.

**Peak Season Revenue Optimization:**
**Capacity Maximization:** Optimize operations for maximum capacity during peak season including extended hours, additional staff, and efficient workflows. Peak season efficiency directly impacts annual profitability.

**Premium Pricing:** Implement premium pricing during peak demand periods including festivals, events, and high-traffic locations. Peak season pricing should reflect demand and limited competition.

**Event Strategy:** Prioritize high-revenue events and festivals during peak season. Event revenue often provides 30-50% of annual income and requires strategic planning and booking.

**Multiple Revenue Streams:** Develop multiple revenue streams including catering, private events, and corporate services that maximize peak season earning potential.

**Off-Season Survival Strategies:**
**Cash Reserve Building:** Save 40-60% of peak season cash flow to cover off-season expenses including insurance, loan payments, equipment maintenance, and personal living expenses.

**Alternative Revenue Sources:** Develop off-season revenue sources including catering, meal prep services, cooking classes, or consulting that utilize your skills and equipment during slow periods.

**Cost Reduction:** Reduce off-season costs through seasonal insurance adjustments, equipment storage, and expense minimization while maintaining essential business functions.

**Business Development:** Use off-season time for business development including menu planning, equipment maintenance, staff training, and marketing preparation for the next season.

**Transition Period Management:**
**Spring Startup Planning:** Plan spring startup including equipment preparation, staff hiring, permit renewals, and marketing launch. Startup requires cash investment before revenue generation begins.

**Fall Shutdown Procedures:** Implement systematic fall shutdown including equipment winterization, staff layoffs, and cost reduction while maintaining business continuity.

**Equipment Maintenance Scheduling:** Schedule major equipment maintenance during off-season periods when operations are suspended. Maintenance timing reduces peak season disruptions.

**Inventory Management:** Manage inventory transitions including peak season buildup and off-season reduction to optimize cash flow and prevent waste.

**Revenue Diversification Strategies:**
**Indoor Locations:** Develop indoor location relationships for winter operations including malls, office buildings, and event centers that provide year-round revenue opportunities.

**Catering Focus:** Shift focus to catering and private events during shoulder and off-seasons when outdoor operations are limited. Catering often provides higher margins and weather independence.

**Product Sales:** Develop retail product sales including sauces, spice blends, or packaged foods that provide revenue during operational downtime.

**Franchise or Consulting:** Consider franchise development or consulting services that leverage your expertise for additional revenue streams.

**Financial Planning and Management:**
**Seasonal Budgeting:** Create seasonal budgets that account for revenue concentration and expense distribution throughout the year. Seasonal budgeting guides cash management and spending decisions.

**Tax Planning:** Plan tax payments around seasonal cash flow patterns including quarterly installments and year-end tax obligations. Tax planning prevents cash flow surprises.

**Investment Timing:** Time major investments and equipment purchases around cash flow patterns and tax benefits. Strategic timing optimizes cash flow and financial benefits.

**Insurance and Benefits:** Adjust insurance coverage and employee benefits seasonally to optimize costs while maintaining necessary protection and compliance.

**Canadian Climate Adaptation:**
Canadian food truck operators must adapt to extreme weather variations that affect both revenue and expenses. Successful adaptation requires comprehensive planning, flexible operations, and conservative cash management.`,
      actionItems: [
        'Develop comprehensive seasonal revenue plan with peak season optimization and off-season survival strategies',
        'Create cash reserve building system saving 40-60% of peak season revenue for off-season expenses',
        'Establish alternative revenue sources for off-season including catering, products, or consulting services',
        'Implement transition period management with spring startup and fall shutdown procedures',
        'Design seasonal budgeting system with revenue concentration and expense distribution planning'
      ],
      tips: [
        'Start saving for winter from your very first day of operation - off-season expenses are inevitable',
        'Develop indoor location relationships before you need them - winter planning starts in summer',
        'Track seasonal patterns from year one to improve forecasting and planning accuracy'
      ]
    },
    {
      icon: PiggyBank,
      title: 'Emergency Fund Building & Risk Management',
      priority: 'High',
      impact: 'Business continuity protection',
      content: `Emergency funds and risk management protect your food truck business from unexpected events that could threaten survival. Systematic risk planning and emergency preparation ensure business continuity during challenging periods.

**Emergency Fund Requirements:**
**Operating Expense Coverage:** Maintain emergency funds covering 3-6 months of operating expenses including loan payments, insurance, permits, and minimum personal living expenses. Emergency funds provide survival capability during revenue disruptions.

**Equipment Replacement Reserve:** Build reserves for major equipment replacement or repair including truck engine, kitchen equipment, and generator systems. Equipment failures can shut down operations without adequate reserves.

**Seasonal Bridge Funding:** Maintain additional reserves for seasonal transitions and unexpected weather events that extend off-season periods or delay spring startup.

**Growth Opportunity Fund:** Reserve funds for unexpected growth opportunities including prime location availability, equipment upgrades, or expansion possibilities that require quick action.

**Risk Identification and Assessment:**
**Operational Risks:** Identify operational risks including equipment failure, health department issues, permit problems, and staff shortages that could disrupt operations and revenue generation.

**Financial Risks:** Assess financial risks including customer payment delays, supplier credit issues, interest rate changes, and economic downturns that affect cash flow and profitability.

**External Risks:** Evaluate external risks including weather events, regulatory changes, competition, and market conditions that could impact business performance.

**Personal Risks:** Consider personal risks including illness, injury, or family emergencies that could affect your ability to operate the business effectively.

**Insurance and Protection Strategies:**
**Comprehensive Insurance Coverage:** Maintain comprehensive insurance including general liability, commercial auto, property, business interruption, and key person coverage that protects against major losses.

**Business Interruption Insurance:** Consider business interruption insurance that covers lost revenue during forced closures due to equipment failure, health issues, or other covered events.

**Equipment Protection:** Implement equipment protection strategies including preventive maintenance, security systems, and replacement planning that minimize risk and ensure continuity.

**Legal Protection:** Maintain legal protection through proper business structure, contracts, and compliance that reduces liability and protects business assets.

**Cash Flow Risk Management:**
**Diversified Revenue Sources:** Develop diversified revenue sources including multiple locations, catering, events, and alternative services that reduce dependence on single revenue streams.

**Customer Diversification:** Avoid over-dependence on single customers or customer types by developing diverse customer base across different segments and locations.

**Supplier Risk Management:** Maintain relationships with multiple suppliers and backup sources for critical ingredients and supplies to prevent disruption from supplier issues.

**Payment Terms Optimization:** Optimize payment terms with customers and suppliers to improve cash flow timing and reduce collection risks.

**Contingency Planning:**
**Business Continuity Plans:** Develop business continuity plans for various scenarios including equipment failure, health emergencies, regulatory issues, and market disruptions.

**Alternative Operating Procedures:** Create alternative operating procedures for reduced capacity, limited locations, or modified service that maintain revenue during challenging periods.

**Emergency Communication Plans:** Establish emergency communication plans for customers, suppliers, staff, and stakeholders that maintain relationships during crisis situations.

**Recovery Procedures:** Develop recovery procedures that enable quick return to normal operations after emergency situations or business disruptions.

**Financial Monitoring and Early Warning:**
**Cash Flow Monitoring:** Implement enhanced cash flow monitoring that provides early warning of potential problems before they become critical issues.

**Performance Indicators:** Track leading indicators including customer traffic, average order value, and cost trends that predict potential cash flow problems.

**Stress Testing:** Conduct regular stress testing of your financial position under various adverse scenarios to identify vulnerabilities and improvement needs.

**Professional Support:** Maintain relationships with financial advisors, accountants, and legal professionals who can provide guidance during crisis situations.

**Canadian Risk Considerations:**
**Weather Risks:** Canadian food trucks face significant weather risks including extended winters, severe storms, and climate variability that can disrupt operations and revenue.

**Regulatory Risks:** Provincial and municipal regulatory changes can affect operations, costs, and revenue. Stay informed about potential regulatory changes and their impact.

**Economic Risks:** Regional economic conditions, tourism patterns, and seasonal employment affect customer demand and spending patterns.

**Currency Risks:** If operating near borders or serving international customers, consider currency exchange rate risks and hedging strategies.`,
      actionItems: [
        'Calculate emergency fund requirements covering 3-6 months operating expenses plus equipment reserves',
        'Conduct comprehensive risk assessment identifying operational, financial, external, and personal risks',
        'Implement insurance and protection strategies with comprehensive coverage and business interruption protection',
        'Develop cash flow risk management with diversified revenue sources and supplier relationships',
        'Create contingency planning with business continuity plans and emergency procedures'
      ],
      tips: [
        'Build emergency funds gradually but consistently - even $50/week adds up to meaningful protection',
        'Review and update your risk assessment annually as your business grows and changes',
        'Test your contingency plans periodically to ensure they work when you need them'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Payment Terms Optimization & Collections',
      priority: 'High',
      impact: 'Improve cash timing 30%',
      content: `Optimizing payment terms and collection procedures improves cash flow timing while maintaining customer relationships. Strategic payment management reduces collection issues and accelerates cash conversion.

**Payment Terms Strategy:**
**Cash vs Credit Sales:** Balance cash sales (immediate payment) with credit sales (catering, corporate accounts) to optimize cash flow while serving different customer segments. Cash sales provide immediate cash flow but credit sales often have higher margins.

**Catering Payment Terms:** Establish catering payment terms that protect cash flow including deposits, progress payments, and final payment timing. Typical terms include 25-50% deposit, balance due on delivery or within 15 days.

**Corporate Account Management:** Develop corporate account payment terms that balance competitive positioning with cash flow protection. Corporate accounts often require 30-day terms but provide steady, high-volume business.

**Early Payment Incentives:** Offer early payment discounts (2/10 net 30) that encourage faster payment while maintaining profitability. Early payment incentives can significantly improve cash flow timing.

**Collection Procedures and Systems:**
**Invoice Management:** Implement systematic invoice management including prompt invoicing, clear payment terms, and professional presentation. Professional invoicing improves payment timing and reduces disputes.

**Follow-Up Procedures:** Establish systematic follow-up procedures for overdue accounts including reminder calls, emails, and escalation procedures. Consistent follow-up improves collection rates and maintains relationships.

**Collection Timeline:** Create collection timelines that balance relationship preservation with cash flow protection. Typical timelines include friendly reminders at 15 days, formal notices at 30 days, and collection action at 60 days.

**Documentation and Records:** Maintain detailed records of all collection activities including communications, payment promises, and resolution agreements. Documentation supports collection efforts and legal protection.

**Customer Credit Management:**
**Credit Application Process:** Develop credit application processes for new corporate accounts including credit checks, references, and financial verification. Credit screening prevents collection problems before they start.

**Credit Limits:** Establish credit limits based on customer financial capacity and payment history. Credit limits protect against excessive exposure to single customers.

**Credit Monitoring:** Monitor customer credit status and payment patterns to identify potential problems early. Credit monitoring enables proactive management before accounts become problematic.

**Risk Assessment:** Assess customer credit risk regularly and adjust terms or limits based on changing financial conditions or payment patterns.

**Technology and Automation:**
**Automated Invoicing:** Use automated invoicing systems that generate and send invoices immediately upon service completion. Automation improves timing and reduces manual effort.

**Payment Processing:** Implement efficient payment processing including online payments, mobile payments, and automated clearing house (ACH) transfers that accelerate collection.

**Collection Software:** Use collection management software that tracks aging, automates reminders, and manages collection activities. Technology improves efficiency and consistency.

**Integration Systems:** Integrate payment and collection systems with accounting software for real-time visibility and automated record keeping.

**Relationship Management:**
**Communication Strategies:** Develop communication strategies that maintain positive relationships while ensuring payment. Professional, respectful communication often resolves issues without damaging relationships.

**Problem Resolution:** Create problem resolution procedures that address payment disputes, service issues, and customer concerns quickly and fairly. Quick resolution maintains relationships and accelerates payment.

**Customer Retention:** Balance collection activities with customer retention goals. Aggressive collection may recover money but damage valuable long-term relationships.

**Win-Win Solutions:** Seek win-win solutions for payment problems including payment plans, service adjustments, or alternative arrangements that satisfy both parties.

**Legal and Regulatory Considerations:**
**Collection Laws:** Understand provincial collection laws and regulations that govern collection activities. Compliance prevents legal issues and maintains professional reputation.

**Lien Rights:** Understand lien rights and security interests that may protect against non-payment in certain situations. Legal protection provides additional collection options.

**Small Claims Court:** Understand small claims court procedures for collecting unpaid accounts when other methods fail. Legal action should be last resort but may be necessary for significant amounts.

**Professional Collection Services:** Develop relationships with professional collection agencies for accounts that require specialized collection expertise or legal action.

**Performance Monitoring and Optimization:**
**Collection Metrics:** Track collection metrics including days sales outstanding, collection rates, and aging analysis to monitor performance and identify improvement opportunities.

**Payment Pattern Analysis:** Analyze customer payment patterns to identify trends, seasonal variations, and optimization opportunities for terms and procedures.

**Cost-Benefit Analysis:** Analyze the cost-benefit of different collection strategies including staff time, professional services, and relationship impact to optimize collection approaches.

**Continuous Improvement:** Regularly review and improve payment terms and collection procedures based on performance data and changing business conditions.

**Canadian Payment Considerations:**
Canadian payment practices often emphasize relationship preservation and professional courtesy. Collection approaches should reflect Canadian business culture while protecting cash flow and business interests.`,
      actionItems: [
        'Develop payment terms strategy balancing cash flow protection with customer relationship management',
        'Implement systematic collection procedures with follow-up timelines and documentation requirements',
        'Establish customer credit management with application processes and risk assessment procedures',
        'Set up technology and automation for invoicing, payment processing, and collection management',
        'Create performance monitoring system tracking collection metrics and optimization opportunities'
      ],
      tips: [
        'Get deposits for all catering jobs - it protects your cash flow and ensures serious customers',
        'Follow up on overdue accounts quickly but professionally - early action prevents bigger problems',
        'Offer multiple payment options to make it easy for customers to pay you promptly'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Working Capital Management & Optimization',
      priority: 'High',
      impact: 'Optimize cash efficiency',
      content: `Working capital management optimizes the cash tied up in day-to-day operations while ensuring adequate liquidity for smooth business operations. Efficient working capital management improves cash flow and profitability.

**Working Capital Components:**
**Current Assets:** Cash, accounts receivable, inventory, and prepaid expenses that convert to cash within one year. Current assets provide liquidity but tie up cash that could be used for growth or profit.

**Current Liabilities:** Accounts payable, accrued expenses, short-term loans, and other obligations due within one year. Current liabilities provide financing but require cash for payment.

**Net Working Capital:** Current assets minus current liabilities represents the cash invested in day-to-day operations. Optimal working capital balances liquidity needs with cash efficiency.

**Working Capital Ratio:** Current assets divided by current liabilities indicates liquidity strength. Ratios above 1.5 generally indicate adequate liquidity for food truck operations.

**Inventory Management Optimization:**
**Inventory Turnover:** Optimize inventory turnover to minimize cash tied up in ingredients and supplies while preventing stockouts. Higher turnover improves cash flow and reduces waste.

**Just-in-Time Ordering:** Implement just-in-time ordering that minimizes inventory investment while ensuring adequate supply. JIT requires reliable suppliers and accurate demand forecasting.

**Supplier Payment Terms:** Negotiate favorable supplier payment terms that provide cash flow benefits while maintaining good relationships. Extended terms improve working capital but may affect pricing.

**Inventory Financing:** Consider inventory financing options for seasonal buildup or growth that provides cash flow benefits while maintaining adequate stock levels.

**Accounts Receivable Management:**
**Credit Terms Optimization:** Optimize credit terms to balance competitive positioning with cash flow benefits. Shorter terms improve cash flow but may affect customer acquisition.

**Collection Efficiency:** Improve collection efficiency through systematic procedures, technology, and relationship management that accelerates cash conversion.

**Factoring and Financing:** Consider accounts receivable factoring or financing for large catering accounts that provides immediate cash flow while transferring collection risk.

**Customer Mix Optimization:** Optimize customer mix between cash customers and credit customers to balance cash flow with growth opportunities.

**Accounts Payable Management:**
**Payment Timing:** Optimize payment timing to suppliers to maximize cash flow benefits while maintaining good relationships and credit standing. Pay on time but not early unless discounts justify it.

**Early Payment Discounts:** Evaluate early payment discounts to determine if cash flow benefits justify the cost. Discounts of 2% for 10-day payment often provide excellent returns.

**Supplier Financing:** Use supplier financing and extended terms to improve working capital while maintaining good relationships. Supplier financing often provides better terms than bank financing.

**Cash Management:** Manage cash payments to optimize working capital while ensuring adequate supplier relationships and credit standing.

**Cash Management Strategies:**
**Cash Conversion Cycle:** Minimize the cash conversion cycle (inventory days + receivable days - payable days) to optimize working capital efficiency. Shorter cycles improve cash flow and profitability.

**Sweep Accounts:** Use sweep accounts that automatically transfer excess cash to interest-bearing accounts while maintaining adequate operating balances. Sweep accounts optimize cash returns.

**Cash Forecasting:** Implement detailed cash forecasting that predicts working capital needs and optimizes cash management decisions. Accurate forecasting prevents cash shortages and excess balances.

**Line of Credit:** Establish lines of credit that provide working capital flexibility during seasonal variations or growth periods. Credit lines provide safety nets and growth financing.

**Technology and Automation:**
**Working Capital Analytics:** Use analytics tools that monitor working capital components and identify optimization opportunities. Technology provides insights that manual analysis might miss.

**Automated Payments:** Implement automated payment systems that optimize timing while ensuring compliance with terms and maintaining relationships.

**Cash Management Systems:** Use cash management systems that optimize balances, transfers, and investments automatically. Automation improves efficiency and returns.

**Integration Platforms:** Integrate working capital management with accounting and operational systems for comprehensive visibility and control.

**Performance Monitoring and Optimization:**
**Working Capital Metrics:** Track working capital metrics including turnover ratios, conversion cycles, and efficiency measures to monitor performance and identify improvements.

**Benchmarking:** Compare working capital performance to industry benchmarks and best practices to identify optimization opportunities and validate performance.

**Scenario Analysis:** Conduct scenario analysis for different working capital strategies to understand impact and optimize decisions.

**Continuous Improvement:** Implement continuous improvement processes that regularly evaluate and optimize working capital management based on performance and changing conditions.

**Canadian Working Capital Considerations:**
**Seasonal Variations:** Canadian food truck operations face extreme seasonal working capital variations requiring sophisticated planning and management.

**Currency Considerations:** If dealing with multiple currencies, consider currency impact on working capital and hedging strategies.

**Regulatory Requirements:** Understand provincial requirements for working capital, employment obligations, and tax remittances that affect cash management.

**Banking Relationships:** Develop strong banking relationships that provide working capital financing and cash management services appropriate for seasonal businesses.`,
      actionItems: [
        'Calculate current working capital position and establish optimization targets for efficiency improvement',
        'Implement inventory management optimization with turnover improvement and supplier term negotiation',
        'Develop accounts receivable and payable management strategies optimizing cash conversion cycle',
        'Establish cash management systems with forecasting, sweep accounts, and line of credit arrangements',
        'Create performance monitoring system tracking working capital metrics and optimization opportunities'
      ],
      tips: [
        'Focus on cash conversion cycle improvement - small improvements in inventory, receivables, and payables compound significantly',
        'Negotiate payment terms with both customers and suppliers - even small improvements add up over time',
        'Monitor working capital weekly during peak season and monthly during slower periods'
      ]
    },
    {
      icon: BarChart3,
      title: 'Cash Flow Analysis & Performance Improvement',
      priority: 'Medium',
      impact: 'Continuous optimization',
      content: `Cash flow analysis and performance improvement ensure ongoing optimization and strategic decision-making. Systematic analysis identifies trends, opportunities, and potential problems while guiding improvement initiatives.

**Cash Flow Analysis Framework:**
**Historical Analysis:** Analyze historical cash flow patterns to identify trends, seasonal variations, and performance drivers. Historical analysis provides baseline understanding and improvement opportunities.

**Variance Analysis:** Compare actual cash flow to forecasts and budgets to identify variances and their causes. Variance analysis improves forecasting accuracy and operational control.

**Trend Analysis:** Identify cash flow trends including growth patterns, seasonal changes, and cyclical variations that affect planning and decision-making.

**Component Analysis:** Analyze cash flow components including operating, investing, and financing activities to understand drivers and optimization opportunities.

**Performance Metrics and KPIs:**
**Cash Flow Ratios:** Calculate cash flow ratios including operating cash flow to sales, cash flow coverage, and cash flow to debt ratios that measure performance and financial health.

**Liquidity Metrics:** Monitor liquidity metrics including current ratio, quick ratio, and cash ratio that indicate ability to meet short-term obligations.

**Efficiency Measures:** Track efficiency measures including cash conversion cycle, inventory turnover, and receivables turnover that indicate working capital management effectiveness.

**Growth Indicators:** Monitor growth indicators including cash flow growth rates, revenue growth, and investment levels that indicate business trajectory and sustainability.

**Benchmarking and Comparison:**
**Industry Benchmarks:** Compare cash flow performance to food truck industry benchmarks to understand relative performance and identify improvement opportunities.

**Peer Comparison:** Compare performance to similar food truck operations to identify best practices and competitive advantages or disadvantages.

**Historical Comparison:** Compare current performance to historical results to assess improvement trends and identify successful strategies.

**Goal Comparison:** Compare actual performance to established goals and targets to measure progress and identify adjustment needs.

**Improvement Opportunity Identification:**
**Bottleneck Analysis:** Identify cash flow bottlenecks including slow collections, excess inventory, or inefficient processes that limit performance.

**Optimization Opportunities:** Identify optimization opportunities including payment term improvements, cost reductions, or revenue enhancements that improve cash flow.

**Technology Solutions:** Evaluate technology solutions that improve cash flow management including automation, analytics, and integration opportunities.

**Process Improvements:** Identify process improvements that enhance cash flow including workflow optimization, system integration, and procedure standardization.

**Strategic Cash Flow Planning:**
**Growth Planning:** Plan cash flow requirements for growth initiatives including expansion, equipment purchases, and market development. Growth planning ensures adequate financing and timing.

**Investment Analysis:** Analyze cash flow impact of potential investments including equipment, technology, and expansion to guide capital allocation decisions.

**Financing Strategy:** Develop financing strategies that optimize cash flow including debt structure, equity financing, and alternative funding sources.

**Risk Management:** Plan cash flow risk management including contingency planning, insurance, and diversification strategies that protect against adverse events.

**Technology and Analytics:**
**Cash Flow Analytics:** Use advanced analytics tools that provide deeper insights into cash flow patterns, drivers, and optimization opportunities.

**Predictive Modeling:** Implement predictive modeling that forecasts cash flow based on leading indicators and market conditions. Predictive tools improve planning accuracy and decision-making.

**Real-Time Monitoring:** Use real-time monitoring systems that provide immediate visibility into cash position and enable quick response to issues or opportunities.

**Integration Platforms:** Integrate cash flow analysis with operational and financial systems for comprehensive business intelligence and decision support.

**Continuous Improvement Process:**
**Regular Review Cycles:** Establish regular review cycles including weekly operational reviews, monthly performance analysis, and quarterly strategic assessments.

**Action Planning:** Develop action plans based on analysis findings that include specific objectives, timelines, and responsibility assignments.

**Implementation Monitoring:** Monitor implementation progress and measure results to ensure improvement initiatives achieve intended benefits.

**Learning and Adaptation:** Learn from both successful and unsuccessful improvement initiatives to build cash flow management capability and expertise.

**Communication and Reporting:**
**Stakeholder Communication:** Communicate cash flow performance and plans to stakeholders including investors, lenders, and key employees who need visibility into business performance.

**Management Reporting:** Develop management reports that provide actionable insights and support decision-making for cash flow optimization and business development.

**Performance Dashboards:** Create performance dashboards that provide at-a-glance visibility into cash flow performance and key metrics.

**Exception Reporting:** Implement exception reporting that highlights significant variances or concerning trends requiring immediate attention.

**Canadian Cash Flow Considerations:**
**Seasonal Extremes:** Canadian food truck operations face extreme seasonal cash flow variations requiring sophisticated analysis and planning capabilities.

**Regional Variations:** Different Canadian regions have different seasonal patterns, economic conditions, and customer behaviors that affect cash flow analysis.

**Regulatory Impact:** Provincial and federal regulatory changes can significantly impact cash flow through tax changes, employment requirements, or operational restrictions.

**Economic Sensitivity:** Canadian food truck operations are often sensitive to local economic conditions, tourism patterns, and consumer spending that affect cash flow performance.`,
      actionItems: [
        'Establish comprehensive cash flow analysis framework with historical, variance, and trend analysis',
        'Implement performance metrics and KPI tracking with liquidity, efficiency, and growth indicators',
        'Create benchmarking and comparison system with industry, peer, and historical performance analysis',
        'Develop improvement opportunity identification process with bottleneck analysis and optimization planning',
        'Design continuous improvement system with regular reviews, action planning, and performance monitoring'
      ],
      tips: [
        'Analyze cash flow patterns monthly to identify trends and opportunities for improvement',
        'Focus on leading indicators that predict cash flow problems before they become critical',
        'Use cash flow analysis to make strategic decisions about growth, investment, and risk management'
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
    <section ref={sectionRef} id="cash-flow-management-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Cash Flow <span className="text-primary-500">Management</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Maintain healthy cash flow to keep your food truck business running smoothly. Learn forecasting, seasonal planning, and optimization strategies for Canadian operations.
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
                                Cash Flow Management Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've mastered cash flow management for food truck operations. You now have the tools to forecast, plan, and optimize your cash flow for sustainable success.
                              </p>
                              <Link
                                to="/financial-management/tax-planning"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Next: Tax Considerations
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

export default CashFlowManagementLesson;