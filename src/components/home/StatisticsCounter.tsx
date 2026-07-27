import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_STATS } from '../../data/companyData';
import { ShieldCheck, Award, TrendingUp, DollarSign } from 'lucide-react';

export const StatisticsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="statistics-counter" className="py-20 bg-[#050505] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-8 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.25em]">
              PROVEN TRACK RECORD
            </span>
            <span className="h-px w-8 bg-[#D4AF37]"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight font-sans">
            Rekam Jejak & <span className="font-bold text-[#D4AF37]">Pencapaian Kinerja</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Keberhasilan pendampingan perizinan dan advis regulasi pertambangan bagi perusahaan nasional maupun multinasional di Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_STATS.map((stat, idx) => {
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-[#D4AF37] transition-all duration-300 text-center space-y-3 shadow-2xl"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#D4AF37] tracking-tight font-sans">
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>

                <h4 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#D4AF37] transition-colors">
                  {stat.label}
                </h4>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
