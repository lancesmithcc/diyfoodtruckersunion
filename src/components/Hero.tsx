import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Star, Users, DollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      
      timeline
        .fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
        .fromTo('.hero-stats', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF6B35' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="hero-title text-5xl md:text-7xl font-caprasimo text-gray-800 mb-6 leading-tight">
          Start <span className="text-primary-500">Smart.</span>
        </h1>
        
        <p className="hero-subtitle text-xl md:text-2xl font-redhat text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join the DIY Food Truckers Union - a community-driven platform helping aspiring entrepreneurs start their mobile food businesses on a budget. Real advice from real operators.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#getting-started" className="bg-primary-500 text-white px-8 py-4 rounded-lg font-redhat font-semibold hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center group">
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </a>
          <a href="#discord" className="bg-white text-primary-500 px-8 py-4 rounded-lg font-redhat font-semibold border-2 border-primary-500 hover:bg-primary-50 transition-colors duration-200">
            Join Community
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="hero-stats bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary-500" />
            </div>
            <h3 className="text-3xl font-caprasimo text-gray-800 mb-2">2,500+</h3>
            <p className="font-redhat text-gray-600">Community Members</p>
          </div>
          
          <div className="hero-stats bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <DollarSign className="h-8 w-8 text-secondary-500" />
            </div>
            <h3 className="text-3xl font-caprasimo text-gray-800 mb-2">50+</h3>
            <p className="font-redhat text-gray-600">Free Resources</p>
          </div>
          
          <div className="hero-stats bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-accent-500" />
            </div>
            <h3 className="text-3xl font-caprasimo text-gray-800 mb-2">100+</h3>
            <p className="font-redhat text-gray-600">Success Stories</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;