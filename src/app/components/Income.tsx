import Image from "next/image";

interface IncomeProps {
  title: string;
  price: string;
  priceCount: string;
  imageUrl: string;
  customClass?: string;
}

function Income({
  title,
  price,
  imageUrl,
  priceCount,
  customClass,
}: IncomeProps) {
  return (
    <div
      className="w-full flex p-4 justify-between items-baseline rounded-2xl bg-foreground gap-2 
                 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md"
    >
      <div className="flex items-center gap-3">
        <Image src={imageUrl} alt={`${title} icon`} width={40} height={40} />
        <div className="flex flex-col">
          <span className="text-[#8C89B4] text-sm">{title}</span>
          <span className="text-2xl font-semibold">{price}</span>
        </div>
      </div>
      <span
        className={`flex w-12 h-5 justify-center items-baseline p-1 rounded-[10px] text-xs transition-opacity duration-200 hover:opacity-80 ${
          customClass || ""
        }`}
      >
        {priceCount}
      </span>
    </div>
  );
}

export default Income;
