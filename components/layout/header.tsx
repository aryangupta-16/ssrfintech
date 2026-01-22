"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./header.module.css";

const navigation = {
  services: [
    { name: "Financial Technology Consulting", href: "/services/financial-technology-consulting" },
    { name: "ERP Implementation & Support", href: "/services/erp-implementation-support" },
    { name: "Cloud Solutions & Migration", href: "/services/cloud-solutions-migration" },
    { name: "Data Analytics & BI", href: "/services/data-analytics-business-intelligence" },
    { name: "Cybersecurity Services", href: "/services/cybersecurity-services" },
    { name: "Custom Software Development", href: "/services/custom-software-development" },
  ],
  industries: [
    { name: "Banking & Financial Services", href: "/industries/banking-financial-services" },
    { name: "Insurance", href: "/industries/insurance" },
    { name: "Wealth Management", href: "/industries/wealth-management" },
    { name: "Payment Processing", href: "/industries/payment-processing" },
    { name: "Capital Markets", href: "/industries/capital-markets" },
    { name: "Fintech Startups", href: "/industries/fintech-startups" },
  ],
  products: {
    financial: [
      { name: "SAP Analytics Cloud", href: "/products/sap-analytics-cloud" },
      { name: "SAP Advanced Financial Closing", href: "/products/sap-advanced-financial-closing" },
      { name: "SAP Group Reporting", href: "/products/sap-group-reporting" },
      { name: "SAP PaPM", href: "/products/sap-papm" },
      { name: "SAP Business Data Cloud", href: "/products/sap-business-data-cloud" },
    ],
    enterprise: [
      { name: "SAP Datasphere", href: "/products/sap-datasphere" },
      { name: "SAP Ariba", href: "/products/sap-ariba" },
      { name: "SAP SuccessFactors", href: "/products/sap-successfactors" },
    ],
    migration: [
      { name: "Migration Services", href: "/products/migration-services" },
    ],
  },
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : styles.default}`}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoImage}>
              <img 
                src="/ssrfintechLogo.webp" 
                alt="SSR Fintech Logo"
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>
                SSR Fintech
              </span>
              <span className={styles.logoSubtitle}>
                Financial Technology Experts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className={styles.dropdownContainer}
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`${styles.dropdownTrigger} ${activeDropdown === "services" ? styles.active : ""}`}>
                <span>Services</span>
                <ChevronDown className={styles.dropdownIcon} />
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={styles.dropdownMenu}
                  >
                    <div className={styles.dropdownOverlay} />
                    <Link href="/services" className={styles.viewAll}>
                      <span>View All Services</span>
                      <span>→</span>
                    </Link>
                    {navigation.services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownItem}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div
              className={styles.dropdownContainer}
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`${styles.dropdownTrigger} ${activeDropdown === "industries" ? styles.active : ""}`}>
                <span>Industries</span>
                <ChevronDown className={styles.dropdownIcon} />
              </button>
              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={styles.dropdownMenu}
                  >
                    <div className={styles.dropdownOverlay} />
                    <Link href="/industries" className={styles.viewAll}>
                      <span>View All Industries</span>
                      <span>→</span>
                    </Link>
                    {navigation.industries.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownItem}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div
              className={styles.dropdownContainer}
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`${styles.dropdownTrigger} ${activeDropdown === "products" ? styles.active : ""}`}>
                <span>Products</span>
                <ChevronDown className={styles.dropdownIcon} />
              </button>
              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={styles.megaMenu}
                  >
                    <div className={styles.dropdownOverlay} />
                    <Link href="/products" className={styles.viewAll}>
                      <span>View All Products</span>
                      <span>→</span>
                    </Link>
                    
                    <div className={styles.megaMenuGrid}>
                      {/* Financial Solutions */}
                      <div className={styles.megaMenuSection}>
                        <div className={styles.megaMenuTitle}>Financial Solutions</div>
                        {navigation.products.financial.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={styles.dropdownItem}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      {/* Enterprise Solutions */}
                      <div className={styles.megaMenuSection}>
                        <div className={styles.megaMenuTitle}>Enterprise Solutions</div>
                        {navigation.products.enterprise.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={styles.dropdownItem}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      {/* Migration Services */}
                      <div className={styles.megaMenuSection}>
                        <div className={styles.megaMenuTitle}>Services</div>
                        {navigation.products.migration.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={styles.dropdownItem}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/case-studies" className={styles.navLink}>
              Case Studies
            </Link>
            <Link href="/insights" className={styles.navLink}>
              Insights
            </Link>
            <Link href="/about" className={styles.navLink}>
              About Us
            </Link>
            <Link href="/careers" className={styles.navLink}>
              Careers
            </Link>
          </div>

          {/* CTA Button */}
          <div className={styles.ctaContainer}>
            <Link href="/contact">
              <Button size="default">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={styles.menuIcon} />
            ) : (
              <Menu className={styles.menuIcon} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={styles.mobileMenu}
            >
              <div className={styles.mobileMenuNav}>
                <Link
                  href="/"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Services */}
                <div className={styles.mobileDropdown}>
                  <div className={styles.megaMenuTitle}>Services</div>
                  <Link
                    href="/services"
                    className={styles.viewAll}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>→ View All Services</span>
                  </Link>
                  <div className={styles.mobileDropdownContent}>
                    {navigation.services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.mobileDropdownItem}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div className={styles.mobileDropdown}>
                  <div className={styles.megaMenuTitle}>Industries</div>
                  <Link
                    href="/industries"
                    className={styles.viewAll}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>→ View All Industries</span>
                  </Link>
                  <div className={styles.mobileDropdownContent}>
                    {navigation.industries.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.mobileDropdownItem}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Products */}
                <div className={styles.mobileDropdown}>
                  <div className={styles.megaMenuTitle}>Products</div>
                  <Link
                    href="/products"
                    className={styles.viewAll}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>→ View All Products</span>
                  </Link>
                  <div className={styles.mobileProductsSection}>
                    <div className={styles.mobileProductCategory}>
                      <div className={styles.mobileProductTitle}>Financial Solutions</div>
                      {navigation.products.financial.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={styles.mobileDropdownItem}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className={styles.mobileProductCategory}>
                      <div className={styles.mobileProductTitle}>Enterprise Solutions</div>
                      {navigation.products.enterprise.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={styles.mobileDropdownItem}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className={styles.mobileProductCategory}>
                      <div className={styles.mobileProductTitle}>Services</div>
                      {navigation.products.migration.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={styles.mobileDropdownItem}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/case-studies"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  href="/insights"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Insights
                </Link>
                <Link
                  href="/how-we-work"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How We Work
                </Link>
                <Link
                  href="/about"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/careers"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>

                <div className={styles.mobileCta}>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className={styles.mobileCtaButton}>
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
