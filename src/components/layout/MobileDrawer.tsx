import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, MessageSquare, Search, Phone, Mail, MapPin, ChevronRight, Pickaxe } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { COMPANY_INFO } from '../../data/companyData';
import { openWhatsApp } from '../../utils/whatsapp';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  onOpenMap: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
  onOpenMap
}) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex justify-end bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-sm h-full bg-[#0A0A0A] border-l border-[#262626] flex flex-col justify-between p-6 overflow-y-auto animate-slide-left text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#262626]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#D4AF37] flex items-center justify-center text-black font-bold text-lg italic">
                S
              </div>
              <div>
                <h3 className="font-bold text-sm text-white font-sans uppercase">CONSULTANT MINING SERVICE</h3>
                <p className="text-[10px] text-[#D4AF37] uppercase font-semibold">Mining Consultant</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Trigger inside drawer */}
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full mt-6 py-3 px-4 rounded-xl bg-[#161616] border border-[#2A2A2A] text-neutral-300 text-xs flex items-center gap-2 justify-between"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#D4AF37]" />
              <span>Cari Perizinan (RKAB, IPPKH...)</span>
            </div>
            <span className="text-[10px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-400">Cari</span>
          </button>

          {/* Navigation Links */}
          <div className="mt-6 space-y-1 text-sm font-medium">
            <Link
              to="/"
              onClick={onClose}
              className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                location.pathname === '/' ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-semibold' : 'text-neutral-300 hover:bg-neutral-900'
              }`}
            >
              <span>Beranda</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>

            <div className="pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] px-3">
              Katalog Perizinan Pertambangan
            </div>

            <div className="space-y-1 pl-2">
              {SERVICES_DATA.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  onClick={onClose}
                  className={`flex items-center justify-between p-2.5 rounded-lg text-xs transition-colors ${
                    location.pathname === `/services/${s.slug}` ? 'bg-[#D4AF37]/20 text-[#D4AF37] font-semibold' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  <span>{s.shortTitle}</span>
                  <span className="text-[10px] text-neutral-600">{s.category}</span>
                </Link>
              ))}
            </div>

            <Link
              to="/about"
              onClick={onClose}
              className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                location.pathname === '/about' ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-semibold' : 'text-neutral-300 hover:bg-neutral-900'
              }`}
            >
              <span>Tentang Kami</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>

            <Link
              to="/contact"
              onClick={onClose}
              className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                location.pathname === '/contact' ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-semibold' : 'text-neutral-300 hover:bg-neutral-900'
              }`}
            >
              <span>Kontak HQ</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
          </div>
        </div>

        {/* Drawer Footer & Direct WA CTA */}
        <div className="pt-6 border-t border-[#262626] space-y-4">
          <button
            onClick={() => {
              onClose();
              openWhatsApp({ sourcePage: 'Mobile Menu' });
            }}
            className="w-full py-3 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#e5c158] text-black font-semibold text-xs flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Konsultasi WhatsApp Sekarang</span>
          </button>

          <div className="space-y-2 text-[11px] text-neutral-400">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{COMPANY_INFO.email}</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenMap();
              }}
              className="flex items-center gap-2 text-left hover:text-[#D4AF37] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="underline">SCBD Jakarta HQ Location Map</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
