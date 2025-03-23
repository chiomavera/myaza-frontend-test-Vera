import Link from "next/link"
import ATMCard from "./ATMCard"
import CardHeading from "./CardHeading"

function CardContainer() {
  return (
    <div className="bg-foreground flex flex-col p-6 rounded-2xl">
        <CardHeading heading="My Card"/>
        <div className="flex flex-col mt-4 mb-5">
            <span className="text-[#8C89B4] text-base">card Balance</span>
            <span className="text-2xl font-semibold">$15,595.015</span>
        </div>
        <ATMCard />
        <div className="flex justify-center items-center gap-[5px] mt-[17px]">
            <span className="w-6 h-1.5 bg-[#CBC8FF] rounded-sm"></span>
            <span className="w-2 h-1.5 bg-[#27264E] rounded-sm"></span>
            <span className="w-2 h-1.5 bg-[#27264E] rounded-sm"></span>
        </div>
        <div className="w-full flex justify-between mt-6">
        <Link href="" className="w-45 bg-[#CBC8FF] text-foreground text-center text-sm font-semibold p-2.5 rounded-lg">Manage Cards</Link>
        <Link href="" className="w-45 text-[#CBC8FF] text-center text-sm font-semibold p-2.5 border border-[#CBC8FF] rounded-lg">Transfer</Link>
        </div>
    </div>
  )
}

export default CardContainer