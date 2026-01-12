"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-white/10"
          : "bg-slate-900/80 backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-14 h-14">
              <img 
                src="/ssrfintechLogo.webp" 
                alt="SSR Fintech Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-tight">
                SSR Fintech
              </span>
              <span className="text-xs text-gray-400 leading-tight">
                Financial Technology Experts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors font-medium group">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 py-2 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 pointer-events-none" />
                    <Link
                      href="/services"
                      className="relative block px-4 py-3 text-sm font-semibold text-indigo-400 hover:bg-white/5 transition-colors border-b border-white/10"
                    >
                      <div className="flex items-center justify-between">
                        <span>View All Services</span>
                        <span className="text-purple-400">→</span>
                      </div>
                    </Link>
                    {navigation.services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
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
              className="relative"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors font-medium group">
                <span>Industries</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 py-2 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 pointer-events-none" />
                    <Link
                      href="/industries"
                      className="relative block px-4 py-3 text-sm font-semibold text-indigo-400 hover:bg-white/5 transition-colors border-b border-white/10"
                    >
                      <div className="flex items-center justify-between">
                        <span>View All Industries</span>
                        <span className="text-purple-400">→</span>
                      </div>
                    </Link>
                    {navigation.industries.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="relative block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
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
              className="relative"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors font-medium group">
                <span>Products</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 py-2 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 pointer-events-none" />
                    <Link
                      href="/products"
                      className="relative block px-4 py-3 text-sm font-semibold text-indigo-400 hover:bg-white/5 transition-colors border-b border-white/10"
                    >
                      <div className="flex items-center justify-between">
                        <span>View All Products</span>
                        <span className="text-purple-400">→</span>
                      </div>
                    </Link>
                    
                    {/* Financial Solutions */}
                    <div className="px-4 py-3 border-b border-white/10">
                      <div className="text-xs font-semibold text-indigo-300 mb-2">Financial Solutions</div>
                      {navigation.products.financial.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors px-2"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {/* Enterprise Solutions */}
                    <div className="px-4 py-3 border-b border-white/10">
                      <div className="text-xs font-semibold text-indigo-300 mb-2">Enterprise Solutions</div>
                      {navigation.products.enterprise.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors px-2"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {/* Migration Services */}
                    <div className="px-4 py-3">
                      <div className="text-xs font-semibold text-indigo-300 mb-2">Services</div>
                      {navigation.products.migration.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors px-2"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/case-studies"
              className="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              Case Studies
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/insights"
              className="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              Insights
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/careers"
              className="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button size="default" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
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
              className="lg:hidden border-t border-white/10 bg-slate-900"
            >
              <div className="max-h-[calc(100vh-5rem)] overflow-y-auto py-4 space-y-1">
                <Link
                  href="/"
                  className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="px-4 pt-3 pb-2">
                  <div className="font-semibold text-indigo-400 text-sm mb-2">Services</div>
                  <Link
                    href="/services"
                    className="block py-2 pl-4 text-sm text-purple-400 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    → View All Services
                  </Link>
                  {navigation.services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 pl-4 text-sm text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="px-4 pt-3 pb-2">
                  <div className="font-semibold text-indigo-400 text-sm mb-2">Industries</div>
                  <Link
                    href="/industries"
                    className="block py-2 pl-4 text-sm text-purple-400 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    → View All Industries
                  </Link>
                  {navigation.industries.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 pl-4 text-sm text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="px-4 pt-3 pb-2">
                  <div className="font-semibold text-indigo-400 text-sm mb-2">Products</div>
                  <Link
                    href="/products"
                    className="block py-2 pl-4 text-sm text-purple-400 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    → View All Products
                  </Link>
                  <div className="pl-4 pt-2">
                    <div className="text-xs text-indigo-300 mb-1">Financial Solutions</div>
                    {navigation.products.financial.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-1.5 pl-2 text-sm text-gray-400 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="pl-4 pt-2">
                    <div className="text-xs text-indigo-300 mb-1">Enterprise Solutions</div>
                    {navigation.products.enterprise.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-1.5 pl-2 text-sm text-gray-400 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="pl-4 pt-2">
                    <div className="text-xs text-indigo-300 mb-1">Services</div>
                    {navigation.products.migration.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-1.5 pl-2 text-sm text-gray-400 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/case-studies"
                  className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  href="/insights"
                  className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Insights
                </Link>
                <Link
                  href="/how-we-work"
                  className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How We Work
                </Link>
                <Link
                  href="/about"
                  className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/careers"
                  className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <div className="px-4 pt-2">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0">
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
