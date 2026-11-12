// Data plánovače převzatá 1:1 z konfigurátoru malta-blinds.com (stejný dodavatel).
// Vygenerováno skriptem z dat, která maltský web posílá do konfigurátoru.
// Rozměry jsou převedené z cm na mm (minimum zaokrouhleno nahoru, maximum dolů), názvy látek a systémů jsou přeložené,
// původní názvy dodavatele jsou v polích supplierName. Nic neupravujte ručně
// bez kontroly proti zdroji.

export type LightControl = "semi-transparent" | "blackout" | "";
export type Limits = {
  minWidthMm: number | null;
  maxWidthMm: number | null;
  minHeightMm: number | null;
  maxHeightMm: number | null;
  maxAreaM2: number | null;
  maxLoadKg: number | null;
};
export type BlindSystem = {
  id: string;
  name: string;
  supplierName: string;
  control: "manual" | "motor";
  lightControl: LightControl;
  limits: Limits;
  openingLimits: { single: Limits; dual: Limits } | null;
  images: string[];
};
export type Fabric = {
  code: string;
  name: string;
  supplierName: string;
  hex: string;
  lightControl: LightControl;
  /** Pořadí jako na Maltě (podle ceny), cena se nezobrazuje. */
  sortPrice: number | null;
  image: string | null;
  preview: string | null;
};
export type Motor = {
  id: string;
  code: string;
  name: string;
  supplierName: string;
  voltage: string | null;
  current: string | null;
  torqueNm: number | null;
  speedRpm: number | null;
  powerW: number | null;
  frequencyMhz: number | null;
  dimensions: string | null;
  images: string[];
};
export type PlannerProduct = {
  slug: string;
  maltaId: string;
  supportsMotor: boolean;
  systems: BlindSystem[];
  motors: Motor[];
  colors: Fabric[];
};

