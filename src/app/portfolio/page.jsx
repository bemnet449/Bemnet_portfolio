"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "SHOPy",
    desc: "An eCommerce website showcasing a front-end React implementation.",
    img: "/4.jpeg",
    link: "https://ecommerce-website-three-psi.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Rentup",
    desc: "A real estate and residence website UI/UX design.",
    img: "/3.jpeg",
    link: "https://reeel-bemnets-projects-4408d151.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "MAMAA",
    desc: "A restaurant ordering website UI.",
    img: "/2.jpeg",
    link: "https://restaurant-ordering-vert.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Portfolio",
    desc: "A Next.js portfolio.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://portanim-teos.vercel.app/",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Portfolio",
    desc: "A React portfolio.",
    img: "/1.jpeg",
    link: "https://bemnetsintaeyhu.netlify.app/",
  },
  {
    id: 6,
    color: "from-purple-300 to-red-300",
    title: "Other's in my GitHub",
    desc: "Explore more projects on my GitHub repository.",
    img: "", // Not needed since we use FontAwesome here
    link: "https://github.com/bemnet449/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 0.1, 1], ["0%", "0%", "-80%"]);


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
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
          <path d="M5 9l7 7 7-7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
  {/* Reduced empty div */}
  <div className="h-screen w-[30vw] flex-shrink-0"></div>

  {items.map((item) => (
    <div
      className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} shadow-lg`}
      key={item.id}
    >
      <div className="flex flex-col gap-8 text-white text-center">
        <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
          {item.title}
        </h1>
        {item.id !== 6 && (  
  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
    <Image src={item.img} alt={item.title} fill />
  </div>
)}

        <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{item.desc}</p>
        <Link href={item.link} target="_blank" rel="noopener noreferrer">
          <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded hover:bg-gray-200">
            Check out
          </button>
        </Link>
      </div>
    </div>
  ))}
</motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
