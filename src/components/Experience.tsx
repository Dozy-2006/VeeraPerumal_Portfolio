import React from 'react';
import { SectionHeading } from './SectionHeading';
import { experienceData } from '../data/portfolioData';
import { CrimeFlowMockup } from './mockups/CrimeFlowMockup';
import { MapPin, CheckCircle2, Shield } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="03 / EXPERIENCE"
          title="Experience."
          description="Applied engineering and data analytics work built for public sector operations."
        />

        <div className="space-y-12">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl p-6 sm:p-8 lg:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-8"
            >
              {/* Header Meta */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#EFEFEA]">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#EEF3FA] text-[#3158A8] font-mono text-xs font-semibold">
                      <Shield className="w-3.5 h-3.5" />
                      {exp.position}
                    </span>
                    <span className="font-mono text-xs text-[#737370]">{exp.scope}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#171717] tracking-tight">
                    {exp.organization}
                  </h3>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#5A5A58] mt-1">
                    <span className="font-medium text-[#171717]">Project: {exp.projectTitle}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#737370]">
                      <MapPin className="w-3.5 h-3.5" /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-[#F4F4F0] text-[#171717] rounded border border-[#E5E5DE]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-base sm:text-lg text-[#3A3A38] leading-relaxed">
                {exp.summary}
              </p>

              {/* Realistic Illustrative Dashboard Preview of Crime Flow Analyzer */}
              <div className="rounded-lg overflow-hidden border border-[#D5D5CE] shadow-sm">
                <CrimeFlowMockup />
              </div>

              {/* Implementation Breakdown Highlights */}
              <div className="pt-2">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#737370] mb-4">
                  Engineering Responsibilities &amp; Implementation
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.implementationHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-lg border border-[#EFEAE2]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#3158A8] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#3A3A38] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
