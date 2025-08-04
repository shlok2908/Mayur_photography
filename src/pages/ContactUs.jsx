import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function ContactUs() {
  return (
    <div className="pt-[64px] bg-[#f6ede3] text-black min-h-screen">
      {/* Hero Image */}
      <img
        src="/images/contact-hero.png" // replace with your actual image path
        className="w-full object-cover max-h-[600px]"
      />

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-center text-sm md:text-base mb-6">
        Mayur Makwana Photography & Team is a Gujarat-based wedding
        photography and cinematography studio, founded by Mayur
        Makwana in 2018. We specialize in capturing timeless love stories
        across India and beyond.
        Passionate about storytelling, we take pride in creating stunning
        visual memories that truly reflect the essence of each wedding.

        </p>
        <p className="text-center text-sm md:text-base mb-6">
          Please complete the form below and provide as many details as possible to help us create an accurate estimate. We aim to respond within 48 hours. If you do not hear from us or if it is an urgent inquiry, please call us at the number below.
        </p>


        <div className="min-h-screen flex justify-center items-center px-4 py-12">
        <form className="w-full max-w-2xl space-y-6 text-[#3b3b3b] text-sm font-light">
        {/* Name */}
        <input
          type="text"
          placeholder="Name*"
          className="w-full bg-transparent border-b border-black focus:outline-none py-2 placeholder:text-[#3b3b3b]/50"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email*"
          className="w-full bg-transparent border-b border-black focus:outline-none py-2 placeholder:text-[#3b3b3b]/50"
        />

       
        <PhoneInput
          country={'in'}
          inputClass="!bg-transparent !border-0 !border-b !border-black !w-full !text-sm !text-[#3b3b3b]/60 !font-light placeholder:text-[#3b3b3b]/50"
          buttonClass="!bg-transparent !border-none"
          dropdownClass="!text-sm"
          placeholder="Whatsapp No.*"
          disableCountryCode={false}      
          countryCodeEditable={false}  
        />



        {/* Event Flow */}
        <textarea
          placeholder="Tell us more about your wedding – event flow, venues.*"
          rows={2}
          className="w-full bg-transparent border-b border-black focus:outline-none py-2 resize-none placeholder:text-[#3b3b3b]/50"
        ></textarea>

        {/* Location */}
        <input
          type="text"
          placeholder="Location of the wedding*"
          className="w-full bg-transparent border-b border-black focus:outline-none py-2 placeholder:text-[#3b3b3b]/50"
        />

        {/* Date and Days */}
        <div className="flex flex-col sm:flex-row gap-6">
          <input
            type="text"
            placeholder="Wedding Date* (e.g. 31/12/2024)"
            className="flex-1 bg-transparent border-b border-black focus:outline-none py-2 placeholder:text-[#3b3b3b]/50"
          />
          <select
            className="flex-1 bg-transparent border-b border-black focus:outline-none py-2 text-[#3b3b3b]/50"
            defaultValue=""
          >
            <option value="" disabled>No. of Days*</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>More than 3</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex justify-center ">
          <button
            type="submit"
            className="bg-[#b49c64] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
      </div>
    </div>
  );
}
