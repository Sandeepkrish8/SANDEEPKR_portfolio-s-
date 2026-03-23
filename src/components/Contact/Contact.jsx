import { useState, useRef } from 'react';
import {
  FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiDownload,
} from 'react-icons/fi';
import { personal } from '../../data/portfolioData';
import { useReveal, useStaggerReveal } from '../../hooks/useGSAP';
import styles from './Contact.module.css';

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: <FiPhone />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'Connect with me', href: personal.linkedin },
  { icon: <FiGithub />, label: 'GitHub', value: 'View my work', href: personal.github },
];

export default function Contact() {
  const titleRef = useReveal({ y: 40 });
  const infoRef = useStaggerReveal('.contact-item', { y: 30, stagger: 0.1 });
  const formRef = useReveal({ y: 50, delay: 0.1 });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Simulate form submission (replace with real EmailJS / Formspree call)
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={`blob ${styles.blob1}`} />
      <div className={`blob ${styles.blob2}`} />
      <div className="container">
        <div ref={titleRef} className={styles.header}>
          <span className="section-tag">08. Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            I'm open to full-time roles, freelance projects, and exciting collaborations.
            Reach out — I respond within 24 hours!
          </p>
        </div>

        <div className={styles.inner}>
          {/* ── Left: Info + Resume ── */}
          <div className={styles.left}>
            <div ref={infoRef} className={styles.infoList}>
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`contact-item ${styles.infoItem}`}
                >
                  <div className={styles.infoIcon}>{item.icon}</div>
                  <div>
                    <div className={styles.infoLabel}>{item.label}</div>
                    <div className={styles.infoValue}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume download */}
            <div className={styles.resumeBox}>
              <p>Like what you see? Grab a copy of my resume.</p>
              <a href={personal.resume} download className="btn btn-primary">
                <FiDownload /> Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  autoComplete="name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Job Opportunity / Project Idea"
                value={form.subject}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Hi Sandeep, I'd love to discuss..."
                value={form.message}
                onChange={handleChange}
                required
                className={styles.textarea}
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <span className={styles.loader} />
              ) : (
                <>
                  <FiSend />
                  {status === 'sent' ? 'Message Sent! 🎉' : "Send Message"}
                </>
              )}
            </button>

            {status === 'sent' && (
              <p className={styles.successMsg}>
                ✅ Thanks! I'll get back to you within 24 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
