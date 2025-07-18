import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import CashFlowManagementLesson from '../components/lessons/CashFlowManagementLesson';

const CashFlowManagementPage: React.FC = () => {
  return (
    <PageWrapper>
      <CashFlowManagementLesson />
    </PageWrapper>
  );
};

export default CashFlowManagementPage;