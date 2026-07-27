/**
 * WhatsApp Lead Generation Utility Helper
 * Enterprise-grade URL formatting with pre-filled context-aware inquiry messages
 */

export const DEFAULT_WHATSAPP_NUMBER = '6281219451336'; // Format: country code without + or dashes

export interface WhatsAppOptions {
  serviceName?: string;
  customMessage?: string;
  sourcePage?: string;
  urgency?: 'Standard' | 'Urgent' | 'Emergency Audit';
  companyName?: string;
}

export function generateWhatsAppMessage(options: WhatsAppOptions = {}): string {
  const { serviceName, customMessage, sourcePage, urgency, companyName } = options;

  if (customMessage) {
    return customMessage;
  }

  let greeting = 'Halo Dimas Tri Prasetyo, S.T. (Consultant Mining Service),';

  if (serviceName) {
    let msg = `${greeting}\n\nSaya ingin berkonsultasi mengenai pengurusan **${serviceName}** untuk proyek pertambangan kami.`;
    if (companyName) {
      msg += `\nPerusahaan: ${companyName}`;
    }
    if (urgency) {
      msg += `\nTingkat Urgensi: ${urgency}`;
    }
    msg += `\n\nMohon info mengenai estimasi waktu, persyaratan, dan mekanisme pendampingan legalitas. Terima kasih.`;
    return msg;
  }

  if (sourcePage) {
    return `${greeting}\n\nSaya menghubungi melalui halaman **${sourcePage}** di website Nusa Minerba. Saya memerlukan informasi layanan konsultasi pertambangan & perizinan resmi.`;
  }

  return `${greeting}\n\nSaya tertarik dengan Layanan Konsultasi Perizinan & Regulasi Pertambangan. Mohon dapat dijadwalkan sesi konsultasi gratis dengan Konsultan Senior Nusa Minerba. Terima kasih.`;
}

export function getWhatsAppUrl(options: WhatsAppOptions = {}, phoneNumber: string = DEFAULT_WHATSAPP_NUMBER): string {
  const text = generateWhatsAppMessage(options);
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

export function openWhatsApp(options: WhatsAppOptions = {}, phoneNumber: string = DEFAULT_WHATSAPP_NUMBER): void {
  const url = getWhatsAppUrl(options, phoneNumber);
  window.open(url, '_blank', 'noopener,noreferrer');
}
