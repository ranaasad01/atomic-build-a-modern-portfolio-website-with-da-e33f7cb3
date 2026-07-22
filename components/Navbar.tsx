"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { navLinks } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const t = useTranslations();
  const navT = t.raw("nav") as Record<string, string>;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = navLinks
          .filter((l) => l.href.startsWith("#"))
          .map((l) => l.href.slice(1));

        for (const id of [...sections].reverse()) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
      }
    } else {
      setMobileOpen(false);
    }
  };

  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--surface)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-[0_4px_32px_rgba(0,212,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Rao Muhammad Ali — Home"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold text-sm select-none">
              RA
            </span>
            <span className="font-semibold text-[var(--foreground)] tracking-tight hidden sm:block group-hover:text-[var(--primary)] transition-colors duration-200">
              Rao Muhammad Ali
            </span>
            <span className="text-xs text-[var(--primary)] font-medium hidden sm:block">
              SDET
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href.startsWith("#") &&
                activeSection === link.href.slice(1);
              return (
                <Link
                  key={link.key}
                  href={getLinkHref(link.href)}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {navT[link.key] ?? link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/cv.pdf"
              download
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-sm font-medium hover:bg-[var(--primary)]/20 transition-all duration-200"
            >
              Download CV
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden bg-[var(--surface)]/95 backdrop-blur-xl border-b border-[var(--border)]"
          >
            <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive =
                  link.href.startsWith("#") &&
                  activeSection === link.href.slice(1);
                return (
                  <Link
                    key={link.key}
                    href={getLinkHref(link.href)}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-[var(--primary)] bg-[var(--primary)]/10"
                        : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-alt)]"
                    }`}
                  >
                    {navT[link.key] ?? link.label}
                  </Link>
                );
              })}
              <a
                href="/cv.pdf"
                download
                className="mt-2 px-4 py-3 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-sm font-medium text-center hover:bg-[var(--primary)]/20 transition-all duration-200"
              >
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}