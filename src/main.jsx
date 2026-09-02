import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Lanyard from "./components/Lanyard/Lanyard";
import { FaCss3Alt, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import {
  SiReact, SiNodedotjs, SiExpress, SiJavascript, SiTypescript,
  SiHtml5, SiTailwindcss, SiNextdotjs, SiVite,
  SiMysql, SiPostgresql, SiMongodb, SiRedis,
  SiGit, SiGithub, SiDocker, SiNetlify, SiVercel, SiCloudflare,
  SiFigma, SiPostman, SiInsomnia, SiNpm, SiPnpm,
  SiEslint, SiPrettier, SiJest, SiVitest, SiCypress,
  SiLinux
} from "react-icons/si";

const API = "/api";

const projects = [
  {
    title: "Jessie Collection",
    type: "Inventory Management System",
    year: "2026",
    desc: "Aplikasi stok dan penjualan untuk toko pakaian ball import dengan role Admin & Staff, riwayat pergerakan stok, dan database MySQL production.",
    tags: ["React", "Node.js", "MySQL"],
    live: "https://jessie-collection.netlify.app",
    github: "https://github.com/Dickyafandi/jessie-collection",
    featured: true
  },
  {
    title: "Finance Tracker",
    type: "Expense Management",
    year: "Coming soon",
    desc: "Dashboard pemasukan, pengeluaran, kategori, dan insight keuangan bulanan.",
    tags: ["React", "Node.js"],
  },
  {
    title: "Booking System",
    type: "Reservation Management",
    year: "Coming soon",
    desc: "Sistem reservasi dengan availability, jadwal, customer, dan dashboard admin.",
    tags: ["React", "MySQL"],
  }
];

const skillGroups = [
  {
    title: "Frontend Engineering",
    subtitle: "Interfaces, motion & component systems",
    tone: "blue",
    items: [
      ["React", SiReact, "Core"],
      ["Next.js", SiNextdotjs, "Building"],
      ["JavaScript", SiJavascript, "Core"],
      ["TypeScript", SiTypescript, "Building"],
      ["HTML5", SiHtml5, "Core"],
      ["CSS3", FaCss3Alt, "Core"],
      ["Tailwind CSS", SiTailwindcss, "Building"],
      ["Vite", SiVite, "Core"]
    ]
  },
  {
    title: "Backend & API",
    subtitle: "Services, auth & integrations",
    tone: "violet",
    items: [
      ["Node.js", SiNodedotjs, "Core"],
      ["Express", SiExpress, "Core"],
      ["REST API", SiExpress, "Core"],
      ["Postman", SiPostman, "Core"],
      ["Insomnia", SiInsomnia, "Building"],
      ["NPM", SiNpm, "Core"],
      ["PNPM", SiPnpm, "Exploring"],
      ["JWT / Auth", SiNodedotjs, "Building"]
    ]
  },
  {
    title: "Database & Data",
    subtitle: "Relational, document & caching",
    tone: "cyan",
    items: [
      ["MySQL", SiMysql, "Core"],
      ["PostgreSQL", SiPostgresql, "Building"],
      ["MongoDB", SiMongodb, "Exploring"],
      ["Redis", SiRedis, "Exploring"]
    ]
  },
  {
    title: "DevOps & Cloud",
    subtitle: "Shipping from local to production",
    tone: "green",
    items: [
      ["Git", SiGit, "Core"],
      ["GitHub", SiGithub, "Core"],
      ["Docker", SiDocker, "Building"],
      ["Netlify", SiNetlify, "Core"],
      ["Vercel", SiVercel, "Building"],
      ["Cloudflare", SiCloudflare, "Exploring"],
      ["Linux", SiLinux, "Building"]
    ]
  },
  {
    title: "Quality & Workflow",
    subtitle: "Design, linting & testing",
    tone: "pink",
    items: [
      ["Figma", SiFigma, "Workflow"],
      ["ESLint", SiEslint, "Core"],
      ["Prettier", SiPrettier, "Core"],
      ["Jest", SiJest, "Building"],
      ["Vitest", SiVitest, "Building"],
      ["Cypress", SiCypress, "Exploring"],
      ["Playwright", SiGithub, "Exploring"]
    ]
  }
];

function IdCard() {
  return (
    <div className="reactbits-lanyard">
      <Lanyard
        position={[0, 0, 24]}
        gravity={[0, -40, 0]}
        fov={20}
        transparent
        frontImage="/dicky-id-card.png"
        backImage="/dicky-id-card-back.png"
        imageFit="cover"
        lanyardWidth={1}
      />

      <div className="lanyard-hint">
        <span>↗</span>
        <strong>click + drag</strong>
        <small>the badge</small>
      </div>
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const go = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <header className="topbar">
        <div className="nav-wrap">
          <a className="identity" href="#home">
            <span className="identity-mark">DA</span>
            <span>
              <b>DICKY AFANDI</b>
              <small>FULL STACK DEVELOPER</small>
            </span>
          </a>

          <nav className={menu ? "nav open" : "nav"}>
            {[
              ["home", "Home"],
              ["about", "About"],
              ["skills", "Skills"],
              ["projects", "Projects"],
              ["contact", "Contact"]
            ].map(([id, label]) => (
              <button key={id} onClick={() => go(id)}>{label}</button>
            ))}
          </nav>

          <div className="top-actions">
            <button className="theme-btn" onClick={() => setDark(v => !v)}>{dark ? "☾" : "☼"}</button>
            <button className="talk-btn" onClick={() => go("contact")}>Let's talk <span>↗</span></button>
            <button className="menu-btn" onClick={() => setMenu(v => !v)} aria-label="menu">☰</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> OPEN TO OPPORTUNITIES</div>
            <h1>Building digital<br /><span>experiences</span><br />that feel alive.</h1>
            <p className="hero-text">
              Saya seorang Full Stack Developer yang suka mengubah ide menjadi aplikasi
              web yang cepat, rapi, dan menyenangkan untuk digunakan.
            </p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => go("projects")}>Explore projects <span>↗</span></button>
              <a className="btn-ghost" href="https://github.com/Dickyafandi" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </div>

            <div className="hero-caption">
              <span className="caption-line"></span>
              <div>
                <small>Currently building</small>
                <strong>Jessie Collection · Inventory platform</strong>
              </div>
            </div>
          </div>

          <div className="hero-art">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="grid-halo"></div>
            <div className="desk-light"></div>
            <IdCard />
          </div>
        </section>

        <section className="marquee">
          <div className="marquee-inner">
            {[
              [SiReact, "REACT"],
              [SiNextdotjs, "NEXT.JS"],
              [SiJavascript, "JAVASCRIPT"],
              [SiTypescript, "TYPESCRIPT"],
              [SiNodedotjs, "NODE.JS"],
              [SiMysql, "MYSQL"],
              [SiPostgresql, "POSTGRESQL"],
              [SiDocker, "DOCKER"],
              [SiGit, "GIT"],
              [SiGithub, "GITHUB"],
              [SiFigma, "FIGMA"],
              [SiCloudflare, "CLOUDFLARE"]
            ].map(([Icon, label], i) => (
              <React.Fragment key={label}>
                <div className="marquee-item">
                  <Icon className="marquee-icon" aria-hidden="true" />
                  <span>{label}</span>
                </div>
                {i < 11 && <i className="marquee-separator">✦</i>}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-top">
            <div>
              <span className="kicker">01 / STACK</span>
              <h2>More than a list.<br />A stack to master.</h2>
            </div>
            <p>
              Stack ini dibuat sebagai peta belajar jangka panjang. Yang bertanda <b>Core</b>
              adalah yang sudah dipakai di project, sisanya sedang dibangun atau dieksplorasi.
            </p>
          </div>

          <div className="skill-summary">
            <div className="skill-summary-main">
              <span className="summary-kicker">CURRENT FOCUS</span>
              <strong>Full Stack · Production · UI Motion</strong>
            </div>
            <div className="legend">
              <span><i className="legend-dot core" /> Core</span>
              <span><i className="legend-dot building" /> Building</span>
              <span><i className="legend-dot exploring" /> Exploring</span>
            </div>
          </div>

          <div className="skill-groups">
            {skillGroups.map(group => (
              <article className={`skill-group ${group.tone}`} key={group.title}>
                <div className="skill-group-head">
                  <div>
                    <span className="skill-group-label">{group.tone.toUpperCase()}</span>
                    <h3>{group.title}</h3>
                    <p>{group.subtitle}</p>
                  </div>
                  <span className="skill-count">{String(group.items.length).padStart(2, "0")}</span>
                </div>

                <div className="tool-wall">
                  {group.items.map(([name, Icon, status]) => (
                    <div className="tool-card" key={name}>
                      <div className="tool-icon"><Icon /></div>
                      <div className="tool-copy">
                        <strong>{name}</strong>
                        <span className={status.toLowerCase().replace(" ", "-")}>{status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-top">
            <div>
              <span className="kicker">02 / SELECTED WORK</span>
              <h2>Projects with<br />a purpose.</h2>
            </div>
            <a className="text-link" href="https://github.com/Dickyafandi" target="_blank" rel="noreferrer">View GitHub ↗</a>
          </div>

          <div className="work-feature">
            <div className="work-image">
              <div className="app-window">
                <div className="window-top"><span></span><span></span><span></span><b>Jessie Collection</b></div>
                <div className="window-body">
                  <aside><strong>JC</strong><small>Dashboard</small><small>Products</small><small>Stock</small><small>Reports</small></aside>
                  <div className="window-main">
                    <div className="window-title">Inventory</div>
                    <div className="mini-cards"><i></i><i></i><i></i></div>
                    <div className="mini-products">
                      <i></i><i></i><i></i><i></i><i></i><i></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-copy">
              <span className="work-index">01 — 2026</span>
              <h3>Jessie Collection</h3>
              <div className="work-type">Inventory Management System</div>
              <p>{projects[0].desc}</p>
              <div className="work-tags">{projects[0].tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="work-actions">
                <a className="btn-primary small" href={projects[0].live} target="_blank" rel="noreferrer">Live demo ↗</a>
                <a className="btn-ghost small" href={projects[0].github} target="_blank" rel="noreferrer">Source ↗</a>
              </div>
            </div>
          </div>

          <div className="more-projects">
            {projects.slice(1).map((project, idx) => (
              <article className="more-card" key={project.title}>
                <div className="more-number">0{idx + 2}</div>
                <div><small>{project.year}</small><h4>{project.title}</h4><span>{project.type}</span></div>
                <div className="more-tags">{project.tags.map(tag => <em key={tag}>{tag}</em>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-photo">
            <img src="/dicky-afandi.png" alt="Dicky Afandi" />
          </div>
          <div className="about-copy">
            <span className="kicker">03 / ABOUT</span>
            <h2>Curious mind.<br />Practical builder.</h2>
            <p>
              Saya menikmati proses dari nol: memahami masalah, merancang database,
              membangun API, sampai membuat interface yang enak dipakai.
            </p>
            <div className="about-stats">
              <div><strong>5+</strong><span>Projects</span></div>
              <div><strong>1+</strong><span>Years learning</span></div>
              <div><strong>100%</strong><span>Commitment</span></div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner">
            <span className="kicker">04 / CONTACT</span>
            <h2>Have an idea?<br /><span>Let's build it.</span></h2>
            <p>Terbuka untuk ngobrol tentang project, freelance, atau kolaborasi.</p>
            <div className="contact-links contact-cards">
              <a className="contact-card" href="mailto:dickyafandi86@gmail.com">
                <FaEnvelope className="contact-icon" aria-hidden="true" />
                <span><small>Email</small><strong>dickyafandi86@gmail.com</strong></span>
                <b>↗</b>
              </a>
              <a className="contact-card" href="https://www.linkedin.com/in/dicky-afandi-602373247/" target="_blank" rel="noreferrer">
                <FaLinkedin className="contact-icon" aria-hidden="true" />
                <span><small>LinkedIn</small><strong>linkedin.com/in/dicky-afandi-602373247</strong></span>
                <b>↗</b>
              </a>
              <a className="contact-card" href="https://wa.me/6281319467739" target="_blank" rel="noreferrer">
                <FaWhatsapp className="contact-icon" aria-hidden="true" />
                <span><small>WhatsApp</small><strong>+62 813-1919-4739</strong></span>
                <b>↗</b>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Dicky Afandi</span>
        <span>Built with React + Vite</span>
        <span>Always learning, always improving.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
