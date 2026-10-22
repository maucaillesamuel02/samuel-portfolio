import {
 ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Landmark,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

const projectIcons = {
  "elevate-by-nextep": BriefcaseBusiness,
  "financial-planning": Landmark,
  "catchflai": Smartphone,
  "up-nutrition": ShoppingBag,
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const Icon =
    projectIcons[
      project.slug as keyof typeof projectIcons
    ] ?? Code2;

  return (
    <article className="group flex h-full min-w-0 flex-col rounded-xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/60 sm:p-7">
      <div className="mb-6 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background text-accent">
          <Icon size={23} aria-hidden="true" />
        </div>

        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title}`}
            className="text-muted transition-colors hover:text-accent"
          >
            <ArrowUpRight size={22} />
          </a>
        )}
      </div>

      <p className="mb-2 font-mono text-xs text-accent">
        {project.category}
      </p>

      <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
        {project.title}
      </h3>

      <p className="mb-4 text-sm leading-7 text-muted">
        {project.description}
      </p>

      <p className="mb-6 text-sm leading-7 text-muted">
        <span className="font-semibold text-foreground">
          My contribution:{" "}
        </span>
        {project.contribution}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-xs text-accent"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
