import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Zap, Wrench, Battery, Archive, Lightbulb } from 'lucide-react';

const EquipmentSetupSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.equipment-card',
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

  const equipmentTopics = [
    {
      icon: Truck,
      title: 'Food Truck vs. Food Trailer',
      description: 'Compare the pros and cons of trucks versus trailers to make the right choice for your business model and budget.',
      details: [
        'Initial cost comparison',
        'Mobility and flexibility',
        'Setup and breakdown time',
        'Storage and parking requirements',
        'Licensing differences'
      ],
      color: 'bg-teal-500',
      budgetRange: '$15,000 - $80,000'
    },
    {
      icon: Wrench,
      title: 'Essential Kitchen Equipment',
      description: 'Build a functional mobile kitchen without breaking the bank. Learn what equipment is truly essential.',
      details: [
        'Must-have cooking equipment',
        'Space-saving solutions',
        'Multi-purpose appliances',
        'Used equipment sourcing',
        'Equipment financing options'
      ],
      color: 'bg-green-500',
      budgetRange: '$8,000 - $25,000'
    },
    {
      icon: Zap,
      title: 'Electrical & Plumbing Basics',
      description: 'Understand the electrical and plumbing requirements for your mobile kitchen setup.',
      details: [
        'Electrical load calculations',
        'Wiring safety standards',
        'Water system setup',
        'Waste water management',
        'Code compliance'
      ],
      color: 'bg-purple-500',
      budgetRange: '$3,000 - $8,000'
    },
    {
      icon: Battery,
      title: 'Generator Selection & Power',
      description: 'Choose the right power solution for your food truck operations and learn power management.',
      details: [
        'Generator sizing guide',
        'Fuel efficiency tips',
        'Backup power options',
        'Electrical safety',
        'Maintenance schedules'
      ],
      color: 'bg-orange-500',
      budgetRange: '$2,000 - $6,000'
    },
    {
      icon: Archive,
      title: 'Storage & Organization',
      description: 'Maximize your limited space with smart storage solutions and organization systems.',
      details: [
        'Space optimization techniques',
        'Food storage solutions',
        'Equipment organization',
        'Inventory management',
        'Safety compliance'
      ],
      color: 'bg-pink-500',
      budgetRange: '$1,000 - $3,000'
    },
    {
      icon: Lightbulb,
      title: 'Budget-Friendly Tips',
      description: 'Money-saving strategies and creative solutions for setting up your mobile kitchen.',
      details: [
        'DIY installation tips',
        'Used equipment markets',
        'Lease vs. buy decisions',
        'Phased equipment purchases',
        'Cost-cutting strategies'
      ],
      color: 'bg-indigo-500',
      budgetRange: 'Save 30-50%'
    }
  ];

  return (
    <section ref={sectionRef} id="equipment-setup" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Equipment & <span className="text-primary-500">Setup</span>
          </h2>
          <p className="text-xl font-redhat text-gray-600 max-w-3xl mx-auto">
            Build a functional mobile kitchen on a budget. Learn what equipment you really need and how to set it up efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentTopics.map((topic, index) => (
            <div key={index} className="equipment-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`${topic.color} p-6 text-white`}>
                <topic.icon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-caprasimo mb-2">{topic.title}</h3>
                <div className="text-sm opacity-90 font-redhat">
                  Budget: {topic.budgetRange}
                </div>
              </div>
              
              <div className="p-6">
                <p className="font-redhat text-gray-600 mb-4">{topic.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-redhat font-medium text-gray-800 mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {topic.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm font-redhat text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {detail}
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

        <div className="mt-16 bg-primary-50 rounded-lg p-8 border border-primary-200">
          <div className="text-center">
            <h3 className="text-2xl font-caprasimo text-primary-800 mb-4">Equipment Setup Checklist</h3>
            <p className="font-redhat text-primary-700 mb-6 max-w-2xl mx-auto">
              Download our comprehensive equipment checklist to ensure you don't miss any essential items for your mobile kitchen setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-500 text-white px-8 py-3 rounded-lg font-redhat font-medium hover:bg-primary-600 transition-colors duration-200">
                Download Checklist
              </button>
              <button className="bg-white text-primary-500 px-8 py-3 rounded-lg font-redhat font-medium border-2 border-primary-500 hover:bg-primary-50 transition-colors duration-200">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSetupSection;