import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'DIY Workbook', href: '/workbook', submenu: [
      { name: '1. Getting Started', href: '/getting-started' },
      { name: '2. Operations', href: '/operations' },
      { name: '3. Financial Management', href: '/financial-management' }
    ]},
    { name: 'Resources', href: '/resources' },
    { name: 'Community', href: '/community' },
  ];

  // Generate scallops for the awning effect
  const generateScallops = () => {
    const scallops = [];
    const colors = ['#f97316', '#8b4513', '#facc15']; // Orange, Brown, Yellow
    
    for (let i = 0; i < 200; i++) {
      scallops.push(
        <div
          key={i}
          className="w-4 h-3 rounded-b-full flex-shrink-0"
          style={{ backgroundColor: colors[i % colors.length] }}
        />
      );
    }
    return scallops;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-transparent' : 'bg-transparent'
    }`}>
      {/* Navigation Bar */}
      <div className="bg-white px-4 py-4 border-t-[11px] border-t-orange-500">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/img/logo.svg" 
                alt="DIY Food Truckers Union" 
                className="h-12 w-auto" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-primary-500 transition-colors duration-200 font-caprasimo font-medium text-lg ${
                    location.pathname === item.href ? 'text-primary-500' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Spacer for desktop to balance logo */}
            <div className="hidden md:block w-12"></div>
          </div>
        </div>
      </div>

      {/* Awning Scallops */}
      <div className="flex justify-center overflow-hidden">
        {generateScallops()}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-b">
          <nav className="py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gray-50 transition-colors duration-200 font-redhat font-medium text-center ${
                  location.pathname === item.href ? 'text-primary-500 bg-gray-50' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

// Separate Logo Component
export const LogoSection: React.FC = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 text-center mt-[55px]">
        <img 
          src="/img/logo.svg" 
          alt="DIY Food Truckers Union" 
          className="h-60 w-auto mx-auto" 
        />
      </div>
    </section>
  );
};