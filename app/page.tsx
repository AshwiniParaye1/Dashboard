import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { WelcomeSection } from "@/components/dashboard/welcome-section";
import { MetricsCards } from "@/components/dashboard/metrics-cards";
import { InventoryOverview } from "@/components/dashboard/inventory-overview";
import { ShipmentAnalytics } from "@/components/dashboard/shipment-analytics";
import { Spotlight } from "@/components/dashboard/spotlight";
import { TopItems } from "@/components/dashboard/top-items";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 ml-[60px]">
      <DashboardHeader />
      <DashboardSidebar />
      <main className=" p-6 space-y-6 ">
        <WelcomeSection />
        <MetricsCards />
        <div className="grid lg:grid-cols-2 gap-6">
          <InventoryOverview />
          <ShipmentAnalytics />
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex">
            <div className="w-1/2 border-r border-gray-200">
              <Spotlight />
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="flex-1 border-b border-gray-200">
                <TopItems title="Top Items Sold" type="sold" />
              </div>
              <div className="flex-1">
                <TopItems title="Top Items Purchased" type="purchased" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
