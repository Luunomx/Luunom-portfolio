import Image from "next/image";
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
  repositoryHref?: string;
  websiteHref?: string;
  localSetupHref?: string;
  diagrams?: {
    title: string;
    description: string;
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
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
    eyebrow: "Internship experience",
    status: "Confidential client project",
    summary:
      "A client-facing logistics platform supporting transport booking, pricing, validation, order handling, and integrations with external transport systems.",
    contribution:
      "During my internship, I contributed to application flows, backend functionality, validation, external integrations, and AWS-based deployment workflows within an existing codebase.",
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
    diagrams: [
      {
        title: "Sanitized system overview",
        description:
          "A high-level, interview-safe view of the application, delivery control plane, and AWS runtime boundary.",
        src: "/projects/prioritaire/system-overview.svg",
        alt: "Sanitized system overview showing company users, a React Native frontend, Firebase authentication, an ASP.NET Core API, logistics integrations, data stores, CI/CD, Terraform, and AWS runtime services.",
        caption:
          "Sanitized architecture overview — no secrets, live data, or private endpoints",
        width: 1500,
        height: 1240,
      },
    ],
    accentBorder: "border-emerald-400/60",
    accentFill: "bg-emerald-400",
  },
  {
    title: "BulletinBoard — Production-Minded Kubernetes Platform",
    eyebrow: "Cloud delivery · Production-minded platform",
    status: "Public repository",
    summary:
      "A full-stack bulletin board application with a production-minded delivery path from local Docker development to AWS EKS, including signed images, GitOps, secrets, backups, observability, and operational verification.",
    contribution:
      "Built the React/Vite frontend and ASP.NET Core 8 API around a delivery platform with MongoDB, WebSockets, Docker Compose, GitHub Actions image promotion, SBOM/provenance and Cosign signing, Terraform EKS provisioning, Argo CD bootstrap, least-privilege IAM/IRSA, and optional backup/observability profiles.",
    learning:
      "Learned how to design beyond the happy path: OIDC and approval gates, immutable artifacts, health/readiness, rate limiting, persistent storage, TLS, restore drills, observability, secret rotation, and day-two operations.",
    tags: [
      "React/Vite",
      "ASP.NET Core 8",
      "MongoDB",
      "WebSockets",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Terraform",
      "AWS EKS",
    ],
    technicalEvidence: [
      "React/Vite + ASP.NET Core 8 API + MongoDB with REST, WebSockets, health checks and metrics",
      "GitHub Actions tests, scans, SBOM/provenance, Cosign signing, and immutable GHCR image promotion",
      "Terraform-provisioned EKS with Argo CD, IRSA, secrets, TLS, persistent storage, backup/restore and observability",
    ],
    technologyGroups: [
      {
        label: "Application",
        items: [
          "React/Vite",
          "ASP.NET Core 8 Minimal API",
          "MongoDB",
          "WebSockets",
        ],
      },
      {
        label: "Delivery and infrastructure",
        items: [
          "Docker",
          "GitHub Actions",
          "GHCR",
          "Cosign/SBOM",
          "Helm",
          "Argo CD",
          "Kubernetes",
          "Terraform",
          "AWS EKS",
          "IRSA/KMS",
          "Secrets Manager",
        ],
      },
      {
        label: "Operations and resilience",
        items: [
          "NGINX Ingress",
          "cert-manager TLS",
          "Health checks",
          "Rate limiting",
          "HPA/PDB",
          "MongoDB replica set",
          "Redis backplane",
          "S3 backup/restore",
          "Prometheus/Grafana",
          "Loki/Tempo",
        ],
      },
    ],
    repositoryHref: "https://github.com/Luunomx/kubernetes-solution",
    localSetupHref:
      "https://github.com/Luunomx/kubernetes-solution#run-locally",
    diagrams: [
      {
        title: "Architecture overview",
        description:
          "Application components, delivery workflow, and AWS runtime architecture.",
        src: "/projects/kubernetes-solution/architecture.svg",
        alt: "Architecture diagram showing the React and ASP.NET Core application moving through Docker, GHCR, Helm, Argo CD, and AWS EKS Kubernetes infrastructure with secrets, backups, and observability.",
        caption:
          "Local development → tested and signed containers → GitOps → Kubernetes/AWS runtime",
        width: 1500,
        height: 1020,
      },
      {
        title: "Production deployment flow",
        description:
          "The ordered path from prerequisites and access to verification and day-two operations.",
        src: "/projects/kubernetes-solution/deployment-flow.svg",
        alt: "Numbered production deployment flow showing AWS and GitHub preparation, Terraform provisioning, Argo CD reconciliation, EKS verification, approval gates, and day-two operations.",
        caption:
          "Prepare → provision → reconcile and verify → production gate and operations",
        width: 1500,
        height: 1150,
      },
    ],
    accentBorder: "border-sky-400/60",
    accentFill: "bg-sky-400",
  },
  {
    title: "Therapy Practice Website",
    eyebrow: "Client website",
    status: "Client project",
    summary:
      "A client-facing practice website focused on a responsive interface, clear route structure, contact actions, technical SEO, and a low-cost static AWS deployment.",
    contribution:
      "Built the reusable interface, route structure, responsive navigation, phone and email actions, SEO metadata, robots, sitemap, and deployment workflow. The current small-traffic AWS setup is approximately $0.70/month, with cost varying by traffic and media delivery.",
    learning:
      "Practised keeping a small customer-facing website clear, maintainable, and easy to use across screen sizes without adding unnecessary complexity.",
    tags: [
      "Expo Router",
      "React Native Web",
      "TypeScript",
      "SEO",
      "AWS",
      "Terraform",
      "S3",
      "CloudFront",
    ],
    technicalEvidence: [
      "Responsive navigation and reusable components",
      "Email, phone, map, and copy interactions",
      "Expo Router, React Native Web, TypeScript, SEO, private S3, CloudFront, and Terraform",
    ],
    websiteHref: "https://wearelovable.se",
    diagrams: [
      {
        title: "Static delivery and request flow",
        description:
          "A sanitized view of the separate release path and visitor request path for the client website.",
        src: "/projects/lovable-webapp/delivery-flow.svg",
        alt: "Sanitized flow diagram showing a private Expo and React Native Web client website moving through GitHub Actions, Terraform, private S3, CloudFront, Route 53, and the public wearelovable.se domain, with an approximate low AWS cost.",
        caption:
          "Private client code · release path + request path · approximately $0.70/month at current small traffic",
        width: 1500,
        height: 1130,
      },
    ],
    accentBorder: "border-amber-400/60",
    accentFill: "bg-amber-400",
  },
  {
    title: "Regime-Aware Crypto Trading Research Platform",
    eyebrow: "Trading systems & research",
    status: "Private repository",
    summary:
      "A .NET 8 BTC futures research and paper-trading workbench with multi-venue market data, regime-based strategy routing, historical backtesting, event replay, and headless run control.",
    contribution:
      "Built the paper-trading and research workflow around WebSocket market data, reconnect and health handling, futures paper execution, risk and position controls, multi-timeframe strategy evaluation, backtesting, replay, and API-driven report management.",
    learning:
      "Learned how to keep strategy research, simulated execution, and observability aligned across historical candles, captured market events, and venue-specific paper streams. The system remains research- and paper-trading focused rather than a live-capital product.",
    tags: [
      "C#",
      ".NET 8",
      "Crypto Futures",
      "Paper Trading",
      "Strategy Routing",
      "WebSockets",
      "Backtesting",
      "Event Replay",
      "Docker",
    ],
    technicalEvidence: [
      "Regime-aware strategy routing with specialist playbooks and structured diagnostics",
      "Paper futures execution with position, risk, order, fill, reconnect, and health handling",
      "Historical backtests, cross-venue research, event replay, and headless API/report control",
    ],
    diagrams: [
      {
        title: "Research and paper-trading flow",
        description:
          "A sanitized view of Bot Control, paper and backtest modes, shared strategy execution, runtime evidence, and review outputs.",
        src: "/projects/bot/research-flow.svg",
        alt: "Sanitized flow diagram showing a private crypto trading bot workbench moving from Bot Control and configuration through paper, backtest, and replay modes into strategy routing, paper execution, runtime evidence, and research review outputs.",
        caption:
          "Private repository · paper and research focused · no live-trading path by default",
        width: 1500,
        height: 1190,
      },
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

          {project.repositoryHref || project.websiteHref ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.repositoryHref ? (
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                  href={project.repositoryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View public repository ↗
                </a>
              ) : null}
              {project.websiteHref ? (
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                  href={project.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live website ↗
                </a>
              ) : null}
            </div>
          ) : null}

          {project.localSetupHref ? (
            <div className="mt-8 rounded-md border border-zinc-800 bg-zinc-950 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                Try it locally
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300">
                Want to see the application in action? Run it locally with
                Docker Compose. The README includes both a quick in-memory mode
                and a persistent MongoDB-backed mode.
              </p>
              <a
                className="mt-4 inline-flex text-sm font-semibold text-sky-300 underline decoration-sky-300/40 underline-offset-4 transition-colors hover:text-white"
                href={project.localSetupHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the local setup in the README ↗
              </a>
            </div>
          ) : null}
        </div>

        {project.diagrams ? (
          <section className="mt-8 border-t border-zinc-800 pt-7" aria-label="Architecture and delivery diagrams">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {project.diagrams.length > 1
                ? "Architecture and delivery"
                : "System overview"}
            </p>
            <p className="mt-2 text-sm leading-7 text-zinc-400">
              {project.diagrams.length > 1
                ? "Open either diagram to explore the production-minded application, delivery, and operations path."
                : "Open the sanitized overview to explore the application, delivery control plane, and AWS runtime boundary."}
            </p>
            <div className="mt-5 grid gap-4">
              {project.diagrams.map((diagram) => (
                <details
                  key={diagram.title}
                  className="diagram-disclosure rounded-md border border-zinc-800 bg-zinc-950/70"
                >
                  <summary className="diagram-disclosure__summary flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4">
                    <span>
                      <span className="block text-base font-semibold text-zinc-100">
                        {diagram.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-zinc-400">
                        {diagram.description}
                      </span>
                    </span>
                    <span
                      className="diagram-disclosure__icon shrink-0 text-2xl font-light leading-none text-sky-300"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="border-t border-zinc-800 px-3 pb-4 pt-3 sm:px-4 sm:pb-5 sm:pt-4">
                    <div className="flex justify-end">
                      <a
                        className="text-sm font-semibold text-sky-300 underline decoration-sky-300/40 underline-offset-4 transition-colors hover:text-white"
                        href={diagram.src}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open full-size diagram ↗
                      </a>
                    </div>
                    <div className="mt-4 overflow-hidden rounded-lg border border-zinc-800 bg-[#0b1220] p-2 sm:p-3">
                      <Image
                        src={diagram.src}
                        width={diagram.width}
                        height={diagram.height}
                        sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) calc(100vw - 5rem), 1024px"
                        className="h-auto w-full"
                        alt={diagram.alt}
                        unoptimized
                      />
                    </div>
                    <p className="mt-3 text-sm text-zinc-500">
                      {diagram.caption}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        ) : null}

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
