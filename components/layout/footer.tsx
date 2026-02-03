"use client";

import { useState } from "react";
import Link from "next/link";
import { Linkedin, Twitter, Facebook, Youtube, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import styles from "./footer.module.css";

const footerLinks = {
  services: [
    { name: "Financial Technology", href: "/services/financial-technology-consulting" },
    { name: "ERP Solutions", href: "/services/erp-implementation-support" },
    { name: "Cloud Services", href: "/services/cloud-solutions-migration" },
    { name: "Data Analytics", href: "/services/data-analytics-business-intelligence" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights", href: "/insights" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  products: [
    { name: "All Products", href: "/products" },
    { name: "SAP Analytics Cloud", href: "/products/sap-analytics-cloud" },
    { name: "SAP Group Reporting", href: "/products/sap-group-reporting" },
    { name: "Migration Services", href: "/products/migration-services" },
  ],
  resources: [
    { name: "All Services", href: "/services" },
    { name: "All Industries", href: "/industries" },
    { name: "Trust & Security", href: "/trust" },
    { name: "Blog", href: "/insights" },
  ],
  industries: [
    { name: "Banking", href: "/industries/banking-financial-services" },
    { name: "Insurance", href: "/industries/insurance" },
    { name: "Wealth Management", href: "/industries/wealth-management" },
    { name: "Fintech", href: "/industries/fintech-startups" },
  ],
};

const globalLocations = [
  { region: "Singapore", icon: "🇸🇬" },
  { region: "Philippines", icon: "🇵🇭" },
  { region: "India", icon: "🇮🇳" },
  { region: "United Kingdom", icon: "🇬🇧" },
  { region: "United States", icon: "🇺🇸" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [showNewsletterSuccess, setShowNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (email) {
      console.log("Newsletter subscription:", email);
      setShowNewsletterSuccess(true);
      setEmail("");
      setTimeout(() => setShowNewsletterSuccess(false), 5000);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <div className={styles.logoContainer}>
              <div className={styles.logoImage}>
                <img 
                  src="/ssrfintechLogo.webp" 
                  alt="SSR Fintech Logo"
                />
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoTitle}>SSR Fintech</span>
                <span className={styles.logoSubtitle}>Financial Technology Experts</span>
              </div>
            </div>
            <p className={styles.description}>
              Transforming financial services through innovative technology solutions
              and expert consulting.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/company/ssrfintech/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <Linkedin className={styles.socialIcon} />
              </a>
              <a
                href="https://www.youtube.com/watch?v=IHs_1-85D08"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="YouTube"
              >
                <Youtube className={styles.socialIcon} />
              </a>
              <a
                href="#"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                <Twitter className={styles.socialIcon} />
              </a>
              <a
                href="#"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <Facebook className={styles.socialIcon} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.titleBar} />
              Services
            </h3>
            <ul className={styles.linkList}>
              {footerLinks.services.map((link) => (
                <li key={link.href} className={styles.linkItem}>
                  <Link href={link.href} className={styles.link}>
                    <span className={styles.linkUnderline} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.titleBar} />
              Industries
            </h3>
            <ul className={styles.linkList}>
              {footerLinks.industries.map((link) => (
                <li key={link.href} className={styles.linkItem}>
                  <Link href={link.href} className={styles.link}>
                    <span className={styles.linkUnderline} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.titleBar} />
              Products
            </h3>
            <ul className={styles.linkList}>
              {footerLinks.products.map((link) => (
                <li key={link.href} className={styles.linkItem}>
                  <Link href={link.href} className={styles.link}>
                    <span className={styles.linkUnderline} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.titleBar} />
              Company
            </h3>
            <ul className={styles.linkList}>
              {footerLinks.company.map((link) => (
                <li key={link.href} className={styles.linkItem}>
                  <Link href={link.href} className={styles.link}>
                    <span className={styles.linkUnderline} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <span className={styles.titleBar} />
              Resources
            </h3>
            <ul className={styles.linkList}>
              {footerLinks.resources.map((link) => (
                <li key={link.href} className={styles.linkItem}>
                  <Link href={link.href} className={styles.link}>
                    <span className={styles.linkUnderline} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.quickContact}>
              <h4 className={styles.quickContactTitle}>Quick Contact</h4>
              <div className={styles.contactList}>
                <a href="tel:+911234567890" className={styles.contactItem}>
                  <Phone className={styles.contactIcon} />
                  <span>+91 96693 36333</span>
                </a>
                <a href="mailto:info@ssrfintech.com" className={styles.contactItem}>
                  <Mail className={styles.contactIcon} />
                  <span>contact@ssrfintech.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <h3 className={styles.newsletterTitle}>
              Stay Updated
            </h3>
            <p className={styles.newsletterDescription}>
              Subscribe to our newsletter for the latest fintech insights and updates
            </p>
            {showNewsletterSuccess && (
              <div className={styles.successMessage}>
                <CheckCircle2 className={styles.successIcon} />
                <p className={styles.successText}>Thank you for subscribing!</p>
              </div>
            )}
            <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Global Presence */}
        {/* <div className={styles.globalPresence}>
          <div className={styles.globalContent}>
            <h3 className={styles.globalTitle}>
              <MapPin className={styles.mapIcon} />
              Global Presence
            </h3>
            <div className={styles.locationGrid}>
              {globalLocations.map((location, index) => (
                <div key={index} className={styles.locationCard}>
                  <div className={styles.locationContent}>
                    <span className={styles.locationFlag}>{location.icon}</span>
                    <span className={styles.locationName}>
                      {location.region}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} SSR Fintech. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <Link href="/privacy-policy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className={styles.legalLink}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
