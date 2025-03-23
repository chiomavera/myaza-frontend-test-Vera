import Image from "next/image";

interface HeaderProps {
  title: string;
  description: string;
  imageUrl: string;
  customClass?: string;
}

function Header({title, description, imageUrl, customClass}: HeaderProps) {
  return (
    <header className="w-full flex justify-between items-center ">
      <div className="w-[339px] flex flex-col gap-2.5">
        <h1 className="flex items-center gap-1">
          <span className="text-2xl font-semibold">{title}</span>
          <Image
            src={imageUrl}
            alt="waving hand emoji"
            width={25}
            height={25} 
            className={customClass}
          />
        </h1>
        <span className="text-[#C1C1C1] text-base">{description}</span>
      </div>
      <div className="relative">
        <input type="search" placeholder="Search for anything...." className="relative w-[380px] h-10 px-4 text-[#AEABD8] text-xs rounded-lg"/>
        <Image src="/Search.svg" alt="A search icon" width={16} height={16} className="absolute top-3 right-3"
        />
    
      </div>
    </header>
  );
}

export default Header;
