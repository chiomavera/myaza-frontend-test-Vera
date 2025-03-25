import React from "react";
import Image from "next/image";
import CardHeading from "./CardHeading";

interface Transaction {
  [key: string]: string; // Allows dynamic keys for flexible columns
  imageURL: string;
}

interface TransactionsTableProps {
  columns: string[];
  data: Transaction[];
}

const TransactionsTable = ({ columns, data }: TransactionsTableProps) => {
  return (
    <div className="bg-foreground rounded-2xl pt-6 px-6 py-6 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <CardHeading heading="Recent Transactions" />
        <span className="text-[#8C89B4] text-sm font-semibold cursor-pointer transition-all duration-300 hover:text-white">
          See All
        </span>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr className="text-left text-[#8C89B4] text-sm font-medium border-b border-[#2C2C44]">
              {columns.map((col, index) => (
                <th key={index} className="py-3 px-4 whitespace-nowrap">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-[#2C2C44] text-white text-sm"
              >
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="py-3 px-4 whitespace-nowrap">
                    {col === "Name" ? (
                      <div className="flex items-center gap-3">
                        {row.imageURL && (
                          <Image
                            src={row.imageURL}
                            alt={row.Name}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        )}
                        <span>{row[col]}</span>
                      </div>
                    ) : col === "Status" ? (
                      <span className="text-green-500">{row[col]}</span>
                    ) : (
                      row[col] || "-"
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
