"use client";

import { Bell, Calendar, Settings, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PiSidebarLight } from "react-icons/pi";

export function DashboardHeader() {
  return (
    <div className="sticky top-0 z-50 flex h-[75px] pl-20 pr-10 items-center justify-between bg-[#6366F1] px-4">
      <div className="flex items-center gap-4">
        <button className="text-white p-2 hover:bg-white/10 rounded-lg">
          <PiSidebarLight size={24} />
        </button>
        <div className="relative w-[400px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          <Input
            type="search"
            placeholder="Search"
            className="w-full bg-white/10 border-0 text-white placeholder:text-white/60 pl-10"
          />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          // size="navbarIcon"
          // variant="ghost"
          className="text-white p-2 hover:bg-white/10 rounded-lg"
        >
          <Calendar size={20} />
        </button>
        <button
          // size="navbarIcon"
          // variant="ghost"
          className="text-white p-2 hover:bg-white/10 rounded-lg"
        >
          <Bell size={20} />
        </button>
        <button
          // size="navbarIcon"
          // variant="ghost"
          className="text-white p-2 hover:bg-white/10 rounded-lg"
        >
          <Settings size={20} />
        </button>
        <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
          <div className="text-white text-sm">
            <div>rohan@etls.xyz</div>
            <div className="text-xs text-white/60">ETLS PVT. LTD.</div>
          </div>
          <Avatar className="h-5 w-5">
            <AvatarImage src="/user.png" alt="User" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          {/* <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            <ChevronDown className="h-4 w-4" />
          </Button> */}
        </div>
      </div>
    </div>
  );
}
