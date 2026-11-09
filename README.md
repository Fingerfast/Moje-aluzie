# Moje žaluzie

Český web pro stínění na míru (rolety, žaluzie, závěsy). Produkty a dodavatelé jsou stejní jako u malta-blinds.com.

- Next.js 15, statický export (`output: "export"`), nasaditelné na Vercel bez nastavení.
- Stránky: Úvod (hero s výhledem na Pálavu, jak to funguje, dva způsoby objednání, plánovač, produkty, FAQ), Produkty, detail produktu, Kontakt.

## Spuštění

```bash
npm install
npm run dev
```

## Co doplnit

- `lib/site.ts`: firemní údaje (hodnoty v hranatých závorkách).
- `lib/products.ts`: data konfigurátoru (látky, barvy, motory, limity rozměrů, ceny) z maltského zdrojového kódu.
- Obrázky se zatím načítají z malta-blinds.com a fotka Pálavy z Wikimedia Commons. Před spuštěním je stáhnout do `public/` a u Pálavy ověřit licenci a autora.
