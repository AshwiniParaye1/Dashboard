"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  // Box,
  LayoutDashboard,
  FileText,
  Settings,
  HelpCircle,
  BarChart2,
  ShoppingBag,
  Package,
  Image as ImageIcon
} from "lucide-react";
import Image from "next/image";

const menuItems = [
  {
    icon: LayoutDashboard,
    href: "/dashboard",
    label: "Dashboard"
  },
  {
    icon: FileText,
    href: "/dashboard/documents",
    label: "Documents"
  },
  {
    icon: Package,
    href: "/dashboard/inventory",
    label: "Inventory"
  },
  {
    icon: BarChart2,
    href: "/dashboard/analytics",
    label: "Analytics"
  },
  {
    icon: ShoppingBag,
    href: "/dashboard/orders",
    label: "Orders"
  },
  {
    icon: ImageIcon,
    href: "/dashboard/media",
    label: "Media"
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
      <div className="flex-1 flex flex-col gap-1 p-2 pt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-[#6366F1] text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }
              `}
              title={item.label}
            >
              <item.icon className="h-5 w-5" />
              <span className="sr-only">{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="p-2 flex flex-col gap-1">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
          title="Help"
        >
          <HelpCircle className="h-5 w-5" />
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
          title="Settings"
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
