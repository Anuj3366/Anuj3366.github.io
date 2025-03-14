
import React from 'react';
import { Helmet } from 'react-helmet';
import { ProjectForm } from '@/components/admin/ProjectForm';
import ProjectList from '@/components/admin/ProjectList';
import { useState } from 'react';
import { Project } from '@/types/project';
import { v4 as uuidv4 } from 'uuid';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdminNavBar from '@/components/admin/AdminNavBar';

const AdminPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const { toast } = useToast();

  const handleSaveProject = (project: Project) => {
    if (project.id) {
      // Update existing project
      setProjects(prev => 
        prev.map(p => p.id === project.id ? project : p)
      );
      toast({
        title: "Project updated",
        description: `${project.title} has been updated successfully.`,
      });
    } else {
      // Add new project
      const newProject = {
        ...project,
        id: uuidv4(),
      };
      setProjects(prev => [...prev, newProject]);
      toast({
        title: "Project added",
        description: `${newProject.title} has been added successfully.`,
      });
    }
    setCurrentProject(null);
  };

  const handleEditProject = (project: Project) => {
    setCurrentProject(project);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    toast({
      title: "Project deleted",
      description: "The project has been deleted successfully.",
      variant: "destructive",
    });
  };

  const handleCancelEdit = () => {
    setCurrentProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Admin Dashboard - Portfolio Management</title>
        <meta name="description" content="Manage your portfolio projects" />
      </Helmet>

      <AdminNavBar />
      
      <main className="container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Portfolio Admin</h1>
        
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Management</CardTitle>
                <CardDescription>
                  Add, edit, or remove projects from your portfolio.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div>
                  <ProjectForm 
                    project={currentProject} 
                    onSave={handleSaveProject} 
                    onCancel={handleCancelEdit}
                  />
                </div>
                <div>
                  <ProjectList 
                    projects={projects} 
                    onEdit={handleEditProject}
                    onDelete={handleDeleteProject}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Statistics</CardTitle>
                <CardDescription>
                  View analytics and statistics for your portfolio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Analytics feature coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminPage;
