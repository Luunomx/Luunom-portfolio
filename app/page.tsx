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
            Featured project first. The rest of the portfolio can now build
            around a clear, production-shaped case instead of a generic list.
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

          <p className="mt-10 text-sm leading-7 text-zinc-500">
            Next up: the Kubernetes-hosted full-stack app, the finished website
            project, and the trading bot as an experimental build.
          </p>
        </div>
      </section>
    </main>
  );
}
