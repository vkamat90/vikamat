import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Nav.module.css";
import { useTheme } from "../hooks/useTheme";
import { SunIcon, MoonIcon } from "./Icons";

const NAV_ITEMS = [
  { to: "/about", label: "about" },
  { to: "/musings", label: "musings" },
  { to: "/captures", label: "captures" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();

  return (
    <header className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <img
            src={theme === "dark" ? "/logo/vk-mark-reversed.svg" : "/logo/vk-mark-ink.svg"}
            alt=""
            width={22}
            height={22}
          />
          <span>Vibhav Kamat</span>
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ""}`}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className={styles.pill}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className={styles.right}>
          <button
            className={styles.themeBtn}
            onClick={toggle}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "flex" }}
              >
                {theme === "light" ? <MoonIcon /> : <SunIcon />}
              </motion.span>
            </AnimatePresence>
          </button>

          <Link to="/connect" className={styles.connectBtn}>
            Let&rsquo;s chat
          </Link>

          <button
            className={styles.menuBtn}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              style={{
                transform: open ? "scaleX(0)" : "scaleX(1)",
                opacity: open ? 0 : 1,
              }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobilePanel}
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`container ${styles.mobileLinks}`}>
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={item.to}
                    className={styles.mobileLink}
                    onClick={() => setOpen(false)}
                    style={{
                      color: location.pathname === item.to ? "var(--accent)" : undefined,
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link to="/connect" className={styles.mobileConnect} onClick={() => setOpen(false)}>
                Let&rsquo;s chat
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
