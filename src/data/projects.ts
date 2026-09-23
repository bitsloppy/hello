export type ProjectStatus = "live" | "in-progress" | "tool";

export interface Project {
  slug: string;
  tag: string;
  title: string;
  description: string;
  href: string;
  accent: string;
  bgColor: string;
  status: ProjectStatus;
  /** Optional: path to a preview image under /public */
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "sackar-atlas",
    tag: "data · history",
    title: "Sackar Atlas",
    description:
      "Making the 2023 NSW Special Commission of Inquiry into LGBTIQ hate crimes navigable — cases, locations, people, and events from the public record.",
    href: "https://sackar-atlas.bitsloppy.com",
    accent: "#7c3aed",
    bgColor: "#3b1a78",
    status: "live",
  },
  {
    slug: "curriculum-remix",
    tag: "data · education",
    title: "Curriculum Remix",
    description:
      "NSW curriculum data reimagined. Scraping and remixing NESA's curriculum framework into something you can actually navigate.",
    href: "https://github.com/bitsloppy/curriculum-remix",
    accent: "#3a9874",
    bgColor: "#1e5c47",
    status: "in-progress",
  },
  {
    slug: "aus-gov-style-rules",
    tag: "ai · reference",
    title: "AGSM Rules",
    description:
      "The Australian Government Style Manual compiled as 270 portable, AI-native rules. YAML, JSON, and prompt-ready formats.",
    href: "https://github.com/bitsloppy/aus-gov-style-rules",
    accent: "#4a6b8c",
    bgColor: "#23405a",
    status: "tool",
  },
  {
    slug: "marrickvillians",
    tag: "maps · history",
    title: "Marrickvillians",
    description:
      "Walking tours of notable crimes and historical events of the inner west — sourced from Trove newspaper archives.",
    href: "https://github.com/bitsloppy/marrickvillians",
    accent: "#903557",
    bgColor: "#581e38",
    status: "in-progress",
  },
];
