import { useLocation } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { translations, type Lang } from './translations';

export type { Lang };

export const SITE_URL = 'https://nxl.sk';

export const ROUTES = {
  sk: { home: '/', about: '/o-nas', references: '/referencie', contact: '/kontakt', services: '/sluzby' },
  de: { home: '/de', about: '/de/ueber-uns', references: '/de/referenzen', contact: '/de/kontakt', services: '/de/leistungen' },
} as const;

const PAGE_KEYS = ['home', 'about', 'references', 'contact'] as const;

export const langFromPath = (pathname: string): Lang =>
  pathname === '/de' || pathname.startsWith('/de/') ? 'de' : 'sk';

export const homeAnchor = (lang: Lang, id: string) => `${ROUTES[lang].home}#${id}`;

export const servicePath = (lang: Lang, slug: string) => `${ROUTES[lang].services}/${slug}`;

export function alternatePath(pathname: string, target: Lang): string {
  const from = langFromPath(pathname);
  const path = pathname.replace(/\/+$/, '') || '/';
  const routes = ROUTES[from];

  for (const key of PAGE_KEYS) {
    if (path === routes[key]) return ROUTES[target][key];
  }

  if (path.startsWith(`${routes.services}/`)) {
    const slug = path.slice(routes.services.length + 1);
    const service = SERVICES.find((s) => s.slug[from] === slug);
    if (service) return servicePath(target, service.slug[target]);
  }

  return ROUTES[target].home;
}

export const useLang = () => {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  return { lang, t: translations[lang], routes: ROUTES[lang] };
};
