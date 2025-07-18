import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Package, Users, Smile, Calendar, BarChart3, ArrowRight } from 'lucide-react';

const OperationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.operations-card',
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

  const operationsTopics = [
    {
      icon: Clock,
      title: 'Daily Operational Workflows',
      description: 'Streamline your daily operations with proven workflows that maximize efficiency and minimize stress.',
      workflows: [
        'Pre-service setup checklist',
        'Order taking and fulfillment',
        'Kitchen workflow optimization',
        'End-of-day closing procedures',
        'Equipment maintenance routines'
      ],
      color: 'bg-teal-500',
      timeImpact: 'Save 2-3 hours daily',
      lessonPath: '/operations/daily-workflows'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Master inventory control to reduce waste, prevent stockouts, and optimize cash flow.',
      workflows: [
        'Inventory tracking systems',
        'Supplier relationship management',
        'Order quantity optimization',
        'Waste reduction strategies',
        'Cost control methods'
      ],
      color: 'bg-yellow-950',
      timeImpact: 'Reduce waste by 25%',
      lessonPath: '/operations/inventory-management'
    },
    {
      icon: Users,
      title: 'Staff Training & Management',
      description: 'Build and manage a reliable team that delivers consistent quality and service.',
      workflows: [
        'Hiring and onboarding',
        'Training programs',
        'Performance management',
        'Scheduling optimization',
        'Team motivation strategies'
      ],
      color: 'bg-purple-500',
      timeImpact: 'Improve efficiency 40%',
      lessonPath: '/operations/staff-management'
    },
    {
      icon: Smile,
      title: 'Customer Service Excellence',
      description: 'Create memorable customer experiences that build loyalty and drive repeat business.',
      workflows: [
        'Service standards development',
        'Customer interaction training',
        'Complaint resolution',
        'Loyalty program implementation',
        'Feedback collection systems'
      ],
      color: 'bg-orange-500',
      timeImpact: 'Increase retention 60%',
      lessonPath: '/operations/customer-service'
    },
    {
      icon: Calendar,
      title: 'Event Planning & Catering',
      description: 'Expand your revenue streams with successful event catering and private bookings.',
      workflows: [
        'Event booking process',
        'Menu customization',
        'Logistics planning',
        'Equipment requirements',
        'Pricing strategies'
      ],
      color: 'bg-pink-500',
      timeImpact: 'Add 30% revenue',
      lessonPath: '/operations/event-catering'
    },
    {
      icon: BarChart3,
      title: 'Performance Monitoring',
      description: 'Track key metrics and KPIs to continuously improve your operations and profitability.',
      workflows: [
        'Sales tracking systems',
        'Cost analysis methods',
        'Customer satisfaction metrics',
        'Operational efficiency measures',
        'Growth planning tools'
      ],
      color: 'bg-indigo-500',
      timeImpact: 'Data-driven decisions',
      lessonPath: '/operations/performance-monitoring'
    }
  ];

  return (
    <section ref={sectionRef} id="operations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Daily <span className="text-primary-500">Operations</span>
          </h2>
          <p className="text-xl font-redhat text-gray-600 max-w-3xl mx-auto">
            Master the day-to-day operations of your food truck business. From workflow optimization to staff management and customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {operationsTopics.map((topic, index) => (
            <div key={index} className="operations-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`${topic.color} p-6 text-white`}>
                <topic.icon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-caprasimo mb-2">{topic.title}</h3>
                <div className="text-sm opacity-90 font-redhat">
                  Impact: {topic.timeImpact}
                </div>
              </div>
              
              <div className="p-6">
                <p className="font-redhat text-gray-600 mb-4">{topic.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-redhat font-medium text-gray-800 mb-3">Key Areas:</h4>
                  <ul className="space-y-2">
                    {topic.workflows.map((workflow, workflowIndex) => (
                      <li key={workflowIndex} className="flex items-start text-sm font-redhat text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {workflow}
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
              <h3 className="text-2xl font-caprasimo text-gray-800 mb-4">Operations Toolkit</h3>
              <p className="font-redhat text-gray-600 max-w-2xl mx-auto">
                Download our complete operations toolkit with checklists, templates, and tracking sheets to streamline your daily operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Clock className="h-8 w-8 text-teal-500 mx-auto mb-2" />
                <div className="font-caprasimo text-blue-600 mb-1">Daily Checklists</div>
                <div className="text-sm font-redhat text-gray-600">Setup & closing procedures</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Package className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="font-caprasimo text-green-600 mb-1">Inventory Sheets</div>
                <div className="text-sm font-redhat text-gray-600">Track stock & orders</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="font-caprasimo text-purple-600 mb-1">Staff Training</div>
                <div className="text-sm font-redhat text-gray-600">Onboarding materials</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <BarChart3 className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="font-caprasimo text-orange-600 mb-1">Performance Tracking</div>
                <div className="text-sm font-redhat text-gray-600">KPI dashboards</div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/operations/daily-workflows"
                className="bg-primary-500 text-white px-8 py-3 rounded-lg font-redhat font-medium hover:bg-primary-600 transition-colors duration-200 mr-4 inline-flex items-center"
              >
                Start with Daily Workflows
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

export default OperationsSection;