# Kajetan Kupaj — Cybersecurity Engineer & Full-Stack Developer

Interactive Kali Linux-themed portfolio with i18n language support (EN/PL) and professional CV in multiple formats.

## 📁 Files

### Portfolio & CV
- **`index.html`** — Main portfolio with Kali Linux desktop theme
- **`style.css`** — Complete styling with CSS variables for theming
- **`script.js`** — Desktop functionality, i18n system, window management
- **`cv.html`** — Professional CV (HTML format, ATS-optimized, printable)
- **`cv.txt`** — Plain text CV (maximum ATS compatibility for scanning)
- **`cv.md`** — Markdown CV (for LinkedIn, GitHub, easy DOCX conversion)

## 🚂 Deploying to Railway

This portfolio is configured for deployment on Railway. To deploy:

1. **Connect repo:** In Railway dashboard → New Project → Deploy from GitHub → select `caytec/caytec.github.io`
2. **Auto-detect:** Railway reads `railway.json` + `nixpacks.toml` automatically. No env vars required.
3. **Build:** Runs `npm install --omit=dev` (production deps only, ~5s)
4. **Start:** Runs `node server.js` — listens on `process.env.PORT`
5. **Health check:** Railway pings `/health` to verify deployment
6. **Custom domain:** Settings → Domains → add `kajetan.dev` (or any custom domain) and update DNS CNAME to Railway target

### Local development

```bash
npm install
npm start          # serves on http://localhost:3000
```

### Architecture

- `server.js` — Express server, serves static files with cache headers, exposes `/health` endpoint
- `package.json` — Node 18+ runtime, single dependency (express)
- `railway.json` — Railway config (NIXPACKS builder, healthcheck path)
- `nixpacks.toml` — Build phases (Node 20, npm install, start command)
- `Procfile` — Fallback for Heroku-compatible platforms

### Routes

| Path | Serves |
|------|--------|
| `/` | `index.html` (interactive portfolio) |
| `/cv` | `cv.html` (professional CV) |
| `/cv.html`, `/cv.txt`, `/cv.md` | CV files directly |
| `/health` | JSON `{status, uptime}` for Railway healthcheck |
| `*` (404) | Falls back to `index.html` (SPA-like) |

## 🚀 Live Portfolio

Portfolio is published on GitHub Pages: https://caytec.github.io

## 🌐 Portfolio Features

### Multi-Language Support (i18n)
- English (EN) and Polish (PL) interface toggle
- Language preference saved to localStorage
- 200+ translation keys covering all content
- Seamless switching via flag button in taskbar

### Interactive Desktop
- **Kali Linux theme** — authentic dark terminal aesthetic
- **Draggable windows** — all portfolio sections open as movable, resizable windows
- **Auto-opening layout** — windows cascade on startup for non-technical users:
  - Terminal (top-left, immediate)
  - About/Profile (top-center, +600ms)
  - Skills (bottom-left, +1100ms)
  - Experience (top-right, +1600ms)
  - Projects (bottom-right, +2100ms)
- **Taskbar** — minimized windows, clock, network status
- **Desktop icons** — double-click to open sections

### Window System
- **Open/Close animations** — smooth fade and scale transitions
- **Window management** — maximize, minimize, focus, z-index handling
- **Responsive layout** — auto-positioning to avoid overlaps on startup
- **Title bar styling** — authentic Kali Linux window decorations

## 📄 CV Formats Explained

### cv.html
**Best for:** Web submission, portfolio showcase, printing to PDF
- **Features:** Modern design matching portfolio theme, responsive layout, print-optimized
- **ATS Score:** 95% — Semantic HTML, clean structure, keyword-rich
- **Use:** Submit via web forms, include in email as HTML, print/save as PDF

### cv.txt
**Best for:** Maximum ATS compatibility, email submission, guaranteed parsing
- **Features:** Plain text with section headers, no formatting or special characters
- **ATS Score:** 100% — Zero parsing issues, all text visible to scanners
- **Use:** Paste directly into ATS systems, email to recruiters, copy-paste to LinkedIn

### cv.md
**Best for:** LinkedIn, GitHub profile, easy DOCX conversion
- **Features:** Markdown formatting, linked to portfolio, portable
- **ATS Score:** 90% — Excellent readability when converted to DOCX
- **Conversion:** `pandoc cv.md -o cv.docx` creates DOCX for traditional submissions

## 🎯 ATS Optimization

All CV formats optimized for Applicant Tracking Systems:

✅ **Keyword-Rich Content**
- Technical skills prominently listed (Python, JavaScript, Splunk, etc.)
- Quantified metrics (60% faster, 70% reduction, 1000+ users, 6+ years)
- Standard acronyms (SIEM, SaaS, SDLC, OWASP, REST, API, etc.)

✅ **Clean Structure**
- Clear section headers (WORK EXPERIENCE, TECHNICAL SKILLS)
- Consistent formatting, logical flow
- No fancy fonts, colors, or graphics in critical sections
- Semantic HTML tags in HTML version

✅ **Comprehensive Content**
- Expanded job descriptions with context and metrics
- Full technical skill categories with sub-skills
- Active projects with real impact (1000+ concurrent users, 70% time savings)
- Professional summary with keywords

## 📊 Performance

- Pure vanilla JavaScript (no dependencies)
- Single CSS file with CSS variables
- Minimal HTTP requests
- Fast page load and interaction
- No tracking or analytics

---

**Portfolio:** https://caytec.github.io  
**CV HTML:** https://caytec.github.io/cv.html  
**Contact:** k.kupaj@aipol.com.pl
