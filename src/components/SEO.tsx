import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { alternatePath, SITE_URL, useLang } from '../i18n';

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({ title, description, ogImage, jsonLd }) => {
  const { lang, t } = useLang();
  const { pathname } = useLocation();
  const fullUrl = `${SITE_URL}${pathname}`;
  const skUrl = `${SITE_URL}${alternatePath(pathname, 'sk')}`;
  const deUrl = `${SITE_URL}${alternatePath(pathname, 'de')}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <link rel="alternate" hrefLang="sk" href={skUrl} />
      <link rel="alternate" hrefLang="de" href={deUrl} />
      <link rel="alternate" hrefLang="x-default" href={skUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={t.seo.ogLocale} />
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
