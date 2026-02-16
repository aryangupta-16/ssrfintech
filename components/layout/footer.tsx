"use client";

import Link from "next/link";
import { Linkedin, Facebook, Youtube, Instagram, Mail, Phone, ArrowRight } from "lucide-react";
import styles from "./footer.module.css";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "Insights", href: "/insights" },
  { name: "Careers", href: "/careers" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/ssrfintech/", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.youtube.com/watch?v=IHs_1-85D08", label: "YouTube", icon: Youtube },
  { href: "https://www.facebook.com/p/SSR-Fintech-61568719633136/", label: "Facebook", icon: Facebook },
  { href: "https://www.instagram.com/ssrfintechltd/", label: "Instagram", icon: Instagram },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* 3-column body */}
        <div className={styles.body}>

          {/* Column 1 — Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logoContainer}>
              <img src="/ssrfintechLogo.webp" alt="SSR Fintech" className={styles.logoImage} />
              <div className={styles.logoText}>
                <span className={styles.logoTitle}>SSR Fintech</span>
                <span className={styles.logoSubtitle}>Financial Technology Experts</span>
              </div>
            </Link>
            <p className={styles.description}>
              Transforming financial services through innovative technology solutions, expert consulting, and proven SAP implementations.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={s.label}>
                  <s.icon className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Contact */}
          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Get In Touch</h3>
            <p className={styles.contactTagline}>
              Ready to transform your financial operations? Our experts are here to help.
            </p>
            <div className={styles.contactList}>
              <a href="tel:+919669336333" className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span>+91 96693 36333</span>
              </a>
              <a href="mailto:contact@ssrfintech.com" className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span>contact@ssrfintech.com</span>
              </a>
            </div>
            <Link href="/contact" className={styles.ctaLink}>
              Contact Us
              <ArrowRight className={styles.ctaArrow} />
            </Link>
          </div>

          {/* Column 3 — Quick Links */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linkGrid}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© {currentYear} SSR Fintech Ltd. All rights reserved.</p>
          <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
