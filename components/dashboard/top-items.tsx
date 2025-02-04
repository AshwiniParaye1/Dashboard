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
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        <div className="flex gap-1">
          {type === "sold" ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-3 py-1.5 text-xs font-medium bg-gray-50 hover:bg-gray-100"
              >
                VALUE
              </Button>
              <Button
                size="sm"
                className="h-7 px-3 py-1.5 text-xs font-medium bg-[#6366F1] hover:bg-[#5355E2] text-white"
              >
                VOL.
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-3 py-1.5 text-xs font-medium bg-gray-50 hover:bg-gray-100"
              >
                VOL.
              </Button>
              <Button
                size="sm"
                className="h-7 px-3 py-1.5 text-xs font-medium bg-[#6366F1] hover:bg-[#5355E2] text-white"
              >
                VALUE
              </Button>
            </>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          {items.map((item, index) => (
            <div
              key={item.rank}
              className={`flex items-center justify-between p-2 rounded-md ${
                index % 2 === 0 ? "bg-gray-50" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">#{item.rank}</span>
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  );
}
