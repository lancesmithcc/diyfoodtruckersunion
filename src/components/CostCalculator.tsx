import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calculator, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';

const CostCalculator: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [costs, setCosts] = useState({
    truck: 30000,
    equipment: 15000,
    permits: 2000,
    insurance: 3000,
    marketing: 1000,
    initial_inventory: 2000,
    working_capital: 5000,
  });

  const [selectedTier, setSelectedTier] = useState<'budget' | 'standard' | 'premium'>('standard');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cost-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
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
  }, []);

  const tiers = {
    budget: {
      truck: 15000,
      equipment: 8000,
      permits: 1500,
      insurance: 2000,
      marketing: 500,
      initial_inventory: 1000,
      working_capital: 3000,
    },
    standard: {
      truck: 30000,
      equipment: 15000,
      permits: 2000,
      insurance: 3000,
      marketing: 1000,
      initial_inventory: 2000,
      working_capital: 5000,
    },
    premium: {
      truck: 60000,
      equipment: 25000,
      permits: 3000,
      insurance: 4000,
      marketing: 2000,
      initial_inventory: 3000,
      working_capital: 8000,
    },
  };

  const totalCost = Object.values(costs).reduce((sum, cost) => sum + cost, 0);

  const handleTierChange = (tier: 'budget' | 'standard' | 'premium') => {
    setSelectedTier(tier);
    setCosts(tiers[tier]);
  };

  const handleCostChange = (category: string, value: number) => {
    setCosts(prev => ({ ...prev, [category]: value }));
  };

  const costItems = [
    { key: 'truck', label: 'Food Truck/Trailer', icon: '🚚' },
    { key: 'equipment', label: 'Kitchen Equipment', icon: '🍳' },
    { key: 'permits', label: 'Permits & Licenses', icon: '📋' },
    { key: 'insurance', label: 'Insurance', icon: '🛡️' },
    { key: 'marketing', label: 'Marketing & Branding', icon: '📱' },
    { key: 'initial_inventory', label: 'Initial Inventory', icon: '🥫' },
    { key: 'working_capital', label: 'Working Capital', icon: '💰' },
  ];

  return (
    <section ref={sectionRef} id="calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            <Calculator className="inline-block mr-4 text-primary-500" size={48} />
            Budget Calculator
          </h2>
          <p className="text-xl font-redhat text-gray-600 max-w-3xl mx-auto">
            Get a realistic estimate of your startup costs and plan your budget effectively
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cost Breakdown */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-caprasimo text-gray-800 mb-6">Cost Breakdown</h3>
                
                {/* Tier Selection */}
                <div className="mb-6">
                  <div className="flex space-x-2 mb-4">
                    {Object.keys(tiers).map((tier) => (
                      <button
                        key={tier}
                        onClick={() => handleTierChange(tier as 'budget' | 'standard' | 'premium')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                          selectedTier === tier
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {tier.charAt(0).toUpperCase() + tier.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {costItems.map((item) => (
                    <div key={item.key} className="cost-item flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-redhat font-medium text-gray-800">{item.label}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign size={16} className="text-secondary-500" />
                        <input
                          type="number"
                          value={costs[item.key as keyof typeof costs]}
                          onChange={(e) => handleCostChange(item.key, parseInt(e.target.value) || 0)}
                          className="w-24 px-2 py-1 text-right border rounded font-redhat"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-caprasimo text-gray-800 mb-4">Total Investment</h3>
                <div className="text-center">
                  <div className="text-4xl font-caprasimo text-primary-500 mb-2">
                    ${totalCost.toLocaleString()}
                  </div>
                  <p className="font-redhat text-gray-600">Estimated startup cost</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-caprasimo text-gray-800 mb-4">
                  <TrendingUp className="inline-block mr-2 text-secondary-500" size={20} />
                  Financial Tips
                </h3>
                <ul className="space-y-3 text-sm font-redhat text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle size={16} className="text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                    Add 20% buffer for unexpected costs
                  </li>
                  <li className="flex items-start">
                    <AlertCircle size={16} className="text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                    Consider leasing equipment initially
                  </li>
                  <li className="flex items-start">
                    <AlertCircle size={16} className="text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                    Keep 3-6 months operating expenses
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <h3 className="text-lg font-caprasimo text-primary-800 mb-2">Need Funding?</h3>
                <p className="text-sm font-redhat text-primary-700 mb-4">
                  Explore our funding guide for small business loans, grants, and investor options.
                </p>
                <button className="bg-primary-500 text-white px-4 py-2 rounded-lg font-redhat font-medium hover:bg-primary-600 transition-colors duration-200">
                  View Funding Options
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;