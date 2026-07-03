"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, Copy, Check, Phone } from "lucide-react";

const ContactItem = ({ icon: Icon, title, value, href, copyValue }: { icon: any, title: string, value: string, href?: string, copyValue?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyValue || value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center text-center group">
      <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors mb-4 flex-shrink-0">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <p className="text-sm font-semibold text-muted-foreground mb-2">{title}</p>
      <div className="flex items-center gap-2">
        {href ? (
          <a href={href} target={href.startsWith('mailto:') ? undefined : "_blank"} rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"} className="text-base text-foreground font-medium hover:text-primary transition-colors break-all">
            {value}
          </a>
        ) : (
          <p className="text-base text-foreground font-medium">{value}</p>
        )}
        <button
          onClick={handleCopy}
          className="p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors flex-shrink-0"
          title="Copy to clipboard"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

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
              <ContactItem
                icon={Mail}
                title="Email"
                value="bemnetsin510@gmail.com"
                href="mailto:bemnetsin510@gmail.com"
              />

              <ContactItem
                icon={Send}
                title="Telegram"
                value="@bonvack"
                href="https://t.me/bonvack"
                copyValue="@bonvack"
              />

              <ContactItem
                icon={Phone}
                title="Phone"
                value="+251943780783"
                href="tel:+251943780783"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
