import { CompanyInfo, StatItem, Testimonial } from '../types';

export const COMPANY_INFO: CompanyInfo & { contactPerson?: string } = {
  name: 'S Consultant Mining Service',
  tagline: 'PENYEDIA LAYANAN JASA PENGURUSAN DOKUMEN LEGALITAS PERTAMBANGAN',
  headline: 'CONSULTANT MINING SERVICE',
  subheadline: 'Penyedia Layanan Jasa Pengurusan Dokumen Legalitas Pertambangan',
  contactPerson: 'Dimas Tri Prasetyo, S.T.',
  address: {
    street: 'The Energy Building, 28th Floor, SCBD Lot 11A',
    building: 'The Energy Building SCBD',
    district: 'Kebayoran Baru',
    city: 'Jakarta Selatan',
    province: 'DKI Jakarta',
    postalCode: '12190',
    fullAddress: 'The Energy Building, 28th Floor, SCBD Lot 11A, Jl. Jend. Sudirman No.Kav. 52-53, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190',
    mapCoordinates: {
      lat: -6.225501,
      lng: 106.808381
    },
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2755208639257!2d106.80580637583688!3d-6.227361660991959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1501e74f2cd%3A0x868b4279512316e6!2sThe%20Energy%20Building!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid'
  },
  phone: '+62 812-1945-1336',
  whatsAppNumber: '6282132588882',
  email: 'consulting@nusaconsultan.com',
  workingHours: 'Senin - Jumat: 08.00 - 18.00 WIB (Sabtu-Minggu Emergency On-Call)',
  socials: {
    linkedin: 'https://linkedin.com/company/nusa-consultan',
    instagram: 'https://instagram.com/nusaconsultan',
    youtube: 'https://youtube.com/c/NusaConsultan'
  }
};

export const COMPANY_STATS: StatItem[] = [
  {
    value: 250,
    prefix: '',
    suffix: '+',
    label: 'Persetujuan Perizinan',
    description: 'Dokumen Izin Resmi ESDM, KLHK, & BKPM Berhasil Diterbitkan'
  },
  {
    value: 100,
    prefix: '',
    suffix: '%',
    label: 'Kepatuhan Regulasi',
    description: 'Track Record Bebas Pembekuan / Suspension Account'
  },
  {
    value: 18,
    prefix: '',
    suffix: '+ Tahun',
    label: 'Pengalaman Konsultan',
    description: 'Eks-Petinggi & Evaluator Ahli Sektor Pertambangan Indonesia'
  },
  {
    value: 4.2,
    prefix: 'Rp ',
    suffix: ' Triliun',
    label: 'Nilai Proyek Didampingi',
    description: 'Total Valuasi Konsesi Pertambangan & Transaksi Ekspor Batubara/Mineral'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Bambang Soeprapto',
    company: 'PT East Kalimantan Coal Operations',
    role: 'Direktur Utama',
    sector: 'Pertambangan Batubara',
    quote: 'Nusa Minerba berhasil mempercepat approval RKAB 3 Tahunan kami di Ditjen Minerba dalam waktu 25 hari kerja tanpa kendala revisi berbelit. Profesionalisme setara Big 4 Advisory.',
    rating: 5,
    licenseAcquired: 'Persetujuan RKAB 3 Tahunan ESDM'
  },
  {
    id: '2',
    clientName: 'Hendrikus Van Berg',
    company: 'Nikel Pacific Resources Ltd',
    role: 'Chief Operating Officer',
    sector: 'Tambang & Smelter Nikel Sulawesi',
    quote: 'Pengurusan IPPKH/PPKH di Kawasan Hutan Lindung sangat rawan pembatalan. Tim Nusa Minerba melakukan audit spasial GIS presisi dan mendampingi verifikasi BPKH hingga SK KLHK terbit.',
    rating: 5,
    licenseAcquired: 'PPKH / IPPKH KLHK'
  },
  {
    id: '3',
    clientName: 'Ir. Irwan Kusuma, M.T.',
    company: 'PT Sumatra Mining Contractors',
    role: 'General Manager Mining Services',
    sector: 'Kontraktor Utama Tambang',
    quote: 'Proses penerbitan IUJP dan penyesuaian PJO POP/POM berjalan sangat transparan. Komunikasi via WhatsApp responsif 24/7 dan laporan kemajuan diupdate secara real-time.',
    rating: 5,
    licenseAcquired: 'IUJP Kontraktor Pertambangan'
  }
];
