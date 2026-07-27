import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Trees, Briefcase, FileCheck, MapPin, ShieldCheck, Activity,
  BarChart3, Ship, Pickaxe, Truck, Search, Clock, ArrowRight, MessageSquare, Filter
} from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { openWhatsApp } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';

export const ServicesGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Licensing', 'Operations', 'Reporting', 'Export & Trade'];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trees': return Trees;
      case 'Briefcase': return Briefcase;
      case 'FileCheck': return FileCheck;
      case 'MapPin': return MapPin;
      case 'ShieldCheck': return ShieldCheck;
      case 'Activity': return Activity;
      case 'BarChart3': return BarChart3;
      case 'Ship': return Ship;
      case 'Pickaxe': return Pickaxe;
      case 'Truck': return Truck;
      default: return Pickaxe;
    }
  };

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter(s => {
      const matchesSearch = 
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.shortTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.authority.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="services-grid-section" className="py-20 bg-[#050505] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-8 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.25em]">
              PORTFOLIO SERVICES
            </span>
            <span className="h-px w-8 bg-[#D4AF37]"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight font-sans">
            Layanan Perizinan & <span className="font-bold text-[#D4AF37]">Regulasi Tambang</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            10 Konsultasi Spesialis Perizinan Pertambangan Resmi Kementerian ESDM, KLHK, Kementerian Perdagangan & BKPM.
          </p>

          {/* Explicit Informational Disclaimer */}
          <div className="p-3.5 rounded-lg bg-[#0A0A0A] border border-[#D4AF37]/30 text-xs text-neutral-300 flex items-start sm:items-center gap-2.5 max-w-2xl mx-auto text-left shadow-md">
            <MessageSquare className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed text-[11px]">
              <strong className="text-[#D4AF37]">Hanya Informasi:</strong> Seluruh deskripsi perizinan di bawah bersifat informatif. Diskusi persyaratan, penyesuaian berkas, dan proses pendampingan dilakukan langsung via WhatsApp.
            </p>
          </div>
        </div>

        {/* Live Search Box & Category Filters Bar */}
        <div className="p-4 md:p-6 rounded-xl bg-[#0A0A0A] border border-white/10 shadow-2xl space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Realtime Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari perizinan (cth: RKAB, IPPKH, IUJP, Minerba One, ET Batubara, IUP OP...)"
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#111111] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#D4AF37] transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] uppercase font-bold tracking-widest text-neutral-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <Filter className="w-4 h-4 text-[#D4AF37] shrink-0 hidden md:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#D4AF37] text-black font-bold shadow-lg'
                      : 'bg-[#111111] text-neutral-400 hover:text-white border border-white/10'
                  }`}
                >
                  {cat === 'All' ? 'Semua Perizinan' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length === 0 ? (
            <div className="col-span-full py-16 text-center text-neutral-400 space-y-3">
              <p className="text-lg font-semibold text-white">Tidak ada layanan perizinan yang sesuai</p>
              <p className="text-xs text-neutral-500">Coba kata kunci lain atau berkonsultasi langsung via WhatsApp.</p>
              <button
                onClick={() => openWhatsApp({ customMessage: `Halo Tim Consultant Mining, saya ingin bertanya tentang perizinan pertambangan.` })}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest"
              >
                Konsultasi Bebas WA
              </button>
            </div>
          ) : (
            filteredServices.map((service) => {
              const IconComp = getServiceIcon(service.iconName);
              return (
                <div
                  key={service.id}
                  className="group relative rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl"
                >
                  <div className="space-y-4">
                    {/* Top Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-10 h-10 rounded bg-[#111111] border border-white/10 group-hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37] transition-all">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 text-[10px] font-bold uppercase tracking-widest">
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                        {service.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold mt-0.5">
                        {service.authority}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Estimated Completion Time */}
                    <div className="flex items-center gap-2 pt-2 text-xs text-neutral-300 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Estimasi: <strong className="text-white">{service.estimatedTime}</strong></span>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2">
                    {/* Detail Page Route */}
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex-1 py-2.5 px-3 rounded bg-[#111111] hover:bg-white/10 text-neutral-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-white/10"
                    >
                      <span>Detail</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {/* Direct Pre-filled WhatsApp CTA */}
                    <button
                      onClick={() => {
                        trackWhatsAppClick(`Grid Card CTA - ${service.slug}`);
                        openWhatsApp({ serviceName: service.shortTitle });
                      }}
                      className="py-2.5 px-4 rounded bg-[#D4AF37] text-black hover:bg-[#e5c158] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1"
                      aria-label={`Consult ${service.shortTitle} via WhatsApp`}
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-black text-black" />
                      <span>WA</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
