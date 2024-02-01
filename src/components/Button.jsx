import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="flex items-center justify-between w-40 px-4 py-2 bg-zinc-100 text-black rounded-full">
      <span className="text-sm font-bold">{title}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
