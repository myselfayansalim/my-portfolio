import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "ibr-infotech",
    position: "Senior Software Developer",
    company: "IBR Infotech",
    location: "Indore, India",
    startDate: new Date("2021-12-01"),
    endDate: "Present",
    description: [
      "Lead full-stack development of client-facing web applications using Next.js, Node.js, and PostgreSQL.",
      "Build and maintain AI-powered automation workflows integrating OpenAI API, n8n, and headless browser tools (Playwright, Puppeteer).",
      "Architect scalable REST APIs and manage database design across MongoDB and PostgreSQL projects.",
      "Integrate payment gateways including Stripe, Authorize.net, RazorPay, and Binance Pay across multiple production platforms.",
      "Deploy and manage applications on AWS (S3), Plesk, and Ubuntu servers with CI/CD pipelines.",
    ],
    achievements: [
      "Designed and shipped MB-Bride, a full-featured tuxedo and dress store management system handling inventory, employee records, and business workflows via an integrated dashboard.",
      "Built an AI-powered support bot for Oma Rental using OpenAI API and n8n that autonomously handles home repair queries, provides DIY guidance, and surfaces relevant video resources.",
      "Developed Brixfox Property Management with Strapi headless CMS and PostgreSQL, enabling non-technical admins to manage property listings and content independently.",
      "Created Rbot — an automated Razer Gold coupon purchasing tool powered by Playwright headless browser, eliminating manual purchase workflows entirely.",
      "Built Consumer Law Dispute platform with ChatGPT API, Authorize.net payments, and SSR, allowing users to manage credit repair disputes fully online without mailing physical letters.",
      "Delivered 8+ live production projects serving real clients across property, legal, retail, and consumer sectors.",
    ],
    skills: [
      "Next.js",
      "React",
      "Javascript",
      "Typescript",
      "Tailwind CSS",
      "HTML 5",
      "CSS 3",
      "Bootstrap",
      "ShadCN UI",
      "Node.js",
      "express.js",
      "Strapi",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Playwright",
      "Puppeteer",
      "PM2",
      "OpenAI",
      "n8n",
      "Cursor AI",
      "AWS",
      "Heroku",
      "Ubuntu Server",
      "Stripe",
      "Razorpay",
      "PayPal",
      "Authorize.net",
      "Binance Pay",
      "Git",
      "Bitbucket",
      "CI/CD Pipelines",
    ],
    companyUrl: "https://www.ibrinfotech.com",
    logo: "/favicon.png",
  },
];
