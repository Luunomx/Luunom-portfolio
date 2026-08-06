import {
  contactLinks as siteContactLinks,
  siteDescription,
  siteName,
  siteUrl,
} from "../lib/site";
import { SiteChrome } from "./site-chrome";

type ProjectCase = {
  title: string;
  eyebrow: string;
  status: string;
  summary: string;
  contribution: string;
  learning: string;
  tags: string[];
  technicalEvidence: string[];
  technologyGroups?: { label: string; items: string[] }[];
  accentBorder: string;
  accentFill: string;
};

const heroStats = [
  {
    value: ".NET / React",
    label: "Full-stack application development",
  },
  {
    value: "AWS / Containers",
    label: "Cloud infrastructure and delivery workflows",
  },
  {
    value: "Hands-on projects",
    label: "Practical learning through real systems",
  },
];

const projectCases: ProjectCase[] = [
  {
    title: "Transport Booking & Operations Platform",
    eyebrow: "Featured case",
    status: "Private repository",
    summary:
      "A logistics platform supporting booking, pricing, validation, order handling, and integrations with transport-related services.",
    contribution:
      "During my internship, I contributed to application flows, backend functionality, validation, external integrations, and AWS-based deployment workflows.",
    learning:
      "Practical experience working in an existing codebase, integrating external systems, and understanding how application behavior connects to operational business processes.",
    tags: [
      "Expo",
      "React Native",
      "ASP.NET Core",
      "Firebase",
      "Terraform",
      "AWS",
    ],
    technicalEvidence: [
      "Booking, pricing, validation, and order handling flows",
      "External transport, carrier, and address integrations",
      "ASP.NET Core, Expo, React Native, Firebase, AWS, and Terraform",
    ],
    accentBorder: "border-emerald-400/60",
    accentFill: "bg-emerald-400",
  },
  {
    title: "Cloud-Native Bulletin Board Platform",
    eyebrow: "Cloud delivery case",
    status: "Private repository",
    summary:
      "A full-stack bulletin board application used as a practical foundation for learning containerization, Kubernetes, CI/CD, GitOps, and infrastructure as code.",
    contribution:
      "Built the application and the delivery setup around it, including the React frontend, ASP.NET Core Minimal API, MongoDB data handling, containers, Helm, and Terraform.",
    learning:
      "Learned how application code, container images, cluster configuration, GitHub Actions, Argo CD, and AWS infrastructure fit together in a repeatable delivery workflow.",
    tags: [
      "React",
      "ASP.NET Core",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Helm",
      "Argo CD",
      "Terraform",
      "AWS",
    ],
    technicalEvidence: [
      "React, ASP.NET Core Minimal API, and MongoDB",
      "Docker, Kubernetes, Helm, GitHub Actions, and Argo CD",
      "Terraform, AWS, container registries, and infrastructure configuration",
    ],
    technologyGroups: [
      {
        label: "Application",
        items: ["React", "ASP.NET Core Minimal API", "MongoDB"],
      },
      {
        label: "Delivery and infrastructure",
        items: [
          "Docker",
          "Kubernetes",
          "Helm",
          "GitHub Actions",
          "Argo CD",
          "Terraform",
          "AWS",
        ],
      },
    ],
    accentBorder: "border-sky-400/60",
    accentFill: "bg-sky-400",
  },
  {
    title: "Therapy Practice Website",
    eyebrow: "Product implementation case",
    status: "Private repository",
    summary:
      "A client-facing practice website focused on a responsive interface, clear route structure, contact actions, technical SEO, and deployment.",
    contribution:
      "Built the reusable interface, route structure, responsive navigation, phone and email actions, SEO metadata, robots, sitemap, and deployment workflow.",
    learning:
      "Practised keeping a small customer-facing website clear, maintainable, and easy to use across screen sizes without adding unnecessary complexity.",
    tags: [
      "Expo Router",
      "React Native Web",
      "TypeScript",
      "SEO",
      "AWS",
      "Terraform",
    ],
    technicalEvidence: [
      "Responsive navigation and reusable components",
      "Email, phone, map, and copy interactions",
      "Expo Router, React Native Web, TypeScript, SEO, AWS, and Terraform",
    ],
    accentBorder: "border-amber-400/60",
    accentFill: "bg-amber-400",
  },
  {
    title: "Rule-Based Data Processing Sandbox",
    eyebrow: "Systems exploration",
    status: "Private repository",
    summary:
      "A personal .NET project for exploring streaming data, WebSocket reliability, aggregation, rule evaluation, backtesting, and runtime monitoring.",
    contribution:
      "Built long-running processes for WebSocket ingestion, reconnect handling, stateful processing, aggregation, backtesting, and runtime monitoring.",
    learning:
      "Explored how streaming input, state, rule evaluation, and observability interact in a long-running system. It is a technical sandbox, not a finished trading product.",
    tags: ["C#", ".NET 8", "WebSockets", "Backtesting", "Docker"],
    technicalEvidence: [
      "Bar aggregation and multi-timeframe evaluation",
      "Reconnect handling and runtime health metrics",
      "Backtesting and rule-evaluation loops",
    ],
    accentBorder: "border-rose-400/60",
    accentFill: "bg-rose-400",
  },
];

