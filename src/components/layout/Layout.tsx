import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MobileDrawer } from './MobileDrawer';
import { FloatingWhatsApp } from '../common/FloatingWhatsApp';
import { ScrollToTop } from '../common/ScrollToTop';
import { CookieConsent } from '../common/CookieConsent';
import { SearchModal } from '../common/SearchModal';
import { MapModal } from '../common/MapModal';

interface LayoutProps {
  children: React.ReactNode;
  serviceSlug?: string;
  serviceName?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, serviceSlug, serviceName }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#D4AF37] selection:text-black">
      {/* Sticky Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-grow pt-20 sm:pt-24">
        {children}
      </main>

      {/* Footer */}
      <Footer onOpenMap={() => setIsMapOpen(true)} />

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMap={() => setIsMapOpen(true)}
      />

      {/* Interactive Floating WhatsApp Button */}
      <FloatingWhatsApp serviceSlug={serviceSlug} serviceName={serviceName} />

      {/* Scroll To Top Button */}
      <ScrollToTop />

      {/* Cookie Consent Banner */}
      <CookieConsent />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Google Maps Location Modal */}
      <MapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
      />
    </div>
  );
};
