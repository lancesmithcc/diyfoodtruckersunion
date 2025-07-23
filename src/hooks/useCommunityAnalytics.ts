import { useAnalyticsContext } from '../components/analytics/AnalyticsProvider';

/**
 * Hook for tracking community-specific analytics events
 */
export const useCommunityAnalytics = () => {
  const { 
    trackEvent,
    EventCategory,
    EventAction,
    isEnabled 
  } = useAnalyticsContext();

  return {
    trackCommunityEngagement: (engagementType: string) => {
      if (isEnabled) {
        trackEvent(
          EventAction.CLICK, 
          EventCategory.COMMUNITY, 
          engagementType
        );
      }
    },
    
    trackDiscordClick: (source: string) => {
      if (isEnabled) {
        trackEvent(
          EventAction.CLICK, 
          EventCategory.COMMUNITY, 
          `discord_${source}`
        );
      }
    },
    
    trackForumEngagement: (action: string, topicId?: string) => {
      if (isEnabled) {
        trackEvent(
          action, 
          EventCategory.COMMUNITY, 
          topicId ? `forum_${action}_${topicId}` : `forum_${action}`
        );
      }
    },
    
    trackSubscription: (type: string) => {
      if (isEnabled) {
        trackEvent(
          EventAction.SUBSCRIBE, 
          EventCategory.CONVERSION, 
          `community_${type}`
        );
      }
    }
  };
};

export default useCommunityAnalytics;