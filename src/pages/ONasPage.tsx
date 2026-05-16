import { Features } from '../components/Features';
import { Contact } from '../components/Contact';
import { SEO, LOCAL_BUSINESS_SCHEMA } from '../components/SEO';

export const ONasPage: React.FC = () => (
  <>
    <SEO
      title="O nás | Nexel Systems"
      description="Nexel Systems je realizačný partner pre elektroinštalácie, dátové siete a zabezpečovacie systémy. Zameriavame sa na presnú realizáciu a technické riešenia, ktoré fungujú spoľahlivo."
      canonical="/o-nas"
      jsonLd={LOCAL_BUSINESS_SCHEMA}
    />
    <main className="pt-20">
      <Features />
      <Contact />
    </main>
  </>
);
