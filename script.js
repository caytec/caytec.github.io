/* ═══════════════════════════════════════════
   KALI LINUX PORTFOLIO — script.js
   ═══════════════════════════════════════════ */

// ─── i18n Language System ─────────────────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    'lang-toggle-btn': '🇵🇱',
    'menu-kali': 'Kali Linux',
    'menu-apps': 'Applications',
    'menu-terminal': 'Terminal',
    'menu-about': 'whoami',
    'menu-skills': 'skill-tree',
    'menu-career': '/var/log/career',
    'menu-projects': 'projects',
    'menu-services': 'services --list',
    'menu-mail': 'Thunderbird Mail',
    'menu-contact': 'netcat -contact',
    'menu-reboot': 'Reboot',
    'taskbar-eth0': 'eth0: connected',
    'desktop-whoami': 'whoami',
    'desktop-skills': 'skill-tree',
    'desktop-projects': 'projects',
    'desktop-services': 'services',
    'desktop-mail': 'Mail',
    'desktop-contact': 'contact',
    'win-about': 'whoami — User Profile',
    'about-name': 'NAME',
    'about-role': 'ROLE',
    'about-loc': 'LOC',
    'about-shell': 'SHELL',
    'about-os': 'OS',
    'about-company': 'COMPANY',
    'about-whoami-title': 'whoami',
    'about-p1': 'Cybersecurity specialist and fullstack developer with 6+ years of experience spanning CERT operations, malware analysis, application security, and enterprise software development.',
    'about-p2': 'I started my journey at ComCERT SA where I handled Tier 1/2 incident response, reverse-engineered malware families like DanaBot and TrickBot, and automated deepweb threat intelligence gathering.',
    'about-p3': 'Today I help build aipol.com.pl as lead tech person — delivering custom software, AI automation, and security services — while building hackersim.io after hours and working on skanujzdrowie.pl with Novazym laboratory.',
    'about-philosophy': 'philosophy',
    'phil-1': 'Security through deep understanding, not checkbox compliance',
    'phil-2': 'Build tools that automate the boring parts of threat hunting',
    'phil-3': 'Teach what you know — knowledge shared is knowledge multiplied',
    'phil-4': 'Long-term commitment over short-term gains',
    'win-skills': 'skill-tree — Capability Matrix',
    'skills-security': 'IT Security',
    'skills-dev': 'Development',
    'skills-ai': 'AI & Automation',
    'skills-offensive': 'Offensive Security',
    'skills-defensive': 'Defensive Security',
    'skills-tools': 'Tools & Platforms',
    'skills-languages': 'Languages',
    'skills-frameworks': 'Frontend & Backend',
    'skills-other': 'Tech Stack',
    'skills-ai-models': 'AI & LLM',
    'skills-automation': 'Automation & Tools',
    'win-exp': 'cat /var/log/career.log — Work Experience',
    'exp-role-founder': 'Founder & Technical Lead',
    'exp-co-aipol': 'aipol.com.pl · Warsaw (Co-building)',
    'exp-aipol-1': 'Co-building IT services company as lead technical person — custom software, AI automation, security audits',
    'exp-aipol-2': 'Co-developing skanujzdrowie.pl — medical testing platform with Novazym laboratory',
    'exp-aipol-3': 'Building hackersim.io — hacking simulation learning platform (after-hours)',
    'exp-aipol-4': 'Designing & deploying custom AI agents and LLM-based automation for clients',
    'exp-role-fullstack': 'Fullstack Developer & Splunk Specialist',
    'exp-co-citi': 'Citibank · Warsaw (Global Security Operations)',
    'exp-citi-1': 'Built Splunk dashboards from global storage infrastructure data',
    'exp-citi-2': 'Developed search engine for storage servers (Python/Flask/SQL)',
    'exp-citi-3': 'Rewrote legacy Java app into modern Python fullstack application',
    'exp-role-admin': 'IT Administrator',
    'exp-co-heritage': 'Heritage Real Estate · Warsaw',
    'exp-her-1': 'Managed IT infrastructure for 300+ end users',
    'exp-her-2': 'Built custom ticketing and helpdesk system from scratch',
    'exp-role-appseC': 'Application Security Consultant',
    'exp-co-gsk': 'GSK · Remote (Global)',
    'exp-gsk-1': 'Sole administrator of SDElements across corporation',
    'exp-gsk-2': 'Provided security guidelines and training for dev teams',
    'exp-role-analyst': 'Security Analyst',
    'exp-co-aviva': 'Aviva · Warsaw (GSOC)',
    'exp-avi-1': 'Daily threat analysis for Global Security Operations Center',
    'exp-avi-2': 'Built automated phishing analysis tool',
    'exp-role-eng': 'IT Security Engineer (Mid)',
    'exp-co-comtegra': 'Comtegra · Warsaw',
    'exp-com-1': 'Implemented Symantec DLP and SEP products',
    'exp-com-2': 'First to detect failed campaign — provided full C2C analysis',
    'exp-role-junior': 'Junior IT Security Specialist',
    'exp-co-comcert': 'ComCERT SA · Warsaw',
    'exp-cert-1': 'Handled Tier 1/2 incident response',
    'exp-cert-2': 'Reverse-engineered malware (DanaBot, TrickBot)',
    'exp-cert-3': 'Automated deepweb threat intelligence scanning',
    'win-projects': 'ls ~/projects — Active Projects',
    'hs-tagline': 'Learn cybersecurity by doing it — not reading about it.',
    'badge-passion': 'Passion Project',
    'badge-active': 'Active Development',
    'badge-hours': 'After-Hours',
    'hs-desc1': 'Browser-based hacking simulation platform. Complete with Linux virtual machines, realistic exploits, and procedural web challenges. Learn pentesting by hacking — live targets, real vulnerabilities, immediate feedback. Used by educational institutions.',
    'aipol-tagline': 'Polish IT company — AI, Security, Custom Software',
    'aipol-badge': 'Co-building as Lead Tech',
    'aipol-desc': 'Custom software development + security services + AI automation. Multi-tenant SaaS platforms, e-commerce integrations, infrastructure audits, LLM agent deployment. Building the future of Polish IT together.',
    'sz-tagline': 'Online cancer tests — partnership with Novazym laboratory',
    'sz-badge-building': 'Building',
    'sz-desc1': 'E-commerce platform for cancer screening tests sold online. Integration with Novazym laboratory. Order management, test kit shipment, result delivery, patient portal with automated communication.',
    'hm-sub': 'Browser MMO · Harsh Medieval World',
    'hm-badge-prod': 'In Production',
    'hm-title': 'Harsh Medieval World',
    'hm-desc': 'Persistent browser MMO set in harsh medieval world. Player-driven economy, settlements, card-based combat, material quality cascade. Played by 1000+ simultaneous players on Fly.io infrastructure. Built solo using vanilla JS + Canvas API, with WebSocket backend.',
    'hm-card': 'Card Combat',
    'hm-card-desc': 'Tactics matter. Every encounter with wolf, bear, or player requires strategy, hand management, and reading your opponent.',
    'hm-quality': 'Material Quality',
    'hm-quality-desc': 'Three axes: Substrate, Essence, Vitality cascade through crafting — wood quality affects tool quality, which affects final product value.',
    'hm-settlements': 'Settlements & Alliances',
    'hm-settle-desc': 'Villages with rank hierarchies. Alliances, shared projects, competition for resources shape emergent player-driven politics.',
    'hm-faith': 'Altars & Oaths',
    'hm-faith-desc': 'Sacrifice at ancestor altars and swear oaths for bonuses at cost of constraints. Every choice has real price.',
    'win-services': 'systemctl list-units --services',
    'svc-subtitle': 'Active services · aipol.com.pl · Kajetan Kupaj',
    'svc-audit': 'Security Audit',
    'svc-audit-desc': 'Comprehensive security assessment of web apps, infrastructure, and code. Penetration testing, vulnerability analysis, detailed report with recommendations.',
    'svc-www': 'Web Portals',
    'svc-www-desc': 'Modern, fast, responsive websites. From landing pages to complex portals — optimized for SEO and security.',
    'svc-shop': 'E-Commerce Store',
    'svc-shop-desc': 'Custom-built online stores — payment integrations (Stripe, Przelewy24), admin panel, secure checkout.',
    'svc-saas': 'SaaS Platforms',
    'svc-saas-desc': 'Build products from scratch — multi-tenant architecture, subscriptions, dashboards, APIs, hosting.',
    'svc-apps': 'Custom Apps',
    'svc-apps-desc': 'Full-stack applications built to spec — web, desktop, or hybrid. Python, JavaScript, Java — any tech stack.',
    'svc-ai-auto': 'AI Automation',
    'svc-ai-auto-desc': 'Automate business processes using AI agents — LLM integrations, data pipelines, bots, report generation, workflow without human touch.',
    'svc-ai-agent': 'Custom AI Agent',
    'svc-ai-agent-desc': 'Design and deploy your own AI agent — model selection, configuration, training, hosting, monitoring. Chat with customers, analyze data, manage tasks.',
    'svc-consult': 'Consulting',
    'svc-consult-desc': 'Technical advice — architecture review, code audit, cloud migration, CI/CD setup, optimization, troubleshooting.',
    'cta-title': 'Every project is different',
    'cta-sub': 'Write to me for a custom quote — we\'ll find the best solution together.',
    'cta-btn': '✉️ Write',
    'mail-title': '✉️ Thunderbird — New Message',
    'mail-send': 'Send',
    'mail-clear': '🗑 Clear',
    'mail-compose': 'Compose New Message',
    'mail-from': 'From:',
    'mail-to': 'To:',
    'mail-reply': 'Reply-To:',
    'mail-subject': 'Subject:',
    'mail-name': 'Name:',
    'mail-status': 'Ready · Powered by EmailJS · → k.kupaj@aipol.com.pl',
    'win-contact': 'netcat -contact — Get In Touch',
    'ct-nmap-done': 'Nmap done: 1 IP address (1 host up)',
    'ct-note': '📱 If I don\'t pick up, leave an SMS mentioning recruitment or project. Open to long-term work and collaborations.',
  },
  pl: {
    'lang-toggle-btn': '🇬🇧',
    'menu-kali': 'Kali Linux',
    'menu-apps': 'Aplikacje',
    'menu-terminal': 'Terminal',
    'menu-about': 'whoami',
    'menu-skills': 'skill-tree',
    'menu-career': '/var/log/kariera',
    'menu-projects': 'projekty',
    'menu-services': 'usługi --list',
    'menu-mail': 'Thunderbird Mail',
    'menu-contact': 'netcat -kontakt',
    'menu-reboot': 'Restart',
    'taskbar-eth0': 'eth0: połączony',
    'desktop-whoami': 'whoami',
    'desktop-skills': 'skill-tree',
    'desktop-projects': 'projekty',
    'desktop-services': 'usługi',
    'desktop-mail': 'Mail',
    'desktop-contact': 'kontakt',
    'win-about': 'whoami — Profil użytkownika',
    'about-name': 'IMIĘ',
    'about-role': 'ROLA',
    'about-loc': 'LOC',
    'about-shell': 'SHELL',
    'about-os': 'OS',
    'about-company': 'FIRMA',
    'about-whoami-title': 'whoami',
    'about-p1': 'Specjalista ds. cyberbezpieczeństwa i programista full-stack z 6+ latami doświadczenia w operacjach CERT, analizie malware\'u, bezpieczeństwie aplikacji oraz tworzeniu oprogramowania dla dużych przedsiębiorstw.',
    'about-p2': 'Swoją przygodę zacząłem w ComCERT SA, gdzie zajmowałem się reagowaniem na incydenty poziomu 1/2, inżynierią wsteczną rodzin malware\'u takich jak DanaBot i TrickBot, oraz automatyzacją skanowania zagrożeń w darkwebie.',
    'about-p3': 'Dziś współ-buduję aipol.com.pl jako lead techniczny — dostarczając oprogramowanie na zamówienie, automatyzację AI i usługi bezpieczeństwa — jednocześnie budując hackersim.io w wolnym czasie i pracując nad skanujzdrowie.pl w partnerstwie z laboratorium Novazym.',
    'about-philosophy': 'filozofia',
    'phil-1': 'Bezpieczeństwo poprzez głębokie zrozumienie, nie powierzchowne compliance',
    'phil-2': 'Buduj narzędzia, które automatyzują nudne części threat huntingu',
    'phil-3': 'Dziel się wiedzą — wiedza udostępniona jest wiedzą pomnożoną',
    'phil-4': 'Zaangażowanie długoterminowe ponad zyski krótkoterminowe',
    'win-skills': 'skill-tree — Macierz umiejętności',
    'skills-security': 'Cyberbezpieczeństwo',
    'skills-dev': 'Programowanie',
    'skills-ai': 'AI & Automatyzacja',
    'skills-offensive': 'Bezpieczeństwo ofensywne',
    'skills-defensive': 'Bezpieczeństwo defensywne',
    'skills-tools': 'Narzędzia i platformy',
    'skills-languages': 'Języki',
    'skills-frameworks': 'Frontend & Backend',
    'skills-other': 'Tech Stack',
    'skills-ai-models': 'AI & LLM',
    'skills-automation': 'Automatyzacja & Narzędzia',
    'win-exp': 'cat /var/log/kariera.log — Historia zatrudnienia',
    'exp-role-founder': 'Założyciel & Lead techniczny',
    'exp-co-aipol': 'aipol.com.pl · Warszawa (Współ-budowanie)',
    'exp-aipol-1': 'Współ-budowanie firmy IT jako osoba odpowiadająca za technologię — oprogramowanie na zamówienie, automatyzacja AI, audyty bezpieczeństwa',
    'exp-aipol-2': 'Współ-tworzenie skanujzdrowie.pl — platformy testów medycznych w partnerstwie z laboratorium Novazym',
    'exp-aipol-3': 'Budowanie hackersim.io — platformy do nauki hakowania poprzez praktykę (w wolnym czasie)',
    'exp-aipol-4': 'Projektowanie i wdrażanie niestandardowych agentów AI oraz automatyzacji opartej na LLM dla klientów',
    'exp-role-fullstack': 'Programista Full-stack & Splunk Specialist',
    'exp-co-citi': 'Citibank · Warszawa (Globalne Operacje Bezpieczeństwa)',
    'exp-citi-1': 'Budowanie dashboardów Splunk z danych globalnej infrastruktury storage',
    'exp-citi-2': 'Opracowanie silnika wyszukiwania serwerów storage (Python/Flask/SQL)',
    'exp-citi-3': 'Przepisanie starej aplikacji Java do nowoczesnej aplikacji Python full-stack',
    'exp-role-admin': 'Administrator IT',
    'exp-co-heritage': 'Heritage Real Estate · Warszawa',
    'exp-her-1': 'Zarządzanie infrastrukturą IT dla 300+ użytkowników',
    'exp-her-2': 'Budowanie systemu ticketingowego i helpdesku od podstaw',
    'exp-role-appseC': 'Konsultant ds. bezpieczeństwa aplikacji',
    'exp-co-gsk': 'GSK · Praca zdalna (Globalnie)',
    'exp-gsk-1': 'Jedynym administratorem SDElements w całej korporacji',
    'exp-gsk-2': 'Dostarczanie wytycznych bezpieczeństwa i szkolenia dla zespołów developerskich',
    'exp-role-analyst': 'Analityk bezpieczeństwa',
    'exp-co-aviva': 'Aviva · Warszawa (GSOC)',
    'exp-avi-1': 'Codzienna analiza zagrożeń dla Globalnego Centrum Operacji Bezpieczeństwa',
    'exp-avi-2': 'Budowanie zautomatyzowanego narzędzia do analizy phishingu',
    'exp-role-eng': 'Inżynier Bezpieczeństwa IT (Mid)',
    'exp-co-comtegra': 'Comtegra · Warszawa',
    'exp-com-1': 'Wdrażanie produktów Symantec DLP i SEP',
    'exp-com-2': 'Pierwszy który wykrył nieudaną kampanię — dostarczył pełną analizę C2C',
    'exp-role-junior': 'Młodszy Specjalista ds. Bezpieczeństwa IT',
    'exp-co-comcert': 'ComCERT SA · Warszawa',
    'exp-cert-1': 'Obsługa reagowania na incydenty poziomów 1/2',
    'exp-cert-2': 'Inżynieria wsteczna malware\'u (DanaBot, TrickBot)',
    'exp-cert-3': 'Automatyzacja skanowania zagrożeń w darkwebie',
    'win-projects': 'ls ~/projekty — Aktywne Projekty',
    'hs-tagline': 'Ucz się cyberbezpieczeństwa poprzez jego praktykę — nie czytając o nim.',
    'badge-passion': 'Projekt pasji',
    'badge-active': 'Aktywny rozwój',
    'badge-hours': 'W wolnym czasie',
    'hs-desc1': 'Przeglądarowa platforma symulacji hakowania. Kompletna z wirtualnymi maszynami Linux, realistycznymi exploitami i proceduralnym testowaniem web. Ucz się pentestingu poprzez hakowanie — żywe cele, prawdziwe podatności, natychmiastowa informacja zwrotna. Używane przez instytucje edukacyjne.',
    'aipol-tagline': 'Polska firma IT — AI, Bezpieczeństwo, Oprogramowanie niestandardowe',
    'aipol-badge': 'Współ-budowanie jako Lead tech',
    'aipol-desc': 'Oprogramowanie na zamówienie + usługi bezpieczeństwa + automatyzacja AI. Wieloklienckie platformy SaaS, integracje e-commerce, audyty infrastruktury, wdrożenia agentów LLM. Budujemy razem przyszłość polskiego IT.',
    'sz-tagline': 'Testy na raka online — partnerstwo z laboratorium Novazym',
    'sz-badge-building': 'W budowie',
    'sz-desc1': 'Platforma e-commerce dla testów screeningu nowotworu sprzedawanych online. Integracja z laboratorium Novazym. Zarządzanie zamówieniami, wysyłka zestawów testów, dostarczanie wyników, portal pacjenta z zautomatyzowaną komunikacją.',
    'hm-sub': 'Browser MMO · Surowy świat średniowieczny',
    'hm-badge-prod': 'W produkcji',
    'hm-title': 'Surowy świat średniowieczny',
    'hm-desc': 'Trwała przeglądarowa MMO w surowym świecie średniowiecznym. Gospodarka sterowana przez graczy, osady, walka kartami, kaskada jakości materiałów. Grane przez 1000+ równoczesnych graczy na infrastrukturze Fly.io. Budowana solo z wykorzystaniem vanilla JS + Canvas API, z backendem WebSocket.',
    'hm-card': 'Walka kartami',
    'hm-card-desc': 'Taktyka się liczy. Każde spotkanie z wilkiem, niedźwiedziem lub graczem wymaga strategii, zarządzania ręką i umiejętności czytania przeciwnika.',
    'hm-quality': 'Jakość materiałów',
    'hm-quality-desc': 'Trzy osie: Substrate (podłoże), Essence (esencja), Vitality (żywotność) kaskadowo wpływają na wytwarzanie — jakość drewna wpływa na jakość narzędzi, które wpływają na wartość produktu końcowego.',
    'hm-settlements': 'Osady i sojusze',
    'hm-settle-desc': 'Wioski z hierarchiami rang. Sojusze, wspólne projekty, konkurencja o zasoby tworzą emergentną politykę sterowaną przez graczy.',
    'hm-faith': 'Ołtarze & Przysięgi',
    'hm-faith-desc': 'Poświęć się na ołtarzach przodków i złóż przysięgi na bonusy kosztem ograniczeń. Każdy wybór ma rzeczywistą cenę.',
    'win-services': 'systemctl list-units --usługi',
    'svc-subtitle': 'Aktywne usługi · aipol.com.pl · Kajetan Kupaj',
    'svc-audit': 'Audyt bezpieczeństwa',
    'svc-audit-desc': 'Kompleksowa ocena bezpieczeństwa aplikacji web, infrastruktury i kodu. Testy penetracyjne, analiza podatności, szczegółowy raport z rekomendacjami.',
    'svc-www': 'Portale web',
    'svc-www-desc': 'Nowoczesne, szybkie i responsywne strony. Od stron lądowych po złożone portale — zoptymalizowane pod SEO i bezpieczeństwo.',
    'svc-shop': 'Sklep e-commerce',
    'svc-shop-desc': 'Niestandardowe sklepy internetowe — integracja płatności (Stripe, Przelewy24), panel administracyjny, bezpieczny checkout.',
    'svc-saas': 'Platformy SaaS',
    'svc-saas-desc': 'Buduj produkty od podstaw — architektura wielokliencka, subskrypcje, dashboardy, API, hosting.',
    'svc-apps': 'Aplikacje niestandardowe',
    'svc-apps-desc': 'Aplikacje full-stack budowane na zamówienie — web, desktop lub hybrydowe. Python, JavaScript, Java — dowolny tech stack.',
    'svc-ai-auto': 'Automatyzacja AI',
    'svc-ai-auto-desc': 'Automatyzacja procesów biznesowych przy użyciu agentów AI — integracje LLM, potoki danych, boty, generowanie raportów, workflow bez udziału człowieka.',
    'svc-ai-agent': 'Niestandardowy agent AI',
    'svc-ai-agent-desc': 'Projektuj i wdrażaj własnego agenta AI — wybór modelu, konfiguracja, trening, hosting, monitoring. Rozmawiaj z klientami, analizuj dane, zarządzaj zadaniami.',
    'svc-consult': 'Konsulting',
    'svc-consult-desc': 'Doradztwo techniczne — przegląd architektury, audyt kodu, migracja w chmurę, konfiguracja CI/CD, optymalizacja, troubleshooting.',
    'cta-title': 'Każdy projekt jest inny',
    'cta-sub': 'Napisz do mnie po wycenę — znajdziemy razem najlepsze rozwiązanie.',
    'cta-btn': '✉️ Napisz',
    'mail-title': '✉️ Thunderbird — Nowa wiadomość',
    'mail-send': 'Wyślij',
    'mail-clear': '🗑 Wyczyść',
    'mail-compose': 'Utwórz nową wiadomość',
    'mail-from': 'Od:',
    'mail-to': 'Do:',
    'mail-reply': 'Odpowiedź-do:',
    'mail-subject': 'Temat:',
    'mail-name': 'Imię:',
    'mail-status': 'Gotowy · Obsługiwane przez EmailJS · → k.kupaj@aipol.com.pl',
    'win-contact': 'netcat -kontakt — Skontaktuj się',
    'ct-nmap-done': 'Nmap gotowy: 1 adres IP (1 host aktywny)',
    'ct-note': '📱 Jeśli się nie odbiorę, zostaw SMS wspominając o rekrutacji lub projekcie. Otwarty na pracę długoterminową i współpracę.',
  }
};

