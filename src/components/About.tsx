import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl -rotate-3 opacity-20" />
              <img
                src="/Isha.jpg"
                alt="Isha Sakhuja"
                className="w-full h-full object-cover rounded-2xl relative z-10 border-4 border-background shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2">
                About Me
              </h2>
              <h3 className="text-4xl font-bold mb-6">
                Passionate Developer Building the Future
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Pre-final year Computer Science student with a 9.5 CGPA and a
              passion for solving real-world problems through full-stack
              development. Experienced in Next.js, Node.js, MongoDB, and
              building scalable applications.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently serving as President of Technova, leading innovation
              among 2500+ students and organizing hackathons and workshops that
              inspire the next generation of developers.
            </p>

            <div className="grid grid-cols-2 gap-6 my-8">
              <Card className="border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-2">
                    9.41
                  </div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </CardContent>
              </Card>
              <Card className="border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-violet-500 mb-2">
                    2500+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Students Led
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-block bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white px-4 py-2 rounded-md text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
