import React from 'react';
import { MapPin, X, Navigation, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl rounded-2xl bg-[#111111] border border-[#2A2A2A] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A] bg-[#161616]">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="text-base font-semibold text-white">Kantor Pusat Consultant Mining Consulting</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-neutral-400 hover:text-white bg-neutral-800/50">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Google Maps iFrame */}
          <div className="lg:col-span-2 h-72 lg:h-[400px] w-full bg-neutral-900 relative">
            <iframe
              title="Jakarta HQ Location Map"
              src={COMPANY_INFO.address.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale contrast-125 brightness-90"
            ></iframe>
          </div>

          {/* Location info panel */}
          <div className="p-6 bg-[#111111] space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#D4AF37]">Alamat Resmi HQ</span>
                <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                  {COMPANY_INFO.address.fullAddress}
                </p>
              </div>

              <div className="space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>{COMPANY_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>{COMPANY_INFO.email}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800 text-[11px] text-neutral-400">
                <strong className="text-white block mb-1">Jam Operasional:</strong>
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address.fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#e5c158] text-black font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <Navigation className="w-4 h-4" />
              <span>Buka Petunjuk Arah di Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
