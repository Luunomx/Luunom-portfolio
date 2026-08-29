---
name: portfolio-diagrams
description: Create or edit the portfolio's dark-theme, interview-safe SVG architecture and deployment diagrams with consistent layout, arrow geometry, labels, and render validation.
---

# Portfolio diagrams

Use this skill for the portfolio's technical SVGs: architecture maps, deployment flows, request paths, research pipelines, and similar interview-safe visuals. It governs the visual language and quality bar, not a fixed composition. Choose the structure that explains the specific system most naturally.

## Inspect before designing

Read the existing diagrams and the page that references them:

- `public/projects/kubernetes-solution/architecture.svg`
- `public/projects/kubernetes-solution/deployment-flow.svg`
- `public/projects/prioritaire/system-overview.svg`
- `public/projects/bot/research-flow.svg`
- `public/projects/lovable-webapp/delivery-flow.svg`
- `app/page.tsx`

Also inspect the relevant project source or README when the diagram describes a private repository. Treat current source and the user's explicit corrections as authoritative; do not carry infrastructure from an older version into a new diagram.

Select the visual form from the system's actual story:

- use lanes or a timeline for an ordered delivery process;
- use a request path for browser/API traffic;
- use a hub-and-spoke or converging flow when several modes share one core;
- use grouped boundaries when ownership, trust, or hosting boundaries matter;
- combine forms only when the relationships remain immediately readable.

Different projects should not receive identical diagrams merely for consistency. Consistency comes from the design system, typography, colors, arrow geometry, spacing, and restraint.

## Visual language

Use the established dark portfolio style:

- background gradient from approximately `#0b1220` to `#172554`, with quiet navy/indigo atmosphere shapes;
- rounded cards, restrained shadows, and generous spacing;
- title text in `#f8fafc`, supporting text in `#cbd5e1`/`#e2e8f0`, separators in `#334155`;
- blue/purple for application or user-facing surfaces;
- teal/cyan for delivery, runtime, or data flow;
- green for identity, policy, or access context;
- amber/orange for infrastructure, cost, gates, or human decisions;
- slate for supporting systems and neutral context.

Use Inter when available, with a system sans fallback. Keep one clear title, a readable subtitle, and a restrained number of labels. Avoid making every card the same color when color can communicate meaning.

## Layout and text quality

- Give each diagram a clear reading direction and a visible visual hierarchy.
- Center a heading over the group it names; do not align it to an arbitrary canvas edge.
- Leave deliberate vertical space between titles, separators, labels, and cards.
- Treat every card as a fixed container. Calculate its usable width from its padding and manually wrap long text with `<tspan>` elements.
- Never let text clip, run behind a neighboring card, cross a border, or sit on top of an unrelated route.
- Prefer a short second line or a larger card over shrinking text until it becomes blurry.
- Put route labels on the route they describe. Give labels a dark paint-backed stroke (for example the `flow-label` treatment) when a line passes behind them.
- Keep the SVG responsive with a `viewBox`, but inspect it at the scale used by the portfolio; a diagram that only works when zoomed in is not finished.

## Arrow geometry

Every flow arrow must finish with a clean triangular tip. The line must stop at the marker base so it does not continue under the triangle and create a blunt tip, dot, or double-looking end.

Use compact, user-space markers with the actual route color:

```svg
<marker id="tip-arrow" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="10" refX="0" refY="5" orient="auto">
  <path d="M0,0 L0,10 L14,5 z" fill="#93c5fd"/>
</marker>
```

- Stop horizontal routes inside the gap between cards; the tip belongs in the gap, not inside the next card.
- Apply the same rule to vertical and curved routes.
- Keep arrows visually distinct from separator rules; separators do not get arrow markers.
- Avoid routes that cross body text. Route around a panel or use a clear gap instead.
- Keep a label centered on its route when that makes the relationship obvious, and use deliberate two-line labels when necessary.

## Sanitization

Diagrams for private repositories or clients must contain no secrets, credentials, live data, private endpoints, account IDs, bucket IDs, client-sensitive details, or claims that the source does not support. Use generic labels such as “private origin”, “paper runtime”, or “branch-scoped access” when the implementation detail is not safe to publish.

## Validation workflow

After each meaningful SVG change:

1. Run `xmllint --noout` on every changed SVG.
2. Render each SVG with the available local renderer (normally `sharp`) and inspect the full image plus dense crops around labels, card edges, routes, and arrowheads.
3. Check the actual visual reading order, card bounds, text wrapping, arrow tips, and route-label attachment.
4. Run `git diff --check`.
5. If page code or asset references changed, run the relevant project checks and follow `AGENTS.md`; read the applicable Next.js guide before changing Next.js code.

Use `apply_patch` for repository edits. Keep the asset as SVG rather than replacing it with a raster screenshot.

Only commit, push, or verify the Vercel deployment when the user asks for publication. When verifying a deployment, compare the fetched asset hash with the local SVG after propagation.
