import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Musings.module.css";
import { Reveal } from "../components/Reveal";
import { musings, type Musing } from "../data/musings";

const TAGS: Array<Musing["tag"] | "All"> = ["All", "Product", "Growth", "Career", "Life"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function Musings() {
  const [filter, setFilter] = useState<(typeof TAGS)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? musings : musings.filter((m) => m.tag === filter)),
    [filter]
  );

  return (
    <>
      <header className={`container ${styles.header}`}>
        <p className="eyebrow">Musings</p>
        <h1 className={styles.title}>Notes on product, growth, and building well.</h1>
        <p className={styles.dek}>
          Long-form thinking on the things I obsess over at work, and the ones I obsess over
          outside it — customer trust, career, and the occasional detour into life.
        </p>

        <div className={styles.filters}>
          {TAGS.map((tag) => (
            <button
              key={tag}
              className={`${styles.filterBtn} ${filter === tag ? styles.filterBtnActive : ""}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </header>

      <section className={`container ${styles.list}`}>
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              className={styles.empty}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Nothing here yet — add entries to src/data/musings.ts.
            </motion.p>
          ) : (
            filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <Reveal delay={0}>
                  <Link to={`/musings/${post.slug}`} className={styles.row}>
                    <div className={styles.rowInner}>
                      <div className={styles.rowLeft}>
                        <span className={styles.rowTag}>{post.tag}</span>
                        <h2 className={styles.rowTitle}>{post.title}</h2>
                        <p className={styles.rowDek}>{post.dek}</p>
                      </div>
                      <div className={styles.rowMeta}>
                        <div>{formatDate(post.date)}</div>
                        <div>{post.minutes} min read</div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
