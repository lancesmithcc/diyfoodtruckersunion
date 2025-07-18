import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import CostCalculator from '../components/CostCalculator';

const CostCalculatorPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="py-20">
        <CostCalculator />
      </div>
    </PageWrapper>
  );
};

export default CostCalculatorPage;