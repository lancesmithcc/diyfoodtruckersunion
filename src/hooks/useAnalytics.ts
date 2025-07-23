import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  initializeGA,
  pageView,
  trackEvent,
  trackNavigation,
  trackContentView,
  trackLessonStart,
  trackLessonComplete,
  trackResourceDownload,
  trackConversion,
  EventCategory,
  EventAction,
} from '../utils/analytics';

/**
 * Hook for using Google Analytics throughout the application
 */
export const useAnalytics = () => {
  const location = useLocation();

  // Initialize Google Analytics
  useEffect(() => {
    initializeGA();
  }, []);

  // Track page views
  useEffect(() => {
    pageView(location.pathname + location.search);
  }, [location]);

  return {
    trackEvent,
    trackNavigation,
    trackContentView,
    trackLessonStart,
    trackLessonComplete,
    trackResourceDownload,
    trackConversion,
    EventCategory,
    EventAction,
  };
};

export default useAnalytics;