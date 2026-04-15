import { useState } from "react";

/**
 * Win2KWindow – renders a classic Windows 2000 window chrome
 * 
 * Props:
 *  title       – window title bar text
 *  icon        – optional <img src> string for the 16×16 icon
 *  children    – window content
 *  className   – extra class on the outer wrapper
 *  defaultOpen – whether the window starts open (default true)
 *  id          – pass-through for anchor scrolling
 */
const Win2KWindow = ({ title, icon, children, className = "", defaultOpen = true, id }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [minimized, setMinimized] = useState(false);

  return (
    <div className={`win2k-window ${className}`} id={id}>
      {/* Title Bar */}
      <div className="win2k-titlebar select-none">
        {icon && <img src={icon} alt="" className="win2k-titlebar-icon" />}
        <span className="flex-1 text-xs font-bold truncate">{title}</span>
        {/* Control buttons */}
        <div className="flex gap-px ml-2">
          <button
            className="win2k-titlebar-btn"
            onClick={() => setMinimized(!minimized)}
            title={minimized ? "Restore" : "Minimize"}
          >
            {minimized ? "▲" : "_"}
          </button>
          <button className="win2k-titlebar-btn" title="Maximize">□</button>
          <button
            className="win2k-titlebar-btn"
            onClick={() => setOpen(false)}
            title="Close"
            style={{ fontWeight: "bold" }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Menu bar (optional slot, rendered via children with data-role="menubar") */}

      {/* Content area */}
      {open && !minimized && (
        <div className="p-2" style={{ background: "var(--color-window-face)" }}>
          {children}
        </div>
      )}

      {/* Minimized stub */}
      {open && minimized && (
        <div
          style={{
            background: "var(--color-window-face)",
            padding: "2px 6px",
            fontSize: "11px",
            color: "var(--color-text-muted)",
            fontStyle: "italic",
          }}
        >
          (minimized – click restore to expand)
        </div>
      )}

      {/* Closed stub */}
      {!open && (
        <div
          style={{
            background: "var(--color-window-face)",
            padding: "6px",
            textAlign: "center",
          }}
        >
          <button
            className="win2k-btn"
            onClick={() => { setOpen(true); setMinimized(false); }}
          >
            Reopen Window
          </button>
        </div>
      )}
    </div>
  );
};

export default Win2KWindow;
