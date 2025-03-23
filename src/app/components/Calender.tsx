import Image from "next/image"
interface CalenderProps{
    label: string;
}

export default function Calender({label}: CalenderProps) {
  return (
    <div className="flex w-16 h-5 p-2 justify-center items-center gap-1 ml-5 border border-[#8C89B4] rounded-sm">
            <span className="text-[#8C89B4] text-xs">{label}</span>
            <Image src="./arrow-down2.svg" alt="a down arrow icon" width={16} height={16}/>
          </div>
  )
}
