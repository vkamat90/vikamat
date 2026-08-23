import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import { Reveal } from "../components/Reveal";
import { ArrowUpRightIcon } from "../components/Icons";
import { musings } from "../data/musings";
import { captures } from "../data/captures";

const COMPANIES = ["Amazon", "Maxis", "Vodafone Idea", "IndiaFirst Life", "Ogilvy", "Meltwater"];

const FOCUS_AREAS = [
  {
    num: "01",
    title: "Discovery & Growth",
    body: "Owning discovery CX across Homepage, Search, Navigation, and Recommendations — from concept to billion-dollar scale.",
  },
  {
    num: "02",
    title: "Lifecycle & Retention",
    body: "Segmentation, personalization, and lifecycle orchestration that turns one-time customers into durable relationships.",
  },
  {
    num: "03",
    title: "AI-Powered Personalization",
    body: "Partnering with engineering and data science to build recommendation systems that earn trust, not just clicks.",
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Senior Product Manager, Technical — Amazon
          </motion.p>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Building products people <em>trust</em>, at a scale that matters.
          </motion.h1>

          <motion.p
            className={styles.heroDek}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            I'm Vibhav — a product and growth leader who has spent over a decade building
            zero-to-one and scaling billion-dollar customer experiences across discovery,
            lifecycle, and personalization. Customer-obsessed, data-driven, and still hungry.
            This is where I write, share, and connect.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/musings" className={styles.btnPrimary}>
              Read my musings <ArrowUpRightIcon />
            </Link>
            <Link to="/connect" className={styles.btnGhost}>
              Let&rsquo;s chat
            </Link>
          </motion.div>
        </div>
      </section>

      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...COMPANIES, ...COMPANIES].map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>
      </div>

      <section className={`container ${styles.section}`}>
        <Reveal>
          <p className="eyebrow">What I work on</p>
          <h2 className={styles.sectionTitle}>Strategy through execution.</h2>
        </Reveal>

        <div className={styles.cardGrid} style={{ marginTop: 44 }}>
          {FOCUS_AREAS.map((area, i) => (
            <Reveal key={area.num} delay={i * 0.08}>
              <div className={styles.card}>
                <span className={styles.cardNum}>{area.num}</span>
                <h3 className={styles.cardTitle}>{area.title}</h3>
                <p className={styles.cardBody}>{area.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <Reveal>
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow">Musings</p>
              <h2 className={styles.sectionTitle}>Recent writing</h2>
            </div>
            <Link to="/musings" className={styles.btnGhost}>
              View all <ArrowUpRightIcon size={14} />
            </Link>
          </div>
        </Reveal>

        <div className={styles.postList}>
          {musings.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link to={`/musings/${post.slug}`} className={styles.postRow}>
                <span className={styles.postRowLeft}>
                  <span className={styles.postTag}>{post.tag}</span>
                  <span className={styles.postTitle}>{post.title}</span>
                </span>
                <span className={styles.postMeta}>{post.minutes} min</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <Reveal>
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow">Captures</p>
              <h2 className={styles.sectionTitle}>Through the lens</h2>
            </div>
            <Link to="/captures" className={styles.btnGhost}>
              See all <ArrowUpRightIcon size={14} />
            </Link>
          </div>
        </Reveal>

        <div className={styles.capStrip}>
          {captures.slice(0, 4).map((c, i) => (
            <Reveal key={c.id} delay={i * 0.06}>
              <Link to="/captures" className={styles.capTile} style={{ background: c.gradient }} aria-label={c.caption} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 120 }}>
        <Reveal>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>If you&rsquo;re building something, let&rsquo;s talk.</h2>
            <p className={styles.ctaBody}>
              Career advice, a project you want another set of eyes on, or just a good
              conversation — I'm happy to connect where there's mutual learning.
            </p>
            <p className={styles.ctaFootnote}>
              If you're trying to sell me something, please don't — I started my career as a
              salesman, I can smell it.
            </p>
            <div className={styles.heroActions} style={{ marginTop: 26 }}>
              <Link to="/connect" className={styles.btnPrimary}>
                Let&rsquo;s chat <ArrowUpRightIcon />
              </Link>
              <Link to="/about" className={styles.btnGhost}>
                More about me
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
