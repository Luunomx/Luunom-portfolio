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
  context: string;
  role: string;
  outcome: string;
  tags: string[];
  flow: string[];
  decisions: string[];
  proof: string[];
  accentBorder: string;
  accentFill: string;
};

const heroStats = [
  {
    value: ".NET / AWS",
    label: "Primary backend and cloud focus",
  },
  {
    value: "K8s / Terraform",
    label: "Infrastructure and delivery workflows",
  },
  {
    value: "Production",
    label: "Systems built for real operational use",
  },
];

const projectCases: ProjectCase[] = [
  {
    title: "Transport Booking & Operations Platform",
    eyebrow: "Featured case",
    status: "Private repository",
    summary:
      "A production-grade logistics platform for booking, pricing, validation, order handling, analytics, and external integrations.",
    context:
      "The platform acts as an application and control layer on top of an existing TMS, supporting operational transport flows for several hundred users and thousands of requests per week.",
    role:
      "Built product-facing flows, backend services, integration logic, validation boundaries, and cloud delivery workflows.",
    outcome:
      "Created a more reliable operational surface for transport bookings by separating application concerns from TMS-specific behavior and external API coordination.",
    tags: [
      "Expo",
      "React Native",
      "ASP.NET Core",
      "Firebase",
      "Terraform",
      "AWS",
    ],
    flow: [
      "Product flows",
      "Backend services",
      "Transport integrations",
      "Operational data",
    ],
    decisions: [
      "Kept transport-specific validation close to the booking flow so bad data is caught before downstream systems are touched.",
      "Separated orchestration logic from external API details to keep TMS, carrier, and address-provider integrations easier to reason about.",
      "Worked across application code and AWS delivery workflows to keep reliability visible from feature code through deployment.",
    ],
    proof: [
      "Booking, pricing, validation, and order handling flows",
      "External transport, carrier, and address integrations",
      "Production usage across recurring operational workflows",
    ],
    accentBorder: "border-emerald-400/60",
    accentFill: "bg-emerald-400",
  },
  {
    title: "Cloud-Native Bulletin Board Platform",
    eyebrow: "Cloud delivery case",
    status: "Private repository",
    summary:
      "A full-stack application built to demonstrate containerization, Kubernetes delivery, CI/CD, GitOps, Helm, and Terraform-based AWS infrastructure.",
    context:
      "The project focuses on the delivery path around a practical app: application services, container images, cluster deployment, ingress, registry flow, and infrastructure provisioning.",
    role:
      "Implemented the React frontend, ASP.NET Core backend, MongoDB-backed data handling, Docker packaging, Helm charts, GitOps workflow, and Terraform infrastructure.",
    outcome:
      "Turned a normal full-stack app into a deployable cloud system with repeatable infrastructure and clear environment boundaries.",
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
    flow: ["React app", ".NET API", "Container images", "Kubernetes cluster"],
    decisions: [
      "Used Helm to keep Kubernetes manifests reusable and environment-specific configuration explicit.",
      "Applied GitOps so deployment state can be reviewed and reconciled from source control.",
      "Provisioned AWS infrastructure with Terraform to keep networking, IAM, registry, and cluster setup reproducible.",
    ],
    proof: [
      "Dockerized frontend and backend services",
      "Helm, ingress routing, Argo CD, and GitHub Actions",
      "Terraform-managed AWS resources including VPC, IAM, EKS, ALB, and ECR",
    ],
    accentBorder: "border-sky-400/60",
    accentFill: "bg-sky-400",
  },
  {
    title: "Therapy Practice Website",
    eyebrow: "Product implementation case",
    status: "Private repository",
    summary:
      "A responsive practice website built with Expo Router and React Native Web, with static content, contact flows, technical SEO, and AWS-backed deployment.",
    context:
      "The project needed a calm public web presence with clear content, route-based pages, responsive navigation, contact actions, and static deployment.",
    role:
      "Built reusable UI components, route structure, responsive behavior, contact interactions, SEO metadata, robots, sitemap, and AWS deployment workflow.",
    outcome:
      "Delivered a maintainable client-facing website with practical contact paths and search-friendly technical foundations.",
    tags: [
      "Expo Router",
      "React Native Web",
      "TypeScript",
      "SEO",
      "AWS",
      "Terraform",
    ],
    flow: ["Routes", "Responsive UI", "Contact paths", "Static hosting"],
    decisions: [
      "Kept content-driven pages simple and route-based so future edits stay low-risk.",
      "Handled phone, email, map links, and clipboard copy as first-class user actions.",
      "Added metadata, robots, sitemap, and CI/CD so the public site has the basic production pieces around it.",
    ],
    proof: [
      "Responsive navigation and reusable components",
      "Email, phone, map, and copy interactions",
      "Static AWS hosting with infrastructure automation",
    ],
    accentBorder: "border-amber-400/60",
    accentFill: "bg-amber-400",
  },
  {
    title: "Rule-Based Data Processing Sandbox",
    eyebrow: "Systems exploration",
    status: "Private repository",
    summary:
      "A .NET 8 system for market-data ingestion, rule-based processing, backtesting, simulated execution, and runtime monitoring.",
    context:
      "The project explores long-running data-driven systems where ingestion, reconnect behavior, processing consistency, and runtime visibility matter.",
    role:
      "Built WebSocket ingestion, bar aggregation, multi-timeframe rule evaluation, backtesting paths, simulated execution, health metrics, and runtime reporting.",
    outcome:
      "Created a focused environment for testing reliability patterns around streaming data, stateful processing, and rule evaluation.",
    tags: ["C#", ".NET 8", "WebSockets", "Backtesting", "Docker"],
    flow: ["WebSocket data", "Aggregation", "Rule engine", "Runtime metrics"],
    decisions: [
      "Separated ingestion from processing so reconnect behavior and data transformation stay easier to test.",
      "Used backtesting paths to compare rule behavior before applying it to simulated runtime execution.",
      "Added health and runtime reporting to make long-running behavior observable instead of hidden.",
    ],
    proof: [
      "Bar aggregation and multi-timeframe evaluation",
      "Reconnect handling and runtime health metrics",
      "Backtesting and simulated execution loops",
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
      "System boundaries",
    ],
  },
  {
    title: "Cloud",
    items: ["AWS", "Azure", "Google Cloud", "IAM", "VPC", "Static hosting"],
  },
  {
    title: "DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Terraform",
      "GitHub Actions",
      "Argo CD",
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
      "Pipelines",
    ],
  },
  {
    title: "Working style",
    items: [
      "Clean code",
      "TDD basics",
      "Automation",
      "Documentation",
      "Reliability",
      "Customer context",
    ],
  },
];

