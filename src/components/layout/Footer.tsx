import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, ArrowUpRight, Pickaxe } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { COMPANY_INFO } from '../../data/companyData';
import { openWhatsApp } from '../../utils/whatsapp';

interface FooterProps {
  onOpenMap: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMap }) => {
  return (
    <footer id="main-footer" className="bg-[#050505] border-t border-white/10 text-neutral-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Brand & Enterprise Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-sm flex items-center justify-center font-bold text-black text-lg italic shadow-md shrink-0">
                S
              </div>
              <div className="flex items-center text-base font-bold tracking-tight text-white uppercase font-sans">
                <span>CONSULTANT&nbsp;</span>
                <span className="text-[#D4AF37]">MINING SERVICE</span>
              </div>
            </Link>

            <p className="text-neutral-400 text-xs font-light leading-relaxed max-w-md">
              Firma konsultan legalitas, perizinan, dan regulasi pertambangan terdepan di Indonesia. Mengakselerasi kepatuhan hukum pemegang IUP/IUPK & IUJP melalui pendampingan komprehensif di Ditjen Minerba ESDM, KLHK, dan BKPM.
            </p>

            <div className="flex items-center gap-2 pt-1 text-[#D4AF37] text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Sesuai Standar UU No. 3/2020 & Sistem OSS RBA</span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openWhatsApp({ sourcePage: 'Footer Enterprise CTA' })}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#D4AF37] hover:bg-[#e5c158] text-black font-bold text-xs uppercase tracking-widest shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-black text-black" />
                <span>Konsultasi WA</span>
              </button>
            </div>
          </div>

          {/* Col 2: Perizinan Utama (1-5) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
              Layanan Utama (I)
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-[#D4AF37] transition-colors flex items-center justify-between group"
                  >
                    <span>{s.shortTitle}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Perizinan Utama (6-10) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
              Layanan Utama (II)
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.slice(5, 10).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-[#D4AF37] transition-colors flex items-center justify-between group"
                  >
                    <span>{s.shortTitle}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Address, Google Maps & Operating Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
              Kantor Pusat SCBD
            </h4>
            <div className="space-y-2.5 text-neutral-400 font-light">
              <button
                onClick={onOpenMap}
                className="flex items-start gap-2 text-left hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 group-hover:animate-bounce" />
                <span className="underline decoration-dotted underline-offset-4">
                  {COMPANY_INFO.address.building}, 28th Fl, SCBD Lot 11A, Jakarta Selatan
                </span>
              </button>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white">{COMPANY_INFO.phone}</a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a>
              </div>

              <div className="flex items-start gap-2 pt-1 text-[11px] text-neutral-500">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links & Bottom Legal Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-wider text-neutral-500">
          <div className="flex items-center gap-6 flex-wrap">
            <span>© {new Date().getFullYear()} Nusa Minerba Consulting. All Rights Reserved.</span>
            <Link to="/sitemap" className="hover:text-[#D4AF37]">Sitemap</Link>
            <Link to="/contact" className="hover:text-[#D4AF37]">Hubungi Konsultan</Link>
          </div>

          <div className="text-center md:text-right">
            <span>Enterprise Mining Advisory • Managed by Senior Legal & Geologist Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
