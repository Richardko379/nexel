import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';
import { localBusinessSchema } from '../data/schema';
import { useLang } from '../i18n';

export const KontaktPage: React.FC = () => {
  const { lang, t } = useLang();
  return (
  <>
    <SEO
      title={t.seo.contact.title}
      description={t.seo.contact.description}
      jsonLd={localBusinessSchema(lang)}
    />
    <main className="pt-20">
      <Contact />
    </main>
  </>
  );
};
