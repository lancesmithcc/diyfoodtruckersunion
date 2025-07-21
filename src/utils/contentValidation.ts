/**
 * Content Structure Validation Utilities
 * Provides automated validation for heading hierarchy, content quality, and SEO issues
 */

export interface ValidationIssue {
  type: 'error' | 'warning' | 'info';
  category: 'heading' | 'content' | 'seo' | 'accessibility';
  message: string;
  element?: string;
  suggestion?: string;
}

export interface ContentMetrics {
  wordCount: number;
  readingTime: number; // in minutes
  readabilityScore: number; // 0-100, higher is better
  headingCount: { [key: string]: number };
  linkCount: number;
  imageCount: number;
}

/**
 * Validates heading hierarchy in a document or component
 */
export class HeadingValidator {
  private issues: ValidationIssue[] = [];

  validateHeadingHierarchy(container: HTMLElement | Document = document): ValidationIssue[] {
    this.issues = [];
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    if (headings.length === 0) {
      this.issues.push({
        type: 'warning',
        category: 'heading',
        message: 'No headings found in content',
        suggestion: 'Add proper heading structure for better SEO and accessibility'
      });
      return this.issues;
    }

    let previousLevel = 0;
    let h1Count = 0;

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent?.trim() || '';

      // Check for H1 usage
      if (level === 1) {
        h1Count++;
        if (h1Count > 1) {
          this.issues.push({
            type: 'error',
            category: 'heading',
            message: `Multiple H1 tags found (${h1Count} total)`,
            element: heading.tagName,
            suggestion: 'Use only one H1 per page for proper SEO hierarchy'
          });
        }
      }

      // Check for proper hierarchy
      if (index > 0 && level > previousLevel + 1) {
        this.issues.push({
          type: 'warning',
          category: 'heading',
          message: `Heading level skipped: ${heading.tagName} follows H${previousLevel}`,
          element: heading.tagName,
          suggestion: `Use H${previousLevel + 1} instead of ${heading.tagName} for proper hierarchy`
        });
      }

      // Check for empty headings
      if (!text) {
        this.issues.push({
          type: 'error',
          category: 'heading',
          message: `Empty ${heading.tagName} found`,
          element: heading.tagName,
          suggestion: 'Add descriptive text to all headings'
        });
      }

      // Check for very short headings
      if (text.length < 3) {
        this.issues.push({
          type: 'warning',
          category: 'heading',
          message: `Very short ${heading.tagName}: "${text}"`,
          element: heading.tagName,
          suggestion: 'Use more descriptive heading text for better SEO'
        });
      }

      // Check for very long headings
      if (text.length > 60) {
        this.issues.push({
          type: 'warning',
          category: 'heading',
          message: `Long ${heading.tagName} (${text.length} chars): "${text.substring(0, 50)}..."`,
          element: heading.tagName,
          suggestion: 'Keep headings under 60 characters for better readability'
        });
      }

      previousLevel = level;
    });

    // Check for missing H1
    if (h1Count === 0) {
      this.issues.push({
        type: 'error',
        category: 'heading',
        message: 'No H1 tag found on page',
        suggestion: 'Add an H1 tag as the main page heading for SEO'
      });
    }

    return this.issues;
  }
}

/**
 * Validates content quality and readability
 */
export class ContentQualityValidator {
  private issues: ValidationIssue[] = [];

  validateContent(container: HTMLElement | Document = document): {
    issues: ValidationIssue[];
    metrics: ContentMetrics;
  } {
    this.issues = [];
    const textContent = this.extractTextContent(container);
    const metrics = this.calculateMetrics(container, textContent);

    // Validate content length
    if (metrics.wordCount < 50) {
      this.issues.push({
        type: 'warning',
        category: 'content',
        message: `Very short content (${metrics.wordCount} words)`,
        suggestion: 'Add more content for better SEO value (aim for 300+ words)'
      });
    } else if (metrics.wordCount < 300) {
      this.issues.push({
        type: 'info',
        category: 'content',
        message: `Short content (${metrics.wordCount} words)`,
        suggestion: 'Consider expanding content for better SEO performance'
      });
    }

    // Validate readability
    if (metrics.readabilityScore < 30) {
      this.issues.push({
        type: 'warning',
        category: 'content',
        message: `Low readability score (${metrics.readabilityScore})`,
        suggestion: 'Use shorter sentences and simpler words to improve readability'
      });
    }

    // Validate heading distribution
    const headingRatio = Object.values(metrics.headingCount).reduce((a, b) => a + b, 0) / metrics.wordCount * 100;
    if (headingRatio < 1) {
      this.issues.push({
        type: 'info',
        category: 'content',
        message: 'Low heading density',
        suggestion: 'Add more headings to break up content and improve structure'
      });
    }

    // Validate images
    if (metrics.imageCount === 0 && metrics.wordCount > 500) {
      this.issues.push({
        type: 'info',
        category: 'content',
        message: 'No images found in long content',
        suggestion: 'Add relevant images to improve engagement and SEO'
      });
    }

    return { issues: this.issues, metrics };
  }

