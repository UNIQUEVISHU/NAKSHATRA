import React from "react";
import { motion } from "framer-motion";

export default function EventDetail({ event, onBack }) {
  if (!event) return null;

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white py-16 px-6 md:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-gray-800/80 p-8 rounded-2xl shadow-2xl"
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
        />
        <h2 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
          {event.title}
        </h2>
        <p className="text-gray-300 mb-4 text-lg italic">{event.date}</p>
        <p className="text-gray-200 text-lg leading-relaxed mb-6">{event.description}</p>
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 rounded-full shadow-lg text-white font-semibold"
        >
          Back to Events
        </motion.button>
      </motion.div>
    </section>
  );
}
