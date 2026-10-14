"use client";

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
  tool: "view on github",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { tag, title, description, href, accent, bgColor, status, image } = project;
  const isExternal = href.startsWith("http");

  const linkProps = isExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  function handleCardClick() {
    if (isExternal) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = href;
    }
  }

  return (
    <wa-card
      className={styles.card}
      onClick={handleCardClick}
      style={{ "--card-accent": accent } as React.CSSProperties}
    >
      {/* ── Media slot: coloured thumbnail ── */}
      <div
        slot="media"
        className={styles.thumb}
        style={image ? undefined : { background: bgColor }}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className={styles.img}
            sizes="(max-width: 640px) 100vw, 320px"
          />
        ) : (
          <>
            <div className={styles.dotGrid} aria-hidden />
            <span className={styles.watermark} aria-hidden>
              {title}
            </span>
          </>
        )}
        <div className={styles.statusBadge}>
          {status === "live" && (
            <span className={styles.statusDot} aria-hidden />
          )}
          <span>{STATUS_LABELS[status]}</span>
        </div>
      </div>

      {/* ── Default slot: card body ── */}
      <div className={styles.body}>
        <span className={styles.tag}>{tag}</span>
        <strong className={styles.title}>{title}</strong>
        <p className={styles.desc}>{description}</p>
      </div>

      {/* ── Footer slot: CTA link ── */}
      <a
        slot="footer"
        href={href}
        {...linkProps}
        className={styles.cta}
        onClick={(e) => e.stopPropagation()}
      >
        {CTA_LABELS[status]} <span aria-hidden>→</span>
      </a>
    </wa-card>
  );
}
