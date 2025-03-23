import Image from "next/image";
import Link from "next/link";
import Calender from "./Calender";
import CardHeading from "./CardHeading";

function Activity() {
  return (
    <section className="bg-foreground w-[439px]  pt-4 px-4 pb-8 rounded-2xl">
      <div className="flex justify-between">
        <CardHeading heading="Activity"/>
        <Calender label="Month" />
      </div>
      <div className="flex flex-col items-center mt-10 gap-10">
        <div><Image src="/piechart.svg" alt="A chart showing activity records" width={237.196} height={200} className="w-full"/></div>

        <Link href="#" className="w-[280px] text-[#CBC8FF] text-sm text-center font-semibold p-2.5 border border-[#CBC8FF] rounded-lg">Sell All Activity</Link>
      </div>
    
        
  
    </section>
  );
}

export default Activity;
