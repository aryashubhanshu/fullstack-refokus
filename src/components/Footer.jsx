function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[12rem] font-bold tracking-tight leading-none">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-400 font-semibold">Socials</h4>
            {["Instagram", "Twitter (X?)", "LinkedIn"].map((link, ind) => (
              <a key={ind} href="#" className="mt-3 block text-zinc-600">
                {link}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-400 font-semibold">Sitemap</h4>
            {["Home", "Work", "Carrers", "Contact"].map((link, ind) => (
              <a key={ind} href="#" className="mt-3 block text-zinc-200">
                {link}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex items-center">
            <p className="text-right">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
