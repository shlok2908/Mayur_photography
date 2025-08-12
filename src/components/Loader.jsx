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
      />
    </div>
  );
}
