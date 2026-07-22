"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, Mail } from 'lucide-react';
import { navLinks, brand } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations();
  const navT = t.raw("nav") as Record<string, string>;
  const footerT = t.raw("footer") as {
    tagline: string;
    copyright: string;
    linkedin: string;
    email: string;
    built: string;
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold text-sm select-none">
                RA
              </span>
              <span className="font-semibold text-[var(--foreground)] tracking-tight">
                {brand.name}
              </span>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xs">
              {footerT.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 rounded-lg bg-[var(--surface-alt)] text-[var(--muted)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all duration-200"
              >
                <Linkedin size={16} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${brand.email}`}
                aria-label="Send email"
                className="p-2 rounded-lg bg-[var(--surface-alt)] text-[var(--muted)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all duration-200"
              >
                <Mail size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <nav className="grid grid-cols-2 gap-2" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={getLinkHref(link.href)}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors duration-200"
                >
                  {navT[link.key] ?? link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest mb-4">
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors duration-200"
              >
                <Mail size={14} aria-hidden="true" />
                {footerT.email}
              </a>
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors duration-200"
              >
                <Linkedin size={14} aria-hidden="true" />
                {footerT.linkedin}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs text-[var(--muted)]">{footerT.copyright}</p>
          <p className="text-xs text-[var(--muted)]">{footerT.built}</p>
        </motion.div>
      </div>
    </footer>
  );
}