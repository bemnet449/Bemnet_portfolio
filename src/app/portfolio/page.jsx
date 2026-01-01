"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaPython, FaJava, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiNetlify, SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiFigma, SiFirebase, SiPhp, SiFlutter, SiExpress, SiBootstrap, SiLaravel, SiOpensourceinitiative, SiSocketdotio } from "react-icons/si";
import Image from "next/image";

const techIconMap = {
  React: <FaReact className="inline mr-1 text-blue-500" />,
  "React.js": <FaReact className="inline mr-1 text-blue-500" />,
  "React Native": <FaReact className="inline mr-1 text-blue-400" />,
  "Next.js": <SiNextdotjs className="inline mr-1 text-gray-800" />,
  Tailwind: <SiTailwindcss className="inline mr-1 text-cyan-500" />,
  "Tailwind CSS": <SiTailwindcss className="inline mr-1 text-cyan-500" />,
  Vercel: <SiVercel className="inline mr-1 text-black" />,
  Netlify: <SiNetlify className="inline mr-1 text-green-500" />,
  Node: <FaNodeJs className="inline mr-1 text-green-700" />,
  "Node.js": <FaNodeJs className="inline mr-1 text-green-700" />,
  Express: <SiExpress className="inline mr-1 text-gray-700" />,
  "Express.js": <SiExpress className="inline mr-1 text-gray-700" />,
  MongoDB: <SiMongodb className="inline mr-1 text-green-600" />,
  PostgreSQL: <SiPostgresql className="inline mr-1 text-blue-700" />,
  SQL: <SiPostgresql className="inline mr-1 text-blue-700" />,
  Figma: <SiFigma className="inline mr-1 text-pink-500" />,
  Firebase: <SiFirebase className="inline mr-1 text-yellow-500" />,
  Docker: <FaDocker className="inline mr-1 text-blue-400" />,
  GitHub: <FaGithub className="inline mr-1 text-gray-800" />,
  "Open Source": <SiOpensourceinitiative className="inline mr-1 text-black" />,
  TypeScript: <SiTypescript className="inline mr-1 text-blue-600" />,
  JavaScript: <SiJavascript className="inline mr-1 text-yellow-400" />,
  PHP: <SiPhp className="inline mr-1 text-indigo-700" />,
  Python: <FaPython className="inline mr-1 text-yellow-600" />,
  Java: <FaJava className="inline mr-1 text-red-700" />,
  "C++": <span className="inline mr-1 font-bold text-blue-800">C++</span>,
  Flutter: <SiFlutter className="inline mr-1 text-blue-400" />,
  Bootstrap: <SiBootstrap className="inline mr-1 text-purple-700" />,
  Laravel: <SiLaravel className="inline mr-1 text-red-600" />,
  "Mantine UI": <span className="inline mr-1 font-bold text-purple-500">Mantine</span>,
  Axios: <span className="inline mr-1 font-bold text-red-500">Axios</span>,
  "Socket.IO": <SiSocketdotio className="inline mr-1 text-black" />,
  Cloudinary: <span className="inline mr-1 font-bold text-blue-600">Cloudinary</span>,
};

const PROJECTS = [

  {
    title: "Sabawiyan Leather",
    description: "A premium Ethiopian brand crafting high-quality, handcrafted leather products. Merging traditional heritage with modern aesthetics to offer durable, customized bags and accessories.",
    image: "/sabawian-leather.png",
    link: "https://www.sabawiyan.com/",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Keeley Aesthetics",
    description: "A professional aesthetic clinic website showcasing tailored beauty treatments, laser therapies, and skincare services. Features a clean, elegant design with booking integration to highlight the clinic’s expertise.",
    image: "/keeley-aesthetics.png",
    link: "https://keeleyaesthetics.co.uk/",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Merkato Market",
    description: "A comprehensive e-commerce marketplace connecting customers with unique, ethical, and sustainable products. Features a seamless shopping experience, secure payments, and diverse product categories.",
    image: "/Merkato.png",
    link: "https://merkatomarket.com/",
    technologies: ["Next.js", "Redux", "Tailwind CSS"],
  },
  {
    title: "TravelBuddy",
    description: "A full-stack travel companion web app with real-time chat, detailed trip planning, flight integration, and trust-based user scoring. Designed to help users discover trips and safely connect with potential travel partners.",
    image: "/TravelBuddy.png",
    link: "https://travel-buddy-ten-theta.vercel.app/auth",
    codeLink: "https://github.com/bemnet449/Industrial_Project",
    technologies: ["React", "Tailwind CSS", "Mantine UI", "Axios", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Cloudinary"],
  },
  {
    title: "Archive Management System",
    description: "A web-based offline Archive Management System for organizing, tracking, and managing files and folders. Features include folder creation, file movement tracking, and file metadata management. Ideal for industries needing efficient file organization, status monitoring, and easy retrieval of archived data.",
    image: "/ette.png",
    codeLink: "https://github.com/bemnet449/Archive-Management-System",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  },



];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-100 to-red-100 border-b border-neutral-900 pb-4 flex flex-col">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl my-20 font-bold text-gray-800 drop-shadow-lg"
      >
        My Projects
        <br />
      </motion.h2>
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-16 w-full max-w-7xl mx-auto">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group overflow-hidden h-48 sm:h-56">
                {project.link ? (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </Link>
                ) : (
                  <div className="h-full w-full">
                    <Image
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                )}
                {index < 4 && (
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-green-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-green-100">
                    Full-Stack
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                {project.link ? (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block w-fit">
                    <h6 className="text-xl font-bold mb-2 text-gray-900 hover:text-blue-600 transition-colors">
                      {project.title}
                    </h6>
                  </Link>
                ) : (
                  <h6 className="text-xl font-bold mb-2 text-gray-900">
                    {project.title}
                  </h6>
                )}

                <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 8).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-50 text-gray-600 text-[10px] uppercase font-medium px-2 py-1 rounded-md border border-gray-200 flex items-center gap-1"
                    >
                      {techIconMap[tech] || <FaGithub className="text-gray-400" />} {tech}
                    </span>
                  ))}
                  {project.technologies.length > 8 && (
                    <span className="text-xs text-gray-400 self-center">+{project.technologies.length - 8}</span>
                  )}
                </div>

                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-50">
                  {project.link ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
                    >
                      Visit Site
                      <SiVercel className="text-xs group-hover:text-white transition-colors" />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="flex-1 bg-gray-100 text-gray-400 text-sm font-medium py-2.5 px-4 rounded-lg cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Offline Only
                    </button>
                  )}

                  {project.codeLink && (
                    <Link
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white text-gray-700 border border-gray-200 text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-gray-50 hover:text-black transition-colors flex items-center justify-center gap-2"
                    >
                      <FaGithub className="text-lg" /> Code
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div >
  );
};

export default PortfolioPage;