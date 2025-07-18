import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, DollarSign, FileText, TrendingUp, CreditCard, PiggyBank, ArrowRight } from 'lucide-react';

const FinancialManagementSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.financial-card',
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

  const financialTopics = [
    {
      icon: BookOpen,
      title: 'Bookkeeping Basics',
      description: 'Master the fundamentals of food truck bookkeeping to stay organized and compliant.',
      essentials: [
        'Chart of accounts setup',
        'Daily sales recording',
        'Expense categorization',
        'Receipt organization',
        'Monthly reconciliation'
      ],
      color: 'bg-teal-500',
      difficulty: 'Beginner',
      lessonPath: '/financial-management/bookkeeping-basics'
    },
    {
      icon: DollarSign,
      title: 'Cash Flow Management',
      description: 'Maintain healthy cash flow to keep your food truck business running smoothly.',
      essentials: [
        'Cash flow forecasting',
        'Seasonal planning',
        'Emergency fund building',
        'Payment terms optimization',
        'Working capital management'
      ],
      color: 'bg-yellow-950',
      difficulty: 'Intermediate',
      lessonPath: '/financial-management/cash-flow'
    },
    {
      icon: FileText,
      title: 'Tax Considerations',
      description: 'Navigate food truck tax requirements and maximize your deductions legally.',
      essentials: [
        'Business expense deductions',
        'Quarterly tax payments',
        'Sales tax compliance',
        'Employee tax obligations',
        'Record keeping requirements'
      ],
      color: 'bg-red-500',
      difficulty: 'Intermediate',
      lessonPath: '/financial-management/tax-planning'
    },
    {
      icon: TrendingUp,
      title: 'Profit Optimization',
      description: 'Identify opportunities to increase profitability and reduce unnecessary costs.',
      essentials: [
        'Cost analysis techniques',
        'Pricing strategy optimization',
        'Waste reduction methods',
        'Efficiency improvements',
        'Revenue stream diversification'
      ],
      color: 'bg-purple-500',
      difficulty: 'Advanced',
      lessonPath: '/financial-management/profit-optimization'
    },
    {
      icon: CreditCard,
      title: 'Funding & Financing',
      description: 'Explore funding options and financing strategies for your food truck business.',
      essentials: [
        'Small business loans',
        'Equipment financing',
        'Crowdfunding strategies',
        'Investor presentations',
        'Grant opportunities'
      ],
      color: 'bg-orange-500',
      difficulty: 'Intermediate',
      lessonPath: '/financial-management/funding-financing'
    },
    {
      icon: PiggyBank,
      title: 'Financial Planning',
      description: 'Plan for long-term financial success and business sustainability.',
      essentials: [
        'Business budgeting',
        'Growth planning',
        'Retirement planning',
        'Insurance planning',
        'Exit strategy development'
      ],
      color: 'bg-indigo-500',
      difficulty: 'Advanced',
      lessonPath: '/financial-management/financial-planning'
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
    <section ref={sectionRef} id="financial-management" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Financial <span className="text-primary-500">Management</span>
          </h2>
          <p className="text-xl font-redhat text-gray-600 max-w-3xl mx-auto">
            Take control of your food truck finances with proper bookkeeping, cash flow management, and profit optimization strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {financialTopics.map((topic, index) => (
            <div key={index} className="financial-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                  <h4 className="font-redhat font-medium text-gray-800 mb-3">Key Areas:</h4>
                  <ul className="space-y-2">
                    {topic.essentials.map((essential, essentialIndex) => (
                      <li key={essentialIndex} className="flex items-start text-sm font-redhat text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {essential}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={topic.lessonPath}
                  className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-redhat font-medium hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center"
                >
                  Start Lesson
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-caprasimo text-gray-800 mb-4">Financial Management Toolkit</h3>
              <p className="font-redhat text-gray-600 max-w-2xl mx-auto">
                Get our complete financial management toolkit with spreadsheets, templates, and guides to keep your finances on track.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <BookOpen className="h-8 w-8 text-teal-500 mx-auto mb-2" />
                <div className="font-caprasimo text-blue-600 mb-1">Bookkeeping</div>
                <div className="text-sm font-redhat text-gray-600">Daily tracking sheets</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="font-caprasimo text-green-600 mb-1">Cash Flow</div>
                <div className="text-sm font-redhat text-gray-600">Forecasting templates</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <FileText className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <div className="font-caprasimo text-red-600 mb-1">Tax Prep</div>
                <div className="text-sm font-redhat text-gray-600">Deduction checklists</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="font-caprasimo text-purple-600 mb-1">Profit Analysis</div>
                <div className="text-sm font-redhat text-gray-600">Performance dashboards</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8">
              <h4 className="font-caprasimo text-lg text-gray-800 mb-4 text-center">Sample Financial Dashboard</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-caprasimo text-green-600">$3,250</div>
                  <div className="text-sm font-redhat text-gray-600">Daily Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-caprasimo text-blue-600">28%</div>
                  <div className="text-sm font-redhat text-gray-600">Food Cost</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-caprasimo text-purple-600">$2,340</div>
                  <div className="text-sm font-redhat text-gray-600">Daily Profit</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-caprasimo text-orange-600">72%</div>
                  <div className="text-sm font-redhat text-gray-600">Profit Margin</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/financial-management/bookkeeping-basics"
                className="bg-primary-500 text-white px-8 py-3 rounded-lg font-redhat font-medium hover:bg-primary-600 transition-colors duration-200 mr-4 inline-flex items-center"
              >
                Start with Bookkeeping Basics
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/community"
                className="bg-white text-primary-500 px-8 py-3 rounded-lg font-redhat font-medium border-2 border-primary-500 hover:bg-primary-50 transition-colors duration-200 inline-flex items-center"
              >
                Join Community
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialManagementSection;