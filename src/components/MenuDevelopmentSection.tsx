import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChefHat, DollarSign, Clock, Thermometer, Users, TrendingUp } from 'lucide-react';

const MenuDevelopmentSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.menu-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
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

  const menuTopics = [
    {
      icon: ChefHat,
      title: 'Menu Planning for Mobile Kitchens',
      description: 'Design a menu that works efficiently in your limited mobile kitchen space while maximizing profits.',
      strategies: [
        'Space-efficient cooking methods',
        'Equipment utilization',
        'Prep time optimization',
        'Storage considerations',
        'Service speed factors'
      ],
      color: 'bg-red-500',
      difficulty: 'Beginner'
    },
    {
      icon: DollarSign,
      title: 'Cost Analysis & Pricing',
      description: 'Master food costing and pricing strategies to ensure profitability on every menu item.',
      strategies: [
        'Ingredient cost tracking',
        'Portion control systems',
        'Profit margin calculations',
        'Competitive pricing analysis',
        'Menu engineering'
      ],
      color: 'bg-green-500',
      difficulty: 'Intermediate'
    },
    {
      icon: Clock,
      title: 'Prep-Ahead Techniques',
      description: 'Learn time-saving prep techniques that keep your service fast and food quality high.',
      strategies: [
        'Batch cooking methods',
        'Make-ahead components',
        'Freezing strategies',
        'Assembly line setup',
        'Quality maintenance'
      ],
      color: 'bg-teal-500',
      difficulty: 'Intermediate'
    },
    {
      icon: Thermometer,
      title: 'Seasonal Menu Planning',
      description: 'Adapt your menu to seasons, local ingredients, and changing customer preferences.',
      strategies: [
        'Seasonal ingredient sourcing',
        'Weather-appropriate items',
        'Holiday specials',
        'Local supplier relationships',
        'Menu rotation strategies'
      ],
      color: 'bg-orange-500',
      difficulty: 'Advanced'
    },
    {
      icon: Users,
      title: 'Dietary Accommodations',
      description: 'Expand your customer base by accommodating various dietary restrictions and preferences.',
      strategies: [
        'Gluten-free options',
        'Vegan alternatives',
        'Allergen management',
        'Healthy choices',
        'Cross-contamination prevention'
      ],
      color: 'bg-purple-500',
      difficulty: 'Intermediate'
    },
    {
      icon: TrendingUp,
      title: 'Menu Optimization',
      description: 'Continuously improve your menu based on sales data, customer feedback, and profitability.',
      strategies: [
        'Sales data analysis',
        'Customer feedback integration',
        'A/B testing menu items',
        'Profitability tracking',
        'Menu simplification'
      ],
      color: 'bg-indigo-500',
      difficulty: 'Advanced'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section ref={sectionRef} id="menu-development" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Menu <span className="text-primary-500">Development</span>
          </h2>
          <p className="text-xl font-redhat text-gray-600 max-w-3xl mx-auto">
            Create a profitable menu that works perfectly in your mobile kitchen. Learn costing, pricing, and optimization strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuTopics.map((topic, index) => (
            <div key={index} className="menu-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`${topic.color} p-6 text-white`}>
                <topic.icon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-caprasimo mb-2">{topic.title}</h3>
                <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(topic.difficulty)}`}>
                  {topic.difficulty}
                </span>
              </div>
              
              <div className="p-6">
                <p className="font-redhat text-gray-600 mb-4">{topic.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-redhat font-medium text-gray-800 mb-3">Key Strategies:</h4>
                  <ul className="space-y-2">
                    {topic.strategies.map((strategy, strategyIndex) => (
                      <li key={strategyIndex} className="flex items-start text-sm font-redhat text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-redhat font-medium hover:bg-primary-600 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8 border border-primary-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-caprasimo text-gray-800 mb-4">Menu Costing Calculator</h3>
              <p className="font-redhat text-gray-600 mb-6">
                Use our comprehensive menu costing calculator to determine the true cost of your menu items and set profitable prices.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center font-redhat text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Ingredient cost tracking
                </li>
                <li className="flex items-center font-redhat text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Labor cost calculations
                </li>
                <li className="flex items-center font-redhat text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Profit margin analysis
                </li>
                <li className="flex items-center font-redhat text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Competitive pricing insights
                </li>
              </ul>
              <button className="bg-primary-500 text-white px-8 py-3 rounded-lg font-redhat font-medium hover:bg-primary-600 transition-colors duration-200">
                Try Calculator
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-caprasimo text-lg text-gray-800 mb-4">Sample Menu Analysis</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-redhat font-medium">Gourmet Burger</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Cost: $3.50</div>
                    <div className="text-sm font-medium text-green-600">Price: $12.00</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-redhat font-medium">Fish Tacos (2)</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Cost: $2.80</div>
                    <div className="text-sm font-medium text-green-600">Price: $10.00</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-redhat font-medium">Loaded Fries</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Cost: $1.75</div>
                    <div className="text-sm font-medium text-green-600">Price: $7.00</div>
                  </div>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center font-redhat font-medium">
                    <span>Average Food Cost:</span>
                    <span className="text-primary-600">28%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuDevelopmentSection;