
import { experiences } from "@/data/experience";
import { BriefcaseBusiness } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-sm text-accent">
          02.
        </span>

        <h2 className="text-3xl font-bold text-foreground">
          Professional Experience
        </h2>

        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="relative ml-3 border-l border-border">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="relative pb-12 pl-9 last:pb-0"
          >
            <span className="absolute -left-[9px] top-6 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-accent bg-background">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 sm:p-8">
              <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {experience.role}
                  </h3>

                  <p className="mt-1 flex items-center gap-2 text-sm text-accent">
                    <BriefcaseBusiness size={15} />
                    {experience.company}
                  </p>
                </div>

                <span className="font-mono text-xs text-muted">
                  {experience.period}
                </span>
              </div>

              <ul className="space-y-3">
                {experience.description.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-muted"
                  >
                    <span className="mt-1 text-accent">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
