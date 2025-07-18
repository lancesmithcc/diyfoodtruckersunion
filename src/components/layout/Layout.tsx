import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Logo Section - appears on all pages */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4 text-center">
            <img 
              src="/img/logo.svg" 
              alt="DIY Food Truckers Union" 
              className="w-auto mx-auto" 
              style={{ height: '320px' }}
            />
          </div>
        </section>
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;