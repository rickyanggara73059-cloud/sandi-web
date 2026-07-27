import React, { useEffect, useState } from 'react';
import { Shield, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
  const consent = localStorage.getItem('consultant_mining_cookie_consent');

  if (!consent) {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }
}, []);

  const handleAccept = () => {
    localStorage.setItem('consultant_mining_cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div id="cookie-consent-banner" className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-[#111111]/95 border-t border-[#2A2A2A] backdrop-blur-xl shadow-2xl animate-fade-in-up">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3 max-w-3xl">
          <Shield className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
          <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
            Situs ini menggunakan cookie analitik dan teknologi keamanan untuk mengoptimalkan pengalaman konsultasi perizinan pertambangan Anda. Seluruh pertukaran informasi dilindungi sesuai Undang-Undang Perlindungan Data Pribadi (UU PDP).
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#e5c158] text-black font-semibold text-xs transition-colors"
          >
            Setujui & Lanjutkan
          </button>
          <button
            onClick={() => setShow(false)}
            className="p-2 text-neutral-400 hover:text-white"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
