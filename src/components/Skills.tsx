import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Problem Solving",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "C++",
        "SQL",
        "DSA",
        "Object-Oriented Design",
      ],
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-blue-400/30",
    },
    {
      title: "Frameworks & Engineering Tools",
      skills: [
        "Next.js",
        "React.js",
        "Node.js",
        "Flask",
        "Tailwind CSS",
        "Git & GitHub",
      ],
      color: "from-violet-500 to-purple-500",
      shadow: "shadow-purple-400/30",
    },
    {
      title: "Databases & Cloud Services",
      skills: ["MongoDB", "Firebase", "RESTful APIs", "Google Cloud (basics)"],
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-emerald-400/30",
    },
    {
      title: "CS Fundamentals",
      skills: [
        "Operating Systems",
        "Software Testing",
        "Agile & Scrum",
        "Version Control",
        "System Design (basic)",
      ],
      color: "from-orange-500 to-red-500",
      shadow: "shadow-red-400/30",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2">
            Skills
          </h2>
          <h3 className="text-4xl font-bold mb-6">Technical Expertise</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and proven
            methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-none bg-background/60 backdrop-blur-lg transition-transform duration-300 hover:scale-[1.025] rounded-2xl shadow-md ${category.shadow}`}
            >
              {/* Gradient Bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${category.color} absolute top-0 left-0`}
              />

              {/* Colored Glow */}
              <div
                className={`absolute inset-0 rounded-2xl pointer-events-none blur-2xl opacity-30 z-0 bg-gradient-to-br ${category.color}`}
              />

              <CardContent className="relative z-10 p-6">
                <h4 className="text-lg font-semibold mb-5 flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-2`}
                  />
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm font-medium border border-border/30 rounded-full bg-muted/30 hover:bg-muted/60 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
