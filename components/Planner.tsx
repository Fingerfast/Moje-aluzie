"use client";
import { useMemo, useState } from "react";
import { GROUP_LABEL, products, type Group } from "@/lib/products";
import { catalog, type BlindSystem, type LightControl, type Limits, type PlannerProduct } from "@/lib/catalog";
import { site } from "@/lib/site";

const STEPS = ["Typ", "Rozměr", "Látka", "Volby", "Košík"];

type Mount = "inside" | "outside";
type Opening = "single" | "dual";
type Light = Exclude<LightControl, "">;

const LIGHT_LABEL: Record<Light, string> = {
  "semi-transparent": "Propouštějící světlo",
  blackout: "Zatemňující",
};

type Item = {
  id: number;
  slug: string;
  room: string;
  width: number;
  height: number;
  mount: Mount;
  opening: Opening | null;
  systemName: string;
  fabric: string;
  motor: string | null;
  side: "left" | "right";
  install: boolean;
  image: string;
};

/** Stejný výběr systému jako na malta-blinds.com: podle motoru a regulace světla. */
function pickSystem(cp: PlannerProduct, motor: boolean, light: Light): BlindSystem {
  const control = motor ? "motor" : "manual";
  return (
    cp.systems.find((s) => s.control === control && s.lightControl === light) ??
    cp.systems.find((s) => s.control === control) ??
    cp.systems.find((s) => s.lightControl === light) ??
    cp.systems[0]
  );
}

function limitsFor(s: BlindSystem, opening: Opening): Limits {
  const o = s.openingLimits?.[opening];
  return {
    minWidthMm: o?.minWidthMm ?? s.limits.minWidthMm,
    maxWidthMm: o?.maxWidthMm ?? s.limits.maxWidthMm,
    minHeightMm: o?.minHeightMm ?? s.limits.minHeightMm,
    maxHeightMm: o?.maxHeightMm ?? s.limits.maxHeightMm,
    maxAreaM2: o?.maxAreaM2 ?? s.limits.maxAreaM2,
    maxLoadKg: s.limits.maxLoadKg,
  };
}

function sizeErrors(l: Limits, w: number, h: number): string[] {
  const e: string[] = [];
  if (l.minWidthMm != null && w < l.minWidthMm) e.push(`Minimální šířka je ${l.minWidthMm} mm.`);
  if (l.maxWidthMm != null && w > l.maxWidthMm) e.push(`Maximální šířka je ${l.maxWidthMm} mm.`);
  if (l.minHeightMm != null && h < l.minHeightMm) e.push(`Minimální výška je ${l.minHeightMm} mm.`);
  if (l.maxHeightMm != null && h > l.maxHeightMm) e.push(`Maximální výška je ${l.maxHeightMm} mm.`);
  if (l.maxAreaM2 != null && (w * h) / 1e6 > l.maxAreaM2) e.push(`Maximální plocha je ${fmt(l.maxAreaM2)} m².`);
  return e;
}

const fmt = (n: number) => n.toLocaleString("cs-CZ", { maximumFractionDigits: 2 });

function lightsOf(cp: PlannerProduct): Light[] {
  return (["semi-transparent", "blackout"] as Light[]).filter((l) => cp.colors.some((c) => c.lightControl === l));
}