let currentLanguage = localStorage.getItem('portfolioLang') || 'en';

function updateLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('portfolioLang', lang);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.textContent = t['lang-toggle-btn'];
    langBtn.onclick = (e) => { e.preventDefault(); const next = lang === 'en' ? 'pl' : 'en'; updateLanguage(next); };
  }
}

// ─── EmailJS Init ─────────────────────────────────────────────────────────────
// Uses EmailJS public API (free tier, no backend needed)
// Service ID / Template ID are set in sendMail()
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // ← replace with your EmailJS public key

// ─── Boot Screen ─────────────────────────────────────────────────────────────

const DRAGON_ASCII = `
  ██╗  ██╗ █████╗ ██╗     ██╗
  ██║ ██╔╝██╔══██╗██║     ██║
  █████╔╝ ███████║██║     ██║
  ██╔═██╗ ██╔══██║██║     ██║
  ██║  ██╗██║  ██║███████╗██║
  ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝
   ██╗     ██╗███╗   ██╗██╗   ██╗██╗  ██╗
   ██║     ██║████╗  ██║██║   ██║╚██╗██╔╝
   ██║     ██║██╔██╗ ██║██║   ██║ ╚███╔╝
   ██║     ██║██║╚██╗██║██║   ██║ ██╔██╗
   ███████╗██║██║ ╚████║╚██████╔╝██╔╝ ██╗
   ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝
          K a j e t a n   K u p a j
     Cybersecurity Engineer · aipol.com.pl
`;

