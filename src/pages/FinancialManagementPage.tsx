import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import FinancialManagementSection from '../components/FinancialManagementSection';

const FinancialManagementPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="py-20">
        <FinancialManagementSection />
      </div>
    </PageWrapper>
  );
};

export default FinancialManagementPage;