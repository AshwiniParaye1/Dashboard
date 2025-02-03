import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { MetricsCards } from "@/components/dashboard/metrics-cards";
import { InventoryOverview } from "@/components/dashboard/inventory-overview";
import { ShipmentAnalytics } from "@/components/dashboard/shipment-analytics";
import { Spotlight } from "@/components/dashboard/spotlight";
import { TopItems } from "@/components/dashboard/top-items";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <DashboardSidebar />
      <main className="pl-[35px] p-6 space-y-6 pr-8">
        <MetricsCards />
        <div className="grid lg:grid-cols-2 gap-6">
          <InventoryOverview />
          <ShipmentAnalytics />
        </div>
        <div className="flex gap-6 pl-14">
          <div className="w-1/2">
            <Spotlight />
          </div>
          <div className="w-1/4">
            <TopItems title="Top Items Sold" type="sold" />
          </div>
          <div className="w-1/4">
            <TopItems title="Top Items Purchased" type="purchased" />
          </div>
        </div>
      </main>
    </div>
  );
}
