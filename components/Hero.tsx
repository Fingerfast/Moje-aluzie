import Link from "next/link";

// Výhled z okna: Drnholec a Pavlovské vrchy (Pálava), pohled z rozhledny U křížku.
// Autor: Pudelek (Marcin Szala), Wikimedia Commons, licence CC BY-SA 3.0.
// Zmenšeno na šířku 2560 px. Uvedení autora a licence je podmínkou licence.
import { PALAVA } from "@/lib/credits";

export default function Hero() {
  return (
    <section className="hero-xl">
      <div className="hero-view" aria-hidden>
        {/* Záložní kresba Pálavy, kdyby se fotka nenačetla */}
        <svg className="hero-fallback" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#9cc3dd" />
              <stop offset=".65" stopColor="#f3dfc1" />
            </linearGradient>
          </defs>
          <rect width="1600" height="900" fill="url(#sky)" />
          <path d="M0 640 L180 600 L300 560 L380 470 L430 430 L470 455 L520 420 L560 440 L640 520 L760 560 L860 510 L930 470 L980 490 L1040 545 L1180 580 L1320 560 L1600 600 V900 H0Z" fill="#7d8f86" />
          <path d="M0 700 C300 660 520 690 800 670 C1100 650 1350 690 1600 660 V900 H0Z" fill="#7f9b5b" />
          <path d="M0 780 C400 740 800 770 1600 740 V900 H0Z" fill="#5d7a3f" />
          {Array.from({ length: 22 }).map((_, i) => (
            <path key={i} d={`M${-40 + i * 80} 900 L${200 + i * 70} 760`} stroke="#4a6533" strokeWidth="3" opacity=".45" />
          ))}
        </svg>
        <img className="hero-photo" src={PALAVA.src} alt="" />
      </div>

      {/* Zebra roleta stažená do poloviny okna */}
      <div className="hero-blind" aria-hidden>
        <div className="blind-fabric" />
        <div className="blind-rail" />
      </div>

      {/* Rám okna */}
      <div className="hero-frame" aria-hidden>
        <span className="mullion" />
        <span className="sill" />
      </div>

      <div className="wrap hero-content">
        <div className="hero-card">
          <p className="eyebrow">Vyrobeno na míru</p>
          <h1>Rolety, žaluzie a závěsy přesně na vaše okna</h1>
          <p className="lead">Přehledný online plánovač. Zadáte rozměry, vyberete látku a objednáte bez čekání na nabídku.</p>
          <div className="btn-row">
            <Link href="#planovac" className="btn">Začít plánovat</Link>
            <Link href="/produkty/" className="btn btn-ghost">Zobrazit typy stínění</Link>
          </div>
          <p className="hero-save"><strong>−5 %</strong> když si okna změříte sami</p>
        </div>
      </div>

      <p className="hero-credit">
        Foto: <a href={PALAVA.page} target="_blank" rel="noreferrer">{PALAVA.author}</a>,{" "}
        <a href={PALAVA.licenseUrl} target="_blank" rel="noreferrer">{PALAVA.license}</a>, upraveno
      </p>
    </section>
  );
}
