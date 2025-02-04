"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { name: "Mon", sales: 400, purchases: 240 },
  { name: "Tues", sales: 300, purchases: 139 },
  { name: "Wed", sales: 500, purchases: 380 },
  { name: "Thurs", sales: 280, purchases: 390 },
  { name: "Fri", sales: 240, purchases: 380 },
  { name: "Sat", sales: 320, purchases: 430 },
  { name: "Sun", sales: 220, purchases: 380 }
];

export function InventoryOverview() {
  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-base font-semibold">Inventory Overview</h2>
              <p className="text-sm font-normal text-gray-500">
                In-Stock Products:{" "}
                <span className="font-semibold">3,200 Units</span>
              </p>
            </div>
            <div className="flex gap-2 border border-neutral-200 bg-gray-50 rounded-3xl h-10 items-center w-auto p-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 text-xs bg-gray-50 border-0"
              >
                DAILY
              </Button>
              <Button
                size="sm"
                className="h-8 text-xs bg-[#4F45E4] hover:bg-[#5355E2] rounded-3xl"
              >
                WEEKLY
              </Button>
            </div>
          </div>
          <div className="h-[286px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                  tick={{ display: "none" }}
                  label={{
                    value: "Total Items (in 1000s)",
                    angle: -90,
                    position: "insideLeft",
                    style: {
                      textAnchor: "middle",
                      fill: "#888888",
                      fontSize: 12
                    }
                  }}
                />
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Bar dataKey="sales" fill="#4F45E4" radius={[4, 4, 0, 0]} />
                <Bar dataKey="purchases" fill="#D6D4F5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-end gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#4F45E4]" />
              <span className="text-xs font-semibold">Sales</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
              <span className="text-xs font-semibold">Purchases</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
