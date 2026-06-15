export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "AngularJS", "React Native", "Flutter", "Redux", "TypeScript", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "ASP.NET", "Laravel"]
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "C++", "PHP"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Docker", "REST APIs", "GraphQL", "CI/CD", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 inline-flex items-center gap-4">
            <span className="text-primary text-xl md:text-2xl font-mono">02.</span> Skills
            <span className="hidden md:block h-px w-64 bg-border ml-4"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 group flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border/50 inline-block group-hover:text-primary transition-colors duration-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-4 py-2 bg-muted text-muted-foreground text-sm font-medium rounded-lg hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
