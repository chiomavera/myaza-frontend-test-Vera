import Image from "next/image";

interface IncomeProps {
  title: string;
  price: string;
  priceCount: string;
  imageUrl: string;
  customClass?: string;
}

function Income({title, price, imageUrl, priceCount, customClass }: IncomeProps) {
  return (
    <div className="flex p-4 justify-between align-center rounded-2xl bg-foreground gap-40">
        <div className="flex gap-3">
          <Image src={imageUrl} alt="icon" width={40} height={40} />
            <div className="flex flex-col">
                <span className="text-[#8C89B4] text-sm">{title}</span>
                <span className="text-2xl font-semibold">{price}</span>
            </div>
        </div>
        <span className={`${customClass} flex w-12 h-5 justify-center items-center p-1  rounded-[10px] text-xs`}>{priceCount}</span>
    </div>
  )
}

export default Income