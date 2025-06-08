import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/ishasakhuja",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/ishasakhuja",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:ishasakhujaa@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent mb-2">
              Isha Sakhuja
            </div>
            <p className="text-muted-foreground">
              © 2025 – All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            Crafted with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
