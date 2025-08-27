import React from "react";
import { motion } from "framer-motion";

import event1Img from "../assets/event1.jpg";
import event2Img from "../assets/event2.jpg";
import event3Img from "../assets/event3.jpg";
import event4Img from "../assets/event4.jpg";

export default function Events({ onSelectEvent }) {
  const Activities = [
    {
      id: 1,
      title: "Astronomy Calender",
      date: "2025-09-10",
      description: "Stargazing and telescope observation night.",
      image: event1Img,
    },
    {
      id: 2,
      title: "Linear Regression",
      date: "2025-10-15",
      description:
        "This isn't just another math lesson - it's how traders turn historical data into future profits.",
      image: event2Img,
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Spacecon",
      date: "2024-04-08",
      description: (
        <>
          Annual Inter-College Space Science & Technology Conclave of NSUT, Delhi Organized by{" "}
          <span className="text-white font-extrabold">Nakshatra</span>
        </>
      ),
      image: event4Img,
    },
    {
      id: 3,
      title: "Stargazing",
      date: "2025-11-05",
      description:
        "Our telescope will be set up for you to explore celestial beauties planets, stars, and beyond! Whether you're an astronomy enthusiast or just curious, this is your chance to see the universe like never before",
      image: event3Img,
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white py-16 px-6 md:px-20">
      <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
        Events & Activities
      </h2>

      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-8 text-blue-400">Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Activities.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-gray-800/70 rounded-2xl shadow-2xl hover:shadow-blue-500/40 transform hover:scale-105 transition-transform duration-500 cursor-pointer overflow-hidden"
              onClick={() => onSelectEvent(event)}
            >
              <div className="w-full h-80 md:h-96 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-bold mb-1 text-blue-300">{event.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{event.date}</p>
                <p className="text-gray-200 text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold mb-8 text-cyan-400">Past Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-gray-800/70 rounded-2xl shadow-2xl hover:shadow-cyan-500/40 transform hover:scale-105 transition-transform duration-500 cursor-pointer overflow-hidden"
              onClick={() => onSelectEvent(event)}
            >
              <div className="w-full h-80 md:h-96 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-bold mb-1 text-cyan-300">{event.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{event.date}</p>
                <p className="text-gray-200 text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
