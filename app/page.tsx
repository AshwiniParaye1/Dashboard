import { DashboardHeader } from "@/components/dashboard/header";
import { MetricsCards } from "@/components/dashboard/metrics-cards";
import { InventoryOverview } from "@/components/dashboard/inventory-overview";
import { ShipmentAnalytics } from "@/components/dashboard/shipment-analytics";
import { TopItems } from "@/components/dashboard/top-items";
import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <DashboardSidebar />
      <main className="container mx-auto p-4 space-y-6">
        <MetricsCards />
        <div className="grid lg:grid-cols-2 gap-6">
          <InventoryOverview />
          <ShipmentAnalytics />
        </div>
        <div className="grid lg:grid-cols-2 gap-6 ml-14">
          <TopItems title="Top Items Sold" type="sold" />
          <TopItems title="Top Items Purchased" type="purchased" />
        </div>
      </main>
    </div>
  );
}
