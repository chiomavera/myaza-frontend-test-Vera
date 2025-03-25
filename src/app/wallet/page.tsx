"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WalletType from "../components/WalletType";
import TransactionsTable from "../components/TransactionsTable";
import transactions2 from "./transactions2";

function Wallet() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="flex flex-col w-full lg:w-[calc(100%-16rem)] items-center px-6 sm:px-10 md:px-12 py-6 mt-[60px] md:mt-0">
        <div className="w-full max-w-7xl flex flex-col gap-10">
          <Header
            title="My wallets"
            description="Manage all your wallets from here"
            imageUrl="/Wave.svg"
            customClass="hidden"
          />
          {/* Balance section */}
          <section className="w-full bg-foreground flex flex-col gap-10 rounded-lg p-6 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md">
            <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <div className="flex flex-col">
                <span className="text-base text-[#C1C1C1] font-medium leading-6 tracking-[-0.16px]">
                  Your consolidated balance
                </span>
                <span className="text-[28px] font-bold">$34,780,267.08</span>
              </div>
              <div className="flex justify-between md:gap-5">
                <div className="w-45 bg-[#CBC8FF] flex justify-between items-center gap-2 p-2.5 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#B0ACFF] active:scale-95">
                  <Image
                    src="plus.svg"
                    alt="A plus icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-foreground text-sm font-bold">
                    Add New Wallet
                  </span>
                </div>

                <div className="relative">
                  <Image
                    src="Dot.svg"
                    alt="menu"
                    width={24}
                    height={24}
                    className="cursor-pointer hover:opacity-75"
                    onClick={() => setShowDropdown(!showDropdown)}
                  />
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg p-2">
                      <button className="block w-full text-left text-background px-4 py-2 hover:bg-gray-100">
                        View Details
                      </button>
                      <button className="block w-full text-left text-background px-4 py-2 hover:bg-gray-100">
                        Delete Wallet
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <WalletType
                walletType="NGN Wallet"
                balance="Balance: 245,800.89"
                imageUrl="/NGN.svg"
              />
              <WalletType
                walletType="GBP Wallet"
                balance="Balance: 245,800.89"
                imageUrl="/GBP.svg"
              />
              <WalletType
                walletType="USD Wallet"
                balance="Balance: 245,800.89"
                imageUrl="/USD.svg"
              />
            </div>
          </section>
          <TransactionsTable
            columns={["Name", "Date", "Description", "Amount", "Status"]}
            data={transactions2}
          />
        </div>
      </main>
    </div>
  );
}

export default Wallet;
