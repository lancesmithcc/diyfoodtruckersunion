import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import EventCateringLesson from '../components/lessons/EventCateringLesson';

const EventCateringPage: React.FC = () => {
  return (
    <PageWrapper>
      <EventCateringLesson />
    </PageWrapper>
  );
};

export default EventCateringPage;