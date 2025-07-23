# Google Analytics Implementation

This document outlines the Google Analytics implementation for the DIY Food Truckers Union website.

## Configuration

- **Google Analytics Measurement ID**: `G-ZD3G823N1M`
- **Implementation Type**: Google Analytics 4 (GA4)
- **Data Collection**: Page views, events, user engagement

## Analytics Architecture

The analytics system is built with the following components:

1. **Core Analytics Utilities** (`src/utils/analytics.ts`)
   - Initialization functions
   - Page view tracking
   - Event tracking
   - Predefined event categories and actions

2. **Analytics Provider** (`src/components/analytics/AnalyticsProvider.tsx`)
   - React context for analytics
   - Automatic page view tracking
   - GDPR-compliant consent management

3. **Specialized Analytics Hooks**
   - `useLessonAnalytics`: For tracking lesson engagement
   - `useResourceAnalytics`: For tracking resource downloads and interactions
   - `useCommunityAnalytics`: For tracking community engagement

## Event Tracking Structure

### Event Categories

- `navigation`: User navigation through the site
- `engagement`: General user engagement with content
- `conversion`: Completion of key conversion actions
- `content`: Interactions with content pages
- `resource`: Interactions with downloadable resources
- `lesson`: Interactions with lesson content
- `community`: Interactions with community features

### Event Actions

- `click`: User clicks on elements
- `view`: Content views
- `download`: Resource downloads
- `complete`: Completion of tasks or lessons
- `start`: Starting lessons or processes
- `share`: Sharing content
- `subscribe`: Subscription actions
- `search`: Search actions

## Implementation Examples

### Page View Tracking

Page views are automatically tracked through the `AnalyticsProvider` component.

### Navigation Tracking

```jsx
<Link 
  to="/resources" 
  onClick={() => trackNavigation('header_resources')}
>
  Resources
</Link>
```

### Lesson Tracking

```jsx
const { trackSectionView, trackActionComplete } = useLessonAnalytics({
  id: 'business-planning',
  title: 'Business Planning',
  category: 'getting-started'
});

// Track section view
trackSectionView('section_1');

// Track action completion
trackActionComplete('action_1');
```

### Resource Tracking

```jsx
const { trackResourceDownload } = useResourceAnalytics();

trackResourceDownload({
  id: 'business-plan-template',
  title: 'Business Plan Template',
  category: 'planning',
  type: 'template'
});
```

## GDPR Compliance

The analytics implementation includes GDPR compliance features:

- IP anonymization
- Consent management
- Cookie flags for secure and SameSite cookies

## Debugging

In development mode, analytics events are logged to the console for debugging purposes.

## Adding New Tracking

To add tracking to a new component:

1. Import the appropriate analytics hook:
   ```jsx
   import { useAnalyticsContext } from '../components/analytics/AnalyticsProvider';
   // or
   import { useLessonAnalytics } from '../hooks/useLessonAnalytics';
   ```

2. Use the hook in your component:
   ```jsx
   const { trackEvent, EventCategory, EventAction } = useAnalyticsContext();
   ```

3. Track events at appropriate points:
   ```jsx
   trackEvent(EventAction.CLICK, EventCategory.ENGAGEMENT, 'feature_name');
   ```