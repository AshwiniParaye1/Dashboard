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
            <div className="rounded-3xl bg-[#F7F9FB] p-1 border border-neutral-200">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 py-2 text-[9.17px] font-bold text-gray-500"
              >
                VALUE
              </Button>
              <Button
                size="sm"
                className="h-7 w-16 px-3 py-2 text-[9.17px] font-bold rounded-3xl bg-[#4F45E4] hover:bg-[#5355E2] text-white"
              >
                VOL.
              </Button>
            </div>
          ) : (
            <div className="rounded-3xl bg-[#F7F9FB] p-1 border border-neutral-200">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 py-2 text-[9.17px] font-bold text-gray-500"
              >
                VOL.
              </Button>
              <Button
                size="sm"
                className="h-7 w-16 px-3 py-2 text-[9.17px] font-bold rounded-3xl bg-[#4F45E4] hover:bg-[#5355E2] text-white"
              >
                VALUE
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          {items.map((item, index) => (
            <div
              key={item.rank}
              className={`flex items-center justify-between p-2 rounded-md ${
                type === "sold" || (type === "purchased" && index !== 1)
                  ? "bg-gray-50"
                  : "invisible"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold">#{item.rank}</span>
                <span className="text-sm font-light">{item.name}</span>
              </div>
              <span
                className={`text-sm pl-2 pr-2 pt-1 pb-1 rounded-lg font-medium ${
                  type === "sold"
                    ? "border border-neutral-200"
                    : " border border-transparent"
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  );
}
