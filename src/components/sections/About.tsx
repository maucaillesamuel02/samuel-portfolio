const highlights = [
  "Enterprise web and mobile development",
  "Backend APIs and cloud integrations",
  "Collaboration with US-based engineering teams",
];

export default function About() {
  return (
      <section
        id="about"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-6"
     >

      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-sm text-accent">
          01.
        </span>
        <h2 className="text-3xl font-bold text-foreground">
          About Me
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

    <div className="flex min-w-0 flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0 space-y-5 break-words text-base leading-8 text-muted">          <p>
            I&apos;m a Full Stack Software Engineer based in Lima,
            Peru, with experience developing enterprise web
            and mobile applications.
          </p>

          <p>
            My main focus is backend development with C# and
            .NET, combined with frontend technologies such
            as React, React Native, Angular, and TypeScript.
          </p>

          <p>
            I&apos;ve contributed to HR technology and financial
            applications, working with REST APIs, cloud
            services, databases, and enterprise integrations.
          </p>

          <p>
            I enjoy solving technical challenges, learning
            new technologies, and collaborating with
            engineering teams to build reliable software.
          </p>
        </div>

<div className="min-w-0 rounded-xl border border-border bg-surface p-5 sm:p-7">          <h3 className="mb-6 text-xl font-semibold text-foreground">
            What I Bring
          </h3>

          <div className="space-y-5">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3"
              >
                <span className="mt-1 text-accent">▹</span>
                <p className="text-sm leading-7 text-muted">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <p className="font-mono text-xs text-accent">
              CORE TECHNOLOGIES
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "C#",
                ".NET",
                "React",
                "TypeScript",
                "SQL Server",
                "Firestore",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border px-3 py-2 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
