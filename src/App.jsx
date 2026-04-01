import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Win2KWindow from "./components/Win2KWindow";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import { listTools, listProyek } from "./data";

/* ─── tiny helpers ──────────────────────────────────────────── */

/** Progress bar (Win2K striped style) */
const ProgressBar = ({ value = 70 }) => (
  <div className="win2k-progress-track" style={{ width: "100%" }}>
    <div className="win2k-progress-fill" style={{ width: `${value}%` }} />
  </div>
);

/** Stat badge */
const StatBadge = ({ value, label }) => (
  <div
    style={{
      textAlign: "center",
      padding: "8px 12px",
      background: "var(--color-window-bg)",
      border: "2px solid var(--color-border-dark)",
      borderTop: "2px solid var(--color-border-light)",
      borderLeft: "2px solid var(--color-border-light)",
      minWidth: "90px",
    }}
  >
    <div
      style={{
        fontSize: "20px",
        fontWeight: "bold",
        color: "var(--color-titlebar-start)",
        fontFamily: "var(--font-ui)",
      }}
    >
      {value}
    </div>
    <div style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>{label}</div>
  </div>
);

/** Win2K dialog-style section header */
const SectionHeader = ({ children }) => (
  <div
    style={{
      background: "linear-gradient(to right, var(--color-titlebar-start), var(--color-titlebar-end))",
      color: "#fff",
      fontSize: "11px",
      fontWeight: "bold",
      padding: "2px 8px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      userSelect: "none",
      gap: "6px",
      marginBottom: "8px",
    }}
  >
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <rect x="0" y="0" width="5" height="5" fill="#f25022" />
      <rect x="6" y="0" width="5" height="5" fill="#80ba01" />
      <rect x="0" y="6" width="5" height="5" fill="#02a4ef" />
      <rect x="6" y="6" width="5" height="5" fill="#ffb902" />
    </svg>
    {children}
  </div>
);

