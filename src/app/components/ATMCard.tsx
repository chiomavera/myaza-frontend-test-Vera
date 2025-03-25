import Image from "next/image";

const cardImages = ["/ATMCard.svg", "/ATMCard.svg", "/ATMCard.svg"]; // Array of card images

function ATMCard({ activeCard }: { activeCard: number }) {
  return (
    <div className="w-full">
      <Image
        src={cardImages[activeCard]} // Dynamically change card image
        alt="ATM Card"
        width={391}
        height={196}
        className="rounded-[20px] transition-all duration-300 ease-in-out"
      />
    </div>
  );
}

export default ATMCard;
