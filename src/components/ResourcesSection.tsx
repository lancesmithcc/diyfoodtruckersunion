import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Square, Camera, Palette, BarChart3, Github, ExternalLink, Zap, Smartphone, Code } from 'lucide-react';

const ResourcesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.resource-card',
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
      icon: Camera,
      title: 'AI Menu Translation',
      description: 'Upload a photo of your menu and watch AI automatically translate it into a digital format that syncs with Square',
      color: 'bg-blue-500',
    },
    {
      icon: Square,
      title: 'Square Payment Integration',
      description: 'Seamlessly integrated with Square payment system for real-time menu and pricing synchronization',
      color: 'bg-green-500',
    },
    {
      icon: Palette,
      title: 'Full Customization',
      description: 'Complete control over your menu design, pricing, images, and organization to match your brand perfectly',
      color: 'bg-purple-500',
    },
    {
      icon: BarChart3,
      title: 'Analytics Built-In',
      description: 'Google Analytics and Meta Pixel enabled out of the box for comprehensive customer insights and marketing',
      color: 'bg-orange-500',
    },
    {
      icon: Globe,
      title: 'Free Hosting',
      description: 'Host your website completely free on Netlify and Github with professional performance and reliability',
      color: 'bg-indigo-500',
    },
    {
      icon: Code,
      title: 'Open Source & Expandable',
      description: 'Fully open source codebase that can be customized and expanded for your exact business needs',
      color: 'bg-pink-500',
    },
  ];

  return (
    <section ref={sectionRef} id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Featured <span className="text-primary-500">Resource</span>
          </h2>
          <p className="text-xl font-redhat text-gray-600 max-w-3xl mx-auto">
            Transform your food truck business with our flagship website system designed specifically for mobile food entrepreneurs.
          </p>
        </div>

        {/* Main Feature - Food Truck Boss */}
        <div className="resource-card bg-white rounded-lg shadow-xl overflow-hidden mb-16 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg mr-6">
                <Smartphone className="h-12 w-12" />
              </div>
              <div>
                <h3 className="text-3xl font-caprasimo mb-2">Food Truck Boss</h3>
                <p className="text-xl opacity-90">Professional Website System for Food Trucks</p>
              </div>
            </div>
            
            <p className="text-lg opacity-95 mb-6 leading-relaxed">
              The complete website solution designed specifically for food truck operators. Upload your menu photo, 
              let AI do the work, and launch a professional website with Square payment integration - all for free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://foodtruckboss.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-redhat font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center text-lg"
              >
                Launch Your Website
                <ExternalLink size={20} className="ml-2" />
              </a>
              <a
                href="https://github.com/foodtruckboss"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-700 text-white px-8 py-4 rounded-lg font-redhat font-medium hover:bg-primary-800 transition-colors duration-200 flex items-center justify-center"
              >
                View on GitHub
                <Github size={20} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="p-8">
            <h4 className="text-2xl font-caprasimo text-gray-800 mb-6 text-center">
              Everything You Need to Succeed Online
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h5 className="text-lg font-caprasimo text-gray-800 mb-2">{feature.title}</h5>
                  <p className="font-redhat text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* How It Works */}
            <div className="bg-primary-50 rounded-lg p-8 border border-primary-200">
              <h4 className="text-xl font-caprasimo text-primary-800 mb-6 text-center">How It Works</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-caprasimo text-xl">
                    1
                  </div>
                  <h5 className="font-caprasimo text-primary-800 mb-2">Upload Menu Photo</h5>
                  <p className="text-sm font-redhat text-primary-700">Take a photo of your current menu and upload it to the system</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-caprasimo text-xl">
                    2
                  </div>
                  <h5 className="font-caprasimo text-primary-800 mb-2">AI Translation</h5>
                  <p className="text-sm font-redhat text-primary-700">AI automatically converts your menu into digital format with Square integration</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-caprasimo text-xl">
                    3
                  </div>
                  <h5 className="font-caprasimo text-primary-800 mb-2">Customize & Brand</h5>
                  <p className="text-sm font-redhat text-primary-700">Add your branding, images, and customize the design to match your truck</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-caprasimo text-xl">
                    4
                  </div>
                  <h5 className="font-caprasimo text-primary-800 mb-2">Launch & Grow</h5>
                  <p className="text-sm font-redhat text-primary-700">Deploy for free and start accepting online orders with built-in analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Food Truck Boss */}
        <div className="resource-card bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-caprasimo text-gray-800 mb-6 text-center">
            Why Food Truck Boss is Perfect for Your Business
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-caprasimo text-lg text-gray-800 mb-4 flex items-center">
                <Zap className="h-5 w-5 text-primary-500 mr-2" />
                Built for Food Trucks
              </h4>
              <ul className="space-y-2 font-redhat text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Designed specifically for mobile food businesses
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Understands the unique challenges of food truck operations
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Optimized for mobile customers and quick ordering
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Integrates with existing Square POS systems
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-caprasimo text-lg text-gray-800 mb-4 flex items-center">
                <Github className="h-5 w-5 text-primary-500 mr-2" />
                Open Source Advantage
              </h4>
              <ul className="space-y-2 font-redhat text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  No monthly fees or subscription costs
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Full control over your website and data
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Expandable and customizable for your needs
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Community-driven development and support
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
              <h4 className="font-caprasimo text-lg text-gray-800 mb-2">Start Smart, Not Expensive</h4>
              <p className="font-redhat text-gray-600">
                Get a professional website with advanced features without the monthly costs. 
                Perfect for food truck operators who want to start smart and scale efficiently.
              </p>
            </div>
            
            <a
              href="https://foodtruckboss.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 text-white px-8 py-4 rounded-lg font-redhat font-bold hover:bg-primary-600 transition-colors duration-200 inline-flex items-center text-lg"
            >
              Get Started with Food Truck Boss
              <ExternalLink size={20} className="ml-2" />
            </a>
          </div>
        </div>

        {/* Community Support */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-caprasimo text-gray-800 mb-4">Need Help Getting Started?</h3>
            <p className="font-redhat text-gray-600 mb-6 max-w-md">
              Join our Discord community for support with Food Truck Boss setup, customization tips, and networking with other food truck operators.
            </p>
            <button className="bg-secondary-500 text-white px-8 py-3 rounded-lg font-redhat font-medium hover:bg-secondary-600 transition-colors duration-200">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;