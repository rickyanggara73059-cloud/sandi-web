import { Service } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'ipp',
    slug: 'ipp',
    title: 'IPP (Izin Pengangkutan dan Penjualan)',
    shortTitle: 'IPP Batubara & Mineral',
    category: 'Licensing',
    shortDescription: 'Izin Pengangkutan dan Penjualan (IPP) Batubara, Mineral, Mineral Bukan Logam & Batuan.',
    fullDescription: 'Izin Pengangkutan dan Penjualan (IPP) adalah perizinan resmi yang diberikan kepada badan usaha untuk membeli, mengangkut, dan menjual komoditas tambang Batubara, Mineral, Mineral Bukan Logam, serta Batuan dari pemegang IUP/IUPK secara sah.',
    iconName: 'Truck',
    estimatedTime: '30 Hari Kerja',
    authority: 'Kementerian ESDM & BKPM (OSS RBA)',
    legalBasis: [
      'UU No. 3 Tahun 2020 tentang Pertambangan Mineral dan Batubara',
      'PP No. 96 Tahun 2021 tentang Pelaksanaan Kegiatan Usaha Pertambangan',
      'Permen ESDM No. 7 Tahun 2020 tentang Perizinan Berusaha Sektor Pertambangan'
    ],
    keyBenefits: [
      'Legalitas resmi pengangkutan dan komersialisasi komoditas tambang',
      'Mencegah penindakan hukum atas tuduhan pengangkutan/penjualan ilegal',
      'Terhubung dengan sistem e-PNBP dan dokumen angkut resmi (SKAB)'
    ],
    requirements: {
      administrative: [
        'Surat Permohonan Resmi Direksi Perusahaan',
        'Akta Pendirian Perusahaan & NIB OSS RBA dengan KBLI Sesuai',
        'NPWP Perusahaan & Bukti Pemenuhan Kewajiban Pajak'
      ],
      technical: [
        'MOU / Perjanjian Kerjasama Pasokan dengan Pemegang IUP OP Aktif',
        'Daftar Armada Transportasi & Fasilitas Pelabuhan / Stockpile'
      ],
      environmental: [
        'Dokumen Lingkungan / UKL-UPL Pelabuhan & Lokasi Muat'
      ],
      financial: [
        'Laporan Keuangan Perusahaan & Rekening Bank Resmi'
      ]
    },
    workflowSteps: [
      { step: 1, title: 'Evaluasi Dokumen Mitra Tambang (IUP OP)', description: 'Verifikasi status keaktifan IUP Mitra dan persetujuan RKAB.', duration: '3 Hari Kerja' },
      { step: 2, title: 'Penyusunan Berkas Administrasi IPP', description: 'Penyusunan dokumen teknis angkut-jual dan rencana pemasaran.', duration: '5 Hari Kerja' },
      { step: 3, title: 'Submit via OSS RBA & Portal e-Licensing', description: 'Pengajuan berkas digital ke kementerian terkait.', duration: '10 Hari Kerja' },
      { step: 4, title: 'Verifikasi & Evaluasi Ditjen Minerba', description: 'Pendampingan dalam forum klarifikasi dan verifikasi teknis.', duration: '8 Hari Kerja' },
      { step: 5, title: 'Penerbitan SK IPP Resmi', description: 'Penerbitan Surat Keputusan IPP aktif di portal pemerintah.', duration: '4 Hari Kerja' }
    ],
    faqs: [
      {
        question: 'Apakah IPP berlaku untuk semua jenis komoditas?',
        answer: 'Izin IPP mencakup Batubara, Mineral Logam, Mineral Bukan Logam, dan Batuan sesuai permohonan yang disetujui.'
      }
    ],
    whatsAppMessage: 'Halo Dimas Tri Prasetyo, S.T., saya ingin berkonsultasi mengenai Jasa Pengurusan IPP (Izin Pengangkutan dan Penjualan).'
  },
  {
    id: 'iujp',
    slug: 'iujp',
    title: 'IUJP (Izin Usaha Jasa Pertambangan)',
    shortTitle: 'IUJP ESDM',
    category: 'Licensing',
    shortDescription: 'Izin Usaha Jasa Pertambangan (IUJP) Batubara, Mineral, Mineral Bukan Logam & Batuan.',
    fullDescription: 'Izin Usaha Jasa Pertambangan (IUJP) adalah izin resmi yang diberikan kepada perusahaan kontraktor, penyedia alat berat, dan konsultan spesialis untuk melaksanakan kegiatan usaha jasa pertambangan di wilayah IUP/IUPK seluruh Indonesia.',
    iconName: 'Briefcase',
    estimatedTime: '45 Hari Kerja',
    authority: 'Kementerian ESDM & BKPM (OSS RBA)',
    legalBasis: [
      'UU No. 3 Tahun 2020 tentang Perubahan Atas UU No. 4/2009 Pertambangan Minerba',
      'Permen ESDM No. 7 Tahun 2020 tentang Tata Cara Pemberian Wilayah & Perizinan',
      'Kepmen ESDM No. 1827 K/30/MEM/2018 tentang Kaidah Teknik Pertambangan'
    ],
    keyBenefits: [
      'Legalitas resmi menjadi Kontraktor Utama / Sub-kontraktor di konsesi IUP',
      'Dapat terdaftar di Portal Minerba One & e-RKAB Badan Usaha Pertambangan',
      'Kesesuaian kualifikasi subbidang jasa pertambangan KBLI ESDM'
    ],
    requirements: {
      administrative: [
        'Akta Pendirian Perusahaan dengan KBLI Jasa Pertambangan (09900/09100)',
        'NIB OSS RBA & NPWP Perusahaan',
        'Penunjukan Penanggung Jawab Operasional (PJO) Bersertifikat POP/POM/POU'
      ],
      technical: [
        'Daftar Peralatan Utama & Daftar Tenaga Ahli Teknik Pertambangan',
        'Dokumen Sistem Manajemen Keselamatan Pertambangan (SMKP)'
      ],
      environmental: [
        'SOP Pengelolaan Lingkungan Kerja & Keselamatan K3LH'
      ],
      financial: [
        'Laporan Keuangan Diaudit oleh Akuntan Publik 2 Tahun Terakhir'
      ]
    },
    workflowSteps: [
      { step: 1, title: 'Review KBLI & Sertifikat PJO', description: 'Pemeriksaan Akta, NIB, dan kualifikasi sertifikat PJO.', duration: '5 Hari Kerja' },
      { step: 2, title: 'Penyusunan Berkas & Matriks Subbidang', description: 'Penyusunan kelengkapan dokumen teknis dan SMKP.', duration: '10 Hari Kerja' },
      { step: 3, title: 'Pengajuan via OSS RBA & ESDM', description: 'Input data perizinan berusaha jasa pertambangan.', duration: '15 Hari Kerja' },
      { step: 4, title: 'Evaluasi Komprehensif Ditjen Minerba', description: 'Respon klarifikasi dan pendampingan verifikasi teknis.', duration: '10 Hari Kerja' },
      { step: 5, title: 'Penerbitan SK IUJP Resmi', description: 'Surat Keputusan IUJP diterbitkan dan aktif secara nasional.', duration: '5 Hari Kerja' }
    ],
    faqs: [
      {
        question: 'Berapa lama masa berlaku IUJP?',
        answer: 'IUJP berlaku selama 5 (lima) tahun dan dapat diperpanjang secara berkala.'
      }
    ],
    whatsAppMessage: 'Halo Dimas Tri Prasetyo, S.T., kami butuh jasa pengurusan IUJP (Izin Usaha Jasa Pertambangan).'
  },
  {
    id: 'minerba-one',
    slug: 'minerba-one',
    title: 'Jasa Pembuatan Akun MinerbaOne',
    shortTitle: 'Akun MinerbaOne',
    category: 'Operations',
    shortDescription: 'Jasa Pembuatan, Registrasi, dan Aktivasi Akun Portal MinerbaOne ESDM.',
    fullDescription: 'Layanan pendaftaran, verifikasi, dan pemetaan akun MinerbaOne ESDM untuk memastikan koordinat konsesi WIUP dan data legalitas perusahaan terintegrasi secara valid di portal terpadu Kementerian ESDM.',
    iconName: 'MapPin',
    estimatedTime: '10 Hari Kerja',
    authority: 'Direktorat Teknik dan Lingkungan Minerba - ESDM',
    legalBasis: [
      'Kepmen ESDM No. 1827 K/30/MEM/2018 tentang Peta Tematik Pertambangan',
      'Permen ESDM No. 7 Tahun 2020 tentang Data Pertambangan Nasional'
    ],
    keyBenefits: [
      'Data lokasi & WIUP terintegrasi dengan Peta Nasional Kementerian ESDM',
      'Mencegah tumpang tindih (overlapping) lahan konsesi tambang',
      'Syarat mutlak validasi sistem e-RKAB dan SIMBARA'
    ],
    requirements: {
      administrative: [
        'SK IUP / IUPK / IPKH Asli dan Lampiran Peta Koordinat',
        'Akta Perusahaan dan NIB OSS RBA Aktif',
        'Surat Kuasa Penunjukan Administrator MinerbaOne'
      ],
      technical: [
        'File Peta Boundary WIUP Format Shapefile (.SHP) Datum WGS84 UTM Zone',
        'Laporan Hasil Pengukuran Patok Batas Wilayah'
      ],
      environmental: [
        'Peta Tutupan Lahan dan Peta Zona Kendala Lingkungan'
      ],
      financial: [
        'Bukti Pelunasan Iuran Tetap Wilayah Pertambangan'
      ]
    },
    workflowSteps: [
      { step: 1, title: 'Validasi File GIS Shapefile (.SHP)', description: 'Pemeriksaan presisi koordinat geodetik WGS84.', duration: '2 Hari Kerja' },
      { step: 2, title: 'Analisis Overlap Spasial', description: 'Simulasi overlay spasial di database MinerbaOne.', duration: '2 Hari Kerja' },
      { step: 3, title: 'Input Data Portal MinerbaOne', description: 'Pendaftaran dan registrasi akun portal resmi.', duration: '3 Hari Kerja' },
      { step: 4, title: 'Verifikasi & Aktivasi Akun', description: 'Pendampingan verifikasi tim spasial Ditjen Minerba hingga aktif.', duration: '3 Hari Kerja' }
    ],
    faqs: [
      {
        question: 'Apakah akun MinerbaOne wajib dimiliki setiap perusahaan tambang?',
        answer: 'Ya, seluruh pemegang IUP/IUPK wajib memiliki akun MinerbaOne untuk integrasi data spasial dan pelaporan.'
      }
    ],
    whatsAppMessage: 'Halo Dimas Tri Prasetyo, S.T., kami butuh bantuan Jasa Pembuatan Akun MinerbaOne ESDM.'
  },
  {
    id: 'mvp',
    slug: 'mvp',
    title: 'Jasa Pembuatan Akun MVP (Batubara)',
    shortTitle: 'Akun MVP Batubara',
    category: 'Export & Trade',
    shortDescription: 'Jasa Pembuatan & Registrasi Akun MVP (Minerba Verification System Batubara).',
    fullDescription: 'Layanan registrasi dan konfigurasi akun Minerba Verification System (MVP Batubara) untuk memfasilitasi verifikasi Laporan Hasil Pengujian (LHP), Laporan Surveyor (LS), e-PNBP Royalti, dan ekspor batubara.',
    iconName: 'ShieldCheck',
    estimatedTime: '10 Hari Kerja',
    authority: 'Ditjen Minerba ESDM & Surveyor Independen',
    legalBasis: [
      'Permen Perdagangan No. 23 Tahun 2023 tentang Ketentuan Ekspor Batubara',
      'Kepmen ESDM No. 227 K/30/MEM/2021 tentang Verifikasi Penjualan Batubara'
    ],
    keyBenefits: [
      'Kelancaran rilis Laporan Surveyor (LS) Ekspor tanpa kendala blocking',
      'Otomatisasi perhitungan Royalti e-PNBP SIMBARA',
      'Mencegah penolakan Bea Cukai saat pemuatan tongkang/vessel'
    ],
    requirements: {
      administrative: [
        'Persetujuan RKAB Aktif & Kuota Penjualan Terdaftar',
        'Persetujuan ET Batubara Kemendag',
        'Kontrak Penjualan / Sales Purchase Agreement (SPA)'
      ],
      technical: [
        'Data Spesifikasi Kualitas Produk Batubara',
        'Penunjukan Surveyor Independen Terdaftar'
      ],
      environmental: [
        'Izin Pelabuhan / Tersus / TUKS yang Sah'
      ],
      financial: [
        'Bukti Setor Royalti e-PNBP SIMBARA'
      ]
    },
    workflowSteps: [
      { step: 1, title: 'Sinkronisasi Akun MVP & RKAB', description: 'Pengujian konektivitas kuota RKAB di portal MVP.', duration: '2 Hari Kerja' },
      { step: 2, title: 'Input Data Tongkang & LHP', description: 'Pendampingan registrasi kargo batubara.', duration: '3 Hari Kerja' },
      { step: 3, title: 'Verifikasi Billing Royalti', description: 'Validasi Harga Patokan Ekspor dan e-PNBP.', duration: '3 Hari Kerja' },
      { step: 4, title: 'Aktivasi MVP & Rilis Verifikasi', description: 'Aktivasi akun MVP dan pengesahan Laporan Surveyor.', duration: '2 Hari Kerja' }
    ],
    faqs: [
      {
        question: 'Apakah akun MVP harus diperbarui setiap tahun?',
        answer: 'Akun terhubung langsung dengan kuota RKAB berjalan dan dapat dipergunakan secara berkelanjutan.'
      }
    ],
    whatsAppMessage: 'Halo Dimas Tri Prasetyo, S.T., kami memerlukan Jasa Pembuatan Akun MVP (Batubara).'
  },
  {
    id: 'open-moms',
    slug: 'open-moms',
    title: 'Jasa Pembuatan Akun Open Moms',
    shortTitle: 'Akun Open MOMS',
    category: 'Operations',
    shortDescription: 'Jasa Pembuatan Akun Open MOMS (Mineral, Batuan, Mineral Bukan Logam).',
    fullDescription: 'Layanan pendaftaran dan konfigurasi portal Open MOMS (Minerba Online Monitoring System) untuk pemantauan produksi harian/bulanan, pengelolaan stok stockpile, dan pelaporan berkala komoditas Mineral, Batuan, dan Mineral Bukan Logam.',
    iconName: 'Activity',
    estimatedTime: '10 Hari Kerja',
    authority: 'Direktorat Pembinaan Program Minerba - ESDM',
    legalBasis: [
      'Permen ESDM No. 7 Tahun 2020 tentang Tata Cara Pelaporan Usaha Pertambangan',
      'Instruksi Dirjen Minerba tentang Digitalisasi Pengawasan Produksi'
    ],
    keyBenefits: [
      'Akses resmi pelaporan data produksi harian dan stok stockpile',
      'Menghindari pembekuan akun e-RKAB akibat kelalaian laporan harian',
      'Integrasi data penjualan lokal dan ekspor secara akurat'
    ],
    requirements: {
      administrative: [
        'SK IUP OP / IUPK Aktif Terdaftar di MODI ESDM',
        'Surat Penunjukan Operator MOMS Resmi',
        'KTP Operator & Email Perusahaan'
      ],
      technical: [
        'Data Stockpile & Lokasi Timbangan (Weighbridge)',
        'Data Ritase Harian & Laporan Produksi'
      ],
      environmental: [
        'Laporan Lingkungan Pertambangan Berkala'
      ],
      financial: [
        'Rekapitulasi Penjualan Harian'
      ]
    },
    workflowSteps: [
      { step: 1, title: 'Audit Data MODI & Surat Penunjukan', description: 'Pemeriksaan status IUP di MODI.', duration: '2 Hari Kerja' },
      { step: 2, title: 'Permohonan Akun Open MOMS', description: 'Pengajuan pembuatan credential ke Ditjen Minerba.', duration: '3 Hari Kerja' },
      { step: 3, title: 'Set-up Modul Timbangan & Stockpile', description: 'Konfigurasi lokasi tambang dan titik muat.', duration: '3 Hari Kerja' },
      { step: 4, title: 'Aktivasi Akun & Pendampingan', description: 'Aktivasi akun Open MOMS dan pelatihan operator.', duration: '2 Hari Kerja' }
    ],
    faqs: [
      {
        question: 'Komoditas apa saja yang wajib menggunakan Open MOMS?',
        answer: 'Komoditas Mineral Logam, Mineral Bukan Logam, dan Batuan sesuai regulasi Ditjen Minerba ESDM.'
      }
    ],
    whatsAppMessage: 'Halo Dimas Tri Prasetyo, S.T., kami butuh Jasa Pembuatan Akun Open MOMS (Mineral, Batuan, Mineral Bukan Logam).'
  },
  {
    id: 'laporan-triwulan',
    slug: 'laporan-triwulan',
    title: 'Laporan Triwulan IPP dan IUJP',
    shortTitle: 'Laporan Triwulan IPP & IUJP',
    category: 'Reporting',
    shortDescription: 'Penyusunan & Pelaporan Triwulan Berkas Perizinan IPP dan IUJP.',
    fullDescription: 'Laporan berkala triwulanan wajib bagi pemegang IPP (Izin Pengangkutan dan Penjualan) serta IUJP (Izin Usaha Jasa Pertambangan) untuk menjaga kepatuhan legalitas dan mencegah sanksi pembekuan izin.',
    iconName: 'FileCheck',
    estimatedTime: '3 Hari Kerja',
    authority: 'Kementerian ESDM / Pemerintah Daerah',
    legalBasis: [
      'Permen ESDM No. 7 Tahun 2020 tentang Tata Cara Pelaporan Perizinan',
      'Kepmen ESDM No. 1827 K/30/MEM/2018'
    ],
    keyBenefits: [
      'Kepatuhan legalitas berkala terjamin 100%',
      'Mencegah pembekuan (suspen) akun perizinan di portal pemerintah',
      'Proses cepat dan didampingi tim ahli pelaporan'
    ],
    requirements: {
      administrative: [
        'SK IPP / IUJP Aktif',
        'Data Kegiatan Operasional Triwulan Berjalan'
      ],
      technical: [
        'Laporan Volume Pengangkutan / Realisasi Pekerjaan Jasa'
      ],
      environmental: [
        'Laporan Pelaksanaan K3LH & Keselamatan Operasi'
      ],
      financial: [
        'Rekapitulasi Nilai Transaksi / Kontrak Pekerjaan'
      ]
    },
    workflowSteps: [
      { step: 1, title: 'Konsolidasi Data Operasional', description: 'Pengumpulan data realisasi volume dan kontrak triwulanan.', duration: '1 Hari Kerja' },
      { step: 2, title: 'Penyusunan Format Laporan Resmi', description: 'Penyusunan matriks laporan sesuai regulasi ESDM.', duration: '1 Hari Kerja' },
      { step: 3, title: 'Submit & Penerbitan Bukti Lapors', description: 'Penyampaian resmi dan penerbitan Bukti Tanda Terima Laporan.', duration: '1 Hari Kerja' }
    ],
    faqs: [
      {
        question: 'Kapan batas penyampaian Laporan Triwulan IPP & IUJP?',
        answer: 'Paling lambat 30 hari setelah berakhirnya tiap triwulan berjalan.'
      }
    ],
    whatsAppMessage: 'Halo Dimas Tri Prasetyo, S.T., kami ingin menggunakan jasa penyusunan Laporan Triwulan IPP dan IUJP.'
  },
  {
    id: 'lkpm',
    slug: 'lkpm',
    title: 'Laporan LKPM',
    shortTitle: 'Laporan LKPM BKPM',
    category: 'Reporting',
    shortDescription: 'Laporan Kegiatan Penanaman Modal (LKPM) BKPM / OSS RBA.',
    fullDescription: 'Pendampingan penyusunan dan penginputan Laporan Kegiatan Penanaman Modal (LKPM) berkala via portal OSS RBA Kementerian Investasi / BKPM untuk menjaga skor kepatuhan perusahaan pertambangan.',
    iconName: 'BarChart3',
    estimatedTime: '3 Hari Kerja',
    authority: 'Kementerian Investasi / BKPM',
    legalBasis: [
      'Peraturan BKPM No. 5 Tahun 2021 tentang Pengawasan Perizinan Berusaha',
      'UU No. 25 Tahun 2007 tentang Penanaman Modal'
    ],
    keyBenefits: [
      'Menjaga skor kepatuhan di portal OSS RBA tetap HIJAU',
      'Mencegah sanksi peringatan atau pembekuan NIB oleh BKPM',
      'Fasilitasi penyelesaian kendala investasi dari Satgas BKPM'
    ],
    requirements: {
      administrative: [
        'Hak Akses Akun OSS RBA Perusahaan (Username & Password)',
        'NIB & Perizinan Berusaha Pertambangan'
      ],
      technical: [
        'Data Realisasi Pembelian Peralatan & Tenaga Kerja'
      ],
      environmental: [
        'Data CSR / Tanggung Jawab Sosial dan Lingkungan'
      ],
      financial: [
        'Data Realisasi Modal Tetap & Modal Kerja Operasional'
      ]
    },
    workflowSteps: [
      { step: 1, title: 'Konsolidasi Data Keuangan', description: 'Pengumpulan bukti realisasi modal periode berjalan.', duration: '1 Hari Kerja' },
      { step: 2, title: 'Input Data LKPM di OSS RBA', description: 'Penyusunan narasi realisasi dan identifikasi hambatan.', duration: '1 Hari Kerja' },
      { step: 3, title: 'Rilis Tanda Terima LKPM', description: 'Verifikasi BKPM dan terbitnya Tanda Terima LKPM Disetujui.', duration: '1 Hari Kerja' }
    ],
    faqs: [
      {
        question: 'Berapa kali LKPM wajib dilaporkan dalam setahun?',
        answer: 'Melalui portal OSS RBA, LKPM dilaporkan setiap triwulan (4 kali dalam setahun).'
      }
    ],
    whatsAppMessage: 'Halo Dimas Tri Prasetyo, S.T., kami butuh jasa pengurusan dan penyusunan Laporan LKPM BKPM.'
  },
  {
    id: 'et-batubara',
    slug: 'et-batubara',
    title: 'Jasa Pengurusan Eksport Terbatas (ET) Batubara',
    shortTitle: 'ET Batubara Kemendag',
    category: 'Export & Trade',
    shortDescription: 'Jasa Pengurusan Eksport Terbatas (ET) Batubara dari Kementerian Perdagangan.',
    fullDescription: 'Pengurusan lisensi dan penetapan Eksportir Terdaftar (ET) Batubara dari Kementerian Perdagangan R.I. bagi pemegang IUP OP, IUPK, atau IUP OPK agar dapat melaksanakan ekspor batubara secara legal.',
    iconName: 'Ship',
    estimatedTime: '14 Hari Kerja',
    authority: 'Kementerian Perdagangan R.I. (Ditjen Daglu)',
    legalBasis: [
      'Permendag No. 23 Tahun 2023 tentang Kebijakan dan Pengaturan Ekspor',
      'UU No. 7 Tahun 2014 tentang Perdagangan'
    ],
    keyBenefits: [
      'Lisensi legal penuh untuk ekspor batubara ke pasar internasional',
      'Terintegrasi dengan sistem INATRADE dan Bea Cukai (CEISA)',
      'Memenuhi syarat penerbitan PEB (Pemberitahuan Ekspor Barang)'
    ],
    requirements: {
      administrative: [
        'NIB Aktif dengan Akses Kepabeanan Ekspor',
        'SK IUP OP / IUPK / IUP OPK Pengangkutan & Penjualan',
        'Persetujuan RKAB 3 Tahunan ESDM'
      ],
      technical: [
        'Bukti Penguasaan Stockpile / Pelabuhan Muat (TUKS/Tersus)',
        'Kontrak Kerjasama Penjualan Ekspor (SPA)'
      ],
      environmental: [
        'Dokumen Lingkungan / AMDAL yang Sah'
      ],
      financial: [
        'Rekomendasi Pemenuhan DMO ESDM & Pelunasan Pajak'
      ]
    },
    workflowSteps: [
      { step: 1, title: 'Verifikasi Rekomendasi DMO ESDM', description: 'Pemeriksaan status DMO dari Ditjen Minerba ESDM.', duration: '3 Hari Kerja' },
      { step: 2, title: 'Penyusunan Berkas INATRADE', description: 'Pengunggahan dokumen legalitas di portal Kemendag.', duration: '3 Hari Kerja' },
      { step: 3, title: 'Evaluasi Kementerian Perdagangan', description: 'Verifikasi kecocokan data IUP, RKAB, dan DMO.', duration: '6 Hari Kerja' },
      { step: 4, title: 'Penerbitan SK ET Batubara', description: 'Surat Keputusan ET terbit dan terintegrasi dengan Bea Cukai.', duration: '2 Hari Kerja' }
    ],
    faqs: [
      {
        question: 'Apakah pemenuhan DMO wajib untuk pengurusan ET Batubara?',
        answer: 'Ya, pemenuhan kewajiban DMO merupakan syarat utama penerbitan perizinan ekspor.'
      }
    ],
    whatsAppMessage: 'Halo Dimas Tri Prasetyo, S.T., kami butuh Jasa Pengurusan Eksport Terbatas (ET) Batubara.'
  },
  {
    id: 'rkab',
    slug: 'rkab',
    title: 'Jasa Pembuatan RKAB Batubara dan Mineral',
    shortTitle: 'RKAB Batubara & Mineral',
    category: 'Reporting',
    shortDescription: 'Jasa Pembuatan RKAB Batubara dan Mineral (Penyusunan & Persetujuan ESDM).',
    fullDescription: 'Penyusunan komprehensif, asistensi, dan pengawalan persetujuan dokumen Rencana Kerja dan Anggaran Biaya (RKAB) Batubara dan Mineral ke Kementerian ESDM untuk penetapan kuota produksi resmi.',
    iconName: 'FileCheck',
    estimatedTime: '14 Hari Kerja',
    authority: 'Kementerian ESDM (Ditjen Minerba)',
    legalBasis: [
      'Permen ESDM No. 10 Tahun 2023 tentang Tata Cara Penyusunan, Penyampaian, dan Persetujuan RKAB',
      'Kepmen ESDM No. 373.K/MB.01/MEM.B/2023 tentang Pedoman Penyusunan RKAB',
      'UU No. 3 Tahun 2020 tentang Pertambangan Minerba'
    ],
    keyBenefits: [
      'Memperoleh kuota produksi resmi yang diakui Ditjen Minerba',
      'Terhubung dengan SIMBARA, e-PNBP, dan Verifikasi Ekspor MVP',
      'Menghindari sanksi penghentian sementara kegiatan operasi'
    ],
    requirements: {
      administrative: [
        'Surat Pengantar Direksi & Profil Konsesi Tambang IUP/IUPK',
        'Status Kebersihan IUP (Clean and Clear / Terdaftar di MODI)',
        'Dokumen Lingkungan yang Masih Berlaku'
      ],
      technical: [
        'Laporan Hasil Eksplorasi & Neraca Cadangan (KORMI/JORC)',
        'Peta Geologi & Sekuens Penambangan',
        'Rencana Penambangan, Pengolahan, dan Pemurnian'
      ],
      environmental: [
        'Matriks Rencana Reklamasi & Rencana Pascatambang (RPT)',
        'Alokasi Biaya Jaminan Reklamasi (Jamrek)'
      ],
      financial: [
        'Laporan Keuangan Audit Akuntan Publik',
        'Bukti Pelunasan Iuran Tetap & Royalti PNBP'
      ]
    },
    workflowSteps: [
      { step: 1, title: 'Audit Data Teknis & Neraca Cadangan', description: 'Pengumpulan data geologi dan cadangan awal.', duration: '3 Hari Kerja' },
      { step: 2, title: 'Penyusunan Matriks RKAB ESDM', description: 'Penyusunan matriks teknis, K3, lingkungan, dan keuangan.', duration: '4 Hari Kerja' },
      { step: 3, title: 'Submit e-RKAB & Asistensi Evaluator', description: 'Pengunggahan berkas dan pendampingan forum evaluasi.', duration: '5 Hari Kerja' },
      { step: 4, title: 'Penerbitan Persetujuan RKAB', description: 'Penetapan Surat Persetujuan RKAB Resmi dari Ditjen Minerba.', duration: '2 Hari Kerja' }
    ],
    faqs: [
      {
        question: 'Berapa lama masa berlaku persetujuan RKAB?',
        answer: 'Sesuai regulasi terbaru ESDM, RKAB berlaku untuk jangka waktu 3 (tiga) tahunan dengan evaluasi berkala.'
      }
    ],
    whatsAppMessage: 'Halo Dimas Tri Prasetyo, S.T., kami membutuhkan Jasa Pembuatan RKAB Batubara dan Mineral.'
  },
  {
    id: 'iup-op-opk',
    slug: 'iup-op-opk',
    title: 'Jasa Pengurusan IUP OP - IUP OPK',
    shortTitle: 'IUP OP - IUP OPK',
    category: 'Licensing',
    shortDescription: 'Jasa Pengurusan IUP OP (Izin Usaha Pertambangan Operasi Produksi) - IUP OPK.',
    fullDescription: 'Pendampingan dan pengurusan Izin Usaha Pertambangan Operasi Produksi (IUP OP) serta IUP OPK Khusus Pengangkutan dan Penjualan secara lengkap dari evaluasi kelengkapan berkas hingga Surat Keputusan diterbitkan.',
    iconName: 'Pickaxe',
    estimatedTime: '6 Bulan s/d 12 Bulan (tergantung kelengkapan dokumen)',
    authority: 'Kementerian ESDM & BKPM (OSS RBA)',
    legalBasis: [
      'UU No. 3 Tahun 2020 tentang Pertambangan Mineral dan Batubara',
      'PP No. 96 Tahun 2021 tentang Pelaksanaan Kegiatan Usaha Pertambangan Minerba'
    ],
    keyBenefits: [
      'Hak eksklusif melakukan kegiatan penambangan / komersialisasi mineral & batubara',
      'Masa berlaku izin panjang dan dapat diperpanjang secara berkala',
      'Peningkatan valuasi aset perusahaan pertambangan secara signifikan'
    ],
    requirements: {
      administrative: [
        'SK IUP Eksplorasi & Sertifikat Clean and Clear (CnC)',
        'NIB OSS RBA & Akta Perusahaan Pertambangan',
        'Susunan Direksi & Pemegang Saham Terverifikasi'
      ],
      technical: [
        'Laporan Eksplorasi Rinci & Sumberdaya/Cadangan (JORC/KORMI)',
        'Laporan Studi Kelayakan (Feasibility Study / FS) Disetujui ESDM'
      ],
      environmental: [
        'Dokumen AMDAL / SKKL KLHK',
        'Rencana Reklamasi & Rencana Pascatambang (RPT)'
      ],
      financial: [
        'Laporan Keuangan Audit Akuntan Publik 3 Tahun Terakhir',
        'Jaminan Reklamasi dan Pascatambang'
      ]
    },
    workflowSteps: [
      { step: 1, title: 'Evaluasi Dokumen Eksplorasi & FS', description: 'Pemeriksaan kelayakan JORC, FS, dan AMDAL.', duration: '1-2 Bulan' },
      { step: 2, title: 'Sidang Presentasi Evaluasi Teknis ESDM', description: 'Pendampingan dalam sidang evaluasi teknis tim penilai.', duration: '2-3 Bulan' },
      { step: 3, title: 'Penempatan Jaminan Reklamasi/Pascatambang', description: 'Penempatan jaminan finansial sesuai ketetapan.', duration: '1 Bulan' },
      { step: 4, title: 'Verifikasi BKPM & Penerbitan SK', description: 'Pemeriksaan final di portal OSS RBA dan penandatanganan SK resmi.', duration: '2-6 Bulan' }
    ],
    faqs: [
      {
        question: 'Berapa lama estimasi pengurusan IUP OP - IUP OPK?',
        answer: 'Estimasi waktu pengerjaan 6 Bulan s/d 12 Bulan tergantung kelengkapan dokumen awal perusahaan.'
      }
    ],
    whatsAppMessage: 'Halo Dimas Tri Prasetyo, S.T., kami ingin berkonsultasi mengenai Jasa Pengurusan IUP OP - IUP OPK.'
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES_DATA.find(s => s.slug.toLowerCase() === slug.toLowerCase());
}
