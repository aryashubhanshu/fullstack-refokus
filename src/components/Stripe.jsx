function Stripe({ image, number }) {
  return (
    <div className="flex justify-between items-center w-[16.66%] px-4 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-500">
      <span>
        <img src={image}></img>
      </span>
      <span className="font-bold">{number}</span>
    </div>
  );
}

export default Stripe;
