import React from 'react';
import { LLMOptimizer, LLMContentUtils } from '../utils/llmOptimization';
import { ContentTaxonomy, LLMContextData } from '../types/seo';

interface LLMContentWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  content: string;
  category: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  className?: string;
  showTaxonomy?: boolean;
  showContext?: boolean;
}

/**
 * Wrapper component that enhances content for LLM readability and SEO
 */
export const LLMContentWrapper: React.FC<LLMContentWrapperProps> = ({
  children,
  title,
  description,
  content,
  category,
  difficulty = 'beginner',
  className = '',
  showTaxonomy = true,
  showContext = true
}) => {
  // Generate LLM context data
  const llmContext = React.useMemo(() => {
    return LLMOptimizer.generateLLMContext({
      title,
      description,
      content,
      category,
      difficulty
    });
  }, [title, description, content, category, difficulty]);

  // Generate content taxonomy
  const taxonomy = React.useMemo(() => {
    return LLMOptimizer.generateContentTaxonomy(content, title);
  }, [content, title]);

  // Extract structured data for better LLM understanding
  const structuredData = React.useMemo(() => {
    return LLMContentUtils.extractStructuredData(content);
  }, [content]);

  return (
    <article 
      className={`llm-content-wrapper ${className}`}
      data-llm-context={showContext ? JSON.stringify(llmContext) : undefined}
      data-taxonomy={showTaxonomy ? JSON.stringify(taxonomy) : undefined}
    >
      {/* Content Taxonomy for LLMs */}
      {showTaxonomy && (
        <div className="hidden" aria-hidden="true">
          <meta itemProp="primaryTopic" content={taxonomy.primaryTopic} />
          <meta itemProp="targetAudience" content={taxonomy.targetAudience} />
          <meta itemProp="businessStage" content={taxonomy.businessStage} />
          <meta itemProp="contentType" content={taxonomy.contentType} />
          {taxonomy.tags.map((tag, index) => (
            <meta key={index} itemProp="tag" content={tag} />
          ))}
        </div>
      )}

      {/* LLM Context Information */}
      {showContext && (
        <div className="hidden" aria-hidden="true">
          <meta itemProp="pageContext" content={llmContext.pageContext} />
          <meta itemProp="expertiseLevel" content={llmContext.expertiseLevel} />
          {llmContext.keyInsights.map((insight, index) => (
            <meta key={index} itemProp="keyInsight" content={insight} />
          ))}
          {llmContext.actionableAdvice.map((advice, index) => (
            <meta key={index} itemProp="actionableAdvice" content={advice} />
          ))}
          {llmContext.relatedConcepts.map((concept, index) => (
            <meta key={index} itemProp="relatedConcept" content={concept} />
          ))}
          {llmContext.authoritySignals.map((signal, index) => (
            <meta key={index} itemProp="authoritySignal" content={signal} />
          ))}
        </div>
      )}

      {/* Structured Content Sections for LLMs */}
      <div className="hidden" aria-hidden="true">
        {structuredData.topics.length > 0 && (
          <section data-content-type="topics">
            <h3>Key Topics</h3>
            <ul>
              {structuredData.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </section>
        )}
        
        {structuredData.actions.length > 0 && (
          <section data-content-type="actions">
            <h3>Action Steps</h3>
            <ul>
              {structuredData.actions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </section>
        )}
        
        {structuredData.tips.length > 0 && (
          <section data-content-type="tips">
            <h3>Pro Tips</h3>
            <ul>
              {structuredData.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </section>
        )}
        
        {structuredData.warnings.length > 0 && (
          <section data-content-type="warnings">
            <h3>Important Warnings</h3>
            <ul>
              {structuredData.warnings.map((warning, index) => (
                <li key={index}>{warning}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {children}
      </div>

      {/* Content Summary for LLMs */}
      <div className="hidden" aria-hidden="true">
        <meta itemProp="summary" content={LLMOptimizer.generateContentSummary(content)} />
      </div>
    </article>
  );
};

/**
 * Enhanced heading component with LLM-friendly attributes
 */
interface LLMHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  topic?: string;
  difficulty?: string;
}

export const LLMHeading: React.FC<LLMHeadingProps> = ({
  level,
  children,
  className = '',
  topic,
  difficulty
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <HeadingTag 
      className={`llm-heading ${className}`}
      data-topic={topic}
      data-difficulty={difficulty}
      data-heading-level={level}
    >
      {children}
    </HeadingTag>
  );
};

/**
 * Enhanced paragraph component with LLM-friendly attributes
 */
interface LLMParagraphProps {
  children: React.ReactNode;
  className?: string;
  contentType?: 'explanation' | 'instruction' | 'tip' | 'warning' | 'example';
  topic?: string;
}

export const LLMParagraph: React.FC<LLMParagraphProps> = ({
  children,
  className = '',
  contentType = 'explanation',
  topic
}) => {
  return (
    <p 
      className={`llm-paragraph ${className}`}
      data-content-type={contentType}
      data-topic={topic}
    >
      {children}
    </p>
  );
};

/**
 * Enhanced list component with LLM-friendly attributes
 */
interface LLMListProps {
  children: React.ReactNode;
  className?: string;
  listType?: 'unordered' | 'ordered';
  contentType?: 'steps' | 'tips' | 'requirements' | 'benefits' | 'examples' | 'warnings';
  topic?: string;
}

export const LLMList: React.FC<LLMListProps> = ({
  children,
  className = '',
  listType = 'unordered',
  contentType = 'steps',
  topic
}) => {
  const ListTag = listType === 'ordered' ? 'ol' : 'ul';
  
  return (
    <ListTag 
      className={`llm-list ${className}`}
      data-list-type={listType}
      data-content-type={contentType}
      data-topic={topic}
    >
      {children}
    </ListTag>
  );
};

/**
 * Enhanced list item component
 */
interface LLMListItemProps {
  children: React.ReactNode;
  className?: string;
  itemType?: 'step' | 'tip' | 'requirement' | 'benefit' | 'example' | 'warning';
  importance?: 'low' | 'medium' | 'high';
}

export const LLMListItem: React.FC<LLMListItemProps> = ({
  children,
  className = '',
  itemType = 'step',
  importance = 'medium'
}) => {
  return (
    <li 
      className={`llm-list-item ${className}`}
      data-item-type={itemType}
      data-importance={importance}
    >
      {children}
    </li>
  );
};

/**
 * Content section wrapper for better LLM structure
 */
interface LLMContentSectionProps {
  children: React.ReactNode;
  className?: string;
  sectionType?: 'introduction' | 'main-content' | 'summary' | 'resources' | 'next-steps';
  topic?: string;
  difficulty?: string;
}

export const LLMContentSection: React.FC<LLMContentSectionProps> = ({
  children,
  className = '',
  sectionType = 'main-content',
  topic,
  difficulty
}) => {
  return (
    <section 
      className={`llm-content-section ${className}`}
      data-section-type={sectionType}
      data-topic={topic}
      data-difficulty={difficulty}
    >
      {children}
    </section>
  );
};

export default LLMContentWrapper; 