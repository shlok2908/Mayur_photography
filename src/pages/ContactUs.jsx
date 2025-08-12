import { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import TextareaAutosize from "react-textarea-autosize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    wedding_date: "",
    no_of_days: "",
    location: "",
    event_details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
      phone_number: phone,
    };

    emailjs
      .send(
        "service_ow3kmai",
        "template_q53ddfg",
        templateParams,
        "6knvHKfXlHZfBtblS"
      )
      .then(() => {
        toast.success("Enquiry sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setFormData({
          user_name: "",
          user_email: "",
          wedding_date: "",
          no_of_days: "",
          location: "",
          event_details: "",
        });
        setPhone("");
      })
      .catch((error) => {
        console.error("Email send error:", error);
        toast.error("Failed to send enquiry. Please try again.", {
          position: "top-right",
          autoClose: 4000,
        });
      });
  };

  return (
    <div className="bg-[#ede3d7] min-h-screen content-below-navbar">
      {/* Toast Container */}
      <ToastContainer />

      {/* Hero Image */}
      <img
        src="/images/contact-hero.png"
        alt="Contact Hero"
        className="w-full object-cover max-h-[600px]"
      />

      {/* Intro Text */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-sm md:text-base font-light space-y-6">
        <p>
          Mayur Makwana Photography & Team is a Gujarat-based wedding
          photography and cinematography studio, founded by Mayur
          Makwana in 2018. We specialize in capturing timeless love stories
          across India and beyond.
          Passionate about storytelling, we take pride in creating stunning
          visual memories that truly reflect the essence of each wedding.
        </p>
        <p>
          Please complete the form below and provide as many details as possible to help us create an accurate estimate. We aim to respond within 48 hours. If you do not hear from us or if it is an urgent inquiry, please call us at the number below.
        </p>
      </div>

      {/* Form */}
      <div className="flex justify-center px-4 pb-16">
        <form
          onSubmit={sendEmail}
          className="w-full max-w-2xl space-y-6 text-[#3b3b3b] text-sm font-light"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name*"
            required
            value={formData.user_name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-black focus:outline-none py-2 placeholder:text-[#3b3b3b]/50"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email*"
            required
            value={formData.user_email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-black focus:outline-none py-2 placeholder:text-[#3b3b3b]/50"
          />

          <PhoneInput
            country="in"
            value={phone}
            onChange={setPhone}
            inputProps={{ name: "phone_number", required: true }}
            inputClass="!bg-transparent !border-0 !border-b !border-black !w-full !text-sm !text-[#3b3b3b]/60 !font-light placeholder:text-[#3b3b3b]/50"
            buttonClass="!bg-transparent !border-none"
            dropdownClass="!text-sm"
            placeholder="Whatsapp No.*"
          />

          <TextareaAutosize
            name="event_details"
            placeholder="Tell us more about your wedding – event flow, venues.*"
            required
            value={formData.event_details}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-black focus:outline-none py-2 resize-none placeholder:text-[#3b3b3b]/50"
          />

          <input
            type="text"
            name="location"
            placeholder="Location of the wedding*"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-black focus:outline-none py-2 placeholder:text-[#3b3b3b]/50"
          />

          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="date"
              name="wedding_date"
              required
              value={formData.wedding_date}
              onChange={handleChange}
              className="flex-1 bg-transparent border-b border-black focus:outline-none py-2 placeholder:text-[#3b3b3b]/50"
            />

            <select
              name="no_of_days"
              required
              value={formData.no_of_days}
              onChange={handleChange}
              className="flex-1 bg-transparent border-b border-black focus:outline-none py-2 placeholder:text-[#3b3b3b]/50"
            >
              <option value="" disabled>
                No. of Days*
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>More than 3</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="bg-[#b49c64]  px-6 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
