import Link from "next/link";
import Hero from "@/components/Hero";
import Planner from "@/components/Planner";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { faq, howSteps, orderWays, otherTabs } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* 1. Úvod */}
      <Hero />

      {/* 2. Jak to funguje */}
      <section className="block">
        <div className="wrap">
          <div className="block-head">
            <p className="eyebrow">Jak to funguje</p>
            <h2>Jednoduchá online objednávka pro skutečně změřená okna</h2>
            <p className="muted">Vyberete stínění, zadáte rozměry oken a látku, objednáte a zaplatíte online. Dodání do jednoho měsíce.</p>
          </div>
          <ol className="how">
            {howSteps.map((s, i) => (
              <li key={s.title}>
                <span className="how-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. Dva způsoby objednání */}
      <section className="block block-tint">
        <div className="wrap">
          <div className="block-head center">
            <h2>Dva způsoby objednání. Stejně skvělá kvalita.</h2>
            <p className="muted">Vyberte si možnost, která vám vyhovuje.</p>
          </div>
          <div className="ways">
            {orderWays.map((w) => (
              <div key={w.title} className={w.featured ? "way featured" : "way"}>
                <span className="way-badge">{w.badge}</span>
                <h3>{w.title}</h3>
                <ul className="checks">
                  {w.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <Link href={w.href} className={w.featured ? "btn" : "btn btn-ghost"}>{w.cta}</Link>
              </div>
            ))}
          </div>
          <p className="center small"><Link href="/kontakt/" className="link-arrow">Potřebujete poradit s měřením?</Link></p>
        </div>
      </section>

      {/* 4. Plánovač */}
      <section className="block" id="planovac">
        <div className="wrap">
          <div className="block-head">
            <p className="eyebrow">Plánovač</p>
            <h2>Naplánujte si stínění</h2>
          </div>
          <Planner />
        </div>
      </section>

      {/* 5. Výběr produktů */}
      <section className="block block-tint">
        <div className="wrap">
          <div className="block-head split">
            <div>
              <p className="eyebrow">Vybraný sortiment</p>
              <h2>Stínění, které vypadá hotově ještě před odesláním nabídky</h2>
            </div>
            <p className="muted">Projděte hlavní typy stínění, porovnejte styly látek a pak pokračujte do plánovače a změřte okno.</p>
          </div>
          <div className="product-grid">
            {products.filter((p) => p.inRange).map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
          <p className="center"><Link href="/produkty/" className="btn btn-ghost">Všechny produkty</Link></p>
        </div>
      </section>

      {/* 6. Další produkty */}
      <section className="block">
        <div className="wrap">
          <div className="callout">
            <div>
              <h2>Nenašli jste, co hledáte?</h2>
              <p>Další druhy stínění, látky, systémy i motorové ovládání vám ověříme na vyžádání.</p>
              <ul className="pill-row">
                {otherTabs.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <Link href={site.whatsapp || "/kontakt/"} className="btn btn-light">Zeptejte se nás</Link>
          </div>
        </div>
      </section>

      {/* 7. Před objednávkou */}
      <section className="block block-tint">
        <div className="wrap faq-grid">
          <div className="block-head">
            <p className="eyebrow">Před objednávkou</p>
            <h2>Jasná cena, online platba a dodání do jednoho měsíce</h2>
          </div>
          <div className="faq">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
