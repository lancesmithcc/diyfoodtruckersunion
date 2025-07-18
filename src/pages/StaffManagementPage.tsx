import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import StaffManagementLesson from '../components/lessons/StaffManagementLesson';

const StaffManagementPage: React.FC = () => {
  return (
    <PageWrapper>
      <StaffManagementLesson />
    </PageWrapper>
  );
};

export default StaffManagementPage;