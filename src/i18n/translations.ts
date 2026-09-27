export type Lang = 'sk' | 'de';

const sk = {
  nav: {
    services: 'Naše riešenia',
    about: 'O nás',
    projects: 'Projekty',
    contact: 'Kontakt',
    openMenu: 'Otvoriť menu',
    closeMenu: 'Zatvoriť menu',
    switchLanguage: 'Zmeniť jazyk',
  },
  hero: {
    titleLine1: 'Infraštruktúra pre',
    titleLine2: 'moderné budovy',
    subtitle: 'Realizujeme elektroinštalácie, dátové siete a smart riešenia pre firmy aj domácnosti.',
    ctaStart: 'Začať projekt',
    ctaReferences: 'Naše referencie',
  },
  services: {
    label: 'Naše riešenia',
    titleLine1: 'Technológie, ktoré tvoria',
    titleLine2: 'váš priestor',
    intro: 'Každá z našich služieb je vykonávaná s dôrazom na detail a dlhodobú funkčnosť.',
    consult: 'Konzultovať riešenie',
    more: 'Viac informácií',
  },
  features: {
    label: 'O nás',
    titleLine1: 'Technické riešenia, ktoré',
    titleLine2: 'fungujú v praxi',
    intro1:
      'Nexel Systems je realizačný partner pre elektroinštalácie, dátové siete a zabezpečovacie systémy v bytových aj komerčných objektoch.',
    intro2:
      'Zameriavame sa na presnú realizáciu, poriadok v inštaláciách a technické riešenia, ktoré fungujú spoľahlivo v každodennej praxi.',
    card1Title: 'Individuálny prístup ku každému projektu',
    card1Text:
      'Každý projekt vnímame ako jedinečný. Starostlivo analyzujeme potreby klienta a navrhujeme riešenia, ktoré presne zodpovedajú jeho očakávaniam a budúcim požiadavkám.',
    card2Title: 'Funkčný výsledok je cieľ, nie bonus',
    card2Text:
      'Naším cieľom nie je len „niečo namontovať“, ale odovzdať systém, ktorý funguje hneď po dokončení. Či ide o byt, rodinný dom, kancelárie alebo väčší objekt, technické riešenie má slúžiť bez potreby neustálych zásahov.',
    card3Title: 'Nexel Systems má zmysel, ak:',
    card3Items: [
      'chcete kvalitnú elektroinštaláciu bez chaosu',
      'hľadáte realizačný tím, na ktorý sa dá spoľahnúť',
      'záleží vám na bezpečnosti a funkčnosti',
      'potrebujete riešenie pre dom, byt alebo firmu',
    ],
  },
  references: {
    titleLine1: 'Projekty, ktoré hovoria',
    titleLine2: 'za nás',
    filters: {
      all: 'Všetky',
      elektro: 'Elektroinštalácie',
      data: 'Dátové siete',
      smart: 'Smart & Zabezpečenie',
    },
    empty: 'Pre tento výber nemáme projekty.',
    moreInfo: 'Viac info',
    scope: 'Rozsah prác',
    gallery: 'Galéria',
    close: 'Zatvoriť',
  },
  contact: {
    label: 'Kontaktujte nás',
    title: 'Začnime váš projekt',
    intro: 'Máte otázky? Neváhajte nás kontaktovať.',
    call: 'Zavolajte nám',
    write: 'Napíšte nám',
    whatsappCta: 'Napísať správu',
    successTitle: 'Správa odoslaná!',
    successText: 'Ďakujeme za váš záujem. Náš tím prijme vašu požiadavku a ozveme sa vám čo najskôr.',
    sendAnother: 'Odoslať ďalšiu správu',
    errorTitle: 'Vyskytla sa chyba',
    errorText: 'Správu sa nepodarilo odoslať. Skontrolujte svoje internetové pripojenie a skúste to znova.',
    retry: 'Skúsiť znova',
    emailLabel: 'Email',
    emailPlaceholder: 'vas@email.com',
    messageLabel: 'Správa',
    messagePlaceholder: 'Stručne opíšte váš projekt...',
    submit: 'Odoslať správu',
    submitting: 'Odosielam...',
    sendingOverlay: 'Odosielam správu...',
    emailSubject: 'Nová správa z webu Nexel Systems',
  },
  footer: {
    backToTop: 'Späť hore',
  },
  whatsapp: {
    ariaLabel: 'Napísať správu na WhatsApp',
  },
  serviceDetail: {
    back: 'Späť na úvodnú stránku',
    consult: 'Nezáväzná konzultácia',
    otherServices: 'Ďalšie naše služby',
  },
  seo: {
    home: {
      title: 'Nexel Systems | Elektroinštalácie, Dátové siete & Smart riešenia',
      description:
        'Realizujeme elektroinštalácie, dátové siete a smart riešenia pre firmy aj domácnosti na Slovensku. Spoľahlivé technické riešenia na mieru.',
    },
    contact: {
      title: 'Kontakt | Nexel Systems',
      description:
        'Kontaktujte Nexel Systems. Zavolajte nám na +421 952 205 797 alebo napíšte na info@nxl.sk. Radi vám poradíme s elektroinštaláciami, dátovými sieťami a zabezpečením.',
    },
    about: {
      title: 'O nás | Nexel Systems',
      description:
        'Nexel Systems je realizačný partner pre elektroinštalácie, dátové siete a zabezpečovacie systémy. Zameriavame sa na presnú realizáciu a technické riešenia, ktoré fungujú spoľahlivo.',
    },
    references: {
      title: 'Referencie | Nexel Systems',
      description:
        'Pozrite si realizované projekty Nexel Systems – elektroinštalácie bytov a hotelových komplexov, dátové siete a zabezpečovacie systémy na Slovensku aj v zahraničí.',
    },
    businessDescription:
      'Nexel Systems realizuje elektroinštalácie, dátové siete a smart riešenia pre firmy aj domácnosti na Slovensku.',
    offerCatalog: 'Služby Nexel Systems',
    ogLocale: 'sk_SK',
  },
};

