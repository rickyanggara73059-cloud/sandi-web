import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SERVICES_DATA } from '../data/servicesData';
import { Map, ArrowRight, ExternalLink } from 'lucide-react';

export const SitemapPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Visual Sitemap & Direktori Perizinan | Nusa Minerba"
        description="Direktori lengkap halaman dan rute perizinan pertambangan Nusa Minerba Consulting."
      />

      <div className="bg-[#050505] text-white pt-6 space-y-12 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumb items={[{ label: 'Visual Sitemap' }]} />

          <div className="space-y-3">
            <h1 className="text-3xl font-extrabold font-serif text-white flex items-center gap-2">
              <Map className="w-8 h-8 text-[#D4AF37]" />
              <span>Peta Situs & Direktori Perizinan</span>
            </h1>
            <p className="text-xs text-neutral-400">
              Akses cepat ke seluruh halaman utama dan katalog 10 perizinan pertambangan resmi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Pages */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-[#262626] space-y-4">
              <h3 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider border-b border-neutral-800 pb-2">
                Halaman Utama
              </h3>
              <ul className="space-y-3 text-xs">
                <li>
                  <Link to="/" className="text-neutral-200 hover:text-[#D4AF37] flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Beranda (Landing Page Utama)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-neutral-200 hover:text-[#D4AF37] flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Katalog Layanan Perizinan</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-neutral-200 hover:text-[#D4AF37] flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Tentang Kami & Akreditasi</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-neutral-200 hover:text-[#D4AF37] flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Hubungi HQ & Konsultasi</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Detail Routes */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-[#262626] space-y-4">
              <h3 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider border-b border-neutral-800 pb-2">
                Rute Detail Perizinan (10 Services)
              </h3>
              <ul className="space-y-2.5 text-xs">
                {SERVICES_DATA.map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="text-neutral-200 hover:text-[#D4AF37] flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{s.title}</span>
                      </span>
                      <span className="text-[10px] text-neutral-500 font-mono">/services/{s.slug}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-[#222222] text-xs text-neutral-400 flex items-center justify-between">
            <span>Sitemap.xml statis tersedia di root domain:</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] font-semibold flex items-center gap-1 hover:underline">
              <span>Buka sitemap.xml</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
