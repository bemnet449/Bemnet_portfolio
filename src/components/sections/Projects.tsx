import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const Github = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "GeezShoes",
      description: [
        "A modern e-commerce platform designed to deliver a seamless shopping experience through an intuitive interface, responsive design, and optimized user journeys.",
        "Implemented SEO best practices, image optimization, and caching strategies to improve search visibility, performance, and loading speeds while serving hundreds of active users.",
        "Built a comprehensive admin dashboard featuring product management, analytics, customer insights, top-selling product tracking, and streamlined content management workflows."
      ],
      image: "/geezshoes.png",
      link: "https://www.geezshoes.com/",
      technologies: ["Next.js", "Tailwind CSS", "Supabase", "compress.js"],
    },
    {
      id: 2,
      title: "Sabawiyan Leather",
      description: [
        "Designed and developed a professional e-commerce website for a premium leather brand, focusing on clean design, responsive user experience, and strong brand presentation.",
        "Implemented SEO optimization and performance-enhancing caching strategies to improve search rankings, page speed, and overall user engagement."
      ],
      image: "/sabawian-leather.png",
      link: "https://www.sabawiyan.com/",
      technologies: ["Next.js", "Tailwind CSS", "Supabase", "NodeMailer"],
    },
    {
      id: 3,
      title: "Keeley Aesthetics",
      description: [
        "A professional aesthetic clinic website showcasing tailored beauty treatments, laser therapies, and skincare services.",
        "Features a clean, elegant design with booking integration to highlight the clinic’s expertise."
      ],
      image: "/keeley-aesthetics.png",
      link: "https://keeleyaesthetics.co.uk/",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 4,
      title: "Merkato Market",
      description: [
        "A comprehensive e-commerce marketplace connecting customers with unique, ethical, and sustainable products.",
        "Features a seamless shopping experience, secure payments, and diverse product categories."
      ],
      image: "/Merkato.png",
      link: "https://merkatomarket.com/",
      technologies: ["Next.js", "Redux", "Tailwind CSS"],
    },
    {
      id: 5,
      title: "TravelBuddy",
      description: [
        "A full-stack travel companion web app with real-time chat, detailed trip planning, flight integration, and trust-based user scoring.",
        "Designed to help users discover trips and safely connect with potential travel partners."
      ],
      image: "/TravelBuddy.png",
      link: "https://travel-buddy-ten-theta.vercel.app/auth",
      codeLink: "https://github.com/bemnet449/Industrial_Project",
      technologies: ["React", "Tailwind CSS", "Mantine UI", "Axios", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Cloudinary"],
    },
    {
      id: 6,
      title: "Archive Management System",
      description: [
        "A web-based offline Archive Management System for organizing, tracking, and managing files and folders.",
        "Features include folder creation, file movement tracking, and file metadata management.",
        "Ideal for industries needing efficient file organization, status monitoring, and easy retrieval of archived data."
      ],
      image: "/ette.png",
      codeLink: "https://github.com/bemnet449/Archive-Management-System",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 inline-flex items-center gap-4">
            <span className="text-primary text-xl md:text-2xl font-mono">03.</span> Featured Projects
            <span className="hidden md:block h-px w-64 bg-border ml-4"></span>
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div key={project.id} className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-xl group-hover:bg-transparent transition-colors duration-300 z-10" />
                <div className="aspect-video bg-muted rounded-xl border border-border shadow-md overflow-hidden relative flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className={`w-full lg:w-1/2 flex flex-col ${idx % 2 !== 0 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'} items-start text-left`}>
                <span className="text-primary font-mono text-sm mb-2">Featured Project</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {project.title}
                </h3>
                
                <div className="bg-card border border-border p-6 rounded-xl shadow-md mb-6 w-full relative z-20">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-base leading-relaxed">
                    {project.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <ul className={`flex flex-wrap gap-4 text-sm font-mono text-muted-foreground mb-8 ${idx % 2 !== 0 ? 'justify-start' : 'lg:justify-end justify-start'}`}>
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="bg-muted px-3 py-1 rounded-md">{tech}</li>
                  ))}
                </ul>

                <div className="flex items-center space-x-6">
                  {project.codeLink && (
                    <Link 
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <Github className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                      <span className="sr-only">GitHub Repository</span>
                    </Link>
                  )}
                  {project.link && (
                    <Link 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ExternalLink className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                      <span className="sr-only">Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
