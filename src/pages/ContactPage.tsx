import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'RKAB 3 Tahunan ESDM',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp message from form data
    const msg = `Halo Tim Nusa Minerba,\n\nFormulir Kontak Website:\n- Nama: ${formData.name}\n- Perusahaan: ${formData.company}\n- Email: ${formData.email}\n- No. HP: ${formData.phone}\n- Perizinan Dicari: ${formData.service}\n- Pesan: ${formData.message}`;
    
    setTimeout(() => {
      openWhatsApp({ customMessage: msg });
    }, 500);
  };

  return (
    <>
      <SEO
        title="Hubungi Konsultan Pertambangan HQ SCBD | Nusa Minerba"
        description="Hubungi tim konsultan perizinan pertambangan Nusa Minerba Consulting di SCBD Jakarta. Jadwalkan diskusi langsung via WhatsApp atau kunjungan kantor."
      />

      <div className="bg-[#050505] text-white pt-6 space-y-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumb items={[{ label: 'Hubungi Kami' }]} />

          <div className="text-center space-y-3 max-w-3xl mx-auto pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
              <span>Jakarta SCBD Head Office</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
              Jadwalkan <span className="text-[#D4AF37]">Konsultasi Perizinan</span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Tim Konsultan Senior kami siap melayani diskusi regulasi pertambangan Anda di kantor SCBD Jakarta atau secara online via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 rounded-3xl bg-[#111111] border border-[#262626] p-8 space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white border-b border-neutral-800 pb-4 font-serif">
                Kantor Pusat Enterprise
              </h3>

              <div className="space-y-4 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Alamat HQ SCBD:</strong>
                    <span>{COMPANY_INFO.address.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <strong className="text-white block mb-0.5">Kontak Person / WhatsApp:</strong>
                    <span className="text-white font-semibold">{COMPANY_INFO.contactPerson} ({COMPANY_INFO.phone})</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <strong className="text-white block mb-0.5">Email Resmi:</strong>
                    <span>{COMPANY_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <strong className="text-white block mb-0.5">Jam Kerja:</strong>
                    <span>{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => openWhatsApp({ sourcePage: 'Contact Page Direct' })}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#e5c158] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Konsultasi Langsung via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Direct Form */}
            <div className="lg:col-span-7 rounded-3xl bg-[#111111] border border-[#262626] p-8 space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white border-b border-neutral-800 pb-4 font-serif">
                Formulir Permohonan Advis Legalitas
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                  <h4 className="text-lg font-bold text-white">Pesan Anda Berhasil Terkirim</h4>
                  <p className="text-xs text-neutral-400">
                    Sistem mengarahkan Anda ke WhatsApp Advisor Nusa Minerba.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">Nama Lengkap *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Ir. Budi Santoso"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#161616] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">Nama Perusahaan / Konsesi *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Contoh: PT Kalimantan Coal Resources"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#161616] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">Alamat Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="budi@kalimantan-coal.co.id"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#161616] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">Nomor Telepon / WA *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="081234567890"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#161616] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-300">Jenis Perizinan Pertambangan *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#161616] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Persetujuan RKAB 3 Tahunan ESDM">Persetujuan RKAB 3 Tahunan ESDM</option>
                      <option value="IPP / PPKH Kawasan Hutan KLHK">IPP / PPKH Kawasan Hutan KLHK</option>
                      <option value="IUJP Kontraktor Pertambangan">IUJP Kontraktor Pertambangan</option>
                      <option value="Minerba One Map Integration">Minerba One Map Integration</option>
                      <option value="MVP Verifikasi Ekspor Batubara">MVP Verifikasi Ekspor Batubara</option>
                      <option value="Open MOMS Registration">Open MOMS Registration</option>
                      <option value="LKPM BKPM OSS RBA">LKPM BKPM OSS RBA</option>
                      <option value="ET Batubara Kemendag">ET Batubara Kemendag</option>
                      <option value="IUP Operasi Produksi">IUP Operasi Produksi</option>
                      <option value="IUP OPK Angkut Jual Trader">IUP OPK Angkut Jual Trader</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-300">Pesan / Diskusi Awal</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan lokasi konsesi, luas lahan, atau kendala regulasi Anda..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#161616] border border-[#2A2A2A] text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#e5c158] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-xl transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Formulir & Sambungkan ke WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
