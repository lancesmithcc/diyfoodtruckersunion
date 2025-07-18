import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import BusinessPlanningLesson from '../components/lessons/BusinessPlanningLesson';

const BusinessPlanningPage: React.FC = () => {
  return (
    <PageWrapper>
      <BusinessPlanningLesson />
    </PageWrapper>
  );
};

export default BusinessPlanningPage;