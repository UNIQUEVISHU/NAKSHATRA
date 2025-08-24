import React from "react";
import { motion } from "framer-motion";

export default function Events({ onSelectEvent }) {
  const upcomingEvents = [
    { id: 1, title: "Astronomy Night", date: "2025-09-10", description: "Stargazing and telescope observation night.", image: "/blue.png" },
    { id: 2, title: "Math Olympiad", date: "2025-10-15", description: "A thrilling competition for math enthusiasts.", image: "/blue.png" },
    { id: 3, title: "Space Quiz", date: "2025-11-05", description: "Test your space knowledge in a fun quiz!", image: "/blue.png" },
  ];

  const pastEvents = [
    { id: 4, title: "Eclipse Watch", date: "2024-04-08", description: "Solar eclipse observation session.", image: "/blue.png" },
    { id: 5, title: "Pi Day Celebration", date: "2024-03-14", description: "Celebrate mathematics with fun activities.", image: "/blue.png" },
  ];

  return (
    <section className="relative bg-gray-900 text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        Events & Activities
      </h2>

      {/* ✅ Upcoming Events */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-purple-400">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/40 transition cursor-pointer"
              onClick={() => onSelectEvent(event)}
            >
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-bold mb-2">{event.title}</h4>
              <p className="text-gray-400 mb-2">{event.date}</p>
              <p className="text-gray-300">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Past Events */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-pink-400">Past Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-pink-500/40 transition cursor-pointer"
              onClick={() => onSelectEvent(event)}
            >
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-bold mb-2">{event.title}</h4>
              <p className="text-gray-400 mb-2">{event.date}</p>
              <p className="text-gray-300">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
