"use client";
import { useEffect, useState } from "react";

type Tab = { id: string; label: string };

// Úzký panel pod horním menu (jen mobil): objeví se po odscrollování hlavičky
// a přepíná mezi skupinami produktů.
export default function GroupTabs({ tabs, triggerId }: { tabs: Tab[]; triggerId: string }) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(tabs[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      const trigger = document.getElementById(triggerId);
      if (trigger) setVisible(trigger.getBoundingClientRect().bottom < 72);
      let current = tabs[0]?.id;
      for (const t of tabs) {
        const el = document.getElementById(t.id);
        if (el && el.getBoundingClientRect().top < 72 + 48 + 40) current = t.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [tabs, triggerId]);

  return (
    <div className={visible ? "group-tabs show" : "group-tabs"} aria-hidden={!visible}>
      <div className="group-tabs-inner">
        {tabs.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            tabIndex={visible ? 0 : -1}
            className={t.id === active ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(t.id)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.label}
          </a>
        ))}
      </div>
    </div>
  );
}
