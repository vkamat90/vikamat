import styles from "./Connect.module.css";
import { Reveal } from "../components/Reveal";
import { site } from "../data/site";
import { LinkedInIcon, MailIcon, ArrowUpRightIcon } from "../components/Icons";

export default function Connect() {
  return (
    <div className={`container ${styles.wrap}`}>
      <div className={styles.grid}>
        <Reveal>
          <p className="eyebrow">Connect</p>
          <h1 className={styles.title}>
            Let&rsquo;s talk.
          </h1>
          <p className={styles.dek}>
            Career advice, a project you want a second opinion on, or just a good
            conversation about product and growth — I'm happy to connect where there's
            mutual learning.
          </p>
          <p className={styles.footnote}>
            If you're trying to sell me something, please don't. I started my career as a
            salesman — I can smell it.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.cards}>
            <a
              href={site.calendly}
              target="_blank"
              rel="noreferrer"
              className={`${styles.card} ${styles.cardPrimary}`}
            >
              <span className={styles.cardLeft}>
                <span className={styles.cardIcon}>
                  <ArrowUpRightIcon />
                </span>
                <span>
                  <span className={styles.cardTitle}>Let&rsquo;s chat</span>
                  <div className={styles.cardSub}>Book time directly on my calendar</div>
                </span>
              </span>
              <ArrowUpRightIcon />
            </a>

            <a href={site.linkedin} target="_blank" rel="noreferrer" className={styles.card}>
              <span className={styles.cardLeft}>
                <span className={styles.cardIcon}>
                  <LinkedInIcon />
                </span>
                <span>
                  <span className={styles.cardTitle}>LinkedIn</span>
                  <div className={styles.cardSub}>Connect or follow along</div>
                </span>
              </span>
              <ArrowUpRightIcon />
            </a>

            <a href={`mailto:${site.email}`} className={styles.card}>
              <span className={styles.cardLeft}>
                <span className={styles.cardIcon}>
                  <MailIcon />
                </span>
                <span>
                  <span className={styles.cardTitle}>Email</span>
                  <div className={styles.cardSub}>{site.email}</div>
                </span>
              </span>
              <ArrowUpRightIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
