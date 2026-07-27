import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../../data/servicesData';
import { ArrowRight, Layers } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

interface RelatedServicesProps {
  currentSlug: string;
}

export const RelatedServices: React.FC<RelatedServicesProps> = ({ currentSlug }) => {
  const related = SERVICES_DATA.filter(s => s.slug !== currentSlug).slice(0, 3);

  return (
    <div id="related-services-section" className="space-y-6 pt-8 border-t border-neutral-800">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white font-serif flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#D4AF37]" />
            <span>Perizinan Pertambangan Terkait</span>
          </h3>
          <p className="text-xs text-neutral-400 mt-1">Layanan pendukung yang sering dibutuhkan bersamaan.</p>
        </div>
        <Link to="/services" className="text-xs text-[#D4AF37] font-semibold hover:underline">
          Lihat Semua →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((s) => (
          <div
            key={s.id}
            className="p-5 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37]">
                {s.category}
              </span>
              <h4 className="text-sm font-bold text-white">{s.title}</h4>
              <p className="text-xs text-neutral-400 line-clamp-2">{s.shortDescription}</p>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <Link
                to={`/services/${s.slug}`}
                className="flex-1 py-2 px-3 rounded-lg bg-[#161616] hover:bg-neutral-800 text-xs font-semibold text-neutral-200 flex items-center justify-center gap-1"
              >
                <span>Detail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => openWhatsApp({ serviceName: s.shortTitle })}
                className="py-2 px-3 rounded-lg bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black font-bold text-xs"
              >
                WA
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
