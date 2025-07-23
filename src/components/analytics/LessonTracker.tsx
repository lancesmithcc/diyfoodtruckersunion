import React, { useEffect, useRef } from 'react';
import { useLessonTracking, useScrollTracking, useTimeTracking } from '../../hooks/useAnalytics';

interface LessonTrackerProps {
  lessonTitle: string;
  category: string;
  difficulty?: string;
  children: React.ReactNode;
  autoTrackStart?: boolean;
  trackScrollDepth?: boolean;
  trackTimeOnPage?: boolean;
}

export const LessonTracker: React.FC<LessonTrackerProps> = ({
  lessonTitle,
  category,
  difficulty,
  children,
  autoTrackStart = true,
  trackScrollDepth = true,
  trackTimeOnPage = true
}) => {
  const { trackStart, trackProgress, trackComplete } = useLessonTracking(lessonTitle, category, difficulty);
  const hasAutoStarted = useRef(false);

  // Auto-track lesson start
  useEffect(() => {
    if (autoTrackStart && !hasAutoStarted.current) {
      trackStart();
      hasAutoStarted.current = true;
    }
  }, [autoTrackStart, trackStart]);

  // Enable scroll tracking
  if (trackScrollDepth) {
    useScrollTracking([25, 50, 75, 90, 100]);
  }

  // Enable time tracking
  if (trackTimeOnPage) {
    useTimeTracking(30000); // Track every 30 seconds
  }

  // Expose tracking functions to children via context or ref
  const trackerRef = useRef({
    trackStart,
    trackProgress,
    trackComplete
  });

  return (
    <div data-lesson-tracker={lessonTitle}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            lessonTracker: trackerRef.current
          } as any);
        }
        return child;
      })}
    </div>
  );
};

export default LessonTracker;