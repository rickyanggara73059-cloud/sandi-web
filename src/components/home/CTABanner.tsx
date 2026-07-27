import React from 'react';
import { MessageSquare, ShieldCheck, Clock, Award } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';
import ctaBgImage from '../../assets/images/heavy_equipment_bg_1785150318076.jpg';

export const CTABanner: React.FC = () => {
  const handleCTAClick = () => {
    trackWhatsAppClick('Bottom CTA Banner');
    openWhatsApp({
      sourcePage: 'High Conversion CTA Banner'
    });
  };

  return (
    <section id="cta-banner" className="py-20 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-xl bg-[#0A0A0A] border border-white/10 p-8 sm:p-14 shadow-2xl overflow-hidden text-center space-y-8">
          {/* Heavy Equipment Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={ctaBgImage}
              alt="Heavy Mining Equipment Operations"
              className="w-full h-full object-cover object-center filter brightness-[0.20] contrast-125 opacity-25"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]"></div>
          </div>

          <div className="relative z-10 flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-8 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.25em] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              FAST LEAD RESPONSE • FREE INITIAL ADVISORY
            </span>
            <span className="h-px w-8 bg-[#D4AF37]"></span>
          </div>

          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light font-sans text-white leading-tight">
              Siap Membantu <span className="font-bold text-[#D4AF37]">Legalitas Usaha Pertambangan Anda!</span>
            </h2>
            <p className="text-base sm:text-xl text-neutral-200 font-light">
              Dimas Tri Prasetyo, S.T. &mdash; <strong className="text-[#D4AF37]">0812 1945 1336</strong>
            </p>
          </div>

          <p className="relative z-10 text-xs sm:text-sm text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
            LEGALITAS AMAN, USAHA NYAMAN, BISNIS PERTAMBANGAN BERKELANJUTAN! Dapatkan pendampingan dokumen legalitas IPP, IUJP, MinerbaOne, MVP, Open MOMS, Laporan Triwulan, LKPM, ET Batubara, RKAB, hingga IUP OP.
          </p>

          {/* Large WhatsApp Button */}
          <div className="relative z-10 pt-4 flex flex-col items-center justify-center">
            <button
              onClick={handleCTAClick}
              className="px-10 py-5 rounded bg-[#D4AF37] hover:bg-[#e5c158] text-black font-bold text-sm uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-black text-black" />
              <span>Hubungi Konsultan via WhatsApp</span>
            </button>

            <div className="mt-6 flex items-center justify-center gap-6 text-[10px] uppercase tracking-widest text-neutral-400 font-semibold flex-wrap">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                Respon Cepat &lt; 15 Menit
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                NDA Protected
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                100% Legal ESDM & KLHK
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
