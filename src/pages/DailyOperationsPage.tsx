import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import DailyOperationsLesson from '../components/lessons/DailyOperationsLesson';

const DailyOperationsPage: React.FC = () => {
  return (
    <PageWrapper>
      <DailyOperationsLesson />
    </PageWrapper>
  );
};

export default DailyOperationsPage;