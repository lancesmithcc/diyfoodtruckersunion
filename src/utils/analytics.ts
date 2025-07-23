/**
 * Google Analytics utility functions
 */

// Google Analytics Measurement ID
export const GA_TRACKING_ID = 'G-ZD3G823N1M';

// Initialize Google Analytics
export const initializeGA = (): void => {
  if (typeof window !== 'undefined') {
    // Add Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      send_page_view: true,
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    });
  }
};

// Check if analytics is loaded
export const isAnalyticsLoaded = (): boolean => {
  return typeof window !== 'undefined' && !!window.gtag;
};

// Debug analytics
export const debugAnalytics = (): void => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Google Analytics initialized with ID:', GA_TRACKING_ID);
  }
};

// Legacy initialization function for backward compatibility
export const initGA = initializeGA;

// Track page views
export const pageView = (url: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
    
    if (process.env.NODE_ENV !== 'production') {
      console.log('📊 Page view tracked:', url);
    }
  }
};

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
    
    if (process.env.NODE_ENV !== 'production') {
      console.log(`📊 Event tracked: ${action} | ${category} | ${label || 'no label'} | ${value || 'no value'}`);
    }
  }
};

// Common event categories
export const EventCategory = {
  NAVIGATION: 'navigation',
  ENGAGEMENT: 'engagement',
  CONVERSION: 'conversion',
  CONTENT: 'content',
  RESOURCE: 'resource',
  LESSON: 'lesson',
  COMMUNITY: 'community',
};

// Common event actions
export const EventAction = {
  CLICK: 'click',
  VIEW: 'view',
  DOWNLOAD: 'download',
  COMPLETE: 'complete',
  START: 'start',
  SHARE: 'share',
  SUBSCRIBE: 'subscribe',
  SEARCH: 'search',
};

// Track specific events
export const trackNavigation = (label: string): void => {
  trackEvent(EventAction.CLICK, EventCategory.NAVIGATION, label);
};

export const trackContentView = (contentType: string, contentId: string): void => {
  trackEvent(EventAction.VIEW, EventCategory.CONTENT, `${contentType}:${contentId}`);
};

export const trackLessonStart = (lessonId: string): void => {
  trackEvent(EventAction.START, EventCategory.LESSON, lessonId);
};

export const trackLessonComplete = (lessonId: string): void => {
  trackEvent(EventAction.COMPLETE, EventCategory.LESSON, lessonId);
};

export const trackResourceDownload = (resourceId: string): void => {
  trackEvent(EventAction.DOWNLOAD, EventCategory.RESOURCE, resourceId);
};

export const trackConversion = (conversionType: string, value?: number): void => {
  trackEvent(EventAction.COMPLETE, EventCategory.CONVERSION, conversionType, value);
};

// Declare global gtag function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}