import React from 'react';

export const Features: React.FC = () => {
  return (
    <section id="o-nas" className="py-12 md:py-20 bg-[#05070B] relative overflow-hidden">
      
      {/* 1. Header & Main Text - Centered */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-8 md:mb-12">
           {/* Restored Original Headings */}
           <h2 className="text-nexel-accent font-medium tracking-widest uppercase mb-3 md:mb-4 text-xs md:text-base">
             Naše riešenia
           </h2>
           <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-8 leading-tight">
             Technické riešenia, ktoré <br className="hidden md:block"/> fungujú v praxi
           </h3>
           
           {/* Description Text - Uniform color, split into lines */}
           <div className="max-w-4xl mx-auto text-gray-400 text-sm md:text-lg lg:text-xl leading-relaxed px-2">
             <p className="mb-3 md:mb-4">
               Nexel Systems je realizačný partner pre elektroinštalácie, dátové siete a zabezpečovacie systémy v bytových aj komerčných objektoch.
             </p>
             <p>
               Zameriavame sa na presnú realizáciu, poriadok v inštaláciách a technické riešenia, ktoré fungujú spoľahlivo v každodennej praxi.
             </p>
           </div>
        </div>
      </div>

      {/* 2. Energy Line Visual - Reduced Height */}
      <div className="relative w-full h-[30px] md:h-[50px] flex items-center justify-center mb-6 md:mb-12">
            
            {/* Ambient Atmosphere */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-nexel-primary/20 to-transparent blur-md"></div>
            </div>

            {/* The Main Track */}
            <div className="relative w-full h-[2px] bg-white/5">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

               {/* THE ENERGY BEAM - Slower and Brighter */}
               <div className="absolute top-1/2 -translate-y-1/2 h-[4px] w-[25%] md:w-[15%] 
                               bg-gradient-to-r from-transparent via-nexel-primary to-transparent 
                               shadow-[0_0_100px_rgba(34,211,238,1)] 
                               blur-[0.5px]
                               animate-beam-slow">
               </div>
               
               {/* Secondary Extra Glow Layer */}
               <div className="absolute top-1/2 -translate-y-1/2 h-[12px] w-[25%] md:w-[15%] 
                               bg-nexel-primary/40
                               blur-xl
                               animate-beam-slow">
               </div>
            </div>

      </div>

      {/* 3. Grid Columns for Details - Widened Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-stretch">
            
            {/* Card 1 */}
            <div className="bg-white/[0.02] p-6 md:p-8 lg:p-10 rounded-2xl border border-white/5 hover:border-nexel-primary/30 transition-all duration-300 group hover:bg-white/[0.04]">
                <h4 className="text-lg md:text-lg lg:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-nexel-primary transition-colors">Individuálny prístup ku každému projektu</h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base lg:text-lg">
                   Každý projekt vnímame ako jedinečný.
                   Starostlivo analyzujeme potreby klienta a navrhujeme riešenia, ktoré presne zodpovedajú jeho očakávaniam a budúcim požiadavkám.
                </p>
            </div>

            {/* Card 2 */}
             <div className="bg-white/[0.02] p-6 md:p-8 lg:p-10 rounded-2xl border border-white/5 hover:border-nexel-primary/30 transition-all duration-300 group hover:bg-white/[0.04]">
                <h4 className="text-lg md:text-lg lg:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-nexel-primary transition-colors">Funkčný výsledok je cieľ, nie bonus</h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base lg:text-lg">
                   Naším cieľom nie je len „niečo namontovať“, ale odovzdať systém, ktorý funguje hneď po dokončení.
                   Či ide o byt, rodinný dom, kancelárie alebo väčší objekt, technické riešenie má slúžiť bez potreby neustálych zásahov.
                </p>
            </div>

            {/* Card 3 - Unified Style */}
            <div className="bg-white/[0.02] p-6 md:p-8 lg:p-10 rounded-2xl border border-white/5 hover:border-nexel-primary/30 transition-all duration-300 group hover:bg-white/[0.04]">
                <h4 className="text-lg md:text-lg lg:text-xl font-bold text-white mb-4 md:mb-6 group-hover:text-nexel-primary transition-colors">Nexel Systems má zmysel, ak:</h4>
                 <ul className="space-y-3 md:space-y-4">
                   {[
                     "chcete kvalitnú elektroinštaláciu bez chaosu",
                     "hľadáte realizačný tím, na ktorý sa dá spoľahnúť",
                     "záleží vám na bezpečnosti a funkčnosti",
                     "potrebujete riešenie pre dom, byt alebo firmu"
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-nexel-primary rounded-full shadow-[0_0_5px_rgba(6,182,212,0.8)] flex-shrink-0 group-hover:bg-white transition-colors"></div>
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm md:text-base lg:text-lg">{item}</span>
                     </li>
                   ))}
                 </ul>
            </div>
            
        </div>
      </div>
    </section>
  );
};