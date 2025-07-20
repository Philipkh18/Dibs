export default function About() {
  return (
    <section
      id="About"
      className="min-h-screen w-full bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-8"
    >
      {/* Left Side */}
      <div className="text-center md:text-left md:w-1/2 md:ml-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-[#428989]">Buy</span>,{" "}
          <span className="text-[#428989]">Sell</span>, and{" "}
          <span className="text-[#428989]">Swap</span> smarter. <br />
          <span className="text-[#e6b53f] underline">All on campus.</span>
        </h1>
      </div>

      {/* Vertical Divider for medium+ screens */}
      <div className="hidden md:block md:h-100 w-[2px] bg-[#e6b53f]"></div>

      {/* Right Side */}
      <div className="flex flex-col md:w-1/2 gap-6 items-center">
        {/* Marketplace Card */}
        <div className="bg-[#e6b53f] rounded-3xl p-6 w-full max-w-md text-black">
          <h2 className="text-xl font-semibold">Dibs Marketplace</h2>
          <p className="mt-2">
            Discover a trusted space where students can easily exchange
            textbooks, furniture, electronics, and more. Dibs connects you
            with your campus so you can <span className="font-medium">save money</span>,{" "}
            <span className="font-medium">reduce waste</span>, and{" "}
            <span className="font-medium">support fellow students</span>.
          </p>
        </div>

        {/* Dibs Lease Card */}
        <div className="bg-[#e6b53f] rounded-3xl p-6 w-full max-w-md text-black">
          <h2 className="text-xl font-semibold">Dibs Lease</h2>
          <p className="mt-2">
            Browse available sublets, chat with potential roommates, and
            secure off-campus housing—all in one place. Dibs Lease simplifies
            the housing hunt by connecting students{" "}
            <span className="font-medium">directly</span> and{" "}
            <span className="font-medium">instantly</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