const skillGroups = [
  {
    title: "Backend",
    items: [
      "C#",
      "ASP.NET Core",
      ".NET 8",
      "REST APIs",
      "Validation",
      "API design fundamentals",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Helm",
      "IAM fundamentals",
      "VPC fundamentals",
    ],
  },
  {
    title: "Delivery",
    items: [
      "GitHub Actions",
      "Argo CD",
      "CI/CD",
      "Git workflows",
      "Container registries",
      "Deployment workflows",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Expo",
      "React Native Web",
      "Responsive UI",
    ],
  },
  {
    title: "Data",
    items: [
      "MongoDB",
      "SQL",
      "WebSockets",
      "Backtesting",
      "Runtime monitoring",
      "Data processing",
    ],
  },
  {
    title: "Practices & Approach",
    items: [
      "Clean code principles",
      "TDD fundamentals",
      "Documentation",
      "System design fundamentals",
      "AI-assisted development",
      "Continuous learning",
    ],
  },
];

const experience = [
  {
    title: "Software Developer Intern",
    organization: "Prioritaire STHLM AB",
    period: "2026",
    points: [
      "Contributed to a logistics platform acting as an application layer on top of the existing TMS, Opter.",
      "Worked on backend functionality related to booking flows, pricing logic, validation, and system integrations.",
      "Integrated with external APIs including Opter, DHL, UPS, and Google APIs, and gained experience with AWS, Terraform, and CI/CD workflows.",
    ],
  },
  {
    title: "Sales Representative",
    organization: "Sunpricer AB",
    period: "2019 - 2023",
    points: [
      "Worked in a fast-paced, target-driven sales environment requiring structure, prioritization, and resilience.",
      "Developed strong communication and problem-solving skills through daily customer interaction.",
      "Built a disciplined and goal-oriented approach that I now apply to software development.",
    ],
  },
];

const education = [
  {
    title: "Cloud Developer",
    organization: "Campus Mölndal",
    period: "2024–2026",
    detail: "Completed June 2026",
  },
  {
    title: "Languages",
    organization: "Swedish and English",
    period: "Professional communication",
    detail: "Swedish native, English fluent",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "hugohemlin@hotmail.com",
    href: siteContactLinks.emailHref,
  },
  {
    label: "GitHub",
    value: "github.com/Luunomx",
    href: siteContactLinks.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hugo-hemlin",
    href: siteContactLinks.linkedin,
  },
];

const cvPath = "/cv/Hugo-Hemlin-CV.pdf";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Hugo Hemlin",
      alternateName: "Luunom",
      url: siteUrl,
      description: siteDescription,
      email: siteContactLinks.email,
      jobTitle: "Fullstack Developer",
      sameAs: [siteContactLinks.github, siteContactLinks.linkedin],
      knowsAbout: [
        "Backend development",
        "Full-stack development",
        "Cloud infrastructure",
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        ".NET",
        "ASP.NET Core",
        "React",
        "TypeScript",
        "Data processing",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Campus Mölndal",
      },
    },
    {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
      description: siteDescription,
    },
  ],
};

