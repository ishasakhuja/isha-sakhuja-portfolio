
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "C", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Tools",
      skills: ["Next.js", "React.js", "Flask", "Tailwind CSS", "Git"],
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Databases & Services",
      skills: ["MongoDB", "Firebase", "REST APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Core Concepts",
      skills: ["OOP", "Operating Systems", "DSA", "Software Testing", "Cloud Computing"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2">Skills</h2>
          <h3 className="text-4xl font-bold mb-6">Technical Expertise</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and proven methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6 flex items-center">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`} />
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-background/50 border border-border/50 rounded-full text-sm font-medium hover:bg-accent transition-colors cursor-default"
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
