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
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="Hero Image" fill className="object-contain" />
        </div>
        
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center text-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
            BEMNET SINTAYEHU
          </h1>
          
          {/* SUBTITLE */}
          <h3 className="text-lg md:text-2xl font-semibold text-gray-700">
            FULL STACK WEB & MOBILE APP DEVELOPER & UI/UX DESIGNER
          </h3>
          
          {/* BUTTONS */}
          <div className="flex gap-4 mt-4">
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
