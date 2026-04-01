import { useState, useEffect } from "react";

const Footer = () => {
  const [time, setTime] = useState("");
  const [startOpen, setStartOpen] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setStartOpen(false);
  };

  return (
    <footer className="win2k-taskbar">
      {/* Start Button */}
      <div style={{ position: "relative" }}>
        <button
          className="win2k-start-btn"
          onClick={() => setStartOpen((v) => !v)}
        >
          {/* Windows flag */}
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <rect x="0" y="0" width="5" height="5" fill="#f25022" />
            <rect x="6" y="0" width="5" height="5" fill="#80ba01" />
            <rect x="0" y="6" width="5" height="5" fill="#02a4ef" />
            <rect x="6" y="6" width="5" height="5" fill="#ffb902" />
          </svg>
          <strong>Start</strong>
        </button>

        {/* Start Menu popup */}
        {startOpen && (
          <div
            style={{
              position: "absolute",
              bottom: "28px",
              left: 0,
              background: "var(--color-window-bg)",
              borderTop: "2px solid var(--color-border-light)",
              borderLeft: "2px solid var(--color-border-light)",
              borderRight: "2px solid var(--color-border-darker)",
              borderBottom: "2px solid var(--color-border-darker)",
              boxShadow: "2px -2px 8px rgba(0,0,0,0.4)",
              zIndex: 10000,
              width: "160px",
            }}
          >
            {/* Sidebar strip */}
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "26px",
                  background: "linear-gradient(to top, var(--color-titlebar-start), var(--color-titlebar-end))",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  padding: "4px 0",
                }}
              >
                <span
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  Portfolio
                </span>
              </div>
              <div style={{ flex: 1 }}>
                {[
                  { label: "Home", id: "home" },
                  { label: "About Me", id: "about" },
                  { label: "Projects", id: "project" },
                  { label: "Contact", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "5px 8px",
                      textAlign: "left",
                      background: "transparent",
                      border: "none",
                      fontFamily: "var(--font-ui)",
                      fontSize: "11px",
                      cursor: "default",
                      color: "var(--color-text)",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "var(--color-highlight)";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "";
                      e.currentTarget.style.color = "";
                    }}
                  >
                    {item.label}
                  </button>
                ))}
                <hr style={{ borderColor: "var(--color-border-dark)", margin: "2px 0" }} />
                <button
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "5px 8px",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    fontFamily: "var(--font-ui)",
                    fontSize: "11px",
                    cursor: "default",
                    color: "var(--color-text)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "var(--color-highlight)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "";
                    e.currentTarget.style.color = "";
                  }}
                  onClick={() => window.open("https://github.com/chaitanyajain18", "_blank")}
                >
                  GitHub Profile
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="win2k-taskbar-divider" />

      {/* Open window buttons */}
      {[
        { label: "Portfolio.exe", id: "home" },
        { label: "Projects", id: "project" },
        { label: "Contact", id: "contact" },
      ].map((btn) => (
        <button
          key={btn.id}
          onClick={() => scrollTo(btn.id)}
          style={{
            background: "var(--color-window-bg)",
            borderTop: "2px solid var(--color-border-light)",
            borderLeft: "2px solid var(--color-border-light)",
            borderRight: "2px solid var(--color-border-darker)",
            borderBottom: "2px solid var(--color-border-darker)",
            boxShadow: "inset 1px 1px 0 #fff",
            fontFamily: "var(--font-ui)",
            fontSize: "11px",
            padding: "2px 8px",
            height: "22px",
            cursor: "default",
            minWidth: "90px",
            textAlign: "left",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "var(--color-button-hover)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "var(--color-window-bg)")}
        >
          {btn.label}
        </button>
      ))}

      {/* System tray */}
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <div className="win2k-taskbar-divider" />
        {/* Social icons in tray */}
        {[
          { href: "https://github.com/chaitanyajain18", label: "GH", title: "GitHub" },
          { href: "https://www.instagram.com/chaitanyajain_18/", label: "IG", title: "Instagram" },
          { href: "https://www.youtube.com/@chaitanyajain8037", label: "YT", title: "YouTube" },
        ].map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            title={s.title}
            style={{
              width: "18px",
              height: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-ui)",
              fontSize: "9px",
              fontWeight: "bold",
              color: "var(--color-text)",
              textDecoration: "none",
              background: "var(--color-window-bg)",
              borderTop: "1px solid var(--color-border-light)",
              borderLeft: "1px solid var(--color-border-light)",
              borderRight: "1px solid var(--color-border-darker)",
              borderBottom: "1px solid var(--color-border-darker)",
            }}
          >
            {s.label}
          </a>
        ))}
        <div className="win2k-taskbar-divider" />
        {/* Clock */}
        <div className="win2k-clock-panel">
          {time}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
