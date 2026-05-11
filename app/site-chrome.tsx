"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function SiteChrome() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window === "undefined" ? false : window.scrollY > 12,
  );

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  useEffect(() => {
    const observedSections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry?.target.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0.01,
      },
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16"
        aria-label="Primary navigation"
      >
        <a className="site-brand" href="#">
          Hugo Hemlin
        </a>

        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden items-center gap-2 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                className={`site-nav-link ${
                  activeSection === item.href ? "is-active" : ""
                }`}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="theme-toggle"
            type="button"
            aria-label="Toggle color theme"
            title="Toggle color theme"
            onClick={() => {
              const currentTheme =
                document.documentElement.dataset.theme === "light"
                  ? "light"
                  : "dark";
              const nextTheme = currentTheme === "dark" ? "light" : "dark";

              applyTheme(nextTheme);
              window.localStorage.setItem("theme", nextTheme);
            }}
          >
            <span className="theme-toggle__track" aria-hidden="true">
              <span className="theme-toggle__thumb" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
