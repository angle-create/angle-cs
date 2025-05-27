import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import ProjectDetailContent from "@/components/ProjectDetailContent";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

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
