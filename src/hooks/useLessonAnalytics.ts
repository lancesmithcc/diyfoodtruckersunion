import { useEffect } from 'react';
import { useAnalyticsContext } from '../components/analytics/AnalyticsProvider';

interface LessonData {
  id: string;
  title: string;
  category: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

/**
 * Hook for tracking lesson-specific analytics events
 */
export const useLessonAnalytics = (lessonData: LessonData) => {
  const { 
    trackLessonStart, 
    trackLessonComplete, 
    trackContentView,
    trackEvent,
    EventCategory,
    EventAction,
    isEnabled 
  } = useAnalyticsContext();

  // Track lesson view on mount
  useEffect(() => {
    if (isEnabled) {
      // Track lesson view
      trackContentView('lesson', lessonData.id);
      
      // Track lesson start
      trackLessonStart(lessonData.id);
      
      // Set up completion tracking
      const handleBeforeUnload = () => {
        // Track lesson completion when user leaves the page
        trackLessonComplete(lessonData.id);
      };
      
      window.addEventListener('beforeunload', handleBeforeUnload);
      
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [isEnabled, lessonData.id, trackContentView, trackLessonStart, trackLessonComplete]);

  // Return tracking functions for component use
  return {
    trackSectionView: (sectionId: string) => {
      if (isEnabled) {
        trackEvent(
          EventAction.VIEW, 
          EventCategory.LESSON, 
          `${lessonData.id}_section_${sectionId}`
        );
      }
    },
    
    trackActionComplete: (actionId: string) => {
      if (isEnabled) {
        trackEvent(
          EventAction.COMPLETE, 
          EventCategory.LESSON, 
          `${lessonData.id}_action_${actionId}`
        );
      }
    },
    
    trackResourceClick: (resourceId: string) => {
      if (isEnabled) {
        trackEvent(
          EventAction.CLICK, 
          EventCategory.RESOURCE, 
          `${lessonData.id}_resource_${resourceId}`
        );
      }
    },
    
    trackLessonComplete: () => {
      if (isEnabled) {
        trackLessonComplete(lessonData.id);
      }
    }
  };
};

export default useLessonAnalytics;