import React, { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import BackgroundEffects from "./BackgroundEffects"; // ✅ Added

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const contactSymbols = [
    { symbol: "✉", color: "text-cyan-400", size: "text-4xl", top: "10%", left: "20%" },
    { symbol: "∑", color: "text-purple-400", size: "text-4xl", top: "55%", left: "60%" },
    { symbol: "∞", color: "text-blue-400", size: "text-5xl", top: "80%", left: "35%" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative bg-gray-900 text-white py-16 px-6 md:px-20">
      {/* ✅ Background Animation */}
      <BackgroundEffects symbols={contactSymbols} />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-purple-400">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            Have questions, suggestions, or want to join our astronomy community? Fill the form or reach us through the details below.
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-3"><MapPin /> XYZ University, Astronomy Club</p>
            <p className="flex items-center gap-3"><Phone /> +91 98765 43210</p>
            <p className="flex items-center gap-3"><Mail /> nakshatra@university.com</p>
          </div>
          <div className="flex gap-6 mt-6">
            <a href="#" className="hover:text-purple-400"><Facebook size={28} /></a>
            <a href="#" className="hover:text-purple-400"><Instagram size={28} /></a>
            <a href="#" className="hover:text-purple-400"><Linkedin size={28} /></a>
          </div>
          <div className="mt-8 space-x-4">
            <a href="#" className="bg-green-500 px-5 py-3 rounded-full text-white font-semibold hover:bg-green-600">Join WhatsApp</a>
            <a href="#" className="bg-indigo-500 px-5 py-3 rounded-full text-white font-semibold hover:bg-indigo-600">Join Discord</a>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
