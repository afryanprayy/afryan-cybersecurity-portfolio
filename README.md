# Afryan Fanindya Prayogi Cybersecurity Portfolio

Production-ready personal portfolio website for Afryan Fanindya Prayogi, an Information Technology graduate focused on cybersecurity, security operations, incident response, vulnerability assessment, network security, Wazuh SIEM, and Linux.

## Technology Stack

- Next.js App Router
- React
- TypeScript strict mode
- Tailwind CSS
- Motion for React
- Lucide React
- Next.js Image
- next/font

## Installation

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Production Build

```bash
pnpm build
pnpm start
```

## Content Editing Guide

Most editable portfolio content lives in:

- `data/portfolio.ts`
- `data/projects.ts`

Update these files to change navigation, profile details, focus areas, experience, certifications and training, education, skills, social links, and project metadata.

## Replace Profile Photo

Place the final profile photo at:

```text
public/images/afryan-profile.jpg
```

The site includes a visual fallback if the image is missing.

## Replace Project Cover Images

Place project cover images at:

```text
public/images/project-wazuh-cover.jpg
public/images/project-ptes-cover.jpg
```

If a cover image is missing, the project preview falls back to a technical placeholder.

## Replace CV

Place the CV PDF at:

```text
public/documents/afryan-fanindya-prayogi-cv.pdf
```

The download links and command menu use this path.

## Replace Project PDFs

Project reports must be placed at:

```text
public/documents/wazuh-incident-response-project.pdf
public/documents/ptes-security-assessment-project.pdf
```

The homepage does not convert these reports into HTML pages. Project rows and command menu actions open the PDFs directly in new browser tabs.

## Update Social Links

Social links are defined in `data/portfolio.ts`.

The GitHub value is intentionally stored as:

```ts
TODO_ADD_GITHUB_URL
```

It is not displayed until a real URL is provided and `visible` is set to `true`.

## Add Another PDF-Based Project

1. Add a new PDF to `public/documents/`.
2. Add a cover image to `public/images/` or rely on the placeholder.
3. Add a new object in `data/projects.ts`.
4. Keep `reportUrl` pointed to the PDF file.
5. Do not create an internal project detail route unless the site strategy changes.

## Deployment on Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in Vercel project environment variables if using Formspree.
4. Deploy with the default Next.js settings.

## Cybersecurity Content Accuracy

This website intentionally avoids unsupported claims. CompTIA Security+ is represented as training completion only, not an official certification. The Wazuh project is described as a controlled lab, and the PTES assessment is described as a controlled permission-based assessment with the target anonymized as XYZ.
