import React from "react";
import { Mail, MapPin, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 inline-flex items-center justify-center gap-4">
            <span className="text-primary text-xl md:text-2xl font-mono">04.</span> What&apos;s Next?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Although I&apos;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-sm">
            <h4 className="text-2xl font-bold text-foreground mb-10 text-center">Contact Information</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="flex flex-col items-center text-center group">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Email</p>
                <a href="mailto:bemnetsin510@gmail.com" className="text-base text-foreground font-medium hover:text-primary transition-colors">
                  bemnetsin510@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Location</p>
                <p className="text-base text-foreground font-medium">
                  Addis Ababa, Ethiopia
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Portfolio</p>
                <a href="https://bemnet-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-base text-foreground font-medium hover:text-primary transition-colors">
                  bemnet-portfolio.vercel.app
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
