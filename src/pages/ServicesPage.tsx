import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { CTABanner } from '../components/home/CTABanner';
import { ShieldCheck, Pickaxe, ArrowRight, MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Layanan Perizinan Pertambangan | Katalog Resmi ESDM, KLHK & BKPM"
        description="Katalog lengkap 10 Perizinan Utama Pertambangan Indonesia: IPP, IUJP, RKAB 3 Tahunan, Minerba One Map, MVP Ekspor, MOMS, LKPM BKPM, ET Batubara, IUP OP, IUP OPK."
      />

      <div className="bg-[#050505] text-white pt-6 space-y-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb items={[{ label: 'Layanan Perizinan' }]} />

          <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
              <Pickaxe className="w-3.5 h-3.5" />
              <span>Katalog Perizinan Pertambangan Complete</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
              10 Layanan Utama <span className="text-[#D4AF37]">Konsultasi Perizinan</span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Pilih jenis perizinan yang dibutuhkan konsesi atau usaha jasa pertambangan Anda. Setiap layanan dilengkapi dengan asistensi verifikasi hingga Surat Keputusan Resmi terbit.
            </p>

            {/* Informational & WhatsApp Notice Banner */}
            <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#D4AF37]/30 text-left max-w-2xl mx-auto flex items-start gap-3 shadow-lg">
              <MessageSquare className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-300 leading-relaxed">
                <span className="font-bold text-[#D4AF37] uppercase tracking-wider block mb-0.5">Informasi Layanan & Konsultasi</span>
                Seluruh detail perizinan pada website ini disediakan <strong className="text-white">hanya sebagai informasi awal</strong>. Pembahasan mendalam, analisis kelayakan dokumen, dan proses pendampingan resmi <strong className="text-white">sepenuhnya dibicarakan langsung melalui WhatsApp</strong> bersama Konsultan Senior S Consultant Mining Service.
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid with Live Search & Filters */}
        <ServicesGrid />

        <CTABanner />
      </div>
    </>
  );
};
