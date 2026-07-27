import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="scroll-to-top-btn"
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[#111111]/90 border border-[#2A2A2A] text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37] backdrop-blur-md shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group"
      aria-label="Scroll to top"
    >
      <svg className="absolute w-full h-full -rotate-90 p-0.5" viewBox="0 0 36 36">
        <path
          className="text-neutral-800"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-[#D4AF37] transition-all duration-150"
          strokeDasharray={`${scrollProgress}, 100`}
          strokeWidth="2"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <ArrowUp className="w-5 h-5 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};
