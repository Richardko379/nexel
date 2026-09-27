export type ProjectType = 'elektro' | 'data' | 'smart';

interface ProjectText {
  title: string;
  category: string;
  location: string;
  description: string;
  about: string;
  scope: string[];
}

export interface Project {
  id: number;
  type: ProjectType;
  year: string;
  image: string;
  gallery: string[];
  sk: ProjectText;
  de: ProjectText;
}

export const PROJECTS: Project[] = [
  {
    id: 5,
    type: 'elektro',
    year: '2025',
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406058/IMG_6552_f6ilnq.jpg',
    gallery: [
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406058/IMG_6552_f6ilnq.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406057/IMG_6553_rav0xy.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406056/IMG_6453_ouvfns.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770571741/IMG_8410_fciexs.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770571740/IMG_8403_byco8i.jpg',
    ],
    sk: {
      title: 'Bytové inštalácie',
      category: 'Domové Inštalácie',
      location: 'Slovensko',
      description:
        'Komplexné elektroinštalačné práce pre rodinné domy a byty. Dôraz na detail, čistotu prevedenia a bezpečnosť podľa najnovších noriem.',
      about:
        'Realizácia kompletných elektroinštalačných prác pre rodinné domy a byty. Projekty zahŕňali hrubú inštaláciu, drážkovanie, kompletáž vypínačov a zásuviek, ako aj výmenu a modernizáciu bytových rozvádzačov. Dôraz bol kladený na bezpečnosť, estetiku a prípravu pre moderné spotrebiče.',
      scope: [
        'Hrubá inštalácia a drážkovanie',
        'Kompletáž vypínačov a zásuviek',
        'Výmena a modernizácia bytových rozvádzačov',
        'Príprava pre indukčné dosky a spotrebiče',
        'Odborná prehliadka',
      ],
    },
    de: {
      title: 'Wohnungsinstallationen',
      category: 'Hausinstallationen',
      location: 'Slowakei',
      description:
        'Umfassende Elektroinstallationsarbeiten für Einfamilienhäuser und Wohnungen. Fokus auf Detail, saubere Ausführung und Sicherheit nach aktuellen Normen.',
      about:
        'Ausführung kompletter Elektroinstallationsarbeiten für Einfamilienhäuser und Wohnungen. Die Projekte umfassten Rohinstallation, Schlitzarbeiten, die Montage von Schaltern und Steckdosen sowie den Austausch und die Modernisierung von Wohnungsverteilern. Der Schwerpunkt lag auf Sicherheit, Ästhetik und der Vorbereitung für moderne Haushaltsgeräte.',
      scope: [
        'Rohinstallation und Schlitzarbeiten',
        'Montage von Schaltern und Steckdosen',
        'Austausch und Modernisierung von Wohnungsverteilern',
        'Vorbereitung für Induktionskochfelder und Großgeräte',
        'Elektrische Prüfung und Abnahme',
      ],
    },
  },
  {
    id: 6,
    type: 'elektro',
    year: '2025',
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406551/IMG_4174_znsklv.jpg',
    gallery: [
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406550/IMG_7922_ahu4iv.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406550/IMG_7923_huakuc.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406549/IMG_1560_whceao.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406549/IMG_1559_gsbppi.jpg',
    ],
    sk: {
      title: 'Hotelový Komplex',
      category: 'Elektroinštalácie',
      location: 'Nemecko',
      description:
        'Rozsiahla elektroinštalácia pre moderný hotelový komplex v Nemecku. Realizácia silnoprúdových rozvodov, osvetlenia a technického zázemia.',
      about:
        'Rozsiahla elektroinštalácia pre moderný hotelový komplex v Nemecku. Práce zahŕňali kompletné silnoprúdové inštalácie izieb, montáž hlavných rozvádzačov, inštaláciu núdzového a prevádzkového osvetlenia a kabeláž pre hotelové systémy v súlade s nemeckými normami.',
      scope: [
        'Kompletné silnoprúdové inštalácie izieb',
        'Montáž a zapojenie hlavných rozvádzačov',
        'Inštalácia núdzového a prevádzkového osvetlenia',
        'Kabeláž pre hotelové systémy',
        'Inštalácia dátových zásuviek a rozvádzačov',
      ],
    },
    de: {
      title: 'Hotelkomplex',
      category: 'Elektroinstallationen',
      location: 'Deutschland',
      description:
        'Umfangreiche Elektroinstallation für einen modernen Hotelkomplex in Deutschland. Ausführung von Starkstromverteilung, Beleuchtung und technischer Infrastruktur.',
      about:
        'Umfangreiche Elektroinstallation für einen modernen Hotelkomplex in Deutschland. Die Arbeiten umfassten die komplette Starkstrominstallation der Zimmer, die Montage der Hauptverteiler, die Installation von Sicherheits- und Allgemeinbeleuchtung sowie die Verkabelung der Hotelsysteme gemäß deutschen Normen.',
      scope: [
        'Komplette Starkstrominstallation der Zimmer',
        'Montage und Anschluss der Hauptverteiler',
        'Installation von Sicherheits- und Allgemeinbeleuchtung',
        'Verkabelung für Hotelsysteme',
        'Installation von Datendosen und Netzwerkverteilern',
      ],
    },
  },
  {
    id: 7,
    type: 'elektro',
    year: '2024',
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770568891/20230725_074555_unjj8s.jpg',
    gallery: [
      'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770568890/20230708_090651_mlgsop.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770568891/20230724_083640_odguwb.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770568891/20230530_080728_aqhahe.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770568890/20230731_152539_xbuedt.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770568891/20230621_133212_y6wrev.jpg',
    ],
    sk: {
      title: 'Domov dôchodcov',
      category: 'Elektroinštalácie',
      location: 'Nemecko',
      description:
        'Kompletné elektroinštalačné práce pre novostavbu pobytového zariadenia. Inštalácia silnoprúdových rozvodov, osvetlenia a dorozumievacích systémov.',
      about:
        'Komplexná realizácia elektroinštalácií pre novostavbu zariadenia sociálnych služieb. Projekt zahŕňal inštaláciu bezhalogénovej kabeláže v únikových trasách, systém privolania personálu, núdzové a zálohované osvetlenie a dátovú infraštruktúru pre administratívnu časť objektu.',
      scope: [
        'Kompletná kabeláž pre hosťovské izby',
        'Systém privolania sestry',
        'Montáž a zapojenie podružných rozvádzačov',
        'Inštalácia LED osvetlenia s riadením DALI',
        'Dátové rozvody pre administratívu',
      ],
    },
    de: {
      title: 'Pflegeheim',
      category: 'Elektroinstallationen',
      location: 'Deutschland',
      description:
        'Komplette Elektroinstallationsarbeiten für den Neubau einer Pflegeeinrichtung. Installation von Starkstromverteilung, Beleuchtung und Rufanlagen.',
      about:
        'Umfassende Ausführung der Elektroinstallation für den Neubau einer Pflegeeinrichtung. Das Projekt umfasste halogenfreie Verkabelung in Fluchtwegen, eine Schwesternrufanlage, Sicherheits- und Notbeleuchtung sowie die Dateninfrastruktur für den Verwaltungsbereich.',
      scope: [
        'Komplette Verkabelung der Bewohnerzimmer',
        'Schwesternrufanlage',
        'Montage und Anschluss von Unterverteilungen',
        'LED-Beleuchtung mit DALI-Steuerung',
        'Datenverkabelung für die Verwaltung',
      ],
    },
  },
  {
    id: 8,
    type: 'elektro',
    year: '2023',
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770569039/IMG_6836_nglhot.jpg',
    gallery: [
      'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770569041/IMG_6840_slv127.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770569040/IMG_6796_m1uhvy.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770569040/IMG_0630_segmd4.jpg',
    ],
    sk: {
      title: 'Výroba trafostaníc',
      category: 'Priemyselné Inštalácie',
      location: 'Nemecko',
      description:
        'Montáž a kompletizácia distribučných trafostaníc pre nemeckú energetickú sieť. Inštalácia VN/NN technológií.',
      about:
        'Montáž a kompletizácia distribučných trafostaníc pre energetickú sieť. Projekt zahŕňal osadenie transformátorov, prepojenie VN a NN rozvádzačov, inštaláciu meracích obvodov a kompletné uzemnenie technológií v kompaktných betónových skeletoch.',
      scope: [
        'Montáž VN rozvádzačov',
        'Inštalácia NN rozvádzačov',
        'Kabeláž a pripojenie transformátorov',
        'Uzemnenie a bezpečnostné prvky',
      ],
    },
    de: {
      title: 'Bau von Trafostationen',
      category: 'Industrieinstallationen',
      location: 'Deutschland',
      description:
        'Montage und Komplettierung von Ortsnetzstationen für das deutsche Stromnetz. Installation von MS/NS-Technik.',
      about:
        'Montage und Komplettierung von Ortsnetzstationen für das Energienetz. Das Projekt umfasste die Aufstellung der Transformatoren, die Verbindung der Mittel- und Niederspannungsschaltanlagen, die Installation von Messkreisen sowie die komplette Erdung der Technik in kompakten Betonstationen.',
      scope: [
        'Montage von MS-Schaltanlagen',
        'Installation von NS-Verteilungen',
        'Verkabelung und Anschluss der Transformatoren',
        'Erdung und Sicherheitseinrichtungen',
      ],
    },
  },
  {
    id: 9,
    type: 'elektro',
    year: '2024',
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770571500/IMG_6392_ozxcpy.jpg',
    gallery: [
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770571498/IMG_6170_abuoaw.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770571499/IMG_6241_hxuylr.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770571500/IMG_6380_ccyqjt.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770571499/IMG_6240_mnvgd4.jpg',
    ],
    sk: {
      title: 'Obchodné centrum',
      category: 'Komerčné priestory',
      location: 'Rakúsko',
      description:
        'Elektroinštalácie pre obchodné priestory v Rakúsku. Realizácia osvetlenia, silnoprúdových rozvodov a dátovej infraštruktúry.',
      about:
        'Elektroinštalácie pre obchodné priestory s dôrazom na estetiku inštalácií. Realizovali sme montáž káblových trás pomocou plošín, inštaláciu dizajnového a technického osvetlenia, zapojenie rozvádzačov pre obchodné jednotky a prípravu pre slaboprúdové systémy.',
      scope: [
        'Montáž káblových žľabov a roštov',
        'Kabeláž pre osvetlenie a zásuvkové obvody',
        'Zapojenie rozvádzačov pre obchodné jednotky',
        'Inštalácia núdzového osvetlenia',
        'Príprava pre slaboprúdové systémy',
      ],
    },
    de: {
      title: 'Einkaufszentrum',
      category: 'Gewerbeflächen',
      location: 'Österreich',
      description:
        'Elektroinstallationen für Verkaufsflächen in Österreich. Ausführung von Beleuchtung, Starkstromverteilung und Dateninfrastruktur.',
      about:
        'Elektroinstallationen für Verkaufsflächen mit besonderem Augenmerk auf eine ästhetische Ausführung. Wir montierten Kabeltrassen mithilfe von Hebebühnen, installierten Design- und Technikbeleuchtung, schlossen die Verteiler der Ladeneinheiten an und bereiteten die Schwachstromsysteme vor.',
      scope: [
        'Montage von Kabelrinnen und Gitterrinnen',
        'Verkabelung für Beleuchtung und Steckdosenstromkreise',
        'Anschluss der Verteiler für Ladeneinheiten',
        'Installation der Sicherheitsbeleuchtung',
        'Vorbereitung für Schwachstromsysteme',
      ],
    },
  },
  {
    id: 10,
    type: 'elektro',
    year: '2023',
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572084/IMG_3335_bb1eul.jpg',
    gallery: [
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572088/IMG_1559_p5g0c4.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572086/IMG_3333_q0ogfm.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572087/IMG_2279_vdnphh.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572085/IMG_1560_ojpnyj.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572086/IMG_1567_ympu1o.jpg',
    ],
    sk: {
      title: 'Kancelárske priestory',
      category: 'Komerčné priestory',
      location: 'Rakúsko',
      description:
        'Inštalácia silnoprúdových a slaboprúdových rozvodov pre moderné administratívne priestory. Dôraz na funkčnosť a flexibilitu pracovných miest.',
      about:
        'Inštalácia silnoprúdových a slaboprúdových rozvodov v administratívnej budove. Riešenie zahŕňalo komplexnú kabeláž v podlahových kanáloch, montáž zásuviek, dátové rozvody Cat.7, osvetlenie kancelárií a montáž požiarnych hlásičov.',
      scope: [
        'Montáž zásuviek',
        'Dátové rozvody Cat.7',
        'Úpravy a doplnenie rozvádzačov',
        'Osvetlenie chodieb a kancelárií',
        'Montáž požiarnych hlásičov',
      ],
    },
    de: {
      title: 'Büroräume',
      category: 'Gewerbeflächen',
      location: 'Österreich',
      description:
        'Installation von Stark- und Schwachstromverteilungen für moderne Büroflächen. Fokus auf Funktionalität und flexible Arbeitsplätze.',
      about:
        'Installation von Stark- und Schwachstromverteilungen in einem Verwaltungsgebäude. Die Lösung umfasste die komplette Verkabelung in Bodenkanälen, die Montage von Steckdosen, Datenverkabelung Cat.7, Bürobeleuchtung sowie die Montage von Brandmeldern.',
      scope: [
        'Montage von Steckdosen',
        'Datenverkabelung Cat.7',
        'Anpassung und Erweiterung von Verteilern',
        'Beleuchtung von Fluren und Büros',
        'Montage von Brandmeldern',
      ],
    },
  },
  {
    id: 11,
    type: 'elektro',
    year: '2025',
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572338/IMG_9385_mocqif.jpg',
    gallery: ['https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572338/IMG_9385_mocqif.jpg'],
    sk: {
      title: 'Výrobný závod Volvo',
      category: 'Priemyselné Inštalácie',
      location: 'Valaliky',
      description:
        'Elektroinštalačné práce na výstavbe nového strategického závodu pre elektromobily na východnom Slovensku.',
      about:
        'Elektroinštalačné práce na výstavbe strategického závodu. Realizácia zahŕňala montáž káblových žľabov, silnoprúdové rozvody pre technológie, priemyselné osvetlenie a zapojenie rozvádzačov v prostredí prebiehajúcej výstavby.',
      scope: [
        'Montáž káblových žľabov a roštov',
        'Silnoprúdové rozvody pre technológie',
        'Inštalácia priemyselného osvetlenia',
        'Zapojenie rozvádzačov NN',
      ],
    },
    de: {
      title: 'Volvo-Produktionswerk',
      category: 'Industrieinstallationen',
      location: 'Valaliky (SK)',
      description:
        'Elektroinstallationsarbeiten beim Bau eines neuen strategischen Werks für Elektrofahrzeuge in der Ostslowakei.',
      about:
        'Elektroinstallationsarbeiten beim Bau eines strategischen Werks. Die Ausführung umfasste die Montage von Kabelrinnen, Starkstromverteilungen für Produktionsanlagen, Industriebeleuchtung und den Anschluss von Verteilern während des laufenden Baubetriebs.',
      scope: [
        'Montage von Kabelrinnen und Gitterrinnen',
        'Starkstromverteilung für Produktionsanlagen',
        'Installation von Industriebeleuchtung',
        'Anschluss von NS-Verteilern',
      ],
    },
  },
  {
    id: 13,
    type: 'data',
    year: '2025',
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580086/IMG_5854_gr5jxa.jpg',
    gallery: [
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580086/IMG_5854_gr5jxa.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580088/IMG_5527_sgcgmb.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580083/IMG_6531_fmoetf.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770573475/IMG_6317_twywwh.jpg',
    ],
    sk: {
      title: 'SD-WAN infraštruktúra',
      category: 'Dátové siete',
      location: 'Slovensko',
      description:
        'Modernizácia sieťovej infraštruktúry pre sieť zdravotníckych prevádzok. Implementácia SD-WAN technológie pre bezpečné prepojenie.',
      about:
        'Modernizácia sieťovej infraštruktúry pre sieť zdravotníckych prevádzok s cieľom zabezpečiť stabilné a bezpečné prepojenie. Implementácia zahŕňala kompletnú výmenu dátových rozvádzačov, nasadenie SD-WAN routerov, aktívnych prvkov a organizáciu kabeláže.',
      scope: [
        'Výmena a organizácia RACK skríň',
        'Inštalácia SD-WAN routerov a switchov',
        'Cable management (usporiadanie kabeláže)',
        'Záložné napájanie (UPS)',
      ],
    },
    de: {
      title: 'SD-WAN-Infrastruktur',
      category: 'Datennetze',
      location: 'Slowakei',
      description:
        'Modernisierung der Netzwerkinfrastruktur für ein Netz medizinischer Einrichtungen. Implementierung von SD-WAN für eine sichere Standortvernetzung.',
      about:
        'Modernisierung der Netzwerkinfrastruktur für ein Netz medizinischer Einrichtungen mit dem Ziel einer stabilen und sicheren Vernetzung. Die Umsetzung umfasste den kompletten Austausch der Netzwerkschränke, den Einsatz von SD-WAN-Routern und aktiven Komponenten sowie die Neuordnung der Verkabelung.',
      scope: [
        'Austausch und Organisation der Rackschränke',
        'Installation von SD-WAN-Routern und Switches',
        'Kabelmanagement',
        'Unterbrechungsfreie Stromversorgung (USV)',
      ],
    },
  },
  {
    id: 14,
    type: 'data',
    year: '2025',
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580081/IMG_0070_hmu9nw.jpg',
    gallery: [
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580081/IMG_0070_hmu9nw.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580075/IMG_0056_b9naiz.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580075/IMG_0047_tblgtz.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580074/IMG_0041_t1bhef.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580080/IMG_0069_qn690h.jpg',
    ],
    sk: {
      title: 'Štrukturovaná kabeláž kancelárií',
      category: 'Dátové siete',
      location: 'Slovensko',
      description:
        'Komplexná realizácia štruktúrovanej kabeláže pre kancelárske priestory. Zabezpečenie rýchlej a stabilnej konektivity pre pracovné stanice.',
      about:
        'Realizácia modernej dátovej infraštruktúry pre kancelárske priestory. Projekt zahŕňal ťahanie a vyväzovanie kabeláže v zdvojených podlahách a stropoch. Dôraz bol kladený na prehľadnosť a budúcu rozšíriteľnosť siete.',
      scope: [
        'Montáž káblových žľabov',
        'Ťahanie a vyväzovanie kabeláže',
        'Organizácia káblov v zdvojených podlahách',
        'Príprava trás pre slaboprúd',
      ],
    },
    de: {
      title: 'Strukturierte Verkabelung für Büros',
      category: 'Datennetze',
      location: 'Slowakei',
      description:
        'Komplette Ausführung der strukturierten Verkabelung für Büroflächen. Schnelle und stabile Konnektivität für alle Arbeitsplätze.',
      about:
        'Ausführung einer modernen Dateninfrastruktur für Büroflächen. Das Projekt umfasste das Einziehen und Bündeln der Verkabelung in Doppelböden und Decken. Der Fokus lag auf Übersichtlichkeit und künftiger Erweiterbarkeit des Netzes.',
      scope: [
        'Montage von Kabelrinnen',
        'Einziehen und Bündeln der Verkabelung',
        'Kabelführung in Doppelböden',
        'Vorbereitung der Trassen für Schwachstrom',
      ],
    },
  },
  {
    id: 15,
    type: 'smart',
    year: '2024',
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770673419/IMG_2720_etgrzo.jpg',
    gallery: [
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770673419/IMG_2720_etgrzo.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770673417/IMG_2719_g8yzmu.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770673416/IMG_2718_hittku.jpg',
      'https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770673415/IMG_84C3B901-B8B1-42DD-AB69-A7584BDF5BFF_rf1vwb.jpg',
    ],
    sk: {
      title: 'Realizácie zabezpečovacích a smart riešení',
      category: 'Smart & Zabezpečenie',
      location: 'Slovensko',
      description:
        'Inštalácie moderných kamerových systémov a inteligentnej elektroinštalácie pre zvýšenie bezpečnosti a komfortu.',
      about:
        'Realizácia komplexných zabezpečovacích a smart systémov pre rodinné domy a firmy. Zameranie na integráciu kamerových systémov s vysokým rozlíšením, videovrátnikov a inteligentného riadenia domácnosti pre maximálny komfort a bezpečnosť užívateľov.',
      scope: [
        'Montáž kamerových systémov',
        'Inštalácia zabezpečovacích systémov',
        'Smart Home integrácia',
        'Videovrátniky a prístupové systémy',
        'Nastavenie vzdialeného prístupu',
      ],
    },
    de: {
      title: 'Sicherheits- und Smart-Home-Lösungen',
      category: 'Smart & Sicherheit',
      location: 'Slowakei',
      description:
        'Installation moderner Videoüberwachungssysteme und intelligenter Elektroinstallationen für mehr Sicherheit und Komfort.',
      about:
        'Ausführung umfassender Sicherheits- und Smart-Systeme für Einfamilienhäuser und Unternehmen. Schwerpunkt ist die Integration hochauflösender Videoüberwachung, Video-Türsprechanlagen und intelligenter Haussteuerung für maximalen Komfort und Sicherheit.',
      scope: [
        'Montage von Videoüberwachungssystemen',
        'Installation von Alarmanlagen',
        'Smart-Home-Integration',
        'Video-Türsprechanlagen und Zutrittskontrolle',
        'Einrichtung des Fernzugriffs',
      ],
    },
  },
];
