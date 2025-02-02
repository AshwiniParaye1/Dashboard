import { MetricsCards } from "@/components/dashboard/metrics-cards";
import { InventoryOverview } from "@/components/dashboard/inventory-overview";
import { ShipmentAnalytics } from "@/components/dashboard/shipment-analytics";
import { TopItems } from "@/components/dashboard/top-items";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="grid gap-6">
        <MetricsCards />
        <div className="grid lg:grid-cols-2 gap-6">
          <InventoryOverview />
          <ShipmentAnalytics />
        </div>
        <div className="flex w-full h-full">
          <div className="w-full flex flex-row items-start">
            <div className="w-1/3 p-4 flex justify-center">
              <Image
                src="/spotlight.png"
                alt="Spotlight"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
            <div className="w-2/3 p-4">
              <TopItems title="Top Items Sold" type="sold" />
              <TopItems title="Top Items Purchased" type="purchased" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
