
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 container mx-auto px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 -z-10"></div>
      <div className="absolute -top-[30%] -right-[20%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
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
          B.E. CSE @ Chitkara University (9.38 CGPA) | Upcoming SDE Intern @ OLX |
          Web Dev @Inuebyes
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-slide-up animate-delay-300">
          <a href="#projects">
            <Button size="lg" className="gap-2 group">
              View Projects 
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <Button size="lg" variant="outline" className="gap-2">
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center gap-6 animate-slide-up animate-delay-400">
          <a 
            href="https://github.com/Anuj3366" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/anujgarg3366/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-all hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
