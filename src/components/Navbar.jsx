import Button from "./Button";

function Navbar() {
  return (
    <div className="mx-auto max-w-screen-xl py-6 flex items-center justify-between border-b-[1px] border-zinc-500">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
        ></img>
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Careers", "", "News"].map((elem, ind) =>
            elem.length === 0 ? (
              <span key={ind} className="w-[1px] h-6 bg-zinc-500"></span>
            ) : (
              <a className="flex items-center gap-1 text-sm" key={ind} href="#">
                {ind === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0 0.02em #00FF19" }}
                    className="inline-block w-2 h-2 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button title={"Start a Project"} />
    </div>
  );
}

export default Navbar;
