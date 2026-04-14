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
            A curated set of cloud-focused and full-stack projects will live
            here next.
          </p>
        </div>
      </section>
    </main>
  );
}
