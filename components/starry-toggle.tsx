"use client";

import { useEffect, useState } from "react";
import { Moon, Sparkles } from "lucide-react";

const STORAGE_KEY = "starry-mode";

export default function StarryToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(document.documentElement.classList.contains("starry"));
  }, []);

  function toggle() {
    const next = !enabled;
    setEnabled(next);
    document.documentElement.classList.toggle("starry", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch {}
  }

  return (
    <button
      type="button"
      className="bn-starry-toggle"
      onClick={toggle}
      aria-pressed={enabled}
    >
      {enabled ? (
        <Moon size={13} aria-hidden="true" />
      ) : (
        <Sparkles size={13} aria-hidden="true" />
      )}
      Starry mode
    </button>
  );
}
