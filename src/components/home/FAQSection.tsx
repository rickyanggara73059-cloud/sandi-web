import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { MAIN_FAQS } from '../../data/faqData';
import { openWhatsApp } from '../../utils/whatsapp';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(MAIN_FAQS[0]?.id || null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'RKAB', 'Licensing', 'Export', 'Compliance'];

  const filteredFaqs = MAIN_FAQS.filter(
    faq => activeCategory === 'All' || faq.category === activeCategory
  );

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-20 bg-[#050505] text-white border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-8 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.25em] flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="h-px w-8 bg-[#D4AF37]"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight font-sans">
            Pertanyaan <span className="font-bold text-[#D4AF37]">Umum Regulasi</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Jawaban lengkap atas pertanyaan regulasi, skema pengajuan RKAB, IPPKH, IUJP, dan izin ekspor batubara.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-black font-bold shadow-lg'
                  : 'bg-[#0A0A0A] text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              {cat === 'All' ? 'Semua FAQ' : cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-lg bg-[#0A0A0A] border border-white/5 hover:border-[#D4AF37]/40 transition-all overflow-hidden shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm text-white hover:text-[#D4AF37] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-white/10 pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Ask Helper */}
        <div className="p-6 rounded-lg bg-[#0A0A0A] border border-white/10 text-center space-y-3">
          <p className="text-xs text-neutral-300 font-light">Punya pertanyaan spesifik mengenai regulasi konsesi Anda?</p>
          <button
            onClick={() => openWhatsApp({ customMessage: 'Halo Tim Consultant Mining, saya ingin bertanya seputar pertanyaan regulasi tambang khusus.' })}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#D4AF37] hover:bg-[#e5c158] text-black font-bold text-xs uppercase tracking-widest"
          >
            <MessageSquare className="w-4 h-4 fill-black text-black" />
            <span>Tanyakan Langsung ke Konsultan WA</span>
          </button>
        </div>
      </div>
    </section>
  );
};
