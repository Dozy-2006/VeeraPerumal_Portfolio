import React from 'react';
import { SectionHeading } from './SectionHeading';
import { projectsData } from '../data/portfolioData';
import { TransactionVisualizerMockup } from './mockups/TransactionVisualizerMockup';
import { AiNotetakerMockup } from './mockups/AiNotetakerMockup';
import { ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="py-20 sm:py-28 border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="02 / SELECTED WORK"
          title="Selected projects."
          description="A selection of software and machine learning systems developed to solve concrete operational and analytical problems."
        />

        <div className="space-y-24 sm:space-y-32">
          {projectsData.map((project) => {
            return (
              <article
                key={project.id}
                className="space-y-8 pb-16 sm:pb-20 border-b border-[#EAEAE4] last:border-b-0 last:pb-0"
              >
                {/* Project Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-4 border-b border-[#E5E5E0]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#3158A8] bg-[#EEF3FA] px-2.5 py-1 rounded">
                      PROJECT {project.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {project.githubUrl && (
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#FFFFFF] border border-[#D5D5CE] text-[#171717] hover:bg-[#F0F0EB] hover:text-[#3158A8] transition-all"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3 text-[#737370]" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Subtitle / Tagline */}
                <p className="text-base sm:text-lg text-[#3A3A38] font-medium leading-snug">
                  {project.tagline}
                </p>

                {/* Visual Preview Container */}
                <div className="rounded-xl overflow-hidden shadow-sm border border-[#D5D5CE] bg-[#121316]">
                  {project.visualType === 'transaction-visualizer' ? (
                    <TransactionVisualizerMockup />
                  ) : (
                    <AiNotetakerMockup />
                  )}
                </div>

                {/* Technical Anatomy & Architecture Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                  {/* Problem & Implementation (7 Cols) */}
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#737370] mb-2">
                        The Problem
                      </h4>
                      <p className="text-sm sm:text-base text-[#5A5A58] leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#737370] mb-2">
                        Engineering Implementation
                      </h4>
                      <p className="text-sm sm:text-base text-[#5A5A58] leading-relaxed">
                        {project.implementation}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#737370] mb-2.5">
                        Key Engineering Highlights
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#3A3A38]">
                        {project.keyFeatures.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#3158A8] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack & Metadata (5 Cols) */}
                  <div className="md:col-span-5 bg-[#FFFFFF] p-6 rounded-lg border border-[#E5E5E0] space-y-6 self-start">
                    <div>
                      <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#737370] mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono font-medium bg-[#F4F4F0] text-[#171717] rounded border border-[#E5E5DE]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#EFEFEA] space-y-2 text-xs text-[#737370]">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#171717]">Architecture:</span>
                        <span>{project.visualType === 'transaction-visualizer' ? 'Web Analytical App / Graph Topology' : 'Desktop Multithreaded Python App'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#171717]">Status:</span>
                        <span className="text-[#10B981] font-mono">Functional Codebase</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#EFEFEA] flex items-start gap-2 text-[11px] text-[#737370] bg-[#FAF8F5] p-2.5 rounded border border-[#EFEAE2]">
                      <AlertCircle className="w-3.5 h-3.5 text-[#3158A8] shrink-0 mt-0.5" />
                      <span>
                        Illustrative interface preview modeled after project architecture. Codebase maintained on personal GitHub repository.
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
