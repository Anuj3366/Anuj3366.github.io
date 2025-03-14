
import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Code, Terminal, Coffee, Headphones, BookOpen, 
  Lightbulb, Laugh, Cpu, Database, Server, Globe, Trees,
  Award, School, Briefcase, GraduationCap, Star
} from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "JavaScript", category: "frontend" },
    { name: "React", category: "frontend" }, 
    { name: "Next.js", category: "frontend" }, 
    { name: "Node.js", category: "backend" }, 
    { name: "Express", category: "backend" },
    { name: "Java", category: "language" }, 
    { name: "Python", category: "language" }, 
    { name: "C++", category: "language" }, 
    { name: "MongoDB", category: "database" }, 
    { name: "PostgreSQL", category: "database" },
    { name: "Firebase", category: "backend" }, 
    { name: "Tailwind CSS", category: "frontend" }, 
    { name: "Material UI", category: "frontend" }, 
    { name: "Docker", category: "devops" }, 
    { name: "Git", category: "devops" }, 
    { name: "AWS", category: "devops" }
  ];

  const quickFacts = [
    { icon: <Code className="h-5 w-5 text-primary" />, text: "Code by day, Debug by night 💻" },
    { icon: <Terminal className="h-5 w-5 text-primary" />, text: "Gaming breaks between coding sessions 🎮" },
    { icon: <Coffee className="h-5 w-5 text-primary" />, text: "Coffee-powered programmer ☕" },
    { icon: <Headphones className="h-5 w-5 text-primary" />, text: "Coding with music = Productivity++ 🎵" },
    { icon: <Trees className="h-5 w-5 text-primary" />, text: "Growing like my git commit history 🌱" },
    { icon: <BookOpen className="h-5 w-5 text-primary" />, text: "Thinking in algorithms since GATE 2024 (331/1000) 📚" },
    { icon: <Lightbulb className="h-5 w-5 text-primary" />, text: "Building cool stuff that nobody asked for 💡" },
    { icon: <Laugh className="h-5 w-5 text-primary" />, text: "I speak fluent JavaScript and sarcasm 😄" },
  ];

  const skillCategories = [
    { name: "Languages", icon: <Code className="h-5 w-5" />, category: "language" },
    { name: "Frontend", icon: <Globe className="h-5 w-5" />, category: "frontend" },
    { name: "Backend", icon: <Server className="h-5 w-5" />, category: "backend" },
    { name: "Database", icon: <Database className="h-5 w-5" />, category: "database" },
    { name: "DevOps", icon: <Cpu className="h-5 w-5" />, category: "devops" },
  ];

  const certifications = [
    "AWS Academy Graduate - AWS Academy Cloud Foundations",
    "Introduction to Public Speaking",
    "Version Control",
    "Responsive Web Design",
    "Introduction to Artificial Intelligence (AI)"
  ];

  const education = [
    { 
      institution: "Chitkara University", 
      degree: "Bachelor of Engineering - BE, Computer Science", 
      period: "July 2021 - July 2025",
      gpa: "9.38 CGPA"
    },
    { 
      institution: "N.C Jindal Public School", 
      period: "April 2019 - April 2021"
    },
    { 
      institution: "Adarsh Public School", 
      period: "April 2011 - April 2019"
    }
  ];

  const experience = [
    { 
      company: "iNeuBytes", 
      position: "Web Developer", 
      period: "August 2023 - September 2023",
      duration: "(2 months)"
    },
    {
      company: "OLX",
      position: "SDE Intern",
      period: "Upcoming",
      duration: ""
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/10 to-muted/30 -z-10"></div>
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-background to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slide-up">
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-10 animate-slide-up animate-delay-100">
            <p className="text-lg border-l-4 border-primary pl-4 italic">
              I'm a passionate Full-Stack Developer and problem solver with a knack for building responsive and intuitive web applications. 🚀
              Currently completing my B.E. in Computer Science at Chitkara University with a 9.38 CGPA, I'm set to join OLX as an SDE Intern soon! 🎓
            </p>
            <p className="text-lg">
              I'm a fourth-year Computer Science student passionate about turning complex challenges into innovative solutions. With hands-on experience in full-stack development and a proven track record on coding platforms like LeetCode and GeeksforGeeks, I thrive on collaboration and creative problem-solving. When I'm not coding, you might find me gaming 🎮, enjoying some pizza 🍕, listening to music 🎵, or exploring new tech trends 💻.
            </p>
          </div>

          <div className="mb-12 animate-slide-up animate-delay-200 bg-muted/30 p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-gradient">✨ Quick Facts About Me</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 p-3 bg-background/60 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in border border-border/50 hover:border-primary/30 hover:bg-background/80" 
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  {fact.icon}
                  <span>{fact.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="animate-slide-up animate-delay-300 bg-muted/30 p-6 rounded-xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="text-gradient">Education</span>
              </h3>
              <ul className="space-y-5">
                {education.map((edu, index) => (
                  <li key={index} className="bg-background/60 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm">
                    <h4 className="font-semibold">{edu.institution}</h4>
                    {edu.degree && <p className="text-sm text-muted-foreground">{edu.degree}</p>}
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-muted-foreground">{edu.period}</span>
                      {edu.gpa && <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20">{edu.gpa}</Badge>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-slide-up animate-delay-400 bg-muted/30 p-6 rounded-xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span className="text-gradient">Experience</span>
              </h3>
              <ul className="space-y-5">
                {experience.map((exp, index) => (
                  <li key={index} className="bg-background/60 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold">{exp.company}</h4>
                      <Badge variant="outline" className="text-xs">{exp.duration}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.position}</p>
                    <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="animate-slide-up animate-delay-500 mb-12 bg-muted/30 p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-gradient">Certifications</span>
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-2 p-3 bg-background/60 rounded-lg shadow-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                  <span className="text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-slide-up animate-delay-600">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-gradient">🛠️ Skills & Technologies</span>
            </h3>
            
            <div className="space-y-6">
              {skillCategories.map((category) => (
                <div key={category.name} className="mb-4 p-4 bg-muted/20 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                    {category.icon} {category.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter(skill => skill.category === category.category)
                      .map((skill, index) => (
                        <Badge 
                          key={skill.name} 
                          variant="secondary" 
                          className="text-sm py-1 px-3 skill-badge animate-bounce-in cursor-pointer hover:bg-primary hover:text-primary-foreground" 
                          style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
