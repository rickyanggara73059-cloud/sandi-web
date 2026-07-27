import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle, Calculator, MessageSquare, AlertCircle } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

export const LicenseCalculator: React.FC = () => {
  const [commodity, setCommodity] = useState<string>('Batubara');
  const [stage, setStage] = useState<string>('Operasi Produksi');
  const [forestArea, setForestArea] = useState<boolean>(true);
  const [isExport, setIsExport] = useState<boolean>(true);

  const calculateRequiredLicenses = () => {
    const list: string[] = [];

    if (stage === 'Eksplorasi') {
      list.push('IUP Eksplorasi ESDM');
      if (forestArea) list.push('IPP / PPKH Eksplorasi KLHK');
      list.push('Integrasi Minerba One Map (MOMI)');
      list.push('LKPM BKPM Triwulanan');
    } else if (stage === 'Operasi Produksi') {
      list.push('IUP Operasi Produksi (IUP OP)');
      list.push('Persetujuan RKAB 3 Tahunan ESDM');
      if (forestArea) list.push('IPPKH / PPKH Operasi Produksi KLHK');
      list.push('Registrasi & Pelaporan MOMS Harian');
      list.push('Dokumen Lingkungan (AMDAL / UKL-UPL)');
      if (isExport) {
        list.push('ET Batubara / ET Mineral Kemendag');
        list.push('MVP Verifikasi Ekspor & SIMBARA Bea Cukai');
      }
    } else if (stage === 'Trader / Jual Beli') {
      list.push('IUP OPK Pengangkutan dan Penjualan');
      list.push('Akun e-PNBP untuk SKAB/LBH');
      if (isExport) list.push('Persetujuan ET Kemendag & Verifikasi MVP');
    } else if (stage === 'Kontraktor Jasa') {
      list.push('IUP Usaha Jasa Pertambangan (IUJP)');
      list.push('Pengangkatan PJO POP/POM/POU');
      list.push('Dokumen SMKP Pertambangan');
    }

    return list;
  };

  const requiredLicenses = calculateRequiredLicenses();

  const handleSendReport = () => {
    const msg = `Halo Tim Consultant Mining, kami telah mencoba kalkulator perizinan tambang di website.\n\nDetail Perusahaan:\n- Komoditas: ${commodity}\n- Tahapan Ops: ${stage}\n- Di Kawasan Hutan: ${forestArea ? 'Ya (Butuh IPPKH)' : 'Tidak'}\n- Rencana Ekspor: ${isExport ? 'Ya' : 'Tidak'}\n\nDaftar Perizinan Direkomendasikan:\n${requiredLicenses.map(l => `• ${l}`).join('\n')}\n\nMohon jadwalkan sesi review kelayakan dengan konsultan senior. Terima kasih.`;
    openWhatsApp({ customMessage: msg });
  };

  return (
    <section id="license-calculator-section" className="py-20 bg-[#050505] border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-8 bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.25em] flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              INTERACTIVE TOOL
            </span>
            <span className="h-px w-8 bg-[#D4AF37]"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight font-sans">
            Kalkulator & Asesmen <span className="font-bold text-[#D4AF37]">Perizinan Tambang</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Cek daftar izin wajib, estimasi persyaratan, dan regulasi yang harus dipenuhi konsesi Anda dalam 30 detik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#0A0A0A] border border-white/10 rounded-xl p-6 sm:p-10 shadow-2xl">
          {/* Controls Form */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-base font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              <span>Langkah 1: Parameter Operasional Tambang</span>
            </h3>

            {/* Commodity selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-300">Jenis Komoditas Tambang:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Batubara', 'Nikel', 'Emas & Tembaga', 'Bauksit / Mineral'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCommodity(item)}
                    className={`p-3 rounded text-xs font-semibold uppercase tracking-wider border transition-all ${
                      commodity === item
                        ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold'
                        : 'bg-[#111111] text-neutral-300 border-white/10 hover:border-[#D4AF37]/40'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Operational Stage */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-300">Tahapan Skema Usaha:</label>
              <div className="grid grid-cols-2 gap-2">
                {['Eksplorasi', 'Operasi Produksi', 'Trader / Jual Beli', 'Kontraktor Jasa'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setStage(item)}
                    className={`p-3 rounded text-xs font-semibold border uppercase tracking-wider text-left transition-all ${
                      stage === item
                        ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold'
                        : 'bg-[#111111] text-neutral-300 border-white/10 hover:border-[#D4AF37]/40'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Forest area & Export switches */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded bg-[#111111] border border-white/10 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-white">Masuk Kawasan Hutan?</h5>
                  <p className="text-[10px] text-neutral-400 font-light">Hutan Produksi / Lindung</p>
                </div>
                <button
                  type="button"
                  onClick={() => setForestArea(!forestArea)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    forestArea ? 'bg-[#D4AF37]' : 'bg-neutral-800'
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full transition-transform ${
                      forestArea ? 'right-1 bg-black' : 'left-1 bg-neutral-400'
                    }`}
                  ></span>
                </button>
              </div>

              <div className="p-4 rounded bg-[#111111] border border-white/10 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-white">Rencana Ekspor?</h5>
                  <p className="text-[10px] text-neutral-400 font-light">Penjualan Luar Negeri</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExport(!isExport)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    isExport ? 'bg-[#D4AF37]' : 'bg-neutral-800'
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full transition-transform ${
                      isExport ? 'right-1 bg-black' : 'left-1 bg-neutral-400'
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>

          {/* Result Summary Box */}
          <div className="lg:col-span-5 bg-[#111111] border border-white/10 rounded-lg p-6 space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-widest">Hasil Rekomendasi Izin Wajib</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 font-bold uppercase tracking-wider">
                  {requiredLicenses.length} Lisensi
                </span>
              </div>

              <ul className="space-y-2.5">
                {requiredLicenses.map((permit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{permit}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 rounded bg-[#0A0A0A] border border-white/10 text-[11px] text-neutral-400 font-light flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Rekomendasi di atas berdasarkan UU No. 3/2020 & Peraturan ESDM terkini.</span>
              </div>
            </div>

            <button
              onClick={handleSendReport}
              className="w-full py-4 px-4 rounded bg-[#D4AF37] hover:bg-[#e5c158] text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl"
            >
              <MessageSquare className="w-4 h-4 fill-black text-black" />
              <span>Kirim Hasil Asesmen ke WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
