import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ayan Salim | Full Stack Developer & AI Engineer",
    short_name: "Ayan Salim",
    description:
      "Ayan Salim - Full Stack Developer & AI Engineer working at the intersection of AI, data, and scalable software systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "ai",
      "software engineering",
      "machine learning",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
