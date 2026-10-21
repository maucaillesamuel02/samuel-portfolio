"use client";

import { useState } from "react";
import { personal } from "@/data/personal";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-accent"
        >
          {personal.initials}
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-md border border-accent px-5 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="rounded-md border border-border p-2 text-accent md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true" className="text-xl">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full border-t border-border bg-surface px-6 py-6 shadow-xl md:hidden"
        >
            <div className="flex flex-col gap-5">
            {[...links, { label: "Contact", href: "#contact" }].map(
                (link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-muted transition-colors hover:text-accent"
                >
                    {link.label}
                </a>
                )
            )}
            </div>
        </div>
        )}
    </header>
  );
}
