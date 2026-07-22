# AGENTS.md

Project conventions for AI agents and humans editing this codebase.

## Original request
Build a modern portfolio website with dark mode for SQA

Additional details provided by the user:
- What is your full name?: Rao Muhammad Ali
- What is your SQA job title or role?: SDET (Software Development Engineer in Test)

Document provided for "Upload your resume or CV (optional)":
Rao Muhammad Ali
Software Quality Assurance Engineer
DaticsAI, Lahore, Pakistan | (+92) 300-7228384 | raomali005@gmail.com | LinkedIn

Software  Quality  Assurance  Engineer,  applying  modern  testing  techniques  with  a  clear
understanding  of  the  software  development  lifecycle.  Experienced  in  functional,  regression,
usability,  compatibility,  and  exploratory  testing,  using  tools  like  Postman  and  JMeter  to  validate
performance and quality. Takes a hands-on approach to testing, aiming to spot issues early and help
deliver smooth, reliable releases.

Professional Experience

Software Quality Assurance Engineer                                                                        DaticsAI | Oct 2025 – Present

•  Performed API testing to validate request/response behavior, data integrity, and error handling.
•  Conducted extensive testing on Desktop applications across macOS, Linux, and Windows, ensuring

platform compatibility and stability.

•  Executed manual testing for Web and Mobile applications, covering functional, UI, and usability

•

scenarios.
Implemented test automation using Playwright, focusing on critical user flows, regression coverage and
UI validation.

•  Actively contributed to the project as a core QA contributor, collaborating with developers and product

stakeholders throughout the development lifecycle.

➢  Recent Project Engagements and Responsibilities

Website: https://veridat-demo.daticsai.com/

✓  Performed end-to-end testing of a data marketplace platform including Web, Desktop, and Admin Panel

modules.

✓  Tested complex dataset workflows such as large file uploads, folder handling, cloud imports (Google

Drive, OneDrive), and download integrity.

✓  Validated malware scanning, encryption/decryption flows, and error handling during dataset

processing.

✓  Tested Stripe payment and KYC flows for buyers and sellers, including onboarding, verification status

updates, and admin-side validation.

✓  Verified authentication and security flows, including OTP verification, session handling, and role-based

access control.

✓  Tested real-time chat functionality between buyers and sellers, ensuring correct message ordering and

persistence.

✓  Reviewed transactional emails, branding elements, and notification workflows for accuracy and

consistency.

✓  Reported and tracked issues in ClickUp, providing clear reproduction steps, expected vs actual results,

and validation after fixes.

Software Quality Assurance Engineer Intern

Tech hero | Nov 2024 - June 2025

•  Conducted manual testing of web/mobile applications.
•  Practiced API testing using Postman on dummy endpoints.
•  Wrote test cases and bug reports.
•  Assisted in QA tasks for mock or academic projects.

Front-end Developer intern

Tech hero | June 2024 - Dec 2024
•  Designed and developed responsive and user-friendly websites using HTML, CSS, JavaScript, and jQuery.
•  Collaborated with clients to understand project requirements and deliver customized front-end

solutions.

Education

COMSATS University of Islamabad

Bachelor of Science in Software Engineering

Feb 2021 - Mar 2025

Awards

Junior Vice President – Skill Development Society, CUI
Awarded for successfully organizing the E-commerce & Financial Literacy Session held on October 25, 2023, in
collaboration with Subtle Commerce. Recognized for leadership, coordination, and event management skills in
promoting entrepreneurship and digital financial awareness among students.

Joint Secretary - CUI Sports Society

Recognized for outstanding contributions as Joint Secretary of the Sports Society. Played a key role in planning,
organizing, and managing university-level sports events, coordinating with teams, and ensuring smooth
execution of activities that promoted physical wellness and student engagement on campus.

Core Skills & Tools

Manual Software Testing, Functional Testing, Regression Testing, API Testing with Postman, Performance Testing
using JMeter, Playwright, Exploratory Testing, Usability Testing, Compatibility Testing, Test Case & Bug Report
Creation (Jira), SDLC, Agile/Scrum, Git Version Control, HTML, CSS, JavaScript, MySQL, MongoDB

Certifications

English Works Program – U.S. Embassy, Pakistan

• 6-Month English Language & Professional Skills Course

## Goal
Build a modern dark-mode single-page portfolio for Rao Muhammad Ali (SDET) with sticky navbar, animated hero, skills, experience timeline, projects, education, certifications, awards, and contact sections.

## Project type
portfolio

## Design system — match this exactly
- Color tokens: `--background: #0f0f0f`, `--primary: #00d4ff`, `--accent: #7b2ff7`, `--foreground: #ffffff`, `--muted: #8892a4`, `--border: #1e2a45`, `--brand-primary: #00d4ff`, `--brand-accent: #7b2ff7`

## Existing components — reuse these, don't create near-duplicates
- Footer (components/Footer.tsx)
- LanguageToggle (components/LanguageToggle.tsx)
- LocaleProvider (components/LocaleProvider.tsx)
- Navbar (components/Navbar.tsx)

## Existing i18n namespaces
Every translation key must be namespaced (`hero.title`, never a bare `title`) so two components never collide on the same catalog slot. Reuse one of these, or pick a new, distinct name:
`about`, `awards`, `certifications`, `contact`, `education`, `experience`, `footer`, `hero`, `nav`, `projects`, `skills`

When editing or adding pages: preserve the design system above, reuse existing components and the shared nav data file, and keep the established structure and tone.