const experience = [
  {
    title: "Software Developer Intern",
    organization: "Prioritaire STHLM AB",
    period: "2026",
    points: [
      "Built on a production logistics platform acting as a control layer over an existing TMS.",
      "Developed backend services for booking logic, pricing decisions, validation, and system orchestration.",
      "Worked with AWS, Terraform, CI/CD, and integrations across Opter, DHL, UPS, and Google APIs.",
    ],
  },
  {
    title: "Sales Representative",
    organization: "Sunpricer AB",
    period: "2019 - 2023",
    points: [
      "Worked in a fast-paced, target-driven environment with strong requirements on structure and prioritization.",
      "Built communication and problem-solving habits through daily customer interaction.",
      "Carried a disciplined, goal-oriented way of working into software projects and delivery work.",
    ],
  },
];

const education = [
  {
    title: "Cloud Developer",
    organization: "Campus Molndal",
    period: "2024 - 2026",
    detail: "Graduating summer 2026",
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
      jobTitle: "Cloud, DevOps, Backend, and Full-Stack Developer",
      sameAs: [siteContactLinks.github, siteContactLinks.linkedin],
      knowsAbout: [
        "Cloud infrastructure",
        "DevOps",
        "Backend development",
        "Full-stack development",
        "AWS",
        "Kubernetes",
        "Terraform",
        ".NET",
        "ASP.NET Core",
        "React",
        "TypeScript",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Campus Molndal",
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

function SystemFlow({ steps, accent }: { steps: string[]; accent: string }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2" aria-label="System flow">
      {steps.map((step) => (
        <li
          key={step}
          className="relative min-h-24 rounded-md border border-zinc-800 bg-zinc-950 p-4"
        >
          <div className={`h-1 w-10 rounded-full ${accent}`} />
          <p className="mt-5 text-sm font-semibold text-zinc-100">{step}</p>
        </li>
      ))}
    </ol>
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
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)]">
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
          <p className="mt-5 text-base leading-8 text-zinc-400">
            {project.context}
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="border-l border-zinc-700 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Role
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                {project.role}
              </p>
            </div>
            <div className="border-l border-zinc-700 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Result
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                {project.outcome}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>

        </div>

        <div className="space-y-8">
          <SystemFlow steps={project.flow} accent={project.accentFill} />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Key decisions
            </p>
            <ul className="mt-4 space-y-4 text-sm leading-7 text-zinc-400">
              {project.decisions.map((decision) => (
                <li key={decision} className="flex gap-3">
                  <span
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${project.accentFill}`}
                  />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Evidence
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-zinc-300">
              {project.proof.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-zinc-800 bg-zinc-950 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
                Backend / Cloud / DevOps
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                Hugo Hemlin
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                Developer focused on .NET backends, AWS infrastructure,
                Kubernetes delivery, and product-facing applications that need
                clear boundaries and operational reliability.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-500">
                I work best where application code, infrastructure, and real
                user workflows meet: booking logic, integrations, deployment
                paths, data processing, and maintainable product surfaces.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                  href="#projects"
                >
                  View case studies
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-zinc-700 px-5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                  href="/cv/Hugo-Hemlin-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-zinc-700 px-5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                  href={siteContactLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
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
                  Open to cloud, DevOps, backend, and full-stack roles where
                  reliability, automation, and practical architecture matter.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-zinc-900">
          <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
            <SectionHeader
              eyebrow="Selected work"
              title="Case studies with the architecture made visible"
              description="Most repositories are private, so the portfolio focuses on role, system shape, decisions, and evidence instead of only linking to code."
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

        <section id="contact">
          <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Open to opportunities
            </p>

            <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Looking for roles across cloud, DevOps, backend, and
                  full-stack product work.
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
                    href="/cv/Hugo-Hemlin-CV.pdf"
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
