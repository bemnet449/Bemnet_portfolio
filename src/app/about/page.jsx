"use client";
import Image from "next/image";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center items-center">
            {/* BIOGRAPHY IMAGE */}
            <div className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg">
              <Image 
                src="/2.jpg" 
                alt="Profile Image" 
                width={400} 
                height={400} 
                className="object-cover w-full h-full"
              />
            </div>

            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">ABOUT ME</h1>

            {/* BIOGRAPHY DESC */}
            <p className="text-lg text-center">
              I am a dedicated and versatile full-stack developer with a strong foundation in Computer Science.
            </p>
            <p className="text-lg text-center">
              I am passionate about modern web and mobile app development, leveraging cutting-edge technologies to create dynamic, responsive, and user-friendly applications.
            </p>
            <p className="text-lg text-center">
              With 2+ years of experience, I have accumulated over 4,000+ coding hours, completed 10+ projects, and worked with multiple satisfied clients. My expertise spans both front-end and back-end development, allowing me to create seamless and responsive applications.
            </p>

            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILL SECTION */}
          <div className="flex flex-col gap-12 justify-center mb-20" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                "React.js", "Next.js", "React Native", "Flutter", 
"Node.js", "Express.js", "ASP.NET", "Laravel", "AWS S3", "Firebase", "Docker",
"MongoDB", "PostgreSQL", "SQL",
"Tailwind CSS", "Bootstrap", "Figma",
"Git",
"JavaScript", "TypeScript", "PHP", "Python", "Java", "C++"

              ].map((skill) => (
                <div
                  key={skill}
                  className="p-6 border rounded-lg shadow-lg w-36 h-36 flex items-center justify-center text-lg font-semibold transition-all duration-300 ease-in-out 
                    hover:bg-black hover:text-white hover:scale-105"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;