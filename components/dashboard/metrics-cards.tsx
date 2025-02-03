import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TbMoneybag } from "react-icons/tb";
import { TbCash } from "react-icons/tb";
import { BsCartPlus } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";

export function MetricsCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-white items-center">
        <CardContent className="pl-4 pt-2">
          <div className="flex flex-col justify-between">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500 text-base font-extralight">
                Payment Receivables
              </span>
              <TbMoneybag className="h-8 w-8 rounded-lg text-[#05BF8F] bg-[#05BF8F1A] p-1.5 mt-2" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-row">
                <span className="text-2xl font-bold text-[#4F45E4] mb-2">
                  ₹12,40,000
                </span>
                <div className="flex items-center text-emerald-500 text-xs pl-2">
                  +3.87%
                  <ArrowUpRight className="h-3 w-3 ml-0.5" />
                </div>
              </div>
              <p className="text-xs text-gray-500">
                OVERDUE PAYMENTS: ₹1,40,000
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardContent className="pl-4 pt-2">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500 text-base font-extralight">
              Payments Made
            </span>
            <TbCash className="h-8 w-8 rounded-lg mt-2 p-1 bg-[#4F45E41A] text-[#0064BE]" />
          </div>
          <div className="space-y-2">
            <span className="text-2xl font-bold text-[#4F45E4]">₹9,50,000</span>
            <p className="text-xs text-gray-500">NEXT PAYMENT DUE: 1 WEEK</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardContent className="pl-4 pt-2">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500 text-base font-extralight">
              Total Purchases
            </span>
            <BsCartPlus className="h-8 w-8 bg-[#FF900D1A] rounded-lg p-1.5 mt-2 text-[#FF900D]" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[#4F45E4]">
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
        <CardContent className="pl-4 pt-2">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500 text-base font-extralight">
              Total Sales
            </span>
            <FaChartLine className="h-8 w-8 p-2 rounded-lg bg-[#7A21EB1A] text-[#4F45E4] mt-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[#4F45E4]">
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
