"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href.replace(/\/$/, "")));
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark" aria-hidden>
            <i /><i /><i /><i />
          </span>
          {site.name}
        </Link>
        <button className="menu-toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav className={open ? "nav open" : "nav"}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={isActive(n.href) ? "active" : ""} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link href="/#planovac" className="btn btn-small" onClick={() => setOpen(false)}>
            Naplánovat
          </Link>
        </nav>
      </div>
    </header>
  );
}
