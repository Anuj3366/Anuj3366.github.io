
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Project } from "@/types/project";
import { X, Plus } from "lucide-react";

interface ProjectFormProps {
  project: Project | null;
  onSave: (project: Project) => void;
  onCancel: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSave, onCancel }) => {
  const defaultProject: Project = {
    id: "",
    title: "",
    description: "",
    imageUrl: "",
    tags: [],
    demoUrl: "",
    githubUrl: "",
    featured: false,
  };

  const [formData, setFormData] = useState<Project>(defaultProject);
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    if (project) {
      setFormData(project);
    } else {
      setFormData(defaultProject);
    }
  }, [project]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, featured: checked }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setFormData(defaultProject);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-md shadow">
      <h2 className="text-xl font-bold mb-4">
        {project ? "Edit Project" : "Add New Project"}
      </h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Project Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Project Title"
            required
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Project Description"
            rows={4}
            required
          />
        </div>

        <div>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        <div>
          <Label htmlFor="tags">Tags</Label>
          <div className="flex gap-2">
            <Input
              id="tagInput"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="Add a tag"
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={handleAddTag}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.tags.map((tag) => (
              <div
                key={tag}
                className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm flex items-center gap-1"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="demoUrl">Demo URL (Optional)</Label>
          <Input
            id="demoUrl"
            name="demoUrl"
            value={formData.demoUrl || ""}
            onChange={handleChange}
            placeholder="https://example.com"
          />
        </div>

        <div>
          <Label htmlFor="githubUrl">GitHub URL (Optional)</Label>
          <Input
            id="githubUrl"
            name="githubUrl"
            value={formData.githubUrl || ""}
            onChange={handleChange}
            placeholder="https://github.com/username/repo"
          />
        </div>

        <div className="flex items-center gap-2">
          <Switch
            id="featured"
            checked={formData.featured}
            onCheckedChange={handleSwitchChange}
          />
          <Label htmlFor="featured">Featured Project</Label>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">{project ? "Update" : "Add"} Project</Button>
      </div>
    </form>
  );
};

export default ProjectForm;
