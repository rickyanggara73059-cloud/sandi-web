import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, ShieldCheck, Award, Clock, ChevronRight, Pickaxe } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { openWhatsApp } from '../../utils/whatsapp';
import { trackWhatsAppClick } from '../../utils/analytics';
import heroBgImage from '../../assets/images/heavy_equipment_bg_1785150318076.jpg';

export const HeroSection: React.FC = () => {
  const handleFreeConsultation = () => {
    trackWhatsAppClick('Hero Free Consultation');
    openWhatsApp({
      sourcePage: 'Hero Primary CTA'
    });
  };

  return (
    <section id="hero-section" className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-[#050505] text-white pt-20 pb-12 border-b border-white/5">
      {/* Background Mining Image with Premium Dark Overlay & Abstract Topography SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroBgImage}
          alt="Heavy Industrial Mining Equipment Excavators and Haul Trucks"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-120 opacity-75"
          referrerPolicy="no-referrer"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/60"></div>

        {/* Abstract Topography Vector Element */}
        <div className="absolute top-0 right-0 w-[500px] h-full opacity-10 pointer-events-none hidden sm:block">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 20 Q 25 5, 50 20 T 100 20 V 100 H 0 Z" fill="url(#goldGrad)" />
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 w-full my-auto">
        {/* Abstract Gold Line Eyebrow */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[11px] font-bold">
              Fortune 500 Mining Excellence
            </span>
          </div>

          {/* Main Clean Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-[0.98] mb-6 tracking-tighter text-white font-sans">
            Consultant <br />
            <span className="font-bold text-[#D4AF37]">Mining Service.</span>
          </h1>

          <p className="text-base sm:text-xl text-gray-300 font-light max-w-xl mb-4 leading-relaxed">
            Penyedia Layanan Jasa Pengurusan Dokumen Legalitas Pertambangan Resmi Indonesia.
          </p>

          {/* Contact Person Highlight Badge */}
          <div className="inline-flex items-center gap-2 text-xs text-neutral-200 font-medium mb-8 bg-[#0A0A0A]/90 border border-[#D4AF37]/40 px-4 py-2.5 rounded-lg shadow-lg">
            <MessageSquare className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]/20" />
            <span>Hubungi Kami: <strong className="text-white font-bold">Dimas Tri Prasetyo, S.T.</strong> &mdash; <strong className="text-[#D4AF37] font-bold">0812 1945 1336</strong></span>
          </div>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              onClick={handleFreeConsultation}
              className="px-8 sm:px-10 py-4 sm:py-5 bg-[#D4AF37] text-black font-bold text-xs sm:text-sm uppercase tracking-widest rounded-md flex items-center justify-center gap-3 shadow-xl shadow-[#D4AF37]/10 hover:bg-[#e5c158] transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Free Consultation</span>
            </button>

            <Link
              to="/services"
              className="px-8 sm:px-10 py-4 sm:py-5 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-md hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <span>Our Expertise</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Interactive Fast Pills Bar */}
        <div className="pt-4 max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold italic">Primary Licenses:</span>
            <div className="flex gap-2 text-xs font-mono opacity-70">
              <span className="px-2 py-0.5 border border-white/20 rounded text-[#D4AF37]">IPP</span>
              <span className="px-2 py-0.5 border border-white/20 rounded text-[#D4AF37]">IUJP</span>
              <span className="px-2 py-0.5 border border-white/20 rounded text-[#D4AF37]">RKAB</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="px-3 py-1.5 rounded-md bg-[#0A0A0A] border border-white/10 hover:border-[#D4AF37]/50 text-neutral-300 hover:text-[#D4AF37] text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1 group shadow-sm"
              >
                <span>{service.shortTitle}</span>
                <ChevronRight className="w-3 h-3 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        {/* Key Metrics Row */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#D4AF37]">450+</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Licenses Secured</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#D4AF37]">$1.2B</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Asset Valuation Advisory</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#D4AF37]">15+</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Years Sector Dominance</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#D4AF37]">100%</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">ESDM & KLHK Compliance</div>
          </div>
        </div>
      </div>
    </section>
  );
};
