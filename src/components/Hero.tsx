
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8 inline-block overflow-hidden">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Hey 👋 I'm Anuj Garg
          </h1>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
          <span className="text-gradient">Full-Stack Developer</span> | Problem Solver | Code Enthusiast
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          B.E. CSE @ Chitkara University (9.38 CGPA) | Upcoming SDE Intern @ OLX |
          Web Dev @Inuebyes
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a href="#projects">
            <Button size="lg" className="gap-2">
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <Button size="lg" variant="outline" className="gap-2">
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/Anuj3366" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/anujgarg3366/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
