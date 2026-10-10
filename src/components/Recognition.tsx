import React from 'react';
import { SectionHeading } from './SectionHeading';
import { recognitionData } from '../data/portfolioData';
import { Trophy, Award, CheckCircle } from 'lucide-react';

export const Recognition: React.FC = () => {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'Award':
        return (
          <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] font-semibold flex items-center gap-1">
            <Trophy className="w-3 h-3 text-[#B45309]" /> 1st Place Winner
          </span>
        );
      case 'Hackathon Finalist':
        return (
          <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#EEF3FA] text-[#1E40AF] border border-[#BFDBFE] font-semibold flex items-center gap-1">
            <Award className="w-3 h-3 text-[#2563EB]" /> Finalist
          </span>
        );
      default:
        return (
          <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] font-semibold flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-[#059669]" /> Completed
          </span>
        );
    }
  };

  return (
    <section id="recognition" className="py-20 sm:py-28 border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="06 / RECOGNITION"
          title="Achievements."
          description="Competitive programming awards, hackathon recognitions, and technical certifications."
        />

        <div className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.02)] divide-y divide-[#EFEFEA]">
          {recognitionData.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#8E8E8A]">0{idx + 1}</span>
                  <span className="text-[#D5D5CE]">/</span>
                  <h3 className="text-base sm:text-lg font-semibold text-[#171717]">
                    {item.title}
                  </h3>
                </div>
                <div className="text-xs sm:text-sm text-[#5A5A58] pl-6 sm:pl-7">
                  <span>{item.event}</span>
                  <span className="mx-2 text-[#D5D5CE]">•</span>
                  <span className="font-medium text-[#171717]">{item.organization}</span>
                </div>
              </div>

              <div className="pl-6 sm:pl-0 shrink-0">
                {getTypeBadge(item.type)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
