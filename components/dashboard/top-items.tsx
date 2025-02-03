import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TopItemsProps {
  title: string;
  type: "sold" | "purchased";
}

export function TopItems({ title, type }: TopItemsProps) {
  const items =
    type === "sold"
      ? [
          { rank: 1, name: "Automotive Parts", value: "850 Units" },
          { rank: 2, name: "Steel Sheets", value: "430 Units" },
          { rank: 3, name: "Electronic Parts", value: "300 Units" },
          { rank: 4, name: "Plastic Materials", value: "400 Units" },
          { rank: 5, name: "Office Equipments", value: "150 Units" }
        ]
      : [
          { rank: 1, name: "Office Equipments", value: "₹2,27,459" },
          { rank: 2, name: "Steel Sheets", value: "₹2,27,459" },
          { rank: 3, name: "Plastic Materials", value: "₹2,27,459" },
          { rank: 4, name: "Electronic Parts", value: "₹2,27,459" },
          { rank: 5, name: "Automotive Parts", value: "₹2,27,459" }
        ];

  return (
    <div className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-8 text-xs">
            VOL.
          </Button>
          <Button
            size="sm"
            className="h-8 text-xs bg-[#6366F1] hover:bg-[#5355E2]"
          >
            VALUE
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.rank} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">#{item.rank}</span>
                <span className="text-sm">{item.name}</span>
              </div>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  );
}
