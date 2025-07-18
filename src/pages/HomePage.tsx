import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { LogoSection } from '../components/Header';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  return (
    <PageWrapper>
      <LogoSection />
      <Hero />
    </PageWrapper>
  );
};

export default HomePage;