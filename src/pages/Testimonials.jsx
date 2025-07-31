import React from "react";

// --- Container 1: Image Left, Text Right ---
function TestimonialLeft({ name, image, text }) {
  return (
    <div className="pt-[64px] sm:pt-10 grid grid-cols-1 md:grid-cols-2 items-stretch gap-0 md:gap-10">
      {/* 🖼️ Image */}
      <div className="overflow-hidden h-40 sm:h-52 md:h-auto rounded-tr-[80px] md:rounded-tr-[150px]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* 📄 Text */}
      <div className="bg-[#c7c9bb]
                  rounded-bl-[60px] md:rounded-bl-none 
                  md:rounded-tl-[150px]
                  p-3 sm:p-4 md:p-10 
                  flex flex-col justify-center min-h-[180px] sm:min-h-[220px] md:min-h-[240px]
                  overflow-hidden relative">
        <h2 className="text-base sm:text-lg md:text-3xl font-serif text-black mb-2 sm:mb-4">
          {name}
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed text-black">
          {text}
        </p>
      </div>
    </div>
  );
}

// --- Container 2: Image Right, Text Left ---
function TestimonialRight({ name, image, text }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-0 md:gap-10">
      {/* 📄 Text */}
      <div className="bg-[#c7c9bb]
                  rounded-br-[60px] md:rounded-br-none
                  md:rounded-tr-[150px]
                  md:rounded-tl-none
                  p-3 sm:p-4 md:p-10 
                  flex flex-col justify-center min-h-[180px] sm:min-h-[220px] md:min-h-[240px]
                  order-2 md:order-1
                  overflow-hidden relative">
        <h2 className="text-base sm:text-lg md:text-3xl font-serif text-black mb-2 sm:mb-4">
          {name}
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed text-black">
          {text}
        </p>
      </div>

      {/* 🖼️ Image */}
      <div className="overflow-hidden h-40 sm:h-52 md:h-auto 
                      rounded-tl-[80px] md:rounded-tl-[150px]
                      order-1 md:order-2">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

// Testimonials array
const testimonials = [
  {
    name: "Chandni & Jainish",
    image: "https://images.unsplash.com/photo-1620325867502-221cfb5faa5f",
    text: "Working with Oragraphy and especially with Yogi as a friend was amazing. He takes care of everything like a family member. My journey with Yogi started with a hiccup, but I was totally amazed by how the photoshoot pictures turned out. The execution was really worth it.",
  },
  {
    name: "Kit & Shlok",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    text: "Oragraphy is very professional. From the beginning, they understood our needs, and everything zoomed into focus. The pictures were creative and beautiful, making the entire experience enjoyable. I highly recommend them to anyone getting married.",
  },
  {
    name: "Amisha & Priyesh",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    text: "A couple of months before the wedding, we knew Yogi would understand our vision. The photos are stunning and the whole experience was seamless. To future brides and grooms, don’t hesitate—choose Oragraphy.",
  },
];

// Main component
export default function AlternatingTestimonials() {
  return (
    <div className="min-h-screen bg-white py-6 sm:py-12 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16 md:space-y-24">
        {testimonials.map((testimonial, idx) =>
          idx % 2 === 0 ? (
            <TestimonialLeft key={testimonial.name} {...testimonial} />
          ) : (
            <TestimonialRight key={testimonial.name} {...testimonial} />
          )
        )}
      </div>
    </div>
  );
}
