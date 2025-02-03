"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Spotlight() {
  return (
    <Card className="bg-white relative">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <CardTitle className="text-base font-semibold">Spotlight</CardTitle>
        <div className="absolute top-2 right-4 bg-white px-3 py-1.5 rounded-md text-xs">
          <Button
            size={"sm"}
            variant="outline"
            className="bg-neutral-100 hover:bg-neutral-200"
          >
            ALL REGIONS
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 ml-4 relative">
        <Image
          src="/spotlight.png"
          alt="World Map"
          className="w-full "
          width={400}
          height={400}
        />
        <div className="relative">
          <div className="absolute bottom-3 left-0 flex gap-1">
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs bg-white hover:bg-gray-50"
            >
              SUPPLIERS
            </Button>
            <Button
              size="sm"
              className="h-8 text-xs bg-[#6366F1] hover:bg-[#5355E2] text-white"
            >
              CLIENTS
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
