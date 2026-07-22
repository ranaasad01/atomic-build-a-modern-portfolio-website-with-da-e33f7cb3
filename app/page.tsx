"use client";

import { motion, type Variants } from "framer-motion";
import { Reveal } from "@/components/Reveal";
type BRAND = any;
const BRAND: any = [];
import { fadeInUp, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
import { Mail, Phone, Briefcase as Linkedin, MapPin, CheckCircle, Briefcase, GraduationCap, Award, Star, ChevronRight, Code, Terminal, Activity, FileText, Code2 as Github } from 'lucide-react';
import { useTranslations } from "next-intl";

// ─── Inline Data ────────────────────────────────────────────────────────────

const SKILLS = [
  { category: "Test Automation", tools: ["Playwright", "Selenium WebDriver", "Cypress", "TestNG", "JUnit"] },
  { category: "API Testing", tools: ["Postman", "REST Assured", "Swagger", "Newman"] },
  { category: "Performance Testing", tools: ["JMeter", "Gatling", "k6"] },
  { category: "Languages", tools: ["Python", "JavaScript", "TypeScript", "Java"] },
  { category: "CI/CD & DevOps", tools: ["GitHub Actions", "Jenkins", "Docker", "Git"] },
  { category: "Frameworks & Tools", tools: ["Page Object Model", "BDD/Gherkin", "Allure Reports", "JIRA", "Confluence"] },
];

const EXPERIENCE = [
  {
    id: "daticsai",
    role: "Software Development Engineer in Test (SDET)",
    company: "DaticsAI",
    period: "2023 – Present",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    highlights: [
      "Architected end-to-end Playwright automation suite covering 300+ test cases for the Veridat data marketplace platform",
      "Reduced regression cycle time by 65% through CI/CD integration with GitHub Actions",
      "Designed API test collections in Postman and automated them via Newman in the pipeline",
      "Collaborated with dev teams on shift-left testing, catching critical defects pre-release",
      "Maintained living test documentation and defect reports in JIRA and Confluence",
    ],
  },
  {
    id: "techherointern",
    role: "QA Engineer Intern",
    company: "Tech Hero",
    period: "2022 – 2023",
    location: "Remote",
    type: "Internship",
    highlights: [
      "Executed manual and exploratory testing across web and mobile applications",
      "Wrote detailed test plans, test cases, and bug reports for multiple product releases",
      "Assisted in setting up Selenium-based smoke test scripts for regression coverage",
      "Participated in sprint ceremonies and contributed to QA process improvements",
    ],
  },
  {
    id: "frontenddev",
    role: "Front-end Developer Intern",
    company: "Tech Hero",
    period: "2022",
    location: "Remote",
    type: "Internship",
    highlights: [
      "Built responsive UI components using React and Tailwind CSS",
      "Gained deep understanding of front-end architecture, aiding cross-functional QA perspective",
      "Collaborated with designers to implement pixel-perfect interfaces",
    ],
  },
];

const PROJECTS = [
  {
    id: "veridat",
    title: "Veridat Data Marketplace – Test Automation Suite",
    description:
      "Comprehensive end-to-end automation framework for Veridat, a B2B data marketplace platform. Covers user onboarding, data listing flows, search and filter functionality, checkout, and admin dashboards.",
    tech: ["Playwright", "TypeScript", "GitHub Actions", "Allure Reports", "Postman", "Newman"],
    highlights: [
      "300+ automated test cases across 12 modules",
      "65% reduction in regression cycle time",
      "Integrated into CI/CD pipeline with nightly runs",
      "Detailed Allure HTML reports with screenshots on failure",
    ],
    type: "Professional",
  },
  {
    id: "api-framework",
    title: "REST API Automation Framework",
    description:
      "Modular API testing framework built with Postman and Newman, supporting environment-based configuration, data-driven tests, and automated pipeline execution.",
    tech: ["Postman", "Newman", "JavaScript", "Jenkins", "JSON Schema"],
    highlights: [
      "50+ API endpoints covered with positive and negative scenarios",
      "Schema validation and contract testing included",
      "Parameterized environments for dev, staging, and production",
    ],
    type: "Professional",
  },
  {
    id: "perf-testing",
    title: "Performance Benchmarking with JMeter",
    description:
      "Load and stress testing initiative for a high-traffic web application, identifying bottlenecks and validating SLA compliance under peak load conditions.",
    tech: ["JMeter", "Grafana", "InfluxDB", "Python"],
    highlights: [
      "Simulated 1,000 concurrent users with realistic think times",
      "Identified 3 critical performance bottlenecks pre-launch",
      "Produced detailed performance reports with recommendations",
    ],
    type: "Professional",
  },
];

const CERTIFICATIONS = [
  {
    id: "english-works",
    title: "English Works Program",
    issuer: "U.S. Embassy Islamabad",
    year: "2023",
    description:
      "Competitive professional English communication and leadership program sponsored by the U.S. Embassy, focusing on technical writing, presentation skills, and cross-cultural communication.",
    icon: "🇺🇸",
  },
];

const AWARDS = [
  {
    id: "junior-vp",
    title: "Junior Vice President",
    org: "Skill Development Society – COMSATS University",
    period: "2022 – 2023",
    description:
      "Led skill-building workshops, hackathons, and tech talks for 500+ students. Organized industry speaker sessions and mentorship programs to bridge academia and industry.",
    icon: Star,
  },
  {
    id: "joint-sec",
    title: "Joint Secretary",
    org: "Sports Society – COMSATS University",
    period: "2021 – 2022",
    description:
      "Coordinated inter-university sports events and managed logistics for tournaments with 200+ participants. Strengthened teamwork and organizational skills.",
    icon: Award,
  },
];

const STATS = [
  { value: "300+", label: "Test Cases Automated" },
  { value: "65%", label: "Regression Time Saved" },
  { value: "3+", label: "Years in QA" },
  { value: "12", label: "Modules Covered" },
];

// ─── Hero Section ────────────────────────────────────────────────────────────

const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function HeroSection() {
  const t = useTranslations();
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 bg-[var(--bg-base)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, var(--accent-cyan)/20 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, var(--accent-purple)/15 0%, transparent 60%)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--accent-cyan) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={heroItem} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/5 text-[var(--accent-cyan)] text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
            {t("hero.badge")}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={heroItem}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none mb-4"
        >
          {t("hero.firstName")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)]">
            {t("hero.lastName")}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={heroItem}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/70 mb-4 tracking-wide"
        >
          {t("hero.title")}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={heroItem}
          className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.tagline")}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={heroItem} className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--accent-cyan)] text-[var(--bg-base)] font-semibold text-sm hover:bg-[var(--accent-cyan)]/90 transition-all duration-300 shadow-[0_0_24px_var(--accent-cyan)/40]"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            {t("hero.ctaContact")}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white/80 font-semibold text-sm hover:border-[var(--accent-cyan)]/50 hover:text-[var(--accent-cyan)] transition-all duration-300"
          >
            <Terminal className="w-4 h-4" aria-hidden="true" />
            {t("hero.ctaProjects")}
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={heroItem}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[var(--accent-cyan)]">
                {stat.value}
              </div>
              <div className="text-xs text-white/40 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">{t("hero.scroll")}</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[var(--accent-cyan)]/60 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

