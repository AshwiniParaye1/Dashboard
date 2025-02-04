"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Spotlight() {
  return (
    <div className="h-full relative">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <CardTitle className="text-base font-semibold">Spotlight</CardTitle>
        <div>
          <Button
            variant="outline"
            size="sm"
            className="h-7 px-3 py-1.5 text-[10px] font-bold bg-[#F7F9FB] hover:bg-gray-100 rounded-md"
          >
            ALL REGIONS
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 relative">
        <div className="relative w-full h-[300px]">
          <Image
            src="/spotlight.png"
            alt="World Map"
            fill
            className="object-cover rounded-lg pb-14"
            priority
          />
        </div>
        <div className="absolute inset-x-0 bottom-14 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex gap-1 rounded-3xl bg-[#F7F9FB] p-1 border border-neutral-200">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 py-1.5 text-xs font-bold text-gray-500"
          >
            SUPPLIERS
          </Button>
          <Button
            size="sm"
            className="h-7 w-28 py-2 text-xs font-medium bg-[#4F45E4] hover:bg-[#5355E2] text-white rounded-3xl"
          >
            CLIENTS
          </Button>
        </div>
      </CardContent>
    </div>
  );
}
