import { ContentTaxonomy, LLMContextData, FAQItem, ContentSection } from '../types/seo';

/**
 * LLM Optimization utilities for making content more AI-friendly
 */
export class LLMOptimizer {
  /**
   * Generate content taxonomy for better LLM understanding
   */
  static generateContentTaxonomy(content: string, topic: string): ContentTaxonomy {
    return {
      primaryTopic: topic,
      secondaryTopics: this.extractSecondaryTopics(content),
      targetAudience: this.determineTargetAudience(content),
      businessStage: this.determineBusinessStage(content),
      contentType: this.determineContentType(content),
      tags: this.extractTags(content, topic)
    };
  }

  /**
   * Extract secondary topics from content
   */
  private static extractSecondaryTopics(content: string): string[] {
    const topics = new Set<string>();
    const topicKeywords = [
      'permits', 'licensing', 'equipment', 'financing', 'marketing',
      'operations', 'staffing', 'inventory', 'location', 'menu',
      'pricing', 'costs', 'profit', 'customers', 'competition',
      'technology', 'safety', 'health', 'insurance', 'taxes'
    ];

    const lowerContent = content.toLowerCase();
    topicKeywords.forEach(keyword => {
      if (lowerContent.includes(keyword)) {
        topics.add(keyword);
      }
    });

    return Array.from(topics);
  }

  /**
   * Determine target audience from content
   */
  private static determineTargetAudience(content: string): ContentTaxonomy['targetAudience'] {
    const lowerContent = content.toLowerCase();
    
    if (lowerContent.includes('start') || lowerContent.includes('beginner') || lowerContent.includes('planning')) {
      return 'aspiring-owners';
    } else if (lowerContent.includes('operate') || lowerContent.includes('manage') || lowerContent.includes('staff')) {
      return 'current-operators';
    } else if (lowerContent.includes('invest') || lowerContent.includes('funding') || lowerContent.includes('financing')) {
      return 'investors';
    }
    
    return 'general';
  }

  /**
   * Determine business stage from content
   */
  private static determineBusinessStage(content: string): ContentTaxonomy['businessStage'] {
    const lowerContent = content.toLowerCase();
    
    if (lowerContent.includes('plan') || lowerContent.includes('start') || lowerContent.includes('research')) {
      return 'planning';
    } else if (lowerContent.includes('launch') || lowerContent.includes('begin') || lowerContent.includes('setup')) {
      return 'startup';
    } else if (lowerContent.includes('operate') || lowerContent.includes('manage') || lowerContent.includes('daily')) {
      return 'operations';
    } else if (lowerContent.includes('grow') || lowerContent.includes('expand') || lowerContent.includes('scale')) {
      return 'growth';
    }
    
    return 'all';
  }

  /**
   * Determine content type
   */
  private static determineContentType(content: string): ContentTaxonomy['contentType'] {
    const lowerContent = content.toLowerCase();
    
    if (lowerContent.includes('lesson') || lowerContent.includes('learn') || lowerContent.includes('guide')) {
      return 'lesson';
    } else if (lowerContent.includes('tool') || lowerContent.includes('calculator') || lowerContent.includes('template')) {
      return 'tool';
    } else if (lowerContent.includes('resource') || lowerContent.includes('download') || lowerContent.includes('template')) {
      return 'resource';
    } else if (lowerContent.includes('community') || lowerContent.includes('discord') || lowerContent.includes('network')) {
      return 'community';
    }
    
    return 'guide';
  }