  private extractTextContent(container: HTMLElement | Document): string {
    const walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          
          // Skip script, style, and other non-content elements
          const skipTags = ['script', 'style', 'nav', 'header', 'footer'];
          if (skipTags.includes(parent.tagName.toLowerCase())) {
            return NodeFilter.FILTER_REJECT;
          }
          
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let text = '';
    let node;
    while (node = walker.nextNode()) {
      text += node.textContent + ' ';
    }

    return text.trim();
  }

  private calculateMetrics(container: HTMLElement | Document, textContent: string): ContentMetrics {
    const words = textContent.split(/\s+/).filter(word => word.length > 0);
    const sentences = textContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    // Simple readability calculation (Flesch Reading Ease approximation)
    const avgWordsPerSentence = words.length / Math.max(sentences.length, 1);
    const avgSyllablesPerWord = this.estimateSyllables(words);
    const readabilityScore = Math.max(0, Math.min(100, 
      206.835 - (1.015 * avgWordsPerSentence) - (84.6 * avgSyllablesPerWord)
    ));

    // Count headings
    const headingCount: { [key: string]: number } = {};
    for (let i = 1; i <= 6; i++) {
      const count = container.querySelectorAll(`h${i}`).length;
      if (count > 0) {
        headingCount[`h${i}`] = count;
      }
    }

    return {
      wordCount: words.length,
      readingTime: Math.ceil(words.length / 200), // Assuming 200 words per minute
      readabilityScore: Math.round(readabilityScore),
      headingCount,
      linkCount: container.querySelectorAll('a[href]').length,
      imageCount: container.querySelectorAll('img').length
    };
  }

  private estimateSyllables(words: string[]): number {
    const totalSyllables = words.reduce((total, word) => {
      // Simple syllable estimation
      const vowels = word.toLowerCase().match(/[aeiouy]+/g);
      let syllables = vowels ? vowels.length : 1;
      
      // Adjust for silent e
      if (word.toLowerCase().endsWith('e')) {
        syllables = Math.max(1, syllables - 1);
      }
      
      return total + syllables;
    }, 0);

    return totalSyllables / Math.max(words.length, 1);
  }
}

/**
 * SEO-specific validation
 */
export class SEOValidator {
  private issues: ValidationIssue[] = [];

