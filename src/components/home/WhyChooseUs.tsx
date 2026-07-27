import React from 'react';
import { ShieldCheck, Users, Zap, MessageSquare, Workflow, Globe, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../../data/whyUsData';
import { openWhatsApp } from '../../utils/whatsapp';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Users': return Users;
      case 'Zap': return Zap;
      case 'MessageSquare': return MessageSquare;
      case 'Workflow': return Workflow;
      case 'Globe': return Globe;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-[#050505] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-8 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.25em]">
              ENTERPRISE ADVANTAGE
            </span>
            <span className="h-px w-8 bg-[#D4AF37]"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight font-sans">
            Mengapa Memilih <span className="font-bold text-[#D4AF37]">Consultant Mining Service</span>?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Standar konsultasi tingkat tinggi dengan komitmen kepatuhan regulasi 100%, akurasi teknis geologi, dan kecepatan proses verifikasi di kementerian terkait.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_DATA.map((pillar) => {
            const IconComponent = getIcon(pillar.iconName);
            return (
              <div
                key={pillar.id}
                className="group relative p-6 sm:p-8 rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded bg-[#111111] border border-white/10 group-hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37] transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                      {pillar.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#D4AF37] font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Diuji dalam Proyek Tambang Skala Nasional</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-lg bg-[#0A0A0A] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Ingin Menilai Kelayakan Dokumen Perizinan Anda?</h4>
            <p className="text-xs text-neutral-400 font-light">Tim konsultan senior kami siap melakukan pra-evaluasi dokumen pertambangan Anda tanpa biaya.</p>
          </div>
          <button
            onClick={() => openWhatsApp({ customMessage: 'Halo Tim Consultant Mining, kami ingin mengajukan pra-evaluasi kelayakan dokumen perizinan tambang kami.' })}
            className="shrink-0 px-8 py-4 rounded bg-[#D4AF37] hover:bg-[#e5c158] text-black font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
          >
            Minta Pra-Evaluasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
};
