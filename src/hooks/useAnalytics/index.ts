/**
 * Analytics hooks for tracking user interactions
 */

export { useAnalyticsContext } from '../../components/analytics/AnalyticsProvider';
export { default as useLessonAnalytics } from '../useLessonAnalytics';
export { default as useResourceAnalytics } from '../useResourceAnalytics';
export { default as useCommunityAnalytics } from '../useCommunityAnalytics';

// Legacy hooks for backward compatibility
export const useLessonTracking = (lessonTitle: string, category: string, difficulty: string) => {
  const { trackSectionView, trackActionComplete } = useLessonAnalytics({
    id: lessonTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    title: lessonTitle,
    category,
    difficulty: difficulty as any
  });
  
  return {
    trackStepComplete: (stepTitle: string) => trackSectionView(`step_${stepTitle.toLowerCase().replace(/[^a-z0-9]+/g, '_')}`),
    trackActionComplete
  };
};

export const useBusinessPlanTracking = () => {
  return useLessonAnalytics({
    id: 'business-planning',
    title: 'Business Planning & Market Research',
    category: 'getting-started',
    difficulty: 'beginner'
  });
};