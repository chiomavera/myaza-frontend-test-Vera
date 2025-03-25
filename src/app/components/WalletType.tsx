import Image from "next/image";

interface WalletTypeProps {
  walletType: string;
  balance: string;
  imageUrl: string;
}

function WalletType({ walletType, balance, imageUrl }: WalletTypeProps) {
  return (
    <div className="flex w-full h-20  gap-2 p-4  items-center rounded-lg border border- [#8477FF] cursor-pointer hover:shadow-lg active:scale-95 transition-all duration-200">
      <Image
        src={imageUrl}
        alt="A country flag of the currency in use"
        width={40}
        height={40}
      />
      <div className="flex flex-col">
        <span className="text-base leading-6 tracking-[-0.64px]">
          {walletType}
        </span>
        <span className="text-xs text-[#C1C1C1] font-medium tracking-[-0.24px]">
          {balance}
        </span>
      </div>
    </div>
  );
}

export default WalletType;
