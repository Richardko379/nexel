import { Zap, Network, ShieldCheck } from 'lucide-react';

export const SERVICES = [
  {
    id: 1,
    slug: 'elektroinstalacia',
    title: 'Elektroinštalácie',
    subtitle: 'Silnoprúd',
    icon: Zap,
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770404782/elektro_xmazlm.png',
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
  {
    id: 2,
    slug: 'datove-siete',
    title: 'Dátové siete',
    subtitle: 'Slaboprúd',
    icon: Network,
    image: 'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770404592/datove_rmmqca.png',
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
  {
    id: 3,
    slug: 'zabezpecenie-smart',
    title: 'Zabezpečenie & Smart',
    subtitle: 'Bezpečnosť & Automatizácia',
    icon: ShieldCheck,
    image:
      'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770404782/zabezpecovacky_anvxhk.png',
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
] as const;

export type ServiceSlug = (typeof SERVICES)[number]['slug'];
