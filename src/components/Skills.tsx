import React from 'react';
import { SectionHeading } from './SectionHeading';
import { skillsData } from '../data/portfolioData';
import { Code, Cpu, Target } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-4 h-4 text-[#3158A8]" />;
      case 1:
        return <Cpu className="w-4 h-4 text-[#3158A8]" />;
      default:
        return <Target className="w-4 h-4 text-[#3158A8]" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="04 / SKILLS"
          title="Tools and technologies."
          description="A transparent inventory of programming languages, core competencies, and academic research interests."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((category, index) => (
            <div
              key={category.title}
              className="bg-[#FFFFFF] border border-[#E5E5E0] rounded-xl p-6 sm:p-7 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#EFEFEA]">
                  <div className="p-1.5 rounded bg-[#EEF3FA]">
                    {getCategoryIcon(index)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#171717]">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#737370] mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-2.5">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between py-2 px-3 bg-[#FAF8F5] rounded border border-[#EFEAE2] text-xs font-mono text-[#171717] hover:border-[#D5D5CE] transition-colors"
                    >
                      <span className="font-medium">{item}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3158A8]/60"></span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#EFEFEA] mt-6 flex items-center justify-between text-[11px] font-mono text-[#8E8E8A]">
                <span>Category 0{index + 1}</span>
                <span>Verified Resume Skills</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
