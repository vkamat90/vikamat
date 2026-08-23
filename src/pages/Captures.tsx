import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Captures.module.css";
import { Reveal } from "../components/Reveal";
import { captures } from "../data/captures";

const ORIENTATION_RATIO: Record<string, string> = {
  landscape: "4 / 3",
  portrait: "3 / 4",
  square: "1 / 1",
};

export default function Captures() {
  const [active, setActive] = useState<string | null>(null);
  const activeCapture = captures.find((c) => c.id === active) ?? null;

  return (
    <>
      <header className={`container ${styles.header}`}>
        <p className="eyebrow">Captures</p>
        <h1 className={styles.title}>A few frames from along the way.</h1>
        <p className={styles.dek}>
          Photography, mostly unplanned — cities I've worked in, moments I didn't want to lose.
        </p>
        <div className={styles.notice}>
          Placeholder tiles below — drop real photos into <code>src/data/captures.ts</code>.
        </div>
      </header>

      <section className={`container ${styles.grid}`}>
        {captures.map((c, i) => (
          <Reveal key={c.id} delay={(i % 6) * 0.05}>
            <motion.button
              layoutId={`capture-${c.id}`}
              className={styles.tile}
              onClick={() => setActive(c.id)}
              style={{ width: "100%" }}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className={styles.tileImg}
                style={{ aspectRatio: ORIENTATION_RATIO[c.orientation], background: c.gradient }}
              />
              <div className={styles.tileCaption}>
                <span>{c.caption}</span>
                {c.location && <span>{c.location}</span>}
              </div>
            </motion.button>
          </Reveal>
        ))}
      </section>

      <AnimatePresence>
        {activeCapture && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={`capture-${activeCapture.id}`}
              className={styles.lightboxImg}
              style={{ background: activeCapture.gradient }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
