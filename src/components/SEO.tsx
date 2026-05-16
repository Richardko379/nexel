import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://nxl.sk';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, ogImage, jsonLd }) => {
  const fullUrl = `${SITE_URL}${canonical}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="sk_SK" />
      <meta property="og:site_name" content="Nexel Systems" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export const LOCAL_BUSINESS_SCHEMA = {
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
  description:
    'Nexel Systems realizuje elektroinštalácie, dátové siete a smart riešenia pre firmy aj domácnosti na Slovensku.',
  sameAs: [
    'https://www.facebook.com/nexelsystems',
    'https://www.instagram.com/nexelsystems',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Služby Nexel Systems',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Elektroinštalácie', url: `${SITE_URL}/sluzby/elektroinstalacia` },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Dátové siete', url: `${SITE_URL}/sluzby/datove-siete` },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Zabezpečenie & Smart', url: `${SITE_URL}/sluzby/zabezpecenie-smart` },
      },
    ],
  },
};
