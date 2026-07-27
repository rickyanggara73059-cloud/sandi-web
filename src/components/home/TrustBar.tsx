import React from 'react';
import { Shield, Building2, Flame, Layers, Globe2, Cpu } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const partners = [
    { name: 'Pemegang IUP OP Batubara', icon: Flame, text: '200+ Konsesi Kalimantan & Sumatra' },
    { name: 'Smelter Nikel & Mineral', icon: Layers, text: 'Kawasan Industri Morowali & Weda Bay' },
    { name: 'Kontraktor Utama IUJP', icon: Building2, text: 'Mitra Usaha Jasa Pertambangan' },
    { name: 'Eksportir Batubara ET', icon: Globe2, text: 'Verifikasi MVP & SIMBARA Bea Cukai' },
    { name: 'Eks-Evaluator ESDM & KLHK', icon: Shield, text: 'Sertifikasi Tenaga Ahli Resmi' },
    { name: 'Sistem Digital MOMI/MODI', icon: Cpu, text: 'Integrasi Spasial GIS Presisi' },
  ];

  return (
    <section id="trust-bar" className="py-10 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500 mb-6">
          Kemitraan Strategis & Kepatuhan Regulasi Lintas Sektor Pertambangan
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="p-3.5 rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-[#D4AF37]/40 transition-all text-center space-y-1.5 group"
              >
                <div className="w-8 h-8 mx-auto rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-semibold text-white truncate">{partner.name}</h5>
                <p className="text-[10px] text-neutral-500 line-clamp-1">{partner.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
