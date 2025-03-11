
import React from 'react';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Anuj Garg | Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Developer, Problem Solver, Code Enthusiast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-background">
        <NavBar />
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
