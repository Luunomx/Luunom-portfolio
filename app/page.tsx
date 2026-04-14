const featuredProject = {
  title: "Transport Booking & Operations Platform",
  status: "Internal / Private",
  summary:
    "Full-stack transport booking app with booking validation, live pricing, order tracking, analytics, and secure integration with an external TMS.",
  description:
    "Built as an operational system for authenticated business users, combining booking flows, pricing, order management, calendar views, company statistics, and profile data in one product.",
  tags: [
    "Expo",
    "React Native",
    "ASP.NET Core",
    "Firebase",
    "Terraform",
    "AWS",
  ],
  highlights: [
    "Built full-stack flows for booking, orders, calendar, statistics, and profile management.",
    "Implemented backend logic for booking validation, live pricing, order sync, and company-scoped reporting.",
    "Integrated external TMS, address validation, and shipping-time services into a single workflow.",
  ],
};

const supportingProjects = [
  {
    title: "Cloud-Native Bulletin Board App",
    status: "In Progress",
    summary:
      "Full-stack bulletin board built with React, ASP.NET Core, MongoDB, and a deployment path spanning Docker, Helm, GitOps, and AWS EKS.",
    tags: ["React", "ASP.NET Core", "MongoDB", "Kubernetes", "Terraform"],
    highlights: [
      "Built a React and .NET application with MongoDB-backed post creation and retrieval.",
      "Containerized frontend and backend services and packaged them for Kubernetes with Helm and nginx routing.",
      "Set up CI/CD, GitOps, and AWS EKS infrastructure to support end-to-end deployment.",
    ],
  },
];

const experimentalProject = {
  title: "Experimental Trading Bot Sandbox",
  status: "Experimental",
  summary:
    "Experimental .NET 8 sandbox for backtesting, WebSocket market-data ingestion, rule-based strategy signals, risk gates, and simulated crypto paper execution.",
  tags: ["C#", ".NET 8", "WebSockets", "Backtesting", "Docker"],
  highlights: [
    "Built a bar-based backtesting pipeline with multi-timeframe indicators, risk checks, and CSV or chart-based reporting.",
    "Implemented futures WebSocket ingestion with auth signing, parsing, reconnect handling, and health metrics.",
    "Added simulated execution, position tracking, and deployment scaffolding for long-running runtime experiments.",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans text-zinc-100">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
          Portfolio
        </p>

        <div className="mt-6 max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Luunom
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-xl">
            Cloud developer student building modern web apps with a focus on
            thoughtful UX, reliable architecture, and clean execution.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
            href="https://github.com/Luunomx"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-700 px-5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
            href="#projects"
          >
            View projects
          </a>
        </div>
      </section>

      <section id="projects" className="border-t border-zinc-800">
        <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Selected work
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
            Full-stack and cloud-focused projects across internal operations,
            deployment architecture, and technical experimentation.
          </p>

          <div className="mt-14 grid gap-10 border-t border-zinc-800 pt-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Featured Project
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
              Supporting Projects
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
              Cloud delivery and application work
            </h3>

            <div className="mt-8 grid gap-6">
              {supportingProjects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-md border border-zinc-800 p-6"
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
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-zinc-800 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Experimental
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
              Trading systems research
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">
              Engineering-focused exploration of market-data pipelines,
              strategy evaluation, and simulated execution rather than a
              performance claim.
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
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
