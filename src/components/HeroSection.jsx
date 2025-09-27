import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

 
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.pexels.com/download/video/7578544/" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg"
        >
          Find Your Dream <span className="text-indigo-400">Home</span> Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto"
        >
          Explore premium properties in the best locations. Modern design, luxury amenities, and affordable prices await you.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <Link to="/properties">
          <motion.a
            
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-600 to-sky-500 shadow-lg hover:scale-105 transform transition"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            >
            View Properties <ArrowRight className="w-4 h-4" />
          </motion.a>
            </Link>

          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-white text-indigo-600 shadow-lg hover:bg-slate-100 hover:scale-105 transform transition"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-4 h-4" /> Contact Agent
          </motion.a>
        </motion.div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 inline-block bg-white/90 text-indigo-700 px-6 py-3 rounded-full font-medium shadow-lg backdrop-blur"
        >
          Over 200+ Properties Available
        </motion.div>
      </div>
    </section>
  );
}