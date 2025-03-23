import Image from "next/image";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WalletType from "../components/WalletType";

function Wallet() {
  return (
    <div className="flex max-w-full">
      <Sidebar />
      <div className="flex flex-col justify-center gap-10 px-10">
        <Header
          title="My wallets"
          description="Manage all your wallets from here"
          imageUrl="/Wave.svg"
          customClass="hidden"
        />
        <section className="bg-foreground flex w-full flex-col gap-9.5 rounded-lg p-6">
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-base text-[#C1C1C1] font-medium leading-6 tracking-[-0.16px]">
                Your consolidated balance
              </span>
              <span className="text-[28px] font-bold">$34,780,267.08</span>
            </div>
            <div className="flex gap-5">
              <div className="w-45 bg-[#CBC8FF] flex justify-center items-center gap-2 p-2.5 rounded-lg">
                <Image
                  src="plus.svg"
                  alt="A plus icon"
                  width={20}
                  height={20}
                />
                <span className="text-foreground text-sm  font-bold">
                  Add New Wallet
                </span>
              </div>
              <Image
                src="Dot.svg"
                alt="cirle with three dots indicating click to expand"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="flex gap-6">
          <WalletType walletType="NGN Wallet" balance="Balance: 245,800.89" imageUrl="/NGN.svg"/>
          <WalletType walletType="GBP Wallet" balance="Balance: 245,800.89" imageUrl="/GBP.svg"/>
          <WalletType walletType="USD Wallet" balance="Balance: 245,800.89" imageUrl="/USD.svg"/>
          </div>
        </section>
        <section></section>
      </div>
    </div>
  );
}

export default Wallet;
