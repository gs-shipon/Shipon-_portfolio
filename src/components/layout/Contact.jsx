import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hehg1cz",   
        "template_cydngkr",  
        form.current,
        "public_key"   
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsg("Message Sent Successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMsg("Failed to send ❌");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-5 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Info */}
          <div className="space-y-6">
            <p className="text-gray-300">
              Feel free to contact me for any project or collaboration.
            </p>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-cyan-400" />
              <span>+880123456789</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400" />
              <span>your@email.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>Bangladesh</span>
            </div>
          </div>

          {/* Right Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-gray-800 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-gray-800 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 rounded bg-gray-800 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded bg-gray-800 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-cyan-400 text-black px-6 py-3 rounded font-semibold hover:bg-cyan-300 transition"
            >
              Send Message
            </button>

            {msg && <p className="text-sm mt-2">{msg}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;