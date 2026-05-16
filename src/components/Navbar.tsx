import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

const navLinks = [
  { label: 'Naše riešenia', href: '#sluzby', pageHref: '/#sluzby' },
  { label: 'O nás', href: '#o-nas', pageHref: '/o-nas' },
  { label: 'Projekty', href: '#projekty', pageHref: '/referencie' },
  { label: 'Kontakt', href: '#kontakt', pageHref: '/kontakt' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Ak pageHref je anchor na homepage (napr. /#sluzby), scrolluj
    if (link.pageHref.startsWith('/#')) {
      const sectionId = link.pageHref.replace('/#', '');
      if (isHomePage) {
        scrollToSection(sectionId);
      } else {
        navigate('/');
        setTimeout(() => scrollToSection(sectionId), 300);
      }
    } else {
      // Samostatná stránka — naviguj
      navigate(link.pageHref);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#05070B]/90 backdrop-blur-xl border-b border-white/10 py-3 md:py-4 shadow-lg shadow-black/50' 
            : 'bg-transparent py-4 md:py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 relative">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <a 
              href="/" 
              onClick={handleLogoClick}
              className="relative z-50 hover:opacity-90 transition-opacity"
            >
              <Logo className="h-7 md:h-8 lg:h-9" showIcon={true} showText={true} />
            </a>

            {/* Desktop/Tablet Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-12">
              <div className="flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.pageHref}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-xs lg:text-[15px] relative py-2 transition-colors duration-300 font-medium tracking-wide cursor-pointer text-gray-200 hover:text-white group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-nexel-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden z-50 p-2 text-white hover:text-nexel-primary transition-colors focus:outline-none active:scale-95 transform"
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Popup - Top Sheet */}
      <div 
        className={`fixed top-0 left-0 right-0 bg-[#0A0E17] border-b border-white/10 z-[100] md:hidden transition-transform duration-300 ease-in-out shadow-2xl ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
          <div className="flex flex-col p-6 pt-8 pb-10">
            <div className="flex justify-end mb-6">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-full bg-white/5 border border-white/10"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col items-center space-y-6">
               {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.pageHref}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-xl font-medium text-white hover:text-nexel-primary transition-colors"
                  >
                    {link.label}
                  </a>
               ))}
            </div>
          </div>
      </div>
      
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[90] md:hidden backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
    </>
  );
};