const de: typeof sk = {
  nav: {
    services: 'Leistungen',
    about: 'Über uns',
    projects: 'Projekte',
    contact: 'Kontakt',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    switchLanguage: 'Sprache wechseln',
  },
  hero: {
    titleLine1: 'Infrastruktur für',
    titleLine2: 'moderne Gebäude',
    subtitle: 'Wir realisieren Elektroinstallationen, Datennetze und Smart-Lösungen für Unternehmen und Privatkunden.',
    ctaStart: 'Projekt starten',
    ctaReferences: 'Unsere Referenzen',
  },
  services: {
    label: 'Unsere Leistungen',
    titleLine1: 'Technologien, die Ihre',
    titleLine2: 'Räume prägen',
    intro: 'Jede unserer Leistungen führen wir mit Liebe zum Detail und mit Blick auf langfristige Funktionalität aus.',
    consult: 'Lösung besprechen',
    more: 'Mehr erfahren',
  },
  features: {
    label: 'Über uns',
    titleLine1: 'Technische Lösungen, die',
    titleLine2: 'in der Praxis funktionieren',
    intro1:
      'Nexel Systems ist Ihr ausführender Partner für Elektroinstallationen, Datennetze und Sicherheitstechnik in Wohn- und Gewerbeobjekten.',
    intro2:
      'Wir setzen auf präzise Ausführung, saubere Installationen und technische Lösungen, die im Alltag zuverlässig funktionieren.',
    card1Title: 'Individueller Ansatz für jedes Projekt',
    card1Text:
      'Jedes Projekt ist für uns einzigartig. Wir analysieren die Anforderungen unserer Kunden sorgfältig und entwickeln Lösungen, die genau ihren Erwartungen und künftigen Bedürfnissen entsprechen.',
    card2Title: 'Ein funktionierendes Ergebnis ist das Ziel, kein Bonus',
    card2Text:
      'Unser Ziel ist nicht, einfach „etwas zu montieren“, sondern ein System zu übergeben, das vom ersten Tag an funktioniert. Ob Wohnung, Einfamilienhaus, Büro oder größeres Objekt – die Technik soll ohne ständige Eingriffe ihren Dienst tun.',
    card3Title: 'Nexel Systems ist die richtige Wahl, wenn Sie:',
    card3Items: [
      'eine hochwertige Elektroinstallation ohne Chaos wünschen',
      'ein zuverlässiges Ausführungsteam suchen',
      'Wert auf Sicherheit und Funktionalität legen',
      'eine Lösung für Haus, Wohnung oder Unternehmen benötigen',
    ],
  },
  references: {
    titleLine1: 'Projekte, die für',
    titleLine2: 'uns sprechen',
    filters: {
      all: 'Alle',
      elektro: 'Elektroinstallationen',
      data: 'Datennetze',
      smart: 'Smart & Sicherheit',
    },
    empty: 'Für diese Auswahl gibt es keine Projekte.',
    moreInfo: 'Mehr Infos',
    scope: 'Leistungsumfang',
    gallery: 'Galerie',
    close: 'Schließen',
  },
  contact: {
    label: 'Kontakt',
    title: 'Starten wir Ihr Projekt',
    intro: 'Haben Sie Fragen? Kontaktieren Sie uns gerne.',
    call: 'Rufen Sie uns an',
    write: 'Schreiben Sie uns',
    whatsappCta: 'Nachricht senden',
    successTitle: 'Nachricht gesendet!',
    successText:
      'Vielen Dank für Ihr Interesse. Unser Team bearbeitet Ihre Anfrage und meldet sich schnellstmöglich bei Ihnen.',
    sendAnother: 'Weitere Nachricht senden',
    errorTitle: 'Es ist ein Fehler aufgetreten',
    errorText:
      'Die Nachricht konnte nicht gesendet werden. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.',
    retry: 'Erneut versuchen',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'ihre@email.de',
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Beschreiben Sie kurz Ihr Projekt...',
    submit: 'Nachricht senden',
    submitting: 'Wird gesendet...',
    sendingOverlay: 'Nachricht wird gesendet...',
    // Subject goes to the Slovak team's inbox, so it stays Slovak and flags the German lead.
    emailSubject: 'Nová správa z webu Nexel Systems (DE)',
  },
  footer: {
    backToTop: 'Nach oben',
  },
  whatsapp: {
    ariaLabel: 'Nachricht über WhatsApp senden',
  },
  serviceDetail: {
    back: 'Zurück zur Startseite',
    consult: 'Unverbindliche Beratung',
    otherServices: 'Weitere Leistungen',
  },
  seo: {
    home: {
      title: 'Nexel Systems | Elektroinstallation, Datennetze & Smart-Lösungen',
      description:
        'Wir realisieren Elektroinstallationen, Datennetze und Smart-Lösungen für Unternehmen und Privatkunden in Deutschland, Österreich und der Slowakei. Zuverlässige Technik nach Maß.',
    },
    contact: {
      title: 'Kontakt | Nexel Systems',
      description:
        'Kontaktieren Sie Nexel Systems. Rufen Sie uns an unter +421 952 205 797 oder schreiben Sie an info@nxl.sk. Wir beraten Sie gerne zu Elektroinstallationen, Datennetzen und Sicherheitstechnik.',
    },
    about: {
      title: 'Über uns | Nexel Systems',
      description:
        'Nexel Systems ist Ihr ausführender Partner für Elektroinstallationen, Datennetze und Sicherheitstechnik. Wir setzen auf präzise Ausführung und technische Lösungen, die zuverlässig funktionieren.',
    },
    references: {
      title: 'Referenzen | Nexel Systems',
      description:
        'Realisierte Projekte von Nexel Systems – Elektroinstallationen in Wohnungen, Hotels und Pflegeeinrichtungen, Datennetze und Sicherheitssysteme in Deutschland, Österreich und der Slowakei.',
    },
    businessDescription:
      'Nexel Systems realisiert Elektroinstallationen, Datennetze und Smart-Lösungen für Unternehmen und Privatkunden in Deutschland, Österreich und der Slowakei.',
    offerCatalog: 'Leistungen von Nexel Systems',
    ogLocale: 'de_DE',
  },
};

export const translations: Record<Lang, typeof sk> = { sk, de };
