const featuredProject = {
  title: "Transport Booking & Operations Platform",
  status: "Private Project",
  summary:
    "Production-grade platform for booking, pricing, validation, order handling, analytics, and integrations.",
  description:
    "Built as the operational interface around an existing TMS, giving teams a clearer control layer for day-to-day transport workflows across booking, pricing, validation, order handling, and reporting.",
  tags: [
    "Expo",
    "React Native",
    "ASP.NET Core",
    "Firebase",
    "Terraform",
    "AWS",
  ],
  highlights: [
    "Built the application layer on top of an existing TMS for booking, pricing, validation, and order workflows.",
    "Integrated external services for transport logic, pricing, and operational data handling.",
    "Delivered a system shaped by real operational needs, reliability, and clear service boundaries.",
  ],
  actions: [
    { label: "Details on request", href: "#contact" },
    { label: "View CV", href: "/cv/Cv-eng.pdf", external: true },
  ],
};

const supportingProjects = [
  {
    title: "Cloud-Native Bulletin Board App",
    status: "Private Project",
    summary:
      "Full-stack application used to demonstrate containerization, Kubernetes delivery, CI/CD, GitOps, Helm, and AWS plus Terraform-based deployment workflows.",
    tags: ["React", "ASP.NET Core", "MongoDB", "Kubernetes", "Terraform"],
    highlights: [
      "Built and containerized a React and ASP.NET Core application with MongoDB-backed data handling.",
      "Packaged the system for Kubernetes with Helm, ingress routing, and GitOps workflows.",
      "Applied end-to-end cloud delivery practices across CI/CD and AWS infrastructure provisioning.",
    ],
    actions: [{ label: "Details on request", href: "#contact" }],
  },
  {
    title: "Therapy Practice Website",
    status: "Private Project",
    summary:
      "Responsive practice website built with Expo Router and React Native Web, with static content, contact flows, technical SEO, and AWS-backed deployment.",
    tags: [
      "Expo Router",
      "React Native Web",
      "TypeScript",
      "AWS",
      "Terraform",
    ],
    highlights: [
      "Built route-based pages, reusable UI components, responsive navigation, and a cross-platform hero video.",
      "Implemented contact interactions with email, phone, map links, and clipboard copy behavior.",
      "Added SEO metadata, robots and sitemap generation, and CI/CD for static hosting on AWS.",
    ],
    actions: [{ label: "Details on request", href: "#contact" }],
  },
];

const experimentalProject = {
  title: "Rule-Based Data Processing Sandbox",
  status: "Private Project",
  summary:
    ".NET 8 system for market-data ingestion, rule-based processing, backtesting, simulated execution, and runtime monitoring.",
  tags: ["C#", ".NET 8", "WebSockets", "Backtesting", "Docker"],
  highlights: [
    "Built pipelines for bar aggregation, backtesting, and multi-timeframe rule evaluation.",
    "Implemented WebSocket ingestion, reconnect handling, health metrics, and runtime reporting.",
    "Used the project to explore reliability patterns for long-running data-driven systems.",
  ],
  actions: [{ label: "Details on request", href: "#contact" }],
};

const contactLinks = [
  {
    label: "Email",
    value: "hugohemlin@hotmail.com",
    href: "mailto:hugohemlin@hotmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Luunomx",
    href: "https://github.com/Luunomx",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hugo-hemlin",
    href: "https://linkedin.com/in/hugo-hemlin/",
  },
];

type ProjectAction = {
  label: string;
  href: string;
  external?: boolean;
};

function ProjectActions({ actions }: { actions: ProjectAction[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {actions.map((action) => (
        <a
          key={action.label}
          className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-800 px-4 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
        >
          {action.label}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans text-zinc-100">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
          Cloud / DevOps / Full-Stack
        </p>

        <div className="mt-6 max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Luunom
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-xl">
            Building reliable systems, cloud infrastructure, and modern
            applications.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            Backend systems, cloud delivery workflows, and product-facing
            applications built for reliability, clear architecture, and real
            operational use.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
            href="#projects"
          >
            View projects
          </a>
          <a
            className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-700 px-5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
            href="/cv/Cv-eng.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
          <a
            className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-700 px-5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
            href="https://github.com/Luunomx"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <section id="projects" className="border-t border-zinc-800">
        <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Selected Work
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Production systems and supporting work
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
            Real-world systems, cloud delivery, and engineering-focused side
            work.
          </p>

          <div className="mt-14 grid gap-10 border-t border-zinc-800 pt-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Featured Platform
                </p>
                <span className="rounded-md border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300">
                  {featuredProject.status}
                </span>
              </div>

              <h3 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {featuredProject.title}
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
                {featuredProject.summary}
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
                {featuredProject.description}
              </p>

              <ProjectActions actions={featuredProject.actions} />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Stack
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-800 px-3 py-2 text-sm text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Scope
                </p>
                <ul className="mt-4 space-y-4 text-sm leading-7 text-zinc-400 sm:text-base">
                  {featuredProject.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-zinc-800 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Supporting Work
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
              Cloud delivery and full-stack implementation
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
              Additional projects focused on cloud delivery, infrastructure
              automation, and practical full-stack implementation.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {supportingProjects.map((project) => (
                <article
                  key={project.title}
                  className="h-full rounded-md border border-zinc-800 p-6"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h4>
                    <span className="rounded-md border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300">
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-zinc-800 px-3 py-2 text-sm text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-zinc-400">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <ProjectActions actions={project.actions} />
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-zinc-800 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Algorithmic Systems & Data Processing
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
              Data pipelines, processing, and runtime reliability
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">
              Engineering-focused work around data pipelines, rule-based
              processing, backtesting, and runtime reliability.
            </p>

            <article className="mt-8 rounded-md border border-zinc-800 p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="text-xl font-semibold tracking-tight text-white">
                  {experimentalProject.title}
                </h4>
                <span className="rounded-md border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300">
                  {experimentalProject.status}
                </span>
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
                {experimentalProject.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {experimentalProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-zinc-800 px-3 py-2 text-sm text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-zinc-400">
                {experimentalProject.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <ProjectActions actions={experimentalProject.actions} />
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-zinc-800">
        <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Open to Opportunities
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Open to cloud, DevOps, backend, and full-stack roles.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
                Available for backend systems, cloud infrastructure, deployment
                workflows, and modern application work. Most of the projects
                shown here are private, but I can walk through architecture,
                tradeoffs, and implementation details in conversation.
              </p>
            </div>

            <div className="grid gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  className="rounded-md border border-zinc-800 px-5 py-4 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                    {link.label}
                  </p>
                  <p className="mt-2 text-base font-medium text-zinc-100">
                    {link.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
