"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardIcon from "@/assests/Dashboard.svg";
import AnalyticsIcon from "@/assests/Analytics.svg";
import WalletIcon from "@/assests/Wallet.svg";
import UserIcon from "@/assests/User.svg";
import SettingsIcon from "@/assests/Settings.svg";
import HelpIcon from "@/assests/Help.svg";
import MoonIcon from "@/assests/Moon.svg";
import ArrowDown from "@/assests/arrow-down.svg";
import BrandLogo from "@/assests/Logo.svg";
import BrandName from "@/assests/uifry.svg";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname(); // Get current route
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-foreground flex items-center justify-between p-4 z-50">
        <div className="flex items-center gap-2">
          <BrandLogo size="31.042" className="text-[#CBC8FF]" />
          <BrandName width="60.158" height="26.755" />
        </div>
        <button onClick={toggleSidebar} className="text-white cursor-pointer">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`w-64 min-h-screen bg-foreground flex flex-col items-center gap-10 py-[44.71px] px-6 transition-transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed md:relative top-0 left-0 z-40 overflow-y-auto mt-[60px] md:mt-0`}
      >
        <div className="md:flex hidden justify-between items-center w-full px-4">
          <div className="flex justify-center items-center gap-2">
            <BrandLogo size="31.042" className="text-[#CBC8FF]" />
            <BrandName width="60.158" height="26.755" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="w-full flex flex-col gap-7">
          <div className="w-full flex flex-col gap-4 border-b border-[#4B4B99] pb-6">
            {menuItems.map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all ${
                  pathname === href
                    ? "bg-[#CBC8FF] text-[#1D1D41] font-semibold"
                    : "hover:bg-[#CBC8FF] hover:text-[#1D1D41] hover:font-medium"
                }`}
                onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
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
        <div className="w-full flex justify-between items-center mt-auto ">
          <div className="flex items-center gap-2">
            <Image
              src="/Profile.svg"
              alt="user profile"
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
    </>
  );
}
