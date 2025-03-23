
function ATMCard() {
  return (
    <div className="relative bg-[image:var(--bg-card)] bg-cover bg-center w-full h-[200px]">
      <span className="absolute top-14 mx-9 text-[28px] font-medium">$5,750,20</span>
      <div className="absolute top-36 mx-9">
        <span className="mr-29">5282 3456 7890 1289</span>
        <span>09/25</span>
      </div>
    </div>
  )
}

export default ATMCard