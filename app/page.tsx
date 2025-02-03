import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { MetricsCards } from "@/components/dashboard/metrics-cards";
import { InventoryOverview } from "@/components/dashboard/inventory-overview";
import { ShipmentAnalytics } from "@/components/dashboard/shipment-analytics";
import { Spotlight } from "@/components/dashboard/spotlight";
import { TopItems } from "@/components/dashboard/top-items";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 ml-[60px]">
      <DashboardHeader />
      <DashboardSidebar />
      <main className="p-6 space-y-6 pr-8">
        <MetricsCards />
        <div className="grid lg:grid-cols-2 gap-6">
          <InventoryOverview />
          <ShipmentAnalytics />
        </div>
        <Card className="bg-white ">
          <div className="flex">
            <div className="w-1/2 ">
              <Spotlight />
            </div>
            <div className="flex w-1/2">
              <div className="w-1/2 border-l border-gray-200">
                <TopItems title="Top Items Sold" type="sold" />
              </div>
              <div className="w-1/2 border-l border-gray-200">
                <TopItems title="Top Items Purchased" type="purchased" />
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
