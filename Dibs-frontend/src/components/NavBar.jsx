import React, { useState } from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-gradient-to-b from-black/20 to-transparent py-2 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="/">
          <img
            className="h-14 w-auto sm:h-12 md:h-25"
            src="/dibs_logo.png"
            alt="dibs-logo"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex flex-row items-center gap-8 text-white/60 font-semibold text-sm">
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

        {/* Sign in Button (Desktop) */}
        <div className="hidden md:block">
          <Button
            variant="contained"
            href="/login"
            sx={{
              borderRadius: "30px",
              px: 4,
              height: "40px",
              backgroundColor: "#e6b53f",
              textTransform: "none",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "#e6b53f",
              },
            }}
          >
            sign in
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <CloseIcon className="text-white" />
            ) : (
              <MenuIcon className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black/80 text-white/70 font-semibold py-4 gap-4">
          <a onClick={() => setIsOpen(false)} href="#About">
            About us
          </a>
          <a onClick={() => setIsOpen(false)} href="#Developers">
            Developers
          </a>
          <a onClick={() => setIsOpen(false)} href="#Why">
            Why us
          </a>
          <a onClick={() => setIsOpen(false)} href="#FAQ">
            FAQ
          </a>
          <Button
            variant="contained"
            href="/login"
            sx={{
              borderRadius: "30px",
              px: 4,
              height: "40px",
              backgroundColor: "#e6b53f",
              textTransform: "none",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "#e6b53f",
              },
            }}
          >
            sign in
          </Button>
        </div>
      )}
    </nav>
  );
}
