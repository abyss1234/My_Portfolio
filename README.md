# Ng Boon Bin Portfolio

Personal portfolio built with Astro, TypeScript, and Tailwind CSS.

## Run Locally

```powershell
npm run dev
```

Open `http://127.0.0.1:4321/`.

## Build

```powershell
npm run build
```

## Edit Portfolio Content

Most portfolio content lives in:

```text
src/data/portfolio.ts
```

Update these exports when you have new information:

- `profile`: name, headline, email, LinkedIn, GitHub, location, resume, avatar.
- `skills`: grouped technical and soft skills.
- `experiences`: add internships, freelance work, part-time roles, or project-based experience.
- `projects`: add future projects as new objects.
- `education`: degree, school, and graduation year.

Static files live in `public/`, including `avatar.jpg` and `NgBoonBin-CV-Resume.pdf`.
