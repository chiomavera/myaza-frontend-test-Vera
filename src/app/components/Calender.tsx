import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface CalendarProps {
  label: string;
  type: "year" | "month";
  onSelect: (value: string) => void;
}

export default function Calendar({ label, type, onSelect }: CalendarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const options =
    type === "year"
      ? ["2020", "2021", "2022", "2023", "2024", "2025"]
      : [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!isOpen) {
      if (event.key === "Enter" || event.key === " ") {
        setIsOpen(true);
        event.preventDefault();
      }
      return;
    }

    switch (event.key) {
      case "ArrowDown":
        setHighlightedIndex((prev) =>
          prev < options.length - 1 ? prev + 1 : 0
        );
        event.preventDefault();
        break;
      case "ArrowUp":
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : options.length - 1
        );
        event.preventDefault();
        break;
      case "Enter":
        onSelect(options[highlightedIndex]);
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case "Escape":
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button */}
      <button
        ref={buttonRef}
        className="flex w-20 h-5 p-2 justify-center items-center gap-1 border border-[#8C89B4] rounded-sm cursor-pointer transition-all duration-200 hover:bg-gray-100 active:scale-95 focus:ring focus:ring-[#CBC8FF]"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <span className="text-[#8C89B4] text-xs">{label}</span>
        <Image
          src="/arrow-down2.svg"
          alt="A down arrow icon"
          width={16}
          height={16}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul
          className="absolute top-7 left-0 w-24 bg-white shadow-md rounded-md z-10 transition-all duration-200 scale-95 opacity-100 animate-fade-in"
          role="listbox"
        >
          {options.map((value, index) => (
            <li
              key={value}
              role="option"
              aria-selected={index === highlightedIndex}
              className={`px-3 py-1 text-xs text-gray-700 hover:bg-gray-200 cursor-pointer ${
                index === highlightedIndex ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                onSelect(value);
                setIsOpen(false);
                buttonRef.current?.focus();
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
