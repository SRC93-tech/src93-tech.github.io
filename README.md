# Personal Developer Portfolio - SRC93 (SRC93 Tech)

A modern, high-performance, dark-first personal developer profile and portfolio website showcasing cross-platform mobile & desktop systems (Flutter/Dart), resilient cloud backends (Supabase, PostgreSQL RLS), and defensive engineering.

## 🚀 Instant Local Preview

Run the built-in lightweight local server:
```bash
python portfolio/scripts/serve.py
```
Then open your browser to [http://localhost:8085/index.html](http://localhost:8085/index.html).

Or simply double-click `portfolio/index.html` in your file explorer.

---

## 🛠️ Tech Highlights

- **Aesthetics**: Glassmorphism (`backdrop-filter: blur()`), ambient glowing meshes, micro-animations, and CSS Custom Properties.
- **Theme Engine**: Built-in Dark & Light mode switcher with automatic OS preference detection and zero-FOUC (Flash of Unstyled Content) inline prevention.
- **Zero Heavy Dependencies**: Pure semantic HTML5, Vanilla CSS3, and ES6+ JavaScript. Fast load times and 100/100 Lighthouse performance.
- **Interactive Features**:
  - Filter projects dynamically by category (Mobile/Desktop, Cloud/Defensive Vaults, All).
  - Deep-dive architecture modal with key technical milestones.
  - 1-Click "Copy Email" with instant clipboard visual feedback.
  - Real-time contact form validation.
  - Responsive navigation with mobile slide-down drawer.

---

## ✏️ How to Customize

All profile information, project lists, and skills are separated into [`portfolio/js/data.js`](js/data.js):

- **Personal Details**: Update `profileData.personal` (name, bio, contact links, metrics).
- **Projects**: Add or edit items in `profileData.projects` (add screenshots into `assets/images/`).
- **Skills**: Adjust skills and percentages in `profileData.skills`.
- **Career Journey**: Add milestones in `profileData.journey`.

---

## 🌐 Free 1-Click Deployment Options

### 1. GitHub Pages
1. Push the repo to GitHub.
2. In your repository settings, navigate to **Pages**.
3. Under **Branch**, select `main` and set folder to `/portfolio` (or use a GitHub Action to deploy `/portfolio`).

### 2. Vercel
1. Run `npx vercel` inside the `portfolio/` directory.
2. Follow prompts for instant HTTPS global deployment.

### 3. Netlify
Drag and drop the `portfolio/` folder into [Netlify Drop](https://app.netlify.com/drop) for instant hosting.
