import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, GraduationCap, Target, Heart, Shield, TrendingUp, CheckCircle, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StaffManagementLesson: React.FC = () => {
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
      icon: Users,
      title: 'Hiring Strategy & Recruitment Excellence',
      priority: 'Critical',
      impact: 'Reduce turnover 50%',
      content: `Building a strong team starts with strategic hiring that focuses on cultural fit, work ethic, and growth potential. Effective recruitment strategies attract quality candidates who align with your food truck's values and operational needs.

**Defining Your Ideal Team Member:**
Successful food truck employees combine technical skills with personal qualities that thrive in fast-paced, customer-focused environments. Look for candidates who demonstrate reliability, positive attitude, teamwork, and genuine interest in food service rather than just experience.

**Job Description Development:**
Create detailed job descriptions that clearly outline responsibilities, expectations, and growth opportunities. Include specific requirements for food safety certification, physical demands, schedule flexibility, and customer service standards. Be transparent about wages, benefits, and advancement potential.

**Recruitment Channel Strategy:**
**Local Networks:** Leverage community connections, culinary schools, and word-of-mouth referrals from existing staff and customers. Local hiring often provides candidates who understand your market and community.

**Online Platforms:** Use job boards, social media, and industry-specific platforms to reach qualified candidates. Highlight your company culture and unique benefits to attract passionate applicants.

**Customer Recruitment:** Some of your best employees may be loyal customers who already understand and appreciate your brand. Consider recruiting from your customer base for cultural alignment.

**Interview Process and Assessment:**
Develop structured interview processes that assess both technical skills and cultural fit. Include practical assessments like food handling scenarios, customer service role-plays, and teamwork exercises that reflect actual job requirements.

**Compensation Strategy:**
Develop competitive compensation packages that include base wages, performance incentives, and benefits where possible. Consider non-monetary benefits like flexible scheduling, meal allowances, and professional development opportunities.

**Background Checks and References:**
Implement appropriate background checking procedures for food service positions. Verify previous employment, check references, and ensure candidates meet legal requirements for food handling and employment eligibility.

**Onboarding Planning:**
Design comprehensive onboarding processes that introduce new hires to your culture, procedures, and expectations. Effective onboarding reduces early turnover and accelerates productivity.

**Diversity and Inclusion:**
Create inclusive hiring practices that welcome diverse candidates and perspectives. Diverse teams often provide better customer service and bring valuable insights to operations and menu development.

**Legal Compliance:**
Understand Canadian employment law requirements including minimum wage, overtime, human rights, and workplace safety obligations. Ensure hiring practices comply with provincial employment standards and anti-discrimination laws.

**Canadian Employment Considerations:**
Canadian employment standards vary by province and include specific requirements for wages, hours, breaks, and termination procedures. Understand your obligations as an employer and factor compliance costs into your hiring budget.`,
      actionItems: [
        'Create detailed job descriptions for each position including responsibilities, requirements, and growth opportunities',
        'Develop structured interview process with practical assessments and cultural fit evaluation',
        'Research competitive compensation packages including wages, benefits, and incentives in your market',
        'Establish recruitment strategy using multiple channels including local networks and online platforms',
        'Design comprehensive onboarding program covering culture, procedures, and job-specific training'
      ],
      tips: [
        'Hire for attitude and train for skills - technical abilities can be taught, but work ethic and personality are harder to change',
        'Include current team members in the interview process - they can assess cultural fit and teamwork potential',
        'Check references thoroughly and ask specific questions about reliability, teamwork, and performance under pressure'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Comprehensive Training Programs',
      priority: 'Critical',
      impact: 'Improve efficiency 40%',
      content: `Systematic training programs ensure consistent service quality, food safety compliance, and operational efficiency. Well-trained staff are more confident, productive, and likely to stay with your business long-term.

**Training Program Structure:**
**Foundation Training:** Cover basic food safety, customer service, equipment operation, and company policies. This foundational training should be completed before new employees work independently.

**Position-Specific Training:** Develop specialized training for different roles including food preparation, order taking, cash handling, and equipment maintenance. Each position requires specific skills and knowledge.

**Ongoing Development:** Implement continuous learning programs that keep staff updated on new procedures, menu items, and industry best practices. Regular training maintains standards and provides advancement opportunities.

**Food Safety and Health Compliance:**
**Certification Requirements:** Ensure all staff obtain required food handler certifications and understand health department regulations. Maintain current certification records and schedule renewal training.

**Daily Procedures:** Train staff in proper handwashing, temperature monitoring, cleaning procedures, and cross-contamination prevention. These procedures must become automatic habits.

**Documentation Requirements:** Teach staff to properly complete temperature logs, cleaning checklists, and other required documentation for health compliance.

**Customer Service Excellence:**
**Service Standards:** Establish clear customer service standards including greeting procedures, order accuracy, problem resolution, and professional communication. Consistent service builds customer loyalty.

**Upselling Techniques:** Train staff in suggestive selling and upselling techniques that increase average order value while providing customer value. Effective upselling requires product knowledge and timing.

**Conflict Resolution:** Provide training in handling customer complaints, difficult situations, and service recovery. Empowered staff can resolve issues quickly and maintain customer satisfaction.

**Equipment Operation and Safety:**
**Equipment Training:** Provide comprehensive training on all equipment including proper operation, safety procedures, and basic troubleshooting. Equipment misuse can cause injuries and costly repairs.

**Safety Protocols:** Train staff in workplace safety including proper lifting techniques, burn prevention, knife safety, and emergency procedures. Safety training protects both staff and business.

**Maintenance Procedures:** Teach staff basic equipment maintenance, cleaning procedures, and when to report problems. Proper maintenance extends equipment life and prevents breakdowns.

**Training Delivery Methods:**
**Hands-On Training:** Use practical, hands-on training methods that allow staff to practice skills in real situations. Experiential learning is more effective than theoretical instruction alone.

**Mentorship Programs:** Pair new employees with experienced staff members for guidance and support. Mentorship accelerates learning and builds team relationships.

**Documentation and Checklists:** Provide written procedures, checklists, and reference materials that staff can use for ongoing guidance and review.

**Training Assessment and Certification:**
Implement assessment procedures to verify training completion and competency. Use practical demonstrations, written tests, and observation to ensure staff meet standards before working independently.

**Cross-Training and Flexibility:**
Train staff in multiple positions to provide operational flexibility and advancement opportunities. Cross-trained staff can cover absences and adapt to changing business needs.

**Canadian Training Requirements:**
Understand provincial requirements for food safety training, workplace safety education, and employee orientation. Some provinces have specific training requirements for food service workers.`,
      actionItems: [
        'Develop comprehensive training curriculum covering food safety, customer service, and equipment operation',
        'Create position-specific training modules with hands-on practice and competency assessments',
        'Establish mentorship program pairing new employees with experienced staff members',
        'Design training documentation including procedures, checklists, and reference materials',
        'Implement cross-training program to build operational flexibility and advancement opportunities'
      ],
      tips: [
        'Make training interactive and hands-on rather than just lectures - people learn by doing',
        'Break training into manageable segments over several days rather than overwhelming new hires',
        'Have new employees shadow experienced staff during busy periods to see real-world application'
      ]
    },
    {
      icon: Target,
      title: 'Performance Management & Evaluation',
      priority: 'High',
      impact: 'Increase productivity 30%',
      content: `Effective performance management systems provide clear expectations, regular feedback, and opportunities for improvement. Systematic evaluation processes help staff develop while ensuring consistent service quality.

**Performance Standards and Expectations:**
**Clear Metrics:** Establish measurable performance standards for each position including service speed, accuracy, customer satisfaction, and safety compliance. Clear metrics eliminate ambiguity about expectations.

**Job-Specific Goals:** Set specific, achievable goals for each role that align with business objectives. Goals should be challenging but attainable with proper effort and training.

**Behavioral Standards:** Define expected behaviors including punctuality, teamwork, communication, and professional appearance. Behavioral standards create a positive work environment.

**Regular Feedback and Communication:**
**Daily Check-ins:** Provide brief daily feedback on performance, addressing both successes and areas for improvement. Immediate feedback is more effective than delayed annual reviews.

**Weekly One-on-Ones:** Schedule regular individual meetings to discuss performance, address concerns, and provide coaching. Personal attention shows investment in employee development.

**Formal Reviews:** Conduct structured performance reviews quarterly or semi-annually to assess overall performance and set development goals. Formal reviews provide documentation and development planning.

**Recognition and Reward Systems:**
**Achievement Recognition:** Implement systems to recognize outstanding performance, improvement, and contributions to team success. Recognition motivates continued excellence and builds morale.

**Incentive Programs:** Develop performance-based incentives including bonuses, additional hours, or advancement opportunities. Financial incentives should align with business goals.

**Career Development:** Provide advancement opportunities and skill development programs that reward high performers with increased responsibility and compensation.

**Corrective Action and Improvement:**
**Progressive Discipline:** Establish fair, consistent disciplinary procedures that focus on improvement rather than punishment. Progressive systems provide opportunities for correction before termination.

**Performance Improvement Plans:** Develop structured improvement plans for underperforming employees that include specific goals, timelines, and support resources. Clear plans give employees opportunities to succeed.

**Documentation Requirements:** Maintain detailed records of performance discussions, disciplinary actions, and improvement efforts. Proper documentation protects both employees and business.

**Team Performance and Collaboration:**
**Team Goals:** Set team-based performance goals that encourage collaboration and mutual support. Team goals build unity and shared responsibility for success.

**Peer Feedback:** Implement peer feedback systems that allow team members to provide input on collaboration and teamwork. Peer feedback provides valuable insights for improvement.

**Conflict Resolution:** Develop procedures for addressing interpersonal conflicts and team dynamics that affect performance. Quick resolution prevents small issues from becoming major problems.

**Performance Analytics and Tracking:**
**Data Collection:** Use POS systems, customer feedback, and operational metrics to track individual and team performance objectively. Data-driven evaluation is more fair and accurate.

**Trend Analysis:** Monitor performance trends over time to identify patterns, seasonal variations, and improvement opportunities. Trend analysis helps predict and prevent problems.

**Benchmarking:** Compare performance against industry standards and best practices to identify areas for improvement and set realistic goals.

**Legal Compliance and Documentation:**
Ensure performance management practices comply with Canadian employment law including human rights, privacy, and termination requirements. Proper procedures protect against wrongful dismissal claims.

**Canadian Employment Standards:**
Understand provincial requirements for performance management, disciplinary procedures, and termination processes. Employment standards vary by province and affect how you can manage performance issues.`,
      actionItems: [
        'Establish clear performance standards and metrics for each position with measurable goals',
        'Implement regular feedback system including daily check-ins and formal quarterly reviews',
        'Create recognition and reward programs that motivate high performance and team collaboration',
        'Develop progressive discipline procedures with performance improvement planning processes',
        'Design performance tracking system using operational data and customer feedback metrics'
      ],
      tips: [
        'Focus on coaching and development rather than criticism - help employees improve rather than just pointing out problems',
        'Document everything consistently - good records protect both you and your employees',
        'Celebrate successes publicly and address problems privately to maintain team morale'
      ]
    },
    {
      icon: Heart,
      title: 'Employee Engagement & Retention',
      priority: 'High',
      impact: 'Reduce turnover 60%',
      content: `High employee engagement and retention reduce recruitment costs, maintain service quality, and build institutional knowledge. Creating a positive work environment where staff feel valued and motivated is essential for long-term success.

**Building Positive Work Culture:**
**Values and Mission:** Clearly communicate your business values and mission, helping staff understand how their work contributes to larger goals. Purpose-driven work increases engagement and satisfaction.

**Team Building:** Organize team building activities, staff meals, and social events that build relationships and camaraderie. Strong team relationships improve collaboration and job satisfaction.

**Open Communication:** Foster open communication where staff feel comfortable sharing ideas, concerns, and feedback. Transparent communication builds trust and engagement.

**Work-Life Balance and Flexibility:**
**Scheduling Flexibility:** Provide scheduling flexibility where possible, accommodating personal needs and preferences. Flexible scheduling is often more valuable than higher wages for many employees.

**Time Off Policies:** Implement fair time-off policies that allow staff to rest and recharge. Adequate rest prevents burnout and maintains performance quality.

**Personal Development:** Support staff personal and professional development through training opportunities, skill building, and career advancement. Investment in development shows long-term commitment to employees.

**Compensation and Benefits Strategy:**
**Competitive Wages:** Regularly review and adjust wages to remain competitive in your market. Fair compensation is fundamental to retention and motivation.

**Performance Bonuses:** Implement performance-based bonuses that reward exceptional work and achievement of goals. Bonuses provide additional motivation and recognition.

**Non-Monetary Benefits:** Offer benefits like meal allowances, flexible scheduling, professional development, and recognition programs that add value beyond wages.

**Career Advancement and Growth:**
**Promotion Opportunities:** Create clear advancement paths that allow high-performing employees to grow within your organization. Internal promotion builds loyalty and motivation.

**Skill Development:** Provide opportunities for staff to learn new skills, take on additional responsibilities, and expand their capabilities. Growth opportunities increase engagement and retention.

**Leadership Development:** Identify and develop potential leaders within your team, providing management training and increased responsibility. Developing internal leaders builds succession planning.

**Recognition and Appreciation:**
**Regular Recognition:** Implement systems for recognizing good performance, improvement, and contributions to team success. Regular recognition is more effective than occasional large rewards.

**Employee of the Month:** Create formal recognition programs that highlight outstanding performance and provide public acknowledgment of achievements.

**Appreciation Events:** Organize appreciation events, staff parties, and celebrations that show gratitude for hard work and dedication.

**Feedback and Involvement:**
**Staff Input:** Regularly seek staff input on operations, menu items, and business decisions. Involving staff in decision-making increases engagement and ownership.

**Suggestion Programs:** Implement suggestion programs that encourage staff to contribute ideas for improvement and innovation. Good suggestions should be implemented and recognized.

**Exit Interviews:** Conduct thorough exit interviews to understand why employees leave and identify areas for improvement. Exit feedback provides valuable insights for retention improvement.

**Health and Safety Focus:**
**Safe Work Environment:** Maintain safe working conditions and provide proper safety equipment and training. Safety demonstrates care for employee wellbeing.

**Mental Health Support:** Recognize and address workplace stress, providing support resources and maintaining reasonable workloads. Mental health affects performance and retention.

**Workplace Wellness:** Promote workplace wellness through healthy practices, stress management, and work-life balance initiatives.

**Canadian Employment Benefits:**
Understand Canadian employment benefits including vacation pay, statutory holidays, and provincial benefit requirements. Compliance with employment standards is essential for retention and legal protection.`,
      actionItems: [
        'Develop positive work culture initiatives including team building and open communication systems',
        'Create flexible scheduling and time-off policies that support work-life balance',
        'Implement comprehensive recognition and reward programs for performance and achievements',
        'Design career advancement paths with skill development and leadership opportunities',
        'Establish regular feedback systems including staff input and suggestion programs'
      ],
      tips: [
        'Small gestures of appreciation often matter more than large bonuses - consistent recognition builds loyalty',
        'Listen to your staff and act on their feedback - feeling heard is crucial for engagement',
        'Invest in your best employees with development opportunities - they become your future leaders'
      ]
    },
    {
      icon: Shield,
      title: 'Workplace Safety & Legal Compliance',
      priority: 'Critical',
      impact: 'Prevent 90% of incidents',
      content: `Workplace safety and legal compliance protect both employees and business from injuries, legal issues, and regulatory penalties. Comprehensive safety programs create secure work environments while meeting all legal obligations.

**Workplace Safety Program Development:**
**Hazard Identification:** Conduct thorough workplace assessments to identify potential safety hazards including equipment risks, slip/fall areas, burn hazards, and ergonomic issues. Regular assessments ensure ongoing safety.

**Safety Procedures:** Develop detailed safety procedures for all work activities including equipment operation, food handling, cleaning, and emergency situations. Written procedures provide clear guidance and legal protection.

**Personal Protective Equipment:** Provide appropriate PPE including non-slip shoes, cut-resistant gloves, and protective clothing. Ensure staff understand proper use and maintenance of safety equipment.

**Training and Education:**
**Safety Training:** Provide comprehensive safety training covering equipment operation, hazard recognition, emergency procedures, and injury prevention. Regular training reinforces safe practices.

**Emergency Procedures:** Train all staff in emergency procedures including fire evacuation, medical emergencies, and equipment failures. Emergency preparedness protects staff and customers.

**Incident Reporting:** Establish clear procedures for reporting injuries, near-misses, and safety concerns. Prompt reporting enables quick response and prevention of future incidents.

**Workers' Compensation and Insurance:**
**Coverage Requirements:** Understand provincial workers' compensation requirements and ensure proper coverage for all employees. Workers' compensation protects both employees and employers.

**Claim Management:** Develop procedures for managing workplace injury claims including immediate response, documentation, and return-to-work planning. Proper claim management reduces costs and supports recovery.

**Premium Management:** Implement safety programs that reduce workers' compensation premiums through lower injury rates and safety certifications.

**Employment Standards Compliance:**
**Wage and Hour Laws:** Understand provincial minimum wage, overtime, and hour requirements. Ensure accurate time tracking and proper payment of all wages and premiums.

**Break and Rest Requirements:** Comply with provincial requirements for meal breaks, rest periods, and maximum working hours. Proper scheduling protects both employees and business.

**Termination Procedures:** Understand legal requirements for employee termination including notice periods, severance pay, and documentation requirements. Proper procedures prevent wrongful dismissal claims.

**Human Rights and Discrimination:**
**Equal Treatment:** Ensure workplace policies and practices comply with human rights legislation prohibiting discrimination based on protected characteristics. Equal treatment creates positive work environments.

**Accommodation Duties:** Understand obligations to accommodate employees with disabilities, religious requirements, or family responsibilities. Reasonable accommodation is both legally required and good business practice.

**Harassment Prevention:** Implement policies and procedures to prevent and address workplace harassment and discrimination. Safe work environments improve retention and performance.

**Health and Safety Regulations:**
**Food Safety Compliance:** Ensure all food handling practices comply with health department regulations and food safety standards. Food safety protects customers and prevents regulatory penalties.

**Equipment Safety:** Maintain all equipment according to manufacturer specifications and safety standards. Proper maintenance prevents injuries and equipment failures.

**Workplace Inspections:** Prepare for and cooperate with workplace safety inspections from provincial authorities. Compliance demonstrates commitment to safety and prevents penalties.

**Documentation and Record Keeping:**
**Safety Records:** Maintain detailed records of safety training, incident reports, and corrective actions. Proper documentation demonstrates compliance and supports legal protection.

**Employment Records:** Keep accurate employment records including hiring documentation, performance reviews, and disciplinary actions. Complete records protect against legal challenges.

**Policy Documentation:** Maintain current written policies covering all aspects of employment and workplace safety. Clear policies provide guidance and legal protection.

**Canadian Provincial Variations:**
Employment and safety laws vary significantly between provinces. Understand specific requirements in your operating province and ensure compliance with all applicable standards and regulations.`,
      actionItems: [
        'Conduct comprehensive workplace safety assessment identifying hazards and implementing control measures',
        'Develop safety training program covering equipment operation, emergency procedures, and injury prevention',
        'Ensure compliance with provincial employment standards including wages, hours, and termination procedures',
        'Implement human rights and harassment prevention policies with training and reporting procedures',
        'Establish documentation systems for safety records, employment files, and policy compliance'
      ],
      tips: [
        'Make safety a daily priority, not just a training topic - consistent attention prevents most accidents',
        'Document everything thoroughly - good records are your best protection in legal situations',
        'Stay current with changing employment laws - regulations evolve and non-compliance can be costly'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Leadership Development & Succession Planning',
      priority: 'Medium',
      impact: 'Build sustainable growth',
      content: `Developing internal leadership and succession planning ensures business continuity and growth capacity. Strong leadership development creates advancement opportunities while building organizational capability.

**Leadership Identification and Development:**
**Potential Assessment:** Identify employees with leadership potential through performance evaluation, initiative demonstration, and team interaction observation. Look for natural leaders who others respect and follow.

**Leadership Training:** Provide leadership development training covering management skills, decision-making, conflict resolution, and team building. Leadership skills can be developed through training and experience.

**Mentorship Programs:** Pair potential leaders with experienced managers or business owners for guidance and development. Mentorship accelerates leadership development and builds relationships.

**Succession Planning Strategy:**
**Key Position Identification:** Identify critical positions that require succession planning including management roles, specialized skills, and customer relationship positions. Plan for both expected and unexpected departures.

**Development Pathways:** Create clear development pathways that prepare employees for advancement to key positions. Structured development ensures readiness when opportunities arise.

**Knowledge Transfer:** Implement systems for transferring critical knowledge, relationships, and skills from experienced employees to potential successors. Knowledge transfer prevents loss of institutional memory.

**Management Skills Development:**
**Operational Management:** Train potential managers in operational skills including scheduling, inventory management, quality control, and performance management. Operational competence is fundamental to management success.

**Financial Management:** Provide training in basic financial management including cost control, budgeting, and performance analysis. Financial literacy is essential for management roles.

**People Management:** Develop people management skills including communication, motivation, conflict resolution, and team building. People skills often determine management success.

**Delegation and Empowerment:**
**Gradual Responsibility:** Gradually increase responsibility for high-potential employees, allowing them to develop skills and confidence. Progressive responsibility builds capability and tests readiness.

**Decision-Making Authority:** Empower developing leaders with appropriate decision-making authority within defined parameters. Decision-making experience builds confidence and judgment.

**Accountability Systems:** Establish accountability systems that hold developing leaders responsible for results while providing support and guidance. Accountability accelerates development.

**Cross-Training and Exposure:**
**Multi-Area Experience:** Provide cross-training and exposure to different aspects of the business including operations, customer service, and administration. Broad experience builds comprehensive understanding.

**External Learning:** Support attendance at industry conferences, workshops, and training programs that provide external perspectives and networking opportunities. External learning brings new ideas and best practices.

**Project Leadership:** Assign special projects and initiatives that allow potential leaders to demonstrate and develop their capabilities. Project leadership provides practical experience.

**Performance and Feedback:**
**Leadership Assessment:** Regularly assess leadership development progress through performance evaluation, 360-degree feedback, and goal achievement. Assessment identifies strengths and development needs.

**Coaching and Support:** Provide ongoing coaching and support for developing leaders, addressing challenges and reinforcing learning. Coaching accelerates development and builds confidence.

**Recognition and Advancement:** Recognize leadership development achievements and provide advancement opportunities for successful candidates. Recognition motivates continued development.

**Organizational Culture and Values:**
**Culture Transmission:** Ensure developing leaders understand and embody organizational culture and values. Cultural alignment is essential for leadership effectiveness.

**Change Management:** Develop change management skills that enable leaders to guide teams through business evolution and growth. Change management is increasingly important in dynamic markets.

**Innovation and Improvement:** Encourage developing leaders to contribute ideas for innovation and improvement. Innovation skills are valuable for future business success.

**Canadian Leadership Considerations:**
Canadian workplace culture often emphasizes collaboration, consensus-building, and inclusive leadership styles. Develop leadership approaches that align with Canadian cultural values and employment practices.`,
      actionItems: [
        'Identify high-potential employees and create individual leadership development plans',
        'Implement succession planning for key positions with knowledge transfer procedures',
        'Develop management training program covering operational, financial, and people management skills',
        'Create delegation and empowerment systems that build leadership experience gradually',
        'Establish leadership assessment and feedback systems with coaching and advancement opportunities'
      ],
      tips: [
        'Start developing leaders before you need them - leadership development takes time and practice',
        'Give potential leaders real responsibility with appropriate support - experience is the best teacher',
        'Focus on developing multiple potential successors rather than just one - options provide flexibility'
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
    <section ref={sectionRef} id="staff-management-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Staff Training & <span className="text-primary-500">Management</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Build and manage a reliable team that delivers consistent quality and service. Learn hiring strategies, training programs, performance management, and leadership development for food truck success.
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
                                Staff Training & Management Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've mastered staff training and management for food truck operations. You now have the tools to build, train, and retain a high-performing team.
                              </p>
                              <Link
                                to="/operations/customer-service"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Next: Customer Service Excellence
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

export default StaffManagementLesson;