import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import ProjectDetailContent from "@/components/ProjectDetailContent";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-20" style={{ backgroundColor: "white" }}>
        <ProjectDetailContent project={project} />
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
