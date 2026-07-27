import React from 'react';
import { Service } from '../../types';
import { FileText, Wrench, Leaf, DollarSign, CheckSquare } from 'lucide-react';

interface RequirementsListProps {
  requirements: Service['requirements'];
}

export const RequirementsList: React.FC<RequirementsListProps> = ({ requirements }) => {
  const categories = [
    {
      title: 'Persyaratan Administratif',
      icon: FileText,
      items: requirements.administrative
    },
    {
      title: 'Persyaratan Teknis & Geologi',
      icon: Wrench,
      items: requirements.technical
    },
    {
      title: 'Persyaratan Lingkungan (AMDAL/UKL-UPL)',
      icon: Leaf,
      items: requirements.environmental
    },
    {
      title: 'Persyaratan Finansial & PNBP',
      icon: DollarSign,
      items: requirements.financial
    }
  ];

  return (
    <div id="service-requirements" className="space-y-6">
      <div className="border-b border-neutral-800 pb-3">
        <h3 className="text-xl font-bold text-white font-serif flex items-center gap-2">
          <CheckSquare className="w-5 h-5 text-[#D4AF37]" />
          <span>Persyaratan & Dokumen Wajib</span>
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Daftar kelengkapan berkas resmi yang disyaratkan oleh instansi pemerintah berwenang.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111111] border border-[#222222] space-y-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#161616] border border-[#2A2A2A] flex items-center justify-center text-[#D4AF37]">
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">{cat.title}</h4>
              </div>

              <ul className="space-y-2.5">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* WhatsApp Discussion Disclaimer Note */}
      <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#D4AF37]/30 text-xs text-neutral-300 flex items-start gap-3 shadow-md">
        <span className="text-[#D4AF37] font-bold uppercase tracking-wider text-[10px] shrink-0 pt-0.5">INFO PERSYARATAN:</span>
        <p className="leading-relaxed text-[11px]">
          Daftar dokumen di atas merupakan gambaran regulasi umum. Kelengkapan, analisis kesesuaian berkas, dan pendampingan penyusunan dokumen konsesi Anda <strong className="text-white">akan dibicarakan secara langsung melalui WhatsApp</strong>.
        </p>
      </div>
    </div>
  );
};
