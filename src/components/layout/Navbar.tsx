import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MessageSquare, Menu, ShieldCheck, ChevronDown, Pickaxe } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { openWhatsApp } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenMobileMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  const handleConsultClick = () => {
    trackWhatsAppClick('Navbar Consult CTA');
    openWhatsApp({
      sourcePage: `Navbar - ${location.pathname}`
    });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-black/40 backdrop-blur-md border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#D4AF37] rounded-sm flex items-center justify-center font-bold text-black text-xl italic shadow-md group-hover:scale-105 transition-transform shrink-0">
              S
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center text-base sm:text-lg font-bold tracking-tight text-white uppercase font-sans leading-none sm:gap-1.5">
              <span>CONSULTANT</span>
              <span className="text-[#D4AF37]">MINING SERVICE</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
            <Link
              to="/"
              className={`transition-colors hover:text-[#D4AF37] ${
                location.pathname === '/' ? 'text-[#D4AF37] font-bold' : 'text-neutral-300'
              }`}
            >
              Beranda
            </Link>

            {/* Services Mega Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 transition-colors hover:text-[#D4AF37] py-2 ${
                  location.pathname.startsWith('/services') ? 'text-[#D4AF37] font-bold' : 'text-neutral-300'
                }`}
              >
                <span>Layanan Perizinan</span>
                <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 rounded-xl bg-[#0A0A0A] border border-white/10 shadow-2xl p-3 animate-fade-in text-xs space-y-1">
                  <div className="px-3 py-2 text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] border-b border-white/10 mb-1">
                    Izin & Regulasi Pertambangan
                  </div>
                  {SERVICES_DATA.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      className="block px-3 py-2 rounded-lg hover:bg-[#161616] text-neutral-300 hover:text-[#D4AF37] transition-colors"
                    >
                      <div className="font-semibold text-white">{s.shortTitle}</div>
                      <div className="text-[10px] text-neutral-500 truncate">{s.authority}</div>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-white/10 text-center">
                    <Link
                      to="/services"
                      className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] hover:underline"
                    >
                      Lihat Semua 10 Perizinan →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`transition-colors hover:text-[#D4AF37] ${
                location.pathname === '/about' ? 'text-[#D4AF37] font-bold' : 'text-neutral-300'
              }`}
            >
              Tentang Kami
            </Link>

            <Link
              to="/contact"
              className={`transition-colors hover:text-[#D4AF37] ${
                location.pathname === '/contact' ? 'text-[#D4AF37] font-bold' : 'text-neutral-300'
              }`}
            >
              Kontak
            </Link>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-2 rounded-full bg-[#111111] border border-white/10 text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all flex items-center gap-2 text-xs"
              aria-label="Cari Perizinan"
            >
              <Search className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden md:inline-block text-[10px] uppercase tracking-widest text-neutral-400">Cari Izin...</span>
            </button>

            {/* Direct WhatsApp Call to Action Button */}
            <button
              onClick={handleConsultClick}
              className="hidden sm:flex items-center gap-2 px-6 py-2 border border-[#D4AF37] text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#D4AF37] hover:text-black transition-all shadow-lg"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Free Consultation</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 rounded-lg bg-[#111111] border border-white/10 text-neutral-200 hover:text-[#D4AF37]"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
