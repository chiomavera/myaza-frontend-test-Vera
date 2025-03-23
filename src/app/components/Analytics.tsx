import Image from "next/image";
import Calender from "./Calender";
import CardHeading from "./CardHeading";

function Analytics() {
  return (
    <div className="w-full bg-foreground flex flex-col gap-4 pt-6 px-6 pb-6 rounded-2xl">
      <div className="flex justify-between items-center">
        <CardHeading heading="Analytics" />
        <div className="flex gap-3">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#6359E9] rounded-full"></span>
            <span>Income</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#64CFF6] rounded-full"></span>
            <span>Outcome</span>
          </span>
          <Calender label="2020" />
        </div>
      </div>

      <Image
        src="/BarChart.svg"
        alt="A bar Chart "
        width={540}
        height={257}
        className="w-full"
      />
    </div>
  );
}

export default Analytics;
