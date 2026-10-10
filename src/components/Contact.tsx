import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, ArrowUpRight, Copy, Check, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 border-b border-[#E5E5E0] bg-[#FAF8F5]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Section Indicator */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3158A8]">
              07 / CONTACT
            </span>
            <span className="h-px w-10 bg-[#E5E5E0]"></span>
          </div>

          {/* Large Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171717] mb-5 leading-tight">
            Have something in mind? Let's connect.
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#5A5A58] leading-relaxed mb-10">
            I'm open to conversations about software development, interesting projects, and opportunities to learn and contribute.
          </p>

          {/* Contact Methods Grid */}
          <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E5E0] p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#737370] block mb-2">
                Primary Direct Email
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-[#FAF8F5] rounded-lg border border-[#EFEAE2]">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-sm sm:text-base font-medium text-[#171717] hover:text-[#3158A8] transition-colors break-all"
                >
                  {personalInfo.email}
                </a>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-[#FFFFFF] hover:bg-[#F0F0EB] text-[#171717] rounded border border-[#D5D5CE] transition-all"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                        <span className="text-[#10B981]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#737370]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium bg-[#3158A8] hover:bg-[#264689] text-white rounded transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Me</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Profiles & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EFEFEA]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg border border-[#E5E5E0] hover:border-[#3158A8]/40 hover:bg-[#FAF8F5] transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <GithubIcon className="w-4 h-4 text-[#171717]" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#737370] group-hover:text-[#3158A8] transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#171717]">GitHub</div>
                  <div className="font-mono text-[11px] text-[#737370] truncate">VeeraperumalS27112005</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg border border-[#E5E5E0] hover:border-[#3158A8]/40 hover:bg-[#FAF8F5] transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#737370] group-hover:text-[#3158A8] transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#171717]">LinkedIn</div>
                  <div className="font-mono text-[11px] text-[#737370] truncate">veera-perumal-s</div>
                </div>
              </a>

              <div className="p-3.5 rounded-lg border border-[#E5E5E0] bg-[#FAF8F5] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <MapPin className="w-4 h-4 text-[#3158A8]" />
                  <span className="font-mono text-[10px] text-[#10B981] font-semibold">Active</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#171717]">Location</div>
                  <div className="font-mono text-[11px] text-[#737370] truncate">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
