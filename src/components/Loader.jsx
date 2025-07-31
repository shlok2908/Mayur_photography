import React, { useEffect, useState, useRef } from "react";
import "../styles/logoLoader.css";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const fillRef = useRef(null);

  useEffect(() => {
    const node = fillRef.current;
    if (node) {
      const handleAnimationEnd = () => {
        setIsLoading(false); // hide only when animation ends
      };
      node.addEventListener("animationend", handleAnimationEnd);
      return () => node.removeEventListener("animationend", handleAnimationEnd);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader-screen">
      <div className="logo-mask">
        <svg viewBox="0 0 1024 1024" className="logo-svg">
          {/* Gray Logo */}
          <path d="M100 900V100L512 800L924 100V900"
                fill="none" stroke="#888" strokeWidth="50" strokeLinecap="round" />
          <path d="M220 900V600"
                fill="none" stroke="#888" strokeWidth="30" strokeLinecap="round" />
          <path d="M804 900V600"
                fill="none" stroke="#888" strokeWidth="30" strokeLinecap="round" />
          <path d="M280 120L512 520L744 120"
                fill="none" stroke="#888" strokeWidth="40" strokeLinecap="round" />

          {/* Mask with animated rectangle */}
          <mask id="reveal-mask">
            <rect
              ref={fillRef}
              className="fill-rect"
              width="1024"
              height="1024"
              fill="white"
            />
          </mask>

          <g mask="url(#reveal-mask)">
            <path d="M100 900V100L512 800L924 100V900"
                  fill="none" stroke="#fff" strokeWidth="50" strokeLinecap="round" />
            <path d="M220 900V600"
                  fill="none" stroke="#fff" strokeWidth="30" strokeLinecap="round" />
            <path d="M804 900V600"
                  fill="none" stroke="#fff" strokeWidth="30" strokeLinecap="round" />
            <path d="M280 120L512 520L744 120"
                  fill="none" stroke="#fff" strokeWidth="40" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}
