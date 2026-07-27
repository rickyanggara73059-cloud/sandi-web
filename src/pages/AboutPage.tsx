import React from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { CTABanner } from '../components/home/CTABanner';
import { TESTIMONIALS, COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Award, Users, CheckCircle2, Building2, Pickaxe, MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Tentang Nusa Minerba Consulting | Firma Konsultan Perizinan Pertambangan"
        description="Profil Nusa Minerba Consulting, firma konsultan legalitas dan regulasi pertambangan terkemuka di Indonesia. Didukung eks-evaluator ESDM dan konsultan hukum pertambangan senior."
      />

      <div className="bg-[#050505] text-white pt-6 space-y-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumb items={[{ label: 'Tentang Kami' }]} />

          {/* About Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                <Pickaxe className="w-3.5 h-3.5" />
                <span>Enterprise Advisory Firm</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
                Pionir Legalitas & <span className="text-[#D4AF37]">Regulasi Pertambangan</span> Indonesia
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Nusa Minerba Consulting didirikan untuk memberikan kepastian hukum dan percepatan administrasi perizinan bagi pemilik konsesi pertambangan (IUP/IUPK), perusahaan kontraktor (IUJP), serta pelaku usaha ekspor mineral dan batubara di seluruh wilayah Indonesia.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => openWhatsApp({ sourcePage: 'About Page' })}
                  className="px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#e5c158] text-black font-bold text-xs flex items-center gap-2 shadow-xl"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Konsultasi Profil Perusahaan</span>
                </button>
              </div>
            </div>

            {/* Credentials Card */}
            <div className="lg:col-span-5 rounded-3xl bg-[#111111] border border-[#262626] p-8 space-y-4 shadow-2xl">
              <h3 className="text-base font-bold text-white border-b border-neutral-800 pb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#D4AF37]" />
                <span>Standar Mutu & Akreditasi</span>
              </h3>
              <ul className="space-y-3 text-xs text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Terdaftar & Tersertifikasi Badan Usaha Konsultasi Pertambangan ESDM</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Tim Ahli Geologi Bersertifikat KORMI / JORC Competent Person</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Konsultan Hukum Spesialis Perizinan Kehutanan PPKH KLHK</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>100% Bebas Suspen / Rekam Jejak Bersih di Portal MODI ESDM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-8 pt-8 border-t border-neutral-800">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white">
                Kepercayaan <span className="text-[#D4AF37]">Pemimpin Industri</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Testimoni jajaran direksi dan manajer operasional pertambangan Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="p-6 rounded-2xl bg-[#111111] border border-[#222222] space-y-4 shadow-xl flex flex-col justify-between"
                >
                  <p className="text-xs text-neutral-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="pt-4 border-t border-neutral-800 space-y-1">
                    <h5 className="text-xs font-bold text-white">{t.clientName}</h5>
                    <p className="text-[11px] text-[#D4AF37] font-medium">{t.role} - {t.company}</p>
                    <span className="text-[10px] text-neutral-500 block">{t.licenseAcquired}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CTABanner />
      </div>
    </>
  );
};
