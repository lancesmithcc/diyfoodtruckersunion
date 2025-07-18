import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import GettingStartedPage from '../pages/GettingStartedPage';
import BusinessPlanningPage from '../pages/BusinessPlanningPage';
import LegalRequirementsPage from '../pages/LegalRequirementsPage';
import CostBreakdownPage from '../pages/CostBreakdownPage';
import BusinessStructurePage from '../pages/BusinessStructurePage';
import EquipmentSetupPage from '../pages/EquipmentSetupPage';
import LegalCompliancePage from '../pages/LegalCompliancePage';
import MenuDevelopmentPage from '../pages/MenuDevelopmentPage';
import OperationsPage from '../pages/OperationsPage';
import MarketingGrowthPage from '../pages/MarketingGrowthPage';
import FinancialManagementPage from '../pages/FinancialManagementPage';
import ResourcesPage from '../pages/ResourcesPage';
import CostCalculatorPage from '../pages/CostCalculatorPage';
import CommunityPage from '../pages/CommunityPage';
import NicheTargetingPage from '../pages/NicheTargetingPage';
import GrowthStrategiesPage from '../pages/GrowthStrategiesPage';
import DailyOperationsPage from '../pages/DailyOperationsPage';
import InventoryManagementPage from '../pages/InventoryManagementPage';
import StaffManagementPage from '../pages/StaffManagementPage';
import CustomerServicePage from '../pages/CustomerServicePage';
import EventCateringPage from '../pages/EventCateringPage';
import PerformanceMonitoringPage from '../pages/PerformanceMonitoringPage';
import BookkeepingBasicsPage from '../pages/BookkeepingBasicsPage';
import CashFlowManagementPage from '../pages/CashFlowManagementPage';
import TaxConsiderationsPage from '../pages/TaxConsiderationsPage';
import ProfitOptimizationPage from '../pages/ProfitOptimizationPage';
import FundingFinancingPage from '../pages/FundingFinancingPage';
import FinancialPlanningPage from '../pages/FinancialPlanningPage';
import WorkbookPage from '../pages/WorkbookPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/workbook',
        element: <WorkbookPage />,
      },
      {
        path: '/getting-started',
        element: <GettingStartedPage />,
      },
      {
        path: '/getting-started/business-planning',
        element: <BusinessPlanningPage />,
      },
      {
        path: '/getting-started/legal-requirements',
        element: <LegalRequirementsPage />,
      },
      {
        path: '/getting-started/cost-breakdown',
        element: <CostBreakdownPage />,
      },
      {
        path: '/getting-started/business-structure',
        element: <BusinessStructurePage />,
      },
      {
        path: '/getting-started/niche-targeting',
        element: <NicheTargetingPage />,
      },
      {
        path: '/getting-started/growth-strategies',
        element: <GrowthStrategiesPage />,
      },
      {
        path: '/equipment-setup',
        element: <EquipmentSetupPage />,
      },
      {
        path: '/legal-compliance',
        element: <LegalCompliancePage />,
      },
      {
        path: '/menu-development',
        element: <MenuDevelopmentPage />,
      },
      {
        path: '/operations',
        element: <OperationsPage />,
      },
      {
        path: '/operations/daily-workflows',
        element: <DailyOperationsPage />,
      },
      {
        path: '/operations/inventory-management',
        element: <InventoryManagementPage />,
      },
      {
        path: '/operations/staff-management',
        element: <StaffManagementPage />,
      },
      {
        path: '/operations/customer-service',
        element: <CustomerServicePage />,
      },
      {
        path: '/operations/event-catering',
        element: <EventCateringPage />,
      },
      {
        path: '/operations/performance-monitoring',
        element: <PerformanceMonitoringPage />,
      },
      {
        path: '/financial-management/bookkeeping-basics',
        element: <BookkeepingBasicsPage />,
      },
      {
        path: '/financial-management/cash-flow',
        element: <CashFlowManagementPage />,
      },
      {
        path: '/financial-management/tax-planning',
        element: <TaxConsiderationsPage />,
      },
      {
        path: '/financial-management/profit-optimization',
        element: <ProfitOptimizationPage />,
      },
      {
        path: '/financial-management/funding-financing',
        element: <FundingFinancingPage />,
      },
      {
        path: '/financial-management/financial-planning',
        element: <FinancialPlanningPage />,
      },
      {
        path: '/marketing-growth',
        element: <MarketingGrowthPage />,
      },
      {
        path: '/financial-management',
        element: <FinancialManagementPage />,
      },
      {
        path: '/resources',
        element: <ResourcesPage />,
      },
      {
        path: '/community',
        element: <CommunityPage />,
      },
    ],
  },
]);