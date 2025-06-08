import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Full Stack Engineering",
      description:
        "Designing and building scalable, maintainable web apps using Next.js, React, and Node.js with an emphasis on clean architecture, performance, and modular code.",
      icon: "💻",
    },
    {
      title: "Agile Development & Collaboration",
      description:
        "Thriving in agile teams with version control, code reviews, and iterative delivery. Comfortable working cross-functionally with designers, PMs, and engineers.",
      icon: "🤝",
    },
    {
      title: "API & Backend Systems",
      description:
        "Developing secure REST APIs, integrating third-party services, and documenting endpoints clearly for seamless team collaboration.",
      icon: "🔌",
    },
    {
      title: "AI Integrations & Tooling",
      description:
        "Leveraging OpenAI, Firebase, and other APIs to build smart, user-focused features. Strong focus on extensibility and reusability.",
      icon: "🤖",
    },
    {
      title: "Engineering for UX",
      description:
        "Translating design systems into accessible, responsive UIs with pixel precision. Prioritizing usability, performance, and accessibility.",
      icon: "🎨",
    },
    {
      title: "Code Quality & Documentation",
      description:
        "Writing testable, readable code with inline documentation and wiki-ready guides—ensuring smooth onboarding and handoffs.",
      icon: "📘",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2">
            Services
          </h2>
          <h3 className="text-4xl font-bold mb-6">What I Offer</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with
            cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4 group-hover:text-blue-500 transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
