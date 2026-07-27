/**
 * SEO & Structured Data (Schema.org JSON-LD) Utility
 */

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Nusa Minerba Consulting',
    'alternateName': 'Nusa Minerba Mining Licensing & Regulatory Consultants',
    'url': 'https://nusaminerba.com',
    'logo': 'https://nusaminerba.com/logo.png',
    'image': 'https://nusaminerba.com/og-banner.jpg',
    'description': 'Premier Fortune 500 level Mining Licensing, Legal Compliance & Regulatory Advisory Firm in Indonesia.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'The Energy Building, 28th Floor, SCBD Lot 11A',
      'addressLocality': 'Jakarta Selatan',
      'addressRegion': 'DKI Jakarta',
      'postalCode': '12190',
      'addressCountry': 'ID'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -6.2255,
      'longitude': 106.8083
    },
    'telephone': '+6282132588882',
    'email': 'contact@nusaminerba.com',
    'priceRange': '$$$$',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '18:00'
      }
    ],
    'areaServed': {
      '@type': 'Country',
      'name': 'Indonesia'
    },
    'knowsAbout': [
      'Mining Licensing Indonesia',
      'Rencana Kerja dan Anggaran Biaya (RKAB)',
      'Izin Pinjam Pakai Kawasan Hutan (IPP)',
      'Izin Usaha Jasa Pertambangan (IUJP)',
      'Minerba One Map Indonesia',
      'LKPM BKPM',
      'Eksportir Terdaftar Batubara',
      'IUP Operasi Produksi'
    ]
  };
}

export function generateServiceSchema(serviceTitle: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    'name': `${serviceTitle} - Mining Consultant Service`,
    'serviceType': 'Mining Licensing & Compliance Consulting',
    'provider': {
      '@type': 'ProfessionalService',
      'name': 'Nusa Minerba Consulting',
      'url': 'https://nusaminerba.com'
    },
    'description': description,
    'areaServed': {
      '@type': 'Country',
      'name': 'Indonesia'
    },
    'url': `https://nusaminerba.com/services/${slug}`
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}
