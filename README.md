# Julharie M. Maddin — Portfolio

A personal portfolio site built with React + Vite.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Edit your projects

Open `src/data/projects.js` and edit the array — each object becomes a
card on the Home and Projects pages, and gets its own detail page at
`/projects/<slug>`.

## Structure

```
src/
├── components/      # Navbar, Footer, ProjectCard
├── layout/          # Page shell (Navbar + content + Footer)
├── data/            # projects.js — edit this to update your projects
├── pages/           # Home, Projects, ProjectDetail, About, Contact, NotFound
└── styles/          # globals.css — color/spacing tokens used everywhere
```

## Build for deployment

```bash
npm run build
```

Outputs a static site to `dist/` — deployable to Vercel, Netlify, GitHub
Pages, or any static host.
