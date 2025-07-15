"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaPython, FaJava, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiNetlify, SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiFigma, SiFirebase, SiPhp, SiFlutter, SiExpress, SiBootstrap, SiAmazonaws, SiLaravel, SiOpensourceinitiative } from "react-icons/si";

const PROJECTS = [
  {
    title: "Travel Advisor",
    description: "A full-stack travel guide application with interactive maps to locate banks, ATMs, and currency exchange points, featuring an AI-powered advisor for personalized recommendations, powered by a Node.js backend and MongoDB.",
    image: "/traveladvisor.png",
    link: "https://travel-advisor-anfx.vercel.app/",
    technologies: ["React", "Material-UI", "Node.js", "MongoDB", "RapidAPI"],
  },
  {
    title: "HealthyMe",
    description: "A full-stack health and wellness application for tracking daily nutrition and creating personalized meal plans, integrated with a Node.js backend and Firebase for real-time data storage.",
    image: "/healthyme.png",
    link: "https://healthymealme.netlify.app/",
    technologies: ["React", "Tailwind", "Node.js", "Firebase", "Netlify"],
  },
  {
    title: "AirTracker",
    description: "A full-stack air quality monitoring application displaying real-time pollution levels and weather data, utilizing a Node.js backend with Express and OpenWeather API integrations.",
    image: "/airtracker.png",
    link: "https://airtracker02.netlify.app/",
    technologies: ["React", "Node.js", "Express", "OpenWeather API", "Netlify"],
  },
  {
    title: "Jewelry Shop",
    description: "A front-end jewelry store website showcasing product collections with a clean and modern design. (Front-end only)",
    image: "/jewleryshop.png",
    link: "https://jewelry-shop-three.vercel.app/",
    technologies: ["React", "Tailwind", "Vercel"],
  },
  {
    title: "Stay finder",
    description: "A front-end rental platform with property listings and a responsive booking interface. (Front-end only)",
    image: "/stayfinder.png",
    link: "https://air-bnb-rental-2dv8.vercel.app/",
    technologies: ["React", "Tailwind", "Vercel"],
  },
  {
    title: "RL Restaurant",
    description: "A front-end restaurant website presenting menus, reservation options, and an intuitive user experience. (Front-end only)",
    image: "/rl.png",
    link: "https://rlresturant.netlify.app/",
    technologies: ["React", "Tailwind", "Netlify"],
  },
  {
    title: "EthioCarRental",
    description: "A front-end car rental service website built for Ethiopian businesses to showcase available vehicles and services. (Front-end only)",
    image: "/ethiocarrental.png",
    link: "https://ethiocarrental.netlify.app/",
    technologies: ["React", "Tailwind", "Netlify"],
  },
  {
    title: "SHOPy",
    description: "An eCommerce website demonstrating a responsive front-end built with React for product browsing and shopping. (Front-end only)",
    image: "/4.jpeg",
    link: "https://ecommerce-website-three-psi.vercel.app/",
    technologies: ["React", "Tailwind", "Vercel"],
  },
  {
    title: "Rentup",
    description: "A front-end user interface design for a real estate and residence rental platform. (Front-end only)",
    image: "/3.jpeg",
    link: "https://reeel-bemnets-projects-4408d151.vercel.app/",
    technologies: ["React", "UI/UX", "Vercel"],
  },
  {
    title: "MAMAA",
    description: "A front-end restaurant ordering system UI designed for an intuitive customer experience. (Front-end only)",
    image: "/2.jpeg",
    link: "https://restaurant-ordering-vert.vercel.app/",
    technologies: ["React", "UI/UX", "Vercel"],
  },
  {
    title: "Portfolio (Next.js)",
    description: "A personal portfolio website built using Next.js to showcase projects and skills. (Front-end only)",
    image: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://portanim-teos.vercel.app/",
    technologies: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    title: "Portfolio (React)",
    description: "A React-based personal portfolio website highlighting professional projects and expertise. (Front-end only)",
    image: "/1.jpeg",
    link: "https://bemnetsintaeyhu.netlify.app/",
    technologies: ["React", "Tailwind", "Netlify"],
  },
  {
    title: "Other's in my GitHub",
    description: "Explore additional projects and open-source contributions available on my GitHub profile.",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://github.com/bemnet449/",
    technologies: ["GitHub", "Open Source"],
  },
];

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
};

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 pb-16 w-full max-w-7xl mx-auto">
          {PROJECTS.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <motion.div
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 1.1 }}
                className="bg-white rounded-2xl overflow-hidden mx-auto shadow-lg border border-gray-200 flex flex-col h-full"
                style={{
                  width: "100%",
                  maxWidth: "340px",
                  minHeight: "420px",
                  boxShadow: "0 8px 24px 0 rgba(0,0,0,0.08)",
                }}
              >
                <img
                  className="object-cover w-full h-48 rounded-t-2xl border-b border-gray-100"
                  src={project.image}
                  alt={project.title}
                />
                <div className="p-6 flex flex-col flex-1 justify-between">
                  {index < 3 && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full border border-green-200 w-fit mb-2">
                      Full-Stack
                    </span>
                  )}
                  <h6 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h6>
                  <p className="text-sm mb-4 text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full border border-blue-200 flex items-center gap-1"
                      >
                        {techIconMap[tech] || <FaGithub className="inline mr-1" />} {tech}
                      </span>
                    ))}
                    {index < 3 && (
                      <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full border border-teal-200 flex items-center gap-1">
                        Checkout
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;