
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment processing.",
    imageUrl: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    imageUrl: "/placeholder.svg",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "A responsive portfolio website built with modern web technologies.",
    imageUrl: "/placeholder.svg",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true
  }
];

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute -top-[30%] -left-[20%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center animate-slide-up">
          Projects
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 animate-slide-up animate-delay-100">
          Here are some of the projects I've worked on. Each project represents a unique challenge and learning opportunity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`flex flex-col overflow-hidden h-full project-card animate-fade-in`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="h-48 overflow-hidden bg-muted">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredId === project.id ? "scale-110 brightness-90" : ""
                  }`}
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
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
