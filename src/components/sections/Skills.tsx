
import {
  Cloud,
  Code2,
  Database,
  Server,
  Wrench,
  ExternalLink,
} from "lucide-react";

import { skillCategories } from "@/data/skills";

const categoryIcons = {
  backend: Server,
  frontend: Code2,
  cloud: Database,
  tools: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6"
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-sm text-accent">
          04.
        </span>

        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Tech Stack & Skills
        </h2>

        <div className="h-px min-w-0 flex-1 bg-border" />
      </div>

      <p className="mb-8 max-w-4xl text-base leading-7 text-muted">
        Technologies and tools I have worked with across
        enterprise applications, web development, mobile
        development, and system integrations.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon =
            categoryIcons[
              category.id as keyof typeof categoryIcons
            ] ?? Cloud;

          return (
            <article
              key={category.id}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-accent">
                  <Icon size={22} aria-hidden="true" />
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${skill.name} website`}
                    className="
                    inline-flex items-center gap-2
                    rounded-md border border-border
                    bg-background px-3 py-2 text-sm text-muted
                    transition-colors duration-200
                    hover:border-accent/60 hover:text-accent
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-accent
                    "
                >
                    {skill.name}
                    <ExternalLink
                    size={13}
                    className="opacity-50"
                    aria-hidden="true"
                    />
                </a>
                ))}

              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
