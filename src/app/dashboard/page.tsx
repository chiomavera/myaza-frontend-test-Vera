import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Analytics from "../components/Analytics";
import CardContainer from "../components/CardContainer";
import TransactionsTable from "../components/TransactionsTable";
import Income from "../components/Income";
import Activity from "../components/Activity";

export default function Dashboard() {
  const transactions1 = [
    {
      Name: "Adobe After Effect",
      Date: "Sat, 20 Apr 2020",
      Amount: "$80.09",
      Status: "Deposited",
     imageURL:  "/Adobe.svg"
    },
    {
      Name: "McDonald's",
      Date: "Sat, 20 Apr 2020",
      Amount: "$80.09",
      Status: "Deposited",
     imageURL:  "/McDonald.svg"
    },
    {
      Name: "Levi",
      Date: "Sat, 20 Apr 2020",
      Amount: "$80.09",
      Status: "Deposited",
     imageURL:  "/Levi.svg"
    },
    {
      Name: "Adobe After",
      Date: "Sat, 20 Apr 2020",
      Amount: "$80.09",
      Status: "Deposited",
     imageURL:  "/Adobe.svg"
    },
    {
      Name: "Levi",
      Date: "Sat, 20 Apr 2020",
      Amount: "$80.09",
      Status: "Deposited",
     imageURL:  "/Levi.svg"
    },
  ];

  return (
    <div className="flex max-w-full">
      <Sidebar />
      <div className="flex flex-col justify-center gap-10 py-10 px-10">
        <Header
          title="Welcome Back, Ali"
          description="Here's what's happening with store today."
          imageUrl="/Wave.svg"
        />
        <main className="flex gap-10">
          <section className="w-[588px] flex flex-col gap-10">
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
            <TransactionsTable
              columns={["Name", "Date", "Amount", "Status"]}
              data={transactions1} 
            />
          </section>
          <section className="w-[439px] flex flex-col gap-10">
            <CardContainer />
            <Activity />
          </section>
        </main>
      </div>
    </div>
  );
}
