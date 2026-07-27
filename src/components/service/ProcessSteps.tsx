import React from 'react';
import { Service } from '../../types';
import { Clock, Workflow, ArrowRight } from 'lucide-react';

interface ProcessStepsProps {
  workflowSteps: Service['workflowSteps'];
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ workflowSteps }) => {
  return (
    <div id="service-process-steps" className="space-y-6">
      <div className="border-b border-neutral-800 pb-3">
        <h3 className="text-xl font-bold text-white font-serif flex items-center gap-2">
          <Workflow className="w-5 h-5 text-[#D4AF37]" />
          <span>Alur & Tahapan Pengurusan</span>
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Tahapan sistematis pengajuan, verifikasi teknis, hingga pengesahan SK Izin resmi.
        </p>
      </div>

      <div className="space-y-4">
        {workflowSteps.map((step) => (
          <div
            key={step.step}
            className="p-5 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#D4AF37]/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 flex items-center justify-center font-bold text-sm shrink-0">
                {step.step}
              </span>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">{step.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{step.description}</p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161616] border border-[#2A2A2A] text-xs font-semibold text-[#D4AF37]">
              <Clock className="w-3.5 h-3.5" />
              <span>{step.duration}</span>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp Process Note */}
      <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#D4AF37]/30 text-xs text-neutral-300 flex items-start gap-3 shadow-md">
        <span className="text-[#D4AF37] font-bold uppercase tracking-wider text-[10px] shrink-0 pt-0.5">INFO ALUR KERJA:</span>
        <p className="leading-relaxed text-[11px]">
          Seluruh koordinasi, penyerahan berkas, laporan progres, dan diskusi tiap tahapan perizinan <strong className="text-white">dilakukan secara langsung melalui WhatsApp</strong> bersama tim Konsultan Senior S Consultant Mining Service.
        </p>
      </div>
    </div>
  );
};
