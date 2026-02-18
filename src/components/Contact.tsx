import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

// KONFIGURÁCIA EMAILU
const CONTACT_EMAIL = "info@nxl.sk"; 

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // AJAX požiadavka na FormSubmit
      // Funguje spoľahlivo, keď je stránka na hostingu (http/https protokol)
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            // Dáta formulára
            email: formState.email,
            message: formState.message,
            
            // Konfigurácia FormSubmit
            _subject: "Nová správa z webu Nexel Systems", // Predmet emailu
            _template: "table", // Pekná tabuľka v emaile
            _captcha: "false" // Vypnutá captcha pre jednoduchšie odoslanie
        })
      });

      if (response.ok) {
          setStatus('success');
          setFormState({ email: '', message: '' });
      } else {
          console.error("Chyba pri odosielaní:", response.status);
          setStatus('error');
      }
    } catch (error) {
      console.error("Sieťová chyba:", error);
      setStatus('error');
    }
  };

  const resetForm = () => {
    setStatus('idle');
  };

  return (
    <section id="kontakt" className="py-12 md:py-24 bg-nexel-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Contact Info */}
          <div className="order-1 lg:order-1">
            <h2 className="text-nexel-accent font-medium tracking-widest uppercase mb-2 text-xs md:text-base">Kontaktujte nás</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">Začnime váš projekt</h3>
            <p className="text-gray-300 mb-8 md:mb-12 text-sm md:text-lg leading-relaxed">
              Máte otázky? Neváhajte nás kontaktovať.
            </p>

            <div className="space-y-4 md:space-y-8">
              <a href="tel:+421952205797" className="flex items-center md:items-start gap-4 group p-4 -mx-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-nexel-primary group-hover:bg-nexel-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wide mb-0.5 md:mb-1">Zavolajte nám</p>
                  <span className="text-lg md:text-xl text-white font-medium group-hover:text-nexel-accent transition-colors">+421 952 205 797</span>
                </div>
              </a>

              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center md:items-start gap-4 group p-4 -mx-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-nexel-primary group-hover:bg-nexel-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wide mb-0.5 md:mb-1">Napíšte nám</p>
                  <span className="text-lg md:text-xl text-white font-medium group-hover:text-nexel-accent transition-colors block break-all">{CONTACT_EMAIL}</span>
                </div>
              </a>

              <a href="https://wa.me/421952205797" target="_blank" rel="noopener noreferrer" className="flex items-center md:items-start gap-4 group p-4 -mx-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-[#25D366] group-hover:bg-white/10 transition-all duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="md:w-6 md:h-6">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wide mb-0.5 md:mb-1">WhatsApp</p>
                  <span className="text-lg md:text-xl text-white font-medium group-hover:text-[#25D366] transition-colors">Napísať správu</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form Container */}
          <div className="order-2 lg:order-2 bg-nexel-surface rounded-3xl border border-white/10 shadow-xl overflow-hidden flex flex-col relative min-h-[450px]">
            
            {/* Success State Overlay */}
            {status === 'success' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 text-center animate-fade-in bg-nexel-surface z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <CheckCircle2 size={32} className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Správa odoslaná!</h3>
                <p className="text-gray-400 mb-8 max-w-sm text-base md:text-lg">
                  Ďakujeme za váš záujem. Náš tím prijme vašu požiadavku a ozveme sa vám čo najskôr.
                </p>
                <div className="p-4 bg-white/5 rounded-lg mb-6 max-w-sm border border-white/5">
                    <p className="text-xs text-gray-500">
                        Poznámka: Ak ste nás kontaktovali prvýkrát, skontrolujte si prosím priečinok <strong>SPAM</strong> pre potvrdzovací email.
                    </p>
                </div>
                <button 
                  onClick={resetForm}
                  className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 hover:border-nexel-primary/50 transition-all flex items-center gap-2 group"
                >
                  Odoslať ďalšiu správu
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* Error State Overlay */}
            {status === 'error' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 text-center animate-fade-in bg-nexel-surface z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mb-6 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                        <AlertCircle size={32} className="md:w-10 md:h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Vyskytla sa chyba</h3>
                    <p className="text-gray-400 mb-8 max-w-xs text-sm">
                        Správu sa nepodarilo odoslať. Skontrolujte svoje internetové pripojenie a skúste to znova.
                    </p>
                    
                    <button 
                        onClick={resetForm}
                        className="w-full max-w-xs px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 hover:border-white/30 transition-all"
                    >
                        Skúsiť znova
                    </button>
                </div>
            )}

            {/* Production Ready AJAX Form */}
            <form onSubmit={handleSubmit} className={`p-6 md:p-10 flex flex-col h-full transition-opacity duration-300 ${status !== 'idle' ? 'opacity-0 pointer-events-none absolute inset-0' : 'opacity-100'}`}>
                <div className="space-y-5 md:space-y-6 flex-grow">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-300 font-medium tracking-wide">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      className="w-full bg-[#05070B] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-nexel-primary focus:ring-1 focus:ring-nexel-primary transition-all hover:border-white/20 text-base appearance-none"
                      placeholder="vas@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      required
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-300 font-medium tracking-wide">Správa</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full bg-[#05070B] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-nexel-primary focus:ring-1 focus:ring-nexel-primary transition-all resize-none hover:border-white/20 text-base appearance-none"
                      placeholder="Stručne opíšte váš projekt..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      required
                      disabled={status === 'submitting'}
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8">
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-nexel-primary to-nexel-secondary text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none touch-manipulation"
                    disabled={status === 'submitting'}
                  >
                        {status === 'submitting' ? 'Odosielam...' : 'Odoslať správu'}
                        {status !== 'submitting' && <Send size={20} />}
                  </button>
                </div>
              </form>

              {/* Loading Overlay */}
              {status === 'submitting' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-nexel-surface z-20">
                      <Loader2 size={48} className="text-nexel-primary animate-spin mb-4" />
                      <p className="text-gray-400">Odosielam správu...</p>
                  </div>
              )}
          </div>

        </div>
      </div>
    </section>
  );
};