"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

const STATUS_LABELS: Record<string, string> = {
  live: "// LIVE",
  "in-progress": "// IN PROGRESS",
  tool: "// TOOL",
};

export default function ProjectCard({ project }: { project: Project }) {
  const { tag, title, description, accent, bgColor, status, image, siteHref, githubHref, releasedAt } =
    project;

  const primaryHref = siteHref ?? githubHref;
  const ext = { target: "_blank" as const, rel: "noopener noreferrer" };

  return (
    <wa-card
      className={styles.card}
      style={{ "--card-accent": accent } as React.CSSProperties}
    >
      {/* ── Media slot: entire thumbnail links to primary URL ── */}
      <a slot="media" href={primaryHref} {...ext} className={styles.thumbLink}>
        <div
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
      </a>

      {/* ── Default slot: body ── */}
      <div className={styles.body}>
        <span className={styles.tag}>{tag}</span>
        <a href={primaryHref} {...ext} className={styles.titleLink}>
          <strong className={styles.title}>{title}</strong>
        </a>
        <p className={styles.desc}>{description}</p>
        {releasedAt && (
          <span className={styles.released}>{"//"} released {releasedAt}</span>
        )}
      </div>

      {/* ── Footer slot: explore (if site) + github ── */}
      <div slot="footer" className={styles.ctaRow}>
        {siteHref && (
          <a href={siteHref} {...ext} className={styles.cta}>
            explore <span aria-hidden>→</span>
          </a>
        )}
        <a href={githubHref} {...ext} className={styles.cta}>
          github <span aria-hidden>→</span>
        </a>
      </div>
    </wa-card>
  );
}
