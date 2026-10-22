import { personal } from "@/data/personal";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (    
      <section
        id="home"
        className="mx-auto flex w-full min-w-0 max-w-6xl flex-col px-6 pt-16 md:pt-24"
      >

      <p className="mb-5 font-mono text-sm text-accent">
        Hi, my name is
      </p>

      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        {personal.name}.
      </h1>

      <h2 className="mb-6 max-w-4xl text-3xl font-bold tracking-tight text-muted sm:text-5xl lg:text-6xl">
        {personal.headline}
      </h2>

      <p className="mb-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
        {personal.description}
      </p>

      <div className="mb-8 flex flex-wrap gap-3">
        {["C#", ".NET", "React", "TypeScript"].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-cyan-300"
        >
          View My Work →
        </a>

        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10"
        >
          Get in Touch
        </a>
      </div>  
          
    <div className="mt-8 flex flex-col items-start gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
      {/* Location */}
      <div className="flex items-center gap-2">
        <MapPin
          size={16}
          className="shrink-0 text-accent"
        />
        <span>{personal.location}</span>
      </div>

      {/* Availability */}
      <div className="flex min-w-0 items-start gap-2">
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />

        <span className="min-w-0 break-words">
          {personal.availability}
        </span>
      </div>
    </div>
    </section>
  );
}
