import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Anuj Garg - Full-Stack Developer</title>
        <meta name="description" content="Projects and work by Anuj Garg - Full-Stack Developer" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        
        <main className="flex-grow">
          <div className="pt-24 pb-12">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                My Projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-12">
                Here are some of the projects I've worked on. Each represents unique challenges 
                and learning opportunities in my journey as a developer.
              </p>
            </div>
          </div>
          
          <ProjectsSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Projects;