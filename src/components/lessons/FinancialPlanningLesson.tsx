import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PiggyBank, TrendingUp, Shield, Target, Building, Users, CheckCircle, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FinancialPlanningLesson: React.FC = () => {
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
      icon: PiggyBank,
      title: 'Business Budgeting & Financial Goal Setting',
      priority: 'Critical',
      impact: 'Strategic foundation',
      content: `Effective business budgeting and financial goal setting provide the roadmap for your food truck's financial success. Strategic budgeting aligns resources with objectives while establishing accountability and performance measurement frameworks.

**Comprehensive Budget Development:**
**Revenue Budgeting:** Develop realistic revenue budgets based on historical data, market analysis, and growth projections. Consider seasonal variations, location performance, and service expansion when projecting income streams.

**Expense Budgeting:** Create detailed expense budgets covering all operational costs including food costs, labor, fuel, maintenance, insurance, permits, and marketing. Use historical data and vendor quotes for accuracy.

**Capital Budget Planning:** Plan capital expenditures for equipment purchases, truck improvements, and expansion investments. Capital budgeting ensures adequate funding for growth while maintaining operational cash flow.

**Contingency Planning:** Include contingency budgets for unexpected expenses, equipment failures, and market disruptions. Contingency planning protects against unforeseen circumstances that could impact operations.

**Financial Goal Framework:**
**SMART Goal Setting:** Establish Specific, Measurable, Achievable, Relevant, and Time-bound financial goals including revenue targets, profit margins, cost reduction objectives, and growth milestones.

**Short-Term Goals (1 Year):** Set annual goals for revenue growth, cost optimization, market expansion, and operational efficiency. Short-term goals provide immediate focus and motivation.

**Medium-Term Goals (2-5 Years):** Establish medium-term goals for business expansion, equipment upgrades, market development, and financial independence. Medium-term planning guides strategic decisions and resource allocation.

**Long-Term Vision (5+ Years):** Define long-term vision for business scale, market position, financial security, and potential exit strategies. Long-term vision provides direction and motivation for sustained effort.

**Performance Measurement Systems:**
**Budget Variance Analysis:** Implement systems for comparing actual performance to budgeted expectations and analyzing variances. Variance analysis identifies performance issues and improvement opportunities.

**Key Performance Indicators:** Track KPIs that measure progress toward financial goals including revenue per customer, profit margins, cost ratios, and efficiency metrics.

**Regular Review Processes:** Establish monthly and quarterly review processes that assess goal progress and adjust strategies based on performance and market conditions.

**Accountability Mechanisms:** Create accountability systems that ensure consistent focus on financial goals and budget adherence through regular monitoring and corrective action.

**Seasonal and Market Adaptation:**
**Seasonal Budget Adjustments:** Adapt budgets for Canadian seasonal patterns including peak summer operations and reduced winter activity. Seasonal planning ensures adequate resources throughout the year.

**Market Condition Response:** Build flexibility into budgets that allows adaptation to changing market conditions, competition, and economic factors affecting food truck operations.

**Growth Phase Planning:** Plan budgets for different business growth phases including startup, establishment, expansion, and maturity. Phase-appropriate budgeting supports sustainable development.

**Risk Management Integration:** Integrate risk management considerations into budgeting including insurance costs, emergency funds, and contingency planning for operational disruptions.

**Technology and Tools:**
**Budgeting Software:** Use budgeting software that integrates with accounting systems and provides scenario planning, variance analysis, and performance tracking capabilities.

**Forecasting Tools:** Implement forecasting tools that use historical data and market trends to improve budget accuracy and strategic planning.

**Dashboard Development:** Create financial dashboards that provide real-time visibility into budget performance and goal progress for ongoing management and decision-making.

**Collaboration Systems:** Use collaborative budgeting systems that involve key stakeholders in planning and monitoring while maintaining accountability and transparency.

**Canadian Financial Planning:**
Canadian food truck operations face unique financial planning challenges including extreme seasonal variations, regulatory compliance costs, and regional market differences. Develop budgets that address Canadian-specific factors while supporting business growth and sustainability.`,
      actionItems: [
        'Develop comprehensive annual budget with revenue, expense, and capital expenditure planning',
        'Establish SMART financial goals for short-term, medium-term, and long-term business development',
        'Implement performance measurement systems with KPI tracking and variance analysis',
        'Create seasonal budget adjustments addressing Canadian climate and market patterns',
        'Set up budgeting technology with software integration and dashboard development'
      ],
      tips: [
        'Start with conservative revenue estimates and realistic expense projections - it\'s better to exceed expectations than fall short',
        'Review and adjust budgets quarterly based on actual performance and changing market conditions',
        'Involve key stakeholders in budget development to build buy-in and improve accuracy'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Growth Planning & Expansion Financing',
      priority: 'High',
      impact: 'Scale business sustainably',
      content: `Strategic growth planning and expansion financing enable sustainable business scaling while managing risks and maintaining financial stability. Systematic growth approaches optimize resource allocation and maximize success probability.

**Growth Strategy Development:**
**Market Expansion Planning:** Analyze market expansion opportunities including new locations, customer segments, and service offerings. Market expansion requires careful analysis of demand, competition, and resource requirements.

**Capacity Growth Planning:** Plan capacity increases including additional trucks, equipment upgrades, and staff expansion. Capacity planning ensures growth doesn't compromise service quality or operational efficiency.

**Service Diversification:** Explore service diversification opportunities including catering, retail products, franchising, or brick-and-mortar expansion. Diversification reduces risk while creating new revenue streams.

**Strategic Partnership Development:** Identify strategic partnership opportunities that accelerate growth while sharing risks and resources. Partnerships can provide market access, operational support, or financial resources.

**Expansion Financing Strategies:**
**Internal Financing:** Use retained earnings and cash flow to fund growth initiatives. Internal financing maintains control while avoiding debt obligations and interest costs.

**Debt Financing:** Secure debt financing for expansion including equipment loans, working capital lines of credit, and expansion loans. Debt financing preserves ownership while providing growth capital.

**Equity Financing:** Consider equity financing for major expansion including angel investors, venture capital, or strategic partners. Equity financing provides capital and expertise while sharing ownership and control.

**Hybrid Financing:** Combine multiple financing sources to optimize cost, control, and risk management. Hybrid approaches often provide better terms and flexibility than single-source financing.

**Financial Modeling and Projections:**
**Growth Scenario Modeling:** Develop financial models for different growth scenarios including conservative, moderate, and aggressive expansion plans. Scenario modeling helps evaluate options and prepare for different outcomes.

**Return on Investment Analysis:** Calculate ROI for growth investments including payback periods, net present value, and internal rate of return. ROI analysis guides investment priorities and resource allocation.

**Cash Flow Impact Assessment:** Analyze cash flow impact of growth initiatives including timing of investments and revenue generation. Cash flow analysis ensures growth doesn't create liquidity problems.

**Risk Assessment and Mitigation:** Identify and assess risks associated with growth plans including market risks, operational risks, and financial risks. Risk assessment guides mitigation strategies and contingency planning.

**Operational Scaling Considerations:**
**Systems and Process Scaling:** Ensure operational systems and processes can scale effectively with business growth. Scalable systems prevent operational breakdown during expansion.

**Management and Leadership Development:** Develop management capabilities and leadership systems that support larger operations. Leadership development is often the limiting factor in successful scaling.

**Quality Control Maintenance:** Maintain quality control systems that ensure consistent service and product quality during expansion. Quality maintenance protects brand reputation and customer satisfaction.

**Cultural Preservation:** Preserve company culture and values during growth while adapting to larger organizational structures. Cultural preservation maintains employee engagement and brand authenticity.

**Timing and Market Conditions:**
**Market Timing Analysis:** Analyze market conditions and timing for optimal expansion including economic conditions, competitive landscape, and seasonal factors.

**Resource Availability:** Ensure adequate resources including capital, management attention, and operational capacity are available to support successful expansion.

**Competitive Positioning:** Consider competitive positioning and market response when planning expansion timing and strategy.

**Regulatory Environment:** Assess regulatory environment and compliance requirements for expansion markets and business models.

**Performance Monitoring and Adjustment:**
**Growth Metrics Tracking:** Track growth-specific metrics including market penetration, customer acquisition costs, revenue per location, and expansion ROI.

**Milestone Management:** Establish growth milestones and checkpoints that trigger evaluation and potential strategy adjustment.

**Course Correction Procedures:** Develop procedures for adjusting growth plans based on performance, market conditions, and resource availability.

**Success Measurement:** Define success criteria for growth initiatives and establish measurement systems that guide ongoing development and investment decisions.

**Canadian Growth Considerations:**
Canadian food truck expansion faces unique challenges including interprovincial regulations, seasonal market variations, and regional economic differences. Plan growth strategies that address Canadian market realities while leveraging opportunities for sustainable expansion.`,
      actionItems: [
        'Develop comprehensive growth strategy with market expansion and capacity planning',
        'Create expansion financing plan with internal, debt, and equity financing options',
        'Build financial models with scenario planning and ROI analysis for growth initiatives',
        'Establish operational scaling systems with quality control and cultural preservation',
        'Implement growth performance monitoring with metrics tracking and milestone management'
      ],
      tips: [
        'Grow systematically rather than opportunistically - planned growth is more sustainable than reactive expansion',
        'Ensure your first location is profitable and optimized before expanding to additional markets',
        'Build strong management systems before scaling - growth amplifies both strengths and weaknesses'
      ]
    },
    {
      icon: Shield,
      title: 'Retirement Planning & Personal Financial Security',
      priority: 'Medium',
      impact: 'Long-term security',
      content: `Retirement planning and personal financial security ensure long-term financial independence while building wealth through your food truck business. Strategic personal financial planning protects your future while optimizing current business operations.

**Retirement Savings Strategies:**
**RRSP Contributions:** Maximize RRSP contributions through salary optimization and business income management. RRSP contributions reduce current taxes while building retirement savings.

**TFSA Utilization:** Use Tax-Free Savings Accounts for flexible retirement savings and emergency funds. TFSA contributions provide tax-free growth and withdrawal flexibility.

**Business-Based Retirement Planning:** Develop retirement plans that leverage business assets including business sale proceeds, ongoing business income, or business-based pension plans.

**Diversified Investment Strategy:** Build diversified investment portfolios that reduce dependence on business success for retirement security. Diversification protects against business and market risks.

**Personal Financial Management:**
**Personal vs Business Separation:** Maintain clear separation between personal and business finances while optimizing tax efficiency and financial planning opportunities.

**Personal Emergency Fund:** Build personal emergency funds separate from business reserves to protect against personal financial emergencies and business downturns.

**Debt Management:** Manage personal debt including mortgages, credit cards, and personal loans to optimize overall financial position and reduce financial stress.

**Insurance Planning:** Implement comprehensive insurance planning including life insurance, disability insurance, and critical illness coverage that protects family and business interests.

**Tax-Efficient Compensation:**
**Salary vs Dividend Optimization:** Optimize compensation mix between salary and dividends to minimize total tax burden while maximizing retirement savings opportunities.

**Income Splitting Opportunities:** Explore legitimate income splitting opportunities with family members to reduce overall family tax burden and increase retirement savings capacity.

**Pension Plan Options:** Consider pension plan options including Individual Pension Plans (IPPs) for incorporated businesses that provide superior retirement savings opportunities.

**Tax Deferral Strategies:** Implement tax deferral strategies that optimize timing of income recognition and tax payments to support retirement planning goals.

**Wealth Building Through Business:**
**Business Value Building:** Build business value through systematic improvements, brand development, and operational excellence that create saleable assets for retirement funding.

**Passive Income Development:** Develop passive income streams through business investments, real estate, or other ventures that provide retirement income independent of active business involvement.

**Succession Planning:** Plan business succession including family transfer, management buyout, or third-party sale that optimizes retirement proceeds and tax efficiency.

**Asset Protection:** Implement asset protection strategies that preserve wealth from business risks, legal issues, and creditor claims.

**Healthcare and Long-Term Care Planning:**
**Healthcare Cost Planning:** Plan for healthcare costs including private insurance, long-term care, and medical expenses not covered by provincial healthcare systems.

**Disability Planning:** Implement disability planning that protects income and business operations in case of illness or injury affecting your ability to work.

**Long-Term Care Insurance:** Consider long-term care insurance that protects retirement savings from potential care costs and provides family financial protection.

**Health Savings Strategies:** Use health spending accounts and other tax-efficient strategies to manage healthcare costs while building retirement security.

**Estate Planning Integration:**
**Will and Estate Planning:** Develop comprehensive estate plans that protect family interests and optimize tax efficiency for wealth transfer.

**Business Succession Integration:** Integrate business succession planning with estate planning to ensure smooth transition and optimal tax treatment.

**Tax-Efficient Wealth Transfer:** Implement tax-efficient wealth transfer strategies including family trusts, gifting strategies, and succession planning that minimize tax burden.

**Legacy Planning:** Consider legacy planning that balances family financial security with charitable giving and community contribution goals.

**Professional Support and Monitoring:**
**Financial Planning Team:** Build relationships with financial planners, accountants, and legal professionals who understand small business and food service industry dynamics.

**Regular Plan Reviews:** Conduct regular reviews of retirement and financial plans to ensure they remain aligned with business performance, personal goals, and changing circumstances.

**Performance Monitoring:** Monitor retirement savings progress and investment performance to ensure goals remain achievable and strategies remain effective.

**Adjustment Procedures:** Develop procedures for adjusting retirement plans based on business performance, market conditions, and personal circumstances.

**Canadian Retirement Considerations:**
Canadian retirement planning includes unique opportunities and challenges including CPP/QPP benefits, provincial pension plans, and tax-efficient retirement savings vehicles. Understand Canadian retirement planning landscape and optimize strategies accordingly.`,
      actionItems: [
        'Develop comprehensive retirement savings strategy with RRSP, TFSA, and business-based planning',
        'Establish personal financial management with emergency funds, debt management, and insurance planning',
        'Optimize tax-efficient compensation with salary/dividend mix and income splitting opportunities',
        'Create wealth building strategy through business value development and passive income streams',
        'Implement estate planning integration with succession planning and tax-efficient wealth transfer'
      ],
      tips: [
        'Start retirement planning early - compound growth and tax deferral benefits increase dramatically over time',
        'Don\'t put all retirement savings into your business - diversification protects against business risks',
        'Work with professionals who understand both small business and personal financial planning'
      ]
    },
    {
      icon: Target,
      title: 'Insurance Planning & Risk Management',
      priority: 'Critical',
      impact: 'Protect business & personal assets',
      content: `Comprehensive insurance planning and risk management protect both business operations and personal financial security. Strategic risk management prevents catastrophic losses while optimizing insurance costs and coverage effectiveness.

**Business Insurance Portfolio:**
**General Liability Insurance:** Maintain adequate general liability coverage protecting against customer injuries, property damage, and business operations risks. Minimum $2 million coverage recommended for food truck operations.

**Commercial Property Insurance:** Protect business assets including truck, equipment, inventory, and supplies against theft, vandalism, fire, and weather damage. Ensure coverage includes business interruption protection.

**Commercial Auto Insurance:** Secure comprehensive commercial auto insurance covering vehicle operation, equipment transport, and liability during driving and stationary operations.

**Product Liability Insurance:** Obtain specific product liability coverage for food-related claims including foodborne illness, allergic reactions, and contamination issues. Food service operations face unique liability risks requiring specialized coverage.

**Personal Insurance Integration:**
**Life Insurance Planning:** Implement life insurance planning that protects family financial security and business continuity. Consider term life, permanent life, and business-specific life insurance needs.

**Disability Insurance:** Secure disability insurance that protects income and business operations if illness or injury prevents work. Disability insurance is often overlooked but critically important for business owners.

**Health and Dental Coverage:** Maintain health and dental coverage for yourself and family through private insurance, association plans, or spouse's employer coverage.

**Critical Illness Insurance:** Consider critical illness insurance that provides lump-sum payments for major health events, protecting both personal finances and business operations.

**Risk Assessment and Management:**
**Business Risk Identification:** Conduct comprehensive risk assessments identifying operational risks, financial risks, market risks, and regulatory risks affecting food truck operations.

**Risk Mitigation Strategies:** Develop risk mitigation strategies including operational procedures, financial reserves, diversification, and insurance coverage that reduce risk exposure and impact.

**Emergency Response Planning:** Create emergency response plans for various scenarios including equipment failure, health emergencies, natural disasters, and economic downturns.

**Business Continuity Planning:** Develop business continuity plans that enable operations to continue or resume quickly after disruptions. Continuity planning protects revenue and customer relationships.

**Insurance Cost Optimization:**
**Coverage Analysis:** Regularly analyze insurance coverage to ensure adequate protection without over-insurance. Coverage analysis optimizes costs while maintaining necessary protection.

**Deductible Strategy:** Optimize insurance deductibles to balance premium costs with out-of-pocket risk exposure. Higher deductibles reduce premiums but increase financial exposure.

**Risk Management Credits:** Implement risk management practices that qualify for insurance premium discounts including safety programs, training, and loss prevention measures.

**Insurance Shopping:** Regularly shop insurance coverage to ensure competitive pricing and optimal coverage. Insurance markets change and shopping ensures best value.

**Specialized Food Service Risks:**
**Food Safety Liability:** Address food safety liability risks through comprehensive food safety programs, proper training, and adequate insurance coverage. Food safety failures can be catastrophic for food service businesses.

**Equipment Breakdown Coverage:** Consider equipment breakdown coverage that protects against mechanical failures and provides business interruption coverage for equipment-related shutdowns.

**Cyber Liability Protection:** Implement cyber liability protection for POS systems, customer data, and digital operations. Cyber risks are increasing for all businesses including food trucks.

**Employment Practices Liability:** Consider employment practices liability coverage if hiring employees. Employment-related claims can be costly and damaging to business reputation.

**Professional Risk Management:**
**Insurance Broker Relationships:** Build relationships with insurance brokers who understand food service industry risks and can provide expert guidance and competitive coverage.

**Legal Support:** Maintain relationships with legal professionals who can provide guidance on risk management, contract review, and liability protection strategies.

**Professional Development:** Invest in professional development including food safety training, business management education, and industry best practices that reduce risks and improve operations.

**Industry Association Participation:** Participate in food truck and food service industry associations that provide risk management resources, group insurance opportunities, and best practice sharing.

**Claims Management and Prevention:**
**Claims Prevention:** Implement claims prevention strategies including safety training, equipment maintenance, and operational procedures that reduce claim frequency and severity.

**Claims Response Procedures:** Develop claims response procedures that ensure prompt reporting, proper documentation, and effective management of insurance claims.

**Loss Control Programs:** Implement loss control programs that identify and address potential risks before they result in claims or losses.

**Performance Monitoring:** Monitor insurance and risk management performance including claim frequency, costs, and prevention effectiveness to optimize programs and reduce risks.

**Canadian Insurance Considerations:**
Canadian insurance markets and regulations vary by province and include unique considerations for food service operations. Understand provincial insurance requirements and market conditions to optimize coverage and costs while ensuring adequate protection.`,
      actionItems: [
        'Establish comprehensive business insurance portfolio with liability, property, auto, and product coverage',
        'Implement personal insurance planning with life, disability, health, and critical illness coverage',
        'Conduct risk assessment and management with mitigation strategies and emergency planning',
        'Optimize insurance costs through coverage analysis, deductible strategy, and competitive shopping',
        'Create specialized risk management for food safety, equipment, cyber, and employment risks'
      ],
      tips: [
        'Never operate without adequate insurance - the cost of coverage is minimal compared to potential losses',
        'Review insurance coverage annually and after major business changes to ensure adequate protection',
        'Work with brokers who specialize in food service businesses - they understand your unique risks'
      ]
    },
    {
      icon: Building,
      title: 'Business Valuation & Exit Strategy Development',
      priority: 'Medium',
      impact: 'Maximize business value',
      content: `Business valuation and exit strategy development maximize the value of your food truck investment while providing options for your future. Strategic exit planning builds value systematically while preparing for various transition scenarios.

**Business Valuation Fundamentals:**
**Valuation Methods:** Understand different valuation approaches including asset-based valuation, income-based valuation, and market-based comparisons. Each method provides different perspectives on business value.

**Value Drivers:** Identify key value drivers including profitability, growth trends, market position, operational systems, and transferability. Focus improvement efforts on factors that most impact business value.

**Financial Performance Impact:** Understand how financial performance including revenue growth, profit margins, and cash flow stability affect business valuation and buyer interest.

**Operational Systems Value:** Develop operational systems, documented procedures, and management structures that increase business transferability and value to potential buyers.

**Exit Strategy Options:**
**Business Sale to Third Party:** Plan for potential sale to other food truck operators, restaurant companies, or investors. Third-party sales often provide highest valuations but require extensive preparation.

**Management Buyout:** Consider sale to existing managers or employees who understand the business and can maintain operations. Management buyouts often provide smoother transitions and legacy preservation.

**Family Succession:** Plan for family succession including gradual transition, training, and ownership transfer. Family succession preserves legacy while providing retirement income.

**Franchise Development:** Convert operations to franchise model that provides ongoing royalty income while reducing operational involvement. Franchising can provide exit income while maintaining business connection.

**Value Enhancement Strategies:**
**Systematic Documentation:** Document all operational procedures, recipes, supplier relationships, and business processes that enable smooth ownership transition and reduce buyer risk.

**Financial System Development:** Develop comprehensive financial systems including accounting procedures, performance tracking, and reporting that demonstrate business performance and management capability.

**Brand Development:** Build strong brand recognition, customer loyalty, and market position that create intangible value and competitive advantages for potential buyers.

**Growth Demonstration:** Demonstrate consistent growth in revenue, profitability, and market position that indicates future potential and justifies premium valuations.

**Exit Timing and Preparation:**
**Market Timing:** Plan exit timing around business performance peaks, favorable market conditions, and personal readiness for transition. Optimal timing maximizes valuation and transition success.

**Preparation Timeline:** Allow 2-3 years for exit preparation including value enhancement, documentation development, and market preparation. Adequate preparation time optimizes outcomes and reduces stress.

**Professional Support:** Engage professional support including business brokers, accountants, lawyers, and financial advisors who specialize in food service business transactions.

**Due Diligence Preparation:** Prepare comprehensive due diligence materials including financial statements, operational documentation, legal compliance records, and market analysis.

**Tax Planning and Structure:**
**Tax-Efficient Exit Structure:** Plan exit structure to minimize tax burden including capital gains treatment, installment sales, and retirement planning integration.

**Professional Tax Planning:** Work with tax professionals to optimize exit tax treatment and coordinate with retirement planning and estate planning objectives.

**Timing Optimization:** Optimize timing of exit and income recognition to minimize tax burden and maximize after-tax proceeds.

**Estate Planning Integration:** Integrate exit planning with estate planning to ensure optimal wealth transfer and family financial security.

**Transition and Legacy Planning:**
**Employee Transition:** Plan employee transition including retention strategies, training programs, and communication that maintains team stability during ownership change.

**Customer Relationship Transfer:** Develop strategies for transferring customer relationships and maintaining service quality during ownership transition.

**Supplier Relationship Management:** Ensure smooth transfer of supplier relationships and contracts that maintain operational continuity for new owners.

**Community Impact Consideration:** Consider community impact of ownership transition and plan approaches that maintain positive community relationships and business reputation.

**Alternative Exit Scenarios:**
**Partial Sale Options:** Consider partial sale options that provide liquidity while maintaining involvement and ongoing income from business operations.

**Strategic Partnerships:** Explore strategic partnership options that provide capital and growth support while maintaining operational control and ownership.

**Licensing and Royalty Models:** Develop licensing or royalty models that provide ongoing income while reducing operational involvement and responsibility.

**Gradual Transition Planning:** Plan gradual transition approaches that provide flexibility and reduce risk while optimizing value and personal satisfaction.

**Canadian Exit Considerations:**
Canadian business sales involve unique tax considerations, legal requirements, and market conditions. Understand Canadian-specific factors including capital gains exemptions, provincial regulations, and market dynamics that affect exit planning and execution.`,
      actionItems: [
        'Establish business valuation framework with value drivers and enhancement strategies',
        'Develop comprehensive exit strategy options with timing and preparation planning',
        'Implement value enhancement programs with documentation, systems, and brand development',
        'Create tax-efficient exit planning with professional support and structure optimization',
        'Design transition and legacy planning with employee, customer, and community considerations'
      ],
      tips: [
        'Start exit planning early even if you don\'t plan to sell soon - building a saleable business makes it more valuable to operate',
        'Focus on building systems and reducing owner dependence - transferable businesses command higher valuations',
        'Maintain detailed financial records and legal compliance - clean records significantly impact buyer interest and valuation'
      ]
    },
    {
      icon: Users,
      title: 'Professional Financial Team & Advisory Support',
      priority: 'High',
      impact: 'Expert guidance & optimization',
      content: `Building a professional financial team and advisory support system provides expert guidance, ensures compliance, and optimizes financial performance. Strategic professional relationships accelerate business success while reducing risks and improving decision-making.

**Core Professional Team Assembly:**
**Certified Public Accountant (CPA):** Engage a CPA who understands food service businesses and can provide tax planning, financial statement preparation, and strategic financial advice. CPA relationships are essential for compliance and optimization.

**Business Lawyer:** Maintain relationships with business lawyers who can provide contract review, regulatory compliance guidance, and legal protection strategies. Legal support prevents costly mistakes and protects business interests.

**Financial Planner:** Work with financial planners who understand small business ownership and can integrate business and personal financial planning for optimal outcomes.

**Insurance Broker:** Partner with insurance brokers who specialize in food service businesses and can provide comprehensive coverage analysis and risk management guidance.

**Specialized Advisory Services:**
**Food Service Industry Consultants:** Engage consultants who specialize in food truck operations and can provide operational improvement, market analysis, and strategic planning guidance.

**Marketing and Brand Specialists:** Work with marketing professionals who understand food service branding and can provide strategic marketing guidance and implementation support.

**Technology Advisors:** Partner with technology advisors who can recommend and implement systems for POS, accounting, inventory management, and operational efficiency.

**Business Coaches and Mentors:** Engage business coaches or mentors who have food service experience and can provide guidance, accountability, and strategic perspective.

**Professional Relationship Management:**
**Service Provider Selection:** Select professional service providers based on industry experience, reputation, communication style, and fee structure. Quality professionals provide value that exceeds their costs.

**Communication and Coordination:** Establish communication protocols and coordination procedures that ensure professional team members work together effectively and avoid duplication or conflicts.

**Performance Evaluation:** Regularly evaluate professional service provider performance and adjust relationships based on value provided, responsiveness, and business needs.

**Cost Management:** Manage professional service costs through clear scope definition, competitive bidding, and value-based evaluation while maintaining quality relationships.

**Advisory Board Development:**
**Industry Expertise:** Recruit advisory board members with food service industry experience who can provide strategic guidance and market insights.

**Functional Expertise:** Include advisory board members with expertise in finance, marketing, operations, and other functional areas critical to business success.

**Network Access:** Select advisors who can provide access to networks, resources, and opportunities that accelerate business development and growth.

**Compensation and Structure:** Develop appropriate compensation and structure for advisory relationships including equity participation, consulting fees, or other arrangements.

**Professional Development and Education:**
**Continuing Education:** Invest in continuing education including industry conferences, workshops, and training programs that improve business knowledge and professional networks.

**Industry Association Participation:** Participate in food truck and food service industry associations that provide education, networking, and advocacy support.

**Peer Learning Groups:** Join peer learning groups or mastermind organizations that provide ongoing education and support from other business owners.

**Professional Certification:** Consider professional certifications in food safety, business management, or other areas that improve credibility and operational capability.

**Technology and Professional Support Integration:**
**Professional Software Integration:** Use professional-grade software for accounting, financial planning, and business management that integrates with professional service provider systems.

**Cloud-Based Collaboration:** Implement cloud-based systems that enable effective collaboration with professional team members and provide secure document sharing and communication.

**Data Sharing and Analysis:** Establish data sharing protocols that provide professional team members with information needed for effective advice and service delivery.

**Communication Technology:** Use communication technology including video conferencing, project management systems, and collaborative platforms that improve professional relationship effectiveness.

**Compliance and Risk Management:**
**Regulatory Compliance Support:** Ensure professional team provides comprehensive regulatory compliance support including tax compliance, employment law, health regulations, and business licensing.

**Risk Management Integration:** Integrate risk management across professional relationships including insurance coordination, legal protection, and financial risk assessment.

**Crisis Management Support:** Develop crisis management support systems that provide immediate access to professional guidance during emergencies or significant business challenges.

**Succession Planning Support:** Ensure professional team can support succession planning, exit strategy development, and business transition when needed.

**Cost-Benefit Analysis and ROI:**
**Professional Service ROI:** Calculate return on investment for professional services including tax savings, risk reduction, efficiency improvements, and strategic value creation.

**Value-Based Relationships:** Develop value-based relationships with professionals that align their success with your business success through performance incentives and long-term partnerships.

**Service Optimization:** Optimize professional service utilization through clear scope definition, efficient communication, and strategic timing of service delivery.

**Competitive Advantage:** Use professional relationships to create competitive advantages through superior compliance, strategic planning, and operational excellence.

**Canadian Professional Landscape:**
Canadian professional service markets include unique regulatory requirements, professional standards, and industry dynamics. Build professional relationships that understand Canadian business environment and can provide effective guidance within Canadian legal and regulatory frameworks.`,
      actionItems: [
        'Assemble core professional team with CPA, business lawyer, financial planner, and insurance broker',
        'Engage specialized advisory services with industry consultants, marketing specialists, and technology advisors',
        'Establish professional relationship management with selection criteria, communication protocols, and performance evaluation',
        'Develop advisory board with industry expertise, functional knowledge, and network access',
        'Create professional development plan with continuing education, association participation, and peer learning'
      ],
      tips: [
        'Invest in quality professional relationships early - good advisors pay for themselves through better decisions and avoided mistakes',
        'Choose professionals who understand your industry and business model rather than just general practitioners',
        'Maintain regular communication with your professional team rather than only contacting them when problems arise'
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
    <section ref={sectionRef} id="financial-planning-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Financial <span className="text-primary-500">Planning</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Plan for long-term financial success and business sustainability. Learn strategic planning, retirement preparation, and wealth building through your food truck business.
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
                                Financial Planning Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've completed the comprehensive Financial Management section. You now have the tools for budgeting, growth planning, retirement preparation, and long-term financial success.
                              </p>
                              <Link
                                to="/financial-management"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Return to Financial Management Overview
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

export default FinancialPlanningLesson;