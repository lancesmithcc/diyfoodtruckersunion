import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Shield, Heart, MapPin, AlertTriangle, CheckCircle } from 'lucide-react';

const LegalComplianceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.legal-card',
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

  const legalTopics = [
    {
      icon: Heart,
      title: 'Health Department Requirements',
      description: 'Navigate health department regulations and pass inspections with confidence.',
      requirements: [
        'Food handler certifications',
        'Kitchen equipment standards',
        'Temperature monitoring',
        'Sanitation procedures',
        'Inspection preparation'
      ],
      color: 'bg-red-500',
      urgency: 'Critical',
      timeframe: '2-4 weeks'
    },
    {
      icon: FileText,
      title: 'Business Licenses & Permits',
      description: 'Get all the necessary business licenses and permits to operate legally.',
      requirements: [
        'Business registration',
        'EIN number application',
        'State business license',
        'Local permits',
        'Reseller permits'
      ],
      color: 'bg-teal-500',
      urgency: 'High',
      timeframe: '1-3 weeks'
    },
    {
      icon: Shield,
      title: 'Insurance Needs & Options',
      description: 'Protect your business with the right insurance coverage at affordable rates.',
      requirements: [
        'General liability insurance',
        'Commercial auto insurance',
        'Product liability coverage',
        'Workers compensation',
        'Equipment protection'
      ],
      color: 'bg-green-500',
      urgency: 'High',
      timeframe: '1-2 weeks'
    },
    {
      icon: CheckCircle,
      title: 'Food Safety Certifications',
      description: 'Obtain required food safety certifications and maintain compliance.',
      requirements: [
        'ServSafe certification',
        'HACCP training',
        'Allergen awareness',
        'Temperature logs',
        'Cleaning schedules'
      ],
      color: 'bg-purple-500',
      urgency: 'Critical',
      timeframe: '1-2 weeks'
    },
    {
      icon: MapPin,
      title: 'Parking & Location Regulations',
      description: 'Understand where you can legally park and operate your food truck.',
      requirements: [
        'Zoning regulations',
        'Parking permits',
        'Event permissions',
        'Distance restrictions',
        'Time limitations'
      ],
      color: 'bg-orange-500',
      urgency: 'Medium',
      timeframe: 'Ongoing'
    },
    {
      icon: AlertTriangle,
      title: 'Compliance Monitoring',
      description: 'Stay compliant with ongoing requirements and avoid costly violations.',
      requirements: [
        'Regular inspections',
        'License renewals',
        'Insurance updates',
        'Permit maintenance',
        'Record keeping'
      ],
      color: 'bg-indigo-500',
      urgency: 'Medium',
      timeframe: 'Ongoing'
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section ref={sectionRef} id="legal-compliance" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Legal & <span className="text-primary-500">Compliance</span>
          </h2>
          <p className="text-xl font-redhat text-gray-600 max-w-3xl mx-auto">
            Navigate the complex world of food truck regulations with confidence. Get all your permits, licenses, and certifications in order.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalTopics.map((topic, index) => (
            <div key={index} className="legal-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`${topic.color} p-6 text-white`}>
                <topic.icon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-caprasimo mb-2">{topic.title}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getUrgencyColor(topic.urgency)}`}>
                    {topic.urgency}
                  </span>
                  <span className="opacity-90 font-redhat">
                    {topic.timeframe}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="font-redhat text-gray-600 mb-4">{topic.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-redhat font-medium text-gray-800 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {topic.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-sm font-redhat text-gray-700">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-redhat font-medium hover:bg-primary-600 transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-caprasimo text-gray-800 mb-4">State-by-State Compliance Guide</h3>
              <p className="font-redhat text-gray-600 max-w-2xl mx-auto">
                Every state has different requirements. Our comprehensive guide breaks down exactly what you need for your location.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-caprasimo text-primary-600 mb-2">50</div>
                <div className="font-redhat text-gray-700">States Covered</div>
              </div>
              <div className="text-center p-4 bg-secondary-50 rounded-lg">
                <div className="text-2xl font-caprasimo text-secondary-600 mb-2">500+</div>
                <div className="font-redhat text-gray-700">Cities Included</div>
              </div>
              <div className="text-center p-4 bg-accent-50 rounded-lg">
                <div className="text-2xl font-caprasimo text-accent-600 mb-2">Updated</div>
                <div className="font-redhat text-gray-700">Monthly</div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-primary-500 text-white px-8 py-3 rounded-lg font-redhat font-medium hover:bg-primary-600 transition-colors duration-200 mr-4">
                Download Guide
              </button>
              <button className="bg-white text-primary-500 px-8 py-3 rounded-lg font-redhat font-medium border-2 border-primary-500 hover:bg-primary-50 transition-colors duration-200">
                Ask Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalComplianceSection;