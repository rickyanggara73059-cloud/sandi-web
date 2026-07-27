import React from 'react';
import { MessageSquare, FileSearch, Send, Activity, CheckCircle2, ArrowDown } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation',
      subtitle: 'Konsultasi Awal & Diagnosa Legalitas',
      description: 'Diskusi mendalam mengenai kebutuhan perizinan tambang, status WIUP/IUP, serta pemetaan kepatuhan awal bersama Konsultan Senior.',
      icon: MessageSquare,
      highlight: 'Sesi Bebas Biaya'
    },
    {
      step: '02',
      title: 'Document Review',
      subtitle: 'Audit Spasial & Kelengkapan Berkas',
      description: 'Verifikasi presisi dokumen teknis (JORC/FS), peta GIS Shapefile, AMDAL, dan keuangan oleh tim ahli untuk mengeliminasi potensi revisi.',
      icon: FileSearch,
      highlight: 'Checklist Presisi'
    },
    {
      step: '03',
      title: 'Submission',
      subtitle: 'Pengajuan Resmi Portal Kementerian',
      description: 'Pengunggahan berkas digital ke e-RKAB, SIAP-KLHK, e-Licensing ESDM, atau OSS RBA disertai tanda terima resmi pemerintah.',
      icon: Send,
      highlight: 'Submit Berkas Resmi'
    },
    {
      step: '04',
      title: 'Monitoring',
      subtitle: 'Pengawalan & Sidang Evaluasi',
      description: 'Pendampingan langsung dalam sidang klarifikasi evaluator Ditjen Minerba/KLHK dan update progress harian transparan kepada klien.',
      icon: Activity,
      highlight: 'Tracking Berkas Harian'
    },
    {
      step: '05',
      title: 'Completed',
      subtitle: 'Penerbitan SK & Aktivasi Akun',
      description: 'Surat Keputusan Izin Resmi diterbitkan, akun portal aktif (MOMS, MVP, SIMBARA), dan serah terima dokumen legalitas lengkap.',
      icon: CheckCircle2,
      highlight: 'SK Izin Terbit Aktif'
    }
  ];

  return (
    <section id="how-we-work" className="py-20 bg-[#050505] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-8 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.25em]">
              WORKFLOW SYSTEM
            </span>
            <span className="h-px w-8 bg-[#D4AF37]"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight font-sans">
            Bagaimana <span className="font-bold text-[#D4AF37]">Kami Bekerja</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Metodologi kerja terstruktur 5 tahapan transparan dari konsultasi hingga terbitnya Surat Keputusan Izin Resmi.
          </p>
        </div>

        {/* Timeline Grid & Connecting Lines */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-[#D4AF37]/30 -translate-y-8 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-[#D4AF37] p-6 flex flex-col justify-between transition-all duration-300 shadow-xl"
                >
                  <div className="space-y-4">
                    {/* Top Row Step badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors font-mono">
                        {item.step}
                      </span>
                      <div className="w-9 h-9 rounded bg-[#111111] border border-white/10 group-hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37] transition-all">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Arrow for mobile view */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center pt-4 text-[#D4AF37]">
                      <ArrowDown className="w-4 h-4 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA banner inside timeline */}
        <div className="text-center pt-6">
          <button
            onClick={() => openWhatsApp({ customMessage: 'Halo Tim Consultant Mining, kami ingin memulai Tahap 01 Consultation untuk perizinan proyek pertambangan kami.' })}
            className="px-8 py-4 rounded bg-[#D4AF37] hover:bg-[#e5c158] text-black font-bold text-xs uppercase tracking-widest shadow-xl transition-all"
          >
            Mulai Tahap 01: Consultation Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};
