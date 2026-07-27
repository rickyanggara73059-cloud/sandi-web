import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { ServiceHero } from '../components/service/ServiceHero';
import { RequirementsList } from '../components/service/RequirementsList';
import { ProcessSteps } from '../components/service/ProcessSteps';
import { RelatedServices } from '../components/service/RelatedServices';
import { CTABanner } from '../components/home/CTABanner';
import { getServiceBySlug } from '../data/servicesData';
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '../utils/seo';
import { FileText, ShieldAlert, ChevronDown, MessageSquare, BookOpen, HelpCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = useMemo(() => {
    return slug ? getServiceBySlug(slug) : undefined;
  }, [slug]);

  if (!service) {
    return (
      <div className="py-24 text-center space-y-4 max-w-md mx-auto px-4">
        <ShieldAlert className="w-12 h-12 text-[#D4AF37] mx-auto" />
        <h2 className="text-2xl font-bold text-white">Layanan Tidak Ditemukan</h2>
        <p className="text-xs text-neutral-400">
          Kode atau jenis perizinan pertambangan yang Anda cari tidak tersedia dalam direktori.
        </p>
        <Link
          to="/services"
          className="inline-block px-6 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs"
        >
          Lihat Katalog Perizinan
        </Link>
      </div>
    );
  }

  const serviceSchema = generateServiceSchema(service.title, service.shortDescription, service.slug);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: 'https://nusaminerba.com' },
    { name: 'Layanan Perizinan', url: 'https://nusaminerba.com/services' },
    { name: service.shortTitle, url: `https://nusaminerba.com/services/${service.slug}` }
  ]);
  const faqSchema = generateFAQSchema(service.faqs);

  const schemas = [serviceSchema, breadcrumbSchema, faqSchema];

  return (
    <>
      <SEO
        title={`${service.title} - Mining Licensing Consultant`}
        description={service.shortDescription}
        keywords={`${service.shortTitle}, Perizinan Pertambangan, ${service.authority}, Legalitas Tambang Indonesia, Konsultan ${service.shortTitle}`}
        canonicalUrl={`https://nusaminerba.com/services/${service.slug}`}
        schemaJson={schemas}
      />

      <div className="bg-[#050505] text-white space-y-16 pb-16">
        {/* Detail Hero Section */}
        <ServiceHero service={service} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Legal Basis Section */}
          <div className="p-6 rounded-2xl bg-[#111111] border border-[#222222] space-y-3">
            <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Dasar Hukum & Payung Regulasi Resmi</span>
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-neutral-300">
              {service.legalBasis.map((law, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-[#161616] border border-[#2A2A2A] font-medium leading-relaxed">
                  {law}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements Checklist */}
          <RequirementsList requirements={service.requirements} />

          {/* Workflow Timeline */}
          <ProcessSteps workflowSteps={service.workflowSteps} />

          {/* Service Specific FAQs */}
          {service.faqs.length > 0 && (
            <div className="space-y-6">
              <div className="border-b border-neutral-800 pb-3">
                <h3 className="text-xl font-bold text-white font-serif flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
                  <span>Pertanyaan Sering Diajukan ({service.shortTitle})</span>
                </h3>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-[#111111] border border-[#222222] space-y-2">
                    <h5 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                      <span>{faq.question}</span>
                    </h5>
                    <p className="text-xs text-neutral-300 leading-relaxed pl-4 border-l-2 border-[#D4AF37]/30">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Services */}
          <RelatedServices currentSlug={service.slug} />
        </div>

        {/* High Conversion Banner */}
        <CTABanner />
      </div>
    </>
  );
};
