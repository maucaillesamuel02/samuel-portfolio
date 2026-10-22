import { Mail } from "lucide-react";
import { personal } from "@/data/personal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6"
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-sm text-accent">
          05.
        </span>

        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Get In Touch
        </h2>

        <div className="h-px min-w-0 flex-1 bg-border" />
      </div>

      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="mb-4 font-mono text-sm text-accent">
          WHAT&apos;S NEXT?
        </p>

        <h3 className="mb-6 text-3xl font-bold text-foreground sm:text-5xl">
          Let&apos;s build something great.
        </h3>

        <p className="mb-8 text-base leading-8 text-muted">
          I&apos;m open to remote software engineering
          opportunities and interested in collaborating with
          teams building meaningful products.
          Whether you have an opportunity or just want to
          connect, feel free to reach out.
        </p>

        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-3 rounded-md border border-accent px-7 py-4 text-sm font-semibold text-accent transition-colors hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <Mail size={18} aria-hidden="true" />
          Say Hello
        </a>
      </div>
    </section>
  );
}
