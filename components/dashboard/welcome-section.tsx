import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function WelcomeSection() {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
          <Image
            src="/customer-logo.png"
            alt="Company Logo"
            className="w-6 h-6"
            width={6}
            height={6}
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">Hello, Rahul</h1>
            <span className="px-2 py-0.5 text-xs font-medium text-white bg-[#6366F1] rounded">
              CUSTOMER
            </span>
          </div>
          <p className="text-sm text-gray-500">ORUE PVT. LTD.</p>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="h-8 text-xs bg-white hover:bg-gray-50"
      >
        LAST 30 DAYS
        <ChevronDown className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}
