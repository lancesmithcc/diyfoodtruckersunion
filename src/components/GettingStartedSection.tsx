import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, FileText, DollarSign, Target, Building, TrendingUp, ArrowRight } from 'lucide-react';

const GettingStartedSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.getting-started-card',
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

  const steps = [
    {
      icon: Target,
      title: 'Business Planning & Market Research', 
      description: 'Learn how to identify your target market, analyze competition, and create a solid business plan that sets you up for success.',
      topics: ['Market Analysis', 'Competition Research', 'Business Model', 'SWOT Analysis'],
      color: 'bg-teal-500',
      lessonPath: '/getting-started/business-planning'
    },
    {
      icon: FileText,
      title: 'Legal Requirements & Permits',
      description: 'Navigate the complex world of food truck regulations, permits, and licenses with our comprehensive state-by-state guides.',
      topics: ['Business Licenses', 'Health Permits', 'Fire Permits', 'Parking Regulations'],
      color: 'bg-green-500',
      lessonPath: '/getting-started/legal-requirements'
    },
    {
      icon: DollarSign,
      title: 'Initial Cost Breakdown & Budgeting',
      description: 'Get realistic cost estimates and learn how to budget effectively for your food truck startup without overspending.',
      topics: ['Truck Costs', 'Equipment Budget', 'Permit Fees', 'Working Capital'],
      color: 'bg-purple-500',
      lessonPath: '/getting-started/cost-breakdown'
    },
    {
      icon: Building,
      title: 'Business Structure Selection',
      description: 'Understand the pros and cons of different business structures and choose the right one for your food truck venture.',
      topics: ['LLC vs Corporation', 'Tax Implications', 'Liability Protection', 'Registration Process'],
      color: 'bg-orange-500',
      lessonPath: '/getting-started/business-structure'
    },
    {
      icon: MapPin,
      title: 'Finding Your Niche & Target Market',
      description: 'Discover how to identify profitable niches and define your target customers for maximum success.',
      topics: ['Niche Selection', 'Customer Personas', 'Location Strategy', 'Menu Positioning'],
      color: 'bg-pink-500',
      lessonPath: '/getting-started/niche-targeting'
    },
    {
      icon: TrendingUp,
      title: 'Growth & Scaling Strategies',
      description: 'Plan for the future with strategies for expanding your food truck business and building long-term success.',
      topics: ['Multiple Locations', 'Catering Services', 'Franchise Options', 'Exit Strategies'],
      color: 'bg-indigo-500',
      lessonPath: '/getting-started/growth-strategies'
    },
  ];

  return (
    <section ref={sectionRef} id="getting-started" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Getting <span className="text-primary-500">Started</span>
          </h2>
          <p className="text-xl font-redhat text-gray-600 max-w-3xl mx-auto">
            Your complete roadmap to starting a food truck business on a budget. Follow our proven step-by-step process to turn your culinary dreams into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="getting-started-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`${step.color} p-6 text-white`}>
                <step.icon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-caprasimo">{step.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="font-redhat text-gray-600 mb-4">{step.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-redhat font-medium text-gray-800 mb-2">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {step.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-redhat">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={step.lessonPath}
                  className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-redhat font-medium hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center"
                >
                  Start Lesson
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary-50 rounded-lg p-8 inline-block border border-primary-200">
            <h3 className="text-2xl font-caprasimo text-primary-800 mb-4">Ready to Start Your Journey?</h3>
            <p className="font-redhat text-primary-700 mb-6 max-w-md">
              Join our community and get access to all the tools, templates, and support you need to launch your food truck business successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-500 text-white px-8 py-3 rounded-lg font-redhat font-medium hover:bg-primary-600 transition-colors duration-200">
                Join Community
              </button>
              <button className="bg-white text-primary-500 px-8 py-3 rounded-lg font-redhat font-medium border-2 border-primary-500 hover:bg-primary-50 transition-colors duration-200">
                Download Starter Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;