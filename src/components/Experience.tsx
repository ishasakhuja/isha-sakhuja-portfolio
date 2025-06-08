import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Sharda Tech",
      period: "Jan 2025 – Present",
      description:
        "Built dashboard modules, managed data sync between admin panel and frontend (Next.js + MongoDB), led UI/UX revamps.",
    },
    {
      title: "President",
      company: "Technova Society",
      period: "2024 – Present",
      description:
        "Leading 55+ students, organizing hackathons and workshops, driving innovation among 2500+ university students.",
    },
  ];

  const education = [
    {
      title: "B.Tech Computer Science Engineering",
      institution: "Sharda University",
      period: "2022 – Present",
      details: "CGPA: 9.41",
      achievement: "100% Academic Scholarship",
    },
    {
      title: "Class XII",
      institution: "Secondary Education",
      period: "2022",
      details: "98.2%",
    },
    {
      title: "Class X",
      institution: "Secondary Education",
      period: "2020",
      details: "97.6%",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wide text-blue-500 font-semibold mb-2">
            Experience
          </h2>
          <h3 className="text-4xl font-bold">Professional Journey</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 text-blue-600">
              <Briefcase size={20} />
              Work & Leadership
            </h4>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="bg-white/80 dark:bg-card border border-border/30 hover:shadow-md transition-all"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h5 className="text-base font-semibold">{exp.title}</h5>
                        <p className="text-sm text-blue-500">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2 text-violet-600">
              <GraduationCap size={20} />
              Education & Achievements
            </h4>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-white/80 dark:bg-card border border-border/30 hover:shadow-md transition-all"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h5 className="text-base font-semibold">{edu.title}</h5>
                        <p className="text-sm text-violet-500">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">
                        {edu.details}
                      </p>
                      {edu.achievement && (
                        <span className="text-xs bg-yellow-400/90 text-white px-2 py-0.5 rounded-full font-medium">
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
