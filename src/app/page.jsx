"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-6 sm:gap-8 items-center text-center max-w-3xl">
          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            BEMNET SINTAYEHU
          </h1>
          
          {/* SUBTITLE */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 leading-relaxed">
            FULL STACK WEB & MOBILE APP DEVELOPER & UI/UX DESIGNER
          </h3>
          
          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl">
            Crafting seamless digital experiences with innovative web and mobile solutions, paired with intuitive UI/UX design.
          </p>
          
          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/portfolio">
              <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white ring-1 ring-gray-300 text-gray-800 text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                Contact Me
              </button>
            </Link>
            <Link
              href="/Resume.pdf"
              download="Bemnet_Sintayehu_Resume.pdf"
            >
              <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Download Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;