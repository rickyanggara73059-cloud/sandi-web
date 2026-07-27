import React, { useState } from 'react';
import { MessageSquare, X, ShieldCheck } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';

interface FloatingWhatsAppProps {
  serviceSlug?: string;
  serviceName?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ serviceSlug, serviceName }) => {
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);

  const handleClick = () => {
    trackWhatsAppClick('Floating Button Click', serviceSlug);
    openWhatsApp({
      serviceName: serviceName || 'General Licensing',
      sourcePage: serviceSlug ? `Service: ${serviceSlug}` : 'Home Landing Page'
    });
  };

  return (
    <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Quick Tooltip Drawer */}
      {isOpenTooltip && (
        <div className="mb-3 w-80 rounded-xl bg-[#0A0A0A] border border-white/10 p-4 shadow-2xl backdrop-blur-xl animate-fade-in text-white">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                Senior Advisor Online
              </span>
            </div>
            <button
              onClick={() => setIsOpenTooltip(false)}
              className="text-neutral-400 hover:text-white p-1 rounded-lg"
              aria-label="Close message preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3">
            <p className="text-xs text-neutral-300 leading-relaxed">
              Halo! Ada yang bisa kami bantu terkait perizinan pertambangan (<strong className="text-white">{serviceName || 'RKAB, IPPKH, IUJP'}</strong>)?
            </p>
            <div className="mt-2 flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Kerahasiaan data dijamin (NDA Protected)</span>
            </div>
          </div>

          <button
            onClick={handleClick}
            className="w-full py-2.5 px-4 rounded-md bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>Mulai Konsultasi WhatsApp</span>
          </button>
        </div>
      )}

      {/* Main Floating Pulse Button & Pill */}
      <div className="relative flex flex-col items-end group">
        <div className="hidden sm:block mb-2 bg-[#0A0A0A] border border-white/10 px-3 py-1.5 rounded-full shadow-2xl text-[10px] font-bold text-[#D4AF37] tracking-widest uppercase animate-pulse">
          READY TO CONSULT?
        </div>
        <button
          id="floating-whatsapp-btn"
          onClick={handleClick}
          onMouseEnter={() => setIsOpenTooltip(true)}
          className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20 text-black"
          aria-label="Contact Mining Consultant via WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-black text-black" />
        </button>
      </div>
    </div>
  );
};
