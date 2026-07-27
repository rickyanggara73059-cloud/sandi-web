import React from 'react';
import { Service } from '../../types';
import { Breadcrumb } from '../common/Breadcrumb';
import { Clock, ShieldCheck, MessageSquare, Building2, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';

interface ServiceHeroProps {
  service: Service;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ service }) => {
  const handleConsult = () => {
    trackWhatsAppClick(`Service Hero CTA - ${service.slug}`);
    openWhatsApp({
      serviceName: service.shortTitle,
      sourcePage: `Service Detail: ${service.title}`
    });
  };

  return (
    <section className="relative bg-[#050505] text-white pt-6 pb-16 border-b border-[#222222] overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        <Breadcrumb items={[{ label: 'Layanan Perizinan', path: '/services' }, { label: service.shortTitle }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Info Header */}
          <div className="lg:col-span-8 space-y-5">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-wider">
                {service.category}
              </span>
              <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#D4AF37]" />
                {service.authority}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl">
              {service.fullDescription}
            </p>

            {/* Informational Disclaimer Box */}
            <div className="p-3.5 rounded-lg bg-[#0A0A0A] border border-[#D4AF37]/30 text-xs text-neutral-300 flex items-start gap-2.5">
              <MessageSquare className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="leading-relaxed text-[11px]">
                <strong className="text-[#D4AF37]">Catatan Informasi:</strong> Informasi regulasi &amp; persyaratan {service.shortTitle} di halaman ini disajikan sebagai panduan umum. Seluruh pembahasan teknis, evaluasi dokumen konsesi, dan pendampingan resmi akan <strong className="text-white">dibicarakan langsung via WhatsApp</strong>.
              </p>
            </div>

            {/* Key Benefits Pills */}
            <div className="pt-2 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Manfaat & Kepastian Hukum:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                {service.keyBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Consultation Card */}
          <div className="lg:col-span-4 rounded-3xl bg-[#111111] border-2 border-[#D4AF37]/40 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="space-y-3 border-b border-neutral-800 pb-4">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37]">Estimasi Waktu Pengurusan</span>
              <div className="flex items-center gap-2 text-xl font-bold text-white">
                <Clock className="w-6 h-6 text-[#D4AF37]" />
                <span>{service.estimatedTime}</span>
              </div>
              <p className="text-[11px] text-neutral-400">Siklus pengurusan dokumen sampai SK Izin terbit aktif.</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleConsult}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#e5c158] hover:to-[#C29B2B] text-black font-extrabold text-sm tracking-wide shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-black" />
                <span>Bicarakan {service.shortTitle} via WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Kerahasiaan Data Terjamin (NDA)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
