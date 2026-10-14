export type ProjectStatus = "live" | "in-progress" | "tool";

export interface Project {
  slug: string;
  tag: string;
  title: string;
  description: string;
  /** Live site URL — used for title/image link and "explore" CTA. Optional. */
  siteHref?: string;
  /** GitHub repo URL — always shown in footer. */
  githubHref: string;
  accent: string;
  bgColor: string;
  status: ProjectStatus;
  image?: string;
  /** Public release date, e.g. "Sep 2026" */
  releasedAt?: string;
}

export const projects: Project[] = [
  {
    slug: "sackar-atlas",
    tag: "data · history",
    title: "Sackar Atlas",
    description:
      "Making the 2023 NSW Special Commission of Inquiry into LGBTIQ hate crimes navigable — cases, locations, people, and events from the public record.",
    siteHref: "https://sackar-atlas.bitsloppy.com",
    githubHref: "https://github.com/bitsloppy/sackar-atlas",
    accent: "#7c3aed",
    bgColor: "#3b1a78",
    status: "in-progress",
    image: "/images/sackar-atlas-hero.jpg",
  },
  {
    slug: "curriculum-remix",
    tag: "data · education",
    title: "Curriculum Remix",
    description:
      "NSW curriculum data reimagined. Scraping and remixing NESA's curriculum framework into something you can actually navigate.",
    siteHref: "https://curriculum-remix.bitsloppy.com",
    githubHref: "https://github.com/bitsloppy/curriculum-remix",
    accent: "#3a9874",
    bgColor: "#1e5c47",
    status: "live",
    image: "/images/curriculum-remix-hero.jpg",
    releasedAt: "Sep 2026",
  },
  {
    slug: "aus-gov-style-rules",
    tag: "ai · reference",
    title: "AGSM Rules",
    description:
      "The Australian Government Style Manual compiled as 270 portable, AI-native rules. YAML, JSON, and prompt-ready formats.",
    githubHref: "https://github.com/bitsloppy/aus-gov-style-rules",
    accent: "#4a6b8c",
    bgColor: "#23405a",
    status: "tool",
    image: "/images/aus-gov-style-rules-hero.jpg",
    releasedAt: "Sep 2026",
  },
];