  validateSEO(container: HTMLElement | Document = document): ValidationIssue[] {
    this.issues = [];

    // Check meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      this.issues.push({
        type: 'error',
        category: 'seo',
        message: 'Missing meta description',
        suggestion: 'Add a meta description tag for better search engine visibility'
      });
    } else {
      const content = metaDescription.getAttribute('content') || '';
      if (content.length < 120) {
        this.issues.push({
          type: 'warning',
          category: 'seo',
          message: `Short meta description (${content.length} chars)`,
          suggestion: 'Expand meta description to 150-160 characters for optimal SEO'
        });
      } else if (content.length > 160) {
        this.issues.push({
          type: 'warning',
          category: 'seo',
          message: `Long meta description (${content.length} chars)`,
          suggestion: 'Shorten meta description to under 160 characters to avoid truncation'
        });
      }
    }

    // Check title tag
    const title = document.querySelector('title');
    if (!title || !title.textContent?.trim()) {
      this.issues.push({
        type: 'error',
        category: 'seo',
        message: 'Missing or empty title tag',
        suggestion: 'Add a descriptive title tag for SEO'
      });
    } else {
      const titleText = title.textContent.trim();
      if (titleText.length < 30) {
        this.issues.push({
          type: 'warning',
          category: 'seo',
          message: `Short title tag (${titleText.length} chars)`,
          suggestion: 'Expand title to 50-60 characters for better SEO'
        });
      } else if (titleText.length > 60) {
        this.issues.push({
          type: 'warning',
          category: 'seo',
          message: `Long title tag (${titleText.length} chars)`,
          suggestion: 'Shorten title to under 60 characters to avoid truncation'
        });
      }
    }

    // Check for alt text on images
    const images = container.querySelectorAll('img');
    let missingAltCount = 0;
    images.forEach(img => {
      const alt = img.getAttribute('alt');
      if (!alt || alt.trim() === '') {
        missingAltCount++;
      }
    });

    if (missingAltCount > 0) {
      this.issues.push({
        type: 'warning',
        category: 'accessibility',
        message: `${missingAltCount} images missing alt text`,
        suggestion: 'Add descriptive alt text to all images for accessibility and SEO'
      });
    }

    // Check for proper link structure
    const links = container.querySelectorAll('a[href]');
    let externalLinksWithoutRel = 0;
    links.forEach(link => {
      const href = link.getAttribute('href') || '';
      const rel = link.getAttribute('rel') || '';
      
      if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        if (!rel.includes('noopener') || !rel.includes('noreferrer')) {
          externalLinksWithoutRel++;
        }
      }
    });

    if (externalLinksWithoutRel > 0) {
      this.issues.push({
        type: 'info',
        category: 'seo',
        message: `${externalLinksWithoutRel} external links without proper rel attributes`,
        suggestion: 'Add rel="noopener noreferrer" to external links for security'
      });
    }

    return this.issues;
  }
}

/**
 * Main validation function that runs all validators
 */
export function validatePageContent(container?: HTMLElement): {
  issues: ValidationIssue[];
  metrics: ContentMetrics;
} {
  const targetContainer = container || document;
  
  const headingValidator = new HeadingValidator();
  const contentValidator = new ContentQualityValidator();
  const seoValidator = new SEOValidator();

  const headingIssues = headingValidator.validateHeadingHierarchy(targetContainer);
  const { issues: contentIssues, metrics } = contentValidator.validateContent(targetContainer);
  const seoIssues = seoValidator.validateSEO(targetContainer);

  const allIssues = [...headingIssues, ...contentIssues, ...seoIssues];

  return {
    issues: allIssues,
    metrics
  };
}

/**
 * Development-only function to log validation results to console
 */
export function logValidationResults(results: { issues: ValidationIssue[]; metrics: ContentMetrics }) {
  if (process.env.NODE_ENV !== 'development') return;

  console.group('🔍 Content Validation Results');
  
  // Log metrics
  console.group('📊 Content Metrics');
  console.log('Word count:', results.metrics.wordCount);
  console.log('Reading time:', results.metrics.readingTime, 'minutes');
  console.log('Readability score:', results.metrics.readabilityScore);
  console.log('Headings:', results.metrics.headingCount);
  console.log('Links:', results.metrics.linkCount);
  console.log('Images:', results.metrics.imageCount);
  console.groupEnd();

  // Log issues by category
  const issuesByCategory = results.issues.reduce((acc, issue) => {
    if (!acc[issue.category]) acc[issue.category] = [];
    acc[issue.category].push(issue);
    return acc;
  }, {} as { [key: string]: ValidationIssue[] });

  Object.entries(issuesByCategory).forEach(([category, issues]) => {
    console.group(`${getCategoryIcon(category)} ${category.toUpperCase()} (${issues.length})`);
    issues.forEach(issue => {
      const logFn = issue.type === 'error' ? console.error : 
                   issue.type === 'warning' ? console.warn : console.info;
      logFn(`${getTypeIcon(issue.type)} ${issue.message}`);
      if (issue.suggestion) {
        console.log(`💡 ${issue.suggestion}`);
      }
    });
    console.groupEnd();
  });

  console.groupEnd();
}

function getCategoryIcon(category: string): string {
  const icons = {
    heading: '📝',
    content: '📄',
    seo: '🔍',
    accessibility: '♿'
  };
  return icons[category as keyof typeof icons] || '📋';
}

function getTypeIcon(type: string): string {
  const icons = {
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  return icons[type as keyof typeof icons] || '📝';
}