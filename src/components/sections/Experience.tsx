import { Calendar, Building2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "2021 – Present",
      responsibilities: [
        "Designed, developed, and deployed web applications.",
        "Built responsive user interfaces.",
        "Integrated REST APIs.",
        "Optimized backend performance.",
        "Worked directly with clients.",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "Ethiopia Tourist Trade Enterprise",
      period: "Jul 2023 – Oct 2023",
      responsibilities: [
        "Developed Archive Management System using MERN stack.",
        "Built REST APIs.",
        "Implemented dynamic frontend functionality.",
        "Collaborated with stakeholders.",
        "Assisted deployment process.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 inline-flex items-center gap-4">
            <span className="text-primary text-xl md:text-2xl font-mono">02.</span> Experience
            <span className="hidden md:block h-px w-64 bg-border ml-4"></span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto md:mx-0 relative border-l-2 border-border/50 ml-4 md:ml-6 pl-8 space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {exp.title}
                </h3>
                <div className="inline-flex items-center text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </div>
              </div>
              
              <div className="inline-flex items-center text-muted-foreground font-medium mb-6">
                <Building2 className="w-5 h-5 mr-2" />
                {exp.company}
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-3 mt-1.5">▹</span>
                    <span className="text-muted-foreground text-base leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