// ─── About Section ───────────────────────────────────────────────────────────

function AboutSection() {
  const t = useTranslations();
  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--bg-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-[var(--accent-cyan)]" />
            <span className="text-[var(--accent-cyan)] text-sm font-semibold tracking-widest uppercase">
              {t("about.eyebrow")}
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
              {t("about.heading")}
            </h2>
            <p className="text-white/60 leading-relaxed mb-5">
              {t("about.para1")}
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              {t("about.para2")}
            </p>
            <div className="flex flex-wrap gap-3">
              {(["about.tag1", "about.tag2", "about.tag3", "about.tag4"] as const).map((key) => (
                <span
                  key={key}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-[var(--accent-purple)]/30 bg-[var(--accent-purple)]/5 text-[var(--accent-purple)]"
                >
                  {t(key)}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Right: info card */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-white/8 bg-[var(--bg-base)] p-8 space-y-5 shadow-[0_4px_32px_rgba(0,0,0,0.4)]">
              {[
                { icon: MapPin, label: t("about.infoLocation"), value: BRAND.location },
                { icon: Briefcase, label: t("about.infoRole"), value: BRAND.title },
                { icon: GraduationCap, label: t("about.infoDegree"), value: t("about.degreeValue") },
                { icon: Mail, label: t("about.infoEmail"), value: BRAND.email },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[var(--accent-cyan)]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">{label}</div>
                    <div className="text-sm text-white/80 font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Skills Section ──────────────────────────────────────────────────────────

function SkillsSection() {
  const t = useTranslations();
  return (
    <section id="skills" className="py-24 md:py-32 bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[var(--accent-cyan)]" />
            <span className="text-[var(--accent-cyan)] text-sm font-semibold tracking-widest uppercase">
              {t("skills.eyebrow")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {t("skills.heading")}
          </h2>
          <p className="text-white/50 max-w-xl mb-14 leading-relaxed">
            {t("skills.subheading")}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.07}>
              <motion.div
                className="rounded-2xl border border-white/8 bg-[var(--bg-surface)] p-6 hover:border-[var(--accent-cyan)]/30 transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.3)]"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-4 h-4 text-[var(--accent-cyan)]" aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-white/80 tracking-wide">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--accent-cyan)]/8 border border-[var(--accent-cyan)]/15 text-[var(--accent-cyan)]/80 hover:bg-[var(--accent-cyan)]/15 hover:text-[var(--accent-cyan)] transition-colors duration-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experience Section ──────────────────────────────────────────────────────

function ExperienceSection() {
  const t = useTranslations();
  return (
    <section id="experience" className="py-24 md:py-32 bg-[var(--bg-surface)]">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[var(--accent-cyan)]" />
            <span className="text-[var(--accent-cyan)] text-sm font-semibold tracking-widest uppercase">
              {t("experience.eyebrow")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-14">
            {t("experience.heading")}
          </h2>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-cyan)]/40 via-[var(--accent-purple)]/30 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCE.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.1}>
                <div className="relative pl-14">
                  {/* Dot */}
                  <div className="absolute left-3.5 top-1.5 w-3 h-3 rounded-full border-2 border-[var(--accent-cyan)] bg-[var(--bg-base)] shadow-[0_0_8px_var(--accent-cyan)/60]" />

                  <div className="rounded-2xl border border-white/8 bg-[var(--bg-base)] p-6 shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white">{job.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[var(--accent-cyan)] font-semibold text-sm">
                            {job.company}
                          </span>
                          <span className="text-white/30 text-xs">·</span>
                          <span className="text-white/40 text-xs">{job.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-white/50 font-medium">{job.period}</span>
                        <span className="px-2 py-0.5 rounded-full text-xs border border-[var(--accent-purple)]/30 bg-[var(--accent-purple)]/5 text-[var(--accent-purple)]">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-white/55 leading-relaxed">
                          <ChevronRight className="w-3.5 h-3.5 text-[var(--accent-cyan)]/60 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects Section ────────────────────────────────────────────────────────

function ProjectsSection() {
  const t = useTranslations();
  return (
    <section id="projects" className="py-24 md:py-32 bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[var(--accent-cyan)]" />
            <span className="text-[var(--accent-cyan)] text-sm font-semibold tracking-widest uppercase">
              {t("projects.eyebrow")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {t("projects.heading")}
          </h2>
          <p className="text-white/50 max-w-xl mb-14 leading-relaxed">
            {t("projects.subheading")}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <motion.div
                className="group rounded-2xl border border-white/8 bg-[var(--bg-surface)] p-6 flex flex-col h-full hover:border-[var(--accent-cyan)]/30 transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.3)]"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-cyan)]/10 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-[var(--accent-cyan)]" aria-hidden="true" />
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--accent-purple)]/30 bg-[var(--accent-purple)]/5 text-[var(--accent-purple)]">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-white/50">
                      <CheckCircle className="w-3 h-3 text-[var(--accent-cyan)]/70 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs bg-white/5 border border-white/10 text-white/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Education Section ───────────────────────────────────────────────────────

function EducationSection() {
  const t = useTranslations();
  return (
    <section id="education" className="py-24 md:py-32 bg-[var(--bg-surface)]">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[var(--accent-cyan)]" />
            <span className="text-[var(--accent-cyan)] text-sm font-semibold tracking-widest uppercase">
              {t("education.eyebrow")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-14">
            {t("education.heading")}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/8 bg-[var(--bg-base)] p-8 shadow-[0_4px_32px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-cyan)]/20 to-[var(--accent-purple)]/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-[var(--accent-cyan)]" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{t("education.degree")}</h3>
                    <p className="text-[var(--accent-cyan)] font-semibold mt-0.5">
                      {t("education.university")}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-white/50">{t("education.period")}</span>
                    <div className="mt-1">
                      <span className="px-2.5 py-0.5 rounded-full text-xs border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/5 text-[var(--accent-cyan)]">
                        {t("education.status")}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  {t("education.description")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Certifications Section ──────────────────────────────────────────────────

function CertificationsSection() {
  const t = useTranslations();
  return (
    <section id="certifications" className="py-24 md:py-32 bg-[var(--bg-base)]">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[var(--accent-cyan)]" />
            <span className="text-[var(--accent-cyan)] text-sm font-semibold tracking-widest uppercase">
              {t("certifications.eyebrow")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-14">
            {t("certifications.heading")}
          </h2>
        </Reveal>

        {CERTIFICATIONS.map((cert, i) => (
          <Reveal key={cert.id} delay={i * 0.1}>
            <div className="rounded-2xl border border-white/8 bg-[var(--bg-surface)] p-8 shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[var(--bg-base)] border border-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                      <p className="text-[var(--accent-cyan)] text-sm font-semibold mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-sm text-white/40">{cert.year}</span>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─── Awards Section ──────────────────────────────────────────────────────────

function AwardsSection() {
  const t = useTranslations();
  return (
    <section id="awards" className="py-24 md:py-32 bg-[var(--bg-surface)]">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[var(--accent-cyan)]" />
            <span className="text-[var(--accent-cyan)] text-sm font-semibold tracking-widest uppercase">
              {t("awards.eyebrow")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-14">
            {t("awards.heading")}
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {AWARDS.map((award, i) => {
            const Icon = award.icon;
            return (
              <Reveal key={award.id} delay={i * 0.1}>
                <motion.div
                  className="rounded-2xl border border-white/8 bg-[var(--bg-base)] p-6 hover:border-[var(--accent-purple)]/30 transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.3)]"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent-purple)]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[var(--accent-purple)]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-0.5">{award.title}</h3>
                      <p className="text-[var(--accent-purple)] text-xs font-semibold mb-1">
                        {award.org}
                      </p>
                      <p className="text-white/40 text-xs mb-3">{award.period}</p>
                      <p className="text-white/55 text-sm leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ─────────────────────────────────────────────────────────

function ContactSection() {
  const t = useTranslations();
  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--bg-base)]">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[var(--accent-cyan)]" />
            <span className="text-[var(--accent-cyan)] text-sm font-semibold tracking-widest uppercase">
              {t("contact.eyebrow")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {t("contact.heading")}
          </h2>
          <p className="text-white/50 max-w-xl mb-14 leading-relaxed">
            {t("contact.subheading")}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact cards */}
          <div className="space-y-4">
            {[
              {
                icon: Mail,
                label: t("contact.emailLabel"),
                value: BRAND.email,
                href: `mailto:${BRAND.email}`,
              },
              {
                icon: Phone,
                label: t("contact.phoneLabel"),
                value: BRAND.phone,
                href: `tel:${BRAND.phone}`,
              },
              {
                icon: Linkedin,
                label: t("contact.linkedinLabel"),
                value: t("contact.linkedinValue"),
                href: BRAND.linkedin,
              },
              {
                icon: MapPin,
                label: t("contact.locationLabel"),
                value: BRAND.location,
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <Reveal key={label}>
                <div className="rounded-xl border border-white/8 bg-[var(--bg-surface)] p-5 flex items-center gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[var(--accent-cyan)]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-white/40 mb-0.5">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-white/80 font-medium hover:text-[var(--accent-cyan)] transition-colors duration-200 truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-white/80 font-medium">{value}</span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA card */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-[var(--accent-cyan)]/20 bg-gradient-to-br from-[var(--accent-cyan)]/5 to-[var(--accent-purple)]/5 p-8 flex flex-col justify-between h-full shadow-[0_4px_32px_rgba(0,212,255,0.08)]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-cyan)]/10 flex items-center justify-center mb-5">
                  <FileText className="w-6 h-6 text-[var(--accent-cyan)]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t("contact.ctaTitle")}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {t("contact.ctaBody")}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${BRAND.email}?subject=Opportunity for Rao Muhammad Ali – SDET`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-cyan)] text-[var(--bg-base)] font-semibold text-sm hover:bg-[var(--accent-cyan)]/90 transition-all duration-300 shadow-[0_0_20px_var(--accent-cyan)/30]"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  {t("contact.emailCta")}
                </a>
                <a
                  href={BRAND.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/70 font-semibold text-sm hover:border-[var(--accent-cyan)]/40 hover:text-[var(--accent-cyan)] transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                  {t("contact.linkedinCta")}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <AwardsSection />
      <ContactSection />
    </main>
  );
}