import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Apps",
      stack: "Next.js, Firebase, Stripe, Algolia, Tailwind CSS",
      description:
        "Built a scalable e-commerce site with Firebase Auth, Algolia search, and secure Stripe payments. Included admin panel, cart, order tracking.",
      link: "https://github.com/ishasakhuja/E-Commerce",
      image: "/Ecomm.svg",
    },
    {
      title: "AI Powered Summarizer",
      category: "AI Projects",
      stack: "Python, Flask, GenAI APIs",
      description:
        "Built an AI tool that summarizes books, articles, YouTube transcripts to save 70% reading time. API orchestration and NLP parsing.",
      link: "https://github.com/ishasakhuja/Synopsiverse",
      image: "/Summ.svg",
    },
    {
      title: "ChatApp",
      category: "Web Apps",
      stack: "Express, CSS",
      description:
        "Designed responsive, real-time chat web application using express and socket.io.",
      link: "https://github.com/ishasakhuja/ChatApp",
      image: "/chatApp.png",
    },
  ];

  const categories = ["All", "Web Apps", "AI Projects", "Other Projects"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2">
            Portfolio
          </h2>
          <h3 className="text-4xl font-bold mb-6">Featured Projects</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work in web development, AI tools, and
            innovative solutions.
          </p>
        </div>

        {/* <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-background/50 rounded-full border border-border/50">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "ghost"}
                className={`rounded-full px-6 transition-all duration-300 ${
                  activeFilter === category 
                    ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white" 
                    : "hover:bg-accent"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/60"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-blue-500 mb-3 font-medium">
                    {project.stack}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-500 hover:text-blue-600 hover:bg-blue-500/10 p-0"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