  /**
   * Extract relevant tags from content
   */
  private static extractTags(content: string, primaryTopic: string): string[] {
    const tags = new Set<string>([primaryTopic]);
    const tagPatterns = [
      /cost[s]?\b/gi,
      /permit[s]?\b/gi,
      /equipment\b/gi,
      /location[s]?\b/gi,
      /menu\b/gi,
      /pricing\b/gi,
      /marketing\b/gi,
      /staffing\b/gi,
      /inventory\b/gi,
      /financing\b/gi,
      /insurance\b/gi,
      /taxes\b/gi,
      /safety\b/gi,
      /health\b/gi
    ];

    tagPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        matches.forEach(match => tags.add(match.toLowerCase()));
      }
    });

    return Array.from(tags);
  }

  /**
   * Generate LLM context data for better AI understanding
   */
  static generateLLMContext(pageData: {
    title: string;
    description: string;
    content: string;
    category: string;
    difficulty?: string;
  }): LLMContextData {
    return {
      pageContext: this.generatePageContext(pageData),
      expertiseLevel: pageData.difficulty || 'beginner',
      keyInsights: this.extractKeyInsights(pageData.content),
      actionableAdvice: this.extractActionableAdvice(pageData.content),
      relatedConcepts: this.extractRelatedConcepts(pageData.content),
      commonQuestions: this.generateCommonQuestions(pageData),
      authoritySignals: this.generateAuthoritySignals(pageData)
    };
  }

  /**
   * Generate page context for LLMs
   */
  private static generatePageContext(pageData: {
    title: string;
    description: string;
    category: string;
  }): string {
    return `This is a comprehensive guide about ${pageData.title.toLowerCase()} for food truck entrepreneurs. 
    The content focuses on ${pageData.category.replace('-', ' ')} aspects of food truck business operations. 
    This resource provides practical, actionable advice for ${pageData.description.toLowerCase()}.`;
  }

  /**
   * Extract key insights from content
   */
  private static extractKeyInsights(content: string): string[] {
    const insights: string[] = [];
    const insightPatterns = [
      /(?:key insight|important|crucial|essential|critical)[^.]*\./gi,
      /(?:remember|note|keep in mind)[^.]*\./gi,
      /(?:pro tip|expert tip|professional advice)[^.]*\./gi
    ];

    insightPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        insights.push(...matches.slice(0, 3)); // Limit to 3 insights
      }
    });

    return insights.length > 0 ? insights : [
      'Food truck success requires careful planning and preparation',
      'Understanding local regulations is crucial for compliance',
      'Building relationships with suppliers and customers is essential'
    ];
  }

  /**
   * Extract actionable advice from content
   */
  private static extractActionableAdvice(content: string): string[] {
    const advice: string[] = [];
    const actionPatterns = [
      /(?:you should|you need to|you must|start by|begin with)[^.]*\./gi,
      /(?:action step|next step|take action)[^.]*\./gi,
      /(?:recommend|suggest|advise)[^.]*\./gi
    ];

    actionPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        advice.push(...matches.slice(0, 5)); // Limit to 5 pieces of advice
      }
    });

    return advice.length > 0 ? advice : [
      'Research your local market and competition thoroughly',
      'Create a detailed business plan before starting',
      'Build relationships with local suppliers and vendors',
      'Develop a strong online presence and social media strategy',
      'Focus on food safety and quality control from day one'
    ];
  }

  /**
   * Extract related concepts from content
   */
  private static extractRelatedConcepts(content: string): string[] {
    const concepts = new Set<string>();
    const conceptKeywords = [
      'business plan', 'market research', 'financial planning',
      'permit requirements', 'equipment selection', 'location strategy',
      'menu development', 'pricing strategy', 'marketing plan',
      'staff management', 'inventory control', 'quality assurance',
      'customer service', 'brand development', 'technology integration'
    ];

    const lowerContent = content.toLowerCase();
    conceptKeywords.forEach(concept => {
      if (lowerContent.includes(concept)) {
        concepts.add(concept);
      }
    });

    return Array.from(concepts);
  }

  /**
   * Generate common questions based on content
   */
  private static generateCommonQuestions(pageData: {
    title: string;
    category: string;
  }): FAQItem[] {
    const baseQuestions = [
      {
        question: `How much does it cost to ${pageData.title.toLowerCase()}?`,
        answer: `Costs vary depending on your location, scale, and specific requirements. Research local market conditions and consult with experienced food truck operators in your area for accurate estimates.`
      },
      {
        question: `What permits do I need for ${pageData.title.toLowerCase()}?`,
        answer: `Permit requirements vary by location. Contact your local city and county offices for specific requirements. Common permits include business license, food service permit, and mobile vendor permit.`
      },
      {
        question: `How long does it take to ${pageData.title.toLowerCase()}?`,
        answer: `Timeline varies from weeks to months depending on complexity and local regulations. Plan for 1-3 months for most food truck business activities, longer for complex setups.`
      }
    ];

    return baseQuestions;
  }

  /**
   * Generate authority signals for credibility
   */
  private static generateAuthoritySignals(pageData: {
    title: string;
    category: string;
  }): string[] {
    return [
      'Comprehensive food truck business guidance',
      'Expert advice from industry professionals',
      'Practical, real-world implementation strategies',
      'Up-to-date regulatory and compliance information',
      'Proven business development methodologies'
    ];
  }

  /**
   * Add semantic HTML structure for better LLM parsing
   */
  static addSemanticStructure(content: string): string {
    // This would be used to enhance HTML content with semantic markup
    // For now, return the content as-is
    return content;
  }

  /**
   * Generate content summary for LLMs
   */
  static generateContentSummary(content: string, maxLength: number = 200): string {
    // Simple summary generation - in production, you might use more sophisticated NLP
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 10);
    const summary = sentences.slice(0, 3).join('. ') + '.';
    
    return summary.length > maxLength 
      ? summary.substring(0, maxLength - 3) + '...'
      : summary;
  }
}

/**
 * Utility functions for LLM-friendly content formatting
 */
export const LLMContentUtils = {
  /**
   * Format content with clear section breaks for LLMs
   */
  formatForLLM(content: string): string {
    return content
      .replace(/\n{3,}/g, '\n\n') // Normalize line breaks
      .replace(/([.!?])\s*\n/g, '$1\n\n') // Add space after sentences
      .trim();
  },

  /**
   * Add context markers for LLMs
   */
  addContextMarkers(content: string, context: string): string {
    return `[CONTEXT: ${context}]\n\n${content}\n\n[END CONTEXT]`;
  },

  /**
   * Extract structured data from content for LLMs
   */
  extractStructuredData(content: string): {
    topics: string[];
    actions: string[];
    tips: string[];
    warnings: string[];
  } {
    const topics: string[] = [];
    const actions: string[] = [];
    const tips: string[] = [];
    const warnings: string[] = [];

    const lines = content.split('\n');
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
        const item = trimmed.substring(1).trim();
        if (item.toLowerCase().includes('warning') || item.toLowerCase().includes('caution')) {
          warnings.push(item);
        } else if (item.toLowerCase().includes('tip') || item.toLowerCase().includes('pro tip')) {
          tips.push(item);
        } else if (item.toLowerCase().includes('action') || item.toLowerCase().includes('step')) {
          actions.push(item);
        } else {
          topics.push(item);
        }
      }
    });

    return { topics, actions, tips, warnings };
  }
}; 