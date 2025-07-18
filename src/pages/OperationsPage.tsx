import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import OperationsSection from '../components/OperationsSection';

const OperationsPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="py-20">
        <OperationsSection />
      </div>
    </PageWrapper>
  );
};

export default OperationsPage;