import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandMark}>JM</span>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Julharie M. Maddin</span>
            <span className={styles.brandTag}>
              <span className={styles.statusDot} />
              Building
            </span>
          </div>
        </NavLink>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`${styles.menuBtn} ${open ? styles.menuBtnActive : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}