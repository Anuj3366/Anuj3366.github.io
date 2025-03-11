
import React from "react";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const skills = [
    "JavaScript", "React", "Next.js", "Node.js", "Express", 
    "Java", "Python", "C++", "MongoDB", "PostgreSQL", 
    "Firebase", "Tailwind CSS", "Material UI", "Docker", "Git", "AWS"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
            <p>
              I'm a passionate Full-Stack Developer and problem solver with a knack for building responsive and intuitive web applications.
              Currently completing my B.E. in Computer Science at Chitkara University with a 9.38 CGPA, I'm set to join OLX as an SDE Intern soon.
            </p>
            <p>
              When I'm not coding, you might find me gaming, listening to music, or working on personal projects. I believe in continuous learning and pushing my boundaries with every project I take on.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Quick Facts About Me</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2">🧑‍💻 Code by day, Debug by night</li>
              <li className="flex items-center gap-2">🎮 Gaming breaks between coding sessions</li>
              <li className="flex items-center gap-2">🍕 Pizza-powered programmer</li>
              <li className="flex items-center gap-2">🎵 Coding with music = Productivity++</li>
              <li className="flex items-center gap-2">🌱 Growing like my git commit history</li>
              <li className="flex items-center gap-2">💭 Thinking in algorithms since GATE 2024 (331/1000)</li>
              <li className="flex items-center gap-2">🔭 Building cool stuff that nobody asked for</li>
              <li className="flex items-center gap-2">⚡ Fun fact: I speak fluent JavaScript and sarcasm</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
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
