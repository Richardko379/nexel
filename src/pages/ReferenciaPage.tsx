import { References } from '../components/References';
import { Contact } from '../components/Contact';
import { SEO, LOCAL_BUSINESS_SCHEMA } from '../components/SEO';

export const ReferenciaPage: React.FC = () => (
  <>
    <SEO
      title="Referencie | Nexel Systems"
      description="Pozrite si realizované projekty Nexel Systems – elektroinštalácie bytov a hotelových komplexov, dátové siete a zabezpečovacie systémy na Slovensku aj v zahraničí."
      canonical="/referencie"
      jsonLd={LOCAL_BUSINESS_SCHEMA}
    />
    <main className="pt-20">
      <References />
      <Contact />
    </main>
  </>
);
