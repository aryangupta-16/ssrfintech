"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./header.module.css";

const navigation = {
  services: [
    { name: "Financial Planning & Forecasting", href: "/services/financial-planning-forecasting" },
    { name: "Financial Consolidation & Close", href: "/services/financial-consolidation-close" },
    { name: "Reporting & Analytics", href: "/services/reporting-analytics" },
    { name: "SAP ERP Transformations", href: "/services/sap-erp-transformations" },
    { name: "Implementation & Rollouts", href: "/services/implementation-rollouts" },
    { name: "Support & Optimization - AMS", href: "/services/support-optimization-ams" },
    { name: "Cybersecurity Services", href: "/services/cybersecurity-services" },
  ],
  industries: [
    { name: "Banking & Financial Services", href: "/industries/banking-financial-services" },
    { name: "Automobile & Manufacturing", href: "/industries/automobile-manufacturing" },
    { name: "Oil & Gas", href: "/industries/oil-gas" },
    { name: "Mining & Resources", href: "/industries/mining-resources" },
    { name: "FMCG & Retail", href: "/industries/fmcg-retail" },
    { name: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain" },
    { name: "Pharmaceutical & Life Sciences", href: "/industries/pharma-life-sciences" },
    { name: "Utilities & Energy", href: "/industries/utilities-energy" },
    { name: "Ports & Maritime", href: "/industries/ports-maritime" },
    { name: "Private Equity & Investment", href: "/industries/private-equity-investment" },
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
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (savedTheme === null && prefersDark);
    setIsDark(shouldBeDark);
    document.documentElement.setAttribute("data-theme", shouldBeDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    const theme = newDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

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
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoImage}>
                <img
                  src="/ssrfintechLogo.webp"
                  alt="SSR Fintech Logo"
                />
              </div>
              {/* <div className={styles.logoText}>
                <span className={styles.logoTitle}>
                  SSR Fintech
                </span>
                <span className={styles.logoSubtitle}>
                  Financial Technology Experts
                </span>
              </div> */}
            </Link>
            <div className={styles.partnerBadge}>
              <img
                src="/sapLogo.png"
                alt="SAP Partner"
                className={styles.sapLogo}
              />
            </div>
          </div>

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
            {/* Theme Toggle Button - Always visible */}
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                className={styles.themeToggleDesktop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>
            )}
          </div>

          {/* Mobile Controls */}
          <div className={styles.mobileControls}>
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

            {/* Theme Toggle Button */}
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                className={styles.themeToggleButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )}
              </motion.button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.mobileMenu}
            >
              <div className={styles.mobileMenuHeader}>
                <Link href="/" className={styles.logo}>
                  <div className={styles.logoImage}>
                    <img 
                      src="/ssrfintechLogo.webp" 
                      alt="SSR Fintech Logo"
                    />
                  </div>
                </Link>
                <button
                  className={styles.mobileMenuClose}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className={styles.mobileMenuNav}>
                <Link
                  href="/"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Services - Expandable */}
                <div className={styles.mobileExpandableSection}>
                  <button
                    className={styles.mobileExpandButton}
                    onClick={() => setExpandedMobileSection(expandedMobileSection === "services" ? null : "services")}
                  >
                    <span>Services</span>
                    <motion.div
                      animate={{ rotate: expandedMobileSection === "services" ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedMobileSection === "services" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className={styles.expandableContent}
                      >
                        <Link
                          href="/services"
                          className={styles.expandableViewAll}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View All Services →
                        </Link>
                        {navigation.services.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={styles.expandableItem}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Industries - Expandable */}
                <div className={styles.mobileExpandableSection}>
                  <button
                    className={styles.mobileExpandButton}
                    onClick={() => setExpandedMobileSection(expandedMobileSection === "industries" ? null : "industries")}
                  >
                    <span>Industries</span>
                    <motion.div
                      animate={{ rotate: expandedMobileSection === "industries" ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedMobileSection === "industries" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className={styles.expandableContent}
                      >
                        <Link
                          href="/industries"
                          className={styles.expandableViewAll}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View All Industries →
                        </Link>
                        {navigation.industries.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={styles.expandableItem}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Products - Expandable */}
                <div className={styles.mobileExpandableSection}>
                  <button
                    className={styles.mobileExpandButton}
                    onClick={() => setExpandedMobileSection(expandedMobileSection === "products" ? null : "products")}
                  >
                    <span>Products</span>
                    <motion.div
                      animate={{ rotate: expandedMobileSection === "products" ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedMobileSection === "products" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className={styles.expandableContent}
                      >
                        <Link
                          href="/products"
                          className={styles.expandableViewAll}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View All Products →
                        </Link>
                        <div className={styles.productCategoryGroup}>
                          <div className={styles.productCategory}>
                            <div className={styles.productCategoryTitle}>Financial Solutions</div>
                            {navigation.products.financial.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={styles.expandableItem}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                          <div className={styles.productCategory}>
                            <div className={styles.productCategoryTitle}>Enterprise Solutions</div>
                            {navigation.products.enterprise.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={styles.expandableItem}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                          <div className={styles.productCategory}>
                            <div className={styles.productCategoryTitle}>Migration Services</div>
                            {navigation.products.migration.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={styles.expandableItem}
                                onClick={() => setIsMobileMenuOpen(false)}
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