const BOOT_MESSAGES = [
  { text: '[  OK  ] Started Kali Linux boot sequence...', cls: 'log-ok', delay: 0 },
  { text: '[  OK  ] Loaded kernel modules: net, fs, security', cls: 'log-ok', delay: 120 },
  { text: '[  OK  ] Mounting /proc, /sys, /dev filesystems', cls: 'log-ok', delay: 220 },
  { text: '[ INFO ] Loading cybersecurity toolkit...', cls: 'log-info', delay: 340 },
  { text: '[  OK  ] Initialized Metasploit Framework', cls: 'log-ok', delay: 480 },
  { text: '[  OK  ] Loaded Burp Suite Professional', cls: 'log-ok', delay: 580 },
  { text: '[  OK  ] OSINT tools ready', cls: 'log-ok', delay: 680 },
  { text: '[ INFO ] Starting network services...', cls: 'log-info', delay: 780 },
  { text: '[  OK  ] eth0: IP address assigned', cls: 'log-ok', delay: 880 },
  { text: '[  OK  ] Started OpenSSH server daemon', cls: 'log-ok', delay: 980 },
  { text: '[ INFO ] Mounting projects: hackersim.io, aipol.com.pl, skanujzdrowie.pl', cls: 'log-info', delay: 1080 },
  { text: '[ WARN ] Multiple CVE databases loaded — handle with care', cls: 'log-warn', delay: 1180 },
  { text: '[  OK  ] Portfolio environment initialized', cls: 'log-ok', delay: 1320 },
  { text: '[ INFO ] Welcome, root. aipol.com.pl is online.', cls: 'log-info', delay: 1460 },
];

