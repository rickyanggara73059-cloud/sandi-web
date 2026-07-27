import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MessageSquare, Menu, ChevronDown } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { openWhatsApp } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenMobileMenu
}) => {
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
{/* Brand Logo */}
<Link to="/" className="flex items-center gap-4 group">

  <div className="w-14 h-14 flex items-center justify-center shrink-0">
    <img
      src="/cms.png"
      alt="CMS Consultant Mining Service"
      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
    />
  </div>

  <div className="leading-none">
    <div className="text-white font-bold text-lg tracking-wide">
      CONSULTANT
    </div>

    <div className="text-[#D4AF37] font-bold text-lg tracking-wide">
      MINING SERVICE
    </div>
  </div>

</Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">

            <Link
              to="/"
              className={`transition-colors hover:text-[#D4AF37] ${
                location.pathname === '/'
                  ? 'text-[#D4AF37] font-bold'
                  : 'text-neutral-300'
              }`}
            >
              Beranda
            </Link>


            {/* Dropdown Services */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >

              <Link
                to="/services"
                className={`flex items-center gap-1 transition-colors hover:text-[#D4AF37] py-2 ${
                  location.pathname.startsWith('/services')
                    ? 'text-[#D4AF37] font-bold'
                    : 'text-neutral-300'
                }`}
              >

                <span>Layanan Perizinan</span>

                <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:rotate-180 transition-transform" />

              </Link>


              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 rounded-xl bg-[#0A0A0A] border border-white/10 shadow-2xl p-3 text-xs">

                  <div className="px-3 py-2 text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] border-b border-white/10">
                    Izin & Regulasi Pertambangan
                  </div>


                  {SERVICES_DATA.map((s) => (

                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      className="block px-3 py-2 rounded-lg hover:bg-[#161616] text-neutral-300 hover:text-[#D4AF37]"
                    >

                      <div className="font-semibold text-white">
                        {s.shortTitle}
                      </div>

                      <div className="text-[10px] text-neutral-500">
                        {s.authority}
                      </div>

                    </Link>

                  ))}

                </div>
              )}

            </div>


            <Link
              to="/about"
              className="text-neutral-300 hover:text-[#D4AF37]"
            >
              Tentang Kami
            </Link>


            <Link
              to="/contact"
              className="text-neutral-300 hover:text-[#D4AF37]"
            >
              Kontak
            </Link>

          </nav>



          {/* Right Controls */}
          <div className="flex items-center gap-3">


            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-2 rounded-full bg-[#111111] border border-white/10 text-neutral-300 hover:text-[#D4AF37]"
            >
              <Search className="w-4 h-4 text-[#D4AF37]" />
            </button>



            <button
              onClick={handleConsultClick}
              className="hidden sm:flex items-center gap-2 px-6 py-2 border border-[#D4AF37] text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#D4AF37] hover:text-black"
            >

              <MessageSquare className="w-4 h-4" />

              Free Consultation

            </button>



            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 rounded-lg bg-[#111111] border border-white/10 text-white"
            >

              <Menu className="w-5 h-5" />

            </button>


          </div>

        </div>

      </div>

    </header>
  );
};