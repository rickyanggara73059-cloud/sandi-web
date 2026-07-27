import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { ShieldAlert, Home, Search, MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO title="404 - Halaman Tidak Ditemukan | Nusa Minerba" />

      <div className="min-h-[70vh] bg-[#050505] text-white flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-[#111111] border border-[#262626] shadow-2xl">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-4xl font-extrabold font-serif text-[#D4AF37]">404</span>
            <h1 className="text-xl font-bold text-white">Halaman Tidak Ditemukan</h1>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Maaf, rute atau dokumen perizinan yang Anda tuju telah dipindahkan atau tidak tersedia.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#e5c158] text-black font-bold text-xs flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>

            <button
              onClick={() => openWhatsApp({ customMessage: 'Halo Tim Nusa Minerba, saya mencari perizinan di website tetapi masuk halaman 404.' })}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#161616] hover:bg-neutral-800 text-neutral-200 border border-[#2A2A2A] font-medium text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
              <span>Tanyakan via WA</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