export default function Planner() {
  const [step, setStep] = useState(0);
  const [slug, setSlug] = useState<string | null>(null);
  const [room, setRoom] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [mount, setMount] = useState<Mount>("inside");
  const [opening, setOpening] = useState<Opening>("single");
  const [light, setLight] = useState<Light>("semi-transparent");
  const [fabricCode, setFabricCode] = useState<string | null>(null);
  const [motor, setMotor] = useState(false);
  const [side, setSide] = useState<"left" | "right">("right");
  const [install, setInstall] = useState(true);
  const [items, setItems] = useState<Item[]>([]);
  const [measureSelf, setMeasureSelf] = useState(true);

  const product = products.find((p) => p.slug === slug);
  const cp = catalog.find((c) => c.slug === slug);
  const system = cp ? pickSystem(cp, motor, light) : null;
  const limits = system ? limitsFor(system, opening) : null;
  const hasOpening = !!system?.openingLimits;
  const motorAvailable = !!cp?.supportsMotor;
  const motorInfo = motor && cp ? cp.motors[0] : undefined;

  const fabrics = useMemo(
    () =>
      (cp?.colors ?? [])
        .filter((c) => c.lightControl === light)
        .sort((a, b) => (a.sortPrice ?? Infinity) - (b.sortPrice ?? Infinity)),
    [cp, light],
  );
  const fabric = fabrics.find((f) => f.code === fabricCode) ?? fabrics[0];

  const w = Number(width);
  const h = Number(height);
  const sizeFilled = w > 0 && h > 0;
  const errors = sizeFilled && limits ? sizeErrors(limits, w, h) : [];
  const sizeOk = sizeFilled && errors.length === 0;
  const canNext = [!!slug, sizeOk, !!fabric || (cp?.colors.length ?? 0) === 0, sizeOk, items.length > 0][step];

  function chooseType(s: string) {
    const c = catalog.find((x) => x.slug === s);
    setSlug(s);
    setMotor(false);
    setOpening("single");
    if (c) {
      const ls = lightsOf(c);
      const first = c.systems[0]?.lightControl;
      setLight(first && ls.includes(first as Light) ? (first as Light) : ls[0] ?? "semi-transparent");
    }
    setFabricCode(null);
  }

  function addToBasket() {
    if (!slug || !sizeOk || !product || !system) return;
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        slug,
        room: room || `Okno ${prev.length + 1}`,
        width: w,
        height: h,
        mount,
        opening: hasOpening ? opening : null,
        systemName: system.name,
        fabric: fabric ? `${fabric.name} (${fabric.code})` : "bez látky",
        motor: motorInfo ? motorInfo.name : null,
        side,
        install,
        image: fabric?.preview ?? fabric?.image ?? product.typeImage,
      },
    ]);
    setStep(4);
  }

  function newWindow() {
    setSlug(null);
    setRoom("");
    setWidth("");
    setHeight("");
    setFabricCode(null);
    setMotor(false);
    setStep(0);
  }

  function next() {
    if (step === 3) return addToBasket();
    setStep((s) => Math.min(s + 1, 4));
  }

  const itemLine = (i: Item) => {
    const p = products.find((x) => x.slug === i.slug)!;
    return [
      `${p.name}, ${i.width} × ${i.height} mm`,
      i.mount === "inside" ? "montáž do rámu" : "montáž přes rám",
      i.opening ? (i.opening === "single" ? "jednostranné otevírání" : "oboustranné otevírání") : null,
      i.systemName,
      `látka ${i.fabric}`,
      i.motor ? `motor: ${i.motor}` : "ruční ovládání",
      `ovládání ${i.side === "left" ? "vlevo" : "vpravo"}`,
      i.install ? "s montáží" : null,
    ]
      .filter(Boolean)
      .join(", ");
  };

  const mailBody = encodeURIComponent(
    [
      `Způsob: ${measureSelf ? "Měřím sám (sleva 5 %)" : "Profesionální zaměření zdarma"}`,
      "",
      ...items.map((i, n) => `${n + 1}. ${i.room}: ${itemLine(i)}`),
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
                        onClick={() => chooseType(p.slug)}
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

            <div className="opt-group">
              <span className="opt-label">Typ montáže</span>
              <div className="seg">
                <button type="button" className={mount === "inside" ? "on" : ""} onClick={() => setMount("inside")}>Do rámu</button>
                <button type="button" className={mount === "outside" ? "on" : ""} onClick={() => setMount("outside")}>Přes rám</button>
              </div>
              <p className="muted small">
                {mount === "inside"
                  ? "Do rámu: změřte přesný otvor uvnitř rámu, aby stínění zakrylo sklo."
                  : "Přes rám: změřte výsledné zakrytí přes rám včetně požadovaného přesahu na zeď."}
              </p>
            </div>

            {hasOpening && (
              <div className="opt-group">
                <span className="opt-label">Otevírání</span>
                <div className="seg">
                  <button type="button" className={opening === "single" ? "on" : ""} onClick={() => setOpening("single")}>Jednostranné</button>
                  <button type="button" className={opening === "dual" ? "on" : ""} onClick={() => setOpening("dual")}>Oboustranné</button>
                </div>
                <p className="muted small">
                  {opening === "single"
                    ? "Jednostranné otevírání má menší limity podle katalogu dodavatele."
                    : "Oboustranné otevírání má širší limity podle katalogu dodavatele."}
                </p>
              </div>
            )}

            {limits && <LimitsBox limits={limits} />}
            {errors.length > 0 && (
              <ul className="form-errors">
                {errors.map((e) => <li key={e}>{e}</li>)}
              </ul>
            )}

            <label className="check">
              <input type="checkbox" checked={measureSelf} onChange={(e) => setMeasureSelf(e.target.checked)} />
              <span>Měřím sám a chci slevu 5 %</span>
            </label>
          </div>
        )}

        {step === 2 && cp && (
          <div>
            <h3>Vyberte látku</h3>
            <p className="muted">
              Vyberte ze vzorníku pro tento typ. Zatemňující látky dávají víc soukromí, látky propouštějící světlo denní světlo zjemní.
            </p>
            {lightsOf(cp).length > 1 && (
              <div className="seg" role="tablist" aria-label="Regulace světla">
                {lightsOf(cp).map((l) => (
                  <button type="button" key={l} className={light === l ? "on" : ""} onClick={() => { setLight(l); setFabricCode(null); }}>
                    {LIGHT_LABEL[l]}
                  </button>
                ))}
              </div>
            )}
            {fabrics.length === 0 ? (
              <p className="muted">Pro tento typ zatím nejsou k dispozici žádné látky.</p>
            ) : (
              <div className="fabric-layout">
                <div className="swatches">
                  {fabrics.map((f) => (
                    <button
                      type="button"
                      key={f.code}
                      className={f.code === fabric?.code ? "swatch selected" : "swatch"}
                      onClick={() => setFabricCode(f.code)}
                      aria-pressed={f.code === fabric?.code}
                      title={`${f.name} (${f.code})`}
                    >
                      {f.image ? <img src={f.image} alt="" loading="lazy" /> : <span className="swatch-color" style={{ background: f.hex }} />}
                      <span className="swatch-name">{f.name}</span>
                      <span className="swatch-code">{f.code}</span>
                    </button>
                  ))}
                </div>
                {fabric && (
                  <aside className="fabric-preview">
                    <img src={fabric.preview ?? fabric.image ?? product?.typeImage} alt={`${product?.name}, látka ${fabric.name}`} />
                    <p>
                      <strong>{fabric.name}</strong> · {fabric.code}
                      <br />
                      <span className="muted small">{LIGHT_LABEL[light]}</span>
                    </p>
                    {fabric.preview && (
                      <p className="muted small">Náhled je ilustrační a pomáhá představit si látku v místnosti. Nejde o přesnou fotografii výrobku.</p>
                    )}
                  </aside>
                )}
              </div>
            )}
          </div>
        )}

        {step === 3 && cp && system && (
          <div className="narrow">
            <h3>Ovládání a montáž</h3>
            <div className="opt-group">
              <span className="opt-label">Motor</span>
              <div className="seg">
                <button type="button" className={!motor ? "on" : ""} onClick={() => setMotor(false)}>Ruční ovládání</button>
                <button type="button" className={motor ? "on" : ""} disabled={!motorAvailable} onClick={() => setMotor(true)}>
                  S motorem
                </button>
              </div>
              {!motorAvailable && <p className="muted small">Tento typ se dodává jen s ručním ovládáním.</p>}
            </div>

            {motorInfo && (
              <div className="motor-box">
                {motorInfo.images[0] && <img src={motorInfo.images[0]} alt={motorInfo.name} />}
                <div>
                  <strong>{motorInfo.name}</strong>
                  <ul className="spec small">
                    {motorInfo.voltage && <li>Napětí {motorInfo.voltage}</li>}
                    {motorInfo.current && <li>Proud {motorInfo.current}</li>}
                    {motorInfo.torqueNm != null && <li>Krouticí moment {fmt(motorInfo.torqueNm)} Nm</li>}
                    {motorInfo.speedRpm != null && <li>Otáčky {motorInfo.speedRpm} ot./min</li>}
                    {motorInfo.powerW != null && <li>Jmenovitý výkon {motorInfo.powerW} W</li>}
                    {motorInfo.frequencyMhz != null && <li>Frekvence ovladače {fmt(motorInfo.frequencyMhz)} MHz</li>}
                    {motorInfo.dimensions && <li>Rozměry {motorInfo.dimensions}</li>}
                  </ul>
                </div>
              </div>
            )}

            <div className="opt-group">
              <span className="opt-label">Strana ovládání</span>
              <div className="seg">
                <button type="button" className={side === "left" ? "on" : ""} onClick={() => setSide("left")}>Vlevo</button>
                <button type="button" className={side === "right" ? "on" : ""} onClick={() => setSide("right")}>Vpravo</button>
              </div>
            </div>

            <div className="system-box">
              {system.images[0] && <img src={system.images[0]} alt={system.name} loading="lazy" />}
              <div>
                <span className="opt-label">Vybraný systém</span>
                <strong>{system.name}</strong>
                {limits && <LimitsBox limits={limits} />}
              </div>
            </div>
            {errors.length > 0 && (
              <ul className="form-errors">
                {errors.map((e) => <li key={e}>{e}</li>)}
                <li>Upravte rozměr v kroku 2.</li>
              </ul>
            )}

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
                {items.map((i) => (
                  <li key={i.id}>
                    <img src={i.image} alt="" />
                    <div>
                      <strong>{i.room}</strong>
                      <span>{itemLine(i)}</span>
                    </div>
                    <button type="button" className="remove" onClick={() => setItems(items.filter((x) => x.id !== i.id))} aria-label="Odebrat">
                      ×
                    </button>
                  </li>
                ))}
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

function LimitsBox({ limits }: { limits: Limits }) {
  const rows: [string, string][] = [];
  if (limits.minWidthMm != null) rows.push(["min. šířka", `${limits.minWidthMm} mm`]);
  if (limits.maxWidthMm != null) rows.push(["max. šířka", `${limits.maxWidthMm} mm`]);
  if (limits.minHeightMm != null) rows.push(["min. výška", `${limits.minHeightMm} mm`]);
  if (limits.maxHeightMm != null) rows.push(["max. výška", `${limits.maxHeightMm} mm`]);
  if (limits.maxAreaM2 != null) rows.push(["max. plocha", `${fmt(limits.maxAreaM2)} m²`]);
  if (limits.maxLoadKg != null) rows.push(["max. zatížení", `${fmt(limits.maxLoadKg)} kg`]);
  if (!rows.length) return null;
  return (
    <div className="limits">
      <p className="limits-title">Limity systému</p>
      <dl>
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
