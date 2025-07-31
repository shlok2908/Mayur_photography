// src/components/Loader.jsx
import React from "react";
import "../styles/logoLoader.css";

export default function Loader() {
  return (
    <div className="loader-screen">
      <div className="logo-mask">
        {/* Static grey logo background */}
        <svg viewBox="0 0 1024 1024" className="logo-static">
          <path d="M100 900V100L512 800L924 100V900" fill="none" stroke="#888" strokeWidth="50" strokeLinecap="round" />
          <path d="M220 900V600" fill="none" stroke="#888" strokeWidth="30" strokeLinecap="round" />
          <path d="M804 900V600" fill="none" stroke="#888" strokeWidth="30" strokeLinecap="round" />
          <path d="M280 120L512 520L744 120" fill="none" stroke="#888" strokeWidth="40" strokeLinecap="round" />
        </svg>

        {/* White fill rising inside logo */}
        <div className="fill-clip">
          <svg viewBox="0 0 1024 1024" className="logo-fill">
            <path d="M100 900V100L512 800L924 100V900" fill="none" stroke="#fff" strokeWidth="50" strokeLinecap="round" />
            <path d="M220 900V600" fill="none" stroke="#fff" strokeWidth="30" strokeLinecap="round" />
            <path d="M804 900V600" fill="none" stroke="#fff" strokeWidth="30" strokeLinecap="round" />
            <path d="M280 120L512 520L744 120" fill="none" stroke="#fff" strokeWidth="40" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
