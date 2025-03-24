"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardIcon from "/public/Dashboard.svg";
import AnalyticsIcon from "/public/Analytics.svg";
import WalletIcon from "/public/Wallet.svg";
import UserIcon from "/public/User.svg";
import SettingsIcon from "/public/Settings.svg";
import HelpIcon from "/public/Help.svg";
import MoonIcon from "/public/Moon.svg";
import ArrowDown from "/public/arrow-down.svg";
import BrandLogo from "/Public/Logo.svg";
import BrandName from "/Public/uifry.svg";

export default function Sidebar() {
  const pathname = usePathname(); // Get current route

  const menuItems = [
    {
      href: "/dashboard",
      icon: <DashboardIcon size={20} />,
      label: "Dashboard",
    },
    {
      href: "#analytics",
      icon: <AnalyticsIcon size={20} />,
      label: "Analytics",
    },
    { href: "/wallet", icon: <WalletIcon size={20} />, label: "My Wallet" },
    { href: "#accounts", icon: <UserIcon size={20} />, label: "Accounts" },
    { href: "#settings", icon: <SettingsIcon size={20} />, label: "Settings" },
  ];

  return (
    <div className="w-64 min-h-screen bg-foreground flex flex-col items-center gap-10 pt-[44.71px] px-6">
      <div className="flex flex-col">
        <div className="flex justify-center items-center gap-2 ">
          <BrandLogo size="31.042" className="text-[#CBC8FF]" />
          <BrandName width="60.158" height="26.755" />
        </div>
      </div>
      {/* Navigation */}
      <nav className="w-full flex flex-col gap-7">
        <div className="w-full flex flex-col gap-4">
          {menuItems.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all ${
                pathname === href
                  ? "bg-[#CBC8FF] text-[#1D1D41] font-semibold"
                  : "hover:bg-[#CBC8FF] hover:text-[#1D1D41] hover:font-medium"
              }`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>

        {/* Help & Dark Mode */}
        <div className="flex flex-col gap-4">
          <Link
            href="#help"
            className="w-full flex items-center gap-4 p-4 hover:bg-[#CBC8FF] hover:text-[#1D1D41] hover:font-medium rounded-lg"
          >
            <HelpIcon size={20} />
            Help Center
          </Link>
          <button className="w-full flex items-center gap-4 p-4 hover:bg-[#CBC8FF] hover:text-[#1D1D41] hover:font-medium rounded-lg">
            <MoonIcon size={20} />
            Dark Mode
          </button>
        </div>
      </nav>

      {/* Profile Section */}
      <div className="w-full flex justify-between items-center mt-90">
        <div className="flex items-center gap-2">
          <Image
            src="/Profile.svg"
            alt=" user profile"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <span className="flex text-base font-bold">Ali Riaz</span>
            <span className="flex text-xs font-normal">Web Developer</span>
          </div>
        </div>
        <div>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}
