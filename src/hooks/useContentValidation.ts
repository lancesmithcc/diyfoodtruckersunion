import { useEffect, useRef } from 'react';
import { validatePageContent, logValidationResults, ValidationIssue, ContentMetrics } from '../utils/contentValidation';

interface UseContentValidationOptions {
  enabled?: boolean;
  autoLog?: boolean;
  container?: HTMLElement;
  onValidation?: (results: { issues: ValidationIssue[]; metrics: ContentMetrics }) => void;
}

/**
 * React hook for automatic content validation during development
 */
export function useContentValidation(options: UseContentValidationOptions = {}) {
  const {
    enabled = process.env.NODE_ENV === 'development',
    autoLog = true,
    container,
    onValidation
  } = options;

  const validationTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!enabled) return;

    const runValidation = () => {
      // Clear any existing timeout
      if (validationTimeoutRef.current) {
        clearTimeout(validationTimeoutRef.current);
      }

      // Debounce validation to avoid excessive runs
      validationTimeoutRef.current = setTimeout(() => {
        try {
          const results = validatePageContent(container);
          
          if (autoLog) {
            logValidationResults(results);
          }
          
          if (onValidation) {
            onValidation(results);
          }
        } catch (error) {
          console.error('Content validation error:', error);
        }
      }, 1000);
    };

    // Run initial validation
    runValidation();

    // Set up mutation observer to re-validate when content changes
    const observer = new MutationObserver(() => {
      runValidation();
    });

    observer.observe(container || document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['alt', 'title', 'href', 'rel']
    });

    return () => {
      observer.disconnect();
      if (validationTimeoutRef.current) {
        clearTimeout(validationTimeoutRef.current);
      }
    };
  }, [enabled, autoLog, container, onValidation]);

  // Manual validation function
  const validate = () => {
    if (!enabled) return null;
    return validatePageContent(container);
  };

  return { validate };
}

/**
 * Hook specifically for validating component content
 */
export function useComponentValidation(
  componentRef: React.RefObject<HTMLElement>,
  options: Omit<UseContentValidationOptions, 'container'> = {}
) {
  return useContentValidation({
    ...options,
    container: componentRef.current || undefined
  });
}