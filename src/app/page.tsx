import AsciiBanner from "@/components/AsciiBanner";
import ProjectCard from "@/components/ProjectCard";
import NewProjectCard from "@/components/NewProjectCard";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <header className={styles.hero}>
        <p className={styles.tagline}>
          Vibe coding using public data and AI tools to <br /> create cool projects. </p>


          <p className={styles.tagline}>It&apos;s a{" "}
          <strong className={styles.taglineAccent}>
            bit sloppy<span className={styles.cursor} aria-hidden>_</span>
          </strong>
        </p>

        <AsciiBanner />

        <div className={styles.bannerMeta}>
          <div className={styles.rule} />
          <span className={styles.since}>&#47;&#47; SINCE 2026 &#47;&#47;</span>
          <div className={styles.rule} />
        </div>

        <span className={styles.pixelRule}>[ PUBLIC DATA · AI TOOLS · OPEN SOURCE ]</span>
      </header>

      {/* ── PROJECTS ── */}
      <p className={styles.sectionLabel}>&#47;&#47; PROJECTS</p>

      <main>
        <ul className={styles.grid} role="list">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
          <li>
            <NewProjectCard />
          </li>
        </ul>
      </main>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <span className={styles.footerSig}>BITSLOPPY.VERCEL.APP &#47;&#47; HANDCRAFTED WITH PUBLIC DATA</span>
        <span className={styles.footerSig}>MIT LICENSE</span>
      </footer>
    </>
  );
}
