"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings, HelpCircle, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { GoPackage } from "react-icons/go";
import { RiContactsBook2Line } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";
import { BiVector } from "react-icons/bi";
import { LuScrollText } from "react-icons/lu";
import { TbBasketCode } from "react-icons/tb";

const menuItems = [
  {
    icon: GoPackage,
    href: "/dashboard",
    label: "Dashboard"
  },
  {
    icon: RiContactsBook2Line,
    href: "/dashboard/documents",
    label: "Documents"
  },
  {
    icon: TbNotes,
    href: "/dashboard/inventory",
    label: "Inventory"
  },
  {
    icon: BiVector,
    href: "/dashboard/analytics",
    label: "Analytics"
  },
  {
    icon: LuScrollText,
    href: "/dashboard/orders",
    label: "Orders"
  },
  {
    icon: ShoppingBag,
    href: "/dashboard/media",
    label: "Media"
  },
  {
    icon: TbBasketCode,
    href: "/dashboard/code",
    label: "Code"
  }
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-screen w-[60px] flex flex-col bg-white border-r border-gray-200 z-50">
      <div className="flex h-20 items-center justify-center">
        <Link href="/dashboard">
          <div className="flex items-center justify-center">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
          </div>
        </Link>
      </div>
      <div className="flex-1 flex flex-col gap-4 p-2 pt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-[#4F45E4] text-white "
                    : "text-gray-500 hover:bg-gray-100"
                }
              `}
              title={item.label}
            >
              <item.icon className="h-6 w-6" />
              <span className="sr-only">{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="p-2 flex flex-col gap-2">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg"
          title="Help"
        >
          <HelpCircle className="h-6 w-6" />
        </button>
        <div className="border-t-2"></div>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-10 mb-4"
          title="Settings"
        >
          <Settings className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
