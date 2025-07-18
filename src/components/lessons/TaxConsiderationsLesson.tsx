import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Calculator, DollarSign, Calendar, Shield, TrendingUp, CheckCircle, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TaxConsiderationsLesson: React.FC = () => {
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
      icon: FileText,
      title: 'Business Expense Deductions & Documentation',
      priority: 'Critical',
      impact: 'Maximize tax savings',
      content: `Proper business expense deductions can significantly reduce your tax burden while maintaining compliance with Canada Revenue Agency requirements. Understanding allowable deductions and maintaining proper documentation is essential for food truck profitability.

**Vehicle and Transportation Deductions:**
Food truck vehicle expenses represent one of your largest deduction categories. You can deduct fuel, maintenance, repairs, insurance, licensing, and depreciation for business use. If your truck serves dual purposes, track business vs personal use percentage meticulously with detailed mileage logs.

**Capital Cost Allowance (CCA) for Equipment:**
Major equipment purchases including your food truck, kitchen equipment, and POS systems are depreciated over time using CCA rates set by CRA. Class 10 vehicles (30% rate) and Class 8 equipment (20% rate) are common for food truck operations.

**Food and Inventory Deductions:**
All ingredients, beverages, packaging, and disposable supplies used in food preparation and service are fully deductible as cost of goods sold. These costs directly reduce taxable income and should be tracked meticulously with proper receipts and inventory records.

**Home Office Deductions:**
If you use part of your home for business administration, you can deduct a reasonable portion of home expenses including utilities, property taxes, insurance, and maintenance. Calculate the business-use percentage based on space used exclusively for business.

**Professional Development and Training:**
Food safety courses, business training, industry conferences, and professional development are fully deductible. Include travel expenses for training and the cost of maintaining required certifications.

**Marketing and Advertising Expenses:**
All marketing costs including truck wraps, signage, social media advertising, website development, and promotional materials are fully deductible. Marketing investments that build your brand provide immediate tax benefits.

**Professional Services and Fees:**
Accounting, legal, consulting, and other professional fees related to business operations are fully deductible. The cost of tax preparation and business advice often pays for itself through improved deductions and compliance.

**Meal and Entertainment Deductions:**
Business meals are 50% deductible in Canada when they serve a business purpose. Document the business purpose, attendees, and relationship to your food truck operations. Staff training meals and supplier meetings qualify for deductions.

**Insurance and Protection Costs:**
Business insurance premiums including general liability, commercial auto, product liability, and property insurance are fully deductible. Insurance protects your business while providing tax benefits.

**Permit and License Fees:**
All business permits, licenses, and regulatory fees are deductible business expenses. This includes health permits, business licenses, vendor permits, and professional certifications required for operations.

**Documentation Requirements:**
Maintain original receipts showing date, vendor, amount, and business purpose for all deductions. Digital copies are acceptable if clear and complete. CRA requires supporting documentation for all claimed deductions during potential audits.

**Canadian-Specific Deduction Opportunities:**
**Small Business Deduction:** Canadian-controlled private corporations benefit from reduced tax rates on the first $500,000 of active business income, making incorporation attractive for profitable operations.

**Scientific Research and Experimental Development (SR&ED):** Menu development and process improvement activities may qualify for SR&ED tax credits, providing additional tax benefits for innovation.

**Provincial Tax Credits:** Many provinces offer small business tax credits, training credits, and industry-specific incentives that reduce overall tax burden.

**Common Deduction Mistakes:**
Never claim personal expenses as business deductions - this creates audit risk and potential penalties. Maintain clear separation between business and personal expenses through separate accounts and meticulous record keeping.

**Timing Strategies:**
Consider timing major equipment purchases to optimize tax benefits. Year-end purchases may provide immediate deductions, while installment purchases spread deductions over multiple years.`,
      actionItems: [
        'Create comprehensive expense tracking system categorizing all deductible business expenses',
        'Establish vehicle mileage log system with business purpose documentation for each trip',
        'Research and document all applicable CCA rates for your equipment and vehicle assets',
        'Implement home office expense tracking if using home space for business administration',
        'Design receipt and documentation system meeting CRA requirements for audit support'
      ],
      tips: [
        'When in doubt about a deduction, consult with an accountant - professional advice often pays for itself',
        'Keep a small notebook or phone app to immediately record business purpose for expenses',
        'Separate business and personal expenses completely - mixed accounts create audit complications'
      ]
    },
    {
      icon: Calendar,
      title: 'Quarterly Tax Payments & Planning',
      priority: 'Critical',
      impact: 'Avoid penalties & optimize cash flow',
      content: `Quarterly tax payments and strategic tax planning ensure compliance while optimizing cash flow and avoiding penalties. Proactive tax management prevents year-end surprises and supports business growth planning.

**Quarterly Installment Requirements:**
If you expect to owe more than $3,000 in taxes for the current year or either of the two previous years, you must make quarterly installment payments. CRA calculates installments based on previous year taxes or current year estimates.

**Installment Calculation Methods:**
**Prior Year Option:** Pay 25% of last year's total taxes each quarter. This method provides certainty but may result in overpayment if current year income is lower.

**Current Year Estimate:** Estimate current year taxes and pay 25% each quarter. This method optimizes cash flow but requires accurate income forecasting and carries penalty risk if underestimated.

**No-Calculation Option:** Use CRA's installment reminders which calculate payments based on your tax history. This method provides safety but may not optimize cash flow.

**Payment Timing and Methods:**
Quarterly payments are due March 15, June 15, September 15, and December 15. Late payments incur interest charges and potential penalties. Use online banking, pre-authorized debits, or CRA's online services for convenient payment.

**Cash Flow Planning for Tax Payments:**
Set aside 25-30% of net income monthly for tax payments to avoid cash flow stress during payment periods. Separate tax savings accounts help ensure funds are available when needed.

**GST/HST Quarterly Remittance:**
Most small businesses file GST/HST returns quarterly, remitting net tax collected minus input tax credits claimed. Plan for GST/HST payments separately from income tax installments.

**Provincial Tax Considerations:**
Some provinces require separate quarterly payments for provincial income tax. Understand your province's requirements and include provincial taxes in your quarterly planning.

**Tax Planning Strategies:**
**Income Timing:** If incorporated, time salary and dividend payments to optimize tax efficiency across multiple years. Income timing can reduce overall tax burden through progressive tax rates.

**Expense Timing:** Time major equipment purchases and expenses to optimize tax benefits. Year-end purchases may provide immediate deductions when beneficial.

**Retirement Contributions:** RRSP contributions reduce taxable income and can be timed to optimize tax benefits. Self-employed individuals can contribute to RRSPs based on earned income.

**Family Income Splitting:** Legitimate income splitting with family members who contribute to the business can reduce overall family tax burden through lower marginal rates.

**Record Keeping for Quarterly Planning:**
Maintain quarterly profit and loss statements to track income and expenses for tax planning. Regular financial review enables proactive tax planning and accurate installment calculations.

**Professional Tax Planning:**
Work with accountants or tax professionals for strategic tax planning, especially as your business grows. Professional planning often identifies opportunities and strategies that save more than the advisory costs.

**Penalty Avoidance Strategies:**
**Safe Harbor Rules:** Pay at least 100% of last year's taxes to avoid penalties, even if you owe more for the current year. Safe harbor provides protection while you optimize current year planning.

**Interest Minimization:** If you must pay late, minimize interest by paying as soon as possible. CRA interest compounds daily, making prompt payment important.

**Voluntary Disclosure:** If you discover errors or omissions, CRA's voluntary disclosure program can reduce penalties and interest when you proactively correct mistakes.

**Technology and Automation:**
Use accounting software that tracks tax obligations and reminds you of payment deadlines. Automated systems reduce the risk of missed payments and penalties.

**Seasonal Business Considerations:**
Food truck operations often have seasonal income patterns requiring careful quarterly planning. Build tax reserves during peak season to cover payments during slower periods.

**Business Structure Impact:**
Different business structures have different quarterly payment requirements. Sole proprietors pay personal tax installments, while corporations pay corporate tax installments with different rules and timing.

**Canadian Tax Environment:**
Stay current with federal and provincial tax changes that affect quarterly planning. Tax rates, thresholds, and rules change regularly, requiring ongoing attention to optimization opportunities.`,
      actionItems: [
        'Calculate quarterly tax installment requirements using prior year and current year estimate methods',
        'Establish monthly tax savings system setting aside 25-30% of net income for tax payments',
        'Set up automated payment systems and calendar reminders for quarterly due dates',
        'Create quarterly financial review process for tax planning and installment adjustment',
        'Research provincial tax requirements and integrate into quarterly planning system'
      ],
      tips: [
        'Pay quarterly installments even if not required - it prevents year-end cash flow stress and builds good habits',
        'Use the "pay last year\'s tax" method initially for safety, then optimize as you gain experience',
        'Set up separate savings accounts for tax payments to avoid accidentally spending tax money'
      ]
    },
    {
      icon: DollarSign,
      title: 'Sales Tax Compliance (GST/HST)',
      priority: 'Critical',
      impact: 'Legal compliance & cash flow',
      content: `GST/HST compliance is mandatory for food truck operations once revenue exceeds $30,000 annually. Proper sales tax management ensures legal compliance while optimizing cash flow and input tax credit benefits.

**GST/HST Registration Requirements:**
You must register for GST/HST once your business revenue exceeds $30,000 in any 12-month period. Registration is also required if you provide taxi or limousine services, sell real property, or operate outside Canada.

**Voluntary Registration Benefits:**
Consider voluntary registration even below the $30,000 threshold if you have significant business purchases. Registration allows you to claim input tax credits on business expenses, potentially providing cash flow benefits.

**GST/HST Rate Structure:**
**GST (5%):** Applies in Alberta, British Columbia, Manitoba, Northwest Territories, Nunavut, Saskatchewan, and Yukon.

**HST (13-15%):** Harmonized sales tax applies in New Brunswick (15%), Newfoundland and Labrador (15%), Nova Scotia (15%), Ontario (13%), and Prince Edward Island (15%).

**GST + PST:** Some provinces have separate provincial sales tax in addition to GST, requiring separate registration and remittance.

**Collection and Remittance Procedures:**
**Customer Charges:** Charge GST/HST on all taxable sales including food, beverages, and catering services. Display tax-inclusive or tax-exclusive pricing clearly to customers.

**Input Tax Credits (ITCs):** Claim input tax credits for GST/HST paid on business purchases including equipment, supplies, fuel, and professional services. ITCs reduce the net tax you remit to CRA.

**Filing Frequency:** Most small businesses file quarterly returns, though monthly or annual filing may be available based on revenue levels and business needs.

**Record Keeping Requirements:**
**Sales Records:** Maintain detailed sales records showing GST/HST collected by transaction, payment method, and time period. POS systems should track tax collection automatically.

**Purchase Records:** Keep receipts and invoices for all business purchases showing GST/HST paid. Proper documentation supports input tax credit claims during potential audits.

**Tax Calculation Accuracy:** Ensure accurate tax calculations on all sales and purchases. Rounding errors and calculation mistakes can create compliance issues and audit attention.

**Special Considerations for Food Trucks:**
**Basic Groceries:** Most basic food items are zero-rated (0% GST/HST), but prepared foods sold by food trucks are taxable. Understand the distinction between basic groceries and prepared foods.

**Catering Services:** Catering services are fully taxable regardless of food type. Ensure proper tax collection on all catering contracts and events.

**Multi-Provincial Operations:** If operating in multiple provinces, understand varying tax rates and registration requirements. Some provinces require separate registration for provincial sales tax.

**Technology and Automation:**
**POS System Integration:** Use POS systems that automatically calculate and track GST/HST collection and provide detailed reporting for tax returns.

**Accounting Software:** Choose accounting software that handles GST/HST tracking, input tax credit calculation, and return preparation automatically.

**Electronic Filing:** File GST/HST returns electronically through CRA's online services for faster processing and confirmation of receipt.

**Cash Flow Management:**
**Trust Account Concept:** Treat collected GST/HST as trust funds held for CRA rather than business revenue. Separate accounting prevents accidentally spending tax money.

**Quarterly Planning:** Plan quarterly cash flow around GST/HST remittance dates to ensure adequate funds are available for payments.

**Input Tax Credit Timing:** Claim input tax credits promptly to optimize cash flow and reduce net tax remittances.

**Compliance and Audit Preparation:**
**Documentation Standards:** Maintain documentation that meets CRA standards for completeness, accuracy, and retention. Proper records support tax positions during audits.

**Regular Reconciliation:** Reconcile GST/HST accounts monthly to identify errors and ensure accurate reporting. Regular reconciliation prevents small errors from becoming major problems.

**Professional Support:** Consider professional help for GST/HST compliance, especially during startup and growth phases. Professional guidance ensures compliance while optimizing benefits.

**Penalty Avoidance:**
**Timely Filing:** File returns and remit payments by due dates to avoid penalties and interest. Late filing penalties are significant and compound quickly.

**Accurate Reporting:** Ensure accurate reporting of sales and input tax credits. Errors can trigger audits and penalties even if unintentional.

**Voluntary Disclosure:** If you discover errors, use CRA's voluntary disclosure program to correct mistakes and potentially reduce penalties.

**Provincial Variations:**
Each province has different GST/HST rates and may have additional provincial sales tax requirements. Understand specific requirements for your operating provinces and ensure compliance with all applicable taxes.`,
      actionItems: [
        'Register for GST/HST if required or evaluate voluntary registration benefits for input tax credits',
        'Set up POS and accounting systems to automatically track GST/HST collection and input tax credits',
        'Establish quarterly filing and remittance procedures with calendar reminders and cash flow planning',
        'Create documentation and record keeping system meeting CRA requirements for audit support',
        'Research provincial tax requirements and ensure compliance with all applicable sales taxes'
      ],
      tips: [
        'Treat GST/HST collected as money held in trust for CRA - never spend it on business operations',
        'Claim input tax credits promptly and accurately - they improve cash flow and reduce tax burden',
        'File returns on time even if you can\'t pay immediately - late filing penalties are much higher than interest on late payments'
      ]
    },
    {
      icon: Calculator,
      title: 'Employee Tax Obligations & Payroll',
      priority: 'High',
      impact: 'Compliance & cost management',
      content: `Employee tax obligations and payroll management require systematic compliance with federal and provincial requirements. Proper payroll management protects your business while ensuring employee satisfaction and legal compliance.

**Payroll Tax Components:**
**Income Tax Withholding:** Withhold federal and provincial income tax from employee wages based on TD1 forms and CRA payroll tables. Withholding amounts vary by province and employee circumstances.

**Canada Pension Plan (CPP):** Both employer and employee contribute to CPP on employment income between $3,500 and $68,500 annually. CPP rates change annually and require accurate calculation and remittance.

**Employment Insurance (EI):** Employer and employee contribute to EI on employment income up to the annual maximum. EI rates and maximums change annually and vary by province.

**Workers' Compensation:** Provincial workers' compensation premiums are employer-paid and vary by province and industry classification. Food service operations typically have moderate premium rates.

**Payroll Registration and Setup:**
**Business Number (BN):** Obtain payroll accounts through your business number registration with CRA. Payroll accounts include RP (payroll deductions) and RC (workers' compensation where applicable).

**Provincial Registration:** Register with provincial authorities for workers' compensation, health taxes, and other provincial payroll obligations as required.

**Employee Documentation:** Collect TD1 forms (federal and provincial) from all employees to determine appropriate tax withholding amounts.

**Record Keeping Requirements:**
**Payroll Records:** Maintain detailed payroll records including hours worked, wages paid, deductions withheld, and net pay for each employee. Records must be kept for at least six years.

**Remittance Records:** Keep records of all payroll remittances including dates, amounts, and confirmation numbers. Remittance records support compliance and provide audit trails.

**T4 Preparation:** Prepare and distribute T4 slips to employees by February 28 and file T4 Summary with CRA. T4s report annual employment income and deductions.

**Remittance Frequency and Timing:**
**Monthly Remittance:** Most small employers remit payroll deductions monthly by the 15th of the following month. Consistent remittance prevents penalties and interest charges.

**Accelerated Remittance:** Larger employers may require accelerated remittance (twice monthly or quarterly) based on average monthly withholding amounts.

**Year-End Remittance:** Final remittance for the year is due January 15, along with any adjustments for annual maximums and corrections.

**Seasonal Employment Considerations:**
**Seasonal Layoffs:** Understand EI implications for seasonal layoffs common in food truck operations. Proper documentation supports employee EI claims and protects employer interests.

**Recall Procedures:** Develop procedures for recalling seasonal employees that comply with employment standards and maintain good relationships.

**Record of Employment (ROE):** Issue ROEs promptly when employees are laid off or terminated. Accurate ROEs support employee benefit claims and demonstrate compliance.

**Contractor vs Employee Classification:**
**Classification Criteria:** Understand CRA criteria for distinguishing employees from independent contractors. Misclassification can result in significant penalties and back payments.

**Control and Integration:** Employees are subject to employer control and integrated into business operations, while contractors maintain independence and provide services to multiple clients.

**Financial Risk:** Employees receive guaranteed wages while contractors bear financial risk for their services. Classification affects tax obligations and legal responsibilities.

**Technology and Payroll Services:**
**Payroll Software:** Use payroll software that calculates deductions accurately and provides remittance reporting. Software reduces errors and simplifies compliance.

**Payroll Service Providers:** Consider payroll service providers that handle calculations, remittances, and compliance for a fee. Services provide expertise and reduce administrative burden.

**Direct Deposit:** Implement direct deposit systems that provide convenience for employees while reducing administrative work and improving security.

**Compliance and Audit Preparation:**
**CRA Payroll Audits:** Prepare for potential payroll audits by maintaining complete, accurate records and ensuring compliance with all requirements.

**Provincial Compliance:** Ensure compliance with provincial employment standards including minimum wage, overtime, breaks, and termination requirements.

**Professional Support:** Consider professional payroll and HR support, especially as you hire more employees. Professional guidance ensures compliance and optimizes employee relations.

**Cost Management Strategies:**
**Wage Structure:** Design wage structures that balance competitiveness with cost control. Consider performance-based compensation and non-monetary benefits.

**Benefit Planning:** Plan employee benefits including health coverage, vacation pay, and other benefits required by provincial employment standards.

**Training Investment:** Invest in employee training to improve productivity and reduce turnover. Training costs are deductible and often provide positive ROI through improved performance.

**Canadian Employment Environment:**
Canadian employment law emphasizes employee protection and fair treatment. Build payroll and HR practices that exceed minimum requirements to attract and retain quality employees while maintaining compliance.`,
      actionItems: [
        'Register for payroll accounts and obtain necessary business numbers for employee tax obligations',
        'Set up payroll system calculating income tax, CPP, EI, and provincial deductions accurately',
        'Establish record keeping system for payroll records, remittances, and employee documentation',
        'Create remittance schedule and procedures ensuring timely compliance with all deadlines',
        'Research provincial employment standards and workers\' compensation requirements for your area'
      ],
      tips: [
        'Start with payroll software or services from day one - manual payroll calculation is error-prone and time-consuming',
        'Remit payroll deductions on time every month - penalties and interest add up quickly',
        'Keep detailed records of everything - payroll audits are common and require complete documentation'
      ]
    },
    {
      icon: Shield,
      title: 'Record Keeping Requirements & Audit Protection',
      priority: 'Critical',
      impact: 'Legal protection & compliance',
      content: `Comprehensive record keeping and audit protection strategies safeguard your business from legal issues while ensuring tax compliance and operational efficiency. Systematic record management provides legal protection and supports business growth.

**CRA Record Keeping Requirements:**
**Retention Periods:** Keep all business records for at least six years after the tax year they relate to. Some records may require longer retention for specific circumstances like capital assets or legal disputes.

**Supporting Documentation:** Maintain all supporting documentation including receipts, invoices, bank statements, contracts, and correspondence that support your tax filings and business decisions.

**Books and Records:** Keep books and records that clearly show your business income and expenses. Records must be organized, complete, and available for CRA review upon request.

**Language Requirements:** In some provinces, records may need to be kept in both English and French. Understand language requirements for your operating jurisdiction.

**Digital Record Keeping:**
**Electronic Records:** CRA accepts electronic records if they're accessible and readable throughout the retention period. Digital storage often provides better organization and protection than physical records.

**Backup and Security:** Implement backup systems that protect records from loss due to equipment failure, theft, or natural disasters. Cloud storage provides reliable backup and multi-location access.

**File Organization:** Create logical digital folder structures with consistent naming conventions. Organized digital files improve efficiency and reduce audit stress.

**Access Controls:** Implement appropriate access controls for sensitive financial records while ensuring authorized personnel can access needed information efficiently.

**Audit Preparation Strategies:**
**Documentation Standards:** Maintain documentation that meets professional standards for completeness, accuracy, and organization. Quality documentation demonstrates business professionalism and compliance commitment.

**Audit Trail Maintenance:** Ensure clear audit trails that connect transactions to supporting documentation and business activities. Complete audit trails support tax positions and business decisions.

**Regular Organization:** Organize records regularly rather than waiting for audit requests. Ongoing organization reduces stress and demonstrates systematic record keeping practices.

**Professional Relationships:** Maintain relationships with accounting and legal professionals who can provide guidance and representation during audits or compliance issues.

**Business-Specific Record Categories:**
**Sales and Revenue Records:** Maintain detailed sales records including daily sales summaries, customer invoices, payment records, and POS system reports. Sales records support income reporting and business analysis.

**Expense and Purchase Records:** Keep all receipts, invoices, and supporting documentation for business expenses. Expense records support deduction claims and cost analysis.

**Asset and Depreciation Records:** Maintain records for all business assets including purchase documents, depreciation schedules, and disposal records. Asset records support capital cost allowance claims.

**Employment Records:** Keep employee records including hiring documentation, payroll records, tax remittances, and termination records as required by employment law.

**Legal Protection Strategies:**
**Corporate Records:** If incorporated, maintain proper corporate records including articles of incorporation, bylaws, meeting minutes, and shareholder records as required by corporate law.

**Contract Management:** Organize contract files including supplier agreements, customer contracts, employment agreements, and service contracts. Proper contract management supports legal protection and business relationships.

**Insurance Documentation:** Maintain current insurance policies, claims documentation, and correspondence with insurance providers. Insurance records support claims and demonstrate coverage compliance.

**Permit and License Records:** Keep current copies of all permits, licenses, and regulatory approvals. Organized permit records simplify renewals and demonstrate compliance during inspections.

**Technology and Security Measures:**
**Cloud Storage Solutions:** Use reputable cloud storage solutions that provide security, backup, and access controls appropriate for financial records. Cloud solutions often provide better protection than local storage.

**Encryption and Security:** Implement security measures including password protection, encryption, and access controls that protect sensitive financial information from unauthorized access.

**Regular Backups:** Perform regular backups of all financial records and test recovery procedures to ensure data protection and business continuity.

**Software Integration:** Use accounting software that maintains proper audit trails and supports compliance reporting requirements.

**Audit Response Procedures:**
**Initial Response:** Respond promptly and professionally to audit requests or inquiries. Prompt response demonstrates cooperation and professionalism.

**Documentation Preparation:** Organize requested documentation systematically and provide complete, accurate information. Thorough preparation supports your tax positions and demonstrates compliance.

**Professional Representation:** Consider professional representation during audits, especially for complex issues or significant amounts. Professional representation often improves outcomes and reduces stress.

**Learning and Improvement:** Use audit experiences as learning opportunities to improve record keeping and compliance procedures. Audit feedback helps strengthen future compliance.

**Compliance Cost-Benefit Analysis:**
**Investment in Systems:** Invest in quality record keeping systems that provide long-term benefits through improved efficiency, compliance, and audit protection. Good systems pay for themselves through time savings and risk reduction.

**Professional Support:** Balance the cost of professional support with the benefits of expert guidance and compliance assurance. Professional help often prevents costly mistakes and penalties.

**Technology ROI:** Evaluate technology investments based on time savings, accuracy improvements, and compliance benefits. Modern systems often provide significant returns through efficiency gains.

**Canadian Compliance Environment:**
Canadian tax compliance emphasizes voluntary compliance supported by comprehensive record keeping. Build record keeping practices that exceed minimum requirements to demonstrate good faith compliance and business professionalism.`,
      actionItems: [
        'Establish comprehensive record retention system meeting CRA six-year requirement with organized filing',
        'Implement digital record keeping system with backup, security, and access control measures',
        'Create audit preparation procedures with documentation standards and professional support relationships',
        'Organize business-specific record categories for sales, expenses, assets, and employment documentation',
        'Design legal protection strategy with corporate records, contracts, and insurance documentation'
      ],
      tips: [
        'Organize records as you go rather than waiting for year-end or audit requests - ongoing organization saves time and stress',
        'Scan important documents immediately and store both digital and physical copies for critical records',
        'Invest in quality record keeping systems from the start - it\'s much harder to organize records retroactively'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Tax Planning & Optimization Strategies',
      priority: 'High',
      impact: 'Strategic tax savings',
      content: `Strategic tax planning and optimization reduce your overall tax burden while supporting business growth and cash flow management. Proactive tax strategies provide competitive advantages and improve profitability.

**Business Structure Optimization:**
**Sole Proprietorship vs Corporation:** Evaluate whether incorporation provides tax benefits based on your income level and business goals. Corporations benefit from small business deduction rates (11-27%) compared to personal rates (up to 53%).

**Income Splitting Opportunities:** Legitimate income splitting with family members who contribute to the business can reduce overall family tax burden through lower marginal rates.

**Salary vs Dividend Optimization:** If incorporated, optimize the mix of salary and dividends to minimize total tax burden while maximizing benefits like RRSP contribution room.

**Timing Strategies:**
**Income Timing:** Control the timing of income recognition through invoicing timing, payment collection, and contract structuring. Income timing can shift tax obligations between years for optimization.

**Expense Timing:** Time major equipment purchases and expenses to optimize tax benefits. Year-end purchases may provide immediate deductions when beneficial for current year tax planning.

**Capital Asset Planning:** Plan capital asset purchases and disposals to optimize capital cost allowance claims and potential capital gains treatment.

**Retirement Planning Integration:** Time RRSP contributions and retirement planning to optimize tax benefits while building long-term financial security.

**Advanced Deduction Strategies:**
**Scientific Research and Experimental Development (SR&ED):** Menu development, process improvement, and technology implementation may qualify for SR&ED tax credits providing additional tax benefits.

**Capital Cost Allowance Optimization:** Understand different CCA classes and rates to optimize depreciation timing. Some assets qualify for accelerated depreciation or immediate expensing.

**Small Business Financing:** Explore financing structures that provide tax benefits including equipment leasing, which may offer better tax treatment than purchases.

**Professional Development Investment:** Invest in professional development and training that provides immediate tax deductions while building business capabilities.

**Provincial Tax Optimization:**
**Provincial Variations:** Understand provincial tax differences and plan operations to optimize provincial tax burden where legally possible.

**Provincial Credits:** Research provincial tax credits including small business credits, training credits, and industry-specific incentives that reduce overall tax burden.

**Multi-Provincial Planning:** If operating in multiple provinces, understand tax implications and optimize structure for multi-provincial operations.

**Regional Development Incentives:** Explore regional development incentives and grants that may provide tax benefits or direct financial support.

**Cash Flow and Tax Integration:**
**Tax Reserve Planning:** Build tax reserves during profitable periods to cover tax obligations during slower periods. Tax planning supports cash flow management and business stability.

**Installment Optimization:** Optimize quarterly installment payments to balance cash flow with compliance requirements. Strategic installment planning improves working capital management.

**GST/HST Planning:** Use GST/HST registration and input tax credit timing to optimize cash flow while maintaining compliance.

**Seasonal Tax Planning:** Plan tax strategies around seasonal business patterns common in Canadian food truck operations.

**Growth and Investment Planning:**
**Expansion Tax Planning:** Plan business expansion and investment timing to optimize tax benefits and cash flow impact. Strategic expansion timing can provide significant tax advantages.

**Equipment Replacement:** Plan equipment replacement and upgrade timing to optimize depreciation benefits and operational efficiency.

**Market Development:** Structure market development and expansion activities to maximize available tax benefits and incentives.

**Exit Strategy Planning:** Consider long-term exit strategy implications in current tax planning to optimize eventual business sale or transfer benefits.

**Professional Tax Planning:**
**Annual Tax Planning:** Conduct annual tax planning sessions with qualified professionals to identify optimization opportunities and implement strategies.

**Quarterly Reviews:** Review tax position quarterly to identify mid-year optimization opportunities and adjust strategies based on actual performance.

**Multi-Year Planning:** Develop multi-year tax strategies that optimize benefits across multiple years rather than focusing only on current year optimization.

**Compliance Integration:** Ensure tax optimization strategies maintain full compliance with all applicable laws and regulations.

**Risk Management:**
**Audit Risk Assessment:** Evaluate audit risk associated with tax strategies and maintain appropriate documentation and professional support.

**Conservative Approaches:** Balance aggressive tax planning with conservative approaches that provide sustainable benefits without excessive audit risk.

**Professional Guidance:** Work with qualified tax professionals who understand food service industry issues and can provide appropriate guidance and representation.

**Documentation Standards:** Maintain documentation that supports all tax positions and strategies to provide audit protection and compliance demonstration.

**Canadian Tax Environment:**
Canadian tax law provides numerous opportunities for legitimate tax optimization while maintaining strong compliance requirements. Build tax strategies that take advantage of available benefits while demonstrating good faith compliance with all requirements.`,
      actionItems: [
        'Evaluate business structure optimization opportunities with professional tax advice and analysis',
        'Develop timing strategies for income and expense recognition with quarterly review procedures',
        'Research advanced deduction opportunities including SR&ED credits and provincial incentives',
        'Create integrated cash flow and tax planning system with reserve building and installment optimization',
        'Establish annual tax planning process with professional support and multi-year strategy development'
      ],
      tips: [
        'Tax planning should be done throughout the year, not just at year-end - proactive planning provides more opportunities',
        'Always maintain full compliance while optimizing - aggressive strategies that risk penalties aren\'t worth the savings',
        'Document the business purpose for all tax strategies to support your positions during potential audits'
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
    <section ref={sectionRef} id="tax-considerations-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Tax Considerations & <span className="text-primary-500">Planning</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Navigate food truck tax requirements and maximize your deductions legally. Learn strategic tax planning and compliance strategies for Canadian food truck operations.
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
                                Tax Considerations Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've mastered tax considerations and planning for food truck operations. You now have the knowledge to maximize deductions and maintain compliance.
                              </p>
                              <Link
                                to="/financial-management/profit-optimization"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Next: Profit Optimization
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

export default TaxConsiderationsLesson;