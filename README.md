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

## Contact Form Setup

The contact form uses Web3Forms so visitors can send messages directly from the website.

1. Create a Web3Forms access key at `https://web3forms.com/`.
2. Open `src/data/portfolio.ts`.
3. Replace this placeholder:

```ts
web3FormsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
```

4. Run:

```powershell
npm run check
npm run build
```

The form includes a hidden `botcheck` honeypot field, client-side validation, and Web3Forms server-side spam/rate-limit checks. This avoids a visible captcha for recruiters and real visitors.
