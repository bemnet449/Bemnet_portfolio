"use client";

import Image from "next/image";
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
      <div className="h-full flex flex-col lg:flex-row px-2 sm:px-4 md:px-8 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER - Centered on Small Screens */}
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[75vh] relative mt-4 rounded-2xl shadow-2xl shadow-black overflow-hidden 
          flex sm:justify-center lg:justify-start">
          <div className="w-full sm:w-3/4 md:w-full lg:w-full h-full relative">
            <Image 
              src="/1.jpg" 
              alt="Hero Image" 
              layout="fill" 
              objectFit="cover"
            />
          </div>
        </div>
        
        {/* TEXT CONTAINER */}
        <div className="h-auto flex flex-col gap-4 sm:gap-6 items-center justify-center text-center lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide">
            BEMNET SINTAYEHU
          </h1>
          
          {/* SUBTITLE */}
          <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-gray-700">
            FULL STACK WEB & MOBILE APP DEVELOPER & UI/UX DESIGNER
          </h3>
          
          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
            <Link href="/portfolio">
              <button className="px-6 py-3 rounded-lg ring-1 ring-black bg-black text-white text-lg font-medium transition hover:bg-gray-900">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-3 rounded-lg ring-1 ring-black text-black text-lg font-medium transition hover:bg-gray-100">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
