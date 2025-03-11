
import React from "react";
import { Github, Linkedin, ExternalLink, Mail, MapPin, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-muted py-12 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      
      {/* Scroll to top button */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <Button 
          onClick={scrollToTop} 
          size="icon" 
          className="rounded-full animate-bounce-slow shadow-lg hover:shadow-primary/20"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 animate-slide-up">
            <h2 className="text-xl font-bold text-gradient">Anuj Garg</h2>
            <p className="text-muted-foreground mt-2">Full-Stack Developer</p>
            
            <div className="flex items-center gap-2 mt-4 text-muted-foreground group hover:text-foreground transition-colors">
              <MapPin className="h-4 w-4 group-hover:text-primary" />
              <span>Punjab, India</span>
            </div>
            
            <a 
              href="mailto:contact@anujgarg.dev" 
              className="flex items-center gap-2 mt-2 text-muted-foreground hover:text-foreground group transition-colors"
            >
              <Mail className="h-4 w-4 group-hover:text-primary" />
              <span>contact@anujgarg.dev</span>
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end animate-slide-up animate-delay-100">
            <div className="flex space-x-6 mb-4">
              <a
                href="https://github.com/Anuj3366"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-125"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/anujgarg3366/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-125"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://leetcode.com/anuj3366/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-125"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground flex items-center">
              © {currentYear} Anuj Garg. Made with <Heart className="h-3 w-3 mx-1 text-red-500 animate-pulse" /> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
