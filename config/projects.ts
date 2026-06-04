import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "mb-bride",
    companyName: "MB-Bride",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "Backend"],
    shortDescription:
      "Full-featured tuxedo and dress store management system with an integrated dashboard for store operations, inventory, employee records, and end-to-end business workflows.",
    websiteLink: "https://mbbride.ibrcloud.com/",
    techStack: ["Next.js", "PostgreSQL", "Typescript", "Tailwind CSS", "Node.js", "express.js"],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2026-06-01"),
    companyLogoImg: "/favicon.png",
    pagesInfoArr: [
      {
        title: "Store Dashboard",
        description:
          "Integrated dashboard managing store operations, inventory, and employee records from a single interface.",
        imgArr: [
          "/projects/mb-bride/1.png",
          "/projects/mb-bride/2.png",
          "/projects/mb-bride/3.png",
          "/projects/mb-bride/4.png",
          "/projects/mb-bride/5.png",
          "/projects/mb-bride/6.png",
        ],
      },
      {
        title: "Inventory & Order Management",
        description:
          "Real-time inventory tracking and order management system for the tuxedo and dress store.",
        imgArr: [
          "/projects/mb-bride/7.png",
          "/projects/mb-bride/8.png",
          "/projects/mb-bride/9.png",
          "/projects/mb-bride/10.png",
          "/projects/mb-bride/11.png",
          "/projects/mb-bride/12.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "MB-Bride is a full-featured store management system built for a tuxedo and dress retail business. The platform centralises every aspect of store operations into a single, integrated dashboard — from inventory and employee records to order tracking and business analytics.",
        "The system was built with Next.js on the frontend and a Node.js + Express.js backend, backed by PostgreSQL for structured relational data. Every module was designed around actual store workflows to reduce manual overhead and improve day-to-day efficiency.",
      ],
      bullets: [
        "Built a full-stack store management system using Next.js, Node.js, and PostgreSQL.",
        "Designed an integrated dashboard covering inventory, employee records, and business workflows.",
        "Implemented role-based access so store managers and staff see only what they need.",
        "Used PostgreSQL for structured inventory and order data with relational integrity.",
        "Deployed and maintained the system on a live production environment at IBR Infotech.",
      ],
    },
  },
  {
    id: "brixfox",
    companyName: "Brixfox Property Management",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "Backend"],
    shortDescription:
      "Property management web application powered by Strapi headless CMS and PostgreSQL, enabling efficient property listing, admin content management, and a clean client-facing frontend.",
    websiteLink: "https://www.brixfox.com/",
    techStack: ["Next.js", "Strapi", "PostgreSQL", "Typescript", "Tailwind CSS"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-08-01"),
    companyLogoImg: "/favicon.png",
    pagesInfoArr: [
      {
        title: "Property Listings",
        description:
          "Dynamic property listing pages powered by Strapi CMS, editable by non-technical admins.",
        imgArr: [
          "/projects/brixfox/1.png",
          "/projects/brixfox/2.png",
          "/projects/brixfox/3.png",
        ],
      },
      {
        title: "Admin Panel",
        description:
          "Strapi-powered admin interface for managing properties, media, and content without code.",
        imgArr: ["/projects/brixfox/4.png", "/projects/brixfox/5.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Brixfox is a property management platform that separates content management from the frontend using a headless CMS architecture. Non-technical admins manage listings, images, and content through Strapi while the Next.js frontend delivers a fast, SEO-optimised experience to property seekers.",
        "PostgreSQL serves as the underlying database, providing reliable relational data storage for property records, user data, and listings. The project was delivered as a fully managed production application at IBR Infotech.",
      ],
      bullets: [
        "Built a headless CMS-driven property platform using Next.js and Strapi.",
        "Integrated PostgreSQL as the primary database for structured property and user data.",
        "Empowered non-technical admins to manage all content through the Strapi admin panel.",
        "Implemented SEO-friendly server-side rendering for property listing pages.",
        "Delivered a clean, performant client-facing UI with Tailwind CSS and TypeScript.",
      ],
    },
  },
  {
    id: "consumer-law",
    companyName: "Consumer Law",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "Backend"],
    shortDescription:
      "Consumer Law Dispute platform enabling users to manage credit repair disputes entirely online — eliminating the need to mail physical dispute letters — with ChatGPT API integration and Authorize.net payments.",
    websiteLink: "https://consumerlaw.ai",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Puppeteer",
      "AWS",
      "OpenAI",
      "Authorize.net",
    ],
    startDate: new Date("2022-01-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/favicon.png",
    pagesInfoArr: [
      {
        title: "Dispute Management",
        description:
          "Online dispute workflow that replaces physical letter mailing with a fully digital credit repair process.",
        imgArr: [
          "/projects/consumer-law/1.png",
          "/projects/consumer-law/2.png",
          "/projects/consumer-law/3.png",
        ],
      },
      {
        title: "AI-Powered Letter Generation",
        description:
          "ChatGPT API integration that generates personalised credit dispute letters based on user data.",
        imgArr: [
          "/projects/consumer-law/4.png",
          "/projects/consumer-law/5.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Consumer Law is a credit repair dispute platform that replaces the traditional process of mailing physical dispute letters with a fully digital, automated workflow. Users submit their credit issues, and the platform handles dispute letter generation using the ChatGPT API, submission tracking, and payment processing — all from one interface.",
        "The platform was built with Next.js for server-side rendering and SEO performance, MongoDB for flexible document storage, Puppeteer for automated document handling, and Authorize.net for secure payment processing. AWS S3 is used for storing generated documents and user files.",
      ],
      bullets: [
        "Built a full-stack credit dispute platform using Next.js, Node.js, and MongoDB.",
        "Integrated OpenAI ChatGPT API to auto-generate personalised credit dispute letters.",
        "Implemented Authorize.net for secure recurring and one-time payment processing.",
        "Used Puppeteer for automated document generation and browser-based workflows.",
        "Deployed on Heroku with AWS S3 for scalable file and document storage.",
        "Enabled users to manage the entire credit repair process online without physical mail.",
      ],
    },
  },
  {
    id: "rbot",
    companyName: "Rbot",
    type: "Professional",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Fully automated Razer Gold coupon purchasing tool using Playwright in headless mode for end-to-end browser automation — eliminating all manual steps in the purchase workflow.",
    websiteLink: "https://cp.webuilder.me/site/razorbot.webuilder.me",
    techStack: ["React", "Node.js", "express.js", "MongoDB", "Playwright", "Javascript"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-08-01"),
    companyLogoImg: "/favicon.png",
    pagesInfoArr: [
      {
        title: "Automation Dashboard",
        description:
          "React-based dashboard for configuring, running, and monitoring Razer Gold coupon purchase automations.",
        imgArr: [
          "/projects/rbot/1.png",
          "/projects/rbot/2.png",
          "/projects/rbot/3.png",
          "/projects/rbot/4.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Rbot is a browser automation tool built to fully automate the process of purchasing Razer Gold coupons. It uses Playwright running in headless mode to simulate real browser interactions — logging in, navigating, selecting items, and completing checkout — without any manual input.",
        "The project consists of a React frontend dashboard for managing automation jobs, a Node.js + Express.js backend that orchestrates Playwright sessions, and MongoDB for storing job history, credentials, and automation logs.",
      ],
      bullets: [
        "Built an end-to-end browser automation tool using Playwright headless mode.",
        "Developed a React dashboard for configuring and monitoring automation jobs.",
        "Used Node.js and Express.js to orchestrate Playwright sessions server-side.",
        "Stored job history, results, and automation logs in MongoDB.",
        "Eliminated all manual steps in the Razer Gold coupon purchase workflow.",
      ],
    },
  },
  {
    id: "oma-rental",
    companyName: "Oma-rental AI Bot",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "Backend"],
    shortDescription:
      "AI-powered support bot for Oma Rental built with n8n automation and OpenAI API — autonomously handles home repair queries, provides DIY guidance, and surfaces relevant video resources.",
    websiteLink: "https://omarental-bot.ibrcloud.com/",
    techStack: ["OpenAI", "n8n", "HTML 5", "CSS 3", "Javascript"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2025-02-01"),
    companyLogoImg: "/favicon.png",
    pagesInfoArr: [
      {
        title: "AI Chat Interface",
        description:
          "Clean, embeddable chat UI that connects users to the AI agent for home repair support.",
        imgArr: [
          "/projects/oma-rental/1.png",
          "/projects/oma-rental/2.png",
        ],
      },
      {
        title: "n8n Automation Workflow",
        description:
          "n8n workflow orchestrating OpenAI calls, knowledge retrieval, and video resource surfacing.",
        imgArr: ["/projects/oma-rental/3.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Oma-rental's support bot is an AI agent designed to handle inbound home repair queries without human intervention. Powered by OpenAI's API and orchestrated through n8n automation workflows, the bot understands user questions about home repairs, provides step-by-step DIY guidance, and proactively shares relevant video tutorials.",
        "The bot is embedded into the Oma Rental platform via a lightweight HTML/CSS/JS chat interface. The n8n backend handles the full conversation flow — routing queries to the OpenAI model, enriching responses with knowledge base context, and triggering follow-up actions like email notifications when escalation is needed.",
      ],
      bullets: [
        "Built an AI-powered support bot using OpenAI API and n8n automation workflows.",
        "Designed the full conversation flow in n8n — from query intake to response generation.",
        "Integrated OpenAI to understand natural language home repair questions and generate accurate guidance.",
        "Added video resource surfacing to supplement AI responses with relevant tutorials.",
        "Delivered as an embeddable widget via a minimal HTML/CSS/JS interface.",
        "Reduced support load for the Oma Rental team by automating common query resolution.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