function runBoot() {
  const asciiEl = document.getElementById('boot-ascii');
  const logEl   = document.getElementById('boot-log');
  const progEl  = document.getElementById('boot-progress');

  let i = 0;
  const chars = DRAGON_ASCII.split('');
  function typeChar() {
    if (i < chars.length) { asciiEl.textContent += chars[i++]; setTimeout(typeChar, 5); }
  }
  typeChar();

  BOOT_MESSAGES.forEach(({ text, cls, delay }, idx) => {
    setTimeout(() => {
      const line = document.createElement('div');
      line.className = cls;
      line.textContent = text;
      logEl.appendChild(line);
      logEl.scrollTop = logEl.scrollHeight;
    }, delay + 200);
  });

  let p = 0;
  const iv = setInterval(() => {
    p = Math.min(p + 1.2, 100);
    progEl.style.width = p + '%';
    if (p >= 100) clearInterval(iv);
  }, 20);

  setTimeout(() => {
    const boot = document.getElementById('boot-screen');
    boot.classList.add('fade-out');
    setTimeout(() => {
      boot.style.display = 'none';
      document.getElementById('desktop').classList.remove('hidden');
      initDesktop();
    }, 600);
  }, 2300);
}

// ─── Desktop Init ─────────────────────────────────────────────────────────────

