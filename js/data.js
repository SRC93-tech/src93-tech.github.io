/**
 * Developer Profile & Portfolio Data Configuration
 * Update your information, projects, and skills here anytime.
 */
const profileData = {
  personal: {
    name: "SRC93",
    brand: "SRC93 Tech",
    role: "Full-Stack Flutter & Cloud Solutions Engineer",
    badge: "Available for High-Impact Projects",
    location: "Remote / Worldwide",
    email: "src93.appsupport@gmail.com",
    githubUrl: "https://github.com/SRC93-tech",
    websiteUrl: "https://stockgrid.co.in",
    bioShort: "Building production Android apps with Flutter and Supabase - secure multi-tenant backends, server-side reporting and disciplined shipping.",
    bioFull: "Software engineer building StockGrid, a live Android app for garment businesses: Flutter/Dart on the phone, Supabase (PostgreSQL with Row-Level Security, Edge Functions) behind it, and a CI pipeline that gates every change."
  },

  pillars: [
    {
      icon: "zap",
      title: "Fast at Real Scale",
      description: "Heavy reports are computed inside PostgreSQL instead of on the phone - the largest live firm's stock insights come back in about 0.2 seconds. Load-tested to 30,000 stock entries."
    },
    {
      icon: "shield-check",
      title: "Defensive Security & RLS",
      description: "Every table is firm-isolated with PostgreSQL Row-Level Security. Privileged actions go through firm-scoped database functions, a Master PIN and a per-device registry."
    },
    {
      icon: "layers",
      title: "Clean, Tested Architecture",
      description: "Screen, Controller and Repository layers with sealed screen states, covered by 160+ test files - unit, widget, golden-image and live-database integration tests."
    },
    {
      icon: "cloud",
      title: "Disciplined Shipping",
      description: "Every change passes CI: analysis, tests, golden images, an APK size budget and a secrets scan. Database changes go test-first through a verified workflow, with daily test-vs-production parity checks."
    }
  ],

  projects: [
    {
      id: "stockgrid",
      title: "StockGrid",
      subtitle: "Inventory, Catalog & Stock Ledger for Garment Businesses - Live on Google Play",
      category: "mobile",
      featured: true,
      image: "assets/images/stockgrid_preview.jpg",
      tags: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Row-Level Security", "Edge Functions", "GitHub Actions", "Google Play Billing"],
      overview: "An Android app that garment manufacturers, wholesalers and retailers use to run their photo catalog, size-and-colour stock and stock ledger across the owner's and staff phones. Multi-tenant on Supabase, with each firm's data isolated by PostgreSQL Row-Level Security.",
      keyAchievements: [
        "Multi-firm isolation with PostgreSQL Row-Level Security on every table; privileged operations run through firm-scoped security-definer functions.",
        "Two-tier access: employee accounts with PINs and a device registry, plus a Master PIN that guards owner-only actions and financial figures.",
        "Moved heavy reports (sales performance, staff activity, stock insights) into PostgreSQL functions, so phones download a few hundred result rows instead of a year of history.",
        "Client-side AES-256-GCM encrypted Google Drive backup, streamed in chunks and tested at 30,000 stock entries.",
        "Self-service firm deletion with a 7-day cooling-off period and a scheduled server-side purge.",
        "Release discipline: CI gates on every change, nightly integration tests against an isolated test database, and test-first database changes through a verified GitHub Actions workflow.",
        "Subscriptions through Google Play Billing with server-side purchase verification and real-time developer notifications."
      ],
      liveUrl: "https://stockgrid.co.in",
      playUrl: "https://play.google.com/store/apps/details?id=com.stockgrid.android"
    }
  ],

  skills: {
    "Client & Mobile Technologies": [
      { name: "Flutter & Dart", level: "Expert", pct: 95 },
      { name: "Material Design 3 (M3)", level: "Advanced", pct: 90 },
      { name: "Windows Desktop (C++ ATL)", level: "Proficient", pct: 85 },
      { name: "Android SDK / Native", level: "Advanced", pct: 88 },
      { name: "Modern Web / CSS3 / ES6+", level: "Advanced", pct: 90 }
    ],
    "Cloud, Backend & Database": [
      { name: "Supabase Platform", level: "Expert", pct: 95 },
      { name: "PostgreSQL & Row-Level Security", level: "Expert", pct: 92 },
      { name: "Google Drive & Cloud APIs", level: "Advanced", pct: 90 },
      { name: "RESTful Architecture & Webhooks", level: "Expert", pct: 94 },
      { name: "Authentication & Cryptography", level: "Advanced", pct: 88 }
    ],
    "Architecture & Methodologies": [
      { name: "Clean Layered Architecture", level: "Expert", pct: 96 },
      { name: "State Management & Reactivity", level: "Expert", pct: 95 },
      { name: "Performance Profiling (60 FPS)", level: "Expert", pct: 92 },
      { name: "Git Worktrees & Branch Workflows", level: "Advanced", pct: 92 },
      { name: "Automated Testing & CI/CD", level: "Advanced", pct: 86 }
    ]
  },

  journey: [
    {
      year: "2026",
      title: "StockGrid Launched on Google Play",
      role: "Founder & Lead Engineer",
      description: "Published StockGrid on Google Play with subscriptions and a free trial. Moved heavy reports to the server, added self-service firm deletion, and put database changes behind a test-first, verified GitHub Actions workflow."
    },
    {
      year: "2026",
      title: "StockGrid 2.0 M3 Overhaul & Defensive Backup Engine",
      role: "Lead Architect",
      description: "Spearheaded the complete Material 3 tonal elevation overhaul, implemented Google Drive encrypted fallback backups, and tightened multi-firm RLS security across production."
    },
    {
      year: "2025",
      title: "Shop-Floor Inventory Intelligence & Barcode Engine",
      role: "Solutions Engineer",
      description: "Designed sub-10ms camera scanner workflows, dynamic sizing matrix calculations, and real-time offline sync for high-volume textile wholesalers."
    },
    {
      year: "2024",
      title: "Multi-Tenant Enterprise Architecture on Supabase",
      role: "Full-Stack Developer",
      description: "Engineered scalable cloud data layers utilizing PostgreSQL triggers, RLS policies, and Edge Functions to guarantee tenant data privacy."
    },
    {
      year: "2023",
      title: "Cross-Platform Mobile & Desktop Systems",
      role: "Flutter Developer",
      description: "Developed desktop and mobile utilities with native platform channels, hardware printer integrations, and responsive user experiences."
    }
  ]
};

// Export to window for vanilla JS access
window.profileData = profileData;
