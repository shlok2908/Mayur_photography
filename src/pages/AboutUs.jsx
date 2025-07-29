import React from "react";

export default function AboutUs() {
  return (
    <div className="relative bg-white min-h-screen font-serif">
      {/* Banner Background with Heading Only */}
      <div className="w-full h-96 md:h-[440px] flex flex-col items-center justify-center relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
          alt="About us background"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-serif italic mt-20">
          About us
        </h1>
      </div>

      {/* Full-Color Portrait—NOT Transparent, No Overlay */}
      <div className="flex flex-col items-center -mt-28 md:-mt-40 mb-6 z-10 relative">
        <img
          src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
          className="w-64 h-80 object-cover border-4  "
          style={{opacity: 1, background: "none"}}
        />
      </div>

      {/* Name and role, direct on background */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mt-2 mb-1 text-gray-900">
          Priyanka Chopra
        </h2>
        <div className="text-[17px] text-gray-700 font-serif mb-7">
          Actress 
        </div>
      </div>

      {/* Bio section */}
      <div className="max-w-2xl mx-auto mt-2 px-5 pb-20">
        <p className="text-center text-base md:text-lg font-serif text-gray-800 font-light leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque optio perferendis, cumque qui quo magnam in ducimus voluptatum mollitia cupiditate ut saepe blanditiis atque. Distinctio fugiat unde obcaecati. Porro.
        </p>
      </div>
    </div>
  );
}
