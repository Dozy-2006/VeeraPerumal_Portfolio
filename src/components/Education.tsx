import React from 'react';
import { SectionHeading } from './SectionHeading';
import { educationData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="05 / EDUCATION"
          title="Education."
          description="Academic background and institutional qualifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl p-6 sm:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#EFEFEA] mb-4">
                  <span className="font-mono text-xs font-semibold text-[#3158A8] bg-[#EEF3FA] px-2.5 py-1 rounded">
                    0{idx + 1} • {item.period}
                  </span>
                  <div className="text-right">
                    <span className="font-mono text-[11px] text-[#737370] block">{item.gradeLabel}</span>
                    <span className="font-mono text-sm font-bold text-[#171717]">{item.gradeValue}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#171717] tracking-tight">
                  {item.institution}
                </h3>
                <p className="text-sm font-medium text-[#3158A8] mt-1 mb-4">
                  {item.degree}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-[#EFEFEA]">
                    {item.highlights.map((h, hIdx) => (
                      <p key={hIdx} className="text-xs sm:text-sm text-[#5A5A58] leading-relaxed flex items-start gap-2">
                        <span className="text-[#3158A8] mt-1">•</span>
                        <span>{h}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-[#EFEFEA] mt-6 flex items-center justify-between text-xs font-mono text-[#8E8E8A]">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#3158A8]" />
                  Formal Credential
                </span>
                <span>Verified Resume Data</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
