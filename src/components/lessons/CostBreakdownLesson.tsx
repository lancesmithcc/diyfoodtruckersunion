import React, { useState } from 'react';
import { Check, DollarSign, Calculator, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../layout/PageWrapper';

interface ActionItem {
  id: string;
  text: string;
  completed: boolean;
}

interface BudgetTier {
  name: string;
  total: string;
  description: string;
  color: string;
}

const CostBreakdownLesson: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [actionItems, setActionItems] = useState<{ [key: number]: ActionItem[] }>({
    0: [
      { id: '1', text: 'Research 5-10 food trucks in your budget range', completed: false },
      { id: '2', text: 'Compare new vs used truck costs and benefits', completed: false },
      { id: '3', text: 'Factor in customization and equipment installation costs', completed: false },
      { id: '4', text: 'Get quotes from 3 different truck dealers or builders', completed: false }
    ],
    1: [
      { id: '1', text: 'List all essential cooking equipment for your menu', completed: false },
      { id: '2', text: 'Research commercial equipment suppliers in your area', completed: false },
      { id: '3', text: 'Compare new vs refurbished equipment costs', completed: false },
      { id: '4', text: 'Create equipment priority list (must-have vs nice-to-have)', completed: false }
    ],
    2: [
      { id: '1', text: 'Contact your municipal office for permit requirements', completed: false },
      { id: '2', text: 'Research provincial health department requirements', completed: false },
      { id: '3', text: 'Budget for annual renewal fees', completed: false },
      { id: '4', text: 'Factor in potential legal consultation costs', completed: false }
    ],
    3: [
      { id: '1', text: 'Get quotes from 3 commercial insurance providers', completed: false },
      { id: '2', text: 'Compare coverage options and deductibles', completed: false },
      { id: '3', text: 'Factor in seasonal operation adjustments', completed: false },
      { id: '4', text: 'Budget for annual premium increases', completed: false }
    ],
    4: [
      { id: '1', text: 'Design your brand identity and logo', completed: false },
      { id: '2', text: 'Budget for truck wrap and signage', completed: false },
      { id: '3', text: 'Plan digital marketing strategy and costs', completed: false },
      { id: '4', text: 'Create marketing calendar for first 6 months', completed: false }
    ],
    5: [
      { id: '1', text: 'Calculate 3-6 months of operating expenses', completed: false },
      { id: '2', text: 'Budget for initial inventory and supplies', completed: false },
      { id: '3', text: 'Plan for seasonal revenue fluctuations', completed: false },
      { id: '4', text: 'Set up business banking and accounting systems', completed: false }
    ]
  });

  const [selectedTier, setSelectedTier] = useState<string>('standard');

  const budgetTiers: BudgetTier[] = [
    {
      name: 'Budget',
      total: '$30,000 - $50,000',
      description: 'Used truck, essential equipment, minimal customization',
      color: 'bg-green-100 border-green-300 text-green-800'
    },
    {
      name: 'Standard',
      total: '$50,000 - $100,000',
      description: 'Good condition truck, quality equipment, professional setup',
      color: 'bg-blue-100 border-blue-300 text-blue-800'
    },
    {
      name: 'Premium',
      total: '$100,000 - $200,000',
      description: 'New truck, top equipment, full customization, premium finishes',
      color: 'bg-purple-100 border-purple-300 text-purple-800'
    }
  ];

  const steps = [
    {
      title: 'Food Truck or Trailer',
      content: `Your food truck is the foundation of your business and typically represents 40-60% of your total startup costs. The choice between new and used, size, and customization level will significantly impact your budget.

**New vs Used Considerations:**
- **New trucks** ($80,000-$200,000+): Come with warranties, latest equipment, but higher depreciation
- **Used trucks** ($15,000-$80,000): Lower initial cost, but may require repairs and updates
- **Conversion trailers** ($10,000-$50,000): Most budget-friendly option, requires separate vehicle

**Size and Layout Impact:**
- **Compact trucks** (14-16 feet): Lower cost, easier parking, limited menu capacity
- **Standard trucks** (18-24 feet): Balanced cost and functionality, most popular choice
- **Large trucks** (26+ feet): Higher capacity and revenue potential, but increased costs

**Hidden Costs to Consider:**
- Customization and kitchen installation: $10,000-$40,000
- Permits and inspections during build: $500-$2,000
- Transportation and delivery fees: $500-$3,000
- Initial repairs and maintenance: $1,000-$5,000`,
      icon: <DollarSign className="w-6 h-6" />,
      costRange: {
        budget: '$15,000 - $35,000',
        standard: '$35,000 - $80,000',
        premium: '$80,000 - $150,000'
      },
      proTip: 'Consider buying a used truck and investing in professional kitchen customization. This often provides better value than a fully-equipped new truck.'
    },
    {
      title: 'Kitchen Equipment',
      content: `Your kitchen equipment directly impacts your menu capabilities, food quality, and operational efficiency. Balancing quality with budget is crucial for long-term success.

**Essential Equipment Categories:**
- **Cooking equipment**: Grills, fryers, griddles, ovens ($3,000-$15,000)
- **Refrigeration**: Reach-in coolers, freezers, prep tables ($2,000-$8,000)
- **Prep equipment**: Slicers, mixers, food processors ($1,000-$5,000)
- **Serving equipment**: Warmers, display cases, POS systems ($1,000-$4,000)

**New vs Refurbished Equipment:**
- **New equipment**: Full warranties, latest technology, higher upfront cost
- **Refurbished equipment**: 40-60% cost savings, shorter warranties, proven reliability
- **Lease options**: Lower upfront costs, tax benefits, upgrade flexibility

**Energy Efficiency Considerations:**
- Energy-efficient equipment reduces operating costs by 20-30%
- Propane vs electric: Consider fuel costs and availability in your area
- Generator requirements: Budget $2,000-$8,000 for adequate power supply

**Menu-Specific Equipment:**
- Pizza ovens: $5,000-$25,000
- Soft-serve machines: $3,000-$12,000
- Specialty fryers: $2,000-$8,000
- Coffee equipment: $1,000-$10,000`,
      icon: <Calculator className="w-6 h-6" />,
      costRange: {
        budget: '$8,000 - $20,000',
        standard: '$20,000 - $40,000',
        premium: '$40,000 - $80,000'
      },
      proTip: 'Start with essential equipment and add specialty items as your business grows. Many successful trucks begin with simple menus and expand over time.'
    },
    {
      title: 'Permits & Licenses',
      content: `Legal compliance is non-negotiable in the food service industry. Permit costs vary significantly by province and municipality, but proper budgeting prevents costly delays.

**Federal Requirements:**
- Business Number (BN) from CRA: Free
- GST/HST registration (if over $30,000 revenue): Free
- Import permits (for specialty ingredients): $100-$500

**Provincial Requirements:**
- Business registration: $50-$300
- Food service license: $200-$800
- Liquor license (if applicable): $300-$2,000
- Workers' compensation registration: $200-$500

**Municipal Requirements:**
- Business license: $100-$500
- Mobile vendor permit: $200-$1,000
- Fire department inspection: $100-$300
- Zoning compliance: $50-$200

**Health Department Requirements:**
- Food handler certification: $50-$150 per person
- Mobile food unit permit: $300-$1,200
- Commissary kitchen agreement: $200-$800/month
- Regular inspections: $100-$300 each

**Special Event Permits:**
- Festival permits: $50-$500 per event
- Special occasion permits: $25-$200
- Catering permits: $100-$400`,
      icon: <AlertCircle className="w-6 h-6" />,
      costRange: {
        budget: '$1,500 - $3,000',
        standard: '$3,000 - $5,000',
        premium: '$5,000 - $8,000'
      },
      proTip: 'Start the permit process early - some permits can take 6-12 weeks to process. Factor in renewal fees for your annual budget planning.'
    },
    {
      title: 'Insurance',
      content: `Comprehensive insurance protection is essential for food truck operations. Canadian insurance requirements and costs vary by province, but adequate coverage protects your investment and business.

**Essential Insurance Types:**
- **General liability**: $1M-$2M coverage, protects against customer injuries and property damage
- **Commercial auto**: Covers your truck during transport and operation
- **Product liability**: Protects against food-related illness claims
- **Equipment coverage**: Protects kitchen equipment and truck contents

**Additional Coverage Options:**
- **Business interruption**: Covers lost income during repairs or closures
- **Spoilage coverage**: Protects against food loss due to equipment failure
- **Cyber liability**: Protects against data breaches and POS system issues
- **Workers' compensation**: Required if you have employees

**Factors Affecting Premiums:**
- **Location**: Urban areas typically have higher rates
- **Experience**: New operators pay higher premiums initially
- **Claims history**: Clean record reduces costs over time
- **Coverage limits**: Higher limits increase premiums but provide better protection

**Canadian Insurance Considerations:**
- Provincial variations in requirements and costs
- Seasonal operation discounts available in some provinces
- Group insurance options through food truck associations
- Commercial vehicle registration requirements`,
      icon: <TrendingUp className="w-6 h-6" />,
      costRange: {
        budget: '$2,000 - $4,000/year',
        standard: '$4,000 - $6,000/year',
        premium: '$6,000 - $10,000/year'
      },
      proTip: 'Work with an insurance broker who specializes in food service businesses. They can help you find the best coverage at competitive rates and ensure you meet all provincial requirements.'
    },
    {
      title: 'Marketing & Branding',
      content: `Strong branding and marketing are essential for food truck success. Your visual identity and marketing strategy directly impact customer recognition and sales growth.

**Brand Development:**
- **Logo design**: $300-$2,000 (professional designer vs DIY)
- **Brand guidelines**: $500-$1,500 (colors, fonts, style guide)
- **Menu design**: $200-$800 (print and digital versions)
- **Photography**: $500-$2,000 (professional food photography)

**Truck Branding:**
- **Full truck wrap**: $3,000-$8,000 (high-impact visual marketing)
- **Partial wrap**: $1,500-$4,000 (budget-friendly option)
- **Vinyl lettering**: $500-$1,500 (basic identification)
- **LED lighting**: $500-$2,000 (enhances visibility)

**Digital Marketing Setup:**
- **Website development**: $500-$3,000 (essential for credibility)
- **Social media setup**: $200-$800 (professional profiles and content)
- **Online ordering system**: $50-$200/month (convenience for customers)
- **Google My Business**: Free (crucial for local discovery)

**Ongoing Marketing Costs:**
- **Social media advertising**: $200-$800/month
- **Print materials**: $100-$500/month (flyers, business cards)
- **Event marketing**: $100-$1,000/event
- **Loyalty program setup**: $100-$500`,
      icon: <TrendingUp className="w-6 h-6" />,
      costRange: {
        budget: '$500 - $2,000',
        standard: '$2,000 - $5,000',
        premium: '$5,000 - $10,000'
      },
      proTip: 'Invest in professional truck branding - it\'s your mobile billboard and works 24/7. A well-designed wrap can generate thousands of impressions daily and pays for itself quickly.'
    },
    {
      title: 'Working Capital',
      content: `Working capital ensures smooth operations during your startup phase and seasonal fluctuations. Adequate cash reserves prevent financial stress and allow you to focus on building your business.

**Operating Expense Categories:**
- **Food costs**: 25-35% of revenue (initial inventory: $1,000-$3,000)
- **Fuel costs**: $200-$800/month (depends on routes and events)
- **Commissary rental**: $200-$800/month (required in most provinces)
- **Staff wages**: $15-$25/hour (if hiring employees)

**Initial Inventory Requirements:**
- **Non-perishable supplies**: $500-$1,500 (packaging, utensils, cleaning supplies)
- **Perishable inventory**: $300-$1,000 (initial food stock)
- **Emergency supplies**: $200-$500 (backup ingredients and supplies)

**Seasonal Considerations:**
- **Winter operations**: Reduced revenue in most Canadian markets
- **Event season**: Higher revenue but increased expenses
- **Equipment maintenance**: Budget for repairs and upgrades
- **Marketing pushes**: Seasonal advertising campaigns

**Cash Flow Management:**
- **3-month minimum**: Covers basic operations during slow periods
- **6-month recommended**: Provides comfort and growth opportunities
- **Emergency fund**: Additional 10-20% for unexpected expenses
- **Growth capital**: Funds for menu expansion and equipment upgrades

**Revenue Expectations:**
- **Month 1-3**: $2,000-$8,000/month (building customer base)
- **Month 4-6**: $5,000-$15,000/month (established operations)
- **Peak season**: $10,000-$30,000/month (festivals and events)`,
      icon: <Calculator className="w-6 h-6" />,
      costRange: {
        budget: '$3,000 - $8,000',
        standard: '$8,000 - $15,000',
        premium: '$15,000 - $25,000'
      },
      proTip: 'Plan for seasonal variations in Canadian markets. Many successful operators save during peak summer months to cover winter expenses or use the off-season for maintenance and planning.'
    }
  ];

  const toggleActionItem = (stepIndex: number, itemId: string) => {
    setActionItems(prev => ({
      ...prev,
      [stepIndex]: prev[stepIndex].map(item =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    }));
  };

  const isStepComplete = (stepIndex: number) => {
    return actionItems[stepIndex]?.every(item => item.completed) || false;
  };

  const canAdvanceToStep = (stepIndex: number) => {
    if (stepIndex === 0) return true;
    return isStepComplete(stepIndex - 1);
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1 && isStepComplete(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const getTierCosts = () => {
    const costs = {
      budget: [15000, 8000, 1500, 2000, 500, 3000],
      standard: [35000, 20000, 3000, 4000, 2000, 8000],
      premium: [80000, 40000, 5000, 6000, 5000, 15000]
    };
    
    const tierCosts = costs[selectedTier as keyof typeof costs];
    const total = tierCosts.reduce((sum, cost) => sum + cost, 0);
    
    return {
      individual: tierCosts,
      total: total.toLocaleString()
    };
  };

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <DollarSign className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Initial Cost Breakdown & Budgeting
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the financial planning process with detailed cost breakdowns, realistic budgeting strategies, and smart money-saving tips for Canadian food truck entrepreneurs.
          </p>
        </div>

        {/* Budget Tier Selector */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Budget Tier</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {budgetTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedTier === tier.name.toLowerCase()
                    ? tier.color
                    : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedTier(tier.name.toLowerCase())}
              >
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-2xl font-bold mb-2">{tier.total}</p>
                <p className="text-sm">{tier.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-2">Your Selected Budget: {budgetTiers.find(t => t.name.toLowerCase() === selectedTier)?.name}</h4>
            <p className="text-blue-800">Total Estimated Cost: <span className="font-bold">${getTierCosts().total}</span></p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full transition-colors ${
                  index <= currentStep
                    ? 'bg-blue-600'
                    : canAdvanceToStep(index)
                    ? 'bg-blue-200'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
              {steps[currentStep].icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Step {currentStep + 1}: {steps[currentStep].title}
              </h2>
              <p className="text-blue-600 font-semibold">
                {selectedTier.charAt(0).toUpperCase() + selectedTier.slice(1)} Tier: {steps[currentStep].costRange[selectedTier]}
              </p>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {steps[currentStep].content}
            </div>
          </div>

          {/* Pro Tip */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-yellow-800">Pro Tip</p>
                <p className="text-sm text-yellow-700 mt-1">
                  {steps[currentStep].proTip}
                </p>
              </div>
            </div>
          </div>

          {/* Action Items */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Action Items</h3>
            <div className="space-y-3">
              {actionItems[currentStep]?.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleActionItem(currentStep, item.id)}
                    className={`flex items-center justify-center w-6 h-6 rounded border-2 transition-colors ${
                      item.completed
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {item.completed && <Check className="w-3 h-3 text-white" />}
                  </button>
                  <span className={`${item.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Step Button */}
          {currentStep < steps.length - 1 && (
            <button
              onClick={handleNextStep}
              disabled={!isStepComplete(currentStep)}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                isStepComplete(currentStep)
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isStepComplete(currentStep) ? 'Continue to Next Step' : 'Complete all action items to continue'}
            </button>
          )}

          {/* Completion and Next Lesson Link */}
          {currentStep === steps.length - 1 && isStepComplete(currentStep) && (
            <div className="text-center">
              <div className="mb-6 p-4 bg-green-50 rounded-lg">
                <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Congratulations! You've completed the Cost Breakdown & Budgeting lesson.
                </h3>
                <p className="text-green-700">
                  You now have a comprehensive understanding of food truck startup costs and budgeting strategies.
                </p>
              </div>
              
              <Link
                to="/equipment-setup"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue to Equipment Setup & Kitchen Design
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default CostBreakdownLesson;