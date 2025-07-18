import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import CostBreakdownLesson from '../components/lessons/CostBreakdownLesson';

const CostBreakdownPage: React.FC = () => {
  return (
    <PageWrapper>
      <CostBreakdownLesson />
    </PageWrapper>
  );
};

export default CostBreakdownPage;