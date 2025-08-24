import React from "react";
import { motion } from "framer-motion";

export default function EventDetail({ event, onBack }) {
  if (!event) return null;

  return (
    <section className="relative bg-gray-900 text-white py-16 px-6 md:px-20 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg" />
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          {event.title}
        </h2>
        <p className="text-gray-400 mb-4 text-lg">{event.date}</p>
        <p className="text-gray-300 text-lg leading-relaxed">{event.description}</p>
        <button
          onClick={onBack}
          className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg"
        >
          Back to Events
        </button>
      </motion.div>
    </section>
  );
}
