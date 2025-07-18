import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import MenuDevelopmentSection from '../components/MenuDevelopmentSection';

const MenuDevelopmentPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="py-20">
        <MenuDevelopmentSection />
      </div>
    </PageWrapper>
  );
};

export default MenuDevelopmentPage;