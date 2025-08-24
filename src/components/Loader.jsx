import React, { useEffect, useState, useRef } from "react";
import "../styles/logoLoader.css";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const fillRef = useRef(null);

  useEffect(() => {
    const node = fillRef.current;
    if (node) {
      const handleAnimationEnd = () => setIsLoading(false);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => node.removeEventListener("animationend", handleAnimationEnd);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader-screen">
      {/* SEO-friendly content for search engines */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <h1>Mayur Photography - Professional Wedding & Portrait Photography Services</h1>
        <p>Professional wedding photography, portrait sessions, and editorial photography by Mayur. Capturing life's precious moments with artistic excellence and attention to detail.</p>
        <p>Services include: Wedding Photography, Portrait Photography, Editorial Photography, Event Photography, Corporate Photography, Fashion Photography</p>
        <p>Location: India | Contact: Professional Photography Services</p>
      </div>
      
      {/* Grey static logo */}
      <div
        className="logo-base"
        style={{
          WebkitMaskImage: `url(/logo.png)`,
          maskImage: `url(/logo.png)`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
        aria-label="Mayur Photography Logo"
      />
      {/* Beige animated fill */}
      <div
        className="fill-rect"
        ref={fillRef}
        style={{
          WebkitMaskImage: `url(/logo.png)`,
          maskImage: `url(/logo.png)`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
        aria-label="Mayur Photography Logo Animation"
      />
    </div>
  );
}
