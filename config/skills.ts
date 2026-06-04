import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  // ── AI ──────────────────────────────────────────────────────────────────────
  {
    name: "AI",
    description:
      "Building and integrating AI-powered features using LLMs, prompt engineering, and automation workflows.",
    rating: 5,
    icon: Icons.ai,
  },

  // ── Frontend ────────────────────────────────────────────────────────────────
  {
    name: "Next.js",
    description:
      "Primary framework for production full-stack apps — SSR, SSG, API routes, and App Router.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Building component-driven UIs with hooks, context, and efficient state management.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Javascript",
    description:
      "Deep expertise in modern JS — async/await, ES6+, closures, and event-driven patterns.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Tailwind CSS",
    description:
      "Rapid, responsive UI development using a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Typescript",
    description:
      "Type-safe full-stack development — catching bugs at compile time, not runtime.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "HTML 5",
    description:
      "Semantic, accessible markup with a strong grasp of modern web standards.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Advanced styling with animations, flexbox, grid, and custom properties.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Bootstrap",
    description:
      "Rapid prototyping and responsive layouts using Bootstrap's grid and component library.",
    rating: 3,
    icon: Icons.bootstrap,
  },
  {
    name: "ShadCN UI",
    description:
      "Composable, accessible UI components built on Radix primitives and Tailwind CSS.",
    rating: 4,
    icon: Icons.shadcn,
  },

  // ── Backend ─────────────────────────────────────────────────────────────────
  {
    name: "Node.js",
    description:
      "Building fast, scalable server-side applications and REST APIs on the Node.js runtime.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "express.js",
    description:
      "Designing clean, minimal REST APIs and middleware-based backends rapidly.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Strapi",
    description:
      "Headless CMS for giving non-technical teams control over content without touching code.",
    rating: 4,
    icon: Icons.strapi,
  },

  // ── Databases ───────────────────────────────────────────────────────────────
  {
    name: "MongoDB",
    description:
      "Flexible NoSQL data modelling with Mongoose — from simple CRUD to complex aggregations.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "PostgreSQL",
    description:
      "Relational database design and querying for structured, integrity-critical data.",
    rating: 4,
    icon: Icons.postgresql,
  },
  {
    name: "Supabase",
    description:
      "Open-source Firebase alternative — Postgres, auth, storage, and real-time out of the box.",
    rating: 3,
    icon: Icons.supabase,
  },

  // ── Automation & Headless ───────────────────────────────────────────────────
  {
    name: "Playwright",
    description:
      "End-to-end browser automation for headless workflows, scraping, and test automation.",
    rating: 4,
    icon: Icons.playwright,
  },
  {
    name: "Puppeteer",
    description:
      "Headless Chrome automation for PDF generation, screenshots, and browser-based tasks.",
    rating: 4,
    icon: Icons.puppeteer,
  },
  {
    name: "PM2",
    description:
      "Production Node.js process management — zero-downtime deploys, monitoring, and clustering.",
    rating: 3,
    icon: Icons.pm2,
  },

  // ── AI & Automation ─────────────────────────────────────────────────────────
  {
    name: "OpenAI",
    description:
      "Integrating ChatGPT API for AI-powered features — chat, content generation, and automation.",
    rating: 4,
    icon: Icons.openai,
  },
  {
    name: "n8n",
    description:
      "Low-code workflow automation — connecting APIs, triggers, and AI agents without boilerplate.",
    rating: 4,
    icon: Icons.n8n,
  },
  {
    name: "Cursor AI",
    description:
      "AI-first development environment for faster coding, refactoring, and context-aware suggestions.",
    rating: 4,
    icon: Icons.cursorAi,
  },

  // ── Cloud & Hosting ─────────────────────────────────────────────────────────
  {
    name: "AWS",
    description:
      "Deploying and managing applications with S3 storage, EC2, and related cloud services.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Heroku",
    description:
      "Quick, reliable app deployments and managed hosting for Node.js and full-stack projects.",
    rating: 3,
    icon: Icons.heroku,
  },
  {
    name: "Ubuntu Server",
    description:
      "Linux server setup, management, and production deployments on bare-metal and VPS environments.",
    rating: 3,
    icon: Icons.ubuntu,
  },

  // ── Payment Gateways ────────────────────────────────────────────────────────
  {
    name: "Stripe",
    description:
      "Integrating Stripe for one-time and recurring payment processing in web applications.",
    rating: 3,
    icon: Icons.stripe,
  },
  {
    name: "Razorpay",
    description:
      "Payment gateway integration for Indian markets — UPI, cards, and subscription billing.",
    rating: 3,
    icon: Icons.razorpay,
  },
  {
    name: "PayPal",
    description:
      "PayPal checkout integration for global payment acceptance in web platforms.",
    rating: 3,
    icon: Icons.paypal,
  },
  {
    name: "Authorize.net",
    description:
      "Secure payment processing and subscription management via Authorize.net APIs.",
    rating: 3,
    icon: Icons.authorizenet,
  },
  {
    name: "Binance Pay",
    description:
      "Crypto payment integration using Binance Pay for accepting digital currency transactions.",
    rating: 2,
    icon: Icons.binance,
  },

  // ── DevOps & Version Control ────────────────────────────────────────────────
  {
    name: "Git",
    description:
      "Version control, branching strategies, code reviews, and collaborative workflows.",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "Bitbucket",
    description:
      "Git-based source control and CI/CD pipeline management with Atlassian tooling.",
    rating: 3,
    icon: Icons.bitbucket,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
