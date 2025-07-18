import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CreditCard, Building, Users, TrendingUp, Shield, Target, CheckCircle, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FundingFinancingLesson: React.FC = () => {
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
      icon: Building,
      title: 'Small Business Loans & Traditional Financing',
      priority: 'Critical',
      impact: 'Access $50K-200K funding',
      content: `Traditional small business loans remain the most common funding source for food truck operations, offering structured financing with predictable terms and established application processes. Understanding loan options and requirements enables strategic funding decisions.

**Canadian Small Business Loan Programs:**
**Canada Small Business Financing Program (CSBFP):** Government-backed loans up to $1 million for equipment and leasehold improvements. CSBFP loans offer favorable terms with government guarantees that reduce lender risk and improve approval rates.

**Business Development Bank of Canada (BDC):** Specialized small business lender offering flexible terms, patient capital, and advisory services. BDC understands food service businesses and provides tailored financing solutions.

**Provincial Loan Programs:** Many provinces offer small business loan programs with favorable terms for local entrepreneurs. Provincial programs often have lower interest rates and more flexible qualification requirements.

**Community Futures Development Corporations:** Non-profit organizations providing loans and business support in rural and remote communities. Community Futures offers patient capital and mentorship for local business development.

**Traditional Bank Financing:**
**Term Loans:** Fixed-amount loans with regular payments over specified periods. Term loans work well for equipment purchases and working capital needs with predictable repayment schedules.

**Lines of Credit:** Flexible credit facilities allowing borrowing up to approved limits as needed. Lines of credit provide working capital flexibility for seasonal businesses and cash flow management.

**Equipment Financing:** Specialized loans secured by equipment purchases. Equipment financing often offers favorable terms because the equipment serves as collateral for the loan.

**Commercial Mortgages:** Real estate financing for commissary kitchens or permanent locations. Commercial mortgages provide long-term financing for property purchases or major improvements.

**Loan Application Process and Requirements:**
**Business Plan Preparation:** Comprehensive business plans demonstrating market opportunity, competitive advantage, and financial projections. Strong business plans significantly improve approval rates and loan terms.

**Financial Documentation:** Complete financial statements, tax returns, cash flow projections, and personal financial information. Accurate financial documentation demonstrates creditworthiness and repayment ability.

**Collateral and Security:** Most loans require collateral including equipment, inventory, or personal guarantees. Understanding collateral requirements helps structure applications and negotiate terms.

**Credit History and Scoring:** Personal and business credit history significantly affects approval and terms. Improving credit scores before applying can result in better rates and terms.

**Loan Terms and Structure Optimization:**
**Interest Rate Negotiation:** Understand factors affecting interest rates including credit scores, collateral, and loan terms. Rate negotiation can save thousands over loan terms.

**Repayment Schedule Planning:** Structure repayment schedules that align with cash flow patterns including seasonal variations. Flexible repayment terms improve cash flow management and reduce default risk.

**Prepayment Options:** Negotiate prepayment options that allow early repayment without penalties. Prepayment flexibility enables debt reduction when cash flow allows.

**Covenant Management:** Understand loan covenants and maintain compliance to avoid default and preserve borrowing relationships. Covenant compliance protects credit and future borrowing capacity.

**Alternative Lending Options:**
**Online Lenders:** Digital lending platforms offering faster approval and funding with potentially higher rates. Online lenders often serve businesses that don't qualify for traditional bank financing.

**Peer-to-Peer Lending:** Individual investors providing business loans through online platforms. P2P lending offers alternative funding sources with competitive rates for qualified borrowers.

**Merchant Cash Advances:** Advances against future credit card sales with daily repayment. MCA provides quick funding but often at high effective interest rates requiring careful evaluation.

**Invoice Factoring:** Selling accounts receivable for immediate cash. Factoring provides working capital for businesses with significant receivables from catering and corporate clients.

**Canadian Lending Considerations:**
**Regulatory Environment:** Canadian lending regulations provide consumer protection while affecting loan terms and availability. Understanding regulations helps navigate the lending process effectively.

**Regional Variations:** Lending availability and terms vary between provinces and regions. Regional economic conditions and lender presence affect funding options and competition.

**Currency and Interest Rate Environment:** Canadian interest rates and currency fluctuations affect borrowing costs and repayment planning. Economic awareness guides timing and structure decisions.

**Government Support Programs:** Various government programs provide loan guarantees, interest subsidies, and support services that improve access to traditional financing.`,
      actionItems: [
        'Research Canadian small business loan programs including CSBFP, BDC, and provincial options',
        'Prepare comprehensive business plan with financial projections and market analysis',
        'Gather complete financial documentation including statements, tax returns, and credit reports',
        'Evaluate collateral options and personal guarantee requirements for different loan types',
        'Compare loan terms, rates, and structures from multiple lenders to optimize financing'
      ],
      tips: [
        'Apply to multiple lenders simultaneously to compare terms and improve negotiating position',
        'Build banking relationships before you need funding - established relationships improve approval rates',
        'Consider seasonal cash flow patterns when structuring loan repayment schedules'
      ]
    },
    {
      icon: CreditCard,
      title: 'Equipment Financing & Leasing Options',
      priority: 'High',
      impact: 'Preserve cash flow',
      content: `Equipment financing and leasing provide alternatives to cash purchases that preserve working capital while enabling access to necessary equipment. Strategic equipment financing optimizes cash flow and tax benefits while building business credit.

**Equipment Financing Fundamentals:**
**Secured Equipment Loans:** Loans secured by the equipment being purchased, typically offering lower interest rates than unsecured financing. Equipment serves as collateral, reducing lender risk and improving terms for borrowers.

**Equipment Leasing:** Rental agreements allowing equipment use without ownership, often with purchase options at lease end. Leasing preserves cash flow and provides flexibility for technology upgrades and business changes.

**Lease-to-Own Programs:** Hybrid arrangements combining leasing benefits with eventual ownership. Lease-to-own provides lower initial costs with ownership benefits and equity building over time.

**Vendor Financing:** Financing provided directly by equipment manufacturers or dealers. Vendor financing often offers promotional rates and terms designed to facilitate equipment sales.

**Equipment Financing vs Purchase Analysis:**
**Cash Flow Impact:** Compare cash flow effects of financing vs cash purchase including monthly payments, interest costs, and opportunity costs of cash deployment. Cash flow analysis guides optimal financing decisions.

**Tax Implications:** Understand tax differences between equipment purchases (depreciation) and leases (expense deduction). Tax implications significantly affect total cost of ownership and cash flow.

**Total Cost of Ownership:** Calculate total costs including purchase price, financing costs, maintenance, insurance, and disposal costs. Total cost analysis provides complete financial picture for decision-making.

**Flexibility and Upgrade Options:** Evaluate flexibility for equipment upgrades, modifications, and disposal. Flexibility considerations become important as business needs evolve and technology advances.

**Types of Equipment Financing:**
**Food Truck Financing:** Specialized financing for food truck purchases including new and used vehicles. Truck financing often offers longer terms and lower rates due to asset value and marketability.

**Kitchen Equipment Loans:** Financing for cooking equipment, refrigeration, and food service equipment. Equipment loans typically offer terms matching equipment useful life and depreciation schedules.

**Technology Financing:** Financing for POS systems, payment processing equipment, and technology infrastructure. Technology financing often includes upgrade options and service packages.

**Generator and Power Equipment:** Specialized financing for generators, electrical systems, and power infrastructure. Power equipment financing recognizes the critical nature of these systems for food truck operations.

**Leasing Structures and Options:**
**Operating Leases:** True leases where lessor retains ownership and lessee has use rights. Operating leases provide expense deductions and off-balance-sheet financing benefits.

**Capital Leases:** Lease arrangements that transfer ownership benefits to lessee. Capital leases provide ownership benefits while preserving cash flow and providing financing flexibility.

**Fair Market Value Leases:** Leases with purchase options at fair market value at lease end. FMV leases provide flexibility while protecting against equipment obsolescence.

**$1 Purchase Option Leases:** Leases with nominal purchase options effectively providing financing with ownership transfer. Dollar buyout leases combine financing benefits with certain ownership transfer.

**Financing Terms and Negotiation:**
**Interest Rate Factors:** Understand factors affecting equipment financing rates including credit scores, equipment type, loan-to-value ratios, and market conditions. Rate factors guide negotiation and timing strategies.

**Down Payment Requirements:** Evaluate down payment requirements and negotiate optimal structures. Down payments affect monthly payments, interest rates, and total financing costs.

**Term Length Optimization:** Match financing terms to equipment useful life and business cash flow patterns. Optimal terms balance monthly payments with total interest costs and business flexibility.

**Warranty and Service Integration:** Negotiate warranty and service packages integrated with financing arrangements. Integrated packages provide convenience and potentially better terms.

**Canadian Equipment Financing:**
**Canadian Equipment Finance Association (CEFA):** Industry association providing resources and member directory for equipment financing. CEFA members offer specialized knowledge and competitive programs.

**Provincial Programs:** Some provinces offer equipment financing assistance or guarantees for small businesses. Provincial programs may provide favorable terms or support for specific industries.

**Tax Considerations:** Canadian tax treatment of equipment financing including capital cost allowance, lease deductions, and HST implications. Tax considerations significantly affect financing decisions and structures.

**Cross-Border Equipment:** Considerations for purchasing equipment from US suppliers including currency, duties, and financing implications. Cross-border transactions require additional planning and documentation.

**Technology and Digital Financing:**
**Online Application Processes:** Many equipment financiers offer online applications with rapid approval and funding. Digital processes provide convenience and speed for time-sensitive equipment needs.

**Equipment Marketplace Integration:** Some equipment marketplaces integrate financing options with equipment selection. Integrated platforms simplify comparison shopping and financing arrangement.

**Mobile Approval and Documentation:** Mobile-friendly processes allowing application and approval from anywhere. Mobile capabilities support food truck operators' mobile business model.

**Digital Documentation and Management:** Electronic documentation and account management reducing paperwork and improving efficiency. Digital management provides convenience and better record keeping.`,
      actionItems: [
        'Research equipment financing options including secured loans, leasing, and vendor financing programs',
        'Analyze cash flow impact of financing vs purchase for major equipment needs',
        'Compare financing terms, rates, and structures from multiple equipment finance companies',
        'Evaluate tax implications of different financing structures with accounting professional',
        'Negotiate optimal financing terms including rates, down payments, and warranty integration'
      ],
      tips: [
        'Consider equipment financing even if you have cash - preserve working capital for operations and growth',
        'Read all financing agreements carefully and understand early termination and upgrade options',
        'Build relationships with equipment finance companies for future needs and better terms'
      ]
    },
    {
      icon: Users,
      title: 'Crowdfunding Strategies & Community Support',
      priority: 'Medium',
      impact: 'Raise $10K-50K community funding',
      content: `Crowdfunding provides alternative funding sources while building community support and customer base before launch. Strategic crowdfunding campaigns generate capital while creating marketing buzz and validating market demand.

**Crowdfunding Platform Selection:**
**Kickstarter:** Rewards-based crowdfunding platform requiring successful funding to receive any money. Kickstarter provides high visibility and credibility but requires achieving funding goals to access funds.

**Indiegogo:** Flexible funding platform allowing partial funding collection even if goals aren't met. Indiegogo provides more flexibility but may have less visibility than Kickstarter for some projects.

**GoFundMe:** Personal fundraising platform often used for community-supported business launches. GoFundMe works well for local community campaigns with personal stories and community connections.

**Local Crowdfunding Platforms:** Regional platforms serving specific Canadian markets or communities. Local platforms may provide better community connection and lower competition for attention.

**Campaign Strategy and Planning:**
**Compelling Story Development:** Create compelling narratives that connect emotionally with potential supporters. Stories should emphasize community benefit, personal journey, and unique value proposition.

**Funding Goal Setting:** Set realistic funding goals based on actual needs and market research. Goals should be achievable while providing adequate funding for business launch and initial operations.

**Reward Structure Design:** Develop attractive reward structures that provide value to supporters while maintaining profitability. Rewards should align with food truck offerings and create excitement for launch.

**Timeline and Milestone Planning:** Plan campaign timelines with pre-launch preparation, active campaign management, and post-campaign fulfillment. Proper timing maximizes exposure and supporter engagement.

**Community Engagement and Marketing:**
**Pre-Launch Community Building:** Build community interest and email lists before campaign launch. Pre-launch engagement significantly improves campaign success rates and initial momentum.

**Social Media Strategy:** Develop comprehensive social media strategies that build awareness, engage supporters, and drive campaign traffic. Social media provides primary marketing channel for crowdfunding success.

**Local Media Outreach:** Engage local media including newspapers, radio, and television for campaign coverage. Local media provides credibility and reaches potential supporters who may not use social media.

**Influencer and Partnership Engagement:** Partner with local influencers, food bloggers, and community organizations for campaign support. Partnerships expand reach and provide credibility for campaign messaging.

**Campaign Content and Presentation:**
**Video Production:** Create compelling campaign videos that tell your story, demonstrate food quality, and explain funding needs. Video content significantly improves campaign performance and supporter engagement.

**Photography and Visual Content:** Develop high-quality photography showcasing food, team, and community connections. Visual content creates emotional connections and demonstrates professionalism.

**Written Content Strategy:** Write compelling campaign descriptions that explain the business concept, community benefit, and funding needs clearly. Written content should be engaging while providing complete information.

**Update and Communication Strategy:** Plan regular campaign updates that maintain supporter engagement and demonstrate progress. Communication strategy builds trust and encourages additional support.

**Reward Fulfillment and Operations:**
**Reward Design and Costing:** Design rewards that provide supporter value while maintaining reasonable costs and complexity. Reward fulfillment should be manageable within business operations.

**Fulfillment Planning:** Plan reward fulfillment logistics including production, packaging, and delivery. Fulfillment planning ensures supporter satisfaction and business reputation protection.

**Customer Relationship Management:** Use crowdfunding supporters as initial customer base and brand ambassadors. CRM systems help maintain relationships and convert supporters to long-term customers.

**Post-Campaign Engagement:** Maintain engagement with supporters after campaign completion through updates, special offers, and community events. Ongoing engagement builds lasting customer relationships.

**Legal and Financial Considerations:**
**Tax Implications:** Understand tax implications of crowdfunding proceeds including income recognition and reward fulfillment costs. Tax planning ensures compliance and optimal financial management.

**Legal Structure and Compliance:** Ensure crowdfunding activities comply with securities regulations and business structure requirements. Legal compliance protects against regulatory issues and liability.

**Financial Management:** Manage crowdfunding proceeds carefully including expense tracking, reward fulfillment costs, and business launch funding. Financial management ensures funds achieve intended purposes.

**Intellectual Property Protection:** Protect intellectual property including recipes, branding, and business concepts during public crowdfunding campaigns. IP protection prevents copying and maintains competitive advantages.

**Canadian Crowdfunding Landscape:**
**Regulatory Environment:** Canadian securities regulations affect equity crowdfunding while rewards-based crowdfunding has fewer restrictions. Understanding regulations ensures compliance and platform selection.

**Cultural Considerations:** Canadian crowdfunding supporters often value community benefit, local sourcing, and authentic stories. Campaign messaging should align with Canadian cultural values and expectations.

**Regional Support Patterns:** Different Canadian regions have varying levels of crowdfunding participation and support. Regional awareness guides platform selection and marketing strategies.

**Currency and Payment Processing:** Consider currency implications for international supporters and payment processing fees. Currency considerations affect funding goals and supporter accessibility.

**Success Factors and Best Practices:**
**Market Validation:** Use crowdfunding as market validation tool to test demand before full business launch. Validation reduces risk and provides confidence for business development.

**Community Building:** Focus on building genuine community connections rather than just raising money. Community building creates lasting value beyond initial funding needs.

**Transparency and Communication:** Maintain transparent communication about challenges, progress, and fund usage. Transparency builds trust and supporter loyalty for long-term relationships.

**Professional Presentation:** Present campaigns professionally with quality content, clear messaging, and organized information. Professional presentation builds credibility and supporter confidence.`,
      actionItems: [
        'Research crowdfunding platforms and select optimal option based on funding needs and community',
        'Develop compelling campaign story with community benefit and unique value proposition',
        'Create reward structure with attractive offerings that maintain profitability and feasibility',
        'Plan comprehensive marketing strategy with social media, local media, and community engagement',
        'Design fulfillment and customer relationship management systems for post-campaign success'
      ],
      tips: [
        'Start building your community and email list months before launching your crowdfunding campaign',
        'Invest in quality video and photography - visual content dramatically improves campaign success rates',
        'Plan for campaign management to be a full-time job during active campaign periods'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Investor Presentations & Equity Financing',
      priority: 'Medium',
      impact: 'Access $25K-100K+ growth capital',
      content: `Equity financing provides growth capital for expansion while bringing strategic partners and expertise to your food truck business. Professional investor presentations and strategic equity structures enable access to significant funding for scaling operations.

**Types of Equity Investors:**
**Angel Investors:** Individual investors providing early-stage funding in exchange for equity ownership. Angel investors often bring industry experience, mentorship, and networks in addition to capital.

**Venture Capital:** Professional investment firms providing larger funding amounts for high-growth businesses. VC funding typically requires significant growth potential and scalable business models.

**Strategic Investors:** Industry participants including restaurant groups, food companies, or equipment manufacturers investing for strategic benefits. Strategic investors provide industry expertise and potential partnership opportunities.

**Family and Friends:** Personal network investors providing initial funding with flexible terms. Family and friends funding often provides patient capital with relationship-based rather than purely financial motivations.

**Investor Presentation Development:**
**Executive Summary:** Compelling one-page summary highlighting business opportunity, competitive advantage, financial projections, and funding requirements. Executive summaries determine whether investors review complete presentations.

**Market Opportunity Analysis:** Comprehensive market analysis demonstrating size, growth potential, and competitive landscape. Market analysis validates business opportunity and growth potential for investor evaluation.

**Business Model and Strategy:** Clear explanation of revenue model, competitive positioning, and growth strategy. Business model clarity helps investors understand value creation and scalability potential.

**Financial Projections and Metrics:** Detailed financial projections including revenue forecasts, expense budgets, and key performance indicators. Financial projections demonstrate business viability and return potential.

**Valuation and Investment Structure:**
**Business Valuation Methods:** Understand valuation approaches including asset-based, income-based, and market-based methods. Valuation knowledge enables realistic expectations and effective negotiations.

**Equity Structure Planning:** Plan equity structures that balance investor returns with founder control and employee incentives. Equity planning affects governance, control, and future financing flexibility.

**Investment Terms Negotiation:** Negotiate investment terms including valuation, board representation, liquidation preferences, and anti-dilution provisions. Term negotiation significantly affects founder outcomes and business control.

**Exit Strategy Planning:** Develop exit strategies that provide investor returns while achieving founder objectives. Exit planning affects investor interest and valuation expectations.

**Due Diligence Preparation:**
**Financial Documentation:** Prepare comprehensive financial documentation including audited statements, tax returns, and management reports. Financial documentation demonstrates business credibility and performance.

**Legal Documentation:** Organize legal documents including corporate records, contracts, permits, and intellectual property documentation. Legal preparation facilitates due diligence and closing processes.

**Operational Documentation:** Document operational procedures, supplier relationships, customer contracts, and competitive positioning. Operational documentation demonstrates business sustainability and growth potential.

**Management Team Presentation:** Present management team qualifications, experience, and track records. Team presentation often determines investor confidence and funding decisions.

**Canadian Equity Financing Environment:**
**Securities Regulations:** Canadian securities regulations affect equity fundraising including disclosure requirements and investor qualifications. Regulatory compliance ensures legal fundraising and protects against penalties.

**Tax Implications:** Understand tax implications of equity financing including capital gains treatment and investor tax considerations. Tax planning optimizes structures for both founders and investors.

**Government Programs:** Various government programs provide equity co-investment or guarantees that improve access to private equity funding. Government programs can enhance private funding and reduce investor risk.

**Regional Investment Communities:** Different Canadian regions have varying levels of angel and venture capital activity. Regional awareness guides investor targeting and networking strategies.

**Alternative Equity Structures:**
**Revenue-Based Financing:** Investors provide capital in exchange for percentage of future revenue rather than equity ownership. Revenue-based financing preserves ownership while providing growth capital.

**Convertible Debt:** Debt instruments that convert to equity under specified conditions. Convertible debt provides immediate funding with delayed valuation and equity conversion.

**Profit Sharing Agreements:** Agreements sharing future profits with investors without equity ownership transfer. Profit sharing provides investor returns while maintaining founder control.

**Joint Venture Partnerships:** Strategic partnerships combining resources and expertise for mutual benefit. Joint ventures provide access to capital, expertise, and market access through partnership structures.

**Presentation Skills and Investor Relations:**
**Pitch Deck Development:** Create compelling pitch decks that tell your story effectively within time constraints. Pitch decks should be visually appealing while conveying essential information clearly.

**Presentation Delivery:** Develop presentation skills including storytelling, handling questions, and building investor confidence. Presentation delivery often determines investor interest and funding success.

**Investor Communication:** Maintain ongoing communication with investors including regular updates and performance reporting. Investor relations build trust and support for future funding needs.

**Network Building:** Build relationships within investor communities through networking events, industry associations, and referral networks. Network building provides access to funding opportunities and strategic advice.

**Risk Management and Protection:**
**Founder Protection:** Negotiate founder protection including vesting schedules, employment agreements, and control provisions. Founder protection preserves motivation and business continuity.

**Intellectual Property Protection:** Protect intellectual property including trademarks, trade secrets, and proprietary processes. IP protection maintains competitive advantages and business value.

**Governance Structure:** Establish governance structures that balance investor oversight with operational efficiency. Governance planning prevents conflicts and ensures effective decision-making.

**Performance Monitoring:** Implement performance monitoring and reporting systems that demonstrate progress and build investor confidence. Performance systems support ongoing relationships and future funding.`,
      actionItems: [
        'Develop comprehensive investor presentation with market analysis and financial projections',
        'Research potential investors including angels, VCs, and strategic investors in your market',
        'Prepare due diligence documentation including financial, legal, and operational records',
        'Plan equity structure and valuation strategy with professional legal and financial advice',
        'Build investor network through industry events, associations, and referral relationships'
      ],
      tips: [
        'Practice your investor presentation extensively - confidence and clarity are crucial for funding success',
        'Focus on investors who understand the food service industry and can provide strategic value beyond capital',
        'Be realistic about valuation expectations - overvaluation can prevent funding and future growth'
      ]
    },
    {
      icon: Shield,
      title: 'Grant Opportunities & Government Support',
      priority: 'Medium',
      impact: 'Access non-repayable funding',
      content: `Government grants and support programs provide non-repayable funding for food truck businesses while supporting economic development and entrepreneurship. Strategic grant applications can provide significant funding without equity dilution or debt obligations.

**Federal Grant Programs:**
**Canada Small Business Financing Program:** While primarily a loan guarantee program, CSBFP also provides grants for business development and training. Grant components support business planning and skill development.

**Regional Development Agencies:** Federal agencies including ACOA, CED, FedDev Ontario, and WD provide grants for business development and expansion. Regional agencies focus on economic development and job creation in specific areas.

**Innovation and Technology Grants:** Programs supporting technology adoption, innovation, and digital transformation. Technology grants can fund POS systems, online ordering, and operational technology improvements.

**Export Development Grants:** Programs supporting businesses entering export markets or expanding internationally. Export grants may apply to food trucks serving border communities or tourist markets.

**Provincial Grant Programs:**
**Small Business Development Grants:** Most provinces offer small business grants for startup, expansion, and development activities. Provincial programs often have lower competition and better local knowledge.

**Tourism and Hospitality Grants:** Programs supporting tourism and hospitality businesses including food service operations. Tourism grants recognize food trucks' contribution to visitor experience and economic development.

**Rural and Remote Development:** Special programs supporting business development in rural and remote communities. Rural programs often provide higher funding amounts and more flexible requirements.

**Industry-Specific Programs:** Some provinces offer grants specific to food service, agriculture, or mobile businesses. Industry-specific programs understand unique needs and challenges.

**Municipal and Local Grants:**
**Economic Development Grants:** Local economic development agencies often provide grants for businesses that create jobs and economic activity. Local grants support community development and business attraction.

**Downtown Revitalization:** Programs supporting businesses that contribute to downtown revitalization and community development. Revitalization grants recognize food trucks' role in creating vibrant communities.

**Special Event and Festival Support:** Grants supporting businesses participating in community events and festivals. Event grants can offset participation costs while building community connections.

**Startup and Incubator Programs:** Local startup support programs providing grants, mentorship, and resources for new businesses. Incubator programs offer comprehensive support beyond just funding.

**Specialized Grant Categories:**
**Women Entrepreneurs:** Programs specifically supporting women-owned businesses with grants and support services. Women entrepreneur programs recognize unique challenges and provide targeted support.

**Indigenous Business Development:** Programs supporting Indigenous entrepreneurs and businesses with grants and culturally appropriate support. Indigenous programs provide funding and mentorship for community economic development.

**Youth Entrepreneurship:** Programs supporting young entrepreneurs with grants, mentorship, and business development support. Youth programs encourage entrepreneurship and provide age-appropriate support.

**Immigrant and Newcomer Support:** Programs supporting immigrant entrepreneurs with grants and settlement services. Newcomer programs recognize entrepreneurship's role in economic integration and community development.

**Grant Application Strategy:**
**Program Research and Matching:** Research grant programs thoroughly to identify best matches for your business needs and qualifications. Program matching improves application success rates and funding optimization.

**Application Preparation:** Prepare comprehensive applications that clearly demonstrate program alignment, community benefit, and project feasibility. Application quality significantly affects approval rates and funding amounts.

**Budget Development:** Develop detailed project budgets that align with program requirements and demonstrate value for money. Budget accuracy and justification support funding decisions and compliance.

**Timeline and Milestone Planning:** Create realistic project timelines with measurable milestones that demonstrate progress and accountability. Timeline planning supports project management and reporting requirements.

**Compliance and Reporting:**
**Grant Agreement Management:** Understand grant agreement requirements including reporting, compliance, and fund usage restrictions. Agreement compliance ensures funding retention and future eligibility.

**Financial Tracking and Reporting:** Implement financial tracking systems that support grant reporting requirements and demonstrate proper fund usage. Tracking systems simplify compliance and audit preparation.

**Performance Measurement:** Measure and report project performance including job creation, economic impact, and community benefit. Performance measurement demonstrates grant effectiveness and supports future applications.

**Audit and Review Preparation:** Prepare for potential audits and reviews by maintaining complete documentation and compliance records. Audit preparation protects funding and demonstrates accountability.

**Application Success Factors:**
**Community Benefit Demonstration:** Clearly demonstrate community benefits including job creation, economic development, and social impact. Community benefit often determines grant approval and funding priority.

**Innovation and Uniqueness:** Highlight innovative aspects of your business concept, technology adoption, or service delivery. Innovation often receives priority in competitive grant programs.

**Sustainability and Growth Potential:** Demonstrate business sustainability and growth potential beyond grant funding period. Sustainability evidence supports long-term impact and return on investment.

**Partnership and Collaboration:** Show partnerships with other businesses, organizations, or community groups. Partnerships demonstrate community support and leverage additional resources.

**Canadian Grant Landscape:**
**Competitive Environment:** Grant programs often have significant competition requiring high-quality applications and clear differentiation. Competitive awareness guides application strategy and timing.

**Regional Priorities:** Different regions prioritize different economic development goals affecting grant availability and focus. Regional awareness guides program selection and application positioning.

**Political and Economic Cycles:** Grant funding availability fluctuates with political priorities and economic conditions. Cycle awareness guides timing and program selection strategies.

**Professional Support:** Consider professional grant writers or consultants for large or complex applications. Professional support can improve success rates and funding amounts while reducing application burden.

**Integration with Business Strategy:**
**Strategic Alignment:** Ensure grant projects align with overall business strategy and development goals. Strategic alignment maximizes grant value and business benefit.

**Funding Mix Optimization:** Integrate grants with other funding sources to optimize capital structure and minimize costs. Funding mix planning reduces dependence on any single source.

**Long-term Relationship Building:** Build long-term relationships with grant agencies and program officers for ongoing support and future opportunities. Relationship building improves access and success rates.

**Knowledge Sharing:** Share grant experiences and knowledge with other entrepreneurs and business networks. Knowledge sharing builds community and improves overall success rates.`,
      actionItems: [
        'Research federal, provincial, and municipal grant programs applicable to food truck businesses',
        'Identify specialized grant categories matching your demographics and business characteristics',
        'Develop grant application strategy with program matching and timeline planning',
        'Prepare comprehensive application materials with community benefit and innovation demonstration',
        'Establish compliance and reporting systems for grant management and future applications'
      ],
      tips: [
        'Start grant research early - application deadlines often come with little notice and require extensive preparation',
        'Focus on grants that align with your business goals rather than just available funding amounts',
        'Build relationships with grant program officers who can provide guidance and application feedback'
      ]
    },
    {
      icon: Target,
      title: 'Funding Strategy & Capital Structure Planning',
      priority: 'High',
      impact: 'Optimize funding mix',
      content: `Strategic funding planning optimizes capital structure while minimizing costs and maintaining control. Comprehensive funding strategies balance multiple sources to achieve business objectives while managing risk and preserving flexibility.

**Capital Structure Planning:**
**Debt vs Equity Balance:** Balance debt and equity financing to optimize cost of capital while maintaining financial flexibility. Optimal structures consider business risk, growth plans, and founder objectives.

**Funding Stage Planning:** Plan funding stages that align with business milestones and growth phases. Stage planning reduces dilution while ensuring adequate capital for each development phase.

**Source Diversification:** Diversify funding sources to reduce dependence on any single source and improve negotiating position. Diversification provides flexibility and reduces funding risk.

**Cost of Capital Optimization:** Minimize total cost of capital through strategic source selection and term negotiation. Cost optimization improves profitability and return on investment.

**Funding Timeline and Sequencing:**
**Bootstrap Phase:** Maximize bootstrap funding through personal savings, revenue generation, and asset optimization. Bootstrap funding preserves equity while demonstrating business viability.

**Seed Funding:** Secure initial external funding for business launch and early operations. Seed funding typically comes from personal networks, grants, or angel investors.

**Growth Funding:** Obtain expansion capital for scaling operations, additional equipment, or market expansion. Growth funding often involves larger amounts from institutional investors or lenders.

**Maturity Funding:** Access capital for major expansion, acquisition, or exit preparation. Maturity funding supports strategic initiatives and value maximization.

**Risk Management and Contingency Planning:**
**Funding Risk Assessment:** Assess risks associated with different funding sources including repayment obligations, control dilution, and performance requirements. Risk assessment guides source selection and structure decisions.

**Contingency Funding Plans:** Develop backup funding plans for scenarios where primary funding sources become unavailable. Contingency planning ensures business continuity and reduces funding risk.

**Covenant and Restriction Management:** Understand and manage funding covenants and restrictions that affect business operations and future financing. Covenant management preserves flexibility and prevents default.

**Exit Strategy Integration:** Integrate exit strategy planning with funding decisions to optimize investor returns and founder outcomes. Exit planning affects valuation and investor interest.

**Canadian Funding Ecosystem:**
**Regional Funding Availability:** Understand regional variations in funding availability including investor presence, government programs, and lending capacity. Regional awareness guides location and targeting decisions.

**Industry Support Networks:** Leverage industry associations, incubators, and support networks that provide funding access and guidance. Network participation improves funding opportunities and success rates.

**Government Integration:** Integrate government funding programs with private funding sources to optimize capital structure and reduce costs. Government integration can enhance private funding and reduce risk.

**Cultural and Regulatory Considerations:** Consider Canadian cultural values and regulatory requirements that affect funding decisions and investor relations. Cultural alignment improves funding success and relationship building.

**Financial Planning and Modeling:**
**Financial Projections:** Develop comprehensive financial projections that support funding requests and demonstrate business viability. Projections should be realistic while showing growth potential.

**Scenario Planning:** Model different funding scenarios including best case, worst case, and most likely outcomes. Scenario planning guides funding strategy and risk management.

**Cash Flow Management:** Plan cash flow management that optimizes funding timing and minimizes borrowing costs. Cash flow planning ensures adequate liquidity while minimizing financing needs.

**Return Analysis:** Analyze returns for different funding sources and structures to optimize investor and founder outcomes. Return analysis guides negotiation and structure decisions.

**Professional Support and Advisory:**
**Financial Advisory:** Engage financial advisors who understand food service businesses and funding markets. Professional advice improves funding strategy and negotiation outcomes.

**Legal Support:** Use legal professionals experienced in business financing and securities law. Legal support ensures compliance and protects interests during funding processes.

**Accounting and Tax Planning:** Integrate accounting and tax planning with funding decisions to optimize structures and minimize costs. Tax planning significantly affects funding economics and outcomes.

**Industry Mentorship:** Seek mentorship from successful food service entrepreneurs who have navigated funding processes. Mentorship provides practical guidance and network access.

**Performance Monitoring and Investor Relations:**
**Performance Tracking:** Implement performance tracking systems that demonstrate progress to investors and lenders. Performance systems support ongoing relationships and future funding needs.

**Communication and Reporting:** Maintain regular communication with funding sources including progress updates and performance reporting. Communication builds trust and supports long-term relationships.

**Relationship Management:** Manage relationships with funding sources as strategic partnerships rather than just financial transactions. Relationship management provides ongoing value beyond initial funding.

**Future Funding Preparation:** Prepare for future funding needs through relationship building, performance demonstration, and strategic planning. Future preparation ensures continued access to capital for growth.

**Technology and Innovation Integration:**
**Fintech Solutions:** Explore fintech solutions including online lending, alternative credit scoring, and digital investment platforms. Fintech provides new funding options and improved processes.

**Blockchain and Cryptocurrency:** Consider emerging funding methods including cryptocurrency investment and blockchain-based funding platforms. Emerging technologies may provide new funding opportunities.

**Data-Driven Funding:** Use business data and analytics to support funding applications and demonstrate performance. Data-driven approaches improve credibility and funding success rates.

**Digital Relationship Management:** Use digital tools for investor relations, reporting, and communication. Digital management improves efficiency and relationship quality.

**Strategic Integration and Value Creation:**
**Value-Added Funding:** Seek funding sources that provide strategic value beyond capital including expertise, networks, and market access. Value-added funding accelerates business development and success.

**Partnership Integration:** Integrate funding with strategic partnerships that provide operational benefits and market opportunities. Partnership integration creates synergies and competitive advantages.

**Market Positioning:** Use funding to strengthen market positioning through equipment upgrades, marketing investment, and competitive differentiation. Strategic funding enhances competitive position and growth potential.

**Long-term Value Building:** Focus funding on initiatives that build long-term business value rather than just short-term cash flow. Value building supports sustainable growth and exit opportunities.`,
      actionItems: [
        'Develop comprehensive funding strategy with capital structure planning and source diversification',
        'Create funding timeline with stage planning and milestone-based capital requirements',
        'Implement risk management and contingency planning with backup funding sources',
        'Establish financial planning and modeling with projections and scenario analysis',
        'Build professional support network with financial, legal, and industry advisory resources'
      ],
      tips: [
        'Plan your funding strategy before you need money - desperation weakens negotiating position and limits options',
        'Consider the total cost of funding including interest, fees, equity dilution, and opportunity costs',
        'Build relationships with multiple funding sources to maintain options and competitive terms'
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
    <section ref={sectionRef} id="funding-financing-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Funding & <span className="text-primary-500">Financing</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Explore funding options and financing strategies for your food truck business. Learn to access capital through loans, investors, grants, and strategic funding planning.
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
                                Funding & Financing Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've mastered funding and financing strategies for food truck operations. You now have the knowledge to access capital through multiple sources and optimize your funding structure.
                              </p>
                              <Link
                                to="/financial-management/financial-planning"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Next: Financial Planning
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

export default FundingFinancingLesson;