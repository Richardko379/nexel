import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Features } from '../components/Features';
import { References } from '../components/References';
import { Contact } from '../components/Contact';
import { SEO, LOCAL_BUSINESS_SCHEMA } from '../components/SEO';

export const HomePage: React.FC = () => (
  <>
    <SEO
      title="Nexel Systems | Elektroinštalácie, Dátové siete & Smart riešenia"
      description="Realizujeme elektroinštalácie, dátové siete a smart riešenia pre firmy aj domácnosti na Slovensku. Spoľahlivé technické riešenia na mieru."
      canonical="/"
      jsonLd={LOCAL_BUSINESS_SCHEMA}
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
