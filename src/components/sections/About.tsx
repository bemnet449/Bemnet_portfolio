import { Briefcase, GraduationCap, MapPin, Target } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Experience",
      description: "3+ Years Full Stack",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Degree",
      description: "BSc Computer Science",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      description: "Addis Ababa, Ethiopia",
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Focus Area",
      description: "Scalable Web and Mobile Apps",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 inline-flex items-center gap-4">
            <span className="text-primary text-xl md:text-2xl font-mono">01.</span> About Me
            <span className="hidden md:block h-px w-64 bg-border ml-4"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Full Stack Developer with 3+ years of experience building scalable web, mobile, and backend applications.
              </p>
            <p>
              Developed and maintained Multiple real-world products used by <b>Hundreds of users</b>, focusing on performance, reliability, and user experience.
              </p>
            <p>
              Experienced in designing backend architectures, building secure RESTful APIs, and creating systems that scale with business growth.
              </p>
            <p>
             Skilled in working with both SQL and NoSQL databases, optimizing data models and application performance.
              </p>
            <p>
              Delivered end-to-end solutions, from planning and development to deployment and ongoing maintenance.
              </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all hover:border-primary/50 group"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 inline-block group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
