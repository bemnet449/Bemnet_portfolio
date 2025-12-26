"use client";

import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import Brain from "@/components/brain";
import { FaReact, FaNodeJs, FaGithub, FaPython, FaJava, FaDocker, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiNetlify, SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiFigma, SiFirebase, SiPhp, SiFlutter, SiExpress, SiBootstrap, SiLaravel, SiOpensourceinitiative, SiSocketdotio, SiGraphql, SiAngular } from "react-icons/si";

const techIconMap = {
  React: <FaReact className="text-4xl text-blue-500" />,
  "React.js": <FaReact className="text-4xl text-blue-500" />,
  "React Native": <FaReact className="text-4xl text-blue-400" />,
  "Next.js": <SiNextdotjs className="text-4xl text-gray-800" />,
  Tailwind: <SiTailwindcss className="text-4xl text-cyan-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-4xl text-cyan-500" />,
  Vercel: <SiVercel className="text-4xl text-black" />,
  Netlify: <SiNetlify className="text-4xl text-green-500" />,
  Node: <FaNodeJs className="text-4xl text-green-700" />,
  "Node.js": <FaNodeJs className="text-4xl text-green-700" />,
  Express: <SiExpress className="text-4xl text-gray-700" />,
  "Express.js": <SiExpress className="text-4xl text-gray-700" />,
  MongoDB: <SiMongodb className="text-4xl text-green-600" />,
  PostgreSQL: <SiPostgresql className="text-4xl text-blue-700" />,
  SQL: <SiPostgresql className="text-4xl text-blue-700" />,
  Figma: <SiFigma className="text-4xl text-pink-500" />,
  Firebase: <SiFirebase className="text-4xl text-yellow-500" />,
  Docker: <FaDocker className="text-4xl text-blue-400" />,
  GitHub: <FaGithub className="text-4xl text-gray-800" />,
  Git: <FaGithub className="text-4xl text-gray-800" />,
  "Open Source": <SiOpensourceinitiative className="text-4xl text-black" />,
  TypeScript: <SiTypescript className="text-4xl text-blue-600" />,
  JavaScript: <SiJavascript className="text-4xl text-yellow-400" />,
  PHP: <SiPhp className="text-4xl text-indigo-700" />,
  Python: <FaPython className="text-4xl text-yellow-600" />,
  Java: <FaJava className="text-4xl text-red-700" />,
  "C++": <span className="text-4xl font-bold text-blue-800">C++</span>,
  Flutter: <SiFlutter className="text-4xl text-blue-400" />,
  Bootstrap: <SiBootstrap className="text-4xl text-purple-700" />,
  Laravel: <SiLaravel className="text-4xl text-red-600" />,
  "Mantine UI": <span className="text-4xl font-bold text-purple-500">Mantine</span>,
  Axios: <span className="text-4xl font-bold text-red-500">Axios</span>,
  "Socket.IO": <SiSocketdotio className="text-4xl text-black" />,
  Cloudinary: <span className="text-4xl font-bold text-blue-600">Cloudinary</span>,
  AngularJS: <SiAngular className="text-4xl text-red-600" />,
  "AWS S3": <FaAws className="text-4xl text-orange-500" />,
  GraphQL: <SiGraphql className="text-4xl text-pink-600" />,
  "ASP.NET": <span className="text-4xl font-bold text-blue-600">.NET</span>,
};

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  // Skill categories
  const skills = {
    Frontend: ["React.js", "Next.js", "React Native", "Flutter", "AngularJS", "Tailwind CSS", "Bootstrap", "Figma"],
    Backend: ["Node.js", "Express.js", "ASP.NET", "Laravel", "GraphQL", "MongoDB", "PostgreSQL", "SQL"],
    DevOps: ["AWS S3", "Firebase", "Docker", "Git"],
    Other: ["JavaScript", "TypeScript", "PHP", "Python", "Java", "C++"],
  };

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
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2 items-center">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center items-center max-w-3xl">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-3xl sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ABOUT ME
            </h1>

            {/* BIOGRAPHY DESC */}
            <p className="text-lg sm:text-xl text-gray-600 text-center leading-relaxed">
              I am a committed and versatile full-stack developer with a solid foundation in Computer Science.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 text-center leading-relaxed">
              I specialize in modern web and mobile application development, utilizing advanced technologies to deliver dynamic, responsive, and user-focused solutions.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 text-center leading-relaxed">
              With over 3 years of professional experience, successfully completing 10+ projects and collaborating with multiple satisfied clients, I bring expertise across both front-end and back-end development to build seamless, high-quality applications.
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
          <div className="flex flex-col gap-12 justify-center mb-20 w-full max-w-5xl" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="font-bold text-2xl sm:text-3xl text-center text-gray-800"
            >
              SKILLS
            </motion.h1>

            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="mb-12">
                <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6 text-center">
                  {category}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skillList.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-center gap-3 w-full text-base sm:text-lg font-medium text-gray-800 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isSkillRefInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: (index * 0.2) + (skillIndex * 0.1), duration: 0.5, ease: "easeOut" }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {techIconMap[skill] && <span className="flex-shrink-0">{techIconMap[skill]}</span>}
                      <span className="truncate text-center">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
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