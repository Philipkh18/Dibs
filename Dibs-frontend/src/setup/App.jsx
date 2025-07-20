import { useState } from "react";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx"
import Profile from "../pages/Profile.jsx"
import "./App.css";
import * as React from "react";
// import ReactDOM from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    {/* Browser router is for easy-to-read URL's */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>;
          <Route path="/login" element={<Login />}/>;
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
