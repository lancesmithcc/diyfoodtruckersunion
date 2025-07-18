import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import DiscordSection from '../components/DiscordSection';

const CommunityPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="py-20">
        <DiscordSection />
      </div>
    </PageWrapper>
  );
};

export default CommunityPage;