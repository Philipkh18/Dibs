import React, { useState, useEffect } from "react";
export default function NavBar() {
  return (
    <div className="w-full flex items-center bg-gradient-to-b from-black/25 to-transparent py-2 sticky top-0 z-2 h-25">
      <div className="ml-20">
        <img className="w-30 h-30" src="/dibs_logo.png" alt="dibs-logo" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <ul className="flex flex-row justify-between items-center min-w-6/12 max-w-2xl py-3 bg-black/40 backdrop-blur-lg rounded-full shadow-md text-white font-semibold pr-7 pl-7 mr-0 font-sans text-sm h-auto w-auto">
          <li>About Us</li>
          <li>Developers</li>
          <li>Why Dibs</li>
          <li>FAQ</li>
        </ul>
      </div>
      {/* Sign in Button */}
      <div className="flex justify-center items-center w-20 max-w-2xl py-0 rounded-full bg-[#e6b53f] mr-20 h-10 text-sm font-bold">
        <h3>Sign in</h3>
      </div>
    </div>
  );
}
