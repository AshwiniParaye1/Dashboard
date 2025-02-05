import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export function ShipmentAnalytics() {
  return (
    <Card className="w-full h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">
          Shipment Analytics
        </CardTitle>
        <div className="flex gap-8 justify-center items-center text-xs">
          <Button
            variant="outline"
            size="sm"
            className="bg-[#F7F9FB] font-bold"
          >
            <SlidersHorizontal className="h-4 w-4 mr-2 font-bold" />
            FILTERS
          </Button>
          <div className="flex h-9 items-center gap-2 px-3 bg-gray-100 rounded-3xl mr-72">
            <span className="text-sm font-normal text-gray-500">ID:</span>
            <span className="text-sm font-bold text-gray-500">#003455MNP</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-6">
          <div className="flex-1 space-y-4">
            <div className="flex gap-2 pl-4  rounded-lg bg-[#F7F9FB]">
              {/* <Truck className="h-8 w-8 text-primary" /> */}
              <div className="flex pt-3 pb-3 flex-col justify-between">
                <div className="flex flex-col">
                  <span className="font-light text-xs text-gray-500">
                    Shipment ID
                  </span>
                  <span className="font-bold text-base">#003455MNP</span>{" "}
                  {/* <span className="text-sm text-muted-foreground">83%</span> */}
                </div>
                <div className="flex flex-row gap-2 text-xs font-normal text-muted-foreground">
                  <span>
                    <div className="w-2 h-2 mt-1 rounded-full bg-[#38C29B]" />
                  </span>
                  <span>87 Some Address</span>
                  <span>→</span>
                  <span>
                    <div className="w-2 h-2 mt-1 rounded-full bg-[#4F45E4]" />
                  </span>
                  <span>15 Some Address</span>
                </div>
              </div>
              <Image
                src={"/analytics.png"}
                alt="Analytics Truck"
                width={120}
                height={80}
              />
            </div>
            <div className="flex gap-4 pl-4  rounded-lg bg-[#F7F9FB]">
              {/* <Truck className="h-8 w-8 text-primary" /> */}
              <div className="flex flex-col pt-3 pb-3 justify-between">
                <div className="flex flex-col">
                  <span className="font-light text-xs text-gray-500">
                    Shipment ID
                  </span>
                  <span className="font-bold text-base">#001432LDP</span>
                  {/* <span className="text-sm text-muted-foreground">83%</span> */}
                </div>
                <div className="flex flex-row gap-2 text-xs font-normal text-muted-foreground">
                  <span>
                    <div className="w-2 h-2 mt-1 rounded-full bg-[#38C29B]" />
                  </span>
                  <span>87 Some Address</span>
                  <span>→</span>
                  <span>
                    <div className="w-2 h-2 mt-1 rounded-full bg-[#4F45E4]" />
                  </span>
                  <span>15 Some Address</span>
                </div>
              </div>
              <Image
                src={"/analytics.png"}
                alt="Analytics Truck"
                width={120}
                height={80}
              />
            </div>
          </div>
          <div className="w-[55%]">
            <Image
              src="/shipment-analytics.png"
              alt="Shipment Analysis"
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="flex flex-row gap-6 text-xs pt-4 pb-4 justify-center items-center">
              <div className="border-r border-gray-200">
                <p>Shipment ID</p>
                <p>#0124BCD</p>
              </div>
              <div className="border-r border-gray-200">
                <p>Category</p>
                <p>Electronics</p>
              </div>
              <div className="border-r border-gray-200">
                <p>Total Weight</p>
                <p>329 g</p>
              </div>
              <div className="border-r border-gray-200">
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
