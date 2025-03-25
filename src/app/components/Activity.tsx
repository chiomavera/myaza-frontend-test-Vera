"use client";

import { useState } from "react";
import Link from "next/link";
import Calender from "./Calender";
import CardHeading from "./CardHeading";
import PieChart from "./PieChart"; // Import the PieChart component

// Define the type for all 12 months
type Month =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

function Activity() {
  const [selectedMonth, setSelectedMonth] = useState<Month>("Jan"); // Default month

  // Data for each month (mocked values for now)
  const monthlyData: Record<Month, number[]> = {
    Jan: [55, 20, 25], // Daily Payment, Hobby, Inactive
    Feb: [50, 30, 20],
    Mar: [60, 15, 25],
    Apr: [40, 35, 25],
    May: [70, 10, 20],
    Jun: [45, 25, 30],
    Jul: [55, 25, 20],
    Aug: [50, 20, 30],
    Sep: [60, 20, 20],
    Oct: [65, 15, 20],
    Nov: [50, 25, 25],
    Dec: [55, 20, 25],
  };

  return (
    <section className="bg-foreground p-6 rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out shadow-md">
      <div className="flex justify-between items-center">
        <CardHeading heading="Activity" />
        <Calender
          label={selectedMonth}
          type="month"
          onSelect={(month) => setSelectedMonth(month as Month)}
        />
      </div>

      {/* Chart & Link */}
      <div className="flex flex-col items-center mt-6 gap-6">
        {/* Pie Chart */}
        <div className="w-full h-[200px] flex justify-center items-center">
          <PieChart data={monthlyData[selectedMonth] || [0, 0, 0]} />
        </div>

        {/* View All Activity Button */}
        <Link
          href="#"
          className="w-full text-[#CBC8FF] text-sm text-center font-semibold py-2 border border-[#CBC8FF] rounded-md  hover:bg-[#CBC8FF] hover:text-foreground active:scale-95 transition-all duration-300 ease-in-out"
        >
          See All Activity
        </Link>
      </div>
    </section>
  );
}

export default Activity;
