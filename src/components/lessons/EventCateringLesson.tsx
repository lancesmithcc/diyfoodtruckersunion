import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Users, DollarSign, MapPin, Truck, BarChart3, CheckCircle, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EventCateringLesson: React.FC = () => {
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
      icon: Calendar,
      title: 'Event Booking Process & Client Management',
      priority: 'Critical',
      impact: 'Streamline bookings 90%',
      content: `Professional event booking processes establish credibility, manage expectations, and ensure successful events. Systematic client management builds relationships that lead to repeat bookings and referrals.

**Event Inquiry and Initial Contact:**
Develop professional inquiry response systems that capture essential event details while demonstrating your expertise and reliability. Create standardized inquiry forms that collect event date, location, guest count, budget range, menu preferences, and special requirements.

**Client Consultation and Needs Assessment:**
Conduct thorough consultations that understand client objectives, guest demographics, dietary requirements, and event logistics. Effective consultation builds trust while gathering information needed for accurate proposals and successful execution.

**Proposal Development and Presentation:**
Create professional proposals that clearly outline services, menu options, pricing, terms, and logistics. Well-structured proposals demonstrate professionalism while protecting your business through clear expectations and agreements.

**Contract and Agreement Management:**
Develop comprehensive contracts that protect both parties while clearly defining responsibilities, payment terms, cancellation policies, and service details. Professional contracts prevent misunderstandings and provide legal protection.

**Event Timeline and Communication:**
Establish communication timelines that keep clients informed while managing your workload efficiently. Regular updates build confidence while preventing last-minute changes that can disrupt operations.

**Client Relationship Building:**
Build long-term relationships with clients through exceptional service, follow-up communication, and ongoing engagement. Strong relationships lead to repeat business and valuable referrals.

**Booking Calendar and Scheduling:**
Implement efficient booking calendar systems that prevent double-bookings, manage availability, and optimize scheduling for maximum profitability. Consider travel time, setup requirements, and operational capacity.

**Deposit and Payment Management:**
Establish clear payment policies including deposit requirements, payment schedules, and accepted payment methods. Proper payment management protects cash flow while building client trust.

**Event Documentation and Records:**
Maintain detailed records of all events including client preferences, successful menu items, logistical notes, and lessons learned. Documentation improves future events and builds institutional knowledge.

**Referral and Testimonial Systems:**
Develop systems for collecting testimonials and generating referrals from satisfied clients. Positive references are crucial for building catering business and establishing credibility.

**Canadian Event Considerations:**
Canadian events often emphasize inclusivity, local sourcing, and environmental responsibility. Understand cultural expectations and seasonal considerations that affect event planning and execution.

**Technology Integration:**
Use technology for booking management, client communication, and event coordination. CRM systems, scheduling software, and communication tools improve efficiency and professionalism.`,
      actionItems: [
        'Create professional event inquiry system with standardized forms and response procedures',
        'Develop client consultation process with needs assessment and expectation management',
        'Design comprehensive proposal template with clear pricing, terms, and service details',
        'Establish contract and agreement templates with legal protection and clear responsibilities',
        'Implement booking calendar system with scheduling optimization and communication timelines'
      ],
      tips: [
        'Always confirm event details in writing to prevent misunderstandings and scope creep',
        'Build buffer time into event schedules for setup, breakdown, and unexpected delays',
        'Collect deposits before confirming bookings to ensure serious inquiries and protect your time'
      ]
    },
    {
      icon: Users,
      title: 'Menu Customization & Dietary Accommodations',
      priority: 'Critical',
      impact: 'Expand market reach 60%',
      content: `Flexible menu customization and comprehensive dietary accommodations expand your market reach while demonstrating professionalism and inclusivity. Systematic approaches to menu adaptation ensure successful events while maintaining operational efficiency.

**Menu Flexibility and Adaptation:**
Develop core menu items that can be easily modified for different events, group sizes, and dietary requirements. Flexible menus allow customization while maintaining operational efficiency and cost control.

**Dietary Restriction Management:**
**Allergy Accommodations:** Implement comprehensive allergy management procedures including ingredient tracking, cross-contamination prevention, and clear labeling. Allergy safety is both legally required and ethically essential.

**Religious and Cultural Dietary Laws:** Understand and accommodate religious dietary requirements including halal, kosher, and other cultural food restrictions. Cultural accommodation demonstrates respect and expands your client base.

**Health-Based Dietary Needs:** Accommodate health-based dietary requirements including diabetic-friendly, low-sodium, and heart-healthy options. Health accommodations serve growing market segments with specific needs.

**Lifestyle Dietary Preferences:** Provide options for lifestyle choices including vegetarian, vegan, keto, paleo, and gluten-free diets. Lifestyle accommodations appeal to conscious consumers and expand market opportunities.

**Menu Engineering for Events:**
**Scalability Planning:** Design menu items that scale efficiently for different group sizes while maintaining quality and presentation standards. Scalable menus reduce complexity and improve profitability.

**Preparation Logistics:** Consider preparation requirements, equipment needs, and service logistics when developing event menus. Practical considerations ensure successful execution under event conditions.

**Cost Management:** Balance menu customization with cost control through strategic ingredient selection, portion planning, and preparation efficiency. Profitable customization requires careful cost management.

**Presentation and Service Style:**
**Buffet Service:** Develop buffet presentation systems that maintain food safety while providing attractive, accessible service. Buffet service works well for larger groups and reduces service labor.

**Plated Service:** Create plated service options for formal events requiring individual presentation. Plated service provides premium experience but requires additional planning and labor.

**Family Style Service:** Design family-style service options that encourage interaction while simplifying service logistics. Family style works well for casual events and team-building functions.

**Special Event Menus:**
**Seasonal Specialties:** Develop seasonal menu options that take advantage of fresh ingredients and holiday themes. Seasonal menus create excitement and justify premium pricing.

**Cultural Theme Menus:** Create culturally themed menus for specific celebrations or cultural events. Themed menus demonstrate expertise and appeal to specific communities.

**Corporate Event Packages:** Design corporate-friendly menu packages that work well for business functions, meetings, and professional events. Corporate packages should emphasize convenience and professional presentation.

**Quality Control and Consistency:**
**Recipe Standardization:** Maintain recipe standardization even with customization to ensure consistent quality and cost control. Standardized processes enable customization without chaos.

**Staff Training:** Train staff in dietary accommodation procedures, cross-contamination prevention, and special service requirements. Proper training ensures safe, professional service.

**Documentation Systems:** Document all customizations, dietary accommodations, and special requirements for each event. Documentation ensures nothing is overlooked and builds knowledge for future events.

**Canadian Dietary Landscape:**
Canadian events often require accommodation for French and English preferences, indigenous food traditions, and diverse immigrant communities. Understanding Canadian dietary diversity is essential for successful event catering.`,
      actionItems: [
        'Develop flexible menu framework with customization options for different event types and sizes',
        'Create comprehensive dietary accommodation procedures including allergy management and cultural requirements',
        'Design scalable menu items with preparation logistics and cost management considerations',
        'Establish presentation and service style options for buffet, plated, and family-style service',
        'Implement quality control systems with recipe standardization and staff training for accommodations'
      ],
      tips: [
        'Always ask about dietary restrictions during initial consultations rather than assuming standard menus work',
        'Develop signature items that can be easily modified rather than completely different menus for each event',
        'Keep detailed notes about successful customizations for future reference and efficiency'
      ]
    },
    {
      icon: MapPin,
      title: 'Logistics Planning & Site Management',
      priority: 'High',
      impact: 'Prevent 95% of issues',
      content: `Thorough logistics planning and professional site management ensure smooth event execution while preventing costly problems. Systematic approaches to logistics reduce stress and improve client satisfaction.

**Site Assessment and Planning:**
**Location Evaluation:** Conduct thorough site evaluations including access routes, parking availability, electrical power, water access, and waste disposal options. Site assessment prevents operational surprises and ensures feasibility.

**Space Planning:** Plan equipment placement, service areas, and customer flow to optimize efficiency and safety. Effective space planning maximizes service capacity while maintaining professional appearance.

**Permit and Regulatory Requirements:** Research and obtain all required permits for event locations including health department approvals, fire permits, and municipal vendor licenses. Permit compliance prevents shutdowns and legal issues.

**Infrastructure and Utilities:**
**Power Requirements:** Calculate power needs and arrange adequate electrical supply through building connections or generator systems. Insufficient power can shut down operations completely.

**Water and Waste Systems:** Plan water supply and waste disposal systems that meet health department requirements and operational needs. Proper utilities are essential for food safety compliance.

**Internet and Communication:** Ensure adequate internet connectivity for POS systems, communication, and payment processing. Communication systems are essential for modern event operations.

**Equipment and Setup Planning:**
**Equipment Transportation:** Plan equipment transportation including loading procedures, securing methods, and unloading logistics. Efficient transportation prevents damage and reduces setup time.

**Setup and Breakdown Procedures:** Develop systematic setup and breakdown procedures that minimize time while ensuring proper installation and safety. Efficient procedures reduce labor costs and client disruption.

**Backup Equipment Planning:** Plan backup equipment for critical systems including generators, POS systems, and cooking equipment. Backup planning prevents event failures due to equipment problems.

**Weather and Environmental Considerations:**
**Weather Contingency Planning:** Develop weather contingency plans for outdoor events including shelter options, equipment protection, and service modifications. Canadian weather requires comprehensive contingency planning.

**Temperature Control:** Plan temperature control for both food safety and customer comfort including heating, cooling, and food storage considerations. Temperature control is critical for safety and quality.

**Environmental Protection:** Implement environmental protection measures for equipment, food, and service areas. Protection systems prevent weather-related problems and maintain professional appearance.

**Safety and Security Planning:**
**Safety Protocols:** Establish safety protocols for equipment operation, food handling, and customer service in event environments. Safety planning protects staff, customers, and business.

**Security Measures:** Plan security measures for equipment, cash, and inventory during events. Security planning prevents theft and ensures business protection.

**Emergency Procedures:** Develop emergency procedures for medical situations, equipment failures, and other crisis situations. Emergency preparedness enables quick response and professional crisis management.

**Client Communication and Coordination:**
**Pre-Event Coordination:** Coordinate with clients and event organizers to confirm details, timing, and logistics. Clear coordination prevents misunderstandings and ensures smooth execution.

**Day-of Communication:** Establish communication protocols for event day including contact persons, timing updates, and issue resolution. Effective communication maintains professional relationships and resolves problems quickly.

**Post-Event Follow-up:** Implement post-event follow-up procedures including equipment retrieval, final billing, and client feedback collection. Professional follow-up builds relationships and improves future events.

**Canadian Event Logistics:**
Canadian events often involve complex logistics due to weather, distances, and regulatory variations between provinces and municipalities. Plan for Canadian-specific challenges including winter operations and interprovincial regulations.`,
      actionItems: [
        'Develop comprehensive site assessment procedures with infrastructure and utility evaluation',
        'Create equipment transportation and setup procedures with safety and efficiency protocols',
        'Establish weather contingency planning with backup systems and environmental protection',
        'Implement safety and security protocols with emergency procedures and crisis management',
        'Design client communication systems with pre-event coordination and day-of management'
      ],
      tips: [
        'Visit event sites in person whenever possible - photos and descriptions often miss critical details',
        'Always have backup plans for critical systems - events have no tolerance for equipment failures',
        'Build extra time into setup and breakdown schedules - events rarely go exactly as planned'
      ]
    },
    {
      icon: Truck,
      title: 'Equipment Requirements & Mobile Setup',
      priority: 'High',
      impact: 'Optimize efficiency 50%',
      content: `Event catering requires specialized equipment and mobile setup strategies that differ from regular food truck operations. Proper equipment planning ensures successful service while maintaining efficiency and food safety standards.

**Event-Specific Equipment Needs:**
**High-Volume Cooking Equipment:** Events often require higher capacity cooking equipment including larger grills, multiple fryers, and increased refrigeration. Scale equipment to match expected volume and service speed requirements.

**Serving and Presentation Equipment:** Invest in professional serving equipment including chafing dishes, serving utensils, and presentation displays that maintain food quality and visual appeal during extended service periods.

**Portable Infrastructure:** Develop portable infrastructure including tables, tents, lighting, and signage that create professional service areas at any location. Portable systems provide consistency and professionalism.

**Mobile Kitchen Optimization:**
**Workflow Efficiency:** Optimize mobile kitchen workflows for event service including prep station organization, cooking line efficiency, and service area layout. Efficient workflows handle high volume while maintaining quality.

**Storage and Organization:** Implement storage and organization systems that maximize space utilization while maintaining food safety and operational efficiency. Organized systems reduce service time and prevent errors.

**Equipment Maintenance:** Establish equipment maintenance procedures that ensure reliability during critical events. Equipment failures during events can be devastating to reputation and profitability.

**Technology and POS Systems:**
**Mobile POS Solutions:** Implement mobile POS systems that work reliably in various locations and conditions. Modern POS systems should handle payments, track sales, and manage inventory in real-time.

**Communication Technology:** Use communication technology including two-way radios, mobile phones, and coordination apps that keep teams connected during events. Communication technology improves coordination and problem-solving.

**Backup Technology:** Plan backup technology systems for critical functions including payment processing, communication, and order management. Technology failures can disrupt service and damage client relationships.

**Transportation and Logistics:**
**Vehicle Capacity Planning:** Plan vehicle capacity for equipment, supplies, and staff transportation to event locations. Adequate transportation prevents multiple trips and reduces setup time.

**Loading and Unloading Systems:** Develop efficient loading and unloading systems that protect equipment while minimizing setup time. Systematic approaches reduce labor and prevent damage.

**Route Planning:** Plan transportation routes that consider vehicle restrictions, traffic patterns, and arrival timing. Efficient routing reduces costs and ensures timely arrival.

**Power and Utility Management:**
**Generator Systems:** Implement reliable generator systems that provide adequate power for all equipment and lighting needs. Generator reliability is critical for event success.

**Power Distribution:** Plan power distribution systems that safely deliver electricity to all equipment while meeting electrical codes and safety requirements. Proper distribution prevents overloads and safety hazards.

**Utility Backup Systems:** Develop backup utility systems for power, water, and communication that ensure continued operation during infrastructure failures. Backup systems prevent event disruption.

**Setup and Breakdown Efficiency:**
**Systematic Procedures:** Develop systematic setup and breakdown procedures that minimize time while ensuring proper installation and safety. Efficient procedures reduce labor costs and client disruption.

**Team Coordination:** Coordinate team efforts during setup and breakdown to maximize efficiency and prevent confusion. Clear coordination improves speed and reduces errors.

**Equipment Protection:** Implement equipment protection procedures during transportation, setup, and breakdown that prevent damage and extend equipment life. Protection procedures reduce replacement costs and maintain reliability.

**Canadian Event Equipment:**
Canadian events often require additional equipment for weather protection, extended outdoor operations, and compliance with provincial health and safety regulations. Plan for Canadian-specific equipment needs and regulatory requirements.`,
      actionItems: [
        'Assess event-specific equipment needs with high-volume cooking and professional presentation systems',
        'Optimize mobile kitchen workflows with efficient organization and maintenance procedures',
        'Implement reliable technology systems with mobile POS, communication, and backup solutions',
        'Develop transportation and logistics systems with capacity planning and route optimization',
        'Create systematic setup and breakdown procedures with team coordination and equipment protection'
      ],
      tips: [
        'Invest in quality equipment that can handle the demands of high-volume event service',
        'Practice setup and breakdown procedures regularly to build speed and identify improvements',
        'Always bring backup equipment for critical systems - events have no tolerance for failures'
      ]
    },
    {
      icon: DollarSign,
      title: 'Pricing Strategies & Contract Management',
      priority: 'Critical',
      impact: 'Increase margins 40%',
      content: `Strategic pricing and professional contract management maximize profitability while building client trust and protecting business interests. Systematic approaches to pricing and contracts ensure sustainable catering operations.

**Event Pricing Models:**
**Per-Person Pricing:** Develop per-person pricing models that account for food costs, labor, overhead, and profit margins. Per-person pricing simplifies client understanding while ensuring profitability across different group sizes.

**Package Pricing:** Create package pricing options that bundle services, equipment, and menu items for different event types. Package pricing increases average order value while simplifying client decision-making.

**Hourly Service Rates:** Establish hourly service rates for events requiring extended service periods or complex logistics. Hourly rates ensure compensation for time investment while providing pricing flexibility.

**Cost Analysis and Margin Management:**
**True Cost Calculation:** Calculate true event costs including food, labor, transportation, equipment, overhead, and opportunity costs. Comprehensive cost analysis ensures pricing covers all expenses and generates profit.

**Labor Cost Planning:** Plan labor costs including setup, service, breakdown, and travel time. Labor often represents 30-40% of event costs and requires careful planning and management.

**Overhead Allocation:** Allocate overhead costs including insurance, permits, equipment depreciation, and administrative time to event pricing. Proper allocation ensures all business costs are covered.

**Contract Terms and Protection:**
**Payment Terms:** Establish clear payment terms including deposit requirements, payment schedules, and late payment penalties. Structured payment terms protect cash flow and reduce collection issues.

**Cancellation Policies:** Develop fair but protective cancellation policies that compensate for lost opportunity and incurred costs. Clear policies prevent disputes and protect revenue.

**Scope Definition:** Define service scope clearly including what's included, excluded, and available as add-ons. Clear scope prevents misunderstandings and protects against scope creep.

**Risk Management and Insurance:**
**Liability Protection:** Ensure contracts include appropriate liability protection and insurance requirements. Liability protection prevents costly legal issues and protects business assets.

**Force Majeure Clauses:** Include force majeure clauses that address uncontrollable circumstances including weather, emergencies, and regulatory changes. Force majeure protection prevents unfair liability.

**Change Order Procedures:** Establish procedures for handling changes to original agreements including pricing, approval, and documentation requirements. Change procedures protect against unpaid additional work.

**Value-Based Pricing Strategies:**
**Premium Service Positioning:** Position premium services that justify higher pricing through superior quality, unique offerings, or exceptional service. Premium positioning increases margins while attracting quality clients.

**Seasonal Pricing:** Implement seasonal pricing that reflects demand patterns, ingredient costs, and operational challenges. Seasonal pricing optimizes revenue while managing capacity.

**Market-Based Pricing:** Research market pricing and position your services competitively while maintaining profitability. Market awareness ensures competitive positioning without underpricing.

**Negotiation and Sales Strategies:**
**Value Communication:** Communicate value effectively through professional presentations, testimonials, and service demonstrations. Value communication justifies pricing and builds client confidence.

**Negotiation Techniques:** Develop negotiation techniques that protect margins while building client relationships. Effective negotiation finds win-win solutions that satisfy both parties.

**Upselling Opportunities:** Identify and present upselling opportunities including premium menu items, additional services, and enhanced presentations. Upselling increases revenue while providing client value.

**Financial Management and Tracking:**
**Event Profitability Analysis:** Track event profitability to identify successful pricing strategies and improvement opportunities. Profitability analysis guides pricing decisions and business development.

**Cash Flow Management:** Manage cash flow through strategic payment terms, deposit collection, and expense timing. Effective cash flow management ensures operational stability.

**Performance Metrics:** Track performance metrics including average order value, profit margins, and client satisfaction to optimize pricing and service strategies.

**Canadian Pricing Considerations:**
Canadian event pricing often reflects regional economic conditions, seasonal demand patterns, and cultural expectations for value and service quality. Understand local market conditions and price accordingly.`,
      actionItems: [
        'Develop comprehensive pricing models with per-person, package, and hourly rate structures',
        'Create detailed cost analysis system with true cost calculation and margin management',
        'Establish professional contract templates with clear terms, payment schedules, and protection clauses',
        'Implement value-based pricing strategies with premium positioning and market research',
        'Design financial tracking system with profitability analysis and performance metrics'
      ],
      tips: [
        'Price for profit, not just to win business - unprofitable events hurt your business long-term',
        'Always get contracts signed before beginning any work or ordering supplies',
        'Build contingency costs into pricing to handle unexpected expenses and changes'
      ]
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking & Business Development',
      priority: 'Medium',
      impact: 'Optimize growth strategy',
      content: `Systematic performance tracking and strategic business development ensure sustainable catering growth while identifying opportunities for improvement and expansion. Data-driven approaches optimize operations and guide strategic decisions.

**Event Performance Metrics:**
**Financial Performance:** Track financial metrics including revenue per event, profit margins, average order value, and cost ratios. Financial tracking identifies profitable event types and pricing optimization opportunities.

**Operational Efficiency:** Monitor operational metrics including setup time, service speed, staff productivity, and equipment utilization. Efficiency tracking identifies improvement opportunities and capacity optimization.

**Client Satisfaction:** Measure client satisfaction through surveys, testimonials, and repeat booking rates. Satisfaction metrics guide service improvements and relationship building strategies.

**Business Development Strategy:**
**Market Analysis:** Analyze catering market opportunities including event types, client segments, and competitive positioning. Market analysis guides business development priorities and resource allocation.

**Client Acquisition:** Develop systematic client acquisition strategies including referral programs, marketing campaigns, and networking activities. Acquisition strategies build sustainable business growth.

**Service Expansion:** Identify service expansion opportunities including new event types, additional services, and market segments. Strategic expansion increases revenue while leveraging existing capabilities.

**Competitive Analysis and Positioning:**
**Competitor Monitoring:** Monitor competitor activities, pricing, and service offerings to maintain competitive positioning. Competitive awareness guides strategic decisions and differentiation strategies.

**Differentiation Strategies:** Develop differentiation strategies that set your catering services apart from competitors. Unique positioning creates competitive advantages and justifies premium pricing.

**Market Positioning:** Position your catering services effectively in the market through branding, messaging, and service design. Strong positioning attracts ideal clients and builds market recognition.

**Growth Planning and Scaling:**
**Capacity Planning:** Plan capacity growth including equipment, staff, and operational systems needed to handle increased business. Capacity planning ensures growth doesn't compromise quality.

**Investment Priorities:** Identify investment priorities for equipment, technology, and infrastructure that support catering growth. Strategic investment maximizes return while building capabilities.

**Scaling Strategies:** Develop scaling strategies that maintain quality and profitability while increasing volume. Sustainable scaling requires systematic approaches to growth management.

**Client Relationship Management:**
**CRM Systems:** Implement customer relationship management systems that track client interactions, preferences, and history. CRM systems improve service while identifying business opportunities.

**Retention Strategies:** Develop client retention strategies including follow-up programs, loyalty incentives, and relationship building activities. Retention strategies maximize client lifetime value.

**Referral Programs:** Create referral programs that incentivize satisfied clients to recommend your services. Referral programs leverage satisfied clients for business development.

**Quality Improvement and Innovation:**
**Continuous Improvement:** Implement continuous improvement processes that identify and address service gaps, operational inefficiencies, and client concerns. Improvement processes maintain competitive advantage.

**Innovation Initiatives:** Develop innovation initiatives including new menu items, service concepts, and technology applications. Innovation keeps services fresh and attracts new clients.

**Best Practice Development:** Document and share best practices across your team to maintain consistency and accelerate learning. Best practices improve performance while reducing training time.

**Financial Analysis and Planning:**
**Profitability Analysis:** Conduct detailed profitability analysis by event type, client segment, and service category. Profitability analysis guides resource allocation and strategic decisions.

**Cash Flow Management:** Manage catering cash flow including seasonal patterns, payment timing, and investment requirements. Cash flow management ensures operational stability during growth.

**ROI Measurement:** Measure return on investment for catering initiatives including marketing, equipment, and staff investments. ROI measurement guides resource allocation and strategic planning.

**Canadian Market Development:**
Canadian catering markets often have distinct seasonal patterns, regional preferences, and cultural considerations that affect business development strategies. Understand local market dynamics and adapt strategies accordingly.`,
      actionItems: [
        'Establish comprehensive performance tracking system with financial, operational, and satisfaction metrics',
        'Develop business development strategy with market analysis and client acquisition planning',
        'Implement competitive analysis and differentiation strategies with market positioning',
        'Create growth planning system with capacity planning and investment prioritization',
        'Design client relationship management system with retention strategies and referral programs'
      ],
      tips: [
        'Track both leading and lagging indicators - leading indicators help you predict and prevent problems',
        'Focus on client lifetime value rather than just individual event profitability',
        'Use performance data to celebrate successes and identify specific improvement opportunities'
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
    <section ref={sectionRef} id="event-catering-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Event Planning & <span className="text-primary-500">Catering</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Expand your revenue streams with successful event catering and private bookings. Learn professional event management, logistics planning, and business development strategies.
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
                                Event Planning & Catering Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've mastered event planning and catering for food truck operations. You now have the tools to expand your revenue streams through professional event services.
                              </p>
                              <Link
                                to="/operations/performance-monitoring"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Next: Performance Monitoring
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

export default EventCateringLesson;