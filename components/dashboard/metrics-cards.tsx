import {
  ArrowUpRight,
  CreditCard,
  ShoppingCart,
  TrendingUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function MetricsCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-14">
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500 text-sm">Payment Receivables</span>
            <CreditCard className="h-5 w-5 text-gray-500" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[#6366F1]">
                ₹12,40,000
              </span>
              <div className="flex items-center text-emerald-500 text-xs">
                +3.87%
                <ArrowUpRight className="h-3 w-3 ml-0.5" />
              </div>
            </div>
            <p className="text-xs text-gray-500">OVERDUE PAYMENTS: ₹1,40,000</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500 text-sm">Payments Made</span>
            <CreditCard className="h-5 w-5 text-gray-500" />
          </div>
          <div className="space-y-2">
            <span className="text-2xl font-bold text-[#6366F1]">₹9,50,000</span>
            <p className="text-xs text-gray-500">NEXT PAYMENT DUE: 1 WEEK</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500 text-sm">Total Purchases</span>
            <ShoppingCart className="h-5 w-5 text-gray-500" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[#6366F1]">
                ₹15,20,000
              </span>
              <div className="flex items-center text-emerald-500 text-xs">
                +3.87%
                <ArrowUpRight className="h-3 w-3 ml-0.5" />
              </div>
            </div>
            <p className="text-xs text-gray-500">SUPPLIERS: 6</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500 text-sm">Total Sales</span>
            <TrendingUp className="h-5 w-5 text-gray-500" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[#6366F1]">
                ₹18,00,000
              </span>
              <div className="flex items-center text-emerald-500 text-xs">
                +3.87%
                <ArrowUpRight className="h-3 w-3 ml-0.5" />
              </div>
            </div>
            <p className="text-xs text-gray-500">
              TOP SELLING PRODUCT: ELECTRONICS
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
