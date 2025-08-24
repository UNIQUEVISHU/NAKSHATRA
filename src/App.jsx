import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";

import About from "./components/About";
import Events from "./components/Events";
import EventDetail from "./components/EventDetail";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import BackgroundEffects from "./components/BackgroundEffects"; // ✅ New Background Component
import logo from "./assets/blue.png";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // ✅ Background symbols for each page
  const pageSymbols = {
    home: [
      { symbol: "★", color: "text-blue-400", size: "text-2xl", top: "20%", left: "10%" },
      { symbol: "✦", color: "text-cyan-400", size: "text-xl", top: "70%", left: "80%" },
      { symbol: "✧", color: "text-purple-400", size: "text-3xl", top: "40%", left: "50%" }
    ],
    about: [
      { symbol: "∑", color: "text-purple-400", size: "text-3xl", top: "25%", left: "15%" },
      { symbol: "π", color: "text-blue-400", size: "text-4xl", top: "65%", left: "70%" },
      { symbol: "∞", color: "text-cyan-400", size: "text-2xl", top: "50%", left: "40%" }
    ],
    events: [
      { symbol: "★", color: "text-pink-400", size: "text-3xl", top: "35%", left: "20%" },
      { symbol: "✦", color: "text-purple-400", size: "text-2xl", top: "75%", left: "60%" }
    ],
    gallery: [
      { symbol: "📷", color: "text-blue-400", size: "text-4xl", top: "30%", left: "30%" },
      { symbol: "✦", color: "text-cyan-400", size: "text-2xl", top: "60%", left: "75%" }
    ],
    contact: [
      { symbol: "✉", color: "text-purple-400", size: "text-4xl", top: "40%", left: "25%" },
      { symbol: "☎", color: "text-cyan-400", size: "text-3xl", top: "70%", left: "65%" }
    ]
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col relative">
        
        {/* Background Effect */}
        <BackgroundEffects symbols={pageSymbols[activePage]} />

        {/* Header */}
        <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-gray-800/70 backdrop-blur-md shadow-md z-50">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setActivePage("home")}
          >
            <img src={logo} alt="Nakshatra Logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-2xl font-bold text-cyan-400">Nakshatra</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-lg ml-auto">
            <button onClick={() => setActivePage("home")}>Home</button>
            <button onClick={() => setActivePage("about")}>About</button>
            <button onClick={() => setActivePage("events")}>Events</button>
            <button onClick={() => setActivePage("gallery")}>Gallery</button>
            <button onClick={() => setActivePage("contact")}>Contact</button>
          </nav>
          <div className="flex items-center ml-6 gap-4">
            <button onClick={toggleDarkMode}>
              {darkMode ? <Sun /> : <Moon />}
            </button>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-gray-800 flex flex-col items-center gap-4 py-6 md:hidden mt-16">
            <button onClick={() => { setActivePage("home"); setMenuOpen(false); }}>Home</button>
            <button onClick={() => { setActivePage("about"); setMenuOpen(false); }}>About</button>
            <button onClick={() => { setActivePage("events"); setMenuOpen(false); }}>Events</button>
            <button onClick={() => { setActivePage("gallery"); setMenuOpen(false); }}>Gallery</button>
            <button onClick={() => { setActivePage("contact"); setMenuOpen(false); }}>Contact</button>
          </div>
        )}

        {/* Main Content with Animation */}
        <main className="flex-grow pt-20 px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {activePage === "home" && (
                <section className="flex flex-col items-center justify-center text-center h-[80vh]">
                  <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-6">
                    NAKSHATRA
                  </h1>
                  <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mb-8">
                    Explore the mysteries of <span className="text-cyan-400">Cosmos</span> & the elegance of <span className="text-blue-400">Mathematics</span>.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold rounded-full shadow-lg"
                    onClick={() => setActivePage("events")}
                  >
                    Explore Events
                  </motion.button>
                </section>
              )}

              {activePage === "about" && <About />}
              {activePage === "events" && (
                selectedEvent ? (
                  <EventDetail event={selectedEvent} onBack={() => setSelectedEvent(null)} />
                ) : (
                  <Events onSelectEvent={(event) => setSelectedEvent(event)} />
                )
              )}
              {activePage === "gallery" && <Gallery />}
              {activePage === "contact" && <Contact />}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-center py-4 mt-6">
          <p className="text-gray-400">&copy; 2025 Nakshatra Club. All Rights Reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <Instagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Linkedin />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
