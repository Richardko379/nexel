import { Contact } from '../components/Contact';
import { SEO, LOCAL_BUSINESS_SCHEMA } from '../components/SEO';

export const KontaktPage: React.FC = () => (
  <>
    <SEO
      title="Kontakt | Nexel Systems"
      description="Kontaktujte Nexel Systems. Zavolajte nám na +421 952 205 797 alebo napíšte na info@nxl.sk. Radi vám poradíme s elektroinštaláciami, dátovými sieťami a zabezpečením."
      canonical="/kontakt"
      jsonLd={LOCAL_BUSINESS_SCHEMA}
    />
    <main className="pt-20">
      <Contact />
    </main>
  </>
);
