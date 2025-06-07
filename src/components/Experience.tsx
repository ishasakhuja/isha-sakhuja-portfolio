
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Sharda Tech",
      period: "Jan 2025 – Present",
      description: "Built dashboard modules, managed data sync between admin panel and frontend (Next.js + MongoDB), led UI/UX revamps.",
      type: "work"
    },
    {
      title: "President",
      company: "Technova Society",
      period: "2024 – Present",
      description: "Leading 55+ students, organizing hackathons and workshops, driving innovation among 2500+ university students.",
      type: "leadership"
    }
  ];

  const education = [
    {
      title: "B.Tech Computer Science Engineering",
      institution: "Sharda University",
      period: "2022 – Present",
      details: "CGPA: 9.5",
      achievement: "100% Academic Scholarship"
    },
    {
      title: "Class XII",
      institution: "Secondary Education",
      period: "2022",
      details: "98.2%"
    },
    {
      title: "Class X",
      institution: "Secondary Education", 
      period: "2020",
      details: "97.6%"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2">Experience</h2>
          <h3 className="text-4xl font-bold mb-6">Professional Journey</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h4 className="text-2xl font-semibold mb-8 flex items-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 mr-3" />
              Work Experience & Leadership
            </h4>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h5 className="text-lg font-semibold text-foreground">{exp.title}</h5>
                        <p className="text-blue-500 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h4 className="text-2xl font-semibold mb-8 flex items-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 mr-3" />
              Education & Achievements
            </h4>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h5 className="text-lg font-semibold text-foreground">{edu.title}</h5>
                        <p className="text-violet-500 font-medium">{edu.institution}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-muted-foreground">{edu.details}</p>
                      {edu.achievement && (
                        <span className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full">
                          {edu.achievement}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
