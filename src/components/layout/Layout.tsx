import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';
import Breadcrumb from './Breadcrumb';
import { AnalyticsProvider } from '../analytics/AnalyticsProvider';

const Layout: React.FC = () => {
  return (
    <AnalyticsProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20" role="main">
          {/* Logo Section - appears on all pages */}
          <section className="bg-white py-8" aria-label="Site branding">
            <div className="container mx-auto px-4 text-center">
              <img 
                src="/img/logo.svg" 
                alt="DIY Food Truckers Union - Community-driven platform for food truck entrepreneurs" 
                className="w-auto mx-auto" 
                style={{ height: '320px' }}
              />
            </div>
          </section>
          <Breadcrumb />
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </AnalyticsProvider>
  );
};

export default Layout;