
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Download, Code, Trophy } from "lucide-react";

const Hero = () => {
  // Configure the resume path to work with both development and production environments
  const resumePath = "/Resume.pdf";

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 container mx-auto px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 -z-10"></div>
      <div className="absolute -top-[30%] -right-[20%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-green-500/20 rounded-full blur-xl animate-pulse -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-700 -z-10"></div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="mb-8 overflow-hidden">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Hey 👋 I'm <span className="text-gradient">Anuj Garg</span>
          </h1>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8 animate-slide-up animate-delay-100">
          <span className="text-gradient">Full-Stack Developer</span> | Problem Solver | Code Enthusiast
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-slide-up animate-delay-200">
          🎓 B.E. CSE @ Chitkara University (9.38 CGPA) | 💼 Upcoming SDE Intern @ OLX |
          💻 Web Dev @Inuebyes
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-slide-up animate-delay-300">
          <a href="#projects">
            <Button size="lg" className="gap-2 group w-full sm:w-auto shadow-lg hover:shadow-primary/20">
              <Code className="h-5 w-5" />
              View Projects 
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href={resumePath} download target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="gap-2 group w-full sm:w-auto border-primary/20 hover:border-primary shadow-sm hover:shadow-md">
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </a>
        </div>

        <div className="flex justify-center gap-8 animate-slide-up animate-delay-400">
          <a 
            href="https://github.com/Anuj3366" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all hover:scale-125 group"
          >
            <div className="flex flex-col items-center">
              <Github className="h-7 w-7 mb-2" />
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
            </div>
          </a>
          <a 
            href="https://www.linkedin.com/in/anujgarg3366/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all hover:scale-125 group"
          >
            <div className="flex flex-col items-center">
              <Linkedin className="h-7 w-7 mb-2" />
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
            </div>
          </a>
          <a 
            href="https://leetcode.com/anuj3366/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all hover:scale-125 group"
          >
            <div className="flex flex-col items-center">
              <Trophy className="h-7 w-7 mb-2" />
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">LeetCode</span>
            </div>
          </a>
        </div>

        {/* Floating badge */}
        <div className="absolute -top-2 -right-2 md:top-10 md:right-0 animate-bounce-slow">
          <div className="bg-primary/10 backdrop-blur-sm text-primary px-4 py-2 rounded-full border border-primary/20 shadow-lg rotate-12 text-sm font-medium">
            💡 Available for hire!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
