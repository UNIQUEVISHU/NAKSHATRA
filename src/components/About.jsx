import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative px-6 py-20 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white min-h-screen flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:22px_22px]" />
        <span className="absolute text-indigo-400 text-6xl animate-float top-12 left-10 opacity-30">∞</span>
        <span className="absolute text-pink-400 text-7xl animate-float2 top-40 right-12 opacity-25">∑</span>
        <span className="absolute text-green-400 text-5xl animate-float3 bottom-16 left-24 opacity-30">π</span>
        <span className="absolute text-yellow-400 text-6xl animate-float bottom-28 right-28 opacity-35">+</span>
        <span className="absolute text-cyan-400 text-6xl animate-float3 top-56 left-1/3 opacity-30">√</span>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 z-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-500 animate-gradient-x"
      >
        About Nakshatra
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl text-center mb-12 z-10 leading-relaxed"
      >
        <strong className="text-cyan-400">Nakshatra</strong> is a vibrant student-driven society at NSUT that explores the wonders of 
        <span className="text-pink-400 font-semibold"> Astronomy</span> and 
        <span className="text-indigo-400 font-semibold"> Mathematics</span>. Our mission is to make learning interactive, engaging, and full of cosmic curiosity.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl z-10 w-full px-4">
        {[
          {
            title: "Astronomy",
            color: "text-blue-400",
            desc: "Discover black holes, wormholes, and stellar mysteries through workshops and stargazing nights."
          },
          {
            title: "Mathematics",
            color: "text-pink-400",
            desc: "Explore paradoxes, cryptography, and natural patterns that reveal the beauty of logic."
          },
          {
            title: "Technology",
            color: "text-cyan-400",
            desc: "Dive into modern innovations and futuristic ideas shaping science and space exploration."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 + index * 0.3 }}
            className="backdrop-blur-xl bg-gray-800/50 border border-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300"
          >
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${item.color} hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] transition`}>
              {item.title}
            </h2>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-14 text-gray-300 text-center max-w-3xl text-base sm:text-lg md:text-xl z-10 px-4 leading-relaxed"
      >
        Our mission is to ignite <span className="text-blue-400 font-semibold">curiosity</span>, build 
        <span className="text-pink-400 font-semibold"> problem-solving skills</span>, and foster a community passionate about 
        <span className="text-cyan-400 font-semibold"> exploring the unknown</span>.
      </motion.p>
    </section>
  );
};

export default About;
