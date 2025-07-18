import React, { useState } from 'react';
import { Check, ChevronRight, AlertTriangle, Shield, FileText, Building, MapPin, RefreshCw } from 'lucide-react';

interface ActionItem {
  id: string;
  text: string;
  completed: boolean;
}

interface Step {
  id: number;
  title: string;
  content: string;
  proTip: string;
  priority: 'Critical' | 'High' | 'Medium';
  cost: string;
  timeframe: string;
  actions: ActionItem[];
}

const LegalRequirementsLesson: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<Step[]>([
    {
      id: 1,
      title: "Business Structure & Registration",
      priority: "Critical",
      cost: "$200 - $800",
      timeframe: "1-2 weeks",
      content: `Before you can legally operate your food truck, you need to establish your business as a legal entity. This foundational step protects your personal assets and provides credibility with suppliers, customers, and financial institutions.

**Why Business Structure Matters:**
Most successful food truck operators choose an LLC (Limited Liability Company) or incorporate federally because it offers personal asset protection while maintaining operational flexibility. Unlike corporations, LLCs have fewer reporting requirements and allow profits to pass through to your personal tax return.

**The Registration Process:**
Start by choosing and reserving your business name through your provincial corporate registry. Ensure the name isn't already taken and consider securing matching domain names for future marketing. Next, file your Articles of Incorporation or Organization and create an Operating Agreement that outlines ownership structure and operational procedures.

**Federal Requirements:**
Obtain a Business Number (BN) from the Canada Revenue Agency (CRA), even if you don't plan to hire employees immediately. This number is required for business banking, tax filings, and many permit applications. The process is free when done directly through the CRA website.`,
      proTip: "Register your business in your home province unless you plan to operate exclusively in another province. Federal incorporation is typically unnecessary for small food truck operations and adds complexity.",
      actions: [
        { id: "1-1", text: "Research and reserve your business name", completed: false },
        { id: "1-2", text: "File Articles of Incorporation with your province", completed: false },
        { id: "1-3", text: "Obtain Business Number (BN) from CRA (free online)", completed: false },
        { id: "1-4", text: "Create Operating Agreement", completed: false },
        { id: "1-5", text: "Open business bank account", completed: false }
      ]
    },
    {
      id: 2,
      title: "Health Department Permits",
      priority: "Critical",
      cost: "$300 - $1,200",
      timeframe: "2-4 weeks",
      content: `Health department approval is absolutely critical for food truck operations. These permits ensure you meet food safety standards and protect both your customers and your business from health-related liabilities.

**Mobile Food Vendor License:**
This is your primary operating permit that allows you to prepare and serve food from a mobile unit. The application process typically includes submitting detailed plans of your truck's layout, equipment specifications, and food handling procedures. Inspectors will review your water systems, refrigeration, cooking equipment, and waste disposal methods.

**Commissary Kitchen Requirements:**
Most jurisdictions require food trucks to operate from an approved commissary kitchen for food preparation, cleaning, and storage. This isn't just a legal requirement—it's a practical necessity for maintaining food safety standards and having adequate prep space.

**Food Handler Certifications:**
All staff members who handle food must obtain food handler permits or certifications. These typically involve completing a food safety course and passing an exam. Certifications must be renewed regularly, usually annually.

**Inspection Process:**
Expect multiple inspections: initial plan review, pre-operational inspection of your truck, and ongoing periodic inspections. Inspectors will check temperature logs, cleaning procedures, equipment maintenance, and staff certification compliance.`,
      proTip: "Build a relationship with your local health inspector. They can provide valuable guidance during setup and help you avoid common violations that could shut down your operation.",
      actions: [
        { id: "2-1", text: "Apply for Mobile Food Vendor License", completed: false },
        { id: "2-2", text: "Secure commissary kitchen agreement", completed: false },
        { id: "2-3", text: "Obtain food handler certifications for all staff", completed: false },
        { id: "2-4", text: "Schedule pre-operational truck inspection", completed: false },
        { id: "2-5", text: "Implement food safety management system", completed: false }
      ]
    },
    {
      id: 3,
      title: "Business Licenses & Permits",
      priority: "High",
      cost: "$150 - $600",
      timeframe: "1-3 weeks",
      content: `Beyond health permits, you'll need various business licenses and permits to operate legally in your jurisdiction. These requirements vary significantly by city and province, making local research essential.

**General Business License:**
Most cities require a general business license for any commercial operation within their boundaries. This basic permit establishes your right to conduct business and is often a prerequisite for other specialized permits.

**Vendor/Peddler Permits:**
Many jurisdictions require special vendor permits for mobile businesses. These permits may restrict where and when you can operate, so understanding the limitations is crucial for route planning and revenue projections.

**GST/HST Registration:**
You'll need to register for GST/HST collection if your annual revenue exceeds $30,000. This registration also allows you to claim input tax credits on business purchases, which can provide significant savings.

**Fire Department Permits:**
If your truck uses propane or other flammable materials, you may need fire department approval. This often includes inspections of your fire suppression systems and safety equipment.

**Signage Permits:**
Some cities regulate mobile business signage and may require permits for exterior displays, especially if you plan to use electronic signs or exceed certain size limitations.`,
      proTip: "Start the permit application process early—some jurisdictions have limited numbers of mobile vendor permits available, and there may be waiting lists in popular areas.",
      actions: [
        { id: "3-1", text: "Apply for general business license", completed: false },
        { id: "3-2", text: "Obtain vendor/peddler permits for operating areas", completed: false },
        { id: "3-3", text: "Register for GST/HST collection", completed: false },
        { id: "3-4", text: "Secure fire department approval if required", completed: false },
        { id: "3-5", text: "Apply for signage permits if needed", completed: false }
      ]
    },
    {
      id: 4,
      title: "Insurance Requirements",
      priority: "Critical",
      cost: "$2,000 - $5,000/year",
      timeframe: "1-2 weeks",
      content: `Comprehensive insurance coverage is not just legally required in most areas—it's essential protection for your investment and livelihood. Food truck operations face unique risks that standard business insurance doesn't cover.

**General Liability Insurance:**
This foundational coverage protects against customer injuries, property damage, and food-related illnesses. Most venues and events require proof of general liability insurance with minimum coverage of $1-2 million per occurrence.

**Commercial Auto Insurance:**
Your food truck requires commercial vehicle insurance, not personal auto coverage. This specialized insurance covers the vehicle, equipment, and liability while driving. Standard auto policies exclude commercial use and won't cover claims.

**Product Liability Insurance:**
Specific coverage for food-related claims is crucial. This insurance protects against lawsuits related to foodborne illness, allergic reactions, or contamination. Given the potential severity of food-related claims, this coverage is essential.

**Property Insurance:**
Protect your equipment, inventory, and truck modifications with comprehensive property coverage. This includes protection against theft, vandalism, fire, and weather damage. Consider agreed-value coverage for custom equipment.

**Workers' Compensation:**
Required in most provinces once you hire employees, workers' compensation covers medical expenses and lost wages for work-related injuries. Even if not legally required, it provides valuable protection for your team.`,
      proTip: "Work with an insurance broker experienced in food service businesses. They understand the unique risks and can help you avoid coverage gaps that could be financially devastating.",
      actions: [
        { id: "4-1", text: "Obtain general liability insurance ($1M+ coverage)", completed: false },
        { id: "4-2", text: "Secure commercial auto insurance for truck", completed: false },
        { id: "4-3", text: "Purchase product liability coverage", completed: false },
        { id: "4-4", text: "Get property insurance for equipment/inventory", completed: false },
        { id: "4-5", text: "Arrange workers' compensation if hiring staff", completed: false }
      ]
    },
    {
      id: 5,
      title: "Location & Parking Permits",
      priority: "High",
      cost: "$100 - $500",
      timeframe: "Ongoing",
      content: `Where you can legally operate your food truck is heavily regulated and varies dramatically by location. Understanding zoning laws and securing proper location permits is crucial for sustainable operations.

**Zoning Compliance:**
Most cities have specific zones where mobile food vendors can operate. These regulations often restrict operations near brick-and-mortar restaurants, schools, or residential areas. Research zoning maps and understand time restrictions that may apply.

**Public Space Permits:**
Operating on public property typically requires special permits and may involve lottery systems or first-come-first-served applications. Popular locations often have limited permits available, making early application essential.

**Private Property Agreements:**
Many successful food trucks operate primarily on private property with landowner permission. While this may not require city permits, you'll need written agreements that clearly outline terms, insurance requirements, and revenue sharing if applicable.

**Event Permits:**
Festivals, farmers markets, and special events often require separate vendor permits. These applications typically include insurance requirements, health permit verification, and sometimes competitive selection processes.

**Parking Regulations:**
Understanding local parking laws is crucial. Some cities prohibit commercial vehicles from parking on residential streets overnight, while others have specific regulations about mobile food preparation and service.`,
      proTip: "Build relationships with property owners, event organizers, and other food truck operators. The best locations often come through networking rather than formal permit processes.",
      actions: [
        { id: "5-1", text: "Research zoning laws for target operating areas", completed: false },
        { id: "5-2", text: "Apply for public space permits where needed", completed: false },
        { id: "5-3", text: "Secure private property operating agreements", completed: false },
        { id: "5-4", text: "Register for event vendor opportunities", completed: false },
        { id: "5-5", text: "Understand parking regulations and restrictions", completed: false }
      ]
    },
    {
      id: 6,
      title: "Compliance & Renewals",
      priority: "Medium",
      cost: "$200 - $800/year",
      timeframe: "Ongoing",
      content: `Legal compliance is an ongoing responsibility that requires systematic tracking and proactive renewal management. Failing to maintain current permits can result in fines, shutdowns, and lost revenue.

**Renewal Calendar Management:**
Create a comprehensive calendar tracking all permit expiration dates, renewal requirements, and application deadlines. Most permits require renewal annually, but some may have different cycles. Missing renewal deadlines can result in gaps in legal operation authority.

**Ongoing Inspection Requirements:**
Health departments typically conduct periodic inspections, and you may be subject to random compliance checks. Maintain detailed records of cleaning schedules, temperature logs, and staff training to demonstrate ongoing compliance.

**Record Keeping Systems:**
Implement organized systems for maintaining all legal documents, permits, insurance certificates, and compliance records. Digital copies stored in cloud systems provide backup protection and easy access during inspections or emergencies.

**Regulatory Updates:**
Food service regulations evolve regularly. Stay informed about changes in health codes, zoning laws, and business regulations that might affect your operation. Join local food truck associations or business groups for regulatory updates.

**Compliance Costs:**
Budget for ongoing compliance costs including permit renewals, inspection fees, insurance premiums, and potential legal consultation. These recurring expenses are essential operational costs that should be factored into your pricing strategy.`,
      proTip: "Set up automatic calendar reminders 60 days before permit expirations. This gives you adequate time to complete renewal applications and avoid any gaps in legal authority to operate.",
      actions: [
        { id: "6-1", text: "Create comprehensive permit renewal calendar", completed: false },
        { id: "6-2", text: "Establish ongoing record-keeping systems", completed: false },
        { id: "6-3", text: "Set up regulatory update monitoring", completed: false },
        { id: "6-4", text: "Budget for annual compliance costs", completed: false },
        { id: "6-5", text: "Join local food truck association for support", completed: false }
      ]
    }
  ]);

  const toggleAction = (stepIndex: number, actionId: string) => {
    setSteps(prevSteps => 
      prevSteps.map((step, index) => 
        index === stepIndex 
          ? {
              ...step,
              actions: step.actions.map(action => 
                action.id === actionId 
                  ? { ...action, completed: !action.completed }
                  : action
              )
            }
          : step
      )
    );
  };

  const isStepComplete = (stepIndex: number) => {
    return steps[stepIndex].actions.every(action => action.completed);
  };

  const canAdvanceToStep = (stepIndex: number) => {
    if (stepIndex === 0) return true;
    return isStepComplete(stepIndex - 1);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1 && isStepComplete(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'text-red-600 bg-red-50';
      case 'High': return 'text-orange-600 bg-orange-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'Critical': return <AlertTriangle className="w-4 h-4" />;
      case 'High': return <Shield className="w-4 h-4" />;
      case 'Medium': return <FileText className="w-4 h-4" />;
      default: return <Building className="w-4 h-4" />;
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Legal Requirements & Permits
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Navigate the complex legal landscape of food truck operations with our comprehensive, step-by-step guide to permits, licenses, and compliance requirements in Canada.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index <= currentStep
                  ? 'bg-indigo-600'
                  : canAdvanceToStep(index)
                  ? 'bg-indigo-200'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Current Step */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        {/* Step Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg">
              <span className="text-xl font-bold text-indigo-600">
                {currentStepData.id}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {currentStepData.title}
              </h2>
              <div className="flex items-center space-x-4 mt-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(currentStepData.priority)}`}>
                  {getPriorityIcon(currentStepData.priority)}
                  <span className="ml-1">{currentStepData.priority}</span>
                </span>
                <span className="text-sm text-gray-500">
                  Cost: {currentStepData.cost}
                </span>
                <span className="text-sm text-gray-500">
                  Time: {currentStepData.timeframe}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="prose max-w-none mb-8">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {currentStepData.content}
          </div>
        </div>

        {/* Pro Tip */}
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="w-5 h-5 text-indigo-400">💡</div>
            </div>
            <div className="ml-3">
              <p className="text-sm text-indigo-700">
                <strong>Pro Tip:</strong> {currentStepData.proTip}
              </p>
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Action Items for This Step:
          </h3>
          <div className="space-y-3">
            {currentStepData.actions.map((action, actionIndex) => (
              <div
                key={action.id}
                className={`flex items-center p-3 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                  action.completed
                    ? 'bg-green-50 border-green-200'
                    : 'bg-gray-50 border-gray-200 hover:border-indigo-300'
                }`}
                onClick={() => toggleAction(currentStep, action.id)}
              >
                <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mr-3 ${
                  action.completed
                    ? 'bg-yellow-950 border-green-500'
                    : 'border-gray-300'
                }`}>
                  {action.completed && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className={`flex-1 ${
                  action.completed ? 'text-green-800 line-through' : 'text-gray-700'
                }`}>
                  {action.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Step Button */}
        {currentStep < steps.length - 1 && (
          <div className="flex justify-center">
            <button
              onClick={nextStep}
              disabled={!isStepComplete(currentStep)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                isStepComplete(currentStep)
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next Step
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}

        {/* Completion Message */}
        {currentStep === steps.length - 1 && isStepComplete(currentStep) && (
          <div className="text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Legal Requirements Complete!
              </h3>
              <p className="text-green-700">
                Congratulations! You've completed all the essential legal requirements for your food truck operation. 
                Keep your permits current and maintain compliance for successful operations.
              </p>
              <div className="mt-6">
                <a
                  href="/getting-started/cost-breakdown"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  Next: Cost Breakdown & Budgeting
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalRequirementsLesson;