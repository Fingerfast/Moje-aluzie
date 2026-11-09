import Link from "next/link";
import { GROUP_LABEL, type Product } from "@/lib/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/produkty/${p.slug}/`} className="product-card">
      <div className="product-img">
        <img src={p.image} alt={p.name} loading="lazy" />
        <span className="chip">{GROUP_LABEL[p.group]}</span>
      </div>
      <div className="product-body">
        <h3>{p.name}</h3>
        <ul className="tags">
          {p.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <span className="link-arrow">Detail produktu</span>
      </div>
    </Link>
  );
}
