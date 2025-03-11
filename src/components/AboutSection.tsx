
import React from "react";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const skills = [
    "JavaScript", "React", "Next.js", "Node.js", "Express", 
    "Java", "Python", "C++", "MongoDB", "PostgreSQL", 
    "Firebase", "Tailwind CSS", "Material UI", "Docker", "Git", "AWS"
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-muted/30 -z-10"></div>
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-background to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slide-up">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-10 animate-slide-up animate-delay-100">
            <p>
              I'm a passionate Full-Stack Developer and problem solver with a knack for building responsive and intuitive web applications.
              Currently completing my B.E. in Computer Science at Chitkara University with a 9.38 CGPA, I'm set to join OLX as an SDE Intern soon.
            </p>
            <p>
              When I'm not coding, you might find me gaming, listening to music, or working on personal projects. I believe in continuous learning and pushing my boundaries with every project I take on.
            </p>
          </div>

          <div className="mb-12 animate-slide-up animate-delay-200">
            <h3 className="text-xl font-semibold mb-4">Quick Facts About Me</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>🧑‍💻 Code by day, Debug by night</li>
              <li className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.15s" }}>🎮 Gaming breaks between coding sessions</li>
              <li className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>🍕 Pizza-powered programmer</li>
              <li className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.25s" }}>🎵 Coding with music = Productivity++</li>
              <li className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>🌱 Growing like my git commit history</li>
              <li className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.35s" }}>💭 Thinking in algorithms since GATE 2024 (331/1000)</li>
              <li className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>🔭 Building cool stuff that nobody asked for</li>
              <li className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.45s" }}>⚡ Fun fact: I speak fluent JavaScript and sarcasm</li>
            </ul>
          </div>

          <div className="animate-slide-up animate-delay-300">
            <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="text-sm py-1 px-3 skill-badge animate-bounce-in" 
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
