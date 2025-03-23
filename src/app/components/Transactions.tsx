import Image from "next/image"
import CardHeading from "./CardHeading"

function Transactions() {
  return (
    <div className="bg-foreground rounded-2xl pt-6 px-6 p-13.5">
        <div className="flex justify-between items-center ">
            <CardHeading heading="Recent Transactions"/>
            <span className="text-[#8C89B4] text-sm font-semibold">See All</span>
        </div>
        <table>
            <thead className="mb-4.5">
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Adobe After Effect</td>
                    <td>Sat,20 Apr 2020</td>
                    <td>$80.09</td>
                    <td>Deposited</td>
                </tr>
                <tr>
                    <td>McDonald's</td>
                    <td>Sat,20 Apr 2020</td>
                    <td>$80.09</td>
                    <td>Deposited</td>
                </tr>
                <tr>
                    <td>Levi</td>
                    <td>Sat,20 Apr 2020</td>
                    <td>$80.09</td>
                    <td>Deposited</td>
                </tr>
                <tr>
                    <td>Adobe After Effect</td>
                    <td>Sat,20 Apr 2020</td>
                    <td>$80.09</td>
                    <td>Deposited</td>
                </tr>
                <tr>
                    <td>Levi</td>
                    <td>Sat,20 Apr 2020</td>
                    <td>$80.09</td>
                    <td>Deposited</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Transactions