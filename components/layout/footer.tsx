"use client";

import { useState } from "react";
import Link from "next/link";
import { Linkedin, Twitter, Facebook, Youtube, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

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
    <footer className="bg-slate-950 text-white/90 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16">
                <img 
                  src="/ssrfintechLogo.webp" 
                  alt="SSR Fintech Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">SSR Fintech</span>
                <span className="text-xs text-white/60 leading-tight">Financial Technology Experts</span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Transforming financial services through innovative technology solutions
              and expert consulting.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/company/ssrfintech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:border-transparent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=IHs_1-85D08"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:border-transparent transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:border-transparent transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:border-transparent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[var(--color-accent)] rounded-full" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[var(--color-accent)] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[var(--color-accent)] rounded-full" />
              Industries
            </h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[var(--color-accent)] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[var(--color-accent)] rounded-full" />
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[var(--color-accent)] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[var(--color-accent)] rounded-full" />
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[var(--color-accent)] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[var(--color-accent)] rounded-full" />
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[var(--color-accent)] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <h4 className="text-white font-semibold text-sm mb-3">Quick Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs text-white/70 hover:text-[var(--color-accent)] transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+911234567890">+91 123 456 7890</a>
                </div>
                <div className="flex items-center space-x-2 text-xs text-white/70 hover:text-[var(--color-accent)] transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:info@ssrfintech.com">info@ssrfintech.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-semibold text-2xl mb-3">
              Stay Updated
            </h3>
            <p className="text-white/70 mb-6">
              Subscribe to our newsletter for the latest fintech insights and updates
            </p>
            {showNewsletterSuccess && (
              <div className="mb-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <p className="text-green-400 font-medium">Thank you for subscribing!</p>
              </div>
            )}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--link-hover)] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Global Presence */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
              Global Presence
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {globalLocations.map((location, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 hover:border-[var(--color-accent)]/50 transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{location.icon}</span>
                    <span className="text-white/80 text-sm group-hover:text-[var(--color-accent)] transition-colors">
                      {location.region}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              © {currentYear} SSR Fintech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
