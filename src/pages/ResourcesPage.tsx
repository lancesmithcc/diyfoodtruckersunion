import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import ResourcesSection from '../components/ResourcesSection';

const ResourcesPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="py-20">
        <ResourcesSection />
      </div>
    </PageWrapper>
  );
};

export default ResourcesPage;