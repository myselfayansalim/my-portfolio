import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio.",
    metadata: {
      title: "Home",
      description: "Ayan Shaikh's portfolio — Senior Software Developer.",
    },
  },
  skills: {
    title: "Skills",
    description: "Technologies and tools I work with every day.",
    metadata: {
      title: "Skills",
      description:
        "Ayan Shaikh's technical skills — Next.js, React, Node.js, AI integrations, and more.",
    },
  },
  projects: {
    title: "Projects",
    description: "Live projects I've shipped for real clients and users.",
    metadata: {
      title: "Projects",
      description:
        "Ayan Shaikh's projects — full-stack apps, AI tools, and automation systems.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and build something together.",
    metadata: {
      title: "Contact",
      description: "Get in touch with Ayan Shaikh.",
    },
  },
  resume: {
    title: "Resume",
    description: "Ayan Shaikh's resume.",
    metadata: {
      title: "Resume",
      description: "Ayan Shaikh's resume — Senior Software Developer.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Ayan Shaikh's professional experience — 4+ years in full-stack web development.",
    },
  },
};
