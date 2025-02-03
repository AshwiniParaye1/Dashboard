"use client";

import { Bell, Calendar, Settings, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PiSidebarLight } from "react-icons/pi";

export function DashboardHeader() {
  return (
    <div className="sticky top-0 z-50 flex h-[78px] pr-8 items-center justify-between bg-[#4F45E4] px-4">
      <div className="flex items-center gap-4">
        <button className="text-white p-2 hover:bg-white/10 rounded-lg">
          <PiSidebarLight size={24} />
        </button>
        <div className="relative w-[400px]">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2  text-white/80" />
          <Input
            type="search"
            placeholder="Search"
            className="w-full bg-white/10 border-0 bg-[#3830B7] text-white/80 placeholder:text-white/80 pl-10 rounded-lg"
          />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button className="text-white p-2 hover:bg-white/10 rounded-lg">
          <Calendar size={20} />
        </button>
        <button className="text-white p-2 hover:bg-white/10 rounded-lg">
          <Bell size={20} />
        </button>
        <button className="text-white p-2 mr-2 hover:bg-white/10 rounded-lg">
          <Settings size={20} />
        </button>
        <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 bg-[#3830B7]">
          <div className="">
            <div className="text-white text-xs font-extralight">
              rohan@etls.xyz
            </div>
            <div className="text-xs  text-white font-semibold">
              ETLS PVT. LTD.
            </div>
          </div>
          <Avatar className="h-5 w-5 ">
            <AvatarImage src="/user.png" alt="User" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
