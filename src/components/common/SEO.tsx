import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../../data/companyData';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schemaJson?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'Enterprise Mining Licensing & Regulatory Consulting Services in Indonesia. IPP, IUJP, RKAB, Minerba One, LKPM, ET Batubara, and IUP OP compliance.',
  keywords = 'Mining Consultant Indonesia, Konsultan Tambang, Izin Pertambangan, RKAB ESDM, IPPKH KLHK, IUJP Kontraktor, Minerba One Map, ET Batubara, IUP Operasi Produksi',
  canonicalUrl,
  ogImage = '/og-banner.jpg',
  ogType = 'website',
  schemaJson
}) => {
  const fullTitle = title 
    ? `${title} | Nusa Minerba Consulting`
    : `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`;

  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://nusaminerba.com');

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="Indonesian, English" />
      <meta name="author" content="Nusa Minerba Consulting" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Nusa Minerba Consulting" />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data / JSON-LD */}
      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      )}
    </Helmet>
  );
};
