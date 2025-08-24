import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white min-h-screen flex flex-col items-center overflow-hidden">
      
      {/* Background Particles & Math Symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Star Grid */}
        <div className="absolute w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:22px_22px]" />

        {/* Floating Math Symbols */}
        <span className="absolute text-blue-400 text-6xl animate-float top-12 left-10 opacity-30">∞</span>
        <span className="absolute text-pink-400 text-7xl animate-float2 top-40 right-12 opacity-25">∑</span>
        <span className="absolute text-green-400 text-5xl animate-float3 bottom-16 left-24 opacity-30">π</span>
        <span className="absolute text-yellow-400 text-6xl animate-float bottom-28 right-28 opacity-35">+</span>
        <span className="absolute text-cyan-400 text-6xl animate-float3 top-56 left-1/3 opacity-30">√</span>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-400 to-cyan-400 mb-8 z-10"
      >
        About Nakshatra
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray-300 text-lg md:text-xl max-w-3xl text-center mb-12 z-10"
      >
        <strong className="text-blue-400">Nakshatra</strong> is a student-driven society at NSUT, exploring the depths of 
        <span className="text-pink-400"> Astronomy</span> and 
        <span className="text-cyan-400"> Mathematics</span>. We make learning fun, interactive, and full of cosmic curiosity.
      </motion.p>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl z-10">
        {[
          {
            title: "Astronomy",
            color: "blue-400",
            desc: "Discover black holes, wormholes, and stellar mysteries through workshops and events."
          },
          {
            title: "Mathematics",
            color: "pink-400",
            desc: "Explore paradoxes, cryptography, and natural patterns that reveal the beauty of logic."
          },
          {
            title: "Technology",
            color: "cyan-400",
            desc: "Dive into modern innovations and futuristic ideas shaping science and space exploration."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 + index * 0.3 }}
            className="backdrop-blur-lg bg-gray-800/30 border border-gray-700 rounded-xl p-8 shadow-xl hover:shadow-2xl hover:shadow-cyan-500 transition-all duration-300"
          >
            <h2 className={`text-3xl font-semibold mb-4 text-${item.color}`}>{item.title}</h2>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mission Statement */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-14 text-gray-400 text-center max-w-3xl text-lg z-10"
      >
        Our mission is to ignite curiosity, build problem-solving skills, and foster a community passionate about exploring the unknown.
      </motion.p>

      {/* CSS Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 12s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 14s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(15px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(-20px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(25px); }
        }
      `}</style>
    </section>
  );
};

export default About;
