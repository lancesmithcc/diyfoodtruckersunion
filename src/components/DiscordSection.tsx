import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Users, HelpCircle, Lightbulb, ExternalLink } from 'lucide-react';

const DiscordSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.discord-feature',
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

  const features = [
    {
      icon: MessageCircle,
      title: 'Real-time Support',
      description: 'Connect in real time with DIY Food Truckers',
      color: 'bg-blue-500',
    },
    {
      icon: Users,
      title: 'Community Network',
      description: 'Connect with food truck entrepreneurs from around the world',
      color: 'bg-green-500',
    },
    {
      icon: HelpCircle,
      title: 'Q&A',
      description: 'Ask questions and get answers from fellow DIY Food Truckers',
      color: 'bg-purple-500',
    },
    {
      icon: Lightbulb,
      title: 'Share Ideas',
      description: 'Exchange menu ideas, marketing tips, and business strategies',
      color: 'bg-yellow-500',
    },
  ];

  return (
    <section ref={sectionRef} id="discord" className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-caprasimo mb-6">
            Join Our <span className="text-accent-400">Discord Community</span>
          </h2>
          <p className="text-xl font-redhat text-gray-300 max-w-3xl mx-auto">
            Connect with fellow food truck entrepreneurs, share experiences, and get the support you need to succeed
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="discord-feature text-center">
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-caprasimo mb-2">{feature.title}</h3>
                <p className="font-redhat text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Discord Preview */}
          <div className="bg-gray-800 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-caprasimo mb-6 text-center">What's Happening in the Community</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-caprasimo">M</span>
                  </div>
                  <div>
                    <div className="font-redhat font-medium">Mike_Tacos</div>
                    <div className="text-xs font-redhat text-gray-400">2 hours ago</div>
                  </div>
                </div>
                <p className="text-sm font-redhat text-gray-300">
                  "Just hit $2k in sales today! The location tips from this community really helped. Thanks everyone! 🌮"
                </p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-caprasimo">S</span>
                  </div>
                  <div>
                    <div className="font-redhat font-medium">SarahsBurgers</div>
                    <div className="text-xs font-redhat text-gray-400">5 hours ago</div>
                  </div>
                </div>
                <p className="text-sm font-redhat text-gray-300">
                  "Looking for recommendations on POS systems. What's everyone using? Need something budget-friendly."
                </p>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-caprasimo">J</span>
                  </div>
                  <div>
                    <div className="font-redhat font-medium">JoesPizza</div>
                    <div className="text-xs font-redhat text-gray-400">1 day ago</div>
                  </div>
                </div>
                <p className="text-sm font-redhat text-gray-300">
                  "Health inspection went perfectly! The prep checklist from @FoodTruckBoss was a lifesaver 🎉"
                </p>
              </div>
            </div>
          </div>

          {/* Join Button */}
          <div className="text-center">
            <div className="bg-secondary-600 rounded-lg p-8 inline-block">
              <h3 className="text-2xl font-caprasimo mb-4">Ready to Join the Family?</h3>
              <p className="font-redhat text-secondary-200 mb-6">
                Get instant access to our supportive community of food truck entrepreneurs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://discord.gg/foodtruckers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-secondary-600 px-8 py-3 rounded-lg font-redhat font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
                >
                  Join Discord Server
                  <ExternalLink size={16} className="ml-2" />
                </a>
                <button className="bg-secondary-700 text-white px-8 py-3 rounded-lg font-redhat font-medium hover:bg-secondary-800 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;