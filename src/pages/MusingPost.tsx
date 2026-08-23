import { Link, useParams } from "react-router-dom";
import styles from "./MusingPost.module.css";
import { Reveal } from "../components/Reveal";
import { musings } from "../data/musings";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function MusingPost() {
  const { slug } = useParams();
  const post = musings.find((m) => m.slug === slug);

  if (!post) {
    return (
      <div className={`container ${styles.notFound}`}>
        <h1 className="serif">Couldn&rsquo;t find that one.</h1>
        <p style={{ marginTop: 16 }}>
          <Link to="/musings" className="mono">
            ← Back to Musings
          </Link>
        </p>
      </div>
    );
  }

  return (
    <article className={`container ${styles.wrap}`}>
      <Reveal>
        <div className={styles.backRow}>
          <Link to="/musings" className={styles.backLabel}>
            ← All musings
          </Link>
        </div>

        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span className={styles.tag}>{post.tag}</span>
          <span>{formatDate(post.date)}</span>
          <span>{post.minutes} min read</span>
        </div>
        <p className={styles.dek}>{post.dek}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className={styles.body}>
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className={styles.draftNote}>
          This entry is placeholder content — replace the body in{" "}
          <code>src/data/musings.ts</code> with your real writing before publishing.
        </div>
      </Reveal>
    </article>
  );
}
