import type { Metadata } from "next";
import Link from "next/link";
import GroupTabs from "@/components/GroupTabs";
import ProductCard from "@/components/ProductCard";
import { GROUP_LABEL, products, type Group } from "@/lib/products";

export const metadata: Metadata = { title: "Produkty" };

export default function ProductsPage() {
  return (
    <>
      <GroupTabs
        triggerId="produkty-head"
        tabs={(["horizontalni", "vertikalni"] as Group[]).map((g) => ({ id: g, label: GROUP_LABEL[g] }))}
      />
      <section className="page-head" id="produkty-head">
        <div className="wrap">
          <p className="eyebrow">Produkty</p>
          <h1>Stínění na míru</h1>
          <p className="lead">Horizontální i vertikální typy stínění od ověřených dodavatelů. Každý kus vyrábíme přesně podle rozměrů vašeho okna.</p>
        </div>
      </section>
      {(["horizontalni", "vertikalni"] as Group[]).map((g, i) => (
        <section key={g} id={g} className={i % 2 ? "block block-tint group-section" : "block group-section"}>
          <div className="wrap">
            <div className="block-head">
              <h2>{GROUP_LABEL[g]}</h2>
            </div>
            <div className="product-grid">
              {products.filter((p) => p.group === g).map((p) => <ProductCard key={p.slug} p={p} />)}
            </div>
          </div>
        </section>
      ))}
      <section className="block">
        <div className="wrap">
          <div className="callout">
            <div>
              <h2>Další možnosti na vyžádání</h2>
              <p>Další druhy stínění, látky, systémy i motorové ovládání vám ověříme na vyžádání.</p>
            </div>
            <Link href="/kontakt/" className="btn btn-light">Kontaktujte nás</Link>
          </div>
        </div>
      </section>
    </>
  );
}
