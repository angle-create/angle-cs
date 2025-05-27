import { projects } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import ProjectsListContent from "@/components/ProjectsListContent";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-20" style={{ backgroundColor: "white" }}>
        <ProjectsListContent projects={projects} />
      </main>
      <Footer />
    </>
  );
}
