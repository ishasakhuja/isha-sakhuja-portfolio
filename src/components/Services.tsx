
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      description: "End-to-end web applications using modern frameworks like Next.js, React, and Node.js with scalable architecture.",
      icon: "💻"
    },
    {
      title: "Mobile App Prototyping",
      description: "Interactive prototypes and responsive designs that work seamlessly across all mobile devices and platforms.",
      icon: "📱"
    },
    {
      title: "AI Tool Integrations",
      description: "Intelligent automation and AI-powered features using modern APIs and machine learning technologies.",
      icon: "🤖"
    },
    {
      title: "API Development",
      description: "RESTful APIs and backend services with proper authentication, documentation, and scalable infrastructure.",
      icon: "🔌"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design with modern aesthetics, accessibility, and conversion-focused interfaces.",
      icon: "🎨"
    },
    {
      title: "Content Automation Tools",
      description: "Custom tools for content generation, data processing, and workflow automation to boost productivity.",
      icon: "⚡"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2">Services</h2>
          <h3 className="text-4xl font-bold mb-6">What I Offer</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
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
