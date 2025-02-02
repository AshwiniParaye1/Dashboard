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
    <Card className="bg-white ml-14">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-base font-semibold">Inventory Overview</h2>
              <p className="text-sm text-gray-500">
                In-Stock Products: 3,200 Units
              </p>
            </div>
            <div className="flex gap-2 bg-gray-50 rounded-3xl h-12 items-center w-auto p-2">
              {/* <button className="bg-gray-50 h-8 border-0 rounded-r-3xl"> */}
              <Button
                variant="ghost"
                size="sm"
                className="h-6 text-xs bg-gray-50 border-0"
              >
                DAILY
              </Button>
              <Button
                size="sm"
                className="h-8 text-xs bg-[#6366F1] hover:bg-[#5355E2] rounded-3xl"
              >
                WEEKLY
              </Button>
              {/* </button> */}
            </div>
          </div>
          <div className="h-[240px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Bar dataKey="sales" fill="#6366F1" radius={[4, 4, 0, 0]} />
                <Bar dataKey="purchases" fill="#E5E7EB" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
