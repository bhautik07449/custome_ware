import { useState } from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import StatsRow from '../components/dashboard/StatsRow';
import RecentOrders from '../components/dashboard/RecentOrders';
import SavedDesigns from '../components/dashboard/SavedDesigns';
import MobileDashboard from '../components/dashboard/MobileDashboard';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="flex w-full">
      <DashboardSidebar />

      <div className="hidden md:block flex-1 ml-[320px] p-grid-margin max-w-7xl mx-auto w-full">
        <section className="mb-3xl">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Welcome back, Alex.</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage your creations, track shipments, and explore new styles.</p>
        </section>

        <StatsRow />
        <RecentOrders />
        <SavedDesigns />
      </div>

      <MobileDashboard activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}