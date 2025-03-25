import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  selectedYear: string;
}

const yearlyData: Record<string, number[]> = {
"2020": [14000, 37000, 39000, 52000, 35000, 30000, 27000, 32000],
"2021": [24000, 17000, 29000, 52000, 35000, 30000, 27000, 32000],
  "2022": [30000, 35000, 25000, 40000, 32000, 28000, 26000, 30000],
  "2023": [34000, 37000, 29000, 42000, 35000, 30000, 27000, 32000],
  "2024": [36000, 39000, 31000, 45000, 37000, 32000, 29000, 34000],
  "2025": [37000, 34000, 31000, 45000, 17000, 32000, 29000, 74000],
};

const BarChart: React.FC<BarChartProps> = ({ selectedYear }) => {
  const data: ChartData<"bar"> = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        data: yearlyData[selectedYear]?.map((value) => value * 0.7) || [],
        backgroundColor: "#64CFF6",
        borderRadius: 4,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
      {
        data: yearlyData[selectedYear] || [],
        backgroundColor: "#6359E9",
        borderRadius: 4,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#4E46A5",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        cornerRadius: 6,
        displayColors: false,
        padding: 8,
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw as number; // Type assertion
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          color: "#CBC8FF",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          tickBorderDash: [6, 6],
          lineWidth: 1,
          drawTicks: false,
        },
        ticks: {
          color: "#CBC8FF",
          stepSize: 10000, // Ensures increments of 10K
          callback: function (value) {
            return `${Number(value) / 1000}K`;
          },
        },
      },
    },
  };
  
  return (
    <div className="w-full h-[300px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
