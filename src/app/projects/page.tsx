import { projects } from "@/data/projects";
import ProjectsListContent from "@/components/ProjectsListContent";

export default function ProjectsPage() {
  return (
    <div className="pt-20" style={{ backgroundColor: "white" }}>
      <ProjectsListContent projects={projects} />
    </div>
  );
}
