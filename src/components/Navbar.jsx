import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  if (hidden) return null;

  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    /* Outer system-level menu bar pinned at the top */
    <header
      style={{
        background: "var(--color-window-bg)",
        borderBottom: "2px solid var(--color-border-dark)",
        position: "sticky",
        top: 0,
        zIndex: 9998,
        boxShadow: "0 1px 0 var(--color-border-light)",
      }}
    >
      {/* Win2K-style title bar at the very top */}
      <div
        style={{
          background: "linear-gradient(to right, var(--color-titlebar-start), var(--color-titlebar-end))",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          height: "18px",
          padding: "0 6px",
          gap: "6px",
          fontSize: "11px",
          fontWeight: "bold",
          userSelect: "none",
        }}
      >
        {/* Tiny Windows flag icon (SVG) */}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <rect x="0" y="0" width="5" height="5" fill="#f25022" />
          <rect x="6" y="0" width="5" height="5" fill="#80ba01" />
          <rect x="0" y="6" width="5" height="5" fill="#02a4ef" />
          <rect x="6" y="6" width="5" height="5" fill="#ffb902" />
        </svg>
        <span>Chaitanya Jain – Portfolio</span>

        {/* Right-side clock */}
        <span style={{ marginLeft: "auto", fontWeight: "normal", fontSize: "10px" }}>
          {time}
        </span>
      </div>

      {/* Win2K menu bar row */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          height: "20px",
          padding: "0 4px",
          gap: "0",
          fontSize: "11px",
          fontFamily: "var(--font-ui)",
        }}
      >
        {[
          { label: "File", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Projects", href: "#project" },
          { label: "Contact", href: "#contact" },
          { label: "Help", href: "#" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="win2k-menu-item"
            style={{ textDecoration: "none" }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "var(--color-highlight)";
              e.currentTarget.style.color = "var(--color-highlight-text)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "";
              e.currentTarget.style.color = "";
            }}
          >
            <span style={{ textDecoration: "underline" }}>
              {item.label[0]}
            </span>
            {item.label.slice(1)}
          </a>
        ))}

        {/* Right-aligned status */}
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              color: "var(--color-text-muted)",
              borderTop: "1px solid var(--color-border-dark)",
              borderLeft: "1px solid var(--color-border-dark)",
              borderRight: "1px solid var(--color-border-light)",
              borderBottom: "1px solid var(--color-border-light)",
              padding: "1px 6px",
            }}
          >
            Ready
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
