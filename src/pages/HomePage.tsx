import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Features } from '../components/Features';
import { References } from '../components/References';
import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';
import { localBusinessSchema } from '../data/schema';
import { useLang } from '../i18n';

export const HomePage: React.FC = () => {
  const { lang, t } = useLang();
  return (
  <>
    <SEO
      title={t.seo.home.title}
      description={t.seo.home.description}
      jsonLd={localBusinessSchema(lang)}
    />
    <main>
      <Hero />
      <Services />
      <Features />
      <References />
      <Contact />
    </main>
  </>
  );
};
