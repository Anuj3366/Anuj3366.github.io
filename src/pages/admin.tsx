
import React, { useState } from 'react';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ProjectList from '@/components/admin/ProjectList';
import ProjectForm from '@/components/admin/ProjectForm';
import { Project } from '@/types/project';
import AdminNavBar from '@/components/admin/AdminNavBar';

export default function Admin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const { toast } = useToast();

  const handleSaveProject = (project: Project) => {
    if (editingProject) {
      // Update existing project
      setProjects(projects.map(p => p.id === project.id ? project : p));
      toast({
        title: "Project updated",
        description: `${project.title} has been updated successfully.`,
      });
    } else {
      // Add new project
      setProjects([...projects, { ...project, id: Date.now().toString() }]);
      toast({
        title: "Project added",
        description: `${project.title} has been added successfully.`,
      });
    }
    setEditingProject(null);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
    toast({
      title: "Project removed",
      description: "The project has been deleted successfully.",
      variant: "destructive",
    });
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
  };

  return (
    <>
      <Head>
        <title>Admin | Project Management</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="min-h-screen bg-background">
        <AdminNavBar />
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-8">Project Management</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <ProjectForm 
                onSave={handleSaveProject} 
                project={editingProject}
                onCancel={() => setEditingProject(null)}
              />
            </div>
            
            <div className="lg:col-span-2">
              <ProjectList 
                projects={projects} 
                onEdit={handleEditProject} 
                onDelete={handleDeleteProject} 
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