function initDesktop() {
  updateClock();
  setInterval(updateClock, 1000);
  initDragging();
  initResizing();
  updateLanguage(currentLanguage);
  openWindow('terminal');
  setTimeout(() => { printWelcome(); }, 100);
  setTimeout(() => openWindow('about'), 600);
  setTimeout(() => openWindow('skills'), 1100);
  setTimeout(() => openWindow('experience'), 1600);
  setTimeout(() => openWindow('projects'), 2100);
  initMailCharCount();
  animateSkillBars();
}

function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent =
    now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

// ─── Window Management ───────────────────────────────────────────────────────

const windowState = {};
let zCounter = 100;
const CASCADE_OFFSETS = { terminal: [40,40], about: [380,60], skills: [40,520], experience: [720,60], projects: [720,520], services: [380,520], mail: [1100,60], contact: [1100,520] };

function openWindow(id) {
  const el = document.getElementById(`win-${id}`);
  if (!el) return;
  const wasHidden = el.classList.contains('hidden') || el.classList.contains('minimized');
  el.classList.remove('hidden', 'minimized');
  focusWindow(id);
  updateTaskbar(id, true, false);
  if (wasHidden) {
    el.style.opacity = '0';
    el.style.transform = 'scale(0.93) translateY(8px)';
    el.style.transition = 'opacity 0.18s ease, transform 0.18s ease';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'scale(1) translateY(0)';
      });
    });
  }
  windowState[id] = { open: true, minimized: false };
}

function closeWindow(id) {
  const el = document.getElementById(`win-${id}`);
  if (!el) return;
  el.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
  el.style.opacity = '0';
  el.style.transform = 'scale(0.93) translateY(8px)';
  setTimeout(() => {
    el.classList.add('hidden');
    el.style.opacity = '';
    el.style.transform = '';
    el.style.transition = '';
  }, 160);
  windowState[id] = { open: false, minimized: false };
  updateTaskbar(id, false);
}

function minimizeWindow(id) {
  const el = document.getElementById(`win-${id}`);
  if (!el) return;
  el.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
  el.style.opacity = '0';
  el.style.transform = 'scale(0.85) translateY(20px)';
  setTimeout(() => {
    el.classList.add('minimized');
    el.style.opacity = '';
    el.style.transform = '';
    el.style.transition = '';
  }, 160);
  windowState[id] = { open: true, minimized: true };
  updateTaskbar(id, true, true);
}

function maximizeWindow(id) {
  const el = document.getElementById(`win-${id}`);
  if (!el) return;
  if (el.classList.contains('maximized')) {
    el.classList.remove('maximized');
    const [lx, ly] = CASCADE_OFFSETS[id] || [80, 60];
    el.style.left = lx + 'px';
    el.style.top  = ly + 'px';
  } else {
    el.classList.add('maximized');
  }
}

function focusWindow(id) {
  document.querySelectorAll('.window').forEach(w => w.classList.remove('focused'));
  const el = document.getElementById(`win-${id}`);
  if (el) { el.classList.add('focused'); el.style.zIndex = ++zCounter; }
}

// Taskbar buttons
const tbButtons = {};

function updateTaskbar(id, open, minimized = false) {
  const taskbarWindows = document.getElementById('taskbar-windows');
  if (!open) {
    if (tbButtons[id]) { tbButtons[id].remove(); delete tbButtons[id]; }
    return;
  }
  if (!tbButtons[id]) {
    const btn = document.createElement('button');
    btn.className = 'taskbar-win-btn';
    btn.textContent = getWindowTitle(id);
    btn.onclick = () => {
      const s = windowState[id];
      if (s && s.minimized) { openWindow(id); }
      else { minimizeWindow(id); }
    };
    taskbarWindows.appendChild(btn);
    tbButtons[id] = btn;
  }
  tbButtons[id].classList.toggle('active', !minimized);
}

function getWindowTitle(id) {
  const t = { terminal:'⬛ Terminal', about:'👤 whoami', skills:'🛡️ skills', experience:'📋 career', projects:'💻 projects', services:'⚙️ services', mail:'✉️ Mail', contact:'📡 contact' };
  return t[id] || id;
}

// Click-to-focus on any window mousedown
document.addEventListener('mousedown', e => {
  const win = e.target.closest('.window');
  if (win) focusWindow(win.id.replace('win-', ''));
});

// ─── Dragging (improved) ─────────────────────────────────────────────────────

let drag = null;

function initDragging() {
  document.querySelectorAll('.window-titlebar').forEach(bar => {
    bar.addEventListener('mousedown', onTitlebarMousedown);
    bar.addEventListener('touchstart', onTitlebarTouchstart, { passive: false });
  });
}

function onTitlebarMousedown(e) {
  if (e.target.classList.contains('win-btn')) return;
  const id = this.dataset.win;
  const el = document.getElementById(`win-${id}`);
  if (!el || el.classList.contains('maximized')) return;
  focusWindow(id);
  const rect = el.getBoundingClientRect();
  drag = { el, ox: e.clientX - rect.left, oy: e.clientY - rect.top };
  document.addEventListener('mousemove', onDragMove);
  document.addEventListener('mouseup', onDragEnd);
  e.preventDefault();
}

