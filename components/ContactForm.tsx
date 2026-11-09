"use client";
import { useState } from "react";

export default function ContactForm({ email }: { email: string }) {
  const [f, setF] = useState({ name: "", phone: "", city: "", msg: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });
  const body = encodeURIComponent(`Jméno: ${f.name}\nTelefon: ${f.phone}\nMěsto: ${f.city}\n\n${f.msg}`);
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${email}?subject=Zaměření zdarma&body=${body}`;
      }}
    >
      <label className="field"><span>Jméno a příjmení</span><input required value={f.name} onChange={set("name")} /></label>
      <div className="field-row">
        <label className="field"><span>Telefon</span><input required type="tel" value={f.phone} onChange={set("phone")} /></label>
        <label className="field"><span>Město</span><input value={f.city} onChange={set("city")} /></label>
      </div>
      <label className="field"><span>Zpráva</span><textarea rows={4} value={f.msg} onChange={set("msg")} placeholder="Kolik oken a jaký typ stínění vás zajímá?" /></label>
      <button className="btn" type="submit">Odeslat</button>
    </form>
  );
}
