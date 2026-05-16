import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { Facebook, Instagram, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer className="bg-[#020305] border-t border-white/5 py-8 md:py-12 relative z-10 pb-24 md:pb-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-8">

          {/* 1. Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <Link to="/">
              <Logo className="h-6" showIcon={true} />
            </Link>
            <p className="text-gray-500 text-xs tracking-wide mt-2">
              © {new Date().getFullYear()} Nexel Systems s.r.o.
            </p>
          </div>

          {/* 2. Navigation */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <a
              href="/#sluzby"
              onClick={(e) => handleAnchorClick(e, "sluzby")}
              className="text-gray-400 hover:text-nexel-primary text-sm font-medium transition-colors py-2 md:py-0"
            >
              Naše riešenia
            </a>
            <Link
              to="/o-nas"
              className="text-gray-400 hover:text-nexel-primary text-sm font-medium transition-colors py-2 md:py-0"
            >
              O nás
            </Link>
            <Link
              to="/referencie"
              className="text-gray-400 hover:text-nexel-primary text-sm font-medium transition-colors py-2 md:py-0"
            >
              Projekty
            </Link>
            <Link
              to="/kontakt"
              className="text-gray-400 hover:text-nexel-primary text-sm font-medium transition-colors py-2 md:py-0"
            >
              Kontakt
            </Link>
          </div>

          {/* 3. Socials & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6 md:gap-4">
              
              <a
                href="https://www.facebook.com/profile.php?id=61565370802315"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Nexel Systems"
                className="text-gray-500 hover:text-white transition-colors p-2 md:p-0"
              >
                <Facebook size={20} className="md:w-[18px]" />
              </a>

              <a
                href="https://www.instagram.com/nexel_systems/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Nexel Systems"
                className="text-gray-500 hover:text-white transition-colors p-2 md:p-0"
              >
                <Instagram size={20} className="md:w-[18px]" />
              </a>

            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-nexel-primary transition-colors border border-white/5"
              aria-label="Späť hore"
            >
              <ArrowUp size={18} className="md:w-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};