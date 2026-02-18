import React from 'react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projekty');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Shared button style - Larger touch target on mobile
  const buttonStyle = "w-full sm:w-auto px-8 py-4 rounded bg-white/5 border border-white/10 text-white font-medium text-sm tracking-widest uppercase hover:bg-white/10 hover:border-nexel-primary/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all transform active:scale-95 sm:min-w-[200px] flex justify-center items-center backdrop-blur-sm";

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#020408] pt-16 md:pt-0">
      
      {/* 1. Background Layers */}
      <div className="absolute inset-0 particles-bg opacity-30 pointer-events-none"></div>
      
      {/* Deep Center Glow behind horizon - Smaller on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[600px] lg:w-[800px] h-[250px] md:h-[400px] lg:h-[500px] bg-blue-900/15 rounded-full blur-[60px] md:blur-[100px] lg:blur-[120px] pointer-events-none"></div>

      {/* 2. Composition Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-4 md:mt-0">
        
        {/* LOGO AREA - Mobile: -mt-12, Tablet: mt-0, sizing adjusted */}
        <div className="relative mb-6 md:mb-10 lg:mb-12 group -mt-12 md:mt-0">
            
            {/* Main Logo Element - Responsive sizes: Mobile -> Tablet -> Desktop */}
            <div className="relative z-20 w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 flex justify-center items-center animate-float">
                {/* Back glow */}
                <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[30px] md:blur-[35px] lg:blur-[40px] animate-pulse-slow"></div>
                
                <img 
                    src="https://res.cloudinary.com/duvaxlkw3/image/upload/v1770404884/ChatGPT_Image_6._2._2026_18_14_34_g8spha.png" 
                    alt="Nexel Systems Logo"
                    className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                />
            </div>

            {/* Reflection of Logo - Hidden on very small screens */}
            <div className="absolute -bottom-14 md:-bottom-12 lg:-bottom-16 left-0 right-0 h-24 md:h-28 lg:h-32 transform scale-y-[-1] opacity-20 blur-sm mask-gradient z-0 pointer-events-none flex justify-center animate-float-delayed">
                 <div className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48">
                    <img 
                        src="https://res.cloudinary.com/duvaxlkw3/image/upload/v1770404884/ChatGPT_Image_6._2._2026_18_14_34_g8spha.png" 
                        alt=""
                        className="w-full h-full object-contain"
                    />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020408]/60 to-[#020408]"></div>
            </div>
        </div>

        {/* HORIZON LIGHT EFFECT - Responsive position top-[X%] */}
        <div className="absolute top-[15%] md:top-[38%] lg:top-[42%] left-1/2 -translate-x-1/2 w-[150vw] md:w-[120vw] flex justify-center pointer-events-none opacity-80">
             <div className="w-[60%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,1)]"></div>
             <div className="absolute top-0 w-[40%] h-[4px] bg-blue-500/40 blur-[8px]"></div>
             <div className="absolute top-[-3px] w-20 md:w-32 h-[6px] bg-cyan-100 blur-[6px] rounded-full"></div>
        </div>

        {/* TEXT CONTENT - Mobile: pt-24, Tablet: pt-12, Desktop: pt-10 */}
        <div className="max-w-4xl mx-auto space-y-5 md:space-y-6 lg:space-y-8 animate-fade-in relative z-20 pt-24 md:pt-12 lg:pt-10 w-full">
          
          {/* Main Headline - Responsive Text Sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white uppercase bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60 leading-[1.2] md:leading-tight px-2">
            Infraštruktúra pre <br className="block"/> moderné budovy
          </h1>
          
          {/* Subheadline */}
          <p className="text-gray-300 text-sm md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed antialiased px-4">
            Realizujeme elektroinštalácie, dátové siete a smart riešenia pre firmy aj domácnosti.
          </p>

          {/* Buttons - Stacked on Mobile, Row on Tablet+ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-6 pt-6 w-full max-w-[280px] sm:max-w-none mx-auto">
            <button 
              onClick={scrollToContact}
              className={buttonStyle}
            >
              Začať projekt
            </button>
            
            <button 
              onClick={scrollToProjects}
              className={buttonStyle}
            >
              Naše referencie
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};