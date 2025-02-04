"use client";

import { useState } from "react";
import { Settings, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { GoPackage } from "react-icons/go";
import { RiContactsBook2Line } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";
import { BiVector } from "react-icons/bi";
import { LuScrollText } from "react-icons/lu";
import { TbBasketCode } from "react-icons/tb";
import { BiQuestionMark } from "react-icons/bi";

const menuItems = [
  {
    icon: GoPackage,
    label: "Dashboard"
  },
  {
    icon: RiContactsBook2Line,
    label: "Documents"
  },
  {
    icon: TbNotes,
    label: "Inventory"
  },
  {
    icon: BiVector,
    label: "Analytics"
  },
  {
    icon: LuScrollText,
    label: "Orders"
  },
  {
    icon: ShoppingBag,
    label: "Media"
  },
  {
    icon: TbBasketCode,
    label: "Code"
  }
];

export function DashboardSidebar() {
  const [selected, setSelected] = useState(menuItems[0].label); // Default selected is the first item

  return (
    <div className="fixed left-0 top-0 h-screen w-[60px] flex flex-col bg-white border-r border-gray-200 z-50">
      <div className="flex h-20 items-center justify-center">
        <div className="flex items-center justify-center">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4 p-2 pt-4">
        {menuItems.map((item) => {
          const isActive = selected === item.label;
          return (
            <button
              key={item.label}
              onClick={() => setSelected(item.label)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-[#4F45E4] text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }
              `}
              title={item.label}
            >
              <item.icon className="h-6 w-6" />
              <span className="sr-only">{item.label}</span>
            </button>
          );
        })}
      </div>
      <div className="p-2 flex flex-col gap-4">
        <button
          className="flex h-6 w-6 ml-2 shrink-0 items-center justify-center rounded-full bg-[#4F45E4]"
          title="Help"
        >
          <BiQuestionMark className="h-5 w-5 text-white" />
        </button>
        <div className="border-t-2"></div>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-100 mb-4"
          title="Settings"
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
