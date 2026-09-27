import { Zap, Network, ShieldCheck } from 'lucide-react';
import type { Lang } from '../i18n/translations';

export const SERVICES = [
  {
    id: 1,
    slug: { sk: 'elektroinstalacia', de: 'elektroinstallation' },
    icon: Zap,
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770404782/elektro_xmazlm.png',
    sk: {
      title: 'Elektroinštalácie',
      subtitle: 'Silnoprúd',
      metaTitle: 'Elektroinštalácie | Nexel Systems',
      metaDescription:
        'Profesionálne elektroinštalácie pre rodinné domy, byty a priemyselné objekty. Silnoprúdové rozvody, rozvádzače a bezpečné inštalácie na mieru.',
      description: `Spoľahlivý základ každej budovy.

Elektroinštalácia je základom bezpečnej a funkčnej budovy – od rodinných domov až po priemyselné objekty. V Nexel Systems sa zameriavame na presnú realizáciu elektroinštalácií podľa projektovej dokumentácie alebo technického zadania.

Realizujeme silnoprúdové rozvody, rozvádzače a prípravu elektroinštalácie pre ďalšie technológie tak, aby bol systém pripravený na budúce rozšírenie a bezproblémovú prevádzku.`,
      features: [
        'Priemyselné a domové inštalácie',
        'Silnoprúdové rozvody a rozvádzače',
        'Prípravu pre technológie',
      ],
    },
    de: {
      title: 'Elektroinstallation',
      subtitle: 'Starkstrom',
      metaTitle: 'Elektroinstallation | Nexel Systems',
      metaDescription:
        'Professionelle Elektroinstallationen für Einfamilienhäuser, Wohnungen und Industrieobjekte. Starkstromverteilung, Schaltschränke und sichere Installationen nach Maß.',
      description: `Das zuverlässige Fundament jedes Gebäudes.

Die Elektroinstallation ist die Grundlage für ein sicheres und funktionsfähiges Gebäude – vom Einfamilienhaus bis zum Industrieobjekt. Bei Nexel Systems konzentrieren wir uns auf die präzise Ausführung von Elektroinstallationen nach Planungsunterlagen oder technischer Vorgabe.

Wir realisieren Starkstromverteilungen, Schaltschränke und die Vorbereitung der Elektroinstallation für weitere Gewerke – so ist das System für künftige Erweiterungen und einen störungsfreien Betrieb gerüstet.`,
      features: [
        'Industrie- und Hausinstallationen',
        'Starkstromverteilung und Schaltschränke',
        'Vorbereitung für Gebäudetechnik',
      ],
    },
  },
  {
    id: 2,
    slug: { sk: 'datove-siete', de: 'datennetze' },
    icon: Network,
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770404592/datove_rmmqca.png',
    sk: {
      title: 'Dátové siete',
      subtitle: 'Slaboprúd',
      metaTitle: 'Dátové siete | Nexel Systems',
      metaDescription:
        'Štruktúrovaná kabeláž, optické trasy a sieťové rozvody pre kancelárske, bytové aj priemyselné objekty. Spoľahlivá infraštruktúra pre dáta a komunikáciu.',
      description: `Stabilná infraštruktúra pre dáta a komunikáciu.

V dnešnej digitálnej dobe je spoľahlivá dátová sieť rovnako dôležitá ako elektrina. V Nexel Systems realizujeme dátové siete pre bytové, komerčné aj priemyselné objekty s dôrazom na stabilitu a prehľadnosť.

Realizujeme štruktúrovanú kabeláž a sieťové rozvody podľa projektovej dokumentácie. Pre väčšie objekty inštalujeme optické trasy, rackové riešenia a sieťové prvky tak, aby bola sieť pripravená na vysokú záťaž.`,
      features: [
        'Štruktúrovaná kabeláž (metal/optika)',
        'Serverovne a rackové systémy',
        'Merania a dokumentáciu',
      ],
    },
    de: {
      title: 'Datennetze',
      subtitle: 'Schwachstrom',
      metaTitle: 'Datennetze | Nexel Systems',
      metaDescription:
        'Strukturierte Verkabelung, Glasfasertrassen und Netzwerkinstallationen für Büro-, Wohn- und Industrieobjekte. Zuverlässige Infrastruktur für Daten und Kommunikation.',
      description: `Stabile Infrastruktur für Daten und Kommunikation.

Im digitalen Zeitalter ist ein zuverlässiges Datennetz genauso wichtig wie Strom. Bei Nexel Systems realisieren wir Datennetze für Wohn-, Gewerbe- und Industrieobjekte mit Fokus auf Stabilität und Übersichtlichkeit.

Wir installieren strukturierte Verkabelung und Netzwerkinfrastruktur nach Planungsunterlagen. Für größere Objekte verlegen wir Glasfasertrassen und installieren Racksysteme und aktive Netzwerkkomponenten – ausgelegt für hohe Auslastung.`,
      features: [
        'Strukturierte Verkabelung (Kupfer/Glasfaser)',
        'Serverräume und Racksysteme',
        'Messungen und Dokumentation',
      ],
    },
  },
  {
    id: 3,
    slug: { sk: 'zabezpecenie-smart', de: 'sicherheit-smart' },
    icon: ShieldCheck,
    image:
      'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770404782/zabezpecovacky_anvxhk.png',
    sk: {
      title: 'Zabezpečenie & Smart',
      subtitle: 'Bezpečnosť & Automatizácia',
      metaTitle: 'Zabezpečenie & Smart systémy | Nexel Systems',
      metaDescription:
        'Kamerové systémy, elektronické zabezpečenie, prístupové systémy a inteligentné riadenie budov. Bezpečnosť a komfort pre váš objekt.',
      description: `Bezpečnosť, ktorú vidíte. Komfort, ktorý cítite.

Moderná budova sa o vás nemá len „starať", ale má fungovať spoľahlivo. Navrhujeme a inštalujeme riešenia, ktoré chránia majetok a zjednodušujú každodenné fungovanie.

Integrujeme kamerové systémy s vysokým rozlíšením a realizujeme aj aktívne zabezpečenie – elektronické zabezpečovacie systémy, prístupové systémy a videovrátniky.`,
      features: [
        'Kamerové a zabezpečovacie systémy',
        'Prístupové systémy a videovrátniky',
        'Inteligentné riadenie budov',
      ],
    },
    de: {
      title: 'Sicherheit & Smart',
      subtitle: 'Sicherheitstechnik & Automation',
      metaTitle: 'Sicherheitstechnik & Smart Building | Nexel Systems',
      metaDescription:
        'Videoüberwachung, Einbruchmeldeanlagen, Zutrittskontrolle und intelligente Gebäudesteuerung. Sicherheit und Komfort für Ihr Objekt.',
      description: `Sicherheit, die man sieht. Komfort, den man spürt.

Ein modernes Gebäude soll sich nicht nur „kümmern“, sondern zuverlässig funktionieren. Wir planen und installieren Lösungen, die Werte schützen und den Alltag vereinfachen.

Wir integrieren hochauflösende Videoüberwachungssysteme und realisieren auch aktive Sicherheitstechnik – Einbruchmeldeanlagen, Zutrittskontrollsysteme und Video-Türsprechanlagen.`,
      features: [
        'Videoüberwachung und Alarmanlagen',
        'Zutrittskontrolle und Video-Türsprechanlagen',
        'Intelligente Gebäudesteuerung',
      ],
    },
  },
];

export type Service = (typeof SERVICES)[number];

export const findServiceBySlug = (lang: Lang, slug: string | undefined) =>
  SERVICES.find((s) => s.slug[lang] === slug);
