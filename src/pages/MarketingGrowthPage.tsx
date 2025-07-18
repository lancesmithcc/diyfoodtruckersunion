import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import MarketingGrowthSection from '../components/MarketingGrowthSection';

const MarketingGrowthPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="py-20">
        <MarketingGrowthSection />
      </div>
    </PageWrapper>
  );
};

export default MarketingGrowthPage;