export const catalog: PlannerProduct[] = [
  {
    "slug": "latkove-rolety",
    "maltaId": "roller-blinds",
    "supportsMotor": true,
    "systems": [
      {
        "id": "manual_38mm_square_cassete",
        "name": "Ruční ovládání, čtvercová kazeta, hřídel 38 mm",
        "supplierName": "Manual 38mm square cassete",
        "control": "manual",
        "lightControl": "semi-transparent",
        "limits": {
          "minWidthMm": 301,
          "maxWidthMm": 2499,
          "minHeightMm": null,
          "maxHeightMm": null,
          "maxAreaM2": 5,
          "maxLoadKg": 6.5
        },
        "openingLimits": null,
        "images": [
          "/uploads/blind-systems/manual-38mm-square-cassete/01-product-show.jpg",
          "/uploads/blind-systems/manual-38mm-square-cassete/02-brackets.jpg",
          "/uploads/blind-systems/manual-38mm-square-cassete/03-square-cassette.jpg",
          "/uploads/blind-systems/manual-38mm-square-cassete/04-38mm-tube.jpg",
          "/uploads/blind-systems/manual-38mm-square-cassete/05-bead-chain-pendant.jpg",
          "/uploads/blind-systems/manual-38mm-square-cassete/06-fabric-detail.jpg",
          "/uploads/blind-systems/manual-38mm-square-cassete/07-bottom-rail.jpg"
        ]
      },
      {
        "id": "manual_38mm_square_cassette_motorized",
        "name": "Motorové ovládání, čtvercová kazeta, hřídel 38 mm",
        "supplierName": "38mm tube square cassette motorized roller blinds",
        "control": "motor",
        "lightControl": "semi-transparent",
        "limits": {
          "minWidthMm": 301,
          "maxWidthMm": 2499,
          "minHeightMm": null,
          "maxHeightMm": null,
          "maxAreaM2": 5,
          "maxLoadKg": 6.5
        },
        "openingLimits": null,
        "images": [
          "/uploads/blind-systems/manual-38mm-square-cassette-motorized/01-product-show.jpg",
          "/uploads/blind-systems/manual-38mm-square-cassette-motorized/02-brackets.jpg",
          "/uploads/blind-systems/manual-38mm-square-cassette-motorized/03-square-cassette.jpg",
          "/uploads/blind-systems/manual-38mm-square-cassette-motorized/04-38mm-tube.jpg",
          "/uploads/blind-systems/manual-38mm-square-cassette-motorized/05-motor.jpg",
          "/uploads/blind-systems/manual-38mm-square-cassette-motorized/06-fabric-detail.jpg",
          "/uploads/blind-systems/manual-38mm-square-cassette-motorized/07-bottom-rail.jpg"
        ]
      },
      {
        "id": "full_blackout_manual_side_channel",
        "name": "Plně zatemňující, ruční ovládání, s bočními vodicími lištami",
        "supplierName": "Full blackout manual roller blinds with side channel",
        "control": "manual",
        "lightControl": "blackout",
        "limits": {
          "minWidthMm": 301,
          "maxWidthMm": 2499,
          "minHeightMm": null,
          "maxHeightMm": null,
          "maxAreaM2": 5,
          "maxLoadKg": 6.5
        },
        "openingLimits": null,
        "images": [
          "/uploads/blind-systems/full-blackout-manual-side-channel-v2/01-product-show.jpg",
          "/uploads/blind-systems/full-blackout-manual-side-channel-v2/02-brackets.jpg",
          "/uploads/blind-systems/full-blackout-manual-side-channel-v2/03-cassette.jpg",
          "/uploads/blind-systems/full-blackout-manual-side-channel-v2/04-tube.jpg",
          "/uploads/blind-systems/full-blackout-manual-side-channel-v2/05-control-or-motor.jpg",
          "/uploads/blind-systems/full-blackout-manual-side-channel-v2/06-fabric-detail.jpg",
          "/uploads/blind-systems/full-blackout-manual-side-channel-v2/07-bottom-rail.jpg"
        ]
      },
      {
        "id": "full_blackout_motorized_side_channel",
        "name": "Plně zatemňující, motorové ovládání, s bočními vodicími lištami",
        "supplierName": "Full blackout motorized roller blinds with side channel",
        "control": "motor",
        "lightControl": "blackout",
        "limits": {
          "minWidthMm": 301,
          "maxWidthMm": 2499,
          "minHeightMm": null,
          "maxHeightMm": null,
          "maxAreaM2": 5,
          "maxLoadKg": 6.5
        },
        "openingLimits": null,
        "images": [
          "/uploads/blind-systems/full-blackout-motorized-side-channel/01-product-show.jpg",
          "/uploads/blind-systems/full-blackout-motorized-side-channel/02-brackets.jpg",
          "/uploads/blind-systems/full-blackout-motorized-side-channel/03-cassette.jpg",
          "/uploads/blind-systems/full-blackout-motorized-side-channel/04-tube.jpg",
          "/uploads/blind-systems/full-blackout-motorized-side-channel/05-control-or-motor.jpg",
          "/uploads/blind-systems/full-blackout-motorized-side-channel/06-fabric-detail.jpg",
          "/uploads/blind-systems/full-blackout-motorized-side-channel/07-bottom-rail.jpg"
        ]
      }
    ],
    "motors": [
      {
        "id": "motor_am25",
        "code": "AM25",
        "name": "Trubkový motor A-OK AM25",
        "supplierName": "A-OK AM25 Tubular Motor",
        "voltage": "DC 24V",
        "current": "0.4A",
        "torqueNm": 1.2,
        "speedRpm": 25,
        "powerW": 10,
        "frequencyMhz": 433.92,
        "dimensions": "66.0 mm × 30.0 mm",
        "images": [
          "/uploads/motors/am25/am25-kit.jpg",
          "/uploads/motors/am25/am25-spec-label.jpg"
        ]
      }
    ],
    "colors": [
      {
        "code": "320.01197",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#e4e1d6",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/roman-blinds-320_01197.png",
        "preview": "/uploads/roller-preview-colors/320_01197.jpg"
      },
      {
        "code": "320.01198",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#a7a6ab",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/roman-blinds-320_01198.png",
        "preview": "/uploads/roller-preview-colors/320_01198.jpg"
      },
      {
        "code": "320.01199",
        "name": "Zlatá",
        "supplierName": "Gold",
        "hex": "#7a7168",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/roman-blinds-320_01199.png",
        "preview": "/uploads/roller-preview-colors/320_01199.jpg"
      },
      {
        "code": "320.01200",
        "name": "Kávová",
        "supplierName": "Coffee",
        "hex": "#786b66",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/roman-blinds-320_01200.png",
        "preview": "/uploads/roller-preview-colors/320_01200.jpg"
      },
      {
        "code": "321.13613",
        "name": "Středně šedá",
        "supplierName": "Medium Gray",
        "hex": "#b7bac1",
        "lightControl": "blackout",
        "sortPrice": 28.71,
        "image": "/uploads/wintom_fabrics/roller-blinds-321_13613.jpg",
        "preview": null
      },
      {
        "code": "321.13614",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#f0f2f9",
        "lightControl": "blackout",
        "sortPrice": 28.71,
        "image": "/uploads/wintom_fabrics/roller-blinds-321_13614.jpg",
        "preview": null
      },
      {
        "code": "321.13615",
        "name": "Béžová",
        "supplierName": "Beige",
        "hex": "#fafce4",
        "lightControl": "blackout",
        "sortPrice": 28.71,
        "image": "/uploads/wintom_fabrics/roller-blinds-321_13615.jpg",
        "preview": null
      },
      {
        "code": "322.06001",
        "name": "Přírodní záclona",
        "supplierName": "Natural Sheer",
        "hex": "#d4c9bd",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/roman-blinds-322_06001.png",
        "preview": "/uploads/roller-preview-colors/322_06001.jpg"
      },
      {
        "code": "322.06002",
        "name": "Záclona propouštějící světlo",
        "supplierName": "Light-Filtering Sheer",
        "hex": "#ded2c0",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/roman-blinds-322_06002.png",
        "preview": "/uploads/roller-preview-colors/322_06002.jpg"
      },
      {
        "code": "322.06003",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#faf8eb",
        "lightControl": "semi-transparent",
        "sortPrice": 26.1,
        "image": "/uploads/wintom_fabrics/roller-blinds-322_06003.png",
        "preview": "/uploads/roller-preview-colors/322_06003.jpg"
      },
      {
        "code": "323.05001",
        "name": "Zatemňující záclona",
        "supplierName": "Blackout Sheer",
        "hex": "#dfd6ca",
        "lightControl": "blackout",
        "sortPrice": 49.59,
        "image": "/uploads/wintom_fabrics/roman-blinds-323_05001.png",
        "preview": "/uploads/roller-preview-colors/323_05001.jpg"
      },
      {
        "code": "331.0281",
        "name": "Písková",
        "supplierName": "Sand",
        "hex": "#cccccc",
        "lightControl": "blackout",
        "sortPrice": 28.71,
        "image": "/uploads/wintom_fabrics/roller-blinds-331_0281.jpg",
        "preview": null
      },
      {
        "code": "331.01601",
        "name": "Měsíčně bílá",
        "supplierName": "Moonlight White",
        "hex": "#f7f7f7",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_01601.png",
        "preview": "/uploads/roller-preview-colors/331_01601.jpg"
      },
      {
        "code": "331.01602",
        "name": "Smaltově šedá",
        "supplierName": "Enamel Gray",
        "hex": "#adb2b8",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_01602.png",
        "preview": "/uploads/roller-preview-colors/331_01602.jpg"
      },
      {
        "code": "331.01603",
        "name": "Vanilkově zelená",
        "supplierName": "Vanilla Green",
        "hex": "#98a27f",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_01603.png",
        "preview": "/uploads/roller-preview-colors/331_01603.jpg"
      },
      {
        "code": "331.01604",
        "name": "Kokosově hnědá",
        "supplierName": "Coconut Brown",
        "hex": "#978171",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_01604.png",
        "preview": "/uploads/roller-preview-colors/331_01604.jpg"
      },
      {
        "code": "331.01605",
        "name": "Moderní šedá",
        "supplierName": "Modern Gray",
        "hex": "#8c8c8c",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_01605.png",
        "preview": "/uploads/roller-preview-colors/331_01605.jpg"
      },
      {
        "code": "331.01901",
        "name": "Křišťálově bílá",
        "supplierName": "Crystal White",
        "hex": "#eeefea",
        "lightControl": "semi-transparent",
        "sortPrice": 0,
        "image": "/uploads/type-fabric-colors/roman-blinds/331_01901.png",
        "preview": "/uploads/roller-preview-colors/331_01901.jpg"
      },
      {
        "code": "331.01902",
        "name": "Housátkově žlutá",
        "supplierName": "Goose Yellow",
        "hex": "#e9eac4",
        "lightControl": "semi-transparent",
        "sortPrice": 28.71,
        "image": "/uploads/wintom_fabrics/roller-blinds-331_01902.png",
        "preview": "/uploads/roller-preview-colors/331_01902.jpg"
      },
      {
        "code": "331.01903",
        "name": "Ledovcově stříbrná",
        "supplierName": "Glacier Silver",
        "hex": "#e2e2e2",
        "lightControl": "semi-transparent",
        "sortPrice": 28.71,
        "image": "/uploads/wintom_fabrics/roller-blinds-331_01903.png",
        "preview": "/uploads/roller-preview-colors/331_01903.jpg"
      },
      {
        "code": "331.01904",
        "name": "Mystická šedá",
        "supplierName": "Mystic Gray",
        "hex": "#7f7e7a",
        "lightControl": "semi-transparent",
        "sortPrice": 28.71,
        "image": "/uploads/wintom_fabrics/roller-blinds-331_01904.png",
        "preview": "/uploads/roller-preview-colors/331_01904.jpg"
      },
      {
        "code": "331.02809",
        "name": "Lněná",
        "supplierName": "Linen",
        "hex": "#cccccc",
        "lightControl": "blackout",
        "sortPrice": 28.71,
        "image": "/uploads/wintom_fabrics/roller-blinds-331_02809.jpg",
        "preview": null
      },
      {
        "code": "331.02811",
        "name": "Kávově modrá",
        "supplierName": "Coffee Blue",
        "hex": "#cccccc",
        "lightControl": "blackout",
        "sortPrice": 28.71,
        "image": "/uploads/wintom_fabrics/roller-blinds-331_02811.jpg",
        "preview": null
      },
      {
        "code": "331.02812",
        "name": "Měsíčně bílá",
        "supplierName": "Moonlight White",
        "hex": "#cccccc",
        "lightControl": "blackout",
        "sortPrice": 28.71,
        "image": "/uploads/wintom_fabrics/roller-blinds-331_02812.jpg",
        "preview": null
      },
      {
        "code": "331.02813",
        "name": "Bílá káva",
        "supplierName": "Milk Coffee",
        "hex": "#cccccc",
        "lightControl": "blackout",
        "sortPrice": 28.71,
        "image": "/uploads/wintom_fabrics/roller-blinds-331_02813.jpg",
        "preview": null
      },
      {
        "code": "331.02814",
        "name": "Kouřově šedá",
        "supplierName": "Smoky Gray",
        "hex": "#cccccc",
        "lightControl": "blackout",
        "sortPrice": 28.71,
        "image": "/uploads/wintom_fabrics/roller-blinds-331_02814.jpg",
        "preview": null
      }
    ]
  },
  {
    "slug": "rimske-rolety",
    "maltaId": "roman-blinds",
    "supportsMotor": true,
    "systems": [
      {
        "id": "roman_50_top_rail_motorized",
        "name": "Motorové ovládání, horní lišta 50",
        "supplierName": "50 top rail motorized roman shades",
        "control": "motor",
        "lightControl": "semi-transparent",
        "limits": {
          "minWidthMm": 600,
          "maxWidthMm": 2500,
          "minHeightMm": null,
          "maxHeightMm": 3500,
          "maxAreaM2": null,
          "maxLoadKg": null
        },
        "openingLimits": null,
        "images": [
          "/uploads/blind-systems/roman-50-top-rail-motorized/image-01.jpg",
          "/uploads/blind-systems/roman-50-top-rail-motorized/image-02.jpg",
          "/uploads/blind-systems/roman-50-top-rail-motorized/image-03.jpg",
          "/uploads/blind-systems/roman-50-top-rail-motorized/image-04.jpg",
          "/uploads/blind-systems/roman-50-top-rail-motorized/image-05.jpg",
          "/uploads/blind-systems/roman-50-top-rail-motorized/image-06.jpg",
          "/uploads/blind-systems/roman-50-top-rail-motorized/image-07.jpg"
        ]
      }
    ],
    "motors": [
      {
        "id": "motor_am25",
        "code": "AM25",
        "name": "Trubkový motor A-OK AM25",
        "supplierName": "A-OK AM25 Tubular Motor",
        "voltage": "DC 24V",
        "current": "0.4A",
        "torqueNm": 1.2,
        "speedRpm": 25,
        "powerW": 10,
        "frequencyMhz": 433.92,
        "dimensions": "66.0 mm × 30.0 mm",
        "images": [
          "/uploads/motors/am25/am25-kit.jpg",
          "/uploads/motors/am25/am25-spec-label.jpg"
        ]
      }
    ],
    "colors": [
      {
        "code": "320.01197",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#e4e0d6",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/roman-blinds-320_01197.png",
        "preview": "/uploads/roman-preview-colors/320_01197.jpg"
      },
      {
        "code": "320.01198",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#aaaaad",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/roman-blinds-320_01198.png",
        "preview": "/uploads/roman-preview-colors/320_01198.jpg"
      },
      {
        "code": "320.01199",
        "name": "Zlatá",
        "supplierName": "Gold",
        "hex": "#7b7063",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/roman-blinds-320_01199.png",
        "preview": "/uploads/roman-preview-colors/320_01199.jpg"
      },
      {
        "code": "320.01200",
        "name": "Kávová",
        "supplierName": "Coffee",
        "hex": "#7c6e69",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/roman-blinds-320_01200.png",
        "preview": "/uploads/roman-preview-colors/320_01200.jpg"
      },
      {
        "code": "322.06001",
        "name": "Přírodní záclona",
        "supplierName": "Natural Sheer",
        "hex": "#e0d9c8",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/roman-blinds-322_06001.png",
        "preview": "/uploads/roman-preview-colors/322_06001.jpg"
      },
      {
        "code": "322.06002",
        "name": "Záclona propouštějící světlo",
        "supplierName": "Light-Filtering Sheer",
        "hex": "#e0d9c7",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/roman-blinds-322_06002.png",
        "preview": "/uploads/roman-preview-colors/322_06002.jpg"
      },
      {
        "code": "322.06003",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#f8f9f0",
        "lightControl": "semi-transparent",
        "sortPrice": 26.1,
        "image": "/uploads/wintom_fabrics/roller-blinds-322_06003.png",
        "preview": "/uploads/roman-preview-colors/322_06003.jpg"
      },
      {
        "code": "323.05001",
        "name": "Zatemňující záclona",
        "supplierName": "Blackout Sheer",
        "hex": "#ded9ce",
        "lightControl": "blackout",
        "sortPrice": 49.59,
        "image": "/uploads/wintom_fabrics/roman-blinds-323_05001.png",
        "preview": "/uploads/roman-preview-colors/323_05001.jpg"
      },
      {
        "code": "331.0282",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "blackout",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_0282.jpg",
        "preview": null
      },
      {
        "code": "331.01131",
        "name": "Kamenně šedá",
        "supplierName": "Stone Gray",
        "hex": "#757677",
        "lightControl": "blackout",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_01131.png",
        "preview": "/uploads/roman-preview-colors/331_01131.jpg"
      },
      {
        "code": "331.01141",
        "name": "Olověně šedá",
        "supplierName": "Lead Gray",
        "hex": "#8d8b8c",
        "lightControl": "blackout",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_01141.png",
        "preview": "/uploads/roman-preview-colors/331_01141.jpg"
      },
      {
        "code": "331.01143",
        "name": "Stříbrná bříza",
        "supplierName": "Silver Birch",
        "hex": "#9e988e",
        "lightControl": "blackout",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_01143.png",
        "preview": "/uploads/roman-preview-colors/331_01143.jpg"
      },
      {
        "code": "331.01601",
        "name": "Měsíčně bílá",
        "supplierName": "Moonlight White",
        "hex": "#f8f7f7",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_01601.png",
        "preview": "/uploads/roman-preview-colors/331_01601.jpg"
      },
      {
        "code": "331.01602",
        "name": "Smaltově šedá",
        "supplierName": "Enamel Gray",
        "hex": "#b0b4b9",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_01602.png",
        "preview": "/uploads/roman-preview-colors/331_01602.jpg"
      },
      {
        "code": "331.01603",
        "name": "Vanilkově zelená",
        "supplierName": "Vanilla Green",
        "hex": "#99a381",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_01603.png",
        "preview": "/uploads/roman-preview-colors/331_01603.jpg"
      },
      {
        "code": "331.01604",
        "name": "Kokosově hnědá",
        "supplierName": "Coconut Brown",
        "hex": "#9b8778",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_01604.png",
        "preview": "/uploads/roman-preview-colors/331_01604.jpg"
      },
      {
        "code": "331.01605",
        "name": "Moderní šedá",
        "supplierName": "Modern Gray",
        "hex": "#8a8a8a",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_01605.png",
        "preview": "/uploads/roman-preview-colors/331_01605.jpg"
      },
      {
        "code": "331.02819",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "blackout",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_02819.jpg",
        "preview": null
      },
      {
        "code": "331.02821",
        "name": "Lněná",
        "supplierName": "Linen",
        "hex": "#cccccc",
        "lightControl": "blackout",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_02821.jpg",
        "preview": null
      },
      {
        "code": "331.02822",
        "name": "Dřevěná mříž",
        "supplierName": "Wood Lattice",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_02822.jpg",
        "preview": null
      },
      {
        "code": "331.02823",
        "name": "Přírodní béžová",
        "supplierName": "Natural beige",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_02823.jpg",
        "preview": null
      },
      {
        "code": "331.02824",
        "name": "Oblačně bílá",
        "supplierName": "Cloud White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_02824.jpg",
        "preview": null
      },
      {
        "code": "331.02825",
        "name": "Lněná",
        "supplierName": "Linen",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_02825.jpg",
        "preview": null
      },
      {
        "code": "331.02826",
        "name": "Přírodní bílá",
        "supplierName": "Natural White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/roman-blinds-331_02826.jpg",
        "preview": null
      }
    ]
  },
  {
    "slug": "rolety-den-a-noc",
    "maltaId": "zebra-blinds",
    "supportsMotor": true,
    "systems": [
      {
        "id": "manual_38mm_tube_square_cassette_zebra",
        "name": "Ruční ovládání, čtvercová kazeta, hřídel 38 mm",
        "supplierName": "38mm Tube square cassette manual zebra blinds",
        "control": "manual",
        "lightControl": "blackout",
        "limits": {
          "minWidthMm": 300,
          "maxWidthMm": 2300,
          "minHeightMm": null,
          "maxHeightMm": 3000,
          "maxAreaM2": null,
          "maxLoadKg": null
        },
        "openingLimits": null,
        "images": [
          "/uploads/blind-systems/zebra-38mm-square-cassette/manual_38mm_tube_square_cassette_product_and_parameters.jpg",
          "/uploads/blind-systems/zebra-38mm-square-cassette/manual_38mm_tube_square_cassette_accessories.jpg",
          "/uploads/blind-systems/zebra-38mm-square-cassette/manual_38mm_tube_square_cassette_full_page.jpg"
        ]
      },
      {
        "id": "motorized_38mm_tube_square_cassette_zebra",
        "name": "Motorové ovládání, čtvercová kazeta, hřídel 38 mm",
        "supplierName": "38mm Tube square cassette motorized zebra blinds",
        "control": "motor",
        "lightControl": "blackout",
        "limits": {
          "minWidthMm": 500,
          "maxWidthMm": 2300,
          "minHeightMm": 300,
          "maxHeightMm": 3000,
          "maxAreaM2": 4,
          "maxLoadKg": 5
        },
        "openingLimits": null,
        "images": [
          "/uploads/blind-systems/zebra-38mm-square-cassette/motorized_38mm_tube_square_cassette_product_and_parameters.jpg",
          "/uploads/blind-systems/zebra-38mm-square-cassette/motorized_38mm_tube_square_cassette_accessories.jpg",
          "/uploads/blind-systems/zebra-38mm-square-cassette/motorized_38mm_tube_square_cassette_full_page.jpg"
        ]
      }
    ],
    "motors": [
      {
        "id": "motor_am25",
        "code": "AM25",
        "name": "Trubkový motor A-OK AM25",
        "supplierName": "A-OK AM25 Tubular Motor",
        "voltage": "DC 24V",
        "current": "0.4A",
        "torqueNm": 1.2,
        "speedRpm": 25,
        "powerW": 10,
        "frequencyMhz": 433.92,
        "dimensions": "66.0 mm × 30.0 mm",
        "images": [
          "/uploads/motors/am25/am25-kit.jpg",
          "/uploads/motors/am25/am25-spec-label.jpg"
        ]
      }
    ],
    "colors": [
      {
        "code": "332.09201",
        "name": "Béžovozelená",
        "supplierName": "Beige Green",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 31.32,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09201.png",
        "preview": "/uploads/zebra-preview-colors/332_09201.jpg"
      },
      {
        "code": "332.09202",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 31.32,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09202.png",
        "preview": "/uploads/zebra-preview-colors/332_09202.jpg"
      },
      {
        "code": "332.09203",
        "name": "Nebesky modrá",
        "supplierName": "Sky Blue",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 31.32,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09203.png",
        "preview": "/uploads/zebra-preview-colors/332_09203.jpg"
      },
      {
        "code": "332.09204",
        "name": "Meruňková",
        "supplierName": "Apricot",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 31.32,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09204.png",
        "preview": "/uploads/zebra-preview-colors/332_09204.jpg"
      },
      {
        "code": "332.09205",
        "name": "Okrová",
        "supplierName": "Ochre",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 31.32,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09205.png",
        "preview": "/uploads/zebra-preview-colors/332_09205.jpg"
      },
      {
        "code": "332.09351",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 31.32,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09351.png",
        "preview": "/uploads/zebra-preview-colors/332_09351.jpg"
      },
      {
        "code": "332.09352",
        "name": "Béžová",
        "supplierName": "Beige",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 31.32,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09352.png",
        "preview": "/uploads/zebra-preview-colors/332_09352.jpg"
      },
      {
        "code": "332.09221",
        "name": "Béžový len",
        "supplierName": "Beige Linen",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 33.93,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09221.png",
        "preview": "/uploads/zebra-preview-colors/332_09221.jpg"
      },
      {
        "code": "332.09222",
        "name": "Kávový len",
        "supplierName": "Coffee Linen",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 33.93,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09222.png",
        "preview": "/uploads/zebra-preview-colors/332_09222.jpg"
      },
      {
        "code": "332.09223",
        "name": "Tříslově hnědá",
        "supplierName": "Tan Brown",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 33.93,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09223.png",
        "preview": "/uploads/zebra-preview-colors/332_09223.jpg"
      },
      {
        "code": "332.09231",
        "name": "Písková",
        "supplierName": "Sand",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09231.png",
        "preview": "/uploads/zebra-preview-colors/332_09231.jpg"
      },
      {
        "code": "332.09232",
        "name": "Podzimní",
        "supplierName": "Autumn",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09232.png",
        "preview": "/uploads/zebra-preview-colors/332_09232.jpg"
      },
      {
        "code": "332.09233",
        "name": "Hnědá",
        "supplierName": "Brown",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09233.png",
        "preview": "/uploads/zebra-preview-colors/332_09233.jpg"
      },
      {
        "code": "332.09234",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09234.png",
        "preview": "/uploads/zebra-preview-colors/332_09234.jpg"
      },
      {
        "code": "332.09241",
        "name": "Lomená bílá se vzorem",
        "supplierName": "Off-White Pattern",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09241.png",
        "preview": "/uploads/zebra-preview-colors/332_09241.jpg"
      },
      {
        "code": "332.09242",
        "name": "Lomená bílá šedá se vzorem",
        "supplierName": "Off-White Gray Pattern",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09242.png",
        "preview": "/uploads/zebra-preview-colors/332_09242.jpg"
      },
      {
        "code": "332.09243",
        "name": "Krémová se vzorem",
        "supplierName": "Cream Pattern",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09243.png",
        "preview": "/uploads/zebra-preview-colors/332_09243.jpg"
      },
      {
        "code": "332.09251",
        "name": "Světle zelená",
        "supplierName": "Light Green",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09251.png",
        "preview": "/uploads/zebra-preview-colors/332_09251.jpg"
      },
      {
        "code": "332.09252",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09252.png",
        "preview": "/uploads/zebra-preview-colors/332_09252.jpg"
      },
      {
        "code": "332.09253",
        "name": "Světlá khaki",
        "supplierName": "Light Khaki",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09253.png",
        "preview": "/uploads/zebra-preview-colors/332_09253.jpg"
      },
      {
        "code": "332.09254",
        "name": "Kávová",
        "supplierName": "Coffee",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09254.png",
        "preview": "/uploads/zebra-preview-colors/332_09254.jpg"
      },
      {
        "code": "332.09353",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 31.32,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09353.png",
        "preview": "/uploads/zebra-preview-colors/332_09353.jpg"
      },
      {
        "code": "332.09261",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09261.png",
        "preview": "/uploads/zebra-preview-colors/332_09261.jpg"
      },
      {
        "code": "332.09262",
        "name": "Krémová",
        "supplierName": "Cream",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 44.37,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09262.png",
        "preview": "/uploads/zebra-preview-colors/332_09262.jpg"
      },
      {
        "code": "332.09354",
        "name": "Zářivě bílá",
        "supplierName": "Fluorescent White",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 31.32,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09354.png",
        "preview": "/uploads/zebra-preview-colors/332_09354.jpg"
      },
      {
        "code": "332.09355",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 31.32,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09355.png",
        "preview": "/uploads/zebra-preview-colors/332_09355.jpg"
      },
      {
        "code": "332.09356",
        "name": "Černá",
        "supplierName": "Black",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 31.32,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09356.png",
        "preview": "/uploads/zebra-preview-colors/332_09356.jpg"
      },
      {
        "code": "332.10045",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 57.42,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_10045.png",
        "preview": "/uploads/zebra-preview-colors/332_10045.jpg"
      },
      {
        "code": "332.10046",
        "name": "Teple bílá",
        "supplierName": "Warm White",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 57.42,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_10046.png",
        "preview": "/uploads/zebra-preview-colors/332_10046.jpg"
      },
      {
        "code": "332.10047",
        "name": "Krémová",
        "supplierName": "Cream",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 57.42,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_10047.png",
        "preview": "/uploads/zebra-preview-colors/332_10047.jpg"
      },
      {
        "code": "332.10048",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 57.42,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_10048.png",
        "preview": "/uploads/zebra-preview-colors/332_10048.jpg"
      },
      {
        "code": "332.09001",
        "name": "Krémová",
        "supplierName": "Cream",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 36.54,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09001.png",
        "preview": "/uploads/zebra-preview-colors/332_09001.jpg"
      },
      {
        "code": "332.09002",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 36.54,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09002.png",
        "preview": "/uploads/zebra-preview-colors/332_09002.jpg"
      },
      {
        "code": "332.09005",
        "name": "Lněně bílá",
        "supplierName": "Linen White",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 36.54,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09005.png",
        "preview": "/uploads/zebra-preview-colors/332_09005.jpg"
      },
      {
        "code": "332.09006",
        "name": "Meruňková",
        "supplierName": "Apricot",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 36.54,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09006.png",
        "preview": "/uploads/zebra-preview-colors/332_09006.jpg"
      },
      {
        "code": "332.09008",
        "name": "Hnědá",
        "supplierName": "Brown",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 36.54,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09008.png",
        "preview": "/uploads/zebra-preview-colors/332_09008.jpg"
      },
      {
        "code": "332.09009",
        "name": "Černá",
        "supplierName": "Black",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 36.54,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09009.png",
        "preview": "/uploads/zebra-preview-colors/332_09009.jpg"
      },
      {
        "code": "332.09010",
        "name": "Modrá",
        "supplierName": "Blue",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 36.54,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09010.png",
        "preview": "/uploads/zebra-preview-colors/332_09010.jpg"
      },
      {
        "code": "332.09015",
        "name": "Pratě bílá",
        "supplierName": "Washed White",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 36.54,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09015.png",
        "preview": "/uploads/zebra-preview-colors/332_09015.jpg"
      },
      {
        "code": "332.09016",
        "name": "Žlutozelená",
        "supplierName": "Yellow Green",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 36.54,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09016.png",
        "preview": "/uploads/zebra-preview-colors/332_09016.jpg"
      },
      {
        "code": "332.08007",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 75.69,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08007.png",
        "preview": "/uploads/zebra-preview-colors/332_08007.jpg"
      },
      {
        "code": "332.08008",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 75.69,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08008.png",
        "preview": "/uploads/zebra-preview-colors/332_08008.jpg"
      },
      {
        "code": "332.09003",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09003.png",
        "preview": "/uploads/zebra-preview-colors/332_09003.jpg"
      },
      {
        "code": "332.09011",
        "name": "Stříbrně šedá",
        "supplierName": "Silver Gray",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 75.69,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09011.png",
        "preview": "/uploads/zebra-preview-colors/332_09011.jpg"
      },
      {
        "code": "332.08020",
        "name": "Meruňková + ginkgo",
        "supplierName": "Apricot + Ginkgo",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 75.69,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08020.png",
        "preview": "/uploads/zebra-preview-colors/332_08020.jpg"
      },
      {
        "code": "332.08025",
        "name": "Tmavě šedá + vločky",
        "supplierName": "Dark Gray + Snowflake",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 75.69,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08025.png",
        "preview": "/uploads/zebra-preview-colors/332_08025.jpg"
      },
      {
        "code": "332.09095",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 70.47,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09095.png",
        "preview": "/uploads/zebra-preview-colors/332_09095.jpg"
      },
      {
        "code": "332.09097",
        "name": "Černá",
        "supplierName": "Black",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 70.47,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09097.png",
        "preview": "/uploads/zebra-preview-colors/332_09097.jpg"
      },
      {
        "code": "332.08004",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 96.57,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08004.png",
        "preview": "/uploads/zebra-preview-colors/332_08004.jpg"
      },
      {
        "code": "332.08028",
        "name": "Šedá + žlutý květ",
        "supplierName": "Gray + Yellow Flower",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 75.69,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08028.png",
        "preview": "/uploads/zebra-preview-colors/332_08028.jpg"
      },
      {
        "code": "332.08017",
        "name": "Meruňková",
        "supplierName": "Apricot",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 70.47,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08017.png",
        "preview": "/uploads/zebra-preview-colors/332_08017.jpg"
      },
      {
        "code": "332.08019",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 70.47,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08019.png",
        "preview": "/uploads/zebra-preview-colors/332_08019.jpg"
      },
      {
        "code": "332.09021",
        "name": "Slonovinově bílá",
        "supplierName": "Ivory White",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 75.69,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_09021.png",
        "preview": "/uploads/zebra-preview-colors/332_09021.jpg"
      },
      {
        "code": "332.10029",
        "name": "Béžová",
        "supplierName": "Beige",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 75.69,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_10029.png",
        "preview": "/uploads/zebra-preview-colors/332_10029.jpg"
      },
      {
        "code": "332.10030",
        "name": "Meruňková",
        "supplierName": "Apricot",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 75.69,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_10030.png",
        "preview": "/uploads/zebra-preview-colors/332_10030.jpg"
      },
      {
        "code": "332.10026",
        "name": "Světle krémová",
        "supplierName": "Light Cream",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 75.69,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_10026.png",
        "preview": "/uploads/zebra-preview-colors/332_10026.jpg"
      },
      {
        "code": "332.08044",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 67.86,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08044.png",
        "preview": "/uploads/zebra-preview-colors/332_08044.jpg"
      },
      {
        "code": "332.08045",
        "name": "Béžová",
        "supplierName": "Beige",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 67.86,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08045.png",
        "preview": "/uploads/zebra-preview-colors/332_08045.jpg"
      },
      {
        "code": "332.08046",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#d6c7b2",
        "lightControl": "semi-transparent",
        "sortPrice": 67.86,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08046.png",
        "preview": "/uploads/zebra-preview-colors/332_08046.jpg"
      },
      {
        "code": "332.08047",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 67.86,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08047.png",
        "preview": "/uploads/zebra-preview-colors/332_08047.jpg"
      },
      {
        "code": "332.08048",
        "name": "Středně šedá",
        "supplierName": "Medium Gray",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 67.86,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08048.png",
        "preview": "/uploads/zebra-preview-colors/332_08048.jpg"
      },
      {
        "code": "332.08049",
        "name": "Lněně bílá",
        "supplierName": "Linen White",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 67.86,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08049.png",
        "preview": "/uploads/zebra-preview-colors/332_08049.jpg"
      },
      {
        "code": "332.08050",
        "name": "Lomená bílá šedá",
        "supplierName": "Off-White Gray",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 67.86,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08050.png",
        "preview": "/uploads/zebra-preview-colors/332_08050.jpg"
      },
      {
        "code": "332.08051",
        "name": "Černošedý pruh",
        "supplierName": "Black-Gray Stripe",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 67.86,
        "image": "/uploads/wintom_fabrics/zebra-blinds-332_08051.png",
        "preview": "/uploads/zebra-preview-colors/332_08051.jpg"
      },
      {
        "code": "666",
        "name": "PEPEK",
        "supplierName": "PEPEK",
        "hex": "#d6c7b2",
        "lightControl": "blackout",
        "sortPrice": 0.261,
        "image": "/uploads/products/zebra-preview-332_09202-corrected.jpg",
        "preview": null
      }
    ]
  },
  {
    "slug": "zavesy",
    "maltaId": "curtains",
    "supportsMotor": false,
    "systems": [
      {
        "id": "electric_vertical_screen_curtain",
        "name": "Elektrický vertikální závěs (screen)",
        "supplierName": "Electric Vertical Screen Curtain",
        "control": "motor",
        "lightControl": "blackout",
        "limits": {
          "minWidthMm": 1000,
          "maxWidthMm": 12000,
          "minHeightMm": null,
          "maxHeightMm": 6000,
          "maxAreaM2": 24,
          "maxLoadKg": null
        },
        "openingLimits": {
          "single": {
            "minWidthMm": 1000,
            "maxWidthMm": 6000,
            "minHeightMm": null,
            "maxHeightMm": 6000,
            "maxAreaM2": 18,
            "maxLoadKg": null
          },
          "dual": {
            "minWidthMm": 1000,
            "maxWidthMm": 12000,
            "minHeightMm": null,
            "maxHeightMm": 6000,
            "maxAreaM2": 24,
            "maxLoadKg": null
          }
        },
        "images": [
          "/uploads/blind-systems/curtains-screen/electric_vertical_screen_curtain_product_and_parameters.jpg",
          "/uploads/blind-systems/curtains-screen/electric_vertical_screen_curtain_accessories.jpg",
          "/uploads/blind-systems/curtains-screen/electric_vertical_screen_curtain_full_page.jpg"
        ]
      },
      {
        "id": "manual_vertical_screen_curtain",
        "name": "Ruční vertikální závěs (screen)",
        "supplierName": "Manual Vertical Screen Curtain",
        "control": "manual",
        "lightControl": "blackout",
        "limits": {
          "minWidthMm": 600,
          "maxWidthMm": 6000,
          "minHeightMm": null,
          "maxHeightMm": 2800,
          "maxAreaM2": 8,
          "maxLoadKg": null
        },
        "openingLimits": {
          "single": {
            "minWidthMm": 600,
            "maxWidthMm": 3500,
            "minHeightMm": null,
            "maxHeightMm": 2800,
            "maxAreaM2": 6,
            "maxLoadKg": null
          },
          "dual": {
            "minWidthMm": 1000,
            "maxWidthMm": 6000,
            "minHeightMm": null,
            "maxHeightMm": 2800,
            "maxAreaM2": 8,
            "maxLoadKg": null
          }
        },
        "images": [
          "/uploads/blind-systems/curtains-screen/manual_vertical_screen_curtain_product_and_parameters.jpg",
          "/uploads/blind-systems/curtains-screen/manual_vertical_screen_curtain_accessories.jpg",
          "/uploads/blind-systems/curtains-screen/manual_vertical_screen_curtain_full_page.jpg"
        ]
      }
    ],
    "motors": [],
    "colors": [
      {
        "code": "601.02045",
        "name": "Teple šedá",
        "supplierName": "Warm Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 20.88,
        "image": "/uploads/wintom_fabrics/curtains-601_02045.jpg",
        "preview": null
      },
      {
        "code": "601.02046",
        "name": "Teple šedá",
        "supplierName": "Warm Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 20.88,
        "image": "/uploads/wintom_fabrics/curtains-601_02046.jpg",
        "preview": null
      },
      {
        "code": "601.02047",
        "name": "Velbloudí",
        "supplierName": "Camel",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 20.88,
        "image": "/uploads/wintom_fabrics/curtains-601_02047.jpg",
        "preview": null
      },
      {
        "code": "601.02048",
        "name": "Velbloudí",
        "supplierName": "Camel",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 20.88,
        "image": "/uploads/wintom_fabrics/curtains-601_02048.jpg",
        "preview": null
      },
      {
        "code": "601.02049",
        "name": "Slonovinová",
        "supplierName": "Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 20.88,
        "image": "/uploads/wintom_fabrics/curtains-601_02049.jpg",
        "preview": null
      },
      {
        "code": "601.02050",
        "name": "Teple šedá",
        "supplierName": "Warm Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 20.88,
        "image": "/uploads/wintom_fabrics/curtains-601_02050.jpg",
        "preview": null
      },
      {
        "code": "601.02051",
        "name": "Teple šedá",
        "supplierName": "Warm Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 20.88,
        "image": "/uploads/wintom_fabrics/curtains-601_02051.jpg",
        "preview": null
      },
      {
        "code": "601.02052",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 20.88,
        "image": "/uploads/wintom_fabrics/curtains-601_02052.jpg",
        "preview": null
      },
      {
        "code": "601.02069",
        "name": "Velbloudí / vícebarevná",
        "supplierName": "Camel / Multitone",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_02069.jpg",
        "preview": null
      },
      {
        "code": "601.02070",
        "name": "Teple šedá",
        "supplierName": "Warm Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_02070.jpg",
        "preview": null
      },
      {
        "code": "601.005001.0001",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_005001_0001.jpg",
        "preview": null
      },
      {
        "code": "601.005001.0002",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_005001_0002.jpg",
        "preview": null
      },
      {
        "code": "601.005001.0003",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_005001_0003.jpg",
        "preview": null
      },
      {
        "code": "601.005001.0004",
        "name": "Břidlicově modrá",
        "supplierName": "Slate Blue",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_005001_0004.jpg",
        "preview": null
      },
      {
        "code": "601.005001.0005",
        "name": "Teple hnědá",
        "supplierName": "Warm Brown",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_005001_0005.jpg",
        "preview": null
      },
      {
        "code": "601.05029",
        "name": "Teple šedá",
        "supplierName": "Warm Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_05029.jpg",
        "preview": null
      },
      {
        "code": "601.05030",
        "name": "Teple hnědá",
        "supplierName": "Warm Brown",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_05030.jpg",
        "preview": null
      },
      {
        "code": "601.05031",
        "name": "Teple šedá",
        "supplierName": "Warm Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_05031.jpg",
        "preview": null
      },
      {
        "code": "601.05032",
        "name": "Teple hnědá",
        "supplierName": "Warm Brown",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_05032.jpg",
        "preview": null
      },
      {
        "code": "601.05033",
        "name": "Teple hnědá",
        "supplierName": "Warm Brown",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_05033.jpg",
        "preview": null
      },
      {
        "code": "601.05034",
        "name": "Olivově zelená",
        "supplierName": "Olive Green",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_05034.jpg",
        "preview": null
      },
      {
        "code": "601.05035",
        "name": "Teple šedá",
        "supplierName": "Warm Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_05035.jpg",
        "preview": null
      },
      {
        "code": "601.05054",
        "name": "Slonovinová",
        "supplierName": "Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_05054.jpg",
        "preview": null
      },
      {
        "code": "601.05055",
        "name": "Teple hnědá / vícebarevná",
        "supplierName": "Warm Brown / Multitone",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_05055.jpg",
        "preview": null
      },
      {
        "code": "601.05056",
        "name": "Světle slonovinová",
        "supplierName": "Light Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_05056.jpg",
        "preview": null
      },
      {
        "code": "601.05063",
        "name": "Teple hnědá",
        "supplierName": "Warm Brown",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 40.336245,
        "image": "/uploads/wintom_fabrics/curtains-601_05063.jpg",
        "preview": null
      },
      {
        "code": "601.05066",
        "name": "Teple šedá",
        "supplierName": "Warm Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 40.336245,
        "image": "/uploads/wintom_fabrics/curtains-601_05066.jpg",
        "preview": null
      },
      {
        "code": "601.05067",
        "name": "Teple šedá / vícebarevná",
        "supplierName": "Warm Gray / Multitone",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 40.336245,
        "image": "/uploads/wintom_fabrics/curtains-601_05067.jpg",
        "preview": null
      },
      {
        "code": "601.06011",
        "name": "Velbloudí",
        "supplierName": "Camel",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 37.647162,
        "image": "/uploads/wintom_fabrics/curtains-601_06011.jpg",
        "preview": null
      },
      {
        "code": "601.06018",
        "name": "Teple hnědá",
        "supplierName": "Warm Brown",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 37.647162,
        "image": "/uploads/wintom_fabrics/curtains-601_06018.jpg",
        "preview": null
      },
      {
        "code": "601.06030",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 37.647162,
        "image": "/uploads/wintom_fabrics/curtains-601_06030.jpg",
        "preview": null
      },
      {
        "code": "601.06031",
        "name": "Teple šedá",
        "supplierName": "Warm Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 37.647162,
        "image": "/uploads/wintom_fabrics/curtains-601_06031.jpg",
        "preview": null
      },
      {
        "code": "601.06032",
        "name": "Okrová",
        "supplierName": "Ochre",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 37.647162,
        "image": "/uploads/wintom_fabrics/curtains-601_06032.jpg",
        "preview": null
      },
      {
        "code": "601.06036",
        "name": "Kamenně šedá",
        "supplierName": "Stone Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 37.647162,
        "image": "/uploads/wintom_fabrics/curtains-601_06036.jpg",
        "preview": null
      },
      {
        "code": "601.06037",
        "name": "Teple hnědá",
        "supplierName": "Warm Brown",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 37.647162,
        "image": "/uploads/wintom_fabrics/curtains-601_06037.jpg",
        "preview": null
      },
      {
        "code": "601.06040",
        "name": "Velbloudí",
        "supplierName": "Camel",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 37.647162,
        "image": "/uploads/wintom_fabrics/curtains-601_06040.jpg",
        "preview": null
      },
      {
        "code": "601.008005.0001",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_008005_0001.jpg",
        "preview": null
      },
      {
        "code": "601.008005.0002",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_008005_0002.jpg",
        "preview": null
      },
      {
        "code": "601.008005.0003",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_008005_0003.jpg",
        "preview": null
      },
      {
        "code": "601.008006.0001",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_008006_0001.jpg",
        "preview": null
      },
      {
        "code": "601.008006.0002",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_008006_0002.jpg",
        "preview": null
      },
      {
        "code": "601.008006.0003",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_008006_0003.jpg",
        "preview": null
      },
      {
        "code": "601.008007.0001",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_008007_0001.jpg",
        "preview": null
      },
      {
        "code": "601.008007.0002",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_008007_0002.jpg",
        "preview": null
      },
      {
        "code": "601.008007.0003",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 35.591004,
        "image": "/uploads/wintom_fabrics/curtains-601_008007_0003.jpg",
        "preview": null
      },
      {
        "code": "601.026003.0001",
        "name": "Slonovinová",
        "supplierName": "Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026003_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026007.0001",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026007_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026008.0001",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026008_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026008.0002",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026008_0002.jpg",
        "preview": null
      },
      {
        "code": "601.026009.0001",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026009_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026009.0002",
        "name": "Slonovinová",
        "supplierName": "Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026009_0002.jpg",
        "preview": null
      },
      {
        "code": "601.026009.0003",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026009_0003.jpg",
        "preview": null
      },
      {
        "code": "601.026009.0004",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026009_0004.jpg",
        "preview": null
      },
      {
        "code": "601.026010.0001",
        "name": "Světle slonovinová",
        "supplierName": "Light Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026010_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026010.0002",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026010_0002.jpg",
        "preview": null
      },
      {
        "code": "601.026011.0001",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026011_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026012.0001",
        "name": "Slonovinová",
        "supplierName": "Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026012_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026012.0002",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026012_0002.jpg",
        "preview": null
      },
      {
        "code": "601.026013.0001",
        "name": "Teple šedá / vícebarevná",
        "supplierName": "Warm Gray / Multitone",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026013_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026013.0002",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026013_0002.jpg",
        "preview": null
      },
      {
        "code": "601.026014.0001",
        "name": "Velbloudí",
        "supplierName": "Camel",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026014_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026014.0002",
        "name": "Antracitová",
        "supplierName": "Charcoal",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026014_0002.jpg",
        "preview": null
      },
      {
        "code": "601.026015.0001",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026015_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026016.0001",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026016_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026017.0001",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026017_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026017.0002",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026017_0002.jpg",
        "preview": null
      },
      {
        "code": "601.026018.0001",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026018_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026019.0001",
        "name": "Světle slonovinová",
        "supplierName": "Light Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026019_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026020.0001",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026020_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026020.0002",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026020_0002.jpg",
        "preview": null
      },
      {
        "code": "601.026021.0001",
        "name": "Kamenně šedá",
        "supplierName": "Stone Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026021_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026022.0001",
        "name": "Studená šedá",
        "supplierName": "Cool Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026022_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026022.0002",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026022_0002.jpg",
        "preview": null
      },
      {
        "code": "601.026023.0001",
        "name": "Studená šedá",
        "supplierName": "Cool Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026023_0001.jpg",
        "preview": null
      },
      {
        "code": "601.026023.0002",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026023_0002.jpg",
        "preview": null
      },
      {
        "code": "601.026024.0001",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 49.82724900000001,
        "image": "/uploads/wintom_fabrics/curtains-601_026024_0001.jpg",
        "preview": null
      },
      {
        "code": "601.030001.0001",
        "name": "Písková",
        "supplierName": "Sand",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_030001_0001.jpg",
        "preview": null
      },
      {
        "code": "601.030001.0002",
        "name": "Slonovinová",
        "supplierName": "Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_030001_0002.jpg",
        "preview": null
      },
      {
        "code": "601.030001.0003",
        "name": "Slonovinová",
        "supplierName": "Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_030001_0003.jpg",
        "preview": null
      },
      {
        "code": "601.030001.0004",
        "name": "Břidlicově modrá",
        "supplierName": "Slate Blue",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_030001_0004.jpg",
        "preview": null
      },
      {
        "code": "601.030001.0005",
        "name": "Olivově zelená",
        "supplierName": "Olive Green",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_030001_0005.jpg",
        "preview": null
      },
      {
        "code": "601.030001.0006",
        "name": "Teple šedá",
        "supplierName": "Warm Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_030001_0006.jpg",
        "preview": null
      },
      {
        "code": "601.030001.0007",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_030001_0007.jpg",
        "preview": null
      },
      {
        "code": "601.030001.0012",
        "name": "Modrošedá",
        "supplierName": "Blue Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_030001_0012.jpg",
        "preview": null
      },
      {
        "code": "601.030001.0013",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_030001_0013.jpg",
        "preview": null
      },
      {
        "code": "601.031001.0001",
        "name": "Písková",
        "supplierName": "Sand",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031001_0001.jpg",
        "preview": null
      },
      {
        "code": "601.031001.0003",
        "name": "Lesní zelená",
        "supplierName": "Forest Green",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031001_0003.jpg",
        "preview": null
      },
      {
        "code": "601.031001.0004",
        "name": "Modrozelená",
        "supplierName": "Teal",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031001_0004.jpg",
        "preview": null
      },
      {
        "code": "601.031001.0005",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031001_0005.jpg",
        "preview": null
      },
      {
        "code": "601.031001.0006",
        "name": "Slonovinová",
        "supplierName": "Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031001_0006.jpg",
        "preview": null
      },
      {
        "code": "601.031001.0007",
        "name": "Teple šedá",
        "supplierName": "Warm Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031001_0007.jpg",
        "preview": null
      },
      {
        "code": "601.031001.0008",
        "name": "Velbloudí",
        "supplierName": "Camel",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031001_0008.jpg",
        "preview": null
      },
      {
        "code": "601.031001.0009",
        "name": "Teple hnědá",
        "supplierName": "Warm Brown",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031001_0009.jpg",
        "preview": null
      },
      {
        "code": "601.031001.0010",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031001_0010.jpg",
        "preview": null
      },
      {
        "code": "601.031001.0011",
        "name": "Teple hnědá",
        "supplierName": "Warm Brown",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031001_0011.jpg",
        "preview": null
      },
      {
        "code": "601.031001.0014",
        "name": "Olivově zelená",
        "supplierName": "Olive Green",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031001_0014.jpg",
        "preview": null
      },
      {
        "code": "601.031002.0001",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031002_0001.jpg",
        "preview": null
      },
      {
        "code": "601.031002.0002",
        "name": "Teple šedá",
        "supplierName": "Warm Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031002_0002.jpg",
        "preview": null
      },
      {
        "code": "601.031002.0003",
        "name": "Lesní zelená",
        "supplierName": "Forest Green",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031002_0003.jpg",
        "preview": null
      },
      {
        "code": "601.031002.0004",
        "name": "Modrozelená",
        "supplierName": "Teal",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031002_0004.jpg",
        "preview": null
      },
      {
        "code": "601.031003.0001",
        "name": "Kamenně šedá",
        "supplierName": "Stone Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031003_0001.jpg",
        "preview": null
      },
      {
        "code": "601.031003.0002",
        "name": "Slonovinová",
        "supplierName": "Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031003_0002.jpg",
        "preview": null
      },
      {
        "code": "601.031003.0003",
        "name": "Slonovinová",
        "supplierName": "Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031003_0003.jpg",
        "preview": null
      },
      {
        "code": "601.031003.0004",
        "name": "Velbloudí",
        "supplierName": "Camel",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031003_0004.jpg",
        "preview": null
      },
      {
        "code": "601.031003.0005",
        "name": "Studená šedá",
        "supplierName": "Cool Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031003_0005.jpg",
        "preview": null
      },
      {
        "code": "601.031003.0006",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031003_0006.jpg",
        "preview": null
      },
      {
        "code": "601.031003.0007",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 26.574498,
        "image": "/uploads/wintom_fabrics/curtains-601_031003_0007.jpg",
        "preview": null
      }
    ]
  },
  {
    "slug": "dream-rolety",
    "maltaId": "dream-blinds",
    "supportsMotor": true,
    "systems": [
      {
        "id": "electric_vertical_dream_curtain",
        "name": "Elektrický vertikální závěs Dream (M09/M11/M13)",
        "supplierName": "Electric Vertical Dream Curtain (M09/M11/M13)",
        "control": "motor",
        "lightControl": "blackout",
        "limits": {
          "minWidthMm": 1000,
          "maxWidthMm": 6000,
          "minHeightMm": null,
          "maxHeightMm": 6000,
          "maxAreaM2": 24,
          "maxLoadKg": 20
        },
        "openingLimits": {
          "single": {
            "minWidthMm": 1000,
            "maxWidthMm": 6000,
            "minHeightMm": null,
            "maxHeightMm": 6000,
            "maxAreaM2": 24,
            "maxLoadKg": null
          },
          "dual": {
            "minWidthMm": 1000,
            "maxWidthMm": 6000,
            "minHeightMm": null,
            "maxHeightMm": 6000,
            "maxAreaM2": 24,
            "maxLoadKg": null
          }
        },
        "images": [
          "/uploads/blind-systems/dream-vertical/electric_vertical_dream_curtain_product_and_parameters.jpg",
          "/uploads/blind-systems/dream-vertical/electric_vertical_dream_curtain_accessories.jpg",
          "/uploads/blind-systems/dream-vertical/electric_vertical_dream_curtain_full_page.jpg"
        ]
      },
      {
        "id": "manual_vertical_dream_curtain",
        "name": "Ruční vertikální závěs Dream",
        "supplierName": "Manual Vertical Dream Curtain",
        "control": "manual",
        "lightControl": "blackout",
        "limits": {
          "minWidthMm": 600,
          "maxWidthMm": 5000,
          "minHeightMm": null,
          "maxHeightMm": 6000,
          "maxAreaM2": 24,
          "maxLoadKg": null
        },
        "openingLimits": {
          "single": {
            "minWidthMm": 600,
            "maxWidthMm": 3500,
            "minHeightMm": null,
            "maxHeightMm": 6000,
            "maxAreaM2": 18,
            "maxLoadKg": null
          },
          "dual": {
            "minWidthMm": 1000,
            "maxWidthMm": 5000,
            "minHeightMm": null,
            "maxHeightMm": 6000,
            "maxAreaM2": 24,
            "maxLoadKg": null
          }
        },
        "images": [
          "/uploads/blind-systems/dream-vertical/manual_vertical_dream_curtain_product_and_parameters.jpg",
          "/uploads/blind-systems/dream-vertical/manual_vertical_dream_curtain_accessories.jpg",
          "/uploads/blind-systems/dream-vertical/manual_vertical_dream_curtain_full_page.jpg"
        ]
      }
    ],
    "motors": [
      {
        "id": "motor-lithium-remote-76",
        "code": "LITHIUM-REMOTE-76",
        "name": "Standardní motor s lithiovou baterií a dálkovým ovládáním",
        "supplierName": "Standard lithium battery motor with remote control",
        "voltage": null,
        "current": null,
        "torqueNm": null,
        "speedRpm": null,
        "powerW": null,
        "frequencyMhz": null,
        "dimensions": null,
        "images": []
      }
    ],
    "colors": [
      {
        "code": "333.0536",
        "name": "Oranžová",
        "supplierName": "Orange",
        "hex": "#cccccc",
        "lightControl": "blackout",
        "sortPrice": 67.86,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_0536.jpg",
        "preview": null
      },
      {
        "code": "333.0537",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_0537.jpg",
        "preview": null
      },
      {
        "code": "333.0538",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 62.64,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_0538.jpg",
        "preview": null
      },
      {
        "code": "333.05143",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#eceae7",
        "lightControl": "semi-transparent",
        "sortPrice": 57.5766,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05143.jpg",
        "preview": "/uploads/configurator/dream-blinds/333.05143.png"
      },
      {
        "code": "333.05146",
        "name": "Bílá se vzorem listů",
        "supplierName": "White-leaf pattern",
        "hex": "#d7e4cd",
        "lightControl": "semi-transparent",
        "sortPrice": 73.554498,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05146.jpg",
        "preview": null
      },
      {
        "code": "333.05358",
        "name": "Ovocně zelená",
        "supplierName": "Fruit Green",
        "hex": "#e1ebda",
        "lightControl": "blackout",
        "sortPrice": 77.508909,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05358.jpg",
        "preview": null
      },
      {
        "code": "333.05359",
        "name": "Kouřově šedá",
        "supplierName": "Smoke Gray",
        "hex": "#c5c9cd",
        "lightControl": "blackout",
        "sortPrice": 77.49090000000001,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05359.png",
        "preview": "/uploads/configurator/dream-blinds/333.05359.png"
      },
      {
        "code": "333.05360",
        "name": "Oranžová",
        "supplierName": "Orange",
        "hex": "#f4af93",
        "lightControl": "blackout",
        "sortPrice": 67.86,
        "image": "/uploads/catalog-swatches/dream/333_05360.jpg",
        "preview": "/uploads/configurator/dream-blinds/333.05360.png"
      },
      {
        "code": "333.05361",
        "name": "Mořsky modrá",
        "supplierName": "Sea Blue",
        "hex": "#79a5d4",
        "lightControl": "blackout",
        "sortPrice": 67.86,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05361.jpg",
        "preview": null
      },
      {
        "code": "333.05362",
        "name": "Tmavě hnědá",
        "supplierName": "Dark brown",
        "hex": "#9f8e8e",
        "lightControl": "blackout",
        "sortPrice": 67.86,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05362.jpg",
        "preview": null
      },
      {
        "code": "333.05370",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#f2f0e5",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/catalog-swatches/dream/333_05370.jpg",
        "preview": "/uploads/configurator/dream-blinds/333.05370.png"
      },
      {
        "code": "333.05371",
        "name": "Mléčně bílá",
        "supplierName": "Milky White",
        "hex": "#f3eed9",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05371.jpg",
        "preview": "/uploads/configurator/dream-blinds/333.05371.png"
      },
      {
        "code": "333.05372",
        "name": "Krémová",
        "supplierName": "Cream",
        "hex": "#f8f5eb",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05372.jpg",
        "preview": "/uploads/configurator/dream-blinds/333.05372.png"
      },
      {
        "code": "333.05374",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#a5a5a7",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05374.png",
        "preview": "/uploads/configurator/dream-blinds/333.05374.png"
      },
      {
        "code": "333.05377",
        "name": "Oranžová",
        "supplierName": "Orange",
        "hex": "#f6a68e",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05377.png",
        "preview": "/uploads/configurator/dream-blinds/333.05377.png"
      },
      {
        "code": "333.05378",
        "name": "Mořsky modrá",
        "supplierName": "Sea Blue",
        "hex": "#819cbe",
        "lightControl": "semi-transparent",
        "sortPrice": 41.76,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05378.png",
        "preview": "/uploads/configurator/dream-blinds/333.05378.png"
      },
      {
        "code": "333.05380",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#f0f0e3",
        "lightControl": "semi-transparent",
        "sortPrice": 62.64,
        "image": "/uploads/catalog-swatches/dream/333_05380.jpg",
        "preview": "/uploads/configurator/dream-blinds/333.05380.png"
      },
      {
        "code": "333.05381",
        "name": "Mléčně bílá",
        "supplierName": "Milky White",
        "hex": "#a99b90",
        "lightControl": "semi-transparent",
        "sortPrice": 73.08,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05381.jpg",
        "preview": null
      },
      {
        "code": "333.05384",
        "name": "Tmavě hnědá",
        "supplierName": "Dark brown",
        "hex": "#c0b5b5",
        "lightControl": "semi-transparent",
        "sortPrice": 73.08,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05384.jpg",
        "preview": null
      },
      {
        "code": "333.05385",
        "name": "Kouřově šedá",
        "supplierName": "Somke grey",
        "hex": "#c1c5cc",
        "lightControl": "semi-transparent",
        "sortPrice": 73.08,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05385.jpg",
        "preview": null
      },
      {
        "code": "333.05390",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#f3f3f5",
        "lightControl": "semi-transparent",
        "sortPrice": 62.64,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05390.jpg",
        "preview": "/uploads/configurator/dream-blinds/333.05390.png"
      },
      {
        "code": "333.05391",
        "name": "Mléčně bílá",
        "supplierName": "Milky White",
        "hex": "#edefe4",
        "lightControl": "semi-transparent",
        "sortPrice": 73.08,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05391.jpg",
        "preview": null
      },
      {
        "code": "333.05394",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#f3f4ef",
        "lightControl": "semi-transparent",
        "sortPrice": 62.64,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05394.png",
        "preview": "/uploads/configurator/dream-blinds/333.05394.png"
      },
      {
        "code": "333.05400",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#ededec",
        "lightControl": "semi-transparent",
        "sortPrice": 36.54,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05400.jpg",
        "preview": "/uploads/configurator/dream-blinds/333.05400.png"
      },
      {
        "code": "333.05403",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#999ca1",
        "lightControl": "semi-transparent",
        "sortPrice": 36.54,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05403.png",
        "preview": "/uploads/configurator/dream-blinds/333.05403.png"
      },
      {
        "code": "333.05467",
        "name": "Jemně šedá",
        "supplierName": "Soft Gray",
        "hex": "#b0b3bd",
        "lightControl": "semi-transparent",
        "sortPrice": 33.93,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05467.png",
        "preview": "/uploads/configurator/dream-blinds/333.05467.png"
      },
      {
        "code": "333.05468",
        "name": "Kaštanová",
        "supplierName": "Bean Paste",
        "hex": "#b2a59d",
        "lightControl": "semi-transparent",
        "sortPrice": 33.93,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05468.png",
        "preview": "/uploads/configurator/dream-blinds/333.05468.png"
      },
      {
        "code": "333.05469",
        "name": "Mléčně bílá",
        "supplierName": "Milky White",
        "hex": "#f3f2e5",
        "lightControl": "semi-transparent",
        "sortPrice": 33.93,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05469.png",
        "preview": "/uploads/configurator/dream-blinds/333.05469.png"
      },
      {
        "code": "333.05473",
        "name": "Kaštanová",
        "supplierName": "Bean Paste",
        "hex": "#b4a69d",
        "lightControl": "semi-transparent",
        "sortPrice": 52.2,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05473.png",
        "preview": "/uploads/configurator/dream-blinds/333.05473.png"
      },
      {
        "code": "333.05474",
        "name": "Perleťově bílá",
        "supplierName": "Pearl White",
        "hex": "#e3e3e3",
        "lightControl": "blackout",
        "sortPrice": 77.49090000000001,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05474.png",
        "preview": "/uploads/configurator/dream-blinds/333.05474.png"
      },
      {
        "code": "333.05475",
        "name": "Mléčně bílá",
        "supplierName": "Milky White",
        "hex": "#e5e6da",
        "lightControl": "blackout",
        "sortPrice": 77.49090000000001,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05475.png",
        "preview": "/uploads/configurator/dream-blinds/333.05475.png"
      },
      {
        "code": "333.05476",
        "name": "Béžovošedá",
        "supplierName": "Beige Gray",
        "hex": "#c6c6be",
        "lightControl": "blackout",
        "sortPrice": 77.49090000000001,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05476.png",
        "preview": "/uploads/configurator/dream-blinds/333.05476.png"
      },
      {
        "code": "333.05477",
        "name": "Elegantní šedá",
        "supplierName": "Elegant Gray",
        "hex": "#bab3b1",
        "lightControl": "blackout",
        "sortPrice": 77.49090000000001,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05477.jpg",
        "preview": "/uploads/configurator/dream-blinds/333.05477.png"
      },
      {
        "code": "333.05479",
        "name": "Perleťově bílá",
        "supplierName": "Pearl White",
        "hex": "#f3f3f3",
        "lightControl": "blackout",
        "sortPrice": 77.49090000000001,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05479.jpg",
        "preview": "/uploads/configurator/dream-blinds/333.05479.png"
      },
      {
        "code": "333.05483",
        "name": "Elegantní šedá",
        "supplierName": "Elegant Gray",
        "hex": "#9d9d9d",
        "lightControl": "blackout",
        "sortPrice": 77.49090000000001,
        "image": "/uploads/wintom_fabrics/dream-blinds-333_05483.png",
        "preview": "/uploads/configurator/dream-blinds/333.05483.png"
      }
    ]
  },
  {
    "slug": "zaluzie-venetien",
    "maltaId": "venetien-blinds",
    "supportsMotor": true,
    "systems": [
      {
        "id": "electric_vertical_venetian_curtain",
        "name": "Elektrický vertikální závěs Venetian",
        "supplierName": "Electric Vertical Venetian Curtain",
        "control": "motor",
        "lightControl": "blackout",
        "limits": {
          "minWidthMm": 1000,
          "maxWidthMm": 6000,
          "minHeightMm": null,
          "maxHeightMm": 6000,
          "maxAreaM2": 18,
          "maxLoadKg": null
        },
        "openingLimits": {
          "single": {
            "minWidthMm": 1000,
            "maxWidthMm": 3500,
            "minHeightMm": null,
            "maxHeightMm": 6000,
            "maxAreaM2": 18,
            "maxLoadKg": null
          },
          "dual": {
            "minWidthMm": 1000,
            "maxWidthMm": 6000,
            "minHeightMm": null,
            "maxHeightMm": 6000,
            "maxAreaM2": 18,
            "maxLoadKg": null
          }
        },
        "images": [
          "/uploads/blind-systems/venetien-vertical/electric_vertical_venetian_curtain_product_and_parameters.jpg",
          "/uploads/blind-systems/venetien-vertical/electric_vertical_venetian_curtain_accessories.jpg",
          "/uploads/blind-systems/venetien-vertical/electric_vertical_venetian_curtain_full_page.jpg"
        ]
      },
      {
        "id": "manual_vertical_venetian_curtain",
        "name": "Ruční vertikální závěs Venetian",
        "supplierName": "Manual Vertical Venetian Curtain",
        "control": "manual",
        "lightControl": "blackout",
        "limits": {
          "minWidthMm": 600,
          "maxWidthMm": 6000,
          "minHeightMm": null,
          "maxHeightMm": 6000,
          "maxAreaM2": 18,
          "maxLoadKg": null
        },
        "openingLimits": {
          "single": {
            "minWidthMm": 600,
            "maxWidthMm": 3500,
            "minHeightMm": null,
            "maxHeightMm": 6000,
            "maxAreaM2": 18,
            "maxLoadKg": null
          },
          "dual": {
            "minWidthMm": 1000,
            "maxWidthMm": 6000,
            "minHeightMm": null,
            "maxHeightMm": 6000,
            "maxAreaM2": 18,
            "maxLoadKg": null
          }
        },
        "images": [
          "/uploads/blind-systems/venetien-vertical/manual_vertical_venetian_curtain_product_and_parameters.jpg",
          "/uploads/blind-systems/venetien-vertical/manual_vertical_venetian_curtain_accessories.jpg",
          "/uploads/blind-systems/venetien-vertical/manual_vertical_venetian_curtain_full_page.jpg"
        ]
      }
    ],
    "motors": [
      {
        "id": "motor-lithium-remote-76",
        "code": "LITHIUM-REMOTE-76",
        "name": "Standardní motor s lithiovou baterií a dálkovým ovládáním",
        "supplierName": "Standard lithium battery motor with remote control",
        "voltage": null,
        "current": null,
        "torqueNm": null,
        "speedRpm": null,
        "powerW": null,
        "frequencyMhz": null,
        "dimensions": null,
        "images": []
      }
    ],
    "colors": [
      {
        "code": "310.89003",
        "name": "Stříbrná",
        "supplierName": "Sliver",
        "hex": "#cccccc",
        "lightControl": "",
        "sortPrice": 68.7996,
        "image": "/uploads/wintom_fabrics/venetien-blinds-310_89003.jpg",
        "preview": null
      },
      {
        "code": "333.06001",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#f6f6f6",
        "lightControl": "semi-transparent",
        "sortPrice": 52.99090909090908,
        "image": "/uploads/wintom_fabrics/venetien-blinds-333_06001.png",
        "preview": "/uploads/configurator/venetien-vertical/333.06001.png"
      },
      {
        "code": "333.06002",
        "name": "Béžová",
        "supplierName": "Beige",
        "hex": "#e5e2d9",
        "lightControl": "semi-transparent",
        "sortPrice": 52.99090909090908,
        "image": "/uploads/wintom_fabrics/venetien-blinds-333_06002.png",
        "preview": "/uploads/configurator/venetien-vertical/333.06002.png"
      },
      {
        "code": "333.06003",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#d3d1c8",
        "lightControl": "semi-transparent",
        "sortPrice": 52.99090909090908,
        "image": "/uploads/wintom_fabrics/venetien-blinds-333_06003.png",
        "preview": "/uploads/configurator/venetien-vertical/333.06003.png"
      },
      {
        "code": "333.06010",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#f6f6f6",
        "lightControl": "blackout",
        "sortPrice": 50.30181818181825,
        "image": "/uploads/wintom_fabrics/venetien-blinds-333_06010.png",
        "preview": "/uploads/configurator/venetien-vertical/333.06010.png"
      },
      {
        "code": "333.06011",
        "name": "Béžová",
        "supplierName": "Beige",
        "hex": "#e7e4c3",
        "lightControl": "blackout",
        "sortPrice": 50.30181818181825,
        "image": "/uploads/wintom_fabrics/venetien-blinds-333_06011.jpg",
        "preview": null
      },
      {
        "code": "333.06021",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#fbfcfa",
        "lightControl": "semi-transparent",
        "sortPrice": 52.99090909090908,
        "image": "/uploads/wintom_fabrics/venetien-blinds-333_06021.png",
        "preview": "/uploads/configurator/venetien-vertical/333.06021.png"
      },
      {
        "code": "333.06022",
        "name": "Béžová",
        "supplierName": "Beige",
        "hex": "#d2c097",
        "lightControl": "semi-transparent",
        "sortPrice": 52.99090909090908,
        "image": "/uploads/wintom_fabrics/venetien-blinds-333_06022.png",
        "preview": "/uploads/configurator/venetien-vertical/333.06022.png"
      },
      {
        "code": "333.06023",
        "name": "Modrá",
        "supplierName": "Blue",
        "hex": "#b8cedc",
        "lightControl": "semi-transparent",
        "sortPrice": 52.99090909090908,
        "image": "/uploads/wintom_fabrics/venetien-blinds-333_06023.jpg",
        "preview": null
      },
      {
        "code": "333.06031",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#f6f7f2",
        "lightControl": "semi-transparent",
        "sortPrice": 46.66363636363641,
        "image": "/uploads/wintom_fabrics/venetien-blinds-333_06031.png",
        "preview": "/uploads/configurator/venetien-vertical/333.06031.png"
      },
      {
        "code": "333.06032",
        "name": "Lněná",
        "supplierName": "Linen",
        "hex": "#c5a976",
        "lightControl": "semi-transparent",
        "sortPrice": 46.66363636363641,
        "image": "/uploads/wintom_fabrics/venetien-blinds-333_06032.png",
        "preview": "/uploads/configurator/venetien-vertical/333.06032.png"
      },
      {
        "code": "333.06033",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#968e82",
        "lightControl": "semi-transparent",
        "sortPrice": 46.66363636363641,
        "image": "/uploads/wintom_fabrics/venetien-blinds-333_06033.png",
        "preview": "/uploads/configurator/venetien-vertical/333.06033.png"
      },
      {
        "code": "333.06034",
        "name": "Kávová",
        "supplierName": "Coffee",
        "hex": "#8b5033",
        "lightControl": "semi-transparent",
        "sortPrice": 46.66363636363641,
        "image": "/uploads/wintom_fabrics/venetien-blinds-333_06034.jpg",
        "preview": null
      }
    ]
  },
  {
    "slug": "vertikalni-zaclony",
    "maltaId": "vertical-sheers",
    "supportsMotor": false,
    "systems": [
      {
        "id": "standard",
        "name": "Standardní systém záclon",
        "supplierName": "Standard Sheer System",
        "control": "manual",
        "lightControl": "semi-transparent",
        "limits": {
          "minWidthMm": null,
          "maxWidthMm": null,
          "minHeightMm": null,
          "maxHeightMm": null,
          "maxAreaM2": null,
          "maxLoadKg": null
        },
        "openingLimits": null,
        "images": [
          "/uploads/products/configurator-type-cards-v3/vertical-sheers.jpg"
        ]
      }
    ],
    "motors": [],
    "colors": [
      {
        "code": "602.01001",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 15.818166,
        "image": "/uploads/wintom_fabrics/sheers-602_01001.jpg",
        "preview": null
      },
      {
        "code": "602.01002",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 15.818166,
        "image": "/uploads/wintom_fabrics/sheers-602_01002.jpg",
        "preview": null
      },
      {
        "code": "602.01003",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 15.818166,
        "image": "/uploads/wintom_fabrics/sheers-602_01003.jpg",
        "preview": null
      },
      {
        "code": "602.01004",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 15.818166,
        "image": "/uploads/wintom_fabrics/sheers-602_01004.jpg",
        "preview": null
      },
      {
        "code": "602.01005",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 15.818166,
        "image": "/uploads/wintom_fabrics/sheers-602_01005.jpg",
        "preview": null
      },
      {
        "code": "602.01006",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 15.818166,
        "image": "/uploads/wintom_fabrics/sheers-602_01006.jpg",
        "preview": null
      },
      {
        "code": "602.01007",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 15.818166,
        "image": "/uploads/wintom_fabrics/sheers-602_01007.jpg",
        "preview": null
      },
      {
        "code": "602.01008",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 15.818166,
        "image": "/uploads/wintom_fabrics/sheers-602_01008.jpg",
        "preview": null
      },
      {
        "code": "602.01009",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 15.818166,
        "image": "/uploads/wintom_fabrics/sheers-602_01009.jpg",
        "preview": null
      },
      {
        "code": "602.01010",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01010.jpg",
        "preview": null
      },
      {
        "code": "602.01011",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01011.jpg",
        "preview": null
      },
      {
        "code": "602.01012",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01012.jpg",
        "preview": null
      },
      {
        "code": "602.01013",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01013.jpg",
        "preview": null
      },
      {
        "code": "602.01014",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01014.jpg",
        "preview": null
      },
      {
        "code": "602.01015",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01015.jpg",
        "preview": null
      },
      {
        "code": "602.01016",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01016.jpg",
        "preview": null
      },
      {
        "code": "602.01017",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01017.jpg",
        "preview": null
      },
      {
        "code": "602.01018",
        "name": "Šedá",
        "supplierName": "Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01018.jpg",
        "preview": null
      },
      {
        "code": "602.01019",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01019.jpg",
        "preview": null
      },
      {
        "code": "602.01020",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01020.jpg",
        "preview": null
      },
      {
        "code": "602.01021",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01021.jpg",
        "preview": null
      },
      {
        "code": "602.01022",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01022.jpg",
        "preview": null
      },
      {
        "code": "602.01023",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 17.400087,
        "image": "/uploads/wintom_fabrics/sheers-602_01023.jpg",
        "preview": null
      },
      {
        "code": "602.01024",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 21.354498,
        "image": "/uploads/wintom_fabrics/sheers-602_01024.jpg",
        "preview": null
      },
      {
        "code": "602.01025",
        "name": "Lomená bílá",
        "supplierName": "Off-White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 21.354498,
        "image": "/uploads/wintom_fabrics/sheers-602_01025.jpg",
        "preview": null
      },
      {
        "code": "602.01026",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 21.354498,
        "image": "/uploads/wintom_fabrics/sheers-602_01026.jpg",
        "preview": null
      },
      {
        "code": "602.01027",
        "name": "Světle šedá",
        "supplierName": "Light Gray",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 21.354498,
        "image": "/uploads/wintom_fabrics/sheers-602_01027.jpg",
        "preview": null
      },
      {
        "code": "602.01028",
        "name": "Slonovinová",
        "supplierName": "Ivory",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 21.354498,
        "image": "/uploads/wintom_fabrics/sheers-602_01028.jpg",
        "preview": null
      },
      {
        "code": "602.01030",
        "name": "Bílá",
        "supplierName": "White",
        "hex": "#cccccc",
        "lightControl": "semi-transparent",
        "sortPrice": 21.354498,
        "image": "/uploads/wintom_fabrics/sheers-602_01030.jpg",
        "preview": null
      }
    ]
  }
];
