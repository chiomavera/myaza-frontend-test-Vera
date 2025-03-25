"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Analytics from "../components/Analytics";
import CardContainer from "../components/CardContainer";
import TransactionsTable from "../components/TransactionsTable";
import Income from "../components/Income";
import Activity from "../components/Activity";
import transactions1 from "./transactions1";

// Sample yearly income & outcome data (same as in BarChart)
const yearlyIncome: Record<string, number[]> = {
  "2020": [14000, 37000, 39000, 52000, 35000, 30000, 27000, 32000],
  "2021": [24000, 17000, 29000, 52000, 35000, 30000, 27000, 32000],
  "2022": [30000, 35000, 25000, 40000, 32000, 28000, 26000, 30000],
  "2023": [34000, 37000, 29000, 42000, 35000, 30000, 27000, 32000],
  "2024": [36000, 39000, 31000, 45000, 37000, 32000, 29000, 34000],
  "2025": [37000, 34000, 31000, 45000, 17000, 32000, 29000, 74000],
};

const yearlyOutcome: Record<string, number[]> = {
  "2020": [12000, 30000, 34000, 49000, 31000, 27000, 25000, 29000],
  "2021": [21000, 15000, 27000, 49000, 32000, 28000, 26000, 31000],
  "2022": [27000, 32000, 23000, 37000, 29000, 25000, 24000, 27000],
  "2023": [30000, 35000, 26000, 39000, 32000, 29000, 26000, 30000],
  "2024": [33000, 36000, 28000, 42000, 35000, 31000, 28000, 32000],
  "2025": [35000, 31000, 29000, 42000, 15000, 30000, 27000, 72000],
};

// Function to calculate percentage change
const calculatePercentageChange = (current: number, previous: number) => {
  if (!previous) return "N/A"; // No previous data → Show "N/A"
  const change = ((current - previous) / previous) * 100;
  return `${change > 0 ? "+" : ""}${change.toFixed(2)}%`;
};

export default function Dashboard() {
  const [selectedYear, setSelectedYear] = useState("2025"); // Store selected year

  // Calculate total income & outcome for the selected year
  const totalIncome =
    yearlyIncome[selectedYear]?.reduce((acc, val) => acc + val, 0) || 0;
  const totalOutcome =
    yearlyOutcome[selectedYear]?.reduce((acc, val) => acc + val, 0) || 0;

  // Get previous year data
  const previousYear = (parseInt(selectedYear) - 1).toString();
  const previousIncome =
    yearlyIncome[previousYear]?.reduce((acc, val) => acc + val, 0) || 0;
  const previousOutcome =
    yearlyOutcome[previousYear]?.reduce((acc, val) => acc + val, 0) || 0;

  // Calculate percentage change
  const incomeChange = calculatePercentageChange(totalIncome, previousIncome);
  const outcomeChange = calculatePercentageChange(
    totalOutcome,
    previousOutcome
  );

  return (
    <div className="flex flex-col md:flex-row max-w-full min-h-screen">
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col w-full lg:w-[calc(100%-16rem)] items-center px-6 sm:px-10 md:px-12 py-6 mt-[60px] md:mt-0">
        <div className="w-full max-w-7xl flex flex-col gap-10">
          <Header
            title="Welcome Back, Ali"
            description="Here's what's happening with store today."
            imageUrl="/Wave.svg"
          />

          <main className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center">
            {/* Left Section - Larger Content */}
            <section className="flex flex-col gap-10 w-full lg:w-2/3">
              {/* Income Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Income
                  title="Total Income"
                  imageUrl="./arrowDown.svg"
                  price={`$${totalIncome.toLocaleString()}`} // Dynamic data
                  priceCount={incomeChange} // Dynamic percentage change
                  customClass="bg-[#193345] text-[#02B15A]"
                />
                <Income
                  title="Total Outcome"
                  imageUrl="./arrowUp.svg"
                  price={`$${totalOutcome.toLocaleString()}`} // Dynamic data
                  priceCount={outcomeChange} // Dynamic percentage change
                  customClass="bg-[#3C193B] text-[#E41414]"
                />
              </div>

              {/* Pass state to Analytics */}
              <Analytics
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
              />

              <TransactionsTable
                columns={["Name", "Date", "Amount", "Status"]}
                data={transactions1}
              />
            </section>

            {/* Right Section - Smaller Widgets */}
            <section className="w-full flex flex-col gap-10 md:flex-row lg:flex-col lg:w-1/3">
              <div className="w-full md:w-1/2 lg:w-full">
                <CardContainer />
              </div>
              <div className="w-full md:w-1/2 lg:w-full">
                <Activity />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
