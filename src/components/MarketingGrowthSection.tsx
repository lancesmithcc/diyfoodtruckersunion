import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, Heart, Calendar, Palette, TrendingUp, Target } from 'lucide-react';

const MarketingGrowthSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.marketing-card',
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

  const marketingTopics = [
    {
      icon: Smartphone,
      title: 'Social Media Strategies',
      description: 'Build a strong social media presence that drives customers to your food truck location.',
      strategies: [
        'Instagram food photography',
        'Facebook event promotion',
        'TikTok viral content creation',
        'Location-based posting',
        'Customer engagement tactics'
      ],
      color: 'bg-pink-500',
      roi: '300% increase in followers'
    },
    {
      icon: Heart,
      title: 'Building Customer Loyalty',
      description: 'Create a loyal customer base that becomes your biggest marketing asset.',
      strategies: [
        'Loyalty program design',
        'Customer retention strategies',
        'Personalized service approaches',
        'Community engagement',
        'Referral program implementation'
      ],
      color: 'bg-red-500',
      roi: '60% repeat customers'
    },
    {
      icon: Calendar,
      title: 'Event Marketing & Networking',
      description: 'Leverage events and networking to expand your reach and build valuable partnerships.',
      strategies: [
        'Food festival participation',
        'Corporate catering outreach',
        'Community event partnerships',
        'Food truck rally organization',
        'Local business collaborations'
      ],
      color: 'bg-teal-500',
      roi: '40% revenue increase'
    },
    {
      icon: Palette,
      title: 'Branding on a Budget',
      description: 'Create a memorable brand identity without breaking the bank.',
      strategies: [
        'Logo and visual identity',
        'Truck wrap design',
        'Packaging and merchandise',
        'Brand voice development',
        'Consistent messaging'
      ],
      color: 'bg-purple-500',
      roi: 'Professional appearance'
    },
    {
      icon: TrendingUp,
      title: 'Scaling & Expansion',
      description: 'Grow your food truck business through strategic expansion and diversification.',
      strategies: [
        'Multi-truck operations',
        'Franchise opportunities',
        'Brick-and-mortar expansion',
        'Product line extensions',
        'Market penetration tactics'
      ],
      color: 'bg-yellow-950',
      roi: '200% business growth'
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Leverage digital tools and platforms to reach more customers cost-effectively.',
      strategies: [
        'Google My Business optimization',
        'Email marketing campaigns',
        'Food delivery app integration',
        'Website and SEO basics',
        'Online review management'
      ],
      color: 'bg-indigo-500',
      roi: '150% online visibility'
    }
  ];

  return (
    <section ref={sectionRef} id="marketing-growth" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Marketing & <span className="text-primary-500">Growth</span>
          </h2>
          <p className="text-xl font-redhat text-gray-600 max-w-3xl mx-auto">
            Build your brand, attract customers, and scale your food truck business with proven marketing strategies that work on any budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketingTopics.map((topic, index) => (
            <div key={index} className="marketing-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`${topic.color} p-6 text-white`}>
                <topic.icon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-caprasimo mb-2">{topic.title}</h3>
                <div className="text-sm opacity-90 font-redhat">
                  Expected: {topic.roi}
                </div>
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
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8 border border-primary-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-caprasimo text-gray-800 mb-4">Marketing Success Stories</h3>
            <p className="font-redhat text-gray-600 max-w-2xl mx-auto">
              See how other food truck owners have grown their businesses using these proven marketing strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-caprasimo text-xl">M</span>
                </div>
                <h4 className="font-caprasimo text-lg text-gray-800">Mike's Tacos</h4>
                <p className="text-sm font-redhat text-gray-600">Austin, TX</p>
              </div>
              <blockquote className="text-sm font-redhat text-gray-700 italic text-center">
                "Using the social media strategies from DIY Food Truckers Union, I grew my Instagram from 200 to 15K followers in 6 months. Sales increased 250%!"
              </blockquote>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-caprasimo text-xl">S</span>
                </div>
                <h4 className="font-caprasimo text-lg text-gray-800">Sarah's Burgers</h4>
                <p className="text-sm font-redhat text-gray-600">Denver, CO</p>
              </div>
              <blockquote className="text-sm font-redhat text-gray-700 italic text-center">
                "The event marketing guide helped me book 3 corporate catering contracts worth $25K total. Best investment I ever made!"
              </blockquote>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-caprasimo text-xl">J</span>
                </div>
                <h4 className="font-caprasimo text-lg text-gray-800">Joe's Pizza</h4>
                <p className="text-sm font-redhat text-gray-600">Miami, FL</p>
              </div>
              <blockquote className="text-sm font-redhat text-gray-700 italic text-center">
                "Implemented the loyalty program template and now 70% of my customers are regulars. Revenue is up 180% year-over-year!"
              </blockquote>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-primary-500 text-white px-8 py-3 rounded-lg font-redhat font-medium hover:bg-primary-600 transition-colors duration-200 mr-4">
              Download Marketing Kit
            </button>
            <button className="bg-white text-primary-500 px-8 py-3 rounded-lg font-redhat font-medium border-2 border-primary-500 hover:bg-primary-50 transition-colors duration-200">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingGrowthSection;