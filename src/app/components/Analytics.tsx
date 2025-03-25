"use client";

import Calender from "./Calender";
import CardHeading from "./CardHeading";
import BarChart from "./BarChart";

interface AnalyticsProps {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
}

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
