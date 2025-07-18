import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import PerformanceMonitoringLesson from '../components/lessons/PerformanceMonitoringLesson';

const PerformanceMonitoringPage: React.FC = () => {
  return (
    <PageWrapper>
      <PerformanceMonitoringLesson />
    </PageWrapper>
  );
};

export default PerformanceMonitoringPage;