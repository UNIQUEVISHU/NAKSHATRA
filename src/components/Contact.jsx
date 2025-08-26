import React, { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white py-16 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div>
          <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
            Contact Us
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Have questions, suggestions, or want to join our astronomy community? Fill out the form or reach us through the details below.
          </p>
          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-3"><MapPin /> NSUT Delhi, Nakshatra </p>
            <p className="flex items-center gap-3"><Phone /> +91 98765 43444</p>
            <p className="flex items-center gap-3"><Mail /> nakshatra@nsut.com</p>
          </div>
          <div className="flex gap-6 mt-6">
            <a href="https://www.facebook.com/Nakshatra.DU/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Facebook size={28} />
            </a>
            <a href="https://www.instagram.com/nakshatra_nsut?igshid=5qzqv4howx7u" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <Instagram size={28} />
            </a>
            <a href="https://www.linkedin.com/company/nakshatra-nsut/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Linkedin size={28} />
            </a>
          </div>
          <div className="mt-8 space-x-4">
            <a
              href="https://chat.whatsapp.com/BwPYiIWfbyk0RJJhLdd6X3?mode=r_c&fbclid=PAZXh0bgNhZW0CMTEAAaeAPytnIsPZ0FpbLnwY6WGW_271WPurZImW7xwpjQGa-XLYEb29M03WggrD4A_aem_y0zZA5Pg8oUQUWg0OgmDcg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 px-5 py-3 rounded-full text-white font-semibold hover:bg-green-600 transition"
            >
              Join WhatsApp
            </a>
            <a
              href="https://discord.com/invite/saXSByC9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 px-5 py-3 rounded-full text-white font-semibold hover:bg-indigo-600 transition"
            >
              Join Discord
            </a>
          </div>
        </div>
        <div className="bg-gray-800/80 p-8 rounded-2xl shadow-2xl backdrop-blur-lg">
          <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
