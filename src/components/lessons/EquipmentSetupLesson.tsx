import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Wrench, Zap, Battery, Archive, Lightbulb, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EquipmentSetupLesson: React.FC = () => {
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
      icon: Truck,
      title: 'Food Truck vs. Food Trailer Decision',
      priority: 'Critical',
      budgetRange: '$15,000 - $120,000',
      content: `Choosing between a food truck and food trailer is one of your most important decisions, affecting your mobility, costs, and operational flexibility. Each option has distinct advantages that align with different business models and budgets.

**Food Truck Advantages:**
A food truck is a self-contained unit that provides maximum mobility and convenience. You can drive directly to locations, park easily, and don't need a separate vehicle for transport. This makes food trucks ideal for operators who plan to move frequently between locations or work events that require quick setup and breakdown.

**Food Trailer Benefits:**
Food trailers offer more space for the same investment and can be towed by various vehicles. They're often more cost-effective for stationary or semi-stationary operations. Many successful Canadian operators choose trailers for farmers markets, festivals, or consistent location-based service where mobility between sites is less critical.

**Size and Layout Considerations:**
**Compact Units (14-18 feet):** Perfect for simple menus and tight budgets. Ideal for coffee, sandwiches, or specialty items. Lower operating costs but limited menu capacity.

**Standard Units (20-24 feet):** The sweet spot for most operators. Provides adequate space for diverse menus while maintaining reasonable costs and parking flexibility.

**Large Units (26+ feet):** Maximum capacity for complex menus and high-volume operations. Higher costs but greater revenue potential for established operators.

**Canadian Climate Considerations:**
Canadian winters require additional insulation, heating systems, and weatherproofing. Budget an extra $3,000-$8,000 for proper winterization including:
- Enhanced insulation packages
- Auxiliary heating systems
- Cold-weather equipment protection
- Anti-freeze systems for water lines

**Financing and Depreciation:**
New trucks depreciate rapidly but offer warranties and financing options. Used trucks require more due diligence but provide immediate equity. Consider certified pre-owned programs from reputable dealers for balanced risk and value.

**Regulatory Compliance:**
Ensure your chosen vehicle meets Transport Canada standards and provincial commercial vehicle requirements. Some provinces have specific regulations for mobile food units that affect vehicle selection and modification requirements.`,
      actionItems: [
        'Research and compare 5 food trucks vs 5 food trailers in your budget range',
        'Calculate total cost of ownership including insurance, maintenance, and fuel',
        'Visit 3 different mobile food operations to see layouts and ask about their choice',
        'Determine your primary operating locations and assess mobility requirements',
        'Get quotes from 3 dealers/builders for your preferred option with Canadian winterization'
      ],
      tips: [
        'Consider your physical capabilities - food trucks require commercial driving comfort',
        'Factor in parking costs and restrictions in your target operating areas',
        'Used food trailers often provide better value than used trucks due to lower mechanical complexity'
      ]
    },
    {
      icon: Wrench,
      title: 'Essential Kitchen Equipment Selection',
      priority: 'Critical',
      budgetRange: '$8,000 - $40,000',
      content: `Your kitchen equipment directly impacts your menu capabilities, food quality, and operational efficiency. Smart equipment selection balances functionality with budget constraints while ensuring food safety compliance.

**Core Cooking Equipment:**
**Grills and Griddles ($1,500-$8,000):** The heart of most food truck operations. Flat-top griddles offer versatility for multiple menu items, while char-grills provide distinctive flavors. Consider combination units for space efficiency.

**Fryers ($2,000-$12,000):** Essential for many popular menu items. Countertop fryers work for low-volume operations, while floor models handle high-volume service. Ventless fryers reduce installation costs but have capacity limitations.

**Ovens ($1,000-$15,000):** Convection ovens provide even heating and faster cooking times. Combination oven-steamers offer maximum versatility but require higher investment. Consider your menu requirements carefully.

**Refrigeration Systems:**
**Reach-in Coolers ($1,200-$4,000):** Essential for ingredient storage and food safety. Two-door units provide adequate capacity for most operations while fitting standard truck layouts.

**Prep Tables with Refrigeration ($800-$2,500):** Combine workspace with cold storage for efficient food preparation. Sandwich prep tables work well for assembly-style operations.

**Freezer Units ($1,000-$3,500):** Necessary for protein storage and some ingredients. Undercounter freezers save space while providing adequate capacity for most operations.

**Food Preparation Equipment:**
**Commercial Mixers ($400-$2,500):** Essential for bakery items, sauces, and batters. Countertop models work for most food truck applications.

**Food Processors ($200-$1,500):** Speed up prep work for vegetables, sauces, and specialty items. Choose models with multiple attachments for versatility.

**Slicers ($300-$2,000):** Improve consistency and speed for sandwich operations and ingredient prep.

**New vs. Refurbished Equipment Strategy:**
**New Equipment Benefits:** Full warranties, latest technology, energy efficiency, and financing options. Best for core equipment that runs constantly.

**Refurbished Equipment Advantages:** 40-60% cost savings, proven reliability, and immediate availability. Ideal for secondary equipment and specialty items.

**Energy Efficiency Considerations:**
Energy-efficient equipment reduces operating costs by 20-30% and may qualify for utility rebates. Look for ENERGY STAR ratings and calculate long-term savings versus initial investment.

**Canadian Equipment Standards:**
Ensure all equipment meets Canadian electrical standards (CSA certification) and health department requirements. Some provinces have specific requirements for mobile food service equipment.`,
      actionItems: [
        'Create detailed equipment list based on your specific menu requirements',
        'Research 3 commercial equipment suppliers in your province',
        'Compare new vs refurbished pricing for each major equipment category',
        'Calculate power requirements and ensure compatibility with your electrical system',
        'Verify all equipment meets Canadian health department and electrical standards'
      ],
      tips: [
        'Start with essential equipment and add specialty items as your business grows',
        'Consider equipment that serves multiple functions to maximize space efficiency',
        'Factor in installation, training, and warranty costs when comparing options'
      ]
    },
    {
      icon: Zap,
      title: 'Electrical & Plumbing Systems',
      priority: 'High',
      budgetRange: '$3,000 - $12,000',
      content: `Proper electrical and plumbing systems are critical for safe, efficient food truck operations. These systems must meet strict health department requirements while providing reliable service in a mobile environment.

**Electrical System Planning:**
**Load Calculations:** Determine total electrical requirements by adding up all equipment amperage. Most food trucks require 30-50 amp service, while larger operations may need 60-100 amp systems.

**Shore Power vs Generator:** Shore power (plugging into building electrical) is cheaper to operate but limits location flexibility. Generator power provides complete mobility but increases operating costs and maintenance requirements.

**Electrical Panel and Distribution:** Install a proper electrical panel with individual breakers for each major appliance. Include GFCI protection for all outlets and ensure proper grounding throughout the system.

**Canadian Electrical Standards:** All electrical work must meet Canadian Electrical Code (CEC) requirements and be performed by licensed electricians. Obtain electrical permits and inspections as required by your province.

**Water System Requirements:**
**Fresh Water Storage:** Install adequate fresh water capacity (40-100 gallons) based on your menu and service volume. Include water level indicators and easy filling access.

**Hot Water Systems:** On-demand water heaters are space-efficient and energy-saving. Size the system based on your washing and cooking requirements.

**Water Pressure Systems:** Install adequate pumps to maintain consistent water pressure for handwashing, equipment cleaning, and food preparation.

**Waste Water Management:**
**Grey Water Storage:** Install adequate grey water tanks (50-120 gallons) with proper venting and drainage systems. Include level indicators to prevent overflow.

**Grease Trap Systems:** Required by most health departments for operations using fryers or grills. Size appropriately and plan for regular maintenance and pumping.

**Waste Water Disposal:** Identify approved disposal locations and factor disposal costs into your operating budget.

**Plumbing Code Compliance:**
**Three-Compartment Sinks:** Required by most health departments for proper dishwashing. Plan adequate space and hot water capacity.

**Hand Washing Stations:** Separate hand washing sinks with hot water, soap dispensers, and paper towels are mandatory in most jurisdictions.

**Backflow Prevention:** Install proper backflow prevention devices to protect public water supplies when connecting to municipal systems.

**System Integration and Efficiency:**
Plan electrical and plumbing systems together to minimize conflicts and maximize efficiency. Consider energy-efficient appliances and water-saving fixtures to reduce operating costs.

**Maintenance and Winterization:**
Develop maintenance schedules for all systems and plan for winter storage in Canadian climates. Include freeze protection for water lines and proper system drainage procedures.`,
      actionItems: [
        'Calculate total electrical load requirements for all planned equipment',
        'Get quotes from 3 licensed electricians for complete electrical installation',
        'Design water system layout including fresh water, hot water, and waste storage',
        'Research plumbing code requirements in your operating provinces',
        'Plan maintenance schedules and winterization procedures for all systems'
      ],
      tips: [
        'Oversizing electrical systems slightly provides flexibility for future equipment additions',
        'Install shut-off valves throughout the water system for easy maintenance and repairs',
        'Consider energy monitoring systems to track and optimize power consumption'
      ]
    },
    {
      icon: Battery,
      title: 'Generator Selection & Power Management',
      priority: 'High',
      budgetRange: '$2,000 - $10,000',
      content: `Reliable power generation is essential for food truck operations, especially when operating away from shore power. Proper generator selection and power management ensure consistent service while controlling operating costs.

**Generator Sizing and Selection:**
**Power Requirements:** Size your generator at 125% of your calculated electrical load to provide adequate starting power for motors and compressors. Most food trucks require 8-15 kW generators for full operations.

**Fuel Type Considerations:**
**Diesel Generators:** More fuel-efficient, longer-lasting, and better for continuous operation. Higher initial cost but lower operating expenses for high-usage operations.

**Gasoline Generators:** Lower initial cost and easier maintenance. Suitable for lighter-duty operations but higher fuel costs and more frequent maintenance.

**Propane Generators:** Clean burning, quiet operation, and consistent fuel quality. Ideal for operations in noise-sensitive areas but may have higher fuel costs.

**Generator Features and Options:**
**Automatic Start Systems:** Essential for refrigeration protection during overnight storage. Automatically starts generator when shore power is lost.

**Sound Enclosures:** Reduce noise levels for operations in residential or noise-sensitive areas. Required by many municipalities and event organizers.

**Remote Monitoring:** Allows monitoring of generator status, fuel levels, and maintenance requirements from inside the truck.

**Power Management Systems:**
**Load Management:** Install systems that automatically manage electrical loads to prevent generator overload. Priority systems ensure critical equipment (refrigeration) maintains power during peak demand.

**Shore Power Transfer:** Automatic transfer switches seamlessly switch between generator and shore power, reducing fuel costs when building power is available.

**Battery Backup Systems:** Provide power for lighting and POS systems during generator maintenance or fuel changes.

**Fuel Management and Efficiency:**
**Fuel Consumption Planning:** Calculate daily fuel requirements based on operating hours and generator efficiency. Budget for fuel costs in your operating expenses.

**Fuel Storage:** Install adequate fuel storage with proper venting and spill containment. Consider auxiliary fuel tanks for extended operations.

**Efficiency Optimization:** Use variable-speed generators and load management systems to optimize fuel consumption based on actual power requirements.

**Maintenance and Reliability:**
**Preventive Maintenance:** Develop regular maintenance schedules including oil changes, filter replacements, and system inspections. Generator failure can shut down operations completely.

**Backup Plans:** Identify backup power sources or alternative operating procedures for generator failures during service.

**Canadian Climate Considerations:**
**Cold Weather Operation:** Generators require special considerations for Canadian winters including block heaters, cold-weather oil, and battery warmers.

**Ventilation Requirements:** Ensure adequate ventilation for safe operation while maintaining temperature control in cold weather.

**Regulatory Compliance:**
**Noise Regulations:** Many municipalities have noise bylaws that affect generator selection and operating hours. Research local requirements before purchasing.

**Emissions Standards:** Ensure generators meet provincial emissions requirements, especially in urban areas with strict air quality regulations.`,
      actionItems: [
        'Calculate exact power requirements and size generator at 125% of total load',
        'Compare diesel, gasoline, and propane generators for your specific needs',
        'Research noise regulations in your primary operating areas',
        'Get quotes for complete power management systems including transfer switches',
        'Develop maintenance schedule and identify qualified service providers'
      ],
      tips: [
        'Invest in a quality generator - power failures during service can be devastating to your reputation',
        'Consider generator rental for your first few events to test power requirements before purchasing',
        'Install hour meters to track usage and schedule maintenance properly'
      ]
    },
    {
      icon: Archive,
      title: 'Storage & Organization Solutions',
      priority: 'Medium',
      budgetRange: '$1,000 - $5,000',
      content: `Efficient storage and organization maximize your limited space while ensuring food safety compliance and operational efficiency. Smart storage solutions improve workflow and reduce waste in your mobile kitchen.

**Food Storage Systems:**
**Dry Storage:** Install adequate shelving and storage containers for non-perishable ingredients. Use clear, labeled containers for easy identification and inventory management.

**Cold Storage Optimization:** Maximize refrigerator and freezer space with proper shelving, storage containers, and organization systems. Implement FIFO (First In, First Out) rotation systems.

**Ingredient Prep Storage:** Designate specific storage areas for prepped ingredients with proper labeling and dating systems to maintain food safety standards.

**Equipment Storage:**
**Small Equipment Organization:** Install hooks, magnetic strips, and designated storage areas for utensils, tools, and small equipment. Everything should have a specific place for efficient workflow.

**Cleaning Supply Storage:** Designate secure storage areas for cleaning chemicals away from food storage areas. Include proper ventilation and spill containment.

**Paper Goods and Packaging:** Install efficient storage systems for disposable containers, napkins, and serving supplies. Consider weather protection for outdoor storage areas.

**Space Optimization Techniques:**
**Vertical Storage:** Utilize wall space and overhead areas for storage while maintaining safe access and weight distribution.

**Multi-Purpose Solutions:** Choose storage solutions that serve multiple functions, such as prep tables with built-in storage or cutting boards that fit over sinks.

**Modular Systems:** Install adjustable shelving and modular storage systems that can be reconfigured as your needs change.

**Inventory Management Systems:**
**Stock Rotation:** Implement systems to ensure proper stock rotation and minimize waste. Use clear labeling and dating systems for all stored items.

**Inventory Tracking:** Develop simple systems to track inventory levels and reorder points. Consider digital solutions for larger operations.

**Waste Reduction:** Organize storage to minimize food waste through proper rotation, portion control, and efficient use of ingredients.

**Food Safety Compliance:**
**Temperature Control:** Ensure all storage areas maintain proper temperatures with monitoring systems and backup procedures.

**Cross-Contamination Prevention:** Organize storage to prevent cross-contamination between raw and cooked foods, allergens, and cleaning supplies.

**Sanitation Access:** Design storage systems that allow for easy cleaning and sanitization of all surfaces and containers.

**Workflow Optimization:**
**Prep Station Organization:** Organize storage around prep stations to minimize movement and improve efficiency during food preparation.

**Service Line Efficiency:** Position frequently used items within easy reach of service areas to speed up order fulfillment.

**Cleaning Station Setup:** Organize cleaning supplies and equipment for efficient sanitation procedures between orders and at closing.

**Canadian Climate Considerations:**
**Moisture Control:** Install proper ventilation and moisture control systems to prevent condensation and mold in storage areas.

**Temperature Fluctuations:** Plan for extreme temperature variations that can affect storage conditions and equipment performance.

**Seasonal Storage:** Develop systems for storing seasonal equipment and supplies during off-season periods.`,
      actionItems: [
        'Measure all available storage space and create detailed storage plan',
        'Research commercial storage solutions and organization systems',
        'Design workflow-optimized storage layout for maximum efficiency',
        'Implement food safety compliant storage and labeling systems',
        'Create inventory management procedures and tracking systems'
      ],
      tips: [
        'Invest in quality storage containers that stack efficiently and seal properly',
        'Label everything clearly with contents and dates for food safety compliance',
        'Design storage systems that can be easily cleaned and sanitized'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Budget-Friendly Setup Strategies',
      priority: 'Medium',
      budgetRange: 'Save 30-50%',
      content: `Smart budget strategies can significantly reduce your equipment and setup costs without compromising quality or safety. These proven techniques help you start smart, not expensive.

**Phased Equipment Acquisition:**
**Phase 1 - Essential Only:** Start with absolute minimum equipment needed for your core menu items. Add specialty equipment as revenue grows and justifies the investment.

**Phase 2 - Efficiency Improvements:** Add equipment that improves efficiency and reduces labor costs once you understand your operational needs.

**Phase 3 - Menu Expansion:** Invest in equipment that allows menu diversification and increased revenue potential.

**Used Equipment Strategies:**
**Restaurant Auctions:** Attend restaurant closure auctions for high-quality equipment at significant discounts. Inspect carefully and factor in transportation costs.

**Equipment Dealers:** Work with reputable used equipment dealers who provide limited warranties and service support.

**Online Marketplaces:** Use platforms like Kijiji and Facebook Marketplace, but inspect thoroughly and verify working condition before purchasing.

**Lease vs. Buy Analysis:**
**Equipment Leasing Benefits:** Lower upfront costs, tax advantages, and upgrade flexibility. Good for expensive items with rapid technology changes.

**Purchase Benefits:** Long-term cost savings, asset ownership, and no monthly payments. Better for essential equipment you'll use long-term.

**Lease-to-Own Options:** Combine benefits of leasing with eventual ownership. Good compromise for expensive essential equipment.

**DIY Installation Opportunities:**
**Simple Installations:** Handle basic installations like shelving, storage systems, and simple electrical connections (where legally permitted).

**Professional Requirements:** Always use licensed professionals for gas lines, complex electrical work, and plumbing systems. Safety and code compliance are non-negotiable.

**Preparation Work:** Reduce professional labor costs by doing preparation work like cleaning, measuring, and organizing materials.

**Bulk Purchasing and Group Buying:**
**Supplier Relationships:** Build relationships with suppliers for better pricing on bulk orders and future purchases.

**Group Purchases:** Coordinate with other food truck operators for group purchases of common items like packaging, cleaning supplies, and ingredients.

**Seasonal Timing:** Purchase equipment during off-season periods when suppliers offer better pricing and incentives.

**Creative Financing Solutions:**
**Equipment Financing:** Use specialized equipment financing with competitive rates and terms designed for food service businesses.

**Business Credit Lines:** Establish business credit lines for flexible financing of equipment and supplies.

**Supplier Financing:** Many equipment suppliers offer financing programs with competitive rates and terms.

**Cost-Cutting Without Compromising Quality:**
**Multi-Purpose Equipment:** Choose equipment that serves multiple functions to reduce overall equipment needs.

**Energy Efficiency:** Invest in energy-efficient equipment that reduces long-term operating costs even if initial cost is higher.

**Maintenance Prevention:** Implement proper maintenance procedures to extend equipment life and prevent costly repairs.

**Canadian-Specific Savings:**
**Provincial Incentives:** Research provincial small business incentives and grants that may offset equipment costs.

**Tax Advantages:** Understand depreciation schedules and tax benefits for equipment purchases.

**Seasonal Considerations:** Time purchases to take advantage of seasonal pricing and avoid peak demand periods.`,
      actionItems: [
        'Create phased equipment acquisition plan prioritizing essential items first',
        'Research used equipment sources and compare pricing to new equipment',
        'Analyze lease vs buy options for major equipment purchases',
        'Identify DIY installation opportunities while respecting safety requirements',
        'Investigate financing options and calculate total cost of ownership'
      ],
      tips: [
        'Never compromise on food safety equipment - some things are worth buying new',
        'Build relationships with equipment dealers for better pricing and service support',
        'Keep detailed records of all equipment purchases for tax and insurance purposes'
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
    <section ref={sectionRef} id="equipment-setup-lesson" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 lesson-content">
          <h1 className="text-4xl md:text-5xl font-caprasimo text-gray-800 mb-6">
            Equipment & <span className="text-primary-500">Setup</span>
          </h1>
          <p className="text-xl font-redhat text-gray-600 mb-8">
            Build a functional mobile kitchen on a budget. Learn equipment selection, installation strategies, and setup optimization for Canadian food truck operations.
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
                      Budget: {currentStepData.budgetRange}
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
                          <Link
                            to="/getting-started/business-structure"
                            className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-redhat font-medium rounded-lg hover:bg-green-600 transition-colors duration-200"
                          >
                            Next: Business Structure Selection
                            <ArrowRight size={16} className="ml-2" />
                          </Link>
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

export default EquipmentSetupLesson;