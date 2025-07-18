import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, CheckSquare, Users, Wrench, Shield, TrendingUp, CheckCircle, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DailyOperationsLesson: React.FC = () => {
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
      icon: Clock,
      title: 'Pre-Service Setup & Opening Procedures',
      priority: 'Critical',
      timeImpact: 'Save 30-45 minutes daily',
      content: `Efficient pre-service setup is the foundation of successful daily operations. A systematic approach to opening procedures ensures food safety compliance, equipment readiness, and smooth service from the first customer.

**Equipment Startup and Safety Checks:**
Begin each day with comprehensive equipment inspections and startup procedures. Check all cooking equipment, refrigeration units, and electrical systems for proper operation. Verify that generators start properly and provide adequate power. Test all safety systems including fire suppression, ventilation, and emergency shut-offs.

**Food Safety and Temperature Verification:**
Conduct thorough temperature checks of all refrigeration and freezer units, documenting readings in your food safety log. Verify that all cold storage maintained proper temperatures overnight. Check expiration dates on all perishable items and rotate stock using FIFO (First In, First Out) principles.

**Inventory Assessment and Prep Planning:**
Review inventory levels and assess prep needs for the day's projected sales. Check par levels for all ingredients and identify any shortages that need immediate attention. Plan prep tasks based on menu requirements and expected customer volume.

**Workspace Organization and Sanitization:**
Set up all prep stations with necessary tools, cutting boards, and containers. Sanitize all work surfaces, equipment, and utensils according to health department standards. Organize ingredients and supplies for efficient workflow during service.

**Menu and Pricing Verification:**
Review daily specials, pricing changes, and any menu modifications. Ensure all staff understand current offerings and can communicate them effectively to customers. Update menu boards and point-of-sale systems with current information.

**Staff Briefing and Role Assignment:**
Conduct brief team meetings to review the day's goals, special events, weather considerations, and individual responsibilities. Assign specific roles for service, prep, cleaning, and customer interaction. Address any concerns or questions from team members.

**Canadian Climate Considerations:**
Canadian weather requires additional setup considerations including heating systems in cold weather, ventilation adjustments for humidity, and equipment protection from precipitation. Plan setup timing around weather conditions and have contingency procedures for extreme weather.

**Documentation and Record Keeping:**
Maintain detailed logs of equipment checks, temperature readings, inventory levels, and any issues encountered during setup. This documentation supports food safety compliance and helps identify patterns or recurring problems.

**Efficiency Optimization:**
Develop standardized checklists and procedures that can be completed consistently regardless of staff changes. Time each setup task to identify bottlenecks and optimization opportunities. Create backup procedures for equipment failures or supply shortages.`,
      actionItems: [
        'Create comprehensive pre-service checklist with timing estimates for each task',
        'Develop equipment startup and safety check procedures with documentation requirements',
        'Design inventory assessment system with par levels and reorder triggers',
        'Establish workspace organization standards with sanitization protocols',
        'Create staff briefing template covering daily goals, roles, and safety reminders'
      ],
      tips: [
        'Start setup 15-30 minutes earlier than you think you need - rushing leads to mistakes and safety issues',
        'Assign backup responsibilities so any team member can handle critical setup tasks',
        'Keep setup checklists laminated and easily accessible for quick reference'
      ]
    },
    {
      icon: CheckSquare,
      title: 'Service Workflow Optimization',
      priority: 'Critical',
      timeImpact: 'Increase efficiency 40%',
      content: `Optimized service workflows maximize customer satisfaction while minimizing wait times and operational stress. Efficient systems allow you to serve more customers with consistent quality and reduced labor costs.

**Order Taking and Communication Systems:**
Implement clear communication protocols between order takers and kitchen staff. Use standardized terminology, order numbering systems, and timing cues to ensure accuracy and efficiency. Train staff to upsell and cross-sell systematically while maintaining service speed.

**Kitchen Workflow and Station Management:**
Design kitchen workflows that minimize movement and maximize efficiency. Assign specific stations and responsibilities to each team member. Implement batch cooking strategies for popular items while maintaining food quality and safety standards.

**Food Preparation and Assembly Lines:**
Create assembly line systems for menu items that can be partially prepared in advance. Organize ingredients and tools for quick access during peak service. Develop portion control systems that ensure consistency while speeding service.

**Customer Service and Interaction Protocols:**
Train staff in efficient customer interaction techniques that build rapport while maintaining service speed. Develop scripts for common questions and situations. Implement systems for handling special requests and dietary accommodations.

**Payment Processing and Technology Integration:**
Optimize payment processing systems for speed and accuracy. Train staff on POS systems, mobile payment options, and cash handling procedures. Implement loyalty programs and promotional systems that enhance rather than slow service.

**Quality Control During Service:**
Establish quality checkpoints throughout the service process to ensure consistency. Implement temperature monitoring, portion control verification, and visual presentation standards. Develop correction procedures for quality issues.

**Peak Hour Management:**
Develop specific procedures for managing high-volume periods including staff positioning, menu simplification, and customer communication. Plan for equipment capacity limitations and have backup procedures for equipment failures.

**Customer Flow and Line Management:**
Design customer flow patterns that minimize congestion and confusion. Implement line management systems including signage, barriers, and staff guidance. Develop procedures for handling large groups and special events.

**Continuous Improvement Systems:**
Implement feedback collection systems to identify service bottlenecks and improvement opportunities. Track service times, customer satisfaction, and operational efficiency metrics. Regular team debriefings to discuss challenges and solutions.

**Canadian Service Considerations:**
Canadian customers often value politeness, patience, and community connection. Build these values into service protocols while maintaining efficiency. Consider bilingual service capabilities in appropriate markets.`,
      actionItems: [
        'Design kitchen workflow layout with station assignments and movement patterns',
        'Create order taking and communication protocols with standardized terminology',
        'Develop assembly line procedures for your most popular menu items',
        'Implement quality control checkpoints throughout the service process',
        'Establish peak hour management procedures with staff positioning plans'
      ],
      tips: [
        'Practice service workflows during slow periods to build muscle memory and identify improvements',
        'Cross-train all staff on multiple positions to provide flexibility during busy periods',
        'Time your service processes regularly and set improvement targets'
      ]
    },
    {
      icon: Users,
      title: 'Staff Coordination & Communication',
      priority: 'High',
      timeImpact: 'Reduce conflicts 60%',
      content: `Effective staff coordination and communication are essential for smooth operations, especially in the confined space of a food truck where teamwork directly impacts efficiency and customer experience.

**Role Definition and Responsibility Assignment:**
Clearly define each team member's primary and secondary responsibilities during different service periods. Create detailed job descriptions that include specific tasks, quality standards, and performance expectations. Establish clear hierarchies and decision-making authority.

**Communication Systems and Protocols:**
Implement standardized communication methods including verbal cues, hand signals, and written systems for different situations. Develop protocols for communicating orders, timing, quality issues, and customer requests. Train staff in professional communication with customers and team members.

**Shift Management and Scheduling:**
Create efficient scheduling systems that ensure adequate coverage during all operating hours. Develop procedures for shift changes, break rotations, and emergency coverage. Implement time tracking and attendance systems that support payroll and performance management.

**Training and Skill Development:**
Establish comprehensive training programs covering food safety, customer service, equipment operation, and emergency procedures. Implement ongoing skill development opportunities and cross-training programs. Create mentorship systems for new employees.

**Conflict Resolution and Problem Solving:**
Develop procedures for addressing workplace conflicts, performance issues, and customer complaints. Train supervisors in conflict resolution techniques and progressive discipline procedures. Create systems for documenting and addressing recurring problems.

**Team Building and Motivation:**
Implement team building activities and recognition programs that foster positive workplace culture. Develop incentive systems that reward individual and team performance. Create opportunities for staff input and feedback on operational improvements.

**Performance Monitoring and Feedback:**
Establish regular performance review processes with clear metrics and improvement goals. Implement real-time feedback systems for immediate correction and recognition. Track key performance indicators including service speed, accuracy, and customer satisfaction.

**Emergency Procedures and Safety Protocols:**
Train all staff in emergency procedures including equipment failures, medical emergencies, and security issues. Establish clear communication chains for different emergency situations. Conduct regular safety drills and equipment training.

**Cultural Sensitivity and Inclusion:**
Create inclusive workplace environments that respect diverse backgrounds and perspectives. Implement anti-discrimination policies and cultural sensitivity training. Develop systems for accommodating different languages, religious practices, and cultural needs.

**Canadian Employment Considerations:**
Understand Canadian employment standards including minimum wage, overtime, breaks, and workplace safety requirements. Implement proper documentation systems for hiring, performance management, and termination procedures. Consider seasonal employment patterns and retention strategies.`,
      actionItems: [
        'Create detailed job descriptions with specific responsibilities and performance standards',
        'Develop communication protocols for different service situations and emergencies',
        'Design comprehensive training program covering all operational and safety requirements',
        'Implement performance monitoring system with regular feedback and recognition',
        'Establish conflict resolution procedures and emergency response protocols'
      ],
      tips: [
        'Hold brief team meetings before each shift to address daily goals and any issues',
        'Rotate responsibilities regularly to prevent boredom and build versatile skills',
        'Recognize and reward good performance immediately - positive reinforcement works better than criticism'
      ]
    },
    {
      icon: Wrench,
      title: 'Equipment Maintenance & Troubleshooting',
      priority: 'High',
      timeImpact: 'Prevent 80% of breakdowns',
      content: `Proactive equipment maintenance prevents costly breakdowns, ensures food safety compliance, and maintains consistent service quality. Regular maintenance extends equipment life and reduces emergency repair costs.

**Daily Equipment Inspections:**
Conduct systematic daily inspections of all cooking equipment, refrigeration units, electrical systems, and safety devices. Check for unusual sounds, temperatures, vibrations, or performance issues. Document all observations and address minor issues before they become major problems.

**Preventive Maintenance Schedules:**
Develop comprehensive maintenance schedules for all equipment based on manufacturer recommendations and usage patterns. Include daily, weekly, monthly, and annual maintenance tasks. Track maintenance completion and schedule professional service as needed.

**Cleaning and Sanitization Procedures:**
Implement thorough cleaning procedures for all equipment that maintain performance and extend equipment life. Use appropriate cleaning products and techniques for different equipment types. Ensure all cleaning procedures meet health department standards.

**Troubleshooting Common Issues:**
Train staff to identify and address common equipment problems including temperature fluctuations, electrical issues, and mechanical problems. Develop troubleshooting guides with step-by-step procedures for common issues. Know when to attempt repairs versus calling professionals.

**Parts Inventory and Supplier Relationships:**
Maintain inventory of common replacement parts including filters, gaskets, fuses, and wear items. Develop relationships with equipment suppliers and service technicians for quick response to problems. Keep equipment manuals and warranty information easily accessible.

**Emergency Backup Procedures:**
Develop contingency plans for equipment failures during service including backup cooking methods, alternative menu items, and customer communication strategies. Maintain emergency contact lists for repair services and equipment rental companies.

**Temperature Monitoring and Food Safety:**
Implement continuous temperature monitoring systems for all refrigeration and cooking equipment. Maintain detailed temperature logs as required by health departments. Develop procedures for equipment failures that could compromise food safety.

**Energy Efficiency and Cost Management:**
Monitor equipment energy consumption and implement efficiency improvements. Regular maintenance improves energy efficiency and reduces operating costs. Consider equipment upgrades when maintenance costs exceed replacement benefits.

**Professional Service and Warranty Management:**
Schedule regular professional maintenance for complex equipment including generators, HVAC systems, and specialized cooking equipment. Maintain warranty documentation and ensure warranty requirements are met. Build relationships with reliable service providers.

**Canadian Climate Considerations:**
Canadian weather creates additional maintenance challenges including freeze protection, condensation management, and extreme temperature operation. Implement seasonal maintenance procedures and winterization protocols for equipment protection.`,
      actionItems: [
        'Create daily equipment inspection checklist with documentation requirements',
        'Develop preventive maintenance schedule for all equipment with tracking system',
        'Build troubleshooting guides for common equipment problems with step-by-step solutions',
        'Establish parts inventory system with supplier relationships and emergency contacts',
        'Implement temperature monitoring and food safety compliance procedures'
      ],
      tips: [
        'Keep detailed maintenance logs - they help identify patterns and support warranty claims',
        'Train multiple staff members on basic maintenance tasks to ensure coverage',
        'Invest in quality tools and cleaning supplies - they pay for themselves in equipment longevity'
      ]
    },
    {
      icon: Shield,
      title: 'Food Safety & Health Compliance',
      priority: 'Critical',
      timeImpact: 'Prevent violations 95%',
      content: `Food safety compliance is non-negotiable in food truck operations. Systematic approaches to food safety protect customers, prevent legal issues, and maintain your business reputation and operating permits.

**Temperature Control and Monitoring:**
Implement comprehensive temperature monitoring systems for all food storage, preparation, and service areas. Maintain detailed temperature logs as required by health departments. Develop procedures for temperature violations and corrective actions.

**Personal Hygiene and Staff Health:**
Establish strict personal hygiene standards including handwashing procedures, proper clothing, and health monitoring. Implement policies for sick employees and return-to-work procedures. Train staff in proper hygiene practices and provide necessary supplies.

**Cross-Contamination Prevention:**
Develop procedures to prevent cross-contamination between raw and cooked foods, allergens, and different food types. Implement color-coded cutting boards, separate storage areas, and proper cleaning procedures. Train staff in contamination risks and prevention methods.

**Cleaning and Sanitization Protocols:**
Create detailed cleaning schedules and procedures for all surfaces, equipment, and utensils. Use approved sanitizers and cleaning products according to manufacturer instructions. Implement three-compartment sink procedures and sanitizer testing protocols.

**Food Storage and Inventory Management:**
Establish proper food storage procedures including FIFO rotation, proper labeling, and storage temperature requirements. Implement inventory tracking systems that prevent spoilage and ensure freshness. Develop procedures for receiving and inspecting deliveries.

**Allergen Management and Labeling:**
Implement comprehensive allergen management procedures including ingredient tracking, menu labeling, and staff training. Develop procedures for handling allergen-free requests and preventing cross-contact. Maintain detailed ingredient lists and supplier information.

**Documentation and Record Keeping:**
Maintain detailed records of temperature monitoring, cleaning activities, staff training, and corrective actions. Keep all documentation organized and easily accessible for health inspections. Implement digital record-keeping systems where possible.

**Health Inspection Preparation:**
Develop procedures for routine health inspections including documentation preparation, staff briefing, and facility presentation. Address common inspection issues proactively and maintain inspection-ready conditions daily. Build positive relationships with health inspectors.

**Corrective Action Procedures:**
Establish procedures for addressing food safety violations, equipment failures, and other issues that could compromise food safety. Train staff in immediate response procedures and documentation requirements. Develop systems for preventing recurring problems.

**Canadian Health Regulations:**
Understand provincial and municipal health regulations that apply to mobile food service. Stay current with regulation changes and ensure compliance with all applicable standards. Consider regional variations in requirements and enforcement practices.`,
      actionItems: [
        'Implement comprehensive temperature monitoring system with detailed logging procedures',
        'Create personal hygiene and staff health policies with training requirements',
        'Develop cross-contamination prevention procedures with color-coded systems',
        'Establish cleaning and sanitization schedules with verification procedures',
        'Design allergen management system with ingredient tracking and menu labeling'
      ],
      tips: [
        'Make food safety everyone\'s responsibility - train all staff thoroughly and reinforce regularly',
        'Keep sanitizer test strips and thermometers easily accessible for frequent monitoring',
        'Address food safety issues immediately - never compromise on safety for speed or convenience'
      ]
    },
    {
      icon: TrendingUp,
      title: 'End-of-Day Procedures & Performance Review',
      priority: 'Medium',
      timeImpact: 'Improve next day 25%',
      content: `Systematic end-of-day procedures ensure proper closure, equipment protection, and preparation for the next service day. Performance review processes drive continuous improvement and operational excellence.

**Equipment Shutdown and Cleaning:**
Develop comprehensive equipment shutdown procedures that ensure proper cleaning, sanitization, and protection. Follow manufacturer guidelines for equipment shutdown and storage. Implement deep cleaning schedules for equipment that requires periodic intensive cleaning.

**Food Storage and Inventory Management:**
Properly store all remaining food items according to food safety requirements. Conduct end-of-day inventory counts and update inventory tracking systems. Dispose of expired or compromised food items according to health department requirements.

**Cash Management and Sales Reconciliation:**
Implement secure cash handling procedures including counting, recording, and deposit preparation. Reconcile daily sales with inventory usage and identify any discrepancies. Update financial tracking systems with daily performance data.

**Workspace Cleaning and Organization:**
Clean and sanitize all work surfaces, storage areas, and customer service areas. Organize tools, supplies, and equipment for efficient next-day setup. Secure all valuable items and equipment according to security procedures.

**Performance Data Collection and Analysis:**
Track key performance metrics including sales volume, customer count, average order value, and service times. Analyze daily performance against goals and identify trends or issues. Document any operational challenges or successes for future reference.

**Staff Debriefing and Feedback:**
Conduct brief team meetings to review the day's performance, address any issues, and gather feedback for improvements. Recognize good performance and address any problems constructively. Plan for next-day operations and staff assignments.

**Equipment Security and Protection:**
Secure all equipment, supplies, and the truck itself according to security procedures. Implement theft prevention measures and ensure proper insurance coverage. Consider seasonal storage requirements for Canadian climate conditions.

**Documentation and Record Completion:**
Complete all required documentation including food safety logs, maintenance records, and operational reports. Ensure all records are accurate, complete, and properly stored. Update digital systems with daily information.

**Next-Day Preparation:**
Review next-day schedule, weather forecast, and special events that might affect operations. Prepare any advance prep items that can be done safely. Plan staff schedules and assignments for efficient next-day operations.

**Continuous Improvement Planning:**
Use daily performance data and feedback to identify improvement opportunities. Plan operational changes, menu adjustments, or training needs based on daily observations. Set goals and priorities for ongoing business development.

**Canadian Regulatory Compliance:**
Ensure all end-of-day procedures comply with provincial and municipal regulations including waste disposal, equipment storage, and record keeping requirements. Consider seasonal variations in closing procedures and equipment protection.`,
      actionItems: [
        'Create comprehensive end-of-day checklist covering equipment, cleaning, and security procedures',
        'Develop performance tracking system with key metrics and analysis procedures',
        'Implement staff debriefing process with feedback collection and improvement planning',
        'Establish cash management and sales reconciliation procedures with security measures',
        'Design next-day preparation procedures that optimize morning setup efficiency'
      ],
      tips: [
        'Never rush end-of-day procedures - proper closure prevents problems and saves time tomorrow',
        'Use daily performance reviews to celebrate successes and address issues quickly',
        'Keep detailed notes about what worked well and what needs improvement for future reference'
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
    <section ref={sectionRef} id="daily-operations-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Daily Operational <span className="text-primary-500">Workflows</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Master the day-to-day operations of your food truck business. Learn systematic workflows that maximize efficiency, ensure food safety, and deliver consistent customer experiences.
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
                      Impact: {currentStepData.timeImpact}
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
                                Daily Operations Workflows Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've mastered the essential daily operational workflows for food truck success. You now have systematic procedures for efficient, safe, and profitable operations.
                              </p>
                              <Link
                                to="/operations/inventory-management"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Next: Inventory Management Systems
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

export default DailyOperationsLesson;