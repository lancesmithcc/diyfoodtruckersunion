import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import GettingStartedSection from '../components/GettingStartedSection';

const GettingStartedPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="py-20">
        <GettingStartedSection />
      </div>
    </PageWrapper>
  );
};

export default GettingStartedPage;