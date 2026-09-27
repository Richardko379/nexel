import { servicePath, SITE_URL, type Lang } from '../i18n';
import { translations } from '../i18n/translations';
import { SERVICES } from './services';

export const localBusinessSchema = (lang: Lang) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Nexel Systems s.r.o.',
  url: SITE_URL,
  logo: 'https://res.cloudinary.com/duvaxlkw3/image/upload/v1770404884/ChatGPT_Image_6._2._2026_18_14_34_g8spha.png',
  telephone: '+421952205797',
  email: 'info@nxl.sk',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SK',
  },
  areaServed: ['SK', 'DE', 'AT'],
  description: translations[lang].seo.businessDescription,
  sameAs: [
    'https://www.facebook.com/nexelsystems',
    'https://www.instagram.com/nexelsystems',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: translations[lang].seo.offerCatalog,
    itemListElement: SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service[lang].title,
        url: `${SITE_URL}${servicePath(lang, service.slug[lang])}`,
      },
    })),
  },
});
