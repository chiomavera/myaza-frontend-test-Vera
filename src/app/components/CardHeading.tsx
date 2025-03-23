interface HeadingProps {
    heading: string;
}

function CardHeading({heading}: HeadingProps) {
  return (
    <h2 className="text-2xl font-semibold">{heading}</h2>
  )
}

export default CardHeading