import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import CustomerServiceLesson from '../components/lessons/CustomerServiceLesson';

const CustomerServicePage: React.FC = () => {
  return (
    <PageWrapper>
      <CustomerServiceLesson />
    </PageWrapper>
  );
};

export default CustomerServicePage