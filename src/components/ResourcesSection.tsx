import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Square, Camera, Palette, BarChart3, ExternalLink, Zap, Code, MapPin, Calendar } from 'lucide-react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ResourcesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate resource cards
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

      // Animate FoodTruckBoss logo with fade and rotation
      gsap.set('.foodtruckboss-logo', {
        opacity: 0,
        rotation: -180,
        scale: 0.5
      });

      gsap.to('.foodtruckboss-logo', {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 1.5,
        ease: 'back.out(1.7)',
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Camera,
      title: 'AI Menu Translation',
      description: 'Upload a photo of your menu and watch AI automatically translate it into a digital format that syncs with Square',
      color: 'bg-teal-500',
    },
    {
      icon: MapPin,
      title: 'Google Maps Integration',
      description: 'Show your current location to customers with integrated Google Maps displaying your real-time position',
      color: 'bg-red-500',
    },
    {
      icon: Calendar,
      title: 'Schedule Management',
      description: 'Manage your weekly schedule with Open, Closed, or TBA status for each day to keep customers informed',
      color: 'bg-cyan-500',
    },
    {
      icon: Square,
      title: 'Square Payment Integration',
      description: 'Seamlessly integrated with Square payment system for real-time menu and pricing synchronization',
      color: 'bg-yellow-950',
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
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Featured <span className="text-primary-500">Resource</span>
          </h2>
          <p className="text-xl font-redhat text-gray-600 max-w-3xl mx-auto">
            Transform your food truck business with our flagship website system designed specifically for mobile food entrepreneurs.
          </p>
        </header>

        {/* Main Feature - Food Truck Boss */}
        <article className="resource-card bg-white rounded-lg shadow-xl overflow-hidden mb-16 max-w-6xl mx-auto">
          <header className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 text-white">
            <div className="flex items-center mb-6">
              <img
                src="https://foodtruckdemo.s3.us-east-2.amazonaws.com/branding/logo-1752199357659-foodtruckboss.png"
                alt="Food Truck Boss Logo"
                className="foodtruckboss-logo h-60 w-60 object-contain mr-6"
              />
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
                href="https://www.foodtruckboss.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-redhat font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center text-lg"
              >
                Launch Your Website
                <ExternalLink size={20} className="ml-2" />
              </a>
              <a
                href="https://github.com/lancesmithcc/foodtruck"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-700 text-white px-8 py-4 rounded-lg font-redhat font-medium hover:bg-primary-800 transition-colors duration-200 flex items-center justify-center"
              >
                View on GitHub
                <ExternalLink size={20} className="ml-2" />
              </a>
            </div>
          </header>

          <div className="p-8">
            <section>
              <h4 className="text-2xl font-caprasimo text-gray-800 mb-6 text-center">
                Everything You Need to Succeed Online
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {features.map((feature, index) => (
                  <article key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`} aria-hidden="true">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="text-lg font-caprasimo text-gray-800 mb-2">{feature.title}</h5>
                    <p className="font-redhat text-gray-600 text-sm">{feature.description}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* How It Works */}
            <section className="bg-primary-50 rounded-lg p-8 border border-primary-200">
              <h4 className="text-xl font-caprasimo text-primary-800 mb-6 text-center">How It Works</h4>
              <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <li className="text-center">
                  <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-caprasimo text-xl" aria-hidden="true">
                    1
                  </div>
                  <h5 className="font-caprasimo text-primary-800 mb-2">Upload Menu Photo</h5>
                  <p className="text-sm font-redhat text-primary-700">Take a photo of your current menu and upload it to the system</p>
                </li>
                <li className="text-center">
                  <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-caprasimo text-xl" aria-hidden="true">
                    2
                  </div>
                  <h5 className="font-caprasimo text-primary-800 mb-2">AI Translation</h5>
                  <p className="text-sm font-redhat text-primary-700">AI automatically converts your menu into digital format with Square integration</p>
                </li>
                <li className="text-center">
                  <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-caprasimo text-xl" aria-hidden="true">
                    3
                  </div>
                  <h5 className="font-caprasimo text-primary-800 mb-2">Customize & Brand</h5>
                  <p className="text-sm font-redhat text-primary-700">Add your branding, images, and customize the design to match your truck</p>
                </li>
                <li className="text-center">
                  <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-caprasimo text-xl" aria-hidden="true">
                    4
                  </div>
                  <h5 className="font-caprasimo text-primary-800 mb-2">Launch & Grow</h5>
                  <p className="text-sm font-redhat text-primary-700">Deploy for free and start accepting online orders with built-in analytics</p>
                </li>
              </ol>
            </section>
          </div>
        </article>

        {/* Why Food Truck Boss */}
        <article className="resource-card bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <header>
            <h3 className="text-2xl font-caprasimo text-gray-800 mb-6 text-center">
              Why Food Truck Boss is Perfect for Your Business
            </h3>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h4 className="font-caprasimo text-lg text-gray-800 mb-4 flex items-center">
                <Zap className="h-5 w-5 text-primary-500 mr-2" aria-hidden="true" />
                Built for Food Trucks
              </h4>
              <ul className="space-y-2 font-redhat text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></div>
                  Designed specifically for mobile food businesses
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></div>
                  Understands the unique challenges of food truck operations
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></div>
                  Optimized for mobile customers and quick ordering
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></div>
                  Integrates with existing Square POS systems
                </li>
              </ul>
            </section>

            <section>
              <h4 className="font-caprasimo text-lg text-gray-800 mb-4 flex items-center">
                <Code className="h-5 w-5 text-primary-500 mr-2" aria-hidden="true" />
                Open Source Advantage
              </h4>
              <ul className="space-y-2 font-redhat text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></div>
                  No monthly fees or subscription costs
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></div>
                  Full control over your website and data
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></div>
                  Expandable and customizable for your needs
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></div>
                  Community-driven development and support
                </li>
              </ul>
            </section>
          </div>

          <footer className="mt-8 text-center">
            <aside className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
              <h4 className="font-caprasimo text-lg text-gray-800 mb-2">Start Smart</h4>
              <p className="font-redhat text-gray-600">
                Get a professional website with advanced features without the monthly costs.
                Perfect for food truck operators who want to start smart and scale efficiently.
              </p>
            </aside>

            <a
              href="https://www.foodtruckboss.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 text-white px-8 py-4 rounded-lg font-redhat font-bold hover:bg-primary-600 transition-colors duration-200 inline-flex items-center text-lg"
            >
              Get Started with Food Truck Boss
              <ExternalLink size={20} className="ml-2" />
            </a>
          </footer>
        </article>

        {/* Community Support */}
        <aside className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-caprasimo text-gray-800 mb-4">Need Help Getting Started?</h3>
            <p className="font-redhat text-gray-600 mb-6 max-w-md">
              Join our Discord community for support with Food Truck Boss setup, customization tips, and networking with other food truck operators.
            </p>
            <a
              href="https://discord.gg/4XNQJ879"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-12 py-4 rounded-xl font-redhat font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-3 shadow-lg"
            >
              Join Community
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ResourcesSection;