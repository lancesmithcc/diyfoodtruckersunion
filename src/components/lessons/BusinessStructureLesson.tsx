import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building, Shield, DollarSign, FileText, Users, TrendingUp, CheckCircle, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const BusinessStructureLesson: React.FC = () => {
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
      title: 'Sole Proprietorship Overview',
      priority: 'Medium',
      complexity: 'Simple',
      content: `A sole proprietorship is the simplest business structure in Canada, where you and your business are legally the same entity. This structure is popular among new food truck operators due to its simplicity and low startup costs.

**How Sole Proprietorship Works:**
As a sole proprietor, you personally own all business assets and are personally responsible for all business debts and obligations. Your business income is reported on your personal tax return, and you're personally liable for any business-related legal issues.

**Registration Requirements:**
In most provinces, you can operate as a sole proprietorship using your legal name without formal registration. However, if you want to use a business name (like "Mike's Mobile Tacos"), you'll need to register that name with your provincial government.

**Tax Implications:**
**Personal Tax Integration:** All business income and expenses are reported on your personal tax return using Form T1. Business income is added to your other income and taxed at your marginal tax rate.

**GST/HST Registration:** You must register for GST/HST once your business revenue exceeds $30,000 in any 12-month period. Registration allows you to claim input tax credits on business purchases.

**Business Expense Deductions:** You can deduct legitimate business expenses including vehicle costs, equipment purchases, supplies, and a portion of home office expenses if you work from home.

**Advantages for Food Truck Operators:**
- **Simplicity:** Easy to set up and maintain with minimal paperwork
- **Cost-effective:** No incorporation fees or annual filing requirements
- **Direct control:** Complete decision-making authority without partners or shareholders
- **Tax flexibility:** Business losses can offset other personal income

**Disadvantages and Risks:**
- **Unlimited liability:** Personal assets are at risk for business debts and lawsuits
- **Limited credibility:** Some suppliers and customers prefer incorporated businesses
- **Financing challenges:** Banks may be less willing to lend to sole proprietorships
- **No tax deferral:** All income is taxed in the year earned, regardless of whether you withdraw it

**When Sole Proprietorship Makes Sense:**
This structure works well for food truck operators who are just starting out, have limited startup capital, and want to test their business concept before committing to more complex structures. It's ideal for operators who plan to work alone or with minimal help and don't anticipate significant liability risks.

**Canadian Provincial Variations:**
Each province has slightly different requirements for sole proprietorship registration and business name registration. Some provinces offer online registration systems, while others require in-person or mail applications. Costs typically range from $60-$300 for business name registration.`,
      actionItems: [
        'Research sole proprietorship registration requirements in your province',
        'Determine if you need to register a business name or can use your legal name',
        'Calculate potential tax implications based on projected income',
        'Assess your personal liability comfort level for this structure',
        'Compare provincial registration costs and processes'
      ],
      tips: [
        'Consider sole proprietorship as a starting point - you can always incorporate later as your business grows',
        'Keep detailed records from day one, even with this simple structure',
        'Ensure you have adequate personal insurance coverage since you have unlimited liability'
      ]
    },
    {
      icon: Shield,
      title: 'Corporation Structure Benefits',
      priority: 'High',
      complexity: 'Complex',
      content: `Incorporating your food truck business creates a separate legal entity that can provide significant advantages in terms of liability protection, tax planning, and business credibility. Canadian corporations are governed by either federal or provincial legislation.

**Federal vs Provincial Incorporation:**
**Federal Incorporation:** Allows you to operate under the same name across all provinces and territories. Costs more initially ($200 federal fee plus provincial registration fees) but provides maximum flexibility for expansion.

**Provincial Incorporation:** Less expensive ($300-$500 depending on province) and sufficient if you plan to operate primarily within one province. Each province has its own incorporation process and requirements.

**Corporate Structure Basics:**
A corporation is a separate legal person that can own property, enter contracts, and be sued independently of its owners (shareholders). The corporation is managed by directors and operated by officers, though in small businesses, these roles are often filled by the same person.

**Liability Protection:**
**Limited Liability:** Shareholders are generally only liable for the amount they invested in the corporation. Personal assets are protected from business debts and lawsuits, though directors can be personally liable for certain obligations like employee wages and tax remittances.

**Professional Credibility:** Incorporation signals permanence and professionalism to customers, suppliers, and lenders. Many large clients prefer to work with incorporated businesses.

**Tax Advantages:**
**Small Business Deduction:** Canadian-controlled private corporations (CCPCs) pay reduced tax rates on the first $500,000 of active business income. The combined federal and provincial rate is typically 11-27%, compared to personal rates that can exceed 50%.

**Tax Deferral Opportunities:** You can leave profits in the corporation and pay tax at the lower corporate rate, then pay personal tax only when you withdraw funds as salary or dividends.

**Income Splitting:** With proper planning, you can pay family members reasonable salaries or dividends, potentially reducing overall family tax burden.

**Operational Advantages:**
**Perpetual Existence:** Corporations continue to exist even if ownership changes, making it easier to sell the business or bring in partners.

**Easier Access to Capital:** Banks and investors are more comfortable lending to or investing in corporations. You can also issue shares to raise capital.

**Employee Benefits:** Corporations can provide tax-effective benefits to employees, including health and dental plans.

**Compliance Requirements:**
**Annual Filings:** Corporations must file annual returns with both corporate registries and tax authorities. This includes corporate tax returns, annual reports, and maintaining corporate records.

**Corporate Governance:** You must hold annual shareholder meetings, maintain corporate minute books, and follow proper corporate procedures for major decisions.

**Professional Fees:** Most small business owners need accounting and legal help to maintain corporate compliance, adding $2,000-$5,000 annually in professional fees.

**When Incorporation Makes Sense:**
Consider incorporation if you expect significant profits (over $50,000 annually), face liability risks, want to build business credit, or plan to expand or sell the business. It's also beneficial if you want to retain earnings in the business for future expansion.

**Timing Considerations:**
Many successful food truck operators start as sole proprietorships and incorporate once their business is established and profitable. This allows them to test their concept without the complexity and costs of incorporation.`,
      actionItems: [
        'Compare federal vs provincial incorporation costs and benefits for your situation',
        'Calculate potential tax savings based on projected business income',
        'Research liability risks specific to food truck operations in your area',
        'Get quotes from lawyers and accountants for incorporation and ongoing compliance',
        'Determine if your business model justifies the complexity and costs of incorporation'
      ],
      tips: [
        'Incorporation makes most sense when you have consistent profits to retain in the business',
        'Consider the total cost of compliance, not just the initial incorporation fee',
        'You can always start simple and incorporate later when it makes financial sense'
      ]
    },
    {
      icon: Users,
      title: 'Partnership Structures',
      priority: 'Medium',
      complexity: 'Moderate',
      content: `Partnerships allow two or more people to share ownership, responsibilities, and profits of a food truck business. Canadian law recognizes several types of partnerships, each with different legal and tax implications.

**General Partnership:**
In a general partnership, all partners share equally in management decisions, profits, and liabilities unless otherwise specified in a partnership agreement. Each partner is personally liable for all partnership debts and obligations.

**Limited Partnership:**
Limited partnerships have both general partners (who manage the business and have unlimited liability) and limited partners (who invest money but have limited liability and no management role). This structure is less common for food truck operations.

**Partnership Agreement Essentials:**
**Ownership Percentages:** Clearly define each partner's ownership stake and how it relates to profit sharing and decision-making authority.

**Roles and Responsibilities:** Specify who handles operations, finances, marketing, and other key business functions to avoid conflicts.

**Capital Contributions:** Document initial investments and how future capital needs will be handled.

**Profit and Loss Distribution:** Determine how profits and losses will be shared, which doesn't have to match ownership percentages.

**Decision-Making Process:** Establish procedures for major decisions, day-to-day operations, and dispute resolution.

**Exit Strategies:** Plan for what happens if a partner wants to leave, becomes disabled, or dies.

**Tax Implications:**
**Flow-Through Taxation:** Partnerships don't pay tax directly. Instead, profits and losses flow through to partners' personal tax returns based on their ownership percentage.

**T5013 Partnership Return:** Partnerships must file an annual information return showing income, expenses, and each partner's share of profits or losses.

**GST/HST Registration:** Partnerships must register for GST/HST once revenue exceeds $30,000, just like other business structures.

**Advantages of Partnerships:**
**Shared Resources:** Partners can contribute different skills, capital, and networks to strengthen the business.

**Shared Workload:** Multiple owners can share the demanding work of food truck operations, allowing for better work-life balance.

**Increased Capital:** Multiple partners can contribute more startup capital than a single owner might have.

**Complementary Skills:** Partners can bring different expertise (culinary skills, business management, marketing) to the venture.

**Disadvantages and Risks:**
**Unlimited Liability:** In general partnerships, each partner is personally liable for all partnership debts and the actions of other partners.

**Potential Conflicts:** Disagreements about business direction, work contribution, or profit distribution can damage both the business and personal relationships.

**Shared Profits:** Success must be shared according to the partnership agreement, even if one partner contributes more effort.

**Joint and Several Liability:** Each partner can be held responsible for the full amount of partnership debts, not just their proportional share.

**Partnership Considerations for Food Trucks:**
**Operational Compatibility:** Food truck operations require close coordination and quick decision-making. Partners must work well together in high-stress, fast-paced environments.

**Skill Complementarity:** Ideal partnerships combine culinary expertise with business management skills, or operational skills with marketing and customer service abilities.

**Financial Contributions:** Partners should contribute fairly to startup costs and ongoing expenses, whether through cash, equipment, or sweat equity.

**Work Schedule Coordination:** Food truck operations often require long hours and weekend work. Partners must agree on work schedules and responsibilities.

**Legal Protection Strategies:**
**Written Partnership Agreement:** Never rely on verbal agreements. A comprehensive written agreement prevents misunderstandings and provides legal protection.

**Insurance Considerations:** Ensure business insurance covers all partners and consider key person insurance if one partner is critical to operations.

**Regular Reviews:** Schedule regular meetings to discuss business performance, address concerns, and update the partnership agreement as needed.

**When Partnerships Work Best:**
Partnerships are most successful when partners have complementary skills, shared vision, compatible work styles, and clear agreements about roles and responsibilities. They work well for food truck operations that require diverse expertise or significant startup capital.`,
      actionItems: [
        'Identify potential partners and assess skill complementarity',
        'Draft key terms for a partnership agreement including ownership, roles, and profit sharing',
        'Research partnership registration requirements in your province',
        'Calculate tax implications for each partner based on projected income',
        'Consult with a lawyer about partnership agreement and liability protection'
      ],
      tips: [
        'Choose partners based on business compatibility, not just personal relationships',
        'Always have a written partnership agreement, even with family or close friends',
        'Plan exit strategies before you need them - partnerships can end for many reasons'
      ]
    },
    {
      icon: DollarSign,
      title: 'Tax Implications Analysis',
      priority: 'Critical',
      complexity: 'Complex',
      content: `Understanding the tax implications of different business structures is crucial for making an informed decision. Canadian tax law treats each structure differently, affecting your overall tax burden and cash flow.

**Personal Tax Integration (Sole Proprietorship & Partnership):**
**Marginal Tax Rates:** Business income is added to your other income and taxed at your marginal rate, which can range from 20% to over 50% depending on your province and total income.

**Self-Employment Considerations:** As a sole proprietor or partner, you're considered self-employed and must make quarterly tax installments if you expect to owe more than $3,000 in taxes.

**Business Loss Benefits:** Losses can be used to offset other income, potentially reducing your overall tax burden in startup years.

**Corporate Tax Structure:**
**Small Business Deduction:** CCPCs pay reduced rates on the first $500,000 of active business income. Combined federal and provincial rates typically range from 11% to 27%.

**General Corporate Rate:** Income above $500,000 is taxed at higher rates, typically 25% to 31% combined federal and provincial.

**Integration System:** The tax system is designed so that total taxes paid (corporate plus personal) should be similar whether income is earned personally or through a corporation.

**Salary vs Dividend Decisions:**
**Salary Payments:** Create tax deductions for the corporation and are subject to CPP contributions and income tax withholding. Salaries create RRSP contribution room.

**Dividend Payments:** Paid from after-tax corporate income and receive preferential tax treatment through the dividend tax credit system. No CPP contributions required.

**Optimal Mix:** Most small business owners benefit from a combination of salary and dividends to minimize total tax burden and maximize benefits.

**GST/HST Considerations:**
**Registration Threshold:** All business structures must register once revenue exceeds $30,000 in any 12-month period.

**Input Tax Credits:** Registered businesses can claim credits for GST/HST paid on business purchases, reducing overall tax burden.

**Collection and Remittance:** You collect GST/HST from customers and remit the net amount to CRA, typically quarterly for small businesses.

**Business Expense Deductions:**
**Vehicle Expenses:** Deduct business portion of vehicle costs including fuel, maintenance, insurance, and depreciation.

**Equipment Purchases:** Claim capital cost allowance (depreciation) on equipment purchases, or potentially expense smaller items immediately.

**Home Office Expenses:** If you use part of your home for business, you can deduct a reasonable portion of home expenses.

**Professional Fees:** Legal, accounting, and consulting fees related to business operations are fully deductible.

**Tax Planning Strategies:**
**Income Timing:** With corporations, you can time salary and dividend payments to optimize tax efficiency across multiple years.

**Family Income Splitting:** Corporations allow for legitimate income splitting opportunities with family members who contribute to the business.

**Retirement Planning:** Corporate structures can provide more flexible retirement planning options, including individual pension plans.

**Tax Deferral:** Corporations allow you to defer personal tax by leaving profits in the business, though this creates future tax obligations.

**Record Keeping Requirements:**
**Documentation Standards:** CRA requires detailed records of all business transactions, regardless of business structure.

**Retention Periods:** Keep business records for at least six years after the tax year they relate to.

**Digital Records:** Electronic records are acceptable if they're accessible and readable throughout the retention period.

**Professional Support:**
**Accounting Services:** Most business owners benefit from professional accounting help, especially for corporations and partnerships.

**Tax Planning:** Annual tax planning sessions can identify opportunities to minimize tax burden legally.

**Compliance Management:** Professional help ensures you meet all filing deadlines and requirements, avoiding penalties.

**Provincial Variations:**
Tax rates and rules vary significantly between provinces. Consider your primary operating location when evaluating tax implications, and factor in potential expansion to other provinces.`,
      actionItems: [
        'Calculate projected tax burden under each business structure based on expected income',
        'Research provincial tax rates and small business deduction rates in your area',
        'Determine GST/HST registration requirements and impact on pricing',
        'Identify potential business expense deductions for your food truck operation',
        'Consult with an accountant about optimal tax structure for your situation'
      ],
      tips: [
        'Tax planning should be done annually, not just at startup - optimal structures can change as your business grows',
        'Keep detailed records from day one, regardless of business structure',
        'Consider the total cost of tax compliance, not just the tax rates themselves'
      ]
    },
    {
      icon: Shield,
      title: 'Liability Protection Strategies',
      priority: 'Critical',
      complexity: 'Moderate',
      content: `Food truck operations face unique liability risks that can threaten both your business and personal assets. Understanding these risks and implementing appropriate protection strategies is essential for long-term success.

**Common Food Truck Liability Risks:**
**Food Safety Issues:** Foodborne illness claims can result in significant lawsuits and regulatory penalties. Even with proper procedures, contamination can occur and create liability.

**Vehicle-Related Incidents:** Accidents while driving to locations, parking mishaps, or injuries from vehicle equipment can create substantial liability.

**Customer Injuries:** Slips, falls, burns from hot equipment, or injuries from serving areas can result in personal injury claims.

**Property Damage:** Damage to event venues, private property, or public spaces during operations can create costly liability.

**Employment Issues:** If you hire staff, you face potential liability for workplace injuries, discrimination claims, or wage disputes.

**Business Structure Protection Levels:**
**Sole Proprietorship:** Offers no liability protection. Your personal assets (home, savings, investments) are at risk for any business-related claims or debts.

**Partnership:** General partners have unlimited personal liability for partnership debts and the actions of other partners. Limited partners have protection limited to their investment.

**Corporation:** Provides the strongest liability protection. Shareholders are generally only liable for their investment in the corporation, protecting personal assets.

**Insurance as Primary Protection:**
**General Liability Insurance:** Essential coverage for customer injuries, property damage, and basic business operations. Minimum $1-2 million coverage recommended.

**Product Liability Insurance:** Specific coverage for food-related claims including foodborne illness, allergic reactions, and contamination issues.

**Commercial Auto Insurance:** Required for vehicle operations and covers both driving and stationary operations. Personal auto insurance excludes commercial use.

**Property Insurance:** Protects your equipment, inventory, and truck modifications against theft, vandalism, fire, and weather damage.

**Professional Liability:** May be needed if you provide catering advice or specialized food services beyond basic food truck operations.

**Additional Protection Strategies:**
**Proper Business Practices:** Implement comprehensive food safety procedures, staff training programs, and operational protocols to minimize risk occurrence.

**Contractual Protection:** Use well-drafted contracts with suppliers, venues, and customers that include liability limitations and indemnification clauses.

**Separate Business Assets:** Keep business and personal finances completely separate, especially important for corporations to maintain liability protection.

**Regular Safety Training:** Ongoing staff training on food safety, equipment operation, and customer service reduces the likelihood of incidents.

**Asset Protection Planning:**
**Personal Asset Segregation:** Keep personal assets separate from business operations and avoid personal guarantees when possible.

**Business Asset Protection:** Consider holding major assets (like the food truck) in separate entities or structures to limit exposure.

**Insurance Adequacy Review:** Regularly review insurance coverage to ensure it keeps pace with business growth and changing risks.

**Emergency Response Planning:** Have procedures in place for handling incidents, including immediate response, documentation, and insurance notification.

**Director and Officer Considerations:**
**Corporate Directors:** Even with incorporation, directors can be personally liable for certain obligations including employee wages, source deductions, and GST/HST remittances.

**Due Diligence Defense:** Directors can avoid personal liability by demonstrating they exercised reasonable care and diligence in their duties.

**Director Insurance:** Consider director and officer insurance if you have outside investors or multiple shareholders.

**Risk Management Best Practices:**
**Documentation Systems:** Maintain detailed records of safety procedures, training, incidents, and corrective actions.

**Regular Inspections:** Conduct regular self-inspections of equipment, procedures, and facilities to identify and correct potential hazards.

**Vendor Management:** Ensure suppliers and contractors have adequate insurance and follow proper safety procedures.

**Legal Compliance:** Stay current with health regulations, safety requirements, and industry standards to minimize regulatory liability.

**Practical Implementation:**
**Start with Insurance:** Regardless of business structure, comprehensive insurance is your first line of defense against liability.

**Structure for Growth:** Choose a business structure that provides appropriate protection for your current situation but can evolve as your business grows.

**Professional Guidance:** Work with insurance brokers, lawyers, and accountants who understand food service industry risks and protection strategies.

**Regular Reviews:** Liability protection needs change as your business grows, so review and update your protection strategies annually.`,
      actionItems: [
        'Identify specific liability risks for your food truck concept and operating locations',
        'Research insurance requirements and get quotes for comprehensive coverage',
        'Evaluate how different business structures would protect your personal assets',
        'Develop risk management procedures for food safety, vehicle operation, and customer service',
        'Consult with insurance and legal professionals about optimal protection strategies'
      ],
      tips: [
        'Insurance is more important than business structure for liability protection - never operate without adequate coverage',
        'Document everything - good records are your best defense in any liability claim',
        'Regular training and safety procedures prevent most liability issues before they occur'
      ]
    },
    {
      icon: FileText,
      title: 'Registration Process & Requirements',
      priority: 'High',
      complexity: 'Moderate',
      content: `The registration process varies significantly depending on your chosen business structure and province of operation. Understanding the specific requirements and timeline helps ensure smooth business launch.

**Sole Proprietorship Registration:**
**Using Your Legal Name:** If operating under your legal name (e.g., "John Smith Food Truck"), no formal registration may be required in some provinces, though you'll still need business licenses and permits.

**Business Name Registration:** To use a business name (e.g., "Mike's Mobile Tacos"), you must register it with your provincial government. This typically costs $60-$300 and lasts 1-5 years depending on the province.

**Online Registration:** Most provinces offer online business name registration systems that provide immediate confirmation and certificates.

**Name Search Requirements:** Before registering, you must search existing business names to ensure yours isn't already taken or too similar to existing businesses.

**Partnership Registration:**
**Partnership Declaration:** Most provinces require partnerships to file a declaration or registration, especially if using a business name other than the partners' legal names.

**Partnership Agreement:** While not always legally required, a written partnership agreement is essential for defining roles, responsibilities, and profit sharing.

**Joint Registration:** All partners typically must sign registration documents and may need to provide personal information and identification.

**Corporate Registration Process:**
**Name Reservation:** Reserve your corporate name through the appropriate corporate registry (federal or provincial). Names must be unique and follow specific formatting rules.

**Articles of Incorporation:** File articles of incorporation that define the corporation's structure, share classes, and basic governance rules.

**Initial Directors:** Appoint initial directors who will manage the corporation. Directors must be individuals (not other corporations) and meet residency requirements.

**Share Structure:** Define the types and numbers of shares the corporation can issue, even if you're the only shareholder initially.

**Registered Office:** Maintain a registered office address in the jurisdiction of incorporation for legal correspondence.

**Federal Incorporation Steps:**
1. **NUANS Name Search:** Conduct a federal name search to ensure availability ($40)
2. **Articles of Incorporation:** File federal articles of incorporation ($200)
3. **Provincial Registration:** Register to do business in your operating province ($100-$300)
4. **Corporate Records:** Establish minute books and corporate records
5. **Business Number:** Apply for federal business number and tax accounts

**Provincial Incorporation Steps:**
1. **Name Search:** Search provincial business name database ($30-$75)
2. **Articles of Incorporation:** File provincial articles ($300-$500 depending on province)
3. **Initial Return:** File initial corporate return within required timeframe
4. **Business Licenses:** Apply for required business licenses and permits
5. **Tax Registration:** Register for provincial and federal tax accounts

**Required Documentation:**
**Personal Identification:** Government-issued photo ID for all incorporators, directors, and signing authorities.

**Address Verification:** Proof of registered office address and director addresses.

**Consent Forms:** Director consent forms and other required corporate documents.

**Share Certificates:** Issue initial share certificates to founding shareholders.

**Timeline Considerations:**
**Sole Proprietorship:** Business name registration typically takes 1-5 business days online, longer for paper applications.

**Partnership:** Registration usually takes 1-2 weeks, depending on province and application method.

**Corporation:** Federal incorporation takes 1-2 weeks online, 3-4 weeks by mail. Provincial incorporation varies from same-day to 2-3 weeks.

**Ongoing Compliance Requirements:**
**Annual Returns:** Corporations must file annual returns with corporate registries, typically due on the anniversary of incorporation.

**Tax Filings:** All business structures must file appropriate tax returns and remit required taxes and source deductions.

**License Renewals:** Business licenses, permits, and registrations typically require annual or periodic renewal.

**Corporate Maintenance:** Corporations must maintain proper corporate records, hold required meetings, and follow corporate governance procedures.

**Professional Assistance:**
**Legal Services:** Lawyers can handle incorporation, draft partnership agreements, and ensure compliance with all requirements.

**Accounting Services:** Accountants can help with tax registration, ongoing compliance, and financial record keeping.

**Corporate Service Companies:** Specialized companies can handle routine incorporation and maintenance tasks at lower cost than full legal services.

**Cost Summary:**
**Sole Proprietorship:** $60-$300 for business name registration plus ongoing license fees
**Partnership:** $100-$500 for registration plus legal fees for partnership agreement
**Federal Corporation:** $400-$800 including name search, incorporation, and provincial registration
**Provincial Corporation:** $300-$600 depending on province and service level

**Common Mistakes to Avoid:**
**Inadequate Name Search:** Choosing names too similar to existing businesses can cause legal issues and force expensive rebranding.

**Incomplete Documentation:** Missing or incorrect information can delay registration and create compliance issues.

**Ignoring Ongoing Requirements:** Failing to file annual returns or maintain corporate records can result in dissolution or penalties.

**DIY Complex Structures:** While simple registrations can be done yourself, complex structures benefit from professional assistance.`,
      actionItems: [
        'Research specific registration requirements for your chosen structure in your province',
        'Conduct thorough name searches and reserve your preferred business name',
        'Gather all required documentation and identification for registration',
        'Calculate total registration costs including professional fees if needed',
        'Create a timeline for registration that allows business launch by your target date'
      ],
      tips: [
        'Start the registration process early - some steps can take longer than expected',
        'Keep copies of all registration documents and certificates in a safe place',
        'Set up systems to track and meet ongoing compliance requirements from day one'
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

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Simple': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Complex': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section ref={sectionRef} id="business-structure-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Business Structure <span className="text-primary-500">Selection</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Choose the right business structure for your food truck operation. Understand the legal, tax, and liability implications of sole proprietorship, partnership, and incorporation in Canada.
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
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getComplexityColor(currentStepData.complexity)}`}>
                      {currentStepData.complexity}
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
                          <Link
                            to="/getting-started/niche-targeting"
                            className="inline-flex items-center px-6 py-3 bg-yellow-950 text-white font-redhat font-medium rounded-lg hover:bg-green-600 transition-colors duration-200"
                          >
                            Next: Finding Your Niche & Target Market
                            <ArrowRight size={16} className="ml-2" />
                          </Link>
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

export default BusinessStructureLesson;