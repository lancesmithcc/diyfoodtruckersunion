import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, MapPin, TrendingUp, Heart, Lightbulb, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const NicheTargetingLesson: React.FC = () => {
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
      icon: Target,
      title: 'Identify Market Gaps & Opportunities',
      priority: 'Critical',
      difficulty: 'Moderate',
      content: `Finding your niche starts with identifying gaps in your local food truck market. This isn't about copying what's already successful—it's about finding underserved opportunities where you can excel.

**Market Gap Analysis:**
Successful food truck niches often emerge from unmet demand in local markets. Look for cuisines that are popular in restaurants but underrepresented in mobile food service. Consider dietary trends, cultural communities, and seasonal opportunities that existing operators haven't addressed.

**The "Community Over Competition" Approach:**
Rather than competing directly with established trucks, find your unique space. If there are five burger trucks, maybe there's room for authentic Korean BBQ, gourmet grilled cheese, or healthy Mediterranean bowls. Your goal is to be the only option for your specific niche, not the best option among many similar choices.

**Seasonal and Event Opportunities:**
Canadian markets offer unique seasonal opportunities. Consider specializing in comfort foods for winter markets, fresh and light options for summer festivals, or holiday-specific treats. Some successful operators build entire businesses around seasonal specialties like maple syrup treats, poutine variations, or festival foods.

**Cultural and Dietary Niches:**
Canada's diverse population creates opportunities for authentic ethnic cuisines and dietary-specific options. Consider underserved communities in your area—recent immigrants often crave authentic foods from their home countries. Similarly, growing dietary trends like keto, vegan, or gluten-free create niche opportunities.

**Location-Specific Opportunities:**
Different locations create different niche opportunities. Office districts need quick, healthy lunch options. University campuses want affordable, filling meals. Event venues need Instagram-worthy specialty items. Analyze your target locations to identify specific needs.

**Competitive Advantage Development:**
Your niche should align with your unique strengths. If you have family recipes, culinary training, or cultural background in specific cuisines, these become competitive advantages. Authenticity and personal story often matter more than perfect execution initially.

**Testing and Validation:**
Before committing fully to a niche, test market demand through small-scale validation. Attend farmers markets, cater small events, or partner with local businesses for lunch service. This low-cost testing helps validate demand before major investment.

**Scalability Considerations:**
Consider whether your niche can support sustainable business growth. Highly specialized niches might have limited customer bases, while broader niches face more competition. Find the balance between specificity and market size that works for your goals.

**Canadian Market Considerations:**
Canadian food preferences vary significantly by region. Maritime provinces might embrace seafood specialties, while Prairie provinces prefer hearty comfort foods. Research regional preferences and adapt your niche accordingly.`,
      actionItems: [
        'Research all existing food trucks in your target area and categorize their offerings',
        'Identify 3-5 cuisine types or dietary niches that are underrepresented locally',
        'Survey 20 potential customers about unmet food cravings or dietary needs',
        'Analyze seasonal events and festivals to identify specialty food opportunities',
        'Assess your personal skills, background, and passions for niche alignment'
      ],
      tips: [
        'Look for niches where you can be authentic - customers can tell when you\'re passionate about your food',
        'Consider combining familiar concepts with unique twists rather than completely foreign cuisines',
        'Test your niche concept at farmers markets or small events before full commitment'
      ]
    },
    {
      icon: Users,
      title: 'Define Your Ideal Customer Personas',
      priority: 'Critical',
      difficulty: 'Moderate',
      content: `Understanding your ideal customers goes beyond basic demographics. You need to understand their lifestyle, values, pain points, and food preferences to create a successful food truck concept that resonates deeply.

**Primary Customer Persona Development:**
Create detailed profiles of your ideal customers including age, income, occupation, family status, and lifestyle patterns. But go deeper—understand their daily routines, food values, price sensitivity, and decision-making factors. A 30-year-old office worker and a 30-year-old tradesperson might have completely different food truck needs.

**Psychographic Profiling:**
Demographics tell you who your customers are, but psychographics tell you why they buy. Are they health-conscious, convenience-focused, adventure-seeking, or budget-minded? Do they value authenticity, speed, Instagram-worthiness, or comfort? These psychological factors often matter more than age or income.

**Pain Point Identification:**
Every customer has food-related problems your truck could solve. Office workers need quick, healthy lunches that don't require long waits. Parents need kid-friendly options that adults also enjoy. Health-conscious consumers need tasty options that fit their dietary restrictions. Identify specific problems your niche can solve.

**Behavioral Pattern Analysis:**
Understand when, where, and how your customers make food decisions. Do they plan meals in advance or decide impulsively? Do they eat alone or in groups? Are they influenced by social media, word-of-mouth, or visual appeal? These patterns inform your marketing and operational strategies.

**Price Sensitivity and Value Perception:**
Different customer segments have different price expectations and value definitions. Students prioritize affordability and portion size. Business professionals value speed and quality. Food enthusiasts pay premium prices for unique experiences. Align your pricing strategy with your target customers' value perceptions.

**Location and Timing Preferences:**
Your ideal customers' daily patterns determine optimal locations and operating hours. Office workers need lunch service near business districts. Families prefer weekend farmers markets and festivals. Late-night crowds want different locations and menu items than lunch customers.

**Communication Preferences:**
Different customer segments prefer different communication channels. Younger customers rely on Instagram and TikTok. Business professionals check Facebook and email. Families often discover food trucks through word-of-mouth and community events. Tailor your marketing approach accordingly.

**Multiple Persona Strategy:**
Most successful food trucks serve 2-3 distinct customer personas rather than trying to appeal to everyone. You might target health-conscious office workers for lunch and families for weekend events. Ensure your menu and marketing can serve multiple personas without losing focus.

**Canadian Cultural Considerations:**
Canadian customers often value politeness, multiculturalism, and community connection. They appreciate businesses that support local suppliers, understand seasonal preferences, and respect cultural authenticity. These values should influence your customer persona development.

**Persona Validation and Refinement:**
Test your customer personas through direct interaction. Attend events where your target customers gather. Conduct informal interviews. Observe purchasing behaviors at existing food trucks. Refine your personas based on real-world feedback rather than assumptions.`,
      actionItems: [
        'Create detailed profiles for 2-3 primary customer personas including demographics and psychographics',
        'Interview 10 people from each target persona about their food truck preferences and pain points',
        'Map out daily and weekly patterns for each persona including meal timing and location preferences',
        'Determine price sensitivity and value expectations for each customer segment',
        'Identify preferred communication channels and social media usage for each persona'
      ],
      tips: [
        'Give your personas names and faces - this makes them feel real when making business decisions',
        'Focus on problems your personas face rather than just their characteristics',
        'Update your personas regularly as you learn more about your actual customers'
      ]
    },
    {
      icon: MapPin,
      title: 'Location Strategy & Market Positioning',
      priority: 'High',
      difficulty: 'Advanced',
      content: `Your location strategy directly impacts your success and must align perfectly with your niche and target customers. Different locations require different approaches, and understanding this relationship is crucial for sustainable profitability.

**Location Type Analysis:**
**Business Districts:** Require fast service, professional presentation, and lunch-focused menus. Customers prioritize speed and convenience over price. Peak hours are narrow but high-volume. Parking and permits can be challenging but revenue potential is high.

**Residential Areas:** Need family-friendly options, reasonable prices, and flexible hours. Customers value quality and community connection. Revenue is steadier but lower volume. Easier parking but may require different permits.

**Event Venues:** Demand unique, Instagram-worthy items and efficient high-volume service. Customers expect festival pricing and experience. Revenue is seasonal but can be very high. Requires event permits and advance booking.

**University Campuses:** Need affordable, filling options with late-night availability. Students prioritize value and convenience. Steady customer base but price-sensitive. May require special campus permits.

**Tourist Areas:** Want authentic local experiences and unique offerings. Visitors pay premium prices for memorable food experiences. Seasonal revenue patterns. Competition with established restaurants.

**Market Positioning Strategy:**
Position your truck relative to both direct and indirect competitors. Are you the premium option, the value choice, the authentic alternative, or the convenient solution? Your positioning should align with your niche and target customers while differentiating from competitors.

**Competitive Landscape Mapping:**
Map all food options (trucks, restaurants, fast food) in your target locations. Identify gaps in cuisine types, price points, service styles, and operating hours. Look for opportunities to complement rather than directly compete with established businesses.

**Location Rotation Strategy:**
Most successful food trucks operate multiple locations on rotating schedules. Develop a weekly schedule that maximizes revenue by matching your offerings to location-specific demand. Monday lunch at business district, Saturday morning at farmers market, etc.

**Seasonal Location Planning:**
Canadian seasons dramatically affect location viability. Summer festivals and outdoor events provide high revenue opportunities. Winter requires indoor locations, heated service areas, or seasonal menu adjustments. Plan your annual location strategy around seasonal patterns.

**Permit and Regulatory Considerations:**
Each location type has different permit requirements, operating restrictions, and costs. Business districts may require expensive permits but offer high revenue. Public spaces might have lottery systems or limited availability. Factor permit costs and restrictions into location selection.

**Customer Flow and Service Optimization:**
Different locations create different service challenges. Business districts need lightning-fast service during narrow lunch windows. Events require high-volume capabilities. Residential areas allow for more personalized service. Optimize your operations for each location type.

**Revenue Optimization by Location:**
Track revenue per hour at different locations to optimize your schedule. Some locations might generate lower total revenue but higher profit margins due to lower costs or less competition. Focus on profitability, not just gross revenue.

**Community Integration Strategy:**
Successful food trucks become part of their communities rather than just visiting vendors. Participate in local events, support community causes, and build relationships with other businesses. Community integration leads to customer loyalty and word-of-mouth marketing.

**Technology and Location Marketing:**
Use social media and food truck apps to communicate your location schedule effectively. Consistent, reliable communication about where you'll be builds customer trust and repeat business. Consider loyalty programs that work across multiple locations.`,
      actionItems: [
        'Map all potential operating locations and categorize by type, permits required, and target customers',
        'Analyze competitor presence and positioning at each potential location',
        'Create weekly location rotation schedule that maximizes revenue potential',
        'Research permit requirements and costs for each target location type',
        'Develop location-specific marketing and service strategies'
      ],
      tips: [
        'Start with 2-3 reliable locations and expand gradually rather than trying to cover too many areas initially',
        'Build relationships with property owners and event organizers for consistent location access',
        'Track detailed revenue and cost data by location to optimize your schedule over time'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Competitive Analysis & Differentiation',
      priority: 'High',
      difficulty: 'Advanced',
      content: `Understanding your competition helps you position your food truck for success. This goes beyond just other food trucks—you're competing with all food options your target customers consider.

**Comprehensive Competitor Identification:**
**Direct Competitors:** Other food trucks serving similar cuisines or target markets. Study their menus, pricing, locations, and customer reviews to understand their strengths and weaknesses.

**Indirect Competitors:** Restaurants, fast food chains, and other food options your customers might choose instead. A gourmet burger truck competes with McDonald's for convenience and with sit-down restaurants for quality.

**Substitute Competitors:** Grocery stores, meal kits, and home cooking. Understanding why customers choose these alternatives helps you position your value proposition.

**Competitive Advantage Development:**
**Unique Value Proposition:** What can you offer that competitors can't or won't? This might be authentic family recipes, superior ingredients, faster service, better locations, or unique menu combinations.

**Operational Advantages:** Efficiency improvements, better equipment, superior staff training, or innovative service methods can create competitive advantages that are difficult to replicate.

**Brand Differentiation:** Strong branding, compelling story, community involvement, or exceptional customer experience can differentiate you even with similar food offerings.

**Pricing Strategy Analysis:**
Study competitor pricing across different locations and times. Identify opportunities for value positioning—either premium pricing justified by superior quality or value pricing that attracts price-sensitive customers. Avoid pricing wars that hurt profitability.

**Menu Differentiation Strategies:**
**Signature Items:** Develop unique menu items that become your trademark. These should be difficult for competitors to replicate and aligned with your brand story.

**Quality Differentiation:** Use superior ingredients, preparation methods, or presentation to justify premium positioning.

**Variety and Customization:** Offer options competitors don't, such as dietary accommodations, customization options, or seasonal specialties.

**Service Model Innovation:**
**Speed and Efficiency:** Develop systems that serve customers faster than competitors without sacrificing quality.

**Customer Experience:** Create memorable interactions, loyalty programs, or community engagement that builds stronger customer relationships.

**Technology Integration:** Use ordering apps, social media, or payment systems more effectively than competitors.

**Location and Timing Advantages:**
**Underserved Locations:** Find profitable locations competitors have overlooked or can't access.

**Optimal Timing:** Operate during hours when competitors are closed or when demand exceeds supply.

**Event Strategy:** Secure exclusive or preferred access to high-revenue events and festivals.

**Marketing and Brand Positioning:**
**Authentic Storytelling:** Develop compelling brand stories that resonate with your target customers and differentiate from generic competitors.

**Community Integration:** Build stronger community connections than competitors through local sourcing, charity involvement, or community event participation.

**Digital Presence:** Maintain superior social media presence, customer engagement, and online reputation management.

**Continuous Competitive Monitoring:**
**Regular Assessment:** Monitor competitor activities, menu changes, pricing adjustments, and customer feedback regularly.

**Adaptation Strategy:** Be prepared to adjust your strategy based on competitive changes while maintaining your core differentiation.

**Innovation Pipeline:** Continuously develop new menu items, service improvements, or marketing approaches to stay ahead of competitors.

**Canadian Market Considerations:**
Canadian food truck markets often emphasize community connection, local sourcing, and cultural authenticity. Competitors who understand and embrace these values often outperform those focused solely on food quality or price.`,
      actionItems: [
        'Create comprehensive competitor analysis including direct, indirect, and substitute competitors',
        'Identify 3-5 specific competitive advantages you can develop and maintain',
        'Analyze competitor pricing strategies and identify your optimal pricing position',
        'Develop signature menu items or service features that differentiate your offering',
        'Create monitoring system to track competitor activities and market changes'
      ],
      tips: [
        'Focus on being different rather than just better - differentiation is more sustainable than superiority',
        'Learn from competitors\' mistakes and successes without copying their strategies directly',
        'Build competitive advantages that align with your strengths and are difficult to replicate'
      ]
    },
    {
      icon: Heart,
      title: 'Brand Story & Authentic Positioning',
      priority: 'High',
      difficulty: 'Moderate',
      content: `Your brand story creates emotional connections with customers that transcend food quality and price. Authentic positioning helps customers understand not just what you serve, but why you serve it and why they should care.

**Authentic Story Development:**
**Personal Connection:** Your food truck story should reflect genuine personal experiences, cultural background, culinary journey, or family traditions. Customers connect with authentic stories more than manufactured marketing messages.

**Mission and Values:** Define why your food truck exists beyond making money. Do you want to share your cultural heritage, provide healthy options, support local farmers, or create community gathering spaces? Clear mission drives authentic positioning.

**Origin Story:** Develop a compelling narrative about how and why you started your food truck. Include challenges overcome, inspiration sources, and personal motivations. This story becomes the foundation of your brand identity.

**Cultural Authenticity:**
**Heritage and Tradition:** If serving ethnic cuisine, emphasize authentic preparation methods, traditional recipes, and cultural significance. Customers value genuine cultural experiences over fusion interpretations.

**Local Connection:** Highlight connections to your local community, suppliers, and customers. Canadian consumers appreciate businesses that contribute to local economies and communities.

**Ingredient Sourcing:** Emphasize local, sustainable, or specialty ingredient sourcing that aligns with your brand values and differentiates your offerings.

**Brand Personality Development:**
**Voice and Tone:** Develop consistent communication style that reflects your brand personality. Are you friendly and approachable, sophisticated and refined, fun and energetic, or traditional and reliable?

**Visual Identity:** Create cohesive visual branding including colors, fonts, logo design, and truck appearance that reinforces your brand story and appeals to target customers.

**Customer Interaction Style:** Train staff to embody your brand personality in every customer interaction. Consistent brand experience builds customer loyalty and word-of-mouth marketing.

**Value Proposition Communication:**
**Unique Benefits:** Clearly communicate what customers gain by choosing your truck over alternatives. This might be authentic flavors, healthy options, convenient service, or memorable experiences.

**Emotional Benefits:** Connect with customers' emotional needs beyond hunger. Do you provide comfort, adventure, nostalgia, health, or social connection? Emotional benefits create stronger customer loyalty.

**Functional Benefits:** Highlight practical advantages like speed, convenience, value, quality, or dietary accommodation that solve customer problems.

**Community Integration Strategy:**
**Local Partnerships:** Collaborate with local businesses, suppliers, and organizations that align with your brand values and strengthen community connections.

**Social Responsibility:** Engage in community service, environmental sustainability, or social causes that reflect your brand values and resonate with target customers.

**Customer Community Building:** Create opportunities for customers to connect with each other and your brand through events, social media, or loyalty programs.

**Storytelling Across Channels:**
**Social Media Narrative:** Use social platforms to share ongoing brand story through behind-the-scenes content, ingredient sourcing, preparation processes, and customer interactions.

**Visual Storytelling:** Use photography, design, and presentation to communicate brand story without words. Food presentation, truck design, and staff appearance all tell your story.

**Customer Testimonials:** Encourage and share customer stories that reinforce your brand positioning and demonstrate authentic customer connections.

**Consistency and Evolution:**
**Brand Guidelines:** Develop clear guidelines for maintaining brand consistency across all touchpoints including menu design, social media, customer service, and truck appearance.

**Story Evolution:** Allow your brand story to evolve naturally as your business grows while maintaining core authentic elements that customers connect with.

**Feedback Integration:** Listen to customer feedback about your brand positioning and adjust messaging while staying true to your authentic core story.

**Canadian Brand Considerations:**
Canadian consumers often value modesty, authenticity, and community connection over flashy marketing. Brands that emphasize quality, reliability, and local connection often resonate more than those focused on innovation or luxury.`,
      actionItems: [
        'Write your authentic origin story including personal motivations and cultural connections',
        'Define your brand mission, values, and unique value proposition clearly',
        'Develop consistent brand personality and communication style guidelines',
        'Create visual identity elements that reinforce your brand story and appeal to target customers',
        'Plan community integration and social responsibility initiatives that align with brand values'
      ],
      tips: [
        'Be genuinely authentic - customers can detect manufactured stories and will reject inauthentic brands',
        'Focus on emotional connections rather than just functional benefits',
        'Consistency across all touchpoints is more important than perfection in any single element'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Market Testing & Validation Strategy',
      priority: 'Critical',
      difficulty: 'Advanced',
      content: `Before fully committing to your niche and target market, validate your assumptions through systematic market testing. This reduces risk and provides valuable insights for refining your concept.

**Low-Cost Validation Methods:**
**Farmers Market Testing:** Start with farmers market booths to test menu items, pricing, and customer response with minimal investment. This provides direct customer feedback and sales data to validate demand.

**Pop-Up Events:** Partner with local businesses, breweries, or event organizers for pop-up food service. This tests your concept in different environments and customer segments.

**Catering Opportunities:** Offer catering services for small events, office lunches, or private parties. This validates your food quality, service capabilities, and pricing while generating revenue.

**Social Media Pre-Launch:** Build social media presence before launching to gauge interest, gather feedback on menu concepts, and build customer anticipation.

**Customer Feedback Collection:**
**Direct Surveys:** Conduct structured surveys with potential customers about menu preferences, pricing expectations, location preferences, and service requirements.

**Focus Groups:** Organize small focus groups with target customer personas to test menu items, branding concepts, and service approaches.

**Observation Studies:** Observe customer behavior at existing food trucks and restaurants to understand decision-making patterns, service expectations, and pain points.

**Online Community Engagement:** Participate in local Facebook groups, food forums, and community discussions to understand customer needs and preferences.

**Financial Validation:**
**Revenue Testing:** Track actual sales data from validation activities to verify revenue projections and customer willingness to pay.

**Cost Analysis:** Calculate actual food costs, labor requirements, and operational expenses during testing to validate financial projections.

**Profit Margin Verification:** Ensure your concept can generate sustainable profit margins at price points customers accept.

**Scalability Assessment:** Determine whether validation results can scale to full food truck operations with consistent profitability.

**Operational Validation:**
**Service Speed Testing:** Measure actual service times during validation events to ensure you can meet customer expectations and location requirements.

**Menu Complexity Assessment:** Test whether your menu can be executed consistently with available equipment, space, and staff capabilities.

**Supply Chain Validation:** Verify ingredient availability, supplier reliability, and cost consistency for your menu items.

**Staff Training Requirements:** Assess training needs and staff capabilities required to deliver consistent quality and service.

**Market Response Analysis:**
**Customer Acquisition:** Measure how easily you attract new customers and what marketing methods work most effectively.

**Customer Retention:** Track repeat customers and referral rates to assess long-term viability and customer satisfaction.

**Competitive Response:** Monitor how existing competitors react to your market entry and adjust strategy accordingly.

**Seasonal Variations:** Test your concept during different seasons and weather conditions to understand revenue fluctuations.

**Concept Refinement Process:**
**Menu Optimization:** Use validation feedback to refine menu items, eliminate poor performers, and enhance popular offerings.

**Pricing Adjustments:** Adjust pricing based on customer response and cost analysis to optimize profitability.

**Service Model Improvements:** Refine service processes, equipment needs, and operational procedures based on real-world testing.

**Brand Message Refinement:** Adjust brand positioning, marketing messages, and visual identity based on customer feedback and market response.

**Validation Success Metrics:**
**Sales Targets:** Establish minimum sales targets for validation activities that indicate market viability.

**Customer Satisfaction:** Set customer satisfaction benchmarks that demonstrate concept acceptance.

**Repeat Business:** Define repeat customer rates that indicate long-term sustainability.

**Profitability Thresholds:** Establish profit margin requirements that validate financial viability.

**Scale-Up Decision Framework:**
**Go/No-Go Criteria:** Establish clear criteria for proceeding with full food truck launch based on validation results.

**Concept Pivot Options:** Plan alternative approaches if initial validation doesn't meet success criteria.

**Investment Timing:** Determine optimal timing for major equipment and truck investments based on validation success.

**Market Entry Strategy:** Plan full market entry approach based on validation learnings and proven success factors.`,
      actionItems: [
        'Plan and execute 3-5 low-cost market validation activities over 2-3 months',
        'Collect structured feedback from at least 50 potential customers through surveys and direct interaction',
        'Track detailed financial data including revenue, costs, and profit margins during validation',
        'Measure operational metrics like service speed, customer satisfaction, and repeat business rates',
        'Establish clear success criteria and decision framework for proceeding with full launch'
      ],
      tips: [
        'Start small and scale gradually - validation should minimize risk, not create it',
        'Focus on learning rather than revenue during validation - insights are more valuable than immediate profits',
        'Be prepared to pivot your concept based on validation results - flexibility is key to success'
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section ref={sectionRef} id="niche-targeting-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Finding Your Niche & <span className="text-primary-500">Target Market</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Discover profitable market opportunities and define your ideal customers. Learn to position your food truck for success through strategic niche selection and authentic brand positioning.
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
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(currentStepData.difficulty)}`}>
                      {currentStepData.difficulty}
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
                                Niche & Target Market Complete!
                              </h3>
                              <p className="text-green-700 mb-4">
                                Congratulations! You've completed the comprehensive niche and target market analysis. You now have the foundation to build a successful, differentiated food truck business.
                              </p>
                              <Link
                                to="/getting-started/growth-strategies"
                                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-redhat font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                              >
                                Next: Growth & Scaling Strategies
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

export default NicheTargetingLesson;