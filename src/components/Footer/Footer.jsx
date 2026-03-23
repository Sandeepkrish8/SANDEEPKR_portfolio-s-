import { FiGithub, FiLinkedin, FiTwitter, FiHeart, FiArrowUp } from 'react-icons/fi';
import { personal } from '../../data/portfolioData';
import styles from './Footer.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={styles.gradientLine} />
      <div className={`container ${styles.inner}`}>
        {/* Branding */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>&lt;/&gt;</span>
            <span className={styles.logoText}>{personal.name}</span>
          </div>
          <p className={styles.tagline}>{personal.title} · MCA Graduate</p>
          <p className={styles.tagline2}>{personal.heroTagline}</p>
        </div>

        {/* Quick links */}
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className={styles.social}>
          <h4>Connect</h4>
          <div className={styles.socialLinks}>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FiTwitter />
            </a>
          </div>
          <a href={`mailto:${personal.email}`} className={styles.email}>
            {personal.email}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copy}>
              © {new Date().getFullYear()} {personal.name}. Crafted with{' '}
              <FiHeart className={styles.heart} /> and React.js.
            </p>
            <button className={styles.backTop} onClick={scrollTop} aria-label="Scroll to top">
              <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