function onTitlebarTouchstart(e) {
  if (e.target.classList.contains('win-btn')) return;
  const id = this.dataset.win;
  const el = document.getElementById(`win-${id}`);
  if (!el || el.classList.contains('maximized')) return;
  focusWindow(id);
  const touch = e.touches[0];
  const rect = el.getBoundingClientRect();
  drag = { el, ox: touch.clientX - rect.left, oy: touch.clientY - rect.top };
  document.addEventListener('touchmove', onDragTouchMove, { passive: false });
  document.addEventListener('touchend', onDragEnd);
  e.preventDefault();
}

function onDragMove(e) {
  if (!drag) return;
  applyDrag(e.clientX, e.clientY);
}

function onDragTouchMove(e) {
  if (!drag) return;
  applyDrag(e.touches[0].clientX, e.touches[0].clientY);
  e.preventDefault();
}

function applyDrag(cx, cy) {
  const winW = drag.el.offsetWidth;
  const winH = drag.el.offsetHeight;
  let x = cx - drag.ox;
  let y = cy - drag.oy;
  // Clamp: keep titlebar visible, not off-screen
  x = Math.max(-winW + 60, Math.min(window.innerWidth - 60, x));
  y = Math.max(36, Math.min(window.innerHeight - 36, y));
  drag.el.style.left = x + 'px';
  drag.el.style.top  = y + 'px';
}

function onDragEnd() {
  drag = null;
  document.removeEventListener('mousemove', onDragMove);
  document.removeEventListener('mouseup', onDragEnd);
  document.removeEventListener('touchmove', onDragTouchMove);
  document.removeEventListener('touchend', onDragEnd);
}

// ─── Resizing ─────────────────────────────────────────────────────────────────

function initResizing() {
  document.querySelectorAll('.window').forEach(win => {
    // SE corner handle
    addResizeHandle(win, 'se');
  });
}

function addResizeHandle(win, dir) {
  const h = document.createElement('div');
  h.className = `resize-handle resize-${dir}`;
  win.appendChild(h);

  h.addEventListener('mousedown', e => {
    e.stopPropagation();
    e.preventDefault();
    const startX = e.clientX, startY = e.clientY;
    const startW = win.offsetWidth, startH = win.offsetHeight;
    const startL = win.offsetLeft,  startT = win.offsetTop;

    function onMove(ev) {
      if (dir === 'se') {
        win.style.width  = Math.max(320, startW + ev.clientX - startX) + 'px';
        win.style.height = Math.max(200, startH + ev.clientY - startY) + 'px';
      }
    }
    function onUp() {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    }
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
}

// ─── Kali Menu ────────────────────────────────────────────────────────────────

document.getElementById('kali-menu-btn').addEventListener('click', e => {
  e.stopPropagation();
  document.getElementById('app-menu').classList.toggle('hidden');
});
document.addEventListener('click', () => document.getElementById('app-menu').classList.add('hidden'));

// ─── Skills Tabs ─────────────────────────────────────────────────────────────

function switchSkillTab(btn, panel) {
  document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.skill-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const panelEl = document.getElementById(`skill-${panel}`);
  panelEl.classList.add('active');
  animatePanelBars(panelEl);
}

function animateSkillBars() {
  // Initial animation when skills panel is first shown
  const skillWin = document.getElementById('win-skills');
  const obs = new MutationObserver(() => {
    if (!skillWin.classList.contains('hidden') && !skillWin.classList.contains('minimized')) {
      setTimeout(() => animatePanelBars(document.getElementById('skill-sec')), 120);
      obs.disconnect();
    }
  });
  obs.observe(skillWin, { attributes: true, attributeFilter: ['class'] });
}

function animatePanelBars(panel) {
  panel.querySelectorAll('.sfill').forEach(bar => {
    const w = bar.dataset.w;
    if (!w) return;
    bar.style.width = '0%';
    bar.style.transition = 'none';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = 'width 0.9s cubic-bezier(.4,0,.2,1)';
        bar.style.width = w + '%';
      });
    });
  });
}

// ─── Terminal Engine ─────────────────────────────────────────────────────────

const termLines = document.getElementById('terminal-lines');
const termInput = document.getElementById('terminal-input');

const FS = {
  '/': { type:'dir', children:['home','etc','var','opt','tmp'] },
  '/home': { type:'dir', children:['kajetan'] },
  '/home/kajetan': { type:'dir', children:['Desktop','projects','.bashrc','README.md'] },
  '/home/kajetan/Desktop': { type:'dir', children:['hackersim.ico','skanujzdrowie.ico','aipol.ico'] },
  '/home/kajetan/projects': { type:'dir', children:['hackersim.io','aipol.com.pl','skanujzdrowie.pl','ctf-tools'] },
  '/home/kajetan/README.md': { type:'file', content:'Kajetan Kupaj — Cybersecurity Engineer & Founder of aipol.com.pl\nWarsaw, Poland\ncontact: k.kupaj@aipol.com.pl' },
  '/home/kajetan/projects/aipol.com.pl': { type:'dir', children:['README.md','services.txt'] },
  '/home/kajetan/projects/aipol.com.pl/README.md': { type:'file', content:'aipol.com.pl — Polska firma IT\n==============================\nStatus: Aktywnie rozwijana\nUsługi: Security audits, custom software, AI agents, SaaS, sklepy WWW\nKontakt: k.kupaj@aipol.com.pl' },
  '/home/kajetan/projects/skanujzdrowie.pl': { type:'dir', children:['README.md'] },
  '/home/kajetan/projects/skanujzdrowie.pl/README.md': { type:'file', content:'skanujzdrowie.pl — Testy na raka online\n========================================\nPartner laboratoryjny: Novazym\nStatus: W budowie\nOpis: E-commerce + panel wyników + integracja z laboratorium\nTech: Python, Flask, SQL, Przelewy24' },
  '/etc': { type:'dir', children:['passwd','hostname','kali-release'] },
  '/etc/hostname': { type:'file', content:'kali' },
  '/etc/kali-release': { type:'file', content:'Kali GNU/Linux Rolling\nVERSION=2024.4\nBUILD=kajetan-portfolio' },
  '/var': { type:'dir', children:['log'] },
  '/var/log': { type:'dir', children:['career.log','syslog'] },
  '/var/log/career.log': { type:'file', content:
`[2018] ComCERT SA          — Junior IT Security Specialist
[2019] Comtegra             — IT Security Engineer (Mid)
[2020] Aviva                — Security Analyst (GSOC)
[2021] GSK                  — Application Security Consultant
[2022] Heritage Real Estate — IT Administrator
[2022] Citibank             — Fullstack Dev & Splunk Specialist
[2023] aipol.com.pl         — Founder & Developer ← CURRENT
       » hackersim.io       — Passion project (after-hours)
       » skanujzdrowie.pl   — MedTech (w/ Novazym lab)` },
  '/opt': { type:'dir', children:['hackersim','aipol','tools'] },
  '/opt/hackersim/README.md': { type:'file', content:'hackersim.io\nRealistic hacking simulation platform\nStatus: Active Development (after-hours)\nTech: Python, Flask, JS, WebSockets, SQL, Redis, Docker' },
  '/tmp': { type:'dir', children:[] },
};

