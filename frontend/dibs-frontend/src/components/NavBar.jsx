import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export default function NavBar() {
  return (
    <div className="w-full flex items-center bg-gradient-to-b from-black/20 to-transparent py-2 sticky top-0 z-2 h-25">
      <div className="ml-20">
        <a href="home">
          <img className="w-30 h-30" src="/dibs_logo.png" alt="dibs-logo" />
        </a>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <ul
          className="flex flex-row justify-between items-center min-w-6/12 max-w-2xl py-3 bg-black/40 backdrop-blur-lg 
        rounded-full shadow-md font-semibold pr-7 pl-7 mr-0 font-sans text-sm h-auto w-auto scroll-smooth text-white/50"
        >
          <li>
            <a className="hover:text-white" href="#About">
              About us
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#Developers">
              Developers
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#Why">
              Why us
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#FAQ">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      {/* Sign in Button */}
      <Button
        variant="contained"
        href="/login"
        sx={{
          borderRadius: "30px",
          px: 4,
          height: "40px",
          width: "auto",
          fontWeight: "semibold",
          backgroundColor: "#e6b53f",
          textTransform: "none",
          marginRight: "50px",
          "&:hover": {
            backgroundColor: "#e6b53f",
          },
        }}
      >
        sign in
      </Button>
    </div>
  );
}
