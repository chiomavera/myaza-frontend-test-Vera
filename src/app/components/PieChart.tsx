import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }: { data: number[] }) => {
  const chartData = {
    labels: ["Daily Payment", "Hobby", "Inactive"],
    datasets: [
      {
        data,
        backgroundColor: ["#6359E9", "#64CFF6", "#3A3A5A"], // Main colors
        hoverBackgroundColor: ["#5148D9", "#52BFE6", "#2E2E4A"],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "60%",
    rotation: -90,
    circumference: 180,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[320px] mx-auto relative">
      {/* Doughnut Chart */}
      <div className="relative w-full h-auto">
        <Doughnut data={chartData} options={options} />
        {/* Centered Percentage */}
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg">
          {data[0] + data[1]}%
        </div>
      </div>

      {/* Custom Legend */}
      <div className="flex justify-center items-center gap-12 mt-2 w-full">
        {/* Daily Payment */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-1">
            <span className="w-3 h-3 bg-[#6359E9] rounded-full mr-2"></span>
            <span className="text-white">Daily Payment</span>
          </div>
          <span className="text-white font-bold text-sm">{data[0]}%</span>
        </div>

        {/* Hobby */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-1">
            <span className="w-3 h-3 bg-[#64CFF6] rounded-full mr-2"></span>
            <span className="text-white">Hobby</span>
          </div>
          <span className="text-white font-bold text-sm">{data[1]}%</span>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
