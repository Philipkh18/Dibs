import NavBar from "../components/NavBar.jsx";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import HomeHero from "../section_components/Home/HomeHero.jsx";
import About from "../section_components/Home/about.jsx";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <NavBar />
        <HomeHero />
        <About/>


        <div id="Developers"></div>

        <div id="Why"></div>

        <div id="FAQ"></div>
      </div>
    </>
  );
}
