import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Calculator, FileText, TrendingUp, Shield, RefreshCw, CheckCircle, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BookkeepingBasicsLesson: React.FC = () => {
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
      icon: BookOpen,
      title: 'Chart of Accounts Setup & Organization',
      priority: 'Critical',
      impact: 'Foundation for all tracking',
      content: `A well-organized chart of accounts is the foundation of effective bookkeeping for your food truck business. This systematic organization of your financial accounts enables accurate tracking, reporting, and tax preparation while simplifying daily record-keeping.

**Understanding Chart of Accounts Structure:**
Your chart of accounts organizes all financial transactions into logical categories that reflect your food truck's unique operations. Unlike traditional restaurants, food trucks have specific account needs including mobile equipment, fuel costs, commissary fees, and location-based revenue tracking.

**Asset Accounts - What You Own:**
**Current Assets:** Cash accounts (checking, savings, petty cash), accounts receivable from catering clients, inventory (food, supplies, packaging), and prepaid expenses like insurance or permits paid in advance.

**Fixed Assets:** Your food truck or trailer, kitchen equipment, POS systems, generators, and any other equipment with useful life over one year. Track original cost and accumulated depreciation separately.

**Liability Accounts - What You Owe:**
**Current Liabilities:** Accounts payable to suppliers, credit card balances, accrued wages, sales tax payable, and short-term loan payments due within one year.

**Long-Term Liabilities:** Equipment loans, truck financing, and any other debts with payment terms exceeding one year.

**Equity Accounts - Owner's Investment:**
**Owner's Equity:** Initial investment, additional capital contributions, and retained earnings from business operations.

**Revenue Accounts - Income Sources:**
**Sales Revenue:** Organize by location type (business district, events, catering), service type (regular menu, catering, special events), or time period for better analysis.

**Other Income:** Interest earned, equipment rental income, or any non-food revenue sources.

**Expense Accounts - Operating Costs:**
**Cost of Goods Sold (COGS):** Food costs, beverage costs, packaging, and disposable supplies directly related to menu items.

**Operating Expenses:** Fuel, commissary fees, permits and licenses, insurance, equipment maintenance, marketing, professional fees, and utilities.

**Canadian-Specific Account Considerations:**
**GST/HST Accounts:** Separate accounts for GST/HST collected from customers and GST/HST paid on purchases to simplify tax reporting and remittance.

**Provincial Tax Accounts:** Accounts for provincial sales taxes where applicable, employment insurance, Canada Pension Plan contributions, and workers' compensation premiums.

**Seasonal Considerations:** Consider separate accounts or sub-accounts for seasonal expenses like winterization, storage, and off-season maintenance.

**Account Numbering System:**
Implement a logical numbering system that groups related accounts and allows for future expansion. Common systems use ranges like 1000-1999 for assets, 2000-2999 for liabilities, 3000-3999 for equity, 4000-4999 for revenue, and 5000-9999 for expenses.

**Software Integration:**
Choose accounting software that accommodates food truck operations including mobile access, inventory tracking, and multi-location reporting. Popular options include QuickBooks, Xero, and Wave, each offering different features and pricing structures.

**Regular Review and Maintenance:**
Review your chart of accounts quarterly to ensure it meets your evolving business needs. Add new accounts as needed but avoid creating too many detailed accounts that complicate daily bookkeeping without providing meaningful insights.`,
      actionItems: [
        'Choose accounting software appropriate for food truck operations with mobile access capabilities',
        'Create comprehensive chart of accounts covering all asset, liability, equity, revenue, and expense categories',
        'Set up GST/HST tracking accounts and provincial tax accounts as required',
        'Implement logical account numbering system allowing for future expansion',
        'Test chart of accounts with sample transactions to ensure proper categorization'
      ],
      tips: [
        'Start with a simple chart of accounts and add complexity as your business grows - too many accounts initially creates confusion',
        'Use consistent naming conventions that make sense to you and any future bookkeeper or accountant',
        'Keep personal and business accounts completely separate from day one - mixing accounts creates tax and legal complications'
      ]
    },
    {
      icon: Calculator,
      title: 'Daily Sales Recording & Transaction Management',
      priority: 'Critical',
      impact: 'Accurate financial tracking',
      content: `Systematic daily sales recording ensures accurate financial tracking and provides the data foundation for business analysis and tax compliance. Consistent daily practices prevent errors and simplify month-end procedures.

**Daily Sales Recording Procedures:**
**End-of-Day Sales Summary:** Record total daily sales from your POS system, breaking down by payment method (cash, credit, debit) and sales category (food, beverages, catering). This summary becomes your daily sales journal entry.

**Cash Reconciliation:** Count and record cash on hand, comparing to POS cash sales plus opening cash balance minus any cash expenses or deposits. Investigate and document any discrepancies immediately.

**Credit Card Processing:** Record credit card sales and track processing fees separately. Most processors deposit net amounts, so record gross sales and processing fees as separate transactions.

**Transaction Documentation:**
**Receipt Management:** Maintain organized receipt systems for all business transactions including supplier purchases, fuel, equipment, and operational expenses. Digital receipt storage prevents loss and simplifies organization.

**Invoice Tracking:** Track customer invoices for catering and special events, recording when invoices are sent and payments received. Accounts receivable tracking ensures timely collection and cash flow management.

**Expense Recording:** Record all business expenses daily including fuel, supplies, commissary fees, and equipment purchases. Immediate recording prevents forgotten expenses and ensures complete tax deductions.

**Multi-Location Tracking:**
**Location-Based Revenue:** If operating multiple locations, track sales by location to analyze performance and optimize route planning. Location tracking reveals profitable areas and improvement opportunities.

**Event and Catering Revenue:** Separately track event and catering revenue to analyze profitability and growth opportunities in these higher-margin services.

**Seasonal Revenue Patterns:** Track seasonal revenue patterns to improve forecasting and cash flow planning for Canadian climate variations.

**Payment Method Analysis:**
**Cash vs Card Trends:** Monitor payment method trends to optimize POS setup and cash management procedures. Understanding customer payment preferences improves service efficiency.

**Processing Fee Management:** Track credit card processing fees as percentage of sales to negotiate better rates and understand true net revenue.

**Digital Payment Integration:** Record digital payments from apps, online ordering, and contactless systems accurately to maintain complete sales records.

**Daily Reconciliation Procedures:**
**POS System Reconciliation:** Reconcile POS system reports with actual cash and card deposits to ensure accuracy and identify any system issues or training needs.

**Inventory Impact Recording:** Record inventory usage and waste to maintain accurate cost of goods sold calculations and identify improvement opportunities.

**Tip and Gratuity Tracking:** If applicable, track tips and gratuities separately for proper tax reporting and staff compensation management.

**Error Prevention and Correction:**
**Double-Entry Verification:** Use double-entry bookkeeping principles to verify transaction accuracy and maintain balanced books.

**Regular Backup Procedures:** Backup financial data daily to prevent loss and ensure business continuity. Cloud-based systems provide automatic backup and access from multiple devices.

**Correction Procedures:** Establish procedures for correcting errors that maintain audit trails and comply with accounting standards.

**Canadian Compliance Considerations:**
**GST/HST Recording:** Record GST/HST collected separately from sales revenue to simplify tax remittance and compliance reporting.

**Provincial Tax Compliance:** Track provincial sales taxes where applicable and ensure proper remittance procedures.

**CRA Requirements:** Maintain records that meet Canada Revenue Agency requirements for completeness, accuracy, and retention periods.`,
      actionItems: [
        'Establish daily sales recording procedures with POS reconciliation and cash management',
        'Create organized receipt and invoice tracking systems with digital storage capabilities',
        'Implement multi-location and payment method tracking for comprehensive revenue analysis',
        'Set up daily reconciliation procedures with error prevention and correction protocols',
        'Design backup and data protection systems ensuring business continuity and compliance'
      ],
      tips: [
        'Record transactions daily rather than weekly - daily habits prevent errors and forgotten expenses',
        'Use your smartphone to photograph receipts immediately if you can\'t enter them right away',
        'Reconcile your bank accounts weekly to catch errors early and maintain accurate cash flow tracking'
      ]
    },
    {
      icon: FileText,
      title: 'Expense Categorization & Tax Deduction Optimization',
      priority: 'High',
      impact: 'Maximize tax savings',
      content: `Proper expense categorization ensures maximum tax deductions while maintaining compliance with Canada Revenue Agency requirements. Strategic expense management can significantly reduce your tax burden and improve cash flow.

**Business Expense Categories:**
**Vehicle and Transportation Expenses:** Fuel, maintenance, repairs, insurance, licensing, and depreciation for your food truck. Track business vs personal use percentage if the vehicle serves dual purposes.

**Food and Inventory Costs:** All ingredients, beverages, packaging, and disposable supplies used in food preparation and service. These costs directly reduce taxable income and should be tracked meticulously.

**Equipment and Supplies:** Kitchen equipment, POS systems, cleaning supplies, uniforms, and small tools. Distinguish between capital purchases (depreciated over time) and operating supplies (immediately deductible).

**Professional Services:** Accounting, legal, consulting, and other professional fees related to business operations. Professional development and training costs are also deductible business expenses.

**Canadian Tax Deduction Strategies:**
**Home Office Deductions:** If you use part of your home for business administration, you can deduct a reasonable portion of home expenses including utilities, property taxes, and maintenance.

**Meal and Entertainment:** Business meals are 50% deductible in Canada. Track meals with suppliers, staff training sessions, and business development activities separately from personal meals.

**Travel and Accommodation:** Business travel expenses including accommodation, meals, and transportation for trade shows, training, or business development are fully deductible.

**Capital Cost Allowance (CCA):** Major equipment purchases are depreciated over time using CCA rates set by CRA. Understand which assets qualify for immediate expensing vs depreciation.

**Expense Documentation Requirements:**
**Receipt Requirements:** Maintain original receipts for all business expenses. Digital copies are acceptable if they're clear and complete. Receipts must show date, vendor, amount, and business purpose.

**Mileage Logs:** Keep detailed mileage logs for business vehicle use including date, destination, purpose, and kilometers driven. Accurate logs support vehicle expense deductions.

**Business Purpose Documentation:** Document the business purpose for all expenses, especially meals, entertainment, and travel. Clear business purpose justification supports deduction claims.

**Credit Card and Bank Statement Organization:** Organize credit card and bank statements to clearly identify business vs personal expenses. Separate business accounts simplify this process significantly.

**Timing and Cash Flow Optimization:**
**Expense Timing:** Time major equipment purchases and expenses to optimize tax benefits and cash flow. Year-end purchases may provide immediate tax benefits.

**Prepaid Expense Strategy:** Consider prepaying certain expenses like insurance or permits to accelerate deductions when beneficial for tax planning.

**Installment Purchase Planning:** Structure equipment purchases to optimize cash flow and tax benefits through financing or lease arrangements.

**Quarterly Expense Review:** Review expenses quarterly to identify optimization opportunities and ensure proper categorization for tax planning.

**Technology and Automation:**
**Expense Tracking Apps:** Use expense tracking apps that integrate with your accounting software and provide receipt scanning capabilities. Automation reduces manual effort and improves accuracy.

**Bank Integration:** Connect bank accounts and credit cards to accounting software for automatic transaction import and categorization. Integration reduces data entry and improves timeliness.

**Recurring Expense Setup:** Set up recurring expenses for regular payments like insurance, permits, and subscriptions to ensure consistent recording and prevent missed deductions.

**Audit Trail Maintenance:** Maintain clear audit trails that connect expenses to business activities and support deduction claims during potential CRA reviews.

**Common Deduction Mistakes to Avoid:**
**Personal vs Business:** Never claim personal expenses as business deductions. Clear separation prevents costly penalties and audit issues.

**Inadequate Documentation:** Insufficient documentation can result in denied deductions. Maintain complete records that clearly establish business purpose and necessity.

**Timing Errors:** Record expenses in the correct tax year and understand cash vs accrual accounting implications for your business structure.

**Overlooked Deductions:** Many food truck operators miss legitimate deductions like professional development, industry publications, and business insurance. Review all potential deductions annually.`,
      actionItems: [
        'Create comprehensive expense categorization system aligned with CRA requirements and tax optimization',
        'Establish documentation procedures for receipts, mileage logs, and business purpose records',
        'Implement technology solutions for expense tracking, receipt scanning, and bank integration',
        'Design quarterly expense review process with tax planning and optimization analysis',
        'Develop audit trail maintenance system ensuring compliance and deduction support'
      ],
      tips: [
        'When in doubt about an expense deduction, consult with an accountant - the cost of advice is usually less than missed deductions or penalties',
        'Keep a small notebook or phone app to immediately record business purpose for expenses - memory fades quickly',
        'Review your expense categories annually to ensure you\'re capturing all legitimate business deductions'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Financial Reporting & Analysis',
      priority: 'High',
      impact: 'Informed decision making',
      content: `Regular financial reporting and analysis provide insights for strategic decision-making and performance improvement. Systematic reporting helps identify trends, opportunities, and potential problems before they impact business success.

**Essential Financial Reports:**
**Profit and Loss Statement (Income Statement):** Monthly P&L statements show revenue, expenses, and net profit over specific periods. Compare monthly results to identify trends and seasonal patterns affecting profitability.

**Balance Sheet:** Quarterly balance sheets show assets, liabilities, and equity at specific points in time. Balance sheets reveal financial position and help track business growth and debt management.

**Cash Flow Statement:** Monthly cash flow statements track cash receipts and payments, revealing actual cash position and identifying potential cash flow problems before they occur.

**Budget vs Actual Reports:** Compare actual performance to budgeted expectations to identify variances and adjust operations or expectations accordingly.

**Key Performance Indicators (KPIs):**
**Financial Ratios:** Calculate and track key ratios including gross profit margin, net profit margin, current ratio, and debt-to-equity ratio. Ratios provide context for financial performance and comparison to industry benchmarks.

**Revenue per Customer:** Track average revenue per customer to measure pricing effectiveness and upselling success. Increasing revenue per customer improves profitability without increasing customer acquisition costs.

**Cost Percentages:** Monitor food cost percentage, labor cost percentage, and overhead percentage to identify cost control opportunities and maintain profitability targets.

**Return on Investment (ROI):** Calculate ROI for major investments including equipment purchases, marketing campaigns, and expansion initiatives to guide future investment decisions.

**Trend Analysis and Forecasting:**
**Seasonal Pattern Recognition:** Analyze seasonal revenue and expense patterns to improve forecasting and cash flow planning. Canadian food trucks often have distinct seasonal patterns requiring careful planning.

**Growth Trend Analysis:** Track growth trends in revenue, customer count, and profitability to assess business trajectory and identify acceleration or deceleration factors.

**Expense Trend Monitoring:** Monitor expense trends to identify cost increases and implement control measures before they significantly impact profitability.

**Market Condition Impact:** Analyze how external factors like weather, economic conditions, and competition affect financial performance to improve planning and response strategies.

**Comparative Analysis:**
**Year-over-Year Comparison:** Compare current performance to previous years to assess growth and identify improvement areas. Year-over-year analysis reveals long-term trends and business development.

**Industry Benchmarking:** Compare your financial performance to food truck industry benchmarks to understand relative performance and identify improvement opportunities.

**Location Performance Comparison:** If operating multiple locations, compare performance between sites to identify best practices and optimization opportunities.

**Service Type Analysis:** Compare profitability between regular service, catering, and events to optimize service mix and resource allocation.

**Management Reporting and Decision Support:**
**Executive Dashboard:** Create executive dashboards that provide at-a-glance views of critical financial metrics. Visual dashboards make complex data more accessible and actionable.

**Exception Reporting:** Implement exception reporting that highlights significant variances or concerning trends requiring management attention. Exception reports focus attention on priority issues.

**Scenario Analysis:** Conduct scenario analysis for major decisions including expansion, equipment purchases, and strategic changes. Scenario analysis helps evaluate options and potential outcomes.

**Investment Analysis:** Analyze potential investments using financial metrics including payback period, net present value, and internal rate of return to guide capital allocation decisions.

**Technology and Automation:**
**Automated Report Generation:** Use accounting software features that automatically generate standard reports on scheduled basis. Automation ensures consistent reporting without manual effort.

**Real-Time Dashboards:** Implement real-time financial dashboards that provide current performance visibility and enable immediate response to issues or opportunities.

**Integration with Operations:** Integrate financial reporting with operational systems to connect financial performance with operational activities and decisions.

**Mobile Access:** Ensure financial reports are accessible via mobile devices for real-time decision-making and performance monitoring while operating the truck.

**Canadian Reporting Considerations:**
**CRA Compliance:** Ensure financial reports support CRA requirements for business income reporting and tax compliance. Proper reporting simplifies tax preparation and audit support.

**Provincial Requirements:** Understand provincial reporting requirements for sales tax, employment standards, and business registration compliance.

**Multi-Currency Considerations:** If operating near borders or serving international customers, consider multi-currency reporting and exchange rate impact analysis.`,
      actionItems: [
        'Establish monthly financial reporting schedule with P&L, balance sheet, and cash flow statements',
        'Create KPI tracking system with financial ratios, revenue metrics, and cost percentages',
        'Implement trend analysis and forecasting procedures with seasonal and growth pattern recognition',
        'Design comparative analysis framework with benchmarking and performance comparison',
        'Set up automated reporting and dashboard systems with mobile access and real-time visibility'
      ],
      tips: [
        'Review financial reports monthly, not just at tax time - regular review enables proactive management and problem prevention',
        'Focus on trends rather than individual month performance - trends reveal the true direction of your business',
        'Use financial reports to celebrate successes with your team and identify specific areas for improvement'
      ]
    },
    {
      icon: Shield,
      title: 'Record Keeping & Compliance Management',
      priority: 'Critical',
      impact: 'Legal protection & audit readiness',
      content: `Proper record keeping and compliance management protect your business from legal issues while ensuring audit readiness and tax compliance. Systematic record management simplifies operations and provides legal protection.

**Record Retention Requirements:**
**CRA Requirements:** Canada Revenue Agency requires businesses to keep records for at least six years after the tax year they relate to. Some records may need longer retention for specific circumstances.

**Supporting Documentation:** Maintain all supporting documentation including receipts, invoices, bank statements, contracts, and correspondence that support your financial records and tax filings.

**Digital vs Physical Records:** CRA accepts digital records if they're accessible and readable throughout the retention period. Digital storage often provides better organization and protection than physical records.

**Backup and Recovery:** Implement backup systems that protect records from loss due to equipment failure, theft, or natural disasters. Cloud storage provides reliable backup and access from multiple locations.

**Organized Filing Systems:**
**Document Categories:** Organize records by category including sales records, expense receipts, bank statements, tax filings, contracts, and correspondence. Clear categorization simplifies retrieval and compliance.

**Chronological Organization:** Within categories, organize documents chronologically to simplify searching and provide clear audit trails for transactions and decisions.

**Digital Filing Structure:** Create logical digital folder structures that mirror physical filing systems. Consistent naming conventions and folder structures improve efficiency and reduce errors.

**Access Control:** Implement access controls for sensitive financial records while ensuring authorized personnel can access needed information efficiently.

**Compliance Documentation:**
**Tax Filing Records:** Maintain copies of all tax filings including income tax returns, GST/HST returns, payroll remittances, and supporting schedules. Tax records support compliance and provide reference for future filings.

**Permit and License Records:** Keep current copies of all permits, licenses, and regulatory approvals. Organized permit records simplify renewals and demonstrate compliance during inspections.

**Employment Records:** Maintain employee records including hiring documentation, payroll records, tax remittances, and workers' compensation filings as required by provincial employment standards.

**Insurance Documentation:** Keep current insurance policies, claims documentation, and correspondence with insurance providers. Insurance records support claims and demonstrate coverage compliance.

**Audit Preparation and Support:**
**Audit Trail Maintenance:** Maintain clear audit trails that connect transactions to supporting documentation and business activities. Complete audit trails support tax positions and business decisions.

**Documentation Standards:** Establish documentation standards that ensure completeness, accuracy, and professional presentation. Quality documentation demonstrates business professionalism and compliance commitment.

**Professional Support:** Maintain relationships with accounting and legal professionals who can provide guidance and support during audits or compliance issues.

**Response Procedures:** Develop procedures for responding to CRA inquiries, audits, or other regulatory requests. Prepared responses demonstrate compliance and professionalism.

**Technology and Security:**
**Cloud Storage Solutions:** Use reputable cloud storage solutions that provide security, backup, and access controls appropriate for financial records. Cloud solutions often provide better protection than local storage.

**Security Measures:** Implement security measures including password protection, encryption, and access controls that protect sensitive financial information from unauthorized access.

**Regular Backups:** Perform regular backups of all financial records and test recovery procedures to ensure data protection and business continuity.

**Software Integration:** Use accounting software that maintains proper audit trails and supports compliance reporting requirements.

**Legal Protection Strategies:**
**Corporate Records:** If incorporated, maintain proper corporate records including articles of incorporation, bylaws, meeting minutes, and shareholder records as required by corporate law.

**Contract Management:** Maintain organized contract files including supplier agreements, customer contracts, employment agreements, and service contracts. Proper contract management supports legal protection and business relationships.

**Intellectual Property Records:** Keep records of trademarks, copyrights, trade secrets, and other intellectual property that protect your business assets and competitive advantages.

**Liability Documentation:** Maintain documentation that supports liability protection including insurance coverage, safety procedures, and compliance activities.

**Canadian Compliance Specifics:**
**Provincial Variations:** Understand that record keeping requirements may vary between provinces for employment, sales tax, and business registration compliance.

**Bilingual Requirements:** In some provinces, certain records may need to be maintained in both English and French. Understand language requirements for your operating jurisdiction.

**Privacy Legislation:** Comply with provincial privacy legislation for customer and employee records including collection, storage, and disposal requirements.

**Industry-Specific Requirements:** Food service businesses may have additional record keeping requirements for health department compliance, food safety, and equipment maintenance.`,
      actionItems: [
        'Establish comprehensive record retention system meeting CRA requirements with digital and physical organization',
        'Create organized filing systems with clear categorization, chronological order, and access controls',
        'Implement compliance documentation procedures for tax, permit, employment, and insurance records',
        'Design audit preparation system with trail maintenance and professional support relationships',
        'Set up technology and security measures with cloud storage, backups, and protection protocols'
      ],
      tips: [
        'Invest in good record keeping systems from the start - it\'s much harder to organize records retroactively',
        'Scan important documents immediately and store both digital and physical copies for critical records',
        'Review and update your record keeping procedures annually to ensure they meet current requirements and business needs'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Monthly Reconciliation & Review Procedures',
      priority: 'High',
      impact: 'Accuracy & error prevention',
      content: `Monthly reconciliation and review procedures ensure accuracy, identify errors, and provide regular business performance assessment. Systematic monthly procedures prevent small problems from becoming major issues while providing management insights.

**Bank Reconciliation Procedures:**
**Monthly Bank Statement Review:** Compare bank statements to accounting records to identify discrepancies, timing differences, and errors. Bank reconciliation ensures accurate cash position and identifies unauthorized transactions.

**Outstanding Items Tracking:** Track outstanding checks, deposits in transit, and bank fees to maintain accurate cash balances. Outstanding items require follow-up to ensure proper clearing and cash flow management.

**Credit Card Reconciliation:** Reconcile credit card statements with recorded transactions to ensure accuracy and identify any fraudulent or unauthorized charges. Credit card reconciliation protects against fraud and ensures complete expense recording.

**Electronic Payment Verification:** Verify electronic payments including automatic withdrawals, online transfers, and payment processor deposits to ensure accuracy and proper recording.

**Account Balance Verification:**
**Asset Account Review:** Review all asset accounts including cash, accounts receivable, inventory, and equipment to ensure accurate balances and proper valuation.

**Liability Account Review:** Review liability accounts including accounts payable, credit cards, loans, and accrued expenses to ensure complete recording and accurate balances.

**Equity Account Analysis:** Review equity accounts to ensure proper recording of owner investments, withdrawals, and retained earnings.

**Revenue and Expense Analysis:** Analyze revenue and expense accounts for unusual items, errors, or trends requiring management attention.

**Financial Performance Review:**
**Monthly Profit Analysis:** Review monthly profit performance compared to budget, previous months, and previous year to identify trends and performance issues.

**Cost Analysis:** Analyze cost categories including food costs, labor costs, and overhead to identify increases or optimization opportunities.

**Cash Flow Assessment:** Assess monthly cash flow including receipts, payments, and ending cash position to identify potential cash flow issues or opportunities.

**Key Metric Calculation:** Calculate key performance metrics including profit margins, cost percentages, and efficiency ratios to track business performance.

**Error Detection and Correction:**
**Transaction Review:** Review unusual or large transactions to ensure proper recording and business purpose. Unusual transactions may indicate errors or require additional documentation.

**Account Balance Analysis:** Analyze account balances for reasonableness and consistency with business operations. Unusual balances may indicate errors or missing transactions.

**Variance Investigation:** Investigate significant variances between expected and actual results to identify causes and corrective actions.

**Correction Procedures:** Implement proper correction procedures that maintain audit trails and comply with accounting standards.

**Compliance and Tax Preparation:**
**GST/HST Reconciliation:** Reconcile GST/HST collected and paid to ensure accurate reporting and remittance. GST/HST reconciliation prevents compliance issues and penalties.

**Payroll Tax Review:** Review payroll tax calculations and remittances to ensure accuracy and compliance with employment tax requirements.

**Expense Deduction Review:** Review expense deductions to ensure proper categorization and documentation for tax purposes.

**Year-End Preparation:** Use monthly reviews to prepare for year-end procedures and identify any issues requiring resolution before year-end.

**Management Reporting and Decision Support:**
**Monthly Management Reports:** Prepare monthly management reports that summarize financial performance, key metrics, and significant issues requiring attention.

**Trend Analysis:** Analyze trends in revenue, expenses, and profitability to identify patterns and guide strategic decisions.

**Budget Variance Analysis:** Compare actual results to budget expectations and analyze variances to improve future budgeting and operations.

**Action Item Identification:** Identify specific action items based on monthly review findings and assign responsibility for implementation.

**Technology and Efficiency:**
**Automated Reconciliation:** Use accounting software features that automate bank reconciliation and identify discrepancies. Automation reduces manual effort while improving accuracy.

**Exception Reporting:** Implement exception reporting that highlights unusual transactions or account balances requiring review. Exception reports focus attention on priority items.

**Dashboard Updates:** Update financial dashboards with monthly results to provide ongoing performance visibility and trend analysis.

**Process Improvement:** Regularly evaluate and improve monthly procedures to increase efficiency while maintaining accuracy and compliance.

**Canadian Monthly Considerations:**
**Provincial Tax Remittances:** Include provincial tax remittances and reconciliation in monthly procedures where applicable.

**Seasonal Adjustments:** Adjust monthly procedures for seasonal business patterns common in Canadian food truck operations.

**Currency Considerations:** If dealing with multiple currencies, include currency reconciliation and exchange rate impact analysis in monthly procedures.

**Regulatory Updates:** Stay current with regulatory changes that might affect monthly procedures and compliance requirements.`,
      actionItems: [
        'Establish monthly bank and credit card reconciliation procedures with discrepancy investigation',
        'Create account balance verification system with asset, liability, and equity review procedures',
        'Implement monthly financial performance review with profit analysis and key metric calculation',
        'Design error detection and correction procedures with variance investigation and audit trail maintenance',
        'Set up compliance and tax preparation procedures with GST/HST reconciliation and year-end preparation'
      ],
      tips: [
        'Complete monthly reconciliation within 10 days of month-end while transactions are still fresh in memory',
        'Use monthly reviews to identify and address small problems before they become major issues',
        'Create monthly review checklists to ensure consistency and prevent overlooking important items'
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
    <section ref={sectionRef} id="bookkeeping-basics-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Bookkeeping <span className="text-primary-500">Basics</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Master the fundamentals of food truck bookkeeping to stay organized and compliant. Learn systematic approaches to recording, organizing, and managing your financial records.
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
                                Bookkeeping Basics Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've mastered bookkeeping basics for food truck operations. You now have the foundation for accurate financial tracking and tax compliance.
                              </p>
                              <Link
                                to="/financial-management/cash-flow"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Next: Cash Flow Management
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

export default BookkeepingBasicsLesson;