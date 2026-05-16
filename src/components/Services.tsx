import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';

export const Services: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sluzby" className="py-12 md:py-20 lg:py-24 bg-[#05070B] relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[200px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[400px] lg:h-[500px] bg-nexel-primary/5 rounded-full blur-[60px] md:blur-[100px] lg:blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 lg:mb-24 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-6 md:w-8 bg-nexel-primary"></div>
            <span className="text-nexel-primary text-xs font-bold tracking-[0.2em] uppercase">
              Naše riešenia
            </span>
            <div className="h-[2px] w-6 md:w-8 bg-nexel-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Technológie, ktoré tvoria <br className="hidden md:block"/> váš priestor
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed px-2">
            Každá z našich služieb je vykonávaná s dôrazom na detail a dlhodobú funkčnosť.
          </p>
        </div>

        {/* Services List - Gap optimized for tablet (md:gap-16) vs desktop (lg:gap-32) */}
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-32">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Image Column */}
              <div className="w-full lg:w-1/2 relative group px-0 md:px-0">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-[#0A0E17]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0.5';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#05070B]/60 to-transparent pointer-events-none"></div>
                  
                  {/* Icon Badge - Adjusted size for mobile/tablet */}
                  <div className="absolute top-3 left-3 md:top-5 md:left-5 lg:top-6 lg:left-6 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#0A0E17]/90 backdrop-blur border border-white/10 rounded-xl flex items-center justify-center text-nexel-primary shadow-lg z-10">
                    <service.icon size={20} className="md:w-7 md:h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full lg:w-1/2 px-2 md:px-4 lg:px-0">
                <div className="mb-6">
                  <span className="text-nexel-primary font-medium tracking-wide uppercase text-xs md:text-sm mb-2 block">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <div className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed space-y-4">
                    {service.description.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Feature List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/5 flex items-center justify-center text-nexel-primary mt-0.5">
                        <CheckCircle2 size={12} className="md:w-3.5 md:h-3.5" />
                      </div>
                      <span className="text-gray-200 text-sm md:text-base font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={scrollToContact}
                    className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-nexel-primary/50 rounded-lg text-white font-medium transition-all duration-300 active:scale-95 touch-manipulation"
                  >
                    <span>Konzultovať riešenie</span>
                    <ArrowRight size={18} className="text-nexel-primary group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    to={`/sluzby/${service.slug}`}
                    className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-6 py-3.5 border border-nexel-primary/30 hover:border-nexel-primary/70 rounded-lg text-nexel-primary hover:text-white font-medium transition-all duration-300 text-sm"
                  >
                    Viac informácií
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};