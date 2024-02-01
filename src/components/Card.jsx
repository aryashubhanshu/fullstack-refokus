import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover }) {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[28rem] flex flex-col justify-between hover:${hover}`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>One heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever heading</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="mt-5 px-5 py-2 rounded-full border-[1px] border-zinc-50">
              Contact us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
