import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Analytics from "../components/Analytics";
import CardContainer from "../components/CardContainer";
import Transactions from "../components/Transactions";
import Income from "../components/Income";
import Activity from "../components/Activity";

export default function Dashboard() {
  return (
    <div className="flex max-w-full">
      <Sidebar />
      <div className="flex flex-col justify-center gap-10 px-10">
        <Header title="Welcome Back, Ali" description="Here's what's happening with store today." imageUrl="/Wave.svg"/>
        <main className="flex gap-10">
          <section className="flex flex-col gap-10">
            <div className="flex gap-6">
              <Income
                title="Total Income"
                imageUrl="./arrowDown.svg"
                price="$632.000"
                priceCount="+1.29%"
                customClass="bg-[#193345] text-[#02B15A]"
              />
              <Income
                title="Total Income"
                imageUrl="./arrowUp.svg"
                price="632.000"
                priceCount="+1.29%"
                customClass="bg-[#3C193B] text-[#E41414]"
              />
            </div>
            <Analytics />
            <Transactions />
          </section>
          <section className="flex flex-col gap-10">
            <CardContainer />
            <Activity />
          </section>
        </main>
      </div>
    </div>
  );
}
