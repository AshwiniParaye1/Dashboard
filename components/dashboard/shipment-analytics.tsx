import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Truck } from "lucide-react";

export function ShipmentAnalytics() {
  return (
    <Card className="w-full h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base">Shipment Analytics</CardTitle>
        <div className="flex gap-8 justify-center items-center">
          <Button variant="outline" size="sm" className="">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            FILTERS
          </Button>
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md mr-72">
            <span className="text-sm">ID:</span>
            <span className="text-sm font-medium">#003455MNP</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-6">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <Truck className="h-8 w-8 text-primary" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">#003455MNP</span>
                  <span className="text-sm text-muted-foreground">83%</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>87 Some Address</span>
                  <span>→</span>
                  <span>15 Some Address</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <Truck className="h-8 w-8 text-primary" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">#001432LDP</span>
                  <span className="text-sm text-muted-foreground">83%</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>87 Some Address</span>
                  <span>→</span>
                  <span>15 Some Address</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[55%]">
            <img
              src="/shipment-analytics.png"
              alt="Shipment Analysis"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="flex flex-row gap-6 text-xs pt-4 pb-4 justify-center items-center ">
              <div className="border-r border-gray-200">
                <p className="">Shipment ID</p>
                <p>#0124BCD</p>
              </div>
              <div className="border-r border-gray-200">
                <p className="">Category</p>
                <p>Electronics</p>
              </div>
              <div className=" border-r border-gray-200">
                <p>Total Weight</p>
                <p>329 g</p>
              </div>
              <div className=" border-r border-gray-200">
                <p>Destination</p>
                <p>Bangalore</p>
              </div>
              <div>
                <p>Est. Arrival</p>
                <p>2 Hrs</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ShipmentAnalytics;
