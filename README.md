# my-portfolio

Personal developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

**Live site:** [ayansalim.vercel.app](https://ayansalim.vercel.app/)  
**Source code:** [github.com/myselfayansalim/my-portfolio](https://github.com/myselfayansalim/my-portfolio)

---

## Prerequisites

Make sure you have the following installed before you begin:

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/myselfayansalim/my-portfolio.git
cd my-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root of the project:

```bash
cp .env.example .env.local
```

Or create it manually and add the following variables:


### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

---

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the app for production |
| `npm run start` | Start the production server (run `build` first) |
| `npm run lint` | Run ESLint to check for code issues |

---

## Project Structure

```
my-portfolio/
├── app/                  # Next.js app router pages
├── components/           # Reusable UI components
│   ├── common/           # Shared layout components
│   ├── contact/          # Contact section components
│   ├── experience/       # Experience section components
│   ├── projects/         # Project card and detail components
│   ├── skills/           # Skills section components
│   └── ui/               # Base UI primitives (buttons, cards, etc.)
├── config/               # Site configuration and project data
│   ├── projects.ts       # Add/edit your projects here
│   └── site.ts           # Site metadata and links
├── public/               # Static assets
│   └── projects/         # Project screenshot images
├── content/              # Markdown content (blogs, etc.)
└── information/          # Personal info configuration
```

---

## Customising the Portfolio

- **Projects** — edit `config/projects.ts` to add or update your projects and screenshots
- **Personal info** — update `config/site.ts` and the `information/` folder
- **Project images** — add screenshots to `public/projects/<project-id>/`
- **Resume** — set `NEXT_PUBLIC_RESUME_LINK` in `.env.local` to your resume URL

---

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repo on [vercel.com/new](https://vercel.com/new)
3. Add your environment variables in the Vercel dashboard
4. Click **Deploy**

Vercel will automatically redeploy on every push to `main`.
