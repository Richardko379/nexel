import { References } from '../components/References';
import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';
import { localBusinessSchema } from '../data/schema';
import { useLang } from '../i18n';

export const ReferenciaPage: React.FC = () => {
  const { lang, t } = useLang();
  return (
  <>
    <SEO
      title={t.seo.references.title}
      description={t.seo.references.description}
      jsonLd={localBusinessSchema(lang)}
    />
    <main className="pt-20">
      <References />
      <Contact />
    </main>
  </>
  );
};
