import React, { useEffect, createContext, useContext } from 'react';
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
  EventAction
} from '../../utils/analytics';

interface AnalyticsContextType {
  isLoaded: boolean;
  isEnabled: boolean;
  trackEvent: (action: string, category: string, label?: string, value?: number) => void;
  trackNavigation: (label: string) => void;
  trackContentView: (contentType: string, contentId: string) => void;
  trackLessonStart: (lessonId: string) => void;
  trackLessonComplete: (lessonId: string) => void;
  trackResourceDownload: (resourceId: string) => void;
  trackConversion: (conversionType: string, value?: number) => void;
  EventCategory: typeof EventCategory;
  EventAction: typeof EventAction;
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  isLoaded: false,
  isEnabled: false,
  trackEvent: () => {},
  trackNavigation: () => {},
  trackContentView: () => {},
  trackLessonStart: () => {},
  trackLessonComplete: () => {},
  trackResourceDownload: () => {},
  trackConversion: () => {},
  EventCategory,
  EventAction
});

export const useAnalyticsContext = () => useContext(AnalyticsContext);

interface AnalyticsProviderProps {
  children: React.ReactNode;
  enabled?: boolean;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  children, 
  enabled = process.env.NODE_ENV === 'production' 
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    if (enabled && typeof window !== 'undefined') {
      // Initialize Google Analytics
      initializeGA();
      setIsLoaded(true);
      
      // Set up consent management (GDPR compliance)
      if (window.gtag) {
        window.gtag('consent', 'default', {
          'analytics_storage': 'granted',
          'ad_storage': 'denied'
        });
      }
    }
  }, [enabled]);

  // Track page views
  useEffect(() => {
    if (isLoaded && enabled) {
      pageView(location.pathname + location.search);
    }
  }, [location, isLoaded, enabled]);

  const contextValue: AnalyticsContextType = {
    isLoaded,
    isEnabled: enabled,
    trackEvent,
    trackNavigation,
    trackContentView,
    trackLessonStart,
    trackLessonComplete,
    trackResourceDownload,
    trackConversion,
    EventCategory,
    EventAction
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// HOC for components that need analytics
export const withAnalytics = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithAnalyticsComponent: React.FC<P> = (props) => {
    const analytics = useAnalyticsContext();
    
    return (
      <WrappedComponent 
        {...props} 
        analytics={analytics}
      />
    );
  };

  WithAnalyticsComponent.displayName = `withAnalytics(${WrappedComponent.displayName || WrappedComponent.name})`;
  
  return WithAnalyticsComponent;
};

export default AnalyticsProvider;