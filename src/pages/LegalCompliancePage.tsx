import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import LegalComplianceSection from '../components/LegalComplianceSection';

const LegalCompliancePage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="py-20">
        <LegalComplianceSection />
      </div>
    </PageWrapper>
  );
};

export default LegalCompliancePage;