import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h2 className="text-primary font-medium tracking-wide mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
            Hi, my name is
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-foreground animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            Bemnet Sintayehu.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
            Full Stack Developer.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            Full Stack Developer with 3+ years of experience building scalable web and mobile applications using modern frontend and backend technologies. Passionate about creating efficient, user-focused software solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-all hover:scale-[1.02]"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-muted transition-all hover:scale-[1.02]"
            >
              Contact Me
              <Mail className="ml-2 w-4 h-4" />
            </Link>
            <a
              href="/Bemnet_Sintayehu_Resume.pdf"
              download="Bemnet_Sintayehu_Resume.pdf"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-muted transition-all hover:scale-[1.02]"
            >
              Download CV
              <Download className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
