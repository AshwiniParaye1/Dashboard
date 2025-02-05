import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { HiArrowLongRight } from "react-icons/hi2";
import StripedRectangle from "./stripedRectangle";

type Shipment = {
  id: string;
  from: string;
  to: string;
};

export function ShipmentAnalytics() {
  const shipments = [
    { id: "#003455MNP", from: "87 Some Address", to: "15 Some Address" },
    { id: "#001432LDP", from: "92 Some Address", to: "45 Some Address" },
    { id: "#005678RST", from: "23 Some Address", to: "78 Some Address" },
    { id: "#007890UVW", from: "56 Some Address", to: "34 Some Address" },
    { id: "#002345XYZ", from: "71 Some Address", to: "89 Some Address" },
    { id: "#006789ABC", from: "44 Some Address", to: "67 Some Address" }
  ];

  const ShipmentItem = ({ shipment }: { shipment: Shipment }) => (
    <div className="flex gap-2 pl-4 rounded-lg bg-[#F7F9FB] relative min-h-[100px]">
      <div className="flex pt-3 pb-3 flex-col justify-between">
        <div className="flex flex-col">
          <span className="font-light text-xs text-gray-500">Shipment ID</span>
          <span className="font-bold text-base">{shipment.id}</span>
        </div>
        <div className="flex flex-row gap-2 text-xs font-normal text-muted-foreground">
          <span>
            <div className="w-2 h-2 mt-1 rounded-full bg-[#38C29B]" />
          </span>
          <span>{shipment.from}</span>
          <span>
            <HiArrowLongRight size={24} />
          </span>
          <span>
            <div className="w-2 h-2 mt-1 rounded-full bg-[#4F45E4]" />
          </span>
          <span>{shipment.to}</span>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/analytics.png"
          alt="Analytics Truck"
          width={150}
          height={80}
          className="scale-x-[-1] blur-[0.7px]"
        />
        <div className="absolute inset-0">
          <StripedRectangle />
        </div>
      </div>
    </div>
  );

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
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto max-h-[300px] pr-2">
            {shipments.map((shipment) => (
              <ShipmentItem key={shipment.id} shipment={shipment} />
            ))}
          </div>
          <div className="w-[55%]">
            <Image
              src="/shipment-analytics.png"
              alt="Shipment Analysis"
              width={300}
              height={200}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div className="flex flex-row gap-3 text-xs pt-6 justify-center items-center">
              <div className="border-r border-gray-200 pr-2">
                <p className="text-xs text-gray-400 font-light">Shipment ID</p>
                <p className="text-sm font-semibold">#0124BCD</p>
              </div>
              <div className="border-r border-gray-200 pr-2">
                <p className="text-xs text-gray-400 font-light">Category</p>
                <p className="text-sm font-semibold">Electronics</p>
              </div>
              <div className="border-r border-gray-200 pr-2">
                <p className="text-xs text-gray-400 font-light">Total Weight</p>
                <p className="text-sm font-semibold">329 g</p>
              </div>
              <div className="border-r border-gray-200 pr-2">
                <p className="text-xs text-gray-400 font-light">Destination</p>
                <p className="text-sm font-semibold">Bangalore</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-light">Est. Arrival</p>
                <p className="text-sm font-semibold">2 Hrs</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ShipmentAnalytics;
