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
    contactMethod: "Contact Form / GitHub",
    githubUrl: "https://github.com/SRC93-tech",
    linkedinUrl: "https://linkedin.com",
    whatsappUrl: "https://wa.me/",
    bioShort: "Architecting high-performance cross-platform apps, resilient cloud backends, and defensive enterprise systems.",
    bioFull: "Software engineer specialized in crafting pixel-perfect, 60 FPS cross-platform applications (Flutter/Dart) backed by resilient cloud infrastructure (Supabase, PostgreSQL Row-Level Security). Proven track record of building production systems with offline resilience, client-side encryption, and rock-solid architecture.",
    stats: [
      { label: "Supported Platforms", value: "4+", sub: "Windows, Android, iOS, Web" },
      { label: "Target Frame Rate", value: "60 FPS", sub: "RepaintBoundary optimized" },
      { label: "Security Standard", value: "100%", sub: "Row-Level Security & Encrypted" },
      { label: "Code Integrity", value: "A+", sub: "Defensive CI & Type-Safe" }
    ]
  },

  pillars: [
    {
      icon: "zap",
      title: "60 FPS Native Performance",
      description: "Obsessed with frame times, memoized mathematical derivations, downsampled image caching, and strict RepaintBoundary containment."
    },
    {
      icon: "shield-check",
      title: "Defensive Security & RLS",
      description: "Zero trust at the database layer. Multi-firm tenant isolation using PostgreSQL Row-Level Security, master-PIN gates, and AES-256 encryption."
    },
    {
      icon: "layers",
      title: "Scalable Clean Architecture",
      description: "Strict decoupling of UI, Controllers, Repositories, and Data layers to ensure testability, easy maintenance, and painless future refactoring."
    },
    {
      icon: "cloud",
      title: "Cloud & Offline Resilience",
      description: "Robust cloud synchronizations (Google Drive OAuth2, Supabase) designed with intelligent retry loops and file name fallback heuristics."
    }
  ],

  projects: [
    {
      id: "stockgrid",
      title: "StockGrid Enterprise Suite",
      subtitle: "Multi-Firm Garment Inventory, Catalog & ERP Platform",
      category: "mobile-desktop",
      featured: true,
      image: "assets/images/stockgrid_preview.jpg",
      tags: ["Flutter", "Dart", "Supabase", "PostgreSQL", "RLS", "Material 3", "Windows C++"],
      overview: "A mission-critical catalog, inventory, and stock management system built for garment manufacturers, wholesalers, and retailers. Engineered with multi-firm tenant isolation, per-employee PIN security, and live stock flow analytics.",
      keyAchievements: [
        "Architected multi-firm isolation using PostgreSQL Row-Level Security (RLS), preventing cross-tenant data leaks.",
        "Implemented two-tier security: device-level employee PINs combined with a Master-PIN gate for administrative operations.",
        "Engineered live dual-bar stock flow trend charts (fl_chart) wrapped in RepaintBoundaries for butter-smooth 60 FPS performance.",
        "Built cross-platform support with native Windows desktop build tools (C++ ATL) alongside Android and iOS distributions."
      ],
      githubUrl: "https://github.com/SRC93-tech/StockGrid",
      liveUrl: "https://github.com/SRC93-tech/StockGrid"
    },
    {
      id: "cloud-sync",
      title: "Encrypted Cloud Sync & Drive Vault",
      subtitle: "Defensive Google Drive Backup Engine with AES-256",
      category: "cloud-backend",
      featured: true,
      image: "assets/images/cloud_sync_preview.jpg",
      tags: ["Google Drive API", "OAuth 2.0", "AES-256 GCM", "SHA-256", "Dart", "Encryption"],
      overview: "Automated snapshotting and cloud sync service that securely syncs enterprise databases to Google Drive. Implements client-side AES-256-GCM encryption, integrity check hashing, and self-healing restore heuristics.",
      keyAchievements: [
        "Devised resilient fallback mechanism: restores automatically search Drive filenames if local cache ID is lost or stale.",
        "Zero-knowledge architecture: data is encrypted client-side before touching Google Drive or remote storage.",
        "Deterministic SHA-256 checksum validation to prevent restoring corrupted or partial snapshots.",
        "Full emergency backup codes generator and master-PIN recovery protocols."
      ],
      githubUrl: "https://github.com/SRC93-tech",
      liveUrl: "https://github.com/SRC93-tech"
    },
    {
      id: "invenscan",
      title: "InvenScan & Catalog Intelligence",
      subtitle: "High-Speed Barcode Scanner & Dynamic Sizing Matrix",
      category: "mobile-desktop",
      featured: true,
      image: "assets/images/barcode_scanner_preview.jpg",
      tags: ["Flutter", "CameraX", "ML Kit", "PDF Engine", "WhatsApp Integration"],
      overview: "High-throughput shop floor camera scanning system and catalog health auditor. Allows warehouse operators to instantly scan garment tags, update size-mix distributions, and generate ready-to-share PDF catalogs.",
      keyAchievements: [
        "Sub-10ms barcode recognition pipeline with haptic feedback for rapid stock checks.",
        "Catalog health scoring engine that identifies unpriced items, missing photos, and unassigned categories.",
        "Custom PDF generation engine for generating branded wholesale product catalogs on the fly.",
        "Direct WhatsApp integration for immediate dispatch confirmations and order receipts."
      ],
      githubUrl: "https://github.com/SRC93-tech",
      liveUrl: "https://github.com/SRC93-tech"
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
