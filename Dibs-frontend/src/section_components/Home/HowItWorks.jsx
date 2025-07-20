export default function HowItWorks() {
  return (
    <>
      <div
        id="HowItWorks"
        className="min-h-[80vh] bg-black text-white flex flex-col w-full"
      >
        {/* Left side text */}
        <div className="md:w-1/2 px-6 md:px-12 md:ml-10">
          <h1 className="text-[90px]">How It Works</h1>
          <ul className=" md:mt-10 list-decimal md:w-12/12 space-y-10 md:ml-5">
            <li>
              <span className="font-semibold">Sign Up</span>: Join with your
              college email to access your campus marketplace.
            </li>
            <li>
              <span className="font-semibold">List or Browse</span>: Post items
              or find deals on textbooks, furniture, housing, and more.
            </li>
            <li>
              <span className="font-semibold">Chat & Deal</span>: Message
              students, ask questions, and lock in your trade.
            </li>
            <li>
              <span className="font-semibold">Meet & Exchange</span>: Meet up on
              campus to swap, sell, or rent — no fees, no hassle.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
