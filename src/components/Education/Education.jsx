import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import { education } from '../../data/portfolioData';
import { useReveal, useStaggerReveal } from '../../hooks/useGSAP';
import styles from './Education.module.css';

export default function Education() {
  const titleRef = useReveal({ y: 40 });
  const cardsRef = useStaggerReveal('.edu-card', { y: 50, stagger: 0.2 });

  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <div ref={titleRef} className={styles.header}>
          <span className="section-tag">02. Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            My formal education gave me a strong foundation in CS fundamentals and software engineering.
          </p>
        </div>

        <div ref={cardsRef} className={styles.timeline}>
          {education.map((edu, i) => (
            <div key={i} className={`edu-card ${styles.item}`}>
              {/* Timeline dot */}
              <div className={styles.timeline_track}>
                <div className={styles.dot} />
                {i < education.length - 1 && <div className={styles.line} />}
              </div>

              {/* Card */}
              <div className={`card ${styles.card}`}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <div className={styles.meta}>
                      <span className={styles.metaItem}>
                        <FiMapPin /> {edu.institution}
                      </span>
                      <span className={styles.metaItem}>
                        <FiCalendar /> {edu.year}
                      </span>
                    </div>
                  </div>
                  <div className={styles.grade}>
                    <FiAward />
                    {edu.grade}
                  </div>
                </div>

                <ul className={styles.highlights}>
                  {edu.highlights.map((h, j) => (
                    <li key={j} className={styles.highlight}>
                      <span className={styles.highlightDot} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
