import Image from "next/image";

interface HeaderProps {
  title: string;
  description: string;
  imageUrl: string;
  customClass?: string;
}

function Header({ title, description, imageUrl, customClass }: HeaderProps) {
  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      {/* Title and Description */}
      <div className="max-w-xs md:max-w-sm flex flex-col gap-2.5 text-center md:text-left">
        <h1 className="flex items-center gap-1 justify-center md:justify-start">
          <span className="text-xl md:text-2xl font-semibold">{title}</span>
          <Image
            src={imageUrl}
            alt="waving hand emoji"
            width={25}
            height={25}
            className={customClass}
          />
        </h1>
        <span className="text-[#C1C1C1] text-sm md:text-base">
          {description}
        </span>
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-[380px]">
        <input
          type="search"
          placeholder="Search for anything..."
          className="w-full h-10 px-4 text-[#AEABD8] text-xs md:text-sm rounded-lg bg-transparent border-gray-600 outline-none"
        />
        <Image
          src="/Search.svg"
          alt="Search icon"
          width={16}
          height={16}
          className="absolute top-1/2 right-3 transform -translate-y-1/2"
        />
      </div>
    </header>
  );
}

export default Header;
