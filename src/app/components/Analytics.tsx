"use client";

import Calender from "./Calender";
import CardHeading from "./CardHeading";
import BarChart from "./BarChart";

interface AnalyticsProps {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
}

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

function Analytics({ selectedYear, setSelectedYear }: AnalyticsProps) {
  return (
    <div className="w-full bg-foreground flex flex-col gap-6 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out shadow-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <CardHeading heading="Analytics" />

        {/* Legend + Calendar */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
          <div className="flex gap-3">
            <span className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 bg-[#6359E9] rounded-full"></span>
              <span>Income</span>
            </span>
            <span className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 bg-[#64CFF6] rounded-full"></span>
              <span>Outcome</span>
            </span>
          </div>

          <Calender
            label={selectedYear}
            type="year"
            onSelect={setSelectedYear}
          />
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[300px]">
        <BarChart selectedYear={selectedYear} />
      </div>
    </div>
  );
}

export default Analytics;
