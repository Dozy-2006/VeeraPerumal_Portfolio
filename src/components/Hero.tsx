import React from 'react';
import { ArrowDown, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Introductory Monospace Label */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EAEAE4] text-[#3158A8] font-mono text-[11px] font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3158A8] animate-pulse"></span>
              {personalInfo.heroIntro}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-[#737370]">
              <MapPin className="w-3 h-3 text-[#737370]" />
              {personalInfo.location}
            </span>
          </div>

          {/* Main Editorial Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#171717] leading-[1.12] mb-6">
            Building practical software and intelligent systems.
          </h1>

          {/* Supporting Narrative */}
          <p className="text-lg sm:text-xl text-[#5A5A58] leading-relaxed mb-8 max-w-2xl font-normal">
            {personalInfo.heroDescription}
          </p>

          {/* Call to Actions & Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2 mb-10">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#171717] hover:bg-[#3158A8] rounded transition-all shadow-sm group"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 text-[#CCCCCC] group-hover:text-white transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#171717] bg-[#EAEAE4] hover:bg-[#E0E0D8] rounded border border-[#D5D5CE] transition-all"
            >
              <span>Get in Touch</span>
              <Mail className="w-4 h-4 text-[#5A5A58]" />
            </a>
          </div>

          {/* Direct Social Links & Understated Academic Status */}
          <div className="pt-6 border-t border-[#E5E5E0] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-[#8E8E8A] uppercase tracking-wider text-[10px]">Profiles</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#171717] hover:text-[#3158A8] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-[#D5D5CE]">/</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#171717] hover:text-[#3158A8] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="text-[11px] font-mono text-[#737370] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              <span>B.Tech AI &amp; DS • 2023–2027 • National Engg College</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
