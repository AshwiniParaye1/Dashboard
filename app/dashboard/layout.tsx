import type React from "react";
import { DashboardHeader } from "@/components/dashboard/header";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[#F8F9FC]">
      {/* Main content area */}
      <div className="flex-1 min-h-screen ml-[250px]">
        {/* Header - Fixed at the top */}
        <div className="fixed top-0 left-[250px] right-0 z-10">
          <DashboardHeader />
        </div>

        {/* Page content with padding to avoid overlap */}
        <div className="pt-[64px] p-6">{children}</div>
      </div>
    </div>
  );
}
