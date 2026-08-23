import styles from "./Footer.module.css";
import { site } from "../data/site";
import { LinkedInIcon, MailIcon } from "./Icons";
import { useTheme } from "../hooks/useTheme";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <div className={styles.left}>
          <img src={theme === "dark" ? "/logo/vk-mark-reversed.svg" : "/logo/vk-mark-ink.svg"} alt="" />
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
        </div>

        <div className={styles.links}>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon size={15} /> LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>
            <MailIcon size={15} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
