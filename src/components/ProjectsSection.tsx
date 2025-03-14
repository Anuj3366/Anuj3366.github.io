
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Award, Code as CodeIcon } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "Bidcommerce Platform",
    description: "BidCommerce is an e-commerce platform, blending online shopping and auction features. It offers a seamless user experience, modern technologies, a bidding system, and public auction chats.",
    imageUrl: "/placeholder.svg",
    tags: ["Nextjs", "Node.js", "MongoDB", "Express", "Stripe"],
    demoUrl: "https://bidcommerce.netlify.app/",
    githubUrl: "https://github.com/Anuj3366/BidCommerce",
    featured: true,
    emoji: "🛒"
  },
  {
    id: "2",
    title: "Password-Management-System",
    description: "The Password Management System is a command-line tool designed to help users securely manage their website passwords. It offers essential password management features, including password storage, retrieval, and strong password generation.",
    imageUrl: "/placeholder.svg",
    tags: ["C", "Bash"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/Anuj3366/Password-Management-System",
    featured: true,
    emoji: "✅"
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "A responsive portfolio website built with modern web technologies. Features smooth animations, dark mode, and contact form with email integration.",
    imageUrl: "/placeholder.svg",
    tags: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    demoUrl: "https://example.com",
    githubUrl: "https://anujgarg3366.me",
    featured: true,
    emoji: "🎨"
  }
];

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute -top-[30%] -left-[20%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl animate-pulse -z-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up relative inline-block">
              <span className="text-gradient">Projects</span>
              <span className="absolute -top-5 -right-5 text-2xl animate-bounce-slow">💼</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl animate-slide-up animate-delay-100">
              Here are some of the projects I've worked on. Each project represents a unique challenge and learning opportunity.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Badge variant="outline" className="border-primary/30 bg-primary/5 text-foreground px-3 py-1 text-sm animate-fade-in">
              <Star className="h-3.5 w-3.5 mr-1 text-yellow-500" /> Featured Projects
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`flex flex-col overflow-hidden h-full project-card animate-fade-in border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-48 overflow-hidden bg-muted group">
                <div className="absolute inset-0 flex items-center justify-center text-4xl">
                  {project.emoji}
                </div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredId === project.id ? "scale-110 brightness-90 opacity-30" : "opacity-80"
                  }`}
                />
                {project.featured && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary/80 hover:bg-primary text-xs py-0.5">
                      <Award className="h-3 w-3 mr-1" /> Featured
                    </Badge>
                  </div>
                )}
                {hoveredId === project.id && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-center">
                      <CodeIcon className="h-10 w-10 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">View Details</p>
                    </div>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3} more
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm line-clamp-3">{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-0">
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm" className="gap-1 group">
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" /> Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-1 group">
                        <Github className="h-4 w-4 transition-transform group-hover:scale-110" /> Code
                      </Button>
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
