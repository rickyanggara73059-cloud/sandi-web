import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../../data/servicesData';
import { openWhatsApp } from '../../utils/whatsapp';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  const filteredServices = useMemo(() => {
    if (!query.trim()) return SERVICES_DATA.slice(0, 6); // Default top 6
    const q = query.toLowerCase();
    return SERVICES_DATA.filter(service => 
      service.title.toLowerCase().includes(q) ||
      service.shortTitle.toLowerCase().includes(q) ||
      service.shortDescription.toLowerCase().includes(q) ||
      service.authority.toLowerCase().includes(q) ||
      service.category.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-[#111111] border border-[#2A2A2A] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#2A2A2A] bg-[#161616]">
          <Search className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari perizinan tambang... (cth: RKAB, IPPKH, IUJP, Minerba One, ET Batubara)"
            className="w-full bg-transparent text-white placeholder-neutral-500 text-sm md:text-base focus:outline-none"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-neutral-400 hover:text-white text-xs">
              Reset
            </button>
          )}
          <button onClick={onClose} className="p-1 rounded-lg text-neutral-400 hover:text-white bg-neutral-800/50">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results List */}
        <div className="p-4 md:p-6 overflow-y-auto space-y-3">
          <div className="flex items-center justify-between text-xs text-neutral-400 pb-1">
            <span>{query ? `Hasil pencarian (${filteredServices.length})` : 'Layanan Konsultasi Utama'}</span>
            <span className="text-neutral-500">Tekan ESC untuk menutup</span>
          </div>

          {filteredServices.length === 0 ? (
            <div className="py-12 text-center text-neutral-400">
              <p className="text-base font-medium text-white mb-1">Perizinan tidak ditemukan</p>
              <p className="text-xs text-neutral-500 max-w-md mx-auto mb-4">
                Tidak menemukan kode atau jenis perizinan yang dicari? Konsultasikan langsung regulasi pertambangan khusus Anda dengan tim kami.
              </p>
              <button
                onClick={() => {
                  onClose();
                  openWhatsApp({ customMessage: `Halo Tim Nusa Minerba, saya ingin berkonsultasi perizinan khusus pertambangan yang belum ada di daftar list website.` });
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4AF37] text-black text-xs font-semibold hover:bg-[#e5c158]"
              >
                Konsultasi Bebas via WhatsApp
              </button>
            </div>
          ) : (
            filteredServices.map(service => (
              <div
                key={service.id}
                className="group p-4 rounded-xl bg-[#161616] border border-[#262626] hover:border-[#D4AF37]/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 uppercase">
                      {service.category}
                    </span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-neutral-500" />
                      {service.estimatedTime}
                    </span>
                  </div>
                  <h4 className="text-sm md:text-base font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    to={`/services/${service.slug}`}
                    onClick={onClose}
                    className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium flex items-center gap-1 transition-colors"
                  >
                    <span>Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => {
                      onClose();
                      openWhatsApp({ serviceName: service.shortTitle });
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#D4AF37]/20 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black border border-[#D4AF37]/30 text-xs font-semibold transition-all"
                  >
                    Konsultasi WA
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 px-5 bg-[#0a0a0a] border-t border-[#2A2A2A] text-center text-[11px] text-neutral-500 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            Sesuai Standar Ditjen Minerba & KLHK
          </span>
          <span>Nusa Minerba Legal Advisory</span>
        </div>
      </div>
    </div>
  );
};
