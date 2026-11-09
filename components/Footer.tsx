import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <div className="logo logo-light">{site.name}</div>
          <p className="muted-light">{site.description}</p>
        </div>
        <div>
          <h4>Stránky</h4>
          <ul>
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Kontakt</h4>
          <ul>
            <li>{site.seller}</li>
            <li>{site.address}</li>
            <li>IČO {site.ico} · DIČ {site.dic}</li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.phone}</li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>Výrobky na míru. Odhadované dodání do jednoho měsíce.</span>
        <span>© {new Date().getFullYear()} {site.name}</span>
      </div>
    </footer>
  );
}
