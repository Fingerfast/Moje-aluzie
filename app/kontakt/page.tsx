import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Kontakt" };

export default function ContactPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow">Kontakt</p>
          <h1>Ozvěte se nám</h1>
          <p className="lead">Poradíme s výběrem, s měřením i s montáží. Zaměření u vás doma je zdarma.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap contact-grid">
          <div className="contact-cards">
            <div className="contact-card">
              <h3>E-mail</h3>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="contact-card">
              <h3>Telefon</h3>
              <span>{site.phone}</span>
            </div>
            <div className="contact-card">
              <h3>Showroom</h3>
              <span>{site.address}</span>
              <span className="muted small">{site.hours}</span>
            </div>
            <div className="contact-card">
              <h3>Fakturační údaje</h3>
              <span>{site.seller}</span>
              <span className="muted small">IČO {site.ico} · DIČ {site.dic}</span>
            </div>
          </div>
          <div id="zamereni" className="form-card">
            <h2>Objednat zaměření zdarma</h2>
            <p className="muted">Ozveme se vám a domluvíme termín. Po zaměření pošleme cenovou nabídku a objednávku schválíte před zaplacením.</p>
            <ContactForm email={site.email} />
          </div>
        </div>
      </section>
    </>
  );
}
