import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { SEO, LOCAL_BUSINESS_SCHEMA } from '../components/SEO';
import { Contact } from '../components/Contact';

const SERVICE_SCHEMA = (service: (typeof SERVICES)[number]) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.description.split('\n\n')[0].trim(),
  provider: {
    '@type': 'LocalBusiness',
    name: 'Nexel Systems s.r.o.',
  },
  serviceType: service.subtitle,
  url: `https://nxl.sk/sluzby/${service.slug}`,
});

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/sluzby/${service.slug}`}
        jsonLd={[LOCAL_BUSINESS_SCHEMA, SERVICE_SCHEMA(service)]}
      />

      <main>
        {/* Hero sekcia */}
        <section className="relative min-h-[60vh] flex items-center bg-[#020408] overflow-hidden pt-24 pb-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-900/15 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Späť na úvodnú stránku
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-nexel-primary">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <span className="text-nexel-primary text-sm font-medium tracking-widest uppercase">
                {service.subtitle}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              {service.metaDescription}
            </p>
          </div>
        </section>

        {/* Obsah */}
        <section className="py-16 md:py-24 bg-[#05070B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#05070B]/50 to-transparent" />
              </div>

              <div>
                <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5 mb-8">
                  {service.description.split('\n\n').map((p, i) => (
                    <p key={i}>{p.trim()}</p>
                  ))}
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-nexel-primary flex-shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-gray-200 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-nexel-primary/50 rounded-lg text-white font-medium transition-all duration-300 group"
                >
                  <span>Nezáväzná konzultácia</span>
                  <ArrowRight size={18} className="text-nexel-primary group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Ďalšie služby */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Ďalšie naše služby</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherServices.map((s) => {
                  const OtherIcon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      to={`/sluzby/${s.slug}`}
                      className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-nexel-primary/40 hover:bg-white/8 transition-all group"
                    >
                      <div className="w-12 h-12 bg-[#0A0E17] border border-white/10 rounded-lg flex items-center justify-center text-nexel-primary flex-shrink-0">
                        <OtherIcon size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs text-nexel-primary uppercase tracking-wide mb-1">
                          {s.subtitle}
                        </p>
                        <h3 className="text-white font-semibold group-hover:text-nexel-primary transition-colors">
                          {s.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                          {s.metaDescription}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <Contact />
      </main>
    </>
  );
};
