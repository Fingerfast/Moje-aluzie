"use client";
import { useState } from "react";
import { GROUP_LABEL, OPTION_GROUPS, products, type Group } from "@/lib/products";
import { site } from "@/lib/site";

const STEPS = ["Typ", "Rozměr", "Látka", "Volby", "Košík"];

type Item = {
  id: number;
  slug: string;
  room: string;
  width: number;
  height: number;
  install: boolean;
};

export default function Planner() {
  const [step, setStep] = useState(0);
  const [slug, setSlug] = useState<string | null>(null);
  const [room, setRoom] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [install, setInstall] = useState(true);
  const [items, setItems] = useState<Item[]>([]);
  const [measureSelf, setMeasureSelf] = useState(true);

  const product = products.find((p) => p.slug === slug);
  const sizeOk = Number(width) > 0 && Number(height) > 0;
  const canNext = [!!slug, sizeOk, true, true, items.length > 0][step];

  function addToBasket() {
    if (!slug || !sizeOk) return;
    setItems((prev) => [
      ...prev,
      { id: Date.now(), slug, room: room || `Okno ${prev.length + 1}`, width: Number(width), height: Number(height), install },
    ]);
    setStep(4);
  }

  function newWindow() {
    setSlug(null);
    setRoom("");
    setWidth("");
    setHeight("");
    setStep(0);
  }

  function next() {
    if (step === 3) return addToBasket();
    setStep((s) => Math.min(s + 1, 4));
  }

  const mailBody = encodeURIComponent(
    [
      `Způsob: ${measureSelf ? "Měřím sám (sleva 5 %)" : "Profesionální zaměření zdarma"}`,
      "",
      ...items.map((i, n) => {
        const p = products.find((x) => x.slug === i.slug)!;
        return `${n + 1}. ${i.room}: ${p.name}, ${i.width} × ${i.height} mm${i.install ? ", s montáží" : ""}`;
      }),
    ].join("\n"),
  );

  return (
    <div className="planner">
      <ol className="steps">
        {STEPS.map((s, i) => (
          <li key={s} className={i === step ? "current" : i < step ? "done" : ""}>
            <button type="button" onClick={() => (i <= step || (i === 4 && items.length) ? setStep(i) : null)}>
              <span className="num">{i + 1}</span>
              <span className="lbl">{s}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="planner-panel">
        {step === 0 && (
          <div>
            <h3>Vyberte typ stínění</h3>
            <p className="muted">
              Zvolte horizontální nebo vertikální typ. Rozměry, motor, stranu ovládání a barvu nastavíte v dalších krocích.
            </p>
            {(["horizontalni", "vertikalni"] as Group[]).map((g) => (
              <div key={g} className="type-group">
                <h4>{GROUP_LABEL[g]}</h4>
                <div className="type-grid">
                  {products
                    .filter((p) => p.group === g)
                    .map((p) => (
                      <button
                        type="button"
                        key={p.slug}
                        className={p.slug === slug ? "type-card selected" : "type-card"}
                        onClick={() => setSlug(p.slug)}
                        aria-pressed={p.slug === slug}
                      >
                        <img src={p.typeImage} alt="" loading="lazy" />
                        <strong>{p.name}</strong>
                        <small>{p.tags.join(" · ")}</small>
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="narrow">
            <h3>Zadejte přesný rozměr okna</h3>
            <p className="muted">Rozměry zadávejte v milimetrech. {product && <>Vybraný typ: <strong>{product.name}</strong>.</>}</p>
            <label className="field">
              <span>Místnost / označení okna</span>
              <input value={room} onChange={(e) => setRoom(e.target.value)} placeholder="např. Obývák vlevo" />
            </label>
            <div className="field-row">
              <label className="field">
                <span>Šířka (mm)</span>
                <input inputMode="numeric" value={width} onChange={(e) => setWidth(e.target.value.replace(/\D/g, ""))} placeholder="1200" />
              </label>
              <label className="field">
                <span>Výška (mm)</span>
                <input inputMode="numeric" value={height} onChange={(e) => setHeight(e.target.value.replace(/\D/g, ""))} placeholder="1500" />
              </label>
            </div>
            <label className="check">
              <input type="checkbox" checked={measureSelf} onChange={(e) => setMeasureSelf(e.target.checked)} />
              <span>Měřím sám a chci slevu 5 %</span>
            </label>
          </div>
        )}

        {step === 2 && (
          <div className="narrow">
            <h3>Vyberte látku</h3>
            <p className="muted">
              Nabídka látek bude stejná jako u našeho dodavatele. Vzorník doplníme z původního konfigurátoru.
            </p>
            <div className="placeholder-box">Vzorník látek pro {product?.name ?? "vybraný typ"}</div>
          </div>
        )}

        {step === 3 && (
          <div className="narrow">
            <h3>Další volby</h3>
            <div className="option-list">
              {OPTION_GROUPS.slice(1).map((o) => (
                <label key={o} className="field">
                  <span>{o}</span>
                  <select disabled>
                    <option>Doplníme z konfigurátoru dodavatele</option>
                  </select>
                </label>
              ))}
            </div>
            <label className="check">
              <input type="checkbox" checked={install} onChange={(e) => setInstall(e.target.checked)} />
              <span>Chci montáž (cena za kus)</span>
            </label>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3>Košík</h3>
            {items.length === 0 ? (
              <p className="muted">Košík je prázdný.</p>
            ) : (
              <ul className="basket">
                {items.map((i) => {
                  const p = products.find((x) => x.slug === i.slug)!;
                  return (
                    <li key={i.id}>
                      <img src={p.typeImage} alt="" />
                      <div>
                        <strong>{i.room}</strong>
                        <span>
                          {p.name} · {i.width} × {i.height} mm{i.install ? " · s montáží" : ""}
                        </span>
                      </div>
                      <button type="button" className="remove" onClick={() => setItems(items.filter((x) => x.id !== i.id))} aria-label="Odebrat">
                        ×
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
            <div className="basket-actions">
              <button type="button" className="btn btn-ghost" onClick={newWindow}>
                + Přidat další okno
              </button>
              {items.length > 0 && (
                <a className="btn" href={`mailto:${site.email}?subject=Poptávka stínění&body=${mailBody}`}>
                  Odeslat poptávku
                </a>
              )}
            </div>
            <p className="muted small">Všechna okna objednáte najednou v jedné objednávce. Dodání do jednoho měsíce po zaplacení.</p>
          </div>
        )}
      </div>

      {step < 4 && (
        <div className="planner-nav">
          <button type="button" className="btn btn-ghost" disabled={step === 0} onClick={() => setStep(step - 1)}>
            Zpět
          </button>
          <button type="button" className="btn" disabled={!canNext} onClick={next}>
            {step === 3 ? "Přidat do košíku" : "Pokračovat"}
          </button>
        </div>
      )}
    </div>
  );
}
