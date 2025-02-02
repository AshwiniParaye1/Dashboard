import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Truck } from "lucide-react";

export function ShipmentAnalytics() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Shipment Analytics</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            FILTERS
          </Button>
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md">
            <span className="text-sm">ID:</span>
            <span className="text-sm font-medium">#003455MNP</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
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
      </CardContent>
    </Card>
  );
}
