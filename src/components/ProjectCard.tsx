import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { tag, title, description, href, accent, bgColor, image } = project;

  return (
    <Link
      href={href}
      className={styles.card}
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
          <span className={styles.imgLabel}>[ IMAGE ]</span>
        )}
      </div>

      {/* Body */}
      <div className={styles.body}>
        {/* wa-badge equivalent — small pill tag */}
        <span className={styles.tag}>{tag}</span>

        {/* wa-card__header */}
        <span className={styles.title}>{title}</span>

        {/* wa-card__body */}
        <span className={styles.desc}>{description}</span>

        {/* wa-button equivalent */}
        <span className={styles.cta}>
          explore <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
