import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

const STATUS_LABELS: Record<string, string> = {
  live: "// LIVE",
  "in-progress": "// IN PROGRESS",
  tool: "// TOOL",
};

const CTA_LABELS: Record<string, string> = {
  live: "explore",
  "in-progress": "view on github",
  tool: "view source",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { tag, title, description, href, accent, bgColor, image, status } =
    project;

  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={styles.card}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={
        {
          "--card-accent": accent,
          "--card-bg": bgColor,
        } as React.CSSProperties
      }
    >
      {/* Thumbnail */}
      <div className={styles.thumb}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className={styles.img}
            sizes="(max-width: 640px) 100vw, 320px"
          />
        ) : (
          <span className={styles.watermark} aria-hidden>
            {title}
          </span>
        )}

        {/* Status badge */}
        <div className={styles.statusBadge}>
          {status === "live" && (
            <span className={styles.statusDot} aria-hidden />
          )}
          <span>{STATUS_LABELS[status]}</span>
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <span className={styles.tag}>{tag}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.desc}>{description}</span>
        <span className={styles.cta}>
          {CTA_LABELS[status]} <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
