import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "@/data/personal";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="w-full border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row">

        <p className="text-center text-xs text-muted">
          © {year} {personal.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {personal.github && (
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted transition-colors hover:text-accent"
            >
              <FaGithub size={20} aria-hidden="true" />
            </a>
          )}

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted transition-colors hover:text-accent"
          >
            <FaLinkedin size={20} aria-hidden="true" />
          </a>

          <a
            href={`mailto:${personal.email}`}
            aria-label="Send email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
