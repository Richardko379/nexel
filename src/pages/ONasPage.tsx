import { Features } from '../components/Features';
import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';
import { localBusinessSchema } from '../data/schema';
import { useLang } from '../i18n';

export const ONasPage: React.FC = () => {
  const { lang, t } = useLang();
  return (
  <>
    <SEO
      title={t.seo.about.title}
      description={t.seo.about.description}
      jsonLd={localBusinessSchema(lang)}
    />
    <main className="pt-20">
      <Features />
      <Contact />
    </main>
  </>
  );
};
