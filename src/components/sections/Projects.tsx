import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6"
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-sm text-accent">
          03.
        </span>

        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Featured Projects
        </h2>

        <div className="h-px min-w-0 flex-1 bg-border" />
      </div>

      <p className="mb-6 max-w-4xl text-base leading-7 text-muted">
        A selection of enterprise applications and
        personal projects I have contributed to,
        focused on solving real-world problems.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
