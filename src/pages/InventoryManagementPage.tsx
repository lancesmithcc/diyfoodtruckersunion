import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import InventoryManagementLesson from '../components/lessons/InventoryManagementLesson';

const InventoryManagementPage: React.FC = () => {
  return (
    <PageWrapper>
      <InventoryManagementLesson />
    </PageWrapper>
  );
};

export default InventoryManagementPage;