/* ─── main App ──────────────────────────────────────────────── */

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  return (
    <div
      className="win2k-scanlines"
      style={{
        minHeight: "100vh",
        paddingBottom: "32px", /* room for fixed taskbar */
        fontFamily: "var(--font-ui)",
        fontSize: "11px",
      }}
    >
      <Navbar />

      {/* ── Desktop ── */}
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "12px 12px 48px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* ══ HERO WINDOW ══════════════════════════════════════ */}
        <Win2KWindow
          title="Welcome – Chaitanya Jain Portfolio"
          id="home"
        >
          <SectionHeader>Hello, World!</SectionHeader>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            {/* Left: avatar + badge */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                minWidth: "110px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  overflow: "hidden",
                  borderTop: "2px solid var(--color-border-dark)",
                  borderLeft: "2px solid var(--color-border-dark)",
                  borderRight: "2px solid var(--color-border-light)",
                  borderBottom: "2px solid var(--color-border-light)",
                  boxShadow: "inset 1px 1px 0 var(--color-border-darker)",
                }}
              >
                <img
                  src="public/assets/tools/chaitanya copy.png"
                  alt="Chaitanya Jain"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* Online status indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "10px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#00aa00",
                    border: "1px solid #006600",
                    display: "inline-block",
                  }}
                />
                Online
              </div>
              <div
                style={{
                  background: "var(--color-window-bg)",
                  padding: "2px 6px",
                  fontSize: "10px",
                  border: "1px solid var(--color-border-dark)",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                chaitanyajain_18
              </div>
            </div>

            {/* Right: intro text */}
            <div style={{ flex: 1, minWidth: "200px" }}>
              <div
                style={{
                  border: "1px solid var(--color-border-dark)",
                  padding: "6px 8px",
                  background: "var(--color-window-face)",
                  marginBottom: "8px",
                  fontStyle: "italic",
                  fontSize: "11px",
                }}
              >
                &ldquo;Avoid or just undertake it&rdquo;
              </div>

              <h1
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "var(--font-ui)",
                  color: "var(--color-titlebar-start)",
                  marginBottom: "6px",
                }}
              >
                Hi, I&apos;m Chaitanya Jain
              </h1>
              <p style={{ marginBottom: "8px", lineHeight: "1.6", fontSize: "11px" }}>
                A passionate application and web developer dedicated to crafting
                modern, high-performance digital experiences through innovative and
                user-friendly solutions.
              </p>

              {/* CTA buttons */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                <a
                  href="./assets/CV.pdf"
                  download="Chaitanya_Jain_CV.pdf"
                  className="win2k-btn win2k-btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  Download CV
                </a>
                <button
                  className="win2k-btn"
                  onClick={() =>
                    document
                      .getElementById("project")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="win2k-statusbar" style={{ marginTop: "8px" }}>
            <div className="win2k-statusbar-panel" style={{ flex: 1 }}>
              Web Developer &nbsp;|&nbsp; B.Tech ECE – WIT Solapur
            </div>
            <div className="win2k-statusbar-panel">GPA: 7.81 / 10.00</div>
          </div>
        </Win2KWindow>

        {/* ══ ABOUT WINDOW ════════════════════════════════════ */}
        <Win2KWindow title="About Me – Properties" id="about">
          <SectionHeader>System Properties – User Info</SectionHeader>

          {/* Tab strip */}
          <div className="win2k-tabs">
            {["about", "stats", "education"].map((tab) => (
              <button
                key={tab}
                className={`win2k-tab${activeTab === tab ? " active" : ""}`}
                onClick={() => setActiveTab(tab)}
                style={{ background: "none", border: "none", cursor: "default" }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          <div
            style={{
              background: "var(--color-window-face)",
              border: "2px solid var(--color-border-dark)",
              borderTop: "none",
              padding: "10px",
              marginBottom: "6px",
            }}
          >
            {activeTab === "about" && (
              <p style={{ lineHeight: "1.7", fontSize: "11px" }}>
                I&apos;m Chaitanya Jain, currently pursuing B.Tech in Electronic and
                Computer Engineering at Walchand Institute of Technology, Solapur.
                I have a proven ability to learn quickly and work effectively within
                teams, with hands-on experience in programming, web development, and
                robotics projects. I enjoy working with the latest technologies like
                Artificial Intelligence, Machine Learning, and cloud-based development,
                blending creativity with precision to deliver impactful solutions.
                I&apos;m actively seeking internship and learning opportunities to build
                practical experience and contribute to innovative projects in software
                development.
              </p>
            )}

            {activeTab === "stats" && (
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", padding: "6px 0" }}>
                <StatBadge value="10+" label="Projects Finished" />
                <StatBadge value="3+" label="Years Experience" />
                <StatBadge value="7.81" label="GPA / 10.00" />
              </div>
            )}

            {activeTab === "education" && (
              <div>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "11px",
                  }}
                >
                  <tbody>
                    {[
                      ["Degree", "B.Tech – Electronic & Computer Engineering"],
                      ["Institute", "Walchand Institute of Technology, Solapur"],
                      ["GPA", "7.81 / 10.00"],
                      ["Focus", "AI, ML, Web Dev, IoT, Robotics"],
                    ].map(([k, v]) => (
                      <tr key={k}>
                        <td
                          style={{
                            padding: "4px 8px",
                            fontWeight: "bold",
                            background: "var(--color-window-bg)",
                            border: "1px solid var(--color-border-dark)",
                            width: "120px",
                          }}
                        >
                          {k}
                        </td>
                        <td
                          style={{
                            padding: "4px 8px",
                            border: "1px solid var(--color-border-dark)",
                          }}
                        >
                          {v}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="win2k-statusbar">
            <div className="win2k-statusbar-panel" style={{ flex: 1 }}>
              Working with heart, creating with mind.
            </div>
          </div>
        </Win2KWindow>

        {/* ══ TOOLS WINDOW ════════════════════════════════════ */}
        <Win2KWindow title="Device Manager – Tools & Technologies">
          <SectionHeader>Installed Tools &amp; Frameworks</SectionHeader>

          <div
            className="win2k-sunken"
            style={{
              background: "var(--color-inset-bg)",
              padding: "4px",
              maxHeight: "320px",
              overflowY: "auto",
            }}
          >
            <table className="win2k-listview" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ width: "32px" }}>Icon</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {listTools.map((tool) => (
                  <tr key={tool.id}>
                    <td>
                      <img
                        src={tool.gambar}
                        alt={tool.nama}
                        style={{ width: "16px", height: "16px", objectFit: "contain" }}
                      />
                    </td>
                    <td>{tool.nama}</td>
                    <td style={{ color: "var(--color-text-muted)" }}>{tool.ket}</td>
                    <td>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "10px",
                          color: "#006600",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#00aa00",
                            display: "inline-block",
                          }}
                        />
                        Working
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="win2k-statusbar" style={{ marginTop: "6px" }}>
            <div className="win2k-statusbar-panel">
              {listTools.length} devices listed
            </div>
            <div className="win2k-statusbar-panel" style={{ flex: 1 }}>
              All devices are working properly
            </div>
          </div>
        </Win2KWindow>

        {/* ══ PROJECTS WINDOW ════════════════════════════════ */}
        <Win2KWindow title="My Computer – Projects Explorer" id="project">
          <SectionHeader>Projects – File Explorer View</SectionHeader>

          <p style={{ marginBottom: "10px", color: "var(--color-text-muted)", fontSize: "11px" }}>
            Showcasing a selection of projects that reflect my skills, creativity,
            and passion for building meaningful digital experiences.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "8px",
            }}
          >
            {listProyek.map((project) => (
              <div
                key={project.id}
                className="win2k-raised"
                style={{
                  background: "var(--color-window-face)",
                  cursor: "default",
                  overflow: "hidden",
                }}
                onDoubleClick={() => setSelectedProject(project)}
              >
                {/* Mini title bar */}
                <div
                  style={{
                    background: "linear-gradient(to right, var(--color-titlebar-start), var(--color-titlebar-end))",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: "bold",
                    padding: "2px 6px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    userSelect: "none",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <rect x="0" y="0" width="5" height="5" fill="#f25022" />
                    <rect x="6" y="0" width="5" height="5" fill="#80ba01" />
                    <rect x="0" y="6" width="5" height="5" fill="#02a4ef" />
                    <rect x="6" y="6" width="5" height="5" fill="#ffb902" />
                  </svg>
                  {project.title}
                </div>
                {/* Thumbnail */}
                <div
                  className="win2k-sunken"
                  style={{ margin: "4px", overflow: "hidden", height: "100px" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                {/* Description */}
                <div style={{ padding: "4px 6px 2px" }}>
                  <p style={{ fontSize: "10px", color: "var(--color-text-muted)", marginBottom: "6px" }}>
                    {project.subtitle}
                  </p>
                  <button
                    className="win2k-btn"
                    style={{ width: "100%", marginBottom: "4px" }}
                    onClick={() => setSelectedProject(project)}
                  >
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="win2k-statusbar" style={{ marginTop: "8px" }}>
            <div className="win2k-statusbar-panel">
              {listProyek.length} objects
            </div>
            <div className="win2k-statusbar-panel" style={{ flex: 1 }}>
              Double-click to open a project
            </div>
          </div>
        </Win2KWindow>

        {/* ══ CONTACT WINDOW ══════════════════════════════════ */}
        <Win2KWindow title="Send Message – Contact Form" id="contact">
          <SectionHeader>Contact &amp; Send Message</SectionHeader>

          <p style={{ marginBottom: "10px", color: "var(--color-text-muted)" }}>
            Get in touch with me or send a message below.
          </p>

          <form
            action="https://formsubmit.co/jainchaitanya6@gmail.com"
            method="POST"
            autoComplete="off"
          >
            {/* Two-column layout */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <div>
                <label className="win2k-label" htmlFor="cf-name">Full Name:</label>
                <input
                  id="cf-name"
                  type="text"
                  name="Name"
                  placeholder="John Smith"
                  required
                  className="win2k-input"
                />
              </div>
              <div>
                <label className="win2k-label" htmlFor="cf-email">E-mail Address:</label>
                <input
                  id="cf-email"
                  type="email"
                  name="Email"
                  placeholder="john@example.com"
                  required
                  className="win2k-input"
                />
              </div>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label className="win2k-label" htmlFor="cf-msg">Message:</label>
              <textarea
                id="cf-msg"
                name="message"
                rows={6}
                placeholder="Type your message here..."
                required
                className="win2k-input"
                style={{ resize: "vertical" }}
              />
            </div>

            {/* Dialog-style button row */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "6px",
                borderTop: "1px solid var(--color-border-dark)",
                paddingTop: "8px",
              }}
            >
              <button type="submit" className="win2k-btn win2k-btn-primary">
                Send
              </button>
              <button type="reset" className="win2k-btn">
                Cancel
              </button>
            </div>
          </form>

          {/* Social links row */}
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "GitHub", href: "https://github.com/chaitanyajain18" },
              { label: "Instagram", href: "https://www.instagram.com/chaitanyajain_18/" },
              { label: "YouTube", href: "https://www.youtube.com/@chaitanyajain8037" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="win2k-btn"
                style={{ textDecoration: "none", minWidth: "80px", textAlign: "center" }}
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="win2k-statusbar" style={{ marginTop: "8px" }}>
            <div className="win2k-statusbar-panel" style={{ flex: 1 }}>
              jainchaitanya6@gmail.com
            </div>
          </div>
        </Win2KWindow>
      </main>

      {/* Footer / Taskbar */}
      <Footer />

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
}

export default App;
