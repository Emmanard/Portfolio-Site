# Emmanuel Omunizua — Portfolio

Personal portfolio for a full-stack and React Native engineer. Built with
Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion.
Live at https://emmanuel-omunizua.vercel.app

## Structure

| Path | What it is |
|---|---|
| `app/` | Layout (fonts, metadata, pre-paint intro check) and the single page |
| `components/` | One component per section: Hero, Work, Proof, Stack, Experience, … |
| `components/Intro.tsx` | Terminal-style welcome screen that splits open to reveal the page |
| `components/Typed.tsx` | Terminal typing effect (used for the name and headline only) |
| `data/index.ts` | **All the copy**: profile, projects, testimonials, experience |
| `public/` | Images, logos, the CV PDF and the social preview image |

Content comes from the CV (`public/Emmanuel_Omunizua_FullStackEngineer_CV.pdf`);
keep `data/index.ts` in sync with it.

## Editing content

- Projects, stats, testimonials, skills and experience live in `data/index.ts`.
- Company logos: drop a file in `public/logos/` and set the `logo` path in
  `worksWith`. Entries without a logo render as plain text.
- Testimonials must be quotes the person approved.

## Run locally

```bash
docker compose up --build
# open http://localhost:3000
docker compose down
```

This builds the production image from `Dockerfile` (dependencies installed with
`npm ci --ignore-scripts`, run as a non-root user, read-only filesystem, no
mounted volumes, bound to localhost only). Rebuild after every change; a browser
refresh alone will not pick up edits.

The welcome screen shows once per browser session. Use a private window, or
delete `intro-seen` from session storage, to see it again.

## Security notes

- `postcss.config.js` must stay a ~83-byte file. A malicious payload was once
  injected there (commit `b9253a3`); any larger version should be treated as
  compromised.
- Install only from the lockfile with `npm ci --ignore-scripts`.
  Don't run `npm install` on an unreviewed checkout.

## Deploy

Pushes to `main` deploy through Vercel.
