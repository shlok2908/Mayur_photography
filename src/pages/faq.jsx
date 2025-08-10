import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Where are you based and how far can you travel?",
    answer:
      "We are based in India and available for travel across the globe. Whether it's a destination wedding or a local ceremony, we can be there."
  },
  {
    question: "How can we book you?",
    answer:
      "You can reach out via the contact form or directly email us at teammayurmakwana@gmail.com. We'll guide you through the process step by step."
  },
  {
    question: "What are your deliverables?",
    answer:
      "You will receive edited high-resolution photos, cinematic wedding films, and other content depending on the package you've chosen."
  },
  {
    question: "How much do you charge and what are the payment terms?",
    answer:
      "Our packages vary based on the scope of your event. We usually take a 50% advance to confirm the booking and the remaining before final delivery."
  },
  {
    question: "What are the delivery timelines?",
    answer:
      "Delivery time is around 3-4 weeks for photos and 6-8 weeks for videos. We take pride in quality, so each project is carefully crafted."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#ede3d7] min-h-screen py-12 sm:py-20 px-4 sm:px-8 lg:px-20 font-serif content-below-navbar">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-normal text-center mb-4 sm:mb-8 leading-snug">
          We’re here to answer all your questions
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-center mb-10 sm:mb-20  font-light max-w-2xl mx-auto">
          We try to answer all your questions here. If you have any further
          questions about Mayur Makwana Photography you can always contact us at{" "}
          <span className="font-semibold">teammayurmakwana@gmail.com</span>. We
          will respond to your inquiry as soon as possible.
        </p>

        {/* FAQ List */}
        <div className="divide-y divide-black/70">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4 sm:py-6">
                <button
                  onClick={() => toggle(index)}
                  className="flex items-center justify-between w-full text-left text-base sm:text-lg md:text-xl lg:text-2xl font-light"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100 mt-3 sm:mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-base md:text-lg  leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
