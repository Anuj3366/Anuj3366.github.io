
import React from "react";
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
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Projects
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on. Each project represents a unique challenge and learning opportunity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden h-full">
              <div className="h-48 overflow-hidden bg-muted">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
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
                      <Button variant="default" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Github className="h-4 w-4" /> Code
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
