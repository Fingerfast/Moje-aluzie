// Produkty převzaté z malta-blinds.com (stejní dodavatelé).
// Texty jsou přeložené ze štítků na maltském webu. Obrázky se zatím načítají
// přímo z malta-blinds.com; po získání zdrojového kódu se zkopírují do /public.

export const SOURCE = "https://malta-blinds.com";

export type Group = "horizontalni" | "vertikalni";

export type Product = {
  slug: string;
  name: string;
  /** Původní název na maltském webu (název u dodavatele). */
  originalName: string;
  group: Group;
  tags: [string, string, string];
  /** Fotka produktu z přehledu produktů. */
  image: string;
  /** Obrázek typu z konfigurátoru. */
  typeImage: string;
  /** Zobrazit v přehledu produktů (Vertical Sheers je na Maltě jen v konfigurátoru). */
  inRange: boolean;
};

export const GROUP_LABEL: Record<Group, string> = {
  horizontalni: "Horizontální",
  vertikalni: "Vertikální",
};

export const products: Product[] = [
  {
    slug: "rimske-rolety",
    name: "Římské rolety",
    originalName: "Roman Blinds",
    group: "horizontalni",
    tags: ["Měkce skládaná látka", "Zatemňující nebo propouštějící světlo", "Elegantní interiéry"],
    image: `${SOURCE}/uploads/products/card-previews/roman-main.jpeg`,
    typeImage: `${SOURCE}/uploads/products/configurator-type-cards-v3/roman-blinds.png`,
    inRange: true,
  },
  {
    slug: "latkove-rolety",
    name: "Látkové rolety",
    originalName: "Roller Blinds",
    group: "horizontalni",
    tags: ["Minimalistický vzhled", "K dispozici i zatemňující", "Snadné soukromí na každý den"],
    image: `${SOURCE}/uploads/products/card-previews/roller-main.jpeg`,
    typeImage: `${SOURCE}/uploads/products/configurator-type-cards-v3/roller-blinds.png`,
    inRange: true,
  },
  {
    slug: "rolety-den-a-noc",
    name: "Rolety den a noc",
    originalName: "Zebra Blinds",
    group: "horizontalni",
    tags: ["Regulace den a noc", "Jemné denní světlo", "Moderní soukromí"],
    image: `${SOURCE}/uploads/products/card-previews/zebra-main.jpeg`,
    typeImage: `${SOURCE}/uploads/products/configurator-type-cards-v3/zebra-blinds.png`,
    inRange: true,
  },
  {
    slug: "zaluzie-venetien",
    name: "Žaluzie Venetien",
    originalName: "Venetien Blinds",
    group: "vertikalni",
    tags: ["Nastavitelné lamely", "Praktické soukromí", "Čisté linie"],
    image: `${SOURCE}/uploads/configurator/venetien-vertical/default.png`,
    typeImage: `${SOURCE}/uploads/products/configurator-type-cards-v3/venetien-blinds.png`,
    inRange: true,
  },
  {
    slug: "dream-rolety",
    name: "Dream rolety",
    originalName: "Dream Blinds",
    group: "vertikalni",
    tags: ["Velké otvory", "Svislý pohyb", "Výrazná okna"],
    image: `${SOURCE}/uploads/configurator/dream-blinds/ORIGINAL_dream_blinds.png`,
    typeImage: `${SOURCE}/uploads/products/configurator-type-cards-v3/dream-blinds.png`,
    inRange: true,
  },
  {
    slug: "zavesy",
    name: "Závěsy",
    originalName: "Curtains",
    group: "vertikalni",
    tags: ["Bytový textil", "Až po podlahu", "Klasické interiéry"],
    image: `${SOURCE}/uploads/configurator/curtains/320.01191.png`,
    typeImage: `${SOURCE}/uploads/configurator/curtains/320.01191.png`,
    inRange: true,
  },
  {
    slug: "vertikalni-zaclony",
    name: "Vertikální záclony",
    originalName: "Vertical Sheers",
    group: "vertikalni",
    tags: ["Jemná průsvitná látka", "Jemné denní světlo", "Široká okna a dveře"],
    image: `${SOURCE}/uploads/products/configurator-type-cards-v3/vertical-sheers.jpg`,
    typeImage: `${SOURCE}/uploads/products/configurator-type-cards-v3/vertical-sheers.jpg`,
    inRange: false,
  },
];

export const HERO_IMAGE = `${SOURCE}/uploads/home-carousel/01-zebra-blinds.jpeg`;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

/** Volby konfigurátoru podle maltského webu. Hodnoty se doplní ze zdrojového kódu. */
export const OPTION_GROUPS = [
  "Látka",
  "Regulace světla",
  "Motor",
  "Typ montáže",
  "Strana ovládání",
  "Barva",
] as const;
