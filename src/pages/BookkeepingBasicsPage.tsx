import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import BookkeepingBasicsLesson from '../components/lessons/BookkeepingBasicsLesson';

const BookkeepingBasicsPage: React.FC = () => {
  return (
    <PageWrapper>
      <BookkeepingBasicsLesson />
    </PageWrapper>
  );
};

export default BookkeepingBasicsPage;