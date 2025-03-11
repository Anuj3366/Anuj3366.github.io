
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Anuj Garg - Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Developer, Problem Solver, Code Enthusiast" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2E97A7" />
      </Helmet>

      <NavBar />
      
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