let cwd = '/home/kajetan';
const cmdHistory = [];
let histIndex = -1;

const HELP_TEXT = `Available commands:
  help          show this help
  whoami        show user identity
  ls [path]     list directory contents
  cd <dir>      change directory
  cat <file>    read file contents
  pwd           print working directory
  uname -a      system information
  neofetch      system info + ascii art
  nmap          scan contact info
  skills        open skills window
  experience    open career window
  projects      open projects window
  services      open services window
  mail          open mail composer
  hackersim     open hackersim project
  about         open about window
  contact       open contact window
  clear         clear terminal
  echo <text>   print text
  history       show command history
  date          current date/time
  ifconfig      network interfaces
  ps aux        running processes`;

const NEOFETCH_ART = `
          ██████████
        ██          ██
       ██   ██  ██   ██  ┌─────────────────────────────────────┐
      ██   ████████  ██  │ root@kali                            │
      ██   ████████  ██  ├─────────────────────────────────────┤
       ██           ██   │ OS:     Kali Linux Rolling 2024.4   │
         ████████████    │ HOST:   kajetan-portfolio            │
          ██    ██       │ Kernel: 6.6.15-amd64                │
         ██      ██      │ Shell:  zsh 5.9                     │
        ██        ██     │ CPU:    Human Brain (overclocked)   │
       ██          ██    │ GPU:    Pattern Recognition v∞      │
      ██            ██   │ RAM:    6+ years experience         │
                         │ Company: aipol.com.pl               │
                         │ Uptime:  Since 2018                 │
                         └─────────────────────────────────────┘`;

const COMMANDS = {
  help:       ()     => HELP_TEXT,
  whoami:     ()     => 'root',
  pwd:        ()     => cwd,
  clear:      ()     => { termLines.innerHTML = ''; return null; },
  date:       ()     => new Date().toString(),
  echo:       (args) => args.join(' '),
  history:    ()     => cmdHistory.map((c,i) => `  ${i+1}  ${c}`).join('\n'),
  'uname -a': ()     => 'Linux kali 6.6.15-amd64 #1 SMP Debian 6.6.15-2 x86_64 GNU/Linux',
  uname:      ()     => 'Linux',
  neofetch:   ()     => NEOFETCH_ART,
  nmap: (args) => {
    const t = args[0] || 'kajetan.kupaj';
    return `Starting Nmap 7.94\nNmap scan report for ${t}\nHost is up (0.00042s latency).\n\nPORT       STATE  SERVICE\nemail      open   k.kupaj@aipol.com.pl\nphone      open   +48 692 302 342\nlinkedin   open   linkedin.com/in/kajetankupaj\naipol      open   aipol.com.pl (active)\nhackersim  open   hackersim.io (active)\nskanuj     open   skanujzdrowie.pl (building)\nlocation   open   Warsaw, Poland\n\nNmap done: 1 IP address (1 host up)`;
  },
  ifconfig: () =>
`eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255
        ether 00:0c:29:3a:7f:4d  txqueuelen 1000  (Ethernet)

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0`,
  'ps aux': () =>
`USER       PID %CPU %MEM COMMAND
root         1  0.0  0.1 /sbin/init
root       420  0.2  0.8 /usr/bin/python3 hackersim-dev
root       421  0.1  0.5 /usr/bin/python3 aipol-server
root       422  0.0  0.4 burpsuite
root       423  0.0  0.2 /usr/bin/metasploit
root       500  0.3  1.2 portfolio-server
root       501  0.0  0.1 [threat-hunting]
root       666  0.0  0.0 bash`,
  ls: (args) => {
    const path = resolvePath(args[0] || cwd);
    const node = FS[path];
    if (!node) return `ls: cannot access '${args[0]}': No such file or directory`;
    if (node.type === 'file') return path.split('/').pop();
    return node.children.join('  ');
  },
  cd: (args) => {
    if (!args[0] || args[0] === '~') { cwd = '/home/kajetan'; updatePrompt(); return null; }
    if (args[0] === '..') {
      const parts = cwd.split('/').filter(Boolean);
      parts.pop();
      cwd = parts.length ? '/' + parts.join('/') : '/';
      updatePrompt(); return null;
    }
    const target = resolvePath(args[0]);
    const node = FS[target];
    if (!node) return `bash: cd: ${args[0]}: No such file or directory`;
    if (node.type !== 'dir') return `bash: cd: ${args[0]}: Not a directory`;
    cwd = target; updatePrompt(); return null;
  },
  cat: (args) => {
    if (!args[0]) return 'cat: missing operand';
    const path = resolvePath(args[0]);
    const node = FS[path];
    if (!node) return `cat: ${args[0]}: No such file or directory`;
    if (node.type === 'dir') return `cat: ${args[0]}: Is a directory`;
    return node.content;
  },
  skills:     () => { openWindow('skills');     return '[opened: skill-tree]'; },
  experience: () => { openWindow('experience'); return '[opened: career.log]'; },
  projects:   () => { openWindow('projects');   return '[opened: ~/projects]'; },
  hackersim:  () => { openWindow('projects');   return '[opened: hackersim.io]'; },
  services:   () => { openWindow('services');   return '[opened: services --list]'; },
  mail:       () => { openWindow('mail');        return '[opened: Thunderbird Mail]'; },
  about:      () => { openWindow('about');      return '[opened: whoami]'; },
  contact:    () => { openWindow('contact');    return '[opened: netcat -contact]'; },
};

function resolvePath(p) {
  if (!p) return cwd;
  if (p.startsWith('/')) return normalizePath(p);
  return normalizePath(cwd + '/' + p);
}

