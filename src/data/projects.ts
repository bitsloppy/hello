export interface Project {
  slug: string;
  tag: string;
  title: string;
  description: string;
  href: string;
  accent: string;
  bgColor: string;
  /** Optional: path to a preview image under /public */
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "transit-pulse",
    tag: "data viz",
    title: "Transit Pulse",
    description: "Real-time transport delays mapped against historical patterns. GTFS + D3.js.",
    href: "#",
    accent: "#3a9874",
    bgColor: "#3A9874",
  },
  {
    slug: "block-by-block",
    tag: "maps · census",
    title: "Block by Block",
    description: "Neighbourhood-level census data explorer. Click any block to see 20 years of change.",
    href: "#",
    accent: "#903557",
    bgColor: "#903557",
  },
  {
    slug: "rain-check",
    tag: "weather · api",
    title: "Rain Check",
    description: "90 days of rainfall vs Bureau of Met forecasts. How right are they, actually?",
    href: "#",
    accent: "#4a6b8c",
    bgColor: "#4A6B8C",
  },
];