const jsonLd = JSON.stringify(structuredData).replace(/</g, "\\u003c");

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm leading-none text-zinc-300">
      {children}
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function CaseStudy({
  project,
  featured = false,
}: {
  project: ProjectCase;
  featured?: boolean;
}) {
  return (
    <article
      className={`rounded-md border border-zinc-800 bg-zinc-950/80 ${
        featured ? "p-6 sm:p-8" : "p-6"
      }`}
    >
      <div>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {project.eyebrow}
            </p>
            <span
              className={`rounded-md border px-3 py-1 text-xs font-semibold text-zinc-200 ${project.accentBorder}`}
            >
              {project.status}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            {project.summary}
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="border-l border-zinc-700 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                My contribution
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                {project.contribution}
              </p>
            </div>
            <div className="border-l border-zinc-700 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                What I learned
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                {project.learning}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        </div>

        {project.technologyGroups ? (
          <div className="mt-8 grid gap-5 border-t border-zinc-800 pt-7 sm:grid-cols-2">
            {project.technologyGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {group.label}
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-8 border-t border-zinc-800 pt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Technical evidence
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-zinc-300 sm:grid-cols-3">
            {project.technicalEvidence.map((item) => (
              <li
                key={item}
                className="rounded-md border border-zinc-800 bg-zinc-950 px-4 py-3"
              >
                <span
                  className={`mr-2 inline-block h-1.5 w-1.5 rounded-full ${project.accentFill}`}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <main className="min-h-screen bg-zinc-950 font-sans text-zinc-100">
        <SiteChrome />

        <section className="border-b border-zinc-900">
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.85fr)] lg:px-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Fullstack Developer · .NET · Cloud
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                Hugo Hemlin
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                I build full-stack applications with a particular interest in
                backend development, cloud infrastructure, and software
                architecture.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-500">
                My experience comes from an internship, academic work, and
                hands-on projects using .NET, React, Docker, Kubernetes,
                Terraform, and AWS.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                  href="#projects"
                >
                  View projects
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-zinc-700 px-5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                  href="#contact"
                >
                  Contact me
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-zinc-700 px-5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                  href={cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-md border border-zinc-800 bg-zinc-950 p-5"
                >
                  <p className="text-2xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}

              <div className="rounded-md border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Current direction
                </p>
                <p className="mt-4 text-base leading-7 text-zinc-300">
                  Open to full-stack, backend, and cloud-focused
                  development roles where I can continue learning while
                  contributing to practical software systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-zinc-900">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
            <SectionHeader
              eyebrow="About"
              title="A practical route into software development"
              description="I recently completed a two-year Cloud Developer programme at Campus Mölndal after transitioning into technology from a background in sales."
            />

            <div className="mt-8 grid gap-6 text-base leading-8 text-zinc-400 lg:grid-cols-2">
              <p>
                I am particularly interested in backend development, full-stack
                systems, cloud infrastructure, and understanding how different
                parts of a system work together.
              </p>
              <p>
                My experience comes mainly from an internship, academic work,
                and personal projects. I use AI-assisted development for
                research, code exploration, debugging, and comparing
                implementation approaches, while reviewing and working to
                understand the resulting code.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-zinc-900">
          <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
            <SectionHeader
              eyebrow="Selected work"
              title="Selected projects"
              description="A concise view of what each project is, what I contributed, the technologies involved, and the technical problems I explored."
            />

            <div className="mt-14">
              <CaseStudy project={projectCases[0]} featured />
            </div>

            <div className="mt-8 grid gap-8">
              {projectCases.slice(1).map((project) => (
                <CaseStudy key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-b border-zinc-900">
          <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
            <SectionHeader
              eyebrow="Technical range"
              title="The stack grouped by the problems it solves"
              description="A clearer view of the technologies behind the projects: backend services, cloud infrastructure, delivery workflows, frontend surfaces, and data-processing work."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-md border border-zinc-800 bg-zinc-950 p-6"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-b border-zinc-900">
          <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
            <SectionHeader
              eyebrow="Experience and education"
              title="A practical path into cloud and backend work"
              description="Experience, education, and language context that supports the project work and the roles I am targeting."
            />

            <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
              <div className="space-y-6">
                {experience.map((item) => (
                  <article
                    key={`${item.organization}-${item.title}`}
                    className="rounded-md border border-zinc-800 bg-zinc-950 p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                          {item.period}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-emerald-300">
                          {item.organization}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-4 text-sm leading-7 text-zinc-400">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="space-y-5">
                {education.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-md border border-zinc-800 bg-zinc-950 p-6"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                      {item.period}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-sky-300">
                      {item.organization}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cv" className="border-b border-zinc-900">
          <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeader
                eyebrow="CV"
                title="A concise overview"
                description="Download my CV for a concise overview of my experience, education, projects, and technical background."
              />

              <div className="flex flex-col gap-4 sm:flex-row lg:shrink-0">
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                  href={cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-zinc-700 px-5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                  href={cvPath}
                  download
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Open to opportunities
            </p>

            <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Looking for full-stack, backend, and cloud-focused
                  development roles.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
                  The best conversation is usually around architecture,
                  tradeoffs, implementation details, and how a system behaves
                  once people actually depend on it.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                    href={siteContactLinks.emailHref}
                  >
                    Email me
                  </a>
                  <a
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-zinc-700 px-5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                    href={cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View CV
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    className="rounded-md border border-zinc-800 bg-zinc-950 px-5 py-4 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                      {link.label}
                    </p>
                    <p className="mt-2 break-words text-base font-medium text-zinc-100">
                      {link.value}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