function normalizePath(p) {
  const parts = p.split('/').filter(Boolean);
  const r = [];
  for (const part of parts) {
    if (part === '..') r.pop();
    else if (part !== '.') r.push(part);
  }
  return '/' + r.join('/');
}

function updatePrompt() {
  const display = cwd.startsWith('/home/kajetan') ? cwd.replace('/home/kajetan', '~') : cwd;
  document.querySelector('.prompt-path').textContent = display;
}

function addTermLine(text, cls = '') {
  String(text).split('\n').forEach(line => {
    const div = document.createElement('div');
    div.className = `t-line ${cls}`;
    div.textContent = line;
    termLines.appendChild(div);
  });
  const tb = document.getElementById('terminal-output');
  tb.scrollTop = tb.scrollHeight;
}

function runCommand(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return;
  cmdHistory.unshift(trimmed);
  histIndex = -1;

  const promptSpan = document.querySelector('.prompt').cloneNode(true);
  const cmdLine = document.createElement('div');
  cmdLine.className = 't-line cmd-line';
  cmdLine.appendChild(promptSpan);
  cmdLine.appendChild(document.createTextNode(' ' + trimmed));
  termLines.appendChild(cmdLine);

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0];
  const args = parts.slice(1);
  const fullCmd = trimmed.startsWith('uname') ? trimmed : cmd;
  const handler = COMMANDS[fullCmd] || COMMANDS[cmd];

  if (handler) {
    const result = handler(args);
    if (result !== null && result !== undefined) {
      addTermLine(result, cmd === 'neofetch' ? 'ascii info' : '');
    }
  } else if (trimmed === 'exit' || trimmed === 'logout') {
    addTermLine('logout — session ended. Refresh to reboot.', 'info');
    termInput.disabled = true;
  } else {
    addTermLine(`bash: ${cmd}: command not found`, 'error');
  }
  document.getElementById('terminal-output').scrollTop = 99999;
}

termInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const v = termInput.value; termInput.value = ''; runCommand(v);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (histIndex < cmdHistory.length - 1) termInput.value = cmdHistory[++histIndex];
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (histIndex > 0) { termInput.value = cmdHistory[--histIndex]; }
    else { histIndex = -1; termInput.value = ''; }
  } else if (e.key === 'Tab') {
    e.preventDefault();
    const v = termInput.value;
    const m = Object.keys(COMMANDS).find(c => c.startsWith(v));
    if (m) termInput.value = m;
  } else if (e.ctrlKey && e.key === 'l') {
    e.preventDefault(); termLines.innerHTML = '';
  }
});

function focusTerminalInput() { termInput.focus(); }

// ─── Welcome Message ──────────────────────────────────────────────────────────

function printWelcome() {
  addTermLine(' ', '');
  addTermLine('██╗  ██╗ █████╗ ██╗     ██╗    ██╗     ██╗███╗   ██╗██╗   ██╗██╗  ██╗', 'info');
  addTermLine('██║ ██╔╝██╔══██╗██║     ██║    ██║     ██║████╗  ██║██║   ██║╚██╗██╔╝', 'info');
  addTermLine('█████╔╝ ███████║██║     ██║    ██║     ██║██╔██╗ ██║██║   ██║ ╚███╔╝ ', 'info');
  addTermLine('██╔═██╗ ██╔══██║██║     ██║    ██║     ██║██║╚██╗██║██║   ██║ ██╔██╗ ', 'info');
  addTermLine('██║  ██╗██║  ██║███████╗██║    ███████╗██║██║ ╚████║╚██████╔╝██╔╝ ██╗', 'info');
  addTermLine('╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝    ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝', 'info');
  addTermLine(' ', '');
  addTermLine('  Kajetan Kupaj — Cybersecurity Engineer · aipol.com.pl', 'success');
  addTermLine('  Warsaw, Poland · k.kupaj@aipol.com.pl', '');
  addTermLine(' ', '');
  addTermLine("  Projects: hackersim.io | skanujzdrowie.pl (w/ Novazym) | aipol.com.pl", 'info');
  addTermLine("  Type 'help' for available commands. Double-click icons to open windows.", 'info');
  addTermLine(' ', '');
}

// ─── Mail Composer (Thunderbird style) ──────────────────────────────────────

function initMailCharCount() {
  const ta = document.getElementById('mail-message');
  if (!ta) return;
  ta.addEventListener('input', () => {
    document.getElementById('mail-charcount').textContent = ta.value.length;
  });
}

function setMailStatus(msg, cls) {
  const el = document.getElementById('mail-status');
  if (!el) return;
  el.textContent = msg;
  el.className = 'mail-status-' + cls;
}

function clearMail() {
  ['mail-reply','mail-subject','mail-name','mail-message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('mail-charcount').textContent = '0';
  setMailStatus('Ready · Powered by EmailJS · → k.kupaj@aipol.com.pl', 'idle');
}

async function sendMail() {
  const replyTo = document.getElementById('mail-reply').value.trim();
  const subject = document.getElementById('mail-subject').value.trim();
  const name    = document.getElementById('mail-name').value.trim();
  const message = document.getElementById('mail-message').value.trim();

  if (!replyTo || !subject || !message) {
    setMailStatus('⚠ Fill in Reply-To, Subject and Message before sending.', 'error');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo)) {
    setMailStatus('⚠ Invalid email address in Reply-To field.', 'error');
    return;
  }

  setMailStatus('⏳ Sending…', 'sending');
  document.getElementById('mail-send-btn').disabled = true;

  try {
    await emailjs.send(
      'YOUR_EMAILJS_SERVICE_ID',   // ← replace with EmailJS service ID
      'YOUR_EMAILJS_TEMPLATE_ID',  // ← replace with EmailJS template ID
      {
        from_name:    name || replyTo,
        reply_to:     replyTo,
        subject:      subject,
        message:      message,
        to_email:     'k.kupaj@aipol.com.pl',
      }
    );
    setMailStatus('✅ Message sent successfully! I\'ll reply as soon as possible.', 'success');
    setTimeout(clearMail, 4000);
  } catch (err) {
    console.error('EmailJS error:', err);
    setMailStatus('❌ Failed to send. Please email k.kupaj@aipol.com.pl directly.', 'error');
  } finally {
    document.getElementById('mail-send-btn').disabled = false;
  }
}

// ─── Reboot ───────────────────────────────────────────────────────────────────
function reboot() { location.reload(); }

// ─── Entry Point ─────────────────────────────────────────────────────────────
runBoot();
