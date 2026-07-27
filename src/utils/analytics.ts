/**
 * Analytics Utility - GA4 and Meta Pixel Ready Tracker
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackWhatsAppClick(label: string, serviceSlug?: string) {
  // Console logging for dev verification
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Analytics] Lead Conversion Event - WhatsApp Click:', { label, serviceSlug });
  }

  // Google Analytics 4 Event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      event_category: 'WhatsApp Lead',
      event_label: label,
      service_slug: serviceSlug || 'general',
      value: 1.0,
    });
  }

  // Meta Pixel Lead Event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: label,
      content_category: serviceSlug || 'Mining Consultant',
    });
  }
}

export function trackPageView(url: string, title: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-MEASUREMENT_ID', {
      page_path: url,
      page_title: title,
    });
  }
}
