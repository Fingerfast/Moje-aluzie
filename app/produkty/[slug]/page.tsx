import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { GROUP_LABEL, OPTION_GROUPS, getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: getProduct(slug)?.name ?? "Produkt" };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const related = products.filter((x) => x.group === p.group && x.slug !== p.slug).slice(0, 3);
  return (
    <>
      <section className="block">
        <div className="wrap">
          <nav className="crumbs"><Link href="/produkty/">Produkty</Link> / {p.name}</nav>
          <div className="detail">
            <div className="detail-media">
              <img src={p.image} alt={p.name} />
            </div>
            <div className="detail-copy">
              <p className="eyebrow">{GROUP_LABEL[p.group]}</p>
              <h1>{p.name}</h1>
              <ul className="tags big">
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <h3>Co si nastavíte</h3>
              <ul className="spec">
                <li>Rozměr v milimetrech</li>
                {OPTION_GROUPS.map((o) => <li key={o}>{o}</li>)}
                <li>Montáž</li>
              </ul>
              <div className="btn-row">
                <Link href="/#planovac" className="btn">Naplánovat {p.name.toLowerCase()}</Link>
                <Link href="/kontakt/#zamereni" className="btn btn-ghost">Zaměření zdarma</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="block block-tint">
          <div className="wrap">
            <div className="block-head"><h2>Mohlo by se vám líbit</h2></div>
            <div className="product-grid">
              {related.map((r) => <ProductCard key={r.slug} p={r} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
