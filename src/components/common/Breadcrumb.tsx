import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-1">
      <ol className="flex items-center gap-1.5 flex-wrap text-xs text-neutral-400">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
              {isLast || !item.path ? (
                <span className="text-[#D4AF37] font-medium truncate max-w-[200px] md:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-[#D4AF37] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
