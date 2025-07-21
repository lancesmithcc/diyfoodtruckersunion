import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import { BookOpen, Wrench, DollarSign, ArrowRight, CheckCircle, Target } from 'lucide-react';

const WorkbookPage: React.FC = () => {
  const workbookSections = [
    {
      number: '1',
      title: 'Getting Started',
      description: 'Your complete roadmap to starting a food truck business on a budget. Follow our proven step-by-step process to turn your culinary dreams into reality.',
      icon: Target,
      color: 'bg-teal-500',
      href: '/getting-started',
      lessons: [
        'Business Planning & Market Research',
        'Legal Requirements & Permits',
        'Initial Cost Breakdown & Budgeting',
        'Business Structure Selection',
        'Finding Your Niche & Target Market',
        'Growth & Scaling Strategies'
      ],
      estimatedTime: '6-8 weeks',
      difficulty: 'Beginner to Intermediate'
    },
    {
      number: '2',
      title: 'Operations',
      description: 'Master the day-to-day operations of your food truck business. From workflow optimization to staff management and customer service.',
      icon: Wrench,
      color: 'bg-orange-500',
      href: '/operations',
      lessons: [
        'Daily Operational Workflows',
        'Inventory Management Systems',
        'Staff Training & Management',
        'Customer Service Excellence',
        'Event Planning & Catering',
        'Performance Monitoring & Analytics'
      ],
      estimatedTime: '4-6 weeks',
      difficulty: 'Intermediate'
    },
    {
      number: '3',
      title: 'Financial Management',
      description: 'Take control of your food truck finances with proper bookkeeping, cash flow management, and profit optimization strategies.',
      icon: DollarSign,
      color: 'bg-yellow-950',
      href: '/financial-management',
      lessons: [
        'Bookkeeping Basics',
        'Cash Flow Management',
        'Tax Considerations & Planning',
        'Profit Optimization',
        'Funding & Financing Options',
        'Financial Planning & Strategy'
      ],
      estimatedTime: '3-4 weeks',
      difficulty: 'Intermediate to Advanced'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes('Beginner')) return 'bg-green-100 text-green-800';
    if (difficulty.includes('Advanced')) return 'bg-red-100 text-red-800';
    return 'bg-yellow-100 text-yellow-800';
  };

  return (
    <PageWrapper>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6" aria-hidden="true">
              <BookOpen className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
              DIY Food Truckers <span className="text-primary-500">Workbook</span>
            </h1>
            <p className="text-xl font-redhat text-gray-600 max-w-3xl mx-auto mb-8">
              Your comprehensive guide to starting and running a successful food truck business on a budget. 
              Follow our proven 3-section system from concept to profitability.
            </p>
            
            <aside className="bg-primary-50 rounded-lg p-6 max-w-2xl mx-auto border border-primary-200">
              <h2 className="text-lg font-caprasimo text-primary-800 mb-2">Complete Learning System</h2>
              <p className="font-redhat text-primary-700 text-sm">
                Each section builds on the previous one, creating a comprehensive foundation for food truck success. 
                Complete all lessons in order for the best learning experience.
              </p>
            </aside>
          </header>

          {/* Workbook Sections */}
          <main className="space-y-8">
            {workbookSections.map((section, index) => (
              <article key={section.number} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row">
                  {/* Section Header */}
                  <header className={`${section.color} p-8 text-white lg:w-1/3`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4" aria-hidden="true">
                        <section.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="text-3xl font-caprasimo mb-1">Section {section.number}</div>
                        <h3 className="text-2xl font-caprasimo">{section.title}</h3>
                      </div>
                    </div>
                    
                    <p className="font-redhat text-white opacity-90 mb-6">
                      {section.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 opacity-75" />
                        <span>Estimated Time: {section.estimatedTime}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 opacity-75" />
                        <span>Difficulty: {section.difficulty}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 opacity-75" />
                        <span>{section.lessons.length} Comprehensive Lessons</span>
                      </div>
                    </div>

                    <Link
                      to={section.href}
                      className="inline-flex items-center bg-white text-gray-800 px-6 py-3 rounded-lg font-redhat font-medium hover:bg-gray-100 transition-colors duration-200"
                    >
                      Start Section {section.number}
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>

                  {/* Section Content */}
                  <div className="p-8 lg:w-2/3">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-caprasimo text-gray-800">Lesson Overview</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(section.difficulty)}`}>
                        {section.difficulty}
                      </span>
                    </div>
                    
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-start p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-center w-6 h-6 bg-primary-500 text-white rounded-full text-xs font-bold mr-3 mt-0.5 flex-shrink-0" aria-hidden="true">
                            {lessonIndex + 1}
                          </div>
                          <span className="font-redhat text-gray-700 text-sm">{lesson}</span>
                        </div>
                      ))}
                    </section>

                    <aside className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-caprasimo text-gray-800 mb-2">What You'll Learn</h5>
                      <p className="font-redhat text-gray-600 text-sm">
                        {section.number === '1' && 'Build a solid foundation with market research, legal compliance, budgeting, and strategic planning for your food truck venture.'}
                        {section.number === '2' && 'Master daily operations including workflows, inventory management, staff training, and customer service excellence.'}
                        {section.number === '3' && 'Take control of your finances with bookkeeping, cash flow management, tax planning, and profit optimization strategies.'}
                      </p>
                    </aside>
                  </div>
                </div>
              </article>
            ))}
          </main>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8 border border-primary-200">
              <h3 className="text-2xl font-caprasimo text-gray-800 mb-4">Ready to Start Your Food Truck Journey?</h3>
              <p className="font-redhat text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of successful food truck entrepreneurs who have used our DIY Workbook to build profitable businesses on a budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/getting-started"
                  className="bg-primary-500 text-white px-8 py-3 rounded-lg font-redhat font-medium hover:bg-primary-600 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  Begin Section 1: Getting Started
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link
                  to="/community"
                  className="bg-white text-primary-500 px-8 py-3 rounded-lg font-redhat font-medium border-2 border-primary-500 hover:bg-primary-50 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  Join Our Community
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default WorkbookPage;