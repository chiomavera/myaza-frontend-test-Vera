import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-[293px] h-[1100px] bg-foreground flex flex-col items-center gap-[39.5px] pt-[44.71px]">
      <div className="flex flex-col">
        <div className="flex justify-center items-center gap-2 ">
        <Image
          src="/logo1.svg"
          alt="Brand logo"
          width={31.042}
          height={31.042}
        />
        <Image
          src="/uifry.svg"
          alt="Brand logo"
          width={60.158}
          height={26.755}
        />
        </div>
      </div>

      <nav className="flex flex-col gap-7">
        <div className="w-[237.035px] flex flex-col gap-4">
          <Link
            href="/dashboard"
            className="w-full flex items-center gap-4.5 p-4 rounded-lg bg-lightBg"
          >
            <Image
              src="/Dashboard.svg"
              alt="A dashboard icon"
              width={20}
              height={20}
            />
            <span className="text-background text-base font-semibold">
              Dashboard
            </span>
          </Link>
          <Link href="#" className="w-full flex items-center gap-4.5 p-4">
            <Image
              src="/Analytics.svg"
              alt="An analytics icon"
              width={20}
              height={20}
            />
            <span className="text-base">Analytics</span>
          </Link>
          <Link href="/wallet" className="w-full flex items-center gap-4.5 p-4">
            <Image
              src="/Wallet.svg"
              alt="A wallet icon"
              width={20}
              height={20}
            />
            <span className="text-base">My Wallet</span>
          </Link>
          <Link href="#" className="w-full flex items-center gap-4.5 p-4">
            <Image
              src="/User.svg"
              alt="user icon"
              width={20}
              height={20}
            />
            Accounts
          </Link>
          <Link href="#" className="w-full flex items-center gap-4.5 p-4">
            <Image
              src="/Settings.svg"
              alt="settings icon"
              width={20}
              height={20}
            />
            Settings
          </Link>
        </div>

        <div className="flex flex-col gap-4">
        <Link href="#" className="w-full flex items-center gap-4.5 p-4">
            <Image
              src="/Help.svg"
              alt="help icon"
              width={20}
              height={20}
            />
            Help Center
          </Link>
          <Link href="#" className="w-full flex items-center gap-4.5 p-4">
            <Image
              src="/Dark.svg"
              alt="A dark mode toggle icon"
              width={20}
              height={20}
            />
            Dark Mode
          </Link>
        </div>
      </nav>

      <div className="flex justify-between items-center gap-15.5 mt-60">
        <div className="flex items-center gap-2">
          <Image
            src="/Profile.svg"
            alt=" user profile"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <span className="flex text-base font-bold">Ali Riaz</span>
            <span className="flex text-sm font-normal">Web Developer</span>
          </div>
        </div>
        <div>
          <Image
            src="/arrow-down.svg"
            alt="Brand logo"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
}
