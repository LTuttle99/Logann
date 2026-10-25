# Logann Tuttle — Portfolio

Complete Next.js App Router website with TypeScript, Tailwind CSS, Motion, and Lucide icons. Exports as a static site for Cloudflare Pages. No server, database, API key, or ChatGPT sign-in is required for this standalone version.

## Upload to GitHub

1. Extract the ZIP on your computer.
2. Create an empty GitHub repository.
3. Upload the extracted files and folders to the repository root, or commit them using Git/GitHub Desktop. Do not upload the ZIP itself.
4. Ensure `package.json`, `package-lock.json`, `app/`, `components/`, `lib/`, and `public/` appear directly at the repository root.

The hidden `.gitignore` and `.node-version` files should be included when using Git or GitHub Desktop. The site also builds without those files if your file picker hides them; set `NODE_VERSION=22` in Cloudflare explicitly.

## Deploy with Cloudflare Pages

In Cloudflare, open **Workers & Pages**, create a **Pages** project, connect GitHub, and select your repository. Choose the static Next.js export preset if available, or enter the settings manually:

| Setting | Value |
| --- | --- |
| Production branch | Your repository's default branch (usually `main`) |
| Framework preset | Next.js (Static HTML Export), or None with the settings below |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | Leave blank when files are at repository root |
| Environment variable | `NODE_VERSION` = `22` |

Use Pages with Git integration, rather than a Worker deployment with a Wrangler deploy command. The existing `output: "export"` configuration generates all pages and assets into `out/`.

Deploy, then optionally add your custom domain in the Pages project's custom domain settings. Future GitHub pushes trigger new builds.

After you know your final URL, add `NEXT_PUBLIC_SITE_URL` to your Cloudflare build environment (for example, your actual `https://…pages.dev` address or custom domain) and redeploy. This sets the absolute metadata base for social previews. This value is a public website URL, not a secret. Ordinary site behavior does not require it.

Official guide: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/

## Local development

Use Node.js 22 or newer supported LTS.

```sh
npm ci
npm run dev
```

Open the localhost URL printed in your terminal.

## Validation and production build

```sh
npm run lint
npm run typecheck
npm run build
```

Deployable static output is generated in `out/`. Build output and dependencies are excluded from the source package.

## Edit your information

Edit `lib/profile.ts` for your biography, experience, education, technical skills, email, LinkedIn, GitHub, and résumé path. Empty contact links are automatically hidden. GitHub is intentionally blank until a verified profile URL is added.

Replace `public/Logann_Tuttle_Resume.pdf` to update the download. Email uses `mailto:` and opens the visitor's email client. No nonfunctional contact form is present.

Pages: `/`, `/about/`, `/experience/`, and `/contact/`. All assets and internal links are portable. The hero uses CSS 3D geometry with pointer interactions; reduced-motion preferences are respected.

## Package contents

This package contains source, the dependency lockfile, and the supplied résumé. It excludes Git history, installed dependencies, generated build output, credentials, and the previous Sites hosting configuration.

## Featured independent product

Signal Noir is configured in `lib/products.ts` and rendered by `components/featured-product.tsx`. The homepage feature follows Skills; About includes a short independent development note. Edit product content and verified labels in the configuration, not the component.

`public/images/signal-noir-preview.webp` is a genuine screenshot of https://signal-noir-2e7.pages.dev/ captured October 25, 2026, resized only by normal browser display and encoded as WebP (1280 × 720, about 46 KB). It shows the real landing interface without fabricated data. Verified labels describe the live local-first workflow, SQL tools, AI-assisted analysis, dashboards, and inspectable evidence. The preview loads lazily; all product links open with `noopener noreferrer`.

This integration preserves the existing static export, dependencies, navigation, and hosting configuration. It does not require an OpenNext adapter, backend, or a deployment step. Pointer depth effects are limited to mouse input, and reduced-motion preferences disable the new motion effects.
