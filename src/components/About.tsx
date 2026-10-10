import React from 'react';
import { SectionHeading } from './SectionHeading';
import { aboutData, personalInfo } from '../data/portfolioData';
import { Code2, Compass, Cpu, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={aboutData.sectionLabel}
          title={aboutData.heading}
          description="Background, academic focus, and software engineering philosophy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#5A5A58] leading-relaxed">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-[#3A3A38]">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EFEFEA] text-[#171717] rounded text-xs font-mono border border-[#E0E0D8]">
                <Code2 className="w-3.5 h-3.5 text-[#3158A8]" /> Java &amp; Python Focus
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EFEFEA] text-[#171717] rounded text-xs font-mono border border-[#E0E0D8]">
                <Cpu className="w-3.5 h-3.5 text-[#3158A8]" /> AI &amp; Applied Computer Vision
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EFEFEA] text-[#171717] rounded text-xs font-mono border border-[#E0E0D8]">
                <Compass className="w-3.5 h-3.5 text-[#3158A8]" /> Data-Driven Engineering
              </span>
            </div>
          </div>

          {/* Quick Profile Cards / Structural Highlights (5 cols) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] rounded-lg border border-[#E5E5E0] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-6">
            <div className="pb-4 border-b border-[#EFEFEA]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#737370] block mb-1">
                Engineering Profile
              </span>
              <h3 className="text-lg font-semibold text-[#171717]">
                {personalInfo.name}
              </h3>
              <p className="text-xs text-[#5A5A58] mt-0.5">
                {personalInfo.role}
              </p>
            </div>

            <div className="space-y-4">
              {aboutData.quickFacts.map((fact, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                  <span className="text-[#737370] font-mono shrink-0">{fact.label}</span>
                  <span className="font-medium text-[#171717] text-left sm:text-right">{fact.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#EFEFEA] flex items-center justify-between text-xs font-mono text-[#737370]">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#3158A8]" /> Cohort 2023–2027
              </span>
              <span className="text-[#3158A8] font-medium">NEC Kovilpatti</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
