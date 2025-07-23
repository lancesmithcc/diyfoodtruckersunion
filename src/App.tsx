import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnalyticsProvider } from './components/analytics/AnalyticsProvider';
import { router } from './router';

function App() {
  return (
    <HelmetProvider>
      <AnalyticsProvider>
        <RouterProvider router={router} />
      </AnalyticsProvider>
    </HelmetProvider>
  );
}

export default App;