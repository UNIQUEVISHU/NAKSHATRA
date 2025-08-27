import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

import logo from "./assets/blue.png";
import bgImage from "./assets/astro.jpeg";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 md:bg-black/60"></div>

      {/* HEADER */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] flex justify-between items-center px-4 md:px-6 py-3 bg-gray-800/50 backdrop-blur-md rounded-full shadow-lg z-50 border border-gray-700/50">
        
        {/* LOGO */}
        <div
          className="flex items-center gap-2 md:gap-3 cursor-pointer"
          onClick={() => setActivePage("home")}
        >
          <img
            src={logo}
            alt="Nakshatra Logo"
            className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg cursor-pointer"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-cyan-400 font-[Orbitron] drop-shadow-lg cursor-pointer">
            NAKSHATRA
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-4 lg:gap-6 text-sm md:text-lg font-semibold text-white">
          {["home", "about", "events", "gallery", "contact"].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`hover:text-cyan-400 transition cursor-pointer ${
                activePage === page ? "text-cyan-400" : ""
              }`}
            >
              {page.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 md:hidden cursor-pointer"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-16 right-4 bg-gray-900/95 backdrop-blur-lg px-6 py-4 flex flex-col items-center gap-4 z-50 shadow-xl rounded-xl border border-gray-700"
            style={{ width: "auto", minWidth: "180px" }}
          >
            {["home", "about", "events", "gallery", "contact"].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setActivePage(page);
                  setMenuOpen(false);
                }}
                className="text-white text-lg font-semibold hover:text-cyan-400 cursor-pointer"
              >
                {page.toUpperCase()}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <main className="relative z-10 text-white text-center pt-32 md:pt-40 pb-20 px-4 flex-grow">
        <AnimatePresence mode="wait">
          {activePage === "home" && (
            <motion.section
              key="home"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              <img
                src={logo}
                alt="Nakshatra Logo"
                className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto mb-4 sm:mb-6 mx-auto object-contain drop-shadow-xl cursor-pointer"
              />

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 leading-snug">
                Welcome to Nakshatra
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-semibold mb-4 sm:mb-6"
              >
                The Astronomy and Mathematics Society of NSUT
              </motion.p>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-2 sm:px-4">
                Dive into the cosmos with the Astronomy Society of NSUT
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-lg sm:text-xl font-semibold rounded-full shadow-lg transition cursor-pointer"
                onClick={() => setActivePage("events")}
              >
                Explore Events
              </motion.button>
            </motion.section>
          )}

          {activePage === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <About />
            </motion.div>
          )}

          {activePage === "events" && (
            <motion.div
              key="events"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Events />
            </motion.div>
          )}

          {activePage === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Gallery />
            </motion.div>
          )}

          {activePage === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center py-4 mt-auto rounded-t-3xl shadow-2xl">
        <p className="text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} Nakshatra - All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
