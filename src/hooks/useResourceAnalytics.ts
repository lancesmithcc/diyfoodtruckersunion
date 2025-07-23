import { useAnalyticsContext } from '../components/analytics/AnalyticsProvider';

interface ResourceData {
  id: string;
  title: string;
  category: string;
  type: 'template' | 'calculator' | 'guide' | 'checklist' | 'other';
}

/**
 * Hook for tracking resource-specific analytics events
 */
export const useResourceAnalytics = () => {
  const { 
    trackResourceDownload, 
    trackContentView,
    trackEvent,
    EventCategory,
    EventAction,
    isEnabled 
  } = useAnalyticsContext();

  return {
    trackResourceView: (resource: ResourceData) => {
      if (isEnabled) {
        trackContentView('resource', resource.id);
        trackEvent(
          EventAction.VIEW, 
          EventCategory.RESOURCE, 
          `${resource.type}_${resource.id}`
        );
      }
    },
    
    trackResourceDownload: (resource: ResourceData) => {
      if (isEnabled) {
        trackResourceDownload(resource.id);
        trackEvent(
          EventAction.DOWNLOAD, 
          EventCategory.RESOURCE, 
          `${resource.type}_${resource.id}`
        );
      }
    },
    
    trackResourceShare: (resource: ResourceData, platform: string) => {
      if (isEnabled) {
        trackEvent(
          EventAction.SHARE, 
          EventCategory.RESOURCE, 
          `${resource.id}_share_${platform}`
        );
      }
    },
    
    trackResourceInteraction: (resource: ResourceData, interactionType: string) => {
      if (isEnabled) {
        trackEvent(
          EventAction.CLICK, 
          EventCategory.RESOURCE, 
          `${resource.id}_${interactionType}`
        );
      }
    }
  };
};

export default useResourceAnalytics;