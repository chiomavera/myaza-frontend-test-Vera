"use client";
import { useState } from "react";
import Link from "next/link";
import ATMCard from "./ATMCard";
import CardHeading from "./CardHeading";

function CardContainer() {
  const [activeCard, setActiveCard] = useState(0); // Track the active card
  const totalCards = 3; // Total number of cards

  const handleDotClick = (index: number) => {
    setActiveCard(index);
  };

  return (
    <div className="bg-foreground flex flex-col p-6 rounded-2xl w-full hover:scale-105 transition-transform duration-300 ease-in-out shadow-md">
      {/* Heading */}
      <CardHeading heading="My Card" />
      {/* Card Balance */}
      <div className="flex flex-col mt-4 mb-5">
        <span className="text-[#8C89B4] text-base">Card Balance</span>
        <span className="text-2xl font-semibold">$15,595.015</span>
      </div>
      {/* ATM Card */}
      <ATMCard activeCard={activeCard} /> {/* Pass activeCard as a prop */}
      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-1 mt-4">
        {[...Array(totalCards)].map((_, index) => (
          <span
            key={index}
            className={`w-${index === activeCard ? "6" : "2"} h-1.5 ${
              index === activeCard ? "bg-[#CBC8FF]" : "bg-[#27264E]"
            } rounded-sm cursor-pointer`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      {/* Buttons */}
      <div className="w-full flex flex-col sm:flex-row justify-between mt-6 gap-3">
        <Link
          href=""
          className="w-full sm:w-1/2 bg-[#CBC8FF] text-foreground hover:bg-foreground hover:text-[#CBC8FF] hover:border hover:border-[#CBC8FF] 
  active:scale-95 transition-all duration-300 ease-in-out text-center text-sm font-semibold p-2.5 rounded-lg"
        >
          Manage Cards
        </Link>
        <Link
          href=""
          className="w-full sm:w-1/2 text-[#CBC8FF] text-center text-sm font-semibold p-2.5 border border-[#CBC8FF] rounded-lg hover:bg-[#CBC8FF] hover:text-foreground active:scale-95 transition-all duration-300 ease-in-out"
        >
          Transfer
        </Link>
      </div>
    </div>
  );
}

export default CardContainer;
