import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smile, MessageCircle, Heart, Star, Users, TrendingUp, CheckCircle, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CustomerServiceLesson: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedActions, setCompletedActions] = useState<{ [key: number]: boolean[] }>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.lesson-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [currentStep]);

  const toggleActionItem = (stepIndex: number, actionIndex: number) => {
    setCompletedActions(prev => ({
      ...prev,
      [stepIndex]: {
        ...prev[stepIndex],
        [actionIndex]: !prev[stepIndex]?.[actionIndex]
      }
    }));
  };

  const getCompletedCount = (stepIndex: number) => {
    const actions = completedActions[stepIndex];
    if (!actions) return 0;
    return Object.values(actions).filter(Boolean).length;
  };

  const lessonSteps = [
    {
      icon: Smile,
      title: 'Service Standards & Customer Experience Design',
      priority: 'Critical',
      impact: 'Increase satisfaction 80%',
      content: `Exceptional customer service differentiates your food truck from competitors and builds lasting customer loyalty. Systematic service standards ensure consistent, memorable experiences that drive repeat business and positive word-of-mouth marketing.

**Service Philosophy Development:**
Establish a clear service philosophy that reflects your brand values and resonates with your target customers. Canadian customers often value politeness, authenticity, and community connection. Your service philosophy should emphasize genuine hospitality, quality food, and positive interactions.

**Customer Journey Mapping:**
Map the complete customer experience from initial awareness through post-purchase follow-up. Identify every touchpoint including social media discovery, arrival at your truck, ordering process, food preparation wait, service delivery, and follow-up engagement.

**Service Standard Framework:**
**Greeting and Welcome:** Establish consistent greeting procedures that make customers feel welcomed and valued. Train staff to acknowledge customers within 30 seconds of arrival, make eye contact, smile genuinely, and use friendly, professional language.

**Order Taking Excellence:** Develop systematic order-taking procedures that ensure accuracy while building rapport. Staff should listen actively, repeat orders for confirmation, suggest complementary items appropriately, and handle special requests graciously.

**Communication Standards:** Create communication guidelines that reflect your brand personality while maintaining professionalism. Whether casual and fun or sophisticated and refined, consistency in tone and language builds brand recognition.

**Wait Time Management:** Implement systems for managing customer wait times including realistic time estimates, progress updates, and engagement strategies. Keep customers informed and entertained during preparation periods.

**Service Recovery Procedures:** Develop comprehensive procedures for handling service failures, complaints, and special situations. Empower staff to resolve issues quickly and fairly while maintaining positive customer relationships.

**Accessibility and Inclusion:**
Ensure your service standards accommodate customers with diverse needs including mobility limitations, dietary restrictions, language preferences, and cultural considerations. Inclusive service expands your customer base and demonstrates community values.

**Technology Integration:**
Integrate technology solutions that enhance rather than replace personal service. Mobile ordering, loyalty programs, and payment systems should streamline operations while maintaining human connection and personalized service.

**Quality Assurance Systems:**
Implement quality assurance procedures that monitor service delivery and identify improvement opportunities. Use mystery shopping, customer feedback, and staff observations to maintain service standards consistently.

**Canadian Service Values:**
Canadian customers often appreciate modest, authentic service over flashy or aggressive approaches. Emphasize genuine friendliness, respect for diversity, and community connection in your service standards.

**Continuous Improvement Culture:**
Foster a culture of continuous service improvement where staff actively seek ways to enhance customer experiences. Regular team discussions, customer feedback review, and service innovation keep your standards evolving.`,
      actionItems: [
        'Develop comprehensive service philosophy and standards document reflecting your brand values',
        'Create customer journey map identifying all touchpoints and experience opportunities',
        'Establish greeting, order-taking, and communication procedures with staff training materials',
        'Design wait time management and service recovery procedures with staff empowerment guidelines',
        'Implement quality assurance system with customer feedback collection and staff monitoring'
      ],
      tips: [
        'Make every customer interaction feel personal and genuine - authenticity builds stronger connections than scripted responses',
        'Train staff to read customer cues and adapt service style to individual preferences and situations',
        'Empower front-line staff to resolve problems immediately rather than escalating every issue'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Communication Excellence & Conflict Resolution',
      priority: 'Critical',
      impact: 'Resolve 95% of issues positively',
      content: `Effective communication skills enable staff to build rapport, manage expectations, and resolve conflicts while maintaining positive customer relationships. Strong communication prevents many problems and turns potential negative experiences into positive ones.

**Active Listening Techniques:**
Train staff in active listening skills including full attention, eye contact, verbal acknowledgment, and clarifying questions. Active listening demonstrates respect for customers and ensures accurate understanding of needs and concerns.

**Clear Communication Strategies:**
Develop communication strategies that convey information clearly and positively. Use simple language, avoid jargon, provide specific details, and confirm understanding. Clear communication prevents misunderstandings and builds customer confidence.

**Positive Language and Tone:**
**Solution-Focused Language:** Train staff to use positive, solution-focused language that emphasizes what can be done rather than limitations. Instead of "We can't do that," use "Here's what I can offer you."

**Empathetic Responses:** Develop empathetic response techniques that acknowledge customer feelings and demonstrate understanding. Phrases like "I understand your concern" and "Let me help you with that" build rapport and trust.

**Professional Tone:** Maintain professional tone even in challenging situations. Calm, respectful communication often de-escalates tensions and leads to positive resolutions.

**Conflict Resolution Framework:**
**Listen and Acknowledge:** Begin conflict resolution by listening fully to customer concerns and acknowledging their feelings. Validation often reduces emotional intensity and opens dialogue.

**Apologize Appropriately:** Offer sincere apologies for any inconvenience or disappointment, even when the issue isn't directly your fault. Apologies demonstrate care and responsibility.

**Investigate and Understand:** Ask clarifying questions to fully understand the situation and identify the root cause of the problem. Complete understanding enables effective solutions.

**Offer Solutions:** Present multiple solution options when possible, allowing customers to choose their preferred resolution. Options provide control and increase satisfaction with outcomes.

**Follow Through:** Ensure promised solutions are delivered completely and promptly. Follow-up communication confirms resolution and demonstrates commitment to customer satisfaction.

**Difficult Customer Management:**
**Emotional Regulation:** Train staff in emotional regulation techniques that help them remain calm and professional during challenging interactions. Personal emotional control enables effective problem-solving.

**De-escalation Techniques:** Develop de-escalation strategies including lowering voice tone, using calming body language, acknowledging emotions, and focusing on solutions rather than blame.

**Boundary Setting:** Establish clear boundaries for acceptable customer behavior while maintaining respectful service. Staff should know when and how to involve management or end interactions professionally.

**Team Communication Systems:**
**Internal Communication:** Implement effective internal communication systems that keep all staff informed about customer preferences, special requests, and ongoing situations. Good internal communication improves external service.

**Shift Handoffs:** Develop systematic shift handoff procedures that transfer important customer information and ongoing situations between staff members. Continuity improves customer experience.

**Management Escalation:** Create clear escalation procedures that define when and how to involve management in customer situations. Appropriate escalation ensures complex issues receive proper attention.

**Cultural Sensitivity and Inclusion:**
Train staff in cultural sensitivity and inclusive communication that respects diverse backgrounds, languages, and customs. Inclusive communication welcomes all customers and builds community connections.

**Canadian Communication Values:**
Canadian communication often emphasizes politeness, patience, and indirect approaches to conflict resolution. Train staff in communication styles that align with Canadian cultural values while maintaining efficiency.`,
      actionItems: [
        'Develop active listening and clear communication training program with practice scenarios',
        'Create positive language guidelines and empathetic response techniques for staff training',
        'Design comprehensive conflict resolution framework with step-by-step procedures',
        'Establish difficult customer management protocols with de-escalation techniques',
        'Implement team communication systems for internal coordination and customer continuity'
      ],
      tips: [
        'Practice difficult scenarios regularly through role-playing - preparation builds confidence and skill',
        'Focus on understanding the customer\'s underlying need, not just their stated complaint',
        'Remember that how you handle problems often matters more to customers than the problems themselves'
      ]
    },
    {
      icon: Heart,
      title: 'Building Customer Loyalty & Relationships',
      priority: 'High',
      impact: 'Increase repeat business 70%',
      content: `Customer loyalty drives sustainable business success through repeat purchases, higher spending, and positive referrals. Building genuine relationships with customers creates emotional connections that transcend price competition and market fluctuations.

**Relationship Building Strategies:**
**Personal Recognition:** Train staff to recognize and remember regular customers, their preferences, and personal details. Personal recognition makes customers feel valued and creates emotional connections to your business.

**Preference Tracking:** Implement systems for tracking customer preferences including favorite items, dietary restrictions, and service preferences. Personalized service based on preferences demonstrates care and attention.

**Community Engagement:** Actively participate in community events, support local causes, and build relationships with neighborhood businesses. Community involvement creates deeper connections beyond transactional relationships.

**Loyalty Program Development:**
**Program Structure:** Design loyalty programs that reward frequent customers with meaningful benefits. Consider punch cards, points systems, or subscription models that encourage repeat visits and higher spending.

**Reward Variety:** Offer diverse rewards including free items, discounts, exclusive access, and special recognition. Variety appeals to different customer motivations and preferences.

**Program Communication:** Clearly communicate loyalty program benefits and progress to customers. Regular updates and reminders keep the program top-of-mind and encourage participation.

**Customer Appreciation Initiatives:**
**Special Events:** Organize customer appreciation events including exclusive tastings, behind-the-scenes tours, or community gatherings. Special events strengthen relationships and create memorable experiences.

**Surprise and Delight:** Implement surprise and delight strategies including unexpected upgrades, free samples, or personalized notes. Unexpected positive experiences create strong emotional connections.

**Anniversary Recognition:** Celebrate customer anniversaries, birthdays, or special occasions with personalized recognition or special offers. Personal celebrations demonstrate genuine care and attention.

**Feedback and Engagement Systems:**
**Feedback Collection:** Implement systematic feedback collection through surveys, comment cards, social media monitoring, and direct conversations. Regular feedback shows you value customer opinions.

**Response and Action:** Respond promptly to customer feedback and take visible action on suggestions and concerns. Responsive action demonstrates that customer input drives real improvements.

**Community Building:** Create opportunities for customers to connect with each other and your brand through social media groups, events, or shared experiences. Community building extends relationships beyond individual transactions.

**Social Media Relationship Building:**
**Authentic Engagement:** Use social media for authentic engagement rather than just promotion. Respond to comments, share customer stories, and participate in community conversations.

**User-Generated Content:** Encourage and share customer-generated content including photos, reviews, and stories. Customer content builds community and provides authentic marketing.

**Behind-the-Scenes Sharing:** Share behind-the-scenes content that humanizes your brand and builds personal connections. Stories about your team, processes, and values create emotional engagement.

**Customer Service Recovery:**
**Service Recovery Excellence:** Turn service failures into relationship-building opportunities through exceptional recovery efforts. Outstanding recovery often creates stronger loyalty than perfect initial service.

**Follow-Up Communication:** Follow up with customers after resolving issues to ensure satisfaction and demonstrate ongoing care. Follow-up communication shows commitment to long-term relationships.

**Learning and Improvement:** Use service recovery situations as learning opportunities to improve systems and prevent future issues. Visible improvements based on customer experiences build trust and loyalty.

**Long-Term Relationship Strategies:**
**Customer Lifecycle Management:** Develop strategies for managing customer relationships throughout their lifecycle from first visit through long-term loyalty. Different relationship stages require different approaches and attention.

**Retention Analysis:** Analyze customer retention patterns to identify at-risk customers and implement targeted retention strategies. Proactive retention efforts prevent customer loss and maintain relationships.

**Referral Programs:** Implement referral programs that reward loyal customers for bringing new customers to your business. Referral programs leverage existing relationships to build new ones.

**Canadian Relationship Values:**
Canadian customers often value authentic, modest approaches to relationship building over aggressive sales tactics. Focus on genuine care, community connection, and consistent quality rather than flashy loyalty programs.`,
      actionItems: [
        'Develop personal recognition and preference tracking systems for regular customers',
        'Design comprehensive loyalty program with meaningful rewards and clear communication',
        'Create customer appreciation initiatives including events and surprise-and-delight strategies',
        'Implement feedback collection and response systems with visible action on customer input',
        'Establish social media engagement strategy focusing on authentic community building'
      ],
      tips: [
        'Remember that loyalty is earned through consistent positive experiences, not just rewards programs',
        'Focus on building genuine relationships rather than just collecting customer data',
        'Small gestures of appreciation often create stronger loyalty than expensive rewards'
      ]
    },
    {
      icon: Star,
      title: 'Quality Assurance & Service Consistency',
      priority: 'High',
      impact: 'Maintain 95% consistency',
      content: `Consistent service quality builds customer trust and brand reputation while reducing variability that can damage customer relationships. Systematic quality assurance ensures every customer receives the same high-quality experience regardless of staff, time, or circumstances.

**Service Standard Documentation:**
**Detailed Procedures:** Document detailed service procedures for every customer interaction including greetings, order taking, food preparation, service delivery, and follow-up. Written procedures ensure consistency across all staff and shifts.

**Quality Checkpoints:** Establish quality checkpoints throughout the service process where staff verify standards are being met. Regular checkpoints catch issues before they affect customer experience.

**Performance Metrics:** Define measurable performance metrics for service quality including response times, accuracy rates, customer satisfaction scores, and complaint resolution times. Metrics provide objective quality assessment.

**Training and Standardization:**
**Comprehensive Training:** Provide comprehensive training that covers not just what to do, but how to do it consistently. Include role-playing, practice scenarios, and competency assessments to ensure understanding.

**Ongoing Reinforcement:** Implement ongoing training reinforcement through regular refreshers, skill updates, and performance coaching. Continuous reinforcement maintains standards over time.

**Cross-Training Programs:** Cross-train staff in multiple roles to ensure service consistency regardless of staffing changes or absences. Versatile staff maintain quality during challenging periods.

**Monitoring and Assessment Systems:**
**Mystery Shopping:** Implement mystery shopping programs that assess service quality from the customer perspective. External assessment provides objective feedback on actual customer experience.

**Customer Feedback Analysis:** Systematically analyze customer feedback to identify quality trends, recurring issues, and improvement opportunities. Feedback analysis reveals quality gaps and successes.

**Staff Self-Assessment:** Encourage staff self-assessment and peer feedback that builds quality awareness and accountability. Internal assessment creates ownership of quality standards.

**Technology and Quality Control:**
**POS System Integration:** Use POS systems to track service metrics including order accuracy, preparation times, and customer wait times. Technology provides objective quality data.

**Quality Control Checklists:** Implement digital or physical checklists that guide staff through quality procedures and document completion. Checklists ensure nothing is overlooked.

**Real-Time Monitoring:** Use real-time monitoring systems that alert management to quality issues as they occur. Immediate awareness enables quick correction and prevention.

**Continuous Improvement Processes:**
**Quality Review Meetings:** Conduct regular quality review meetings that analyze performance data, discuss challenges, and plan improvements. Team involvement builds commitment to quality.

**Best Practice Sharing:** Share best practices and success stories across the team to reinforce quality behaviors and inspire excellence. Positive examples motivate continued improvement.

**Innovation and Enhancement:** Encourage innovation and enhancement ideas that improve quality while maintaining consistency. Controlled innovation prevents stagnation while preserving standards.

**Crisis and Exception Management:**
**Emergency Procedures:** Develop procedures for maintaining quality during emergencies, equipment failures, or unusual circumstances. Crisis procedures ensure quality doesn't suffer during challenges.

**Exception Handling:** Create guidelines for handling exceptions and special requests while maintaining overall quality standards. Flexibility within standards accommodates customer needs.

**Recovery Protocols:** Implement quality recovery protocols that restore standards quickly after disruptions or failures. Quick recovery minimizes impact on customer experience.

**Quality Culture Development:**
**Leadership Modeling:** Ensure management consistently models quality behaviors and standards. Leadership example sets expectations and demonstrates commitment to quality.

**Recognition and Rewards:** Recognize and reward staff who consistently deliver quality service and contribute to quality improvements. Recognition reinforces quality behaviors and motivates excellence.

**Quality Communication:** Communicate quality expectations, achievements, and improvements regularly to maintain focus and awareness. Ongoing communication keeps quality top-of-mind.

**Canadian Quality Expectations:**
Canadian customers often have high expectations for service quality and consistency. Focus on reliable, professional service that meets expectations consistently rather than flashy but inconsistent experiences.`,
      actionItems: [
        'Document comprehensive service procedures with quality checkpoints and performance metrics',
        'Develop training and standardization programs with ongoing reinforcement and cross-training',
        'Implement monitoring systems including mystery shopping and customer feedback analysis',
        'Create technology-supported quality control with POS integration and real-time monitoring',
        'Establish continuous improvement processes with regular reviews and best practice sharing'
      ],
      tips: [
        'Consistency is more valuable than perfection - customers prefer reliable good service over occasional excellence',
        'Make quality everyone\'s responsibility, not just management\'s - team ownership improves results',
        'Use data to identify quality trends and patterns rather than relying on anecdotal observations'
      ]
    },
    {
      icon: Users,
      title: 'Team Service Culture & Collaboration',
      priority: 'High',
      impact: 'Improve teamwork 85%',
      content: `Strong team service culture ensures consistent customer experiences while building staff engagement and job satisfaction. Collaborative teams provide better service, solve problems more effectively, and create positive work environments that customers can sense and appreciate.

**Service Culture Foundation:**
**Shared Values:** Establish shared service values that guide team behavior and decision-making. Values like respect, excellence, teamwork, and customer focus create cultural foundation for superior service.

**Mission Alignment:** Ensure all team members understand and embrace the mission of providing exceptional customer service. Mission alignment creates purpose and motivation for service excellence.

**Cultural Rituals:** Develop cultural rituals including team meetings, service celebrations, and recognition ceremonies that reinforce service values and build team identity.

**Collaborative Service Delivery:**
**Team Communication:** Implement effective team communication systems that keep everyone informed about customer needs, special requests, and service situations. Good communication enables coordinated service delivery.

**Role Coordination:** Define clear roles and responsibilities while encouraging collaboration and mutual support. Clear roles prevent confusion while collaboration ensures comprehensive service.

**Backup Systems:** Develop backup systems where team members can seamlessly support each other during busy periods or challenging situations. Mutual support maintains service quality under pressure.

**Service Leadership Development:**
**Service Champions:** Identify and develop service champions who model excellent behavior and mentor other team members. Peer leadership often influences behavior more effectively than management direction.

**Rotating Leadership:** Implement rotating leadership opportunities that allow different team members to take responsibility for service initiatives. Shared leadership builds engagement and ownership.

**Mentorship Programs:** Create mentorship programs that pair experienced service providers with newer team members. Mentorship accelerates learning and builds team relationships.

**Team Problem-Solving:**
**Collaborative Solutions:** Encourage collaborative problem-solving where teams work together to address service challenges and improve customer experiences. Team solutions often identify issues management might miss.

**Innovation Initiatives:** Support team innovation initiatives that improve service delivery or customer satisfaction. Front-line staff often have the best insights into customer needs and service improvements.

**Continuous Learning:** Foster continuous learning environments where team members share experiences, learn from mistakes, and celebrate successes together. Shared learning builds collective capability.

**Recognition and Celebration:**
**Team Recognition:** Implement team recognition programs that celebrate collective achievements and service successes. Team recognition builds unity and shared pride in service excellence.

**Individual Acknowledgment:** Provide individual acknowledgment for exceptional service while emphasizing team contribution. Balanced recognition motivates individuals while maintaining team cohesion.

**Customer Appreciation Sharing:** Share customer appreciation and positive feedback with the entire team to reinforce the impact of their service efforts. Customer recognition validates team efforts and motivates continued excellence.

**Conflict Resolution and Team Dynamics:**
**Constructive Conflict:** Teach teams to handle conflicts constructively, focusing on service improvement rather than personal issues. Healthy conflict resolution maintains team effectiveness and service quality.

**Team Building Activities:** Organize team building activities that strengthen relationships and improve collaboration. Strong relationships enable better teamwork during service delivery.

**Communication Skills:** Develop team communication skills including active listening, respectful disagreement, and collaborative decision-making. Strong communication skills improve both internal teamwork and customer service.

**Service Standards Accountability:**
**Peer Accountability:** Encourage peer accountability where team members help each other maintain service standards. Peer accountability often motivates better performance than management oversight alone.

**Collective Responsibility:** Foster collective responsibility for service outcomes where the team shares success and addresses challenges together. Shared responsibility builds commitment to service excellence.

**Performance Support:** Create systems where team members support each other's performance improvement and skill development. Mutual support accelerates individual and team growth.

**Canadian Team Values:**
Canadian workplace culture often emphasizes collaboration, consensus-building, and mutual respect. Build team service culture that reflects these values while maintaining high performance standards and customer focus.`,
      actionItems: [
        'Establish shared service values and mission alignment with cultural rituals and team identity',
        'Implement collaborative service delivery systems with clear roles and backup support',
        'Develop service leadership programs with champions, mentorship, and rotating responsibilities',
        'Create team problem-solving and innovation initiatives with continuous learning opportunities',
        'Design recognition and accountability systems that balance individual and team achievements'
      ],
      tips: [
        'Model the collaborative behavior you want to see - team culture starts with leadership example',
        'Celebrate team successes publicly and address team challenges privately to maintain morale',
        'Remember that customers can sense team dynamics - positive teams create positive customer experiences'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Customer Experience Analytics & Improvement',
      priority: 'Medium',
      impact: 'Data-driven excellence',
      content: `Customer experience analytics provide insights for continuous service improvement and strategic decision-making. Systematic measurement and analysis of customer interactions enable data-driven improvements that enhance satisfaction and business performance.

**Customer Experience Measurement:**
**Satisfaction Surveys:** Implement customer satisfaction surveys that measure key aspects of the service experience including food quality, service speed, staff friendliness, and overall satisfaction. Regular surveys provide trend data and improvement insights.

**Net Promoter Score (NPS):** Track Net Promoter Score to measure customer loyalty and likelihood to recommend your business. NPS provides a simple metric for overall customer relationship strength.

**Customer Effort Score:** Measure customer effort required to complete transactions or resolve issues. Lower effort scores indicate smoother, more satisfying customer experiences.

**Digital Analytics and Tracking:**
**Social Media Monitoring:** Monitor social media mentions, reviews, and comments to understand customer sentiment and identify service issues or successes. Social media provides real-time customer feedback.

**Online Review Analysis:** Systematically analyze online reviews to identify recurring themes, service strengths, and improvement opportunities. Review analysis reveals customer priorities and perceptions.

**Website and App Analytics:** Track customer behavior on digital platforms to understand preferences, pain points, and service expectations. Digital analytics complement in-person service insights.

**Operational Performance Metrics:**
**Service Speed Tracking:** Measure service speed including order taking time, preparation time, and total customer wait time. Speed metrics help optimize efficiency while maintaining quality.

**Order Accuracy Rates:** Track order accuracy to identify training needs and process improvements. Accuracy directly impacts customer satisfaction and operational efficiency.

**Customer Complaint Analysis:** Analyze customer complaints to identify root causes, systemic issues, and prevention opportunities. Complaint analysis guides targeted improvements.

**Customer Journey Analytics:**
**Touchpoint Analysis:** Analyze customer experience at each touchpoint to identify strengths, weaknesses, and optimization opportunities. Comprehensive analysis reveals the complete customer experience.

**Drop-off Point Identification:** Identify points where customers abandon the service process or don't return. Drop-off analysis reveals critical improvement areas.

**Loyalty Progression Tracking:** Track how customers progress from first-time visitors to loyal advocates. Progression analysis guides retention and loyalty strategies.

**Competitive Benchmarking:**
**Service Comparison:** Compare your service metrics to competitors and industry benchmarks to identify relative strengths and improvement opportunities. Benchmarking provides context for performance assessment.

**Best Practice Research:** Research best practices from successful food service operations and adapt relevant strategies to your business. External learning accelerates improvement.

**Customer Expectation Analysis:** Understand evolving customer expectations through market research and trend analysis. Expectation awareness guides service evolution and innovation.

**Improvement Implementation:**
**Action Planning:** Translate analytics insights into specific action plans with clear objectives, timelines, and responsibility assignments. Systematic planning ensures insights drive real improvements.

**A/B Testing:** Implement A/B testing for service improvements to measure impact before full implementation. Testing validates improvement effectiveness and guides decision-making.

**Change Management:** Manage service improvements through structured change management that includes staff training, communication, and performance monitoring. Effective change management ensures successful improvement implementation.

**ROI and Impact Measurement:**
**Improvement ROI:** Calculate return on investment for service improvements including increased sales, reduced complaints, and improved efficiency. ROI analysis justifies improvement investments and guides resource allocation.

**Customer Lifetime Value:** Track customer lifetime value changes resulting from service improvements. Lifetime value measurement demonstrates long-term impact of service excellence.

**Business Impact Analysis:** Analyze overall business impact of service improvements including revenue growth, cost reduction, and competitive advantage. Comprehensive impact analysis validates service investment priorities.

**Canadian Analytics Considerations:**
Consider Canadian privacy regulations and cultural preferences when collecting and analyzing customer data. Ensure analytics practices comply with privacy laws while respecting customer preferences for data sharing and communication.`,
      actionItems: [
        'Implement customer experience measurement systems including satisfaction surveys and NPS tracking',
        'Establish digital analytics and monitoring for social media, reviews, and online customer behavior',
        'Create operational performance tracking for service speed, accuracy, and complaint analysis',
        'Develop customer journey analytics with touchpoint analysis and loyalty progression tracking',
        'Design improvement implementation process with action planning, testing, and ROI measurement'
      ],
      tips: [
        'Focus on a few key metrics that directly impact customer satisfaction rather than tracking everything',
        'Use analytics to identify trends and patterns, not just individual incidents or complaints',
        'Share analytics insights with your team to build data-driven service improvement culture'
      ]
    }
  ];

  const currentStepData = lessonSteps[currentStep];
  const isStepComplete = currentStepData && getCompletedCount(currentStep) === currentStepData.actionItems.length;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section ref={sectionRef} id="customer-service-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Customer Service <span className="text-primary-500">Excellence</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Create memorable customer experiences that build loyalty and drive repeat business. Learn service standards, communication excellence, and relationship building for food truck success.
          </p>
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            {lessonSteps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index <= currentStep ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="text-sm font-redhat text-gray-500">
            Step {currentStep + 1} of {lessonSteps.length}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="lesson-content">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                  <currentStepData.icon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-caprasimo">{currentStepData.title}</h2>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(currentStepData.priority)}`}>
                      {currentStepData.priority}
                    </span>
                    <span className="text-sm opacity-90">
                      Impact: {currentStepData.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              {/* Lesson Content */}
              <div className="prose prose-lg max-w-none mb-8">
                {currentStepData.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-caprasimo text-gray-800 mt-6 mb-3">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="font-redhat text-gray-700 mb-4 leading-relaxed">
                      {paragraph.split('**').map((part, partIndex) => 
                        partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part
                      )}
                    </p>
                  );
                })}
              </div>

              {/* Pro Tips */}
              {currentStepData.tips && (
                <div className="bg-accent-50 rounded-lg p-6 mb-8 border border-accent-200">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-5 w-5 text-accent-600 mr-2" />
                    <h3 className="text-lg font-caprasimo text-accent-800">Pro Tips</h3>
                  </div>
                  <ul className="space-y-2">
                    {currentStepData.tips.map((tip, index) => (
                      <li key={index} className="flex items-start font-redhat text-accent-700">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Items */}
              <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <h3 className="text-xl font-caprasimo text-primary-800 mb-4">
                  Action Items - Complete to Continue
                </h3>
                <div className="space-y-3">
                  {currentStepData.actionItems.map((action, index) => (
                    <div key={index} className="flex items-start">
                      <button
                        onClick={() => toggleActionItem(currentStep, index)}
                        className={`w-6 h-6 rounded border-2 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center transition-colors duration-200 ${
                          completedActions[currentStep]?.[index]
                            ? 'bg-primary-500 border-primary-500 text-white'
                            : 'border-primary-300 hover:border-primary-500'
                        }`}
                      >
                        {completedActions[currentStep]?.[index] && (
                          <CheckCircle size={16} />
                        )}
                      </button>
                      <span className={`font-redhat ${
                        completedActions[currentStep]?.[index]
                          ? 'text-primary-700 line-through'
                          : 'text-primary-800'
                      }`}>
                        {action}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-primary-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-redhat text-primary-700">
                      {getCompletedCount(currentStep)} of {currentStepData.actionItems.length} completed
                    </div>
                    {currentStep < lessonSteps.length - 1 ? (
                      <button
                        onClick={() => setCurrentStep(currentStep + 1)}
                        disabled={!isStepComplete}
                        className={`px-6 py-3 rounded-lg font-redhat font-medium transition-all duration-200 flex items-center ${
                          isStepComplete
                            ? 'bg-primary-500 text-white hover:bg-primary-600'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Next Step
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    ) : (
                      <div className="space-x-4">
                        {isStepComplete ? (
                          <div className="text-center">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                              </div>
                              <h3 className="text-lg font-caprasimo text-green-800 mb-2">
                                Customer Service Excellence Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've mastered customer service excellence for food truck operations. You now have the tools to create memorable experiences that build lasting customer loyalty.
                              </p>
                              <Link
                                to="/operations/event-catering"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Next: Event Planning & Catering
                                <ArrowRight size={16} className="ml-2" />
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <button
                            disabled={true}
                            className="px-6 py-3 bg-gray-300 text-gray-500 font-redhat font-medium rounded-lg cursor-not-allowed"
                          >
                            Complete all items to continue
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        {currentStep > 0 && (
          <div className="text-center lesson-content">
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-redhat font-medium hover:bg-gray-300 transition-colors duration-200"
            >
              Previous Step
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomerServiceLesson;