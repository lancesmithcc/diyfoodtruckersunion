import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import FinancialPlanningLesson from '../components/lessons/FinancialPlanningLesson';

const FinancialPlanningPage: React.FC = () => {
  return (
    <PageWrapper>
      <FinancialPlanningLesson />
    </PageWrapper>
  );
};

export default FinancialPlanningPage;