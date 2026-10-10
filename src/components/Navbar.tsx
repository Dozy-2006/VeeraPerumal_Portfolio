import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { navigationLinks, personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navigationLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F8F6]/90 backdrop-blur-md border-b border-[#E5E5E0] shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="group flex flex-col focus:outline-none"
            aria-label="Veera Perumal S — Back to top"
          >
            <span className="font-semibold text-[#171717] tracking-tight text-base sm:text-lg group-hover:text-[#3158A8] transition-colors">
              Veera Perumal S.
            </span>
            <span className="text-[11px] font-mono text-[#737370] tracking-wide -mt-0.5">
              Software & AI/DS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navigationLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium tracking-wide transition-colors relative py-1 ${
                    isActive ? 'text-[#3158A8] font-semibold' : 'text-[#5A5A58] hover:text-[#171717]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3158A8] rounded-full" />
                  )}
                </a>
              );
            })}

            <div className="h-4 w-px bg-[#E5E5E0] mx-1"></div>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Veera_Perumal_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#171717] bg-[#EFEFEA] hover:bg-[#E5E5DE] rounded border border-[#E0E0D8] transition-all hover:border-[#CCCCCC]"
            >
              <FileText className="w-3.5 h-3.5 text-[#3158A8]" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#737370]" />
            </a>
          </nav>

          {/* Mobile Menu & Resume Action */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Veera_Perumal_Resume.pdf"
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#171717] bg-[#EFEFEA] rounded border border-[#E0E0D8]"
            >
              <FileText className="w-3 h-3 text-[#3158A8]" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171717] hover:text-[#3158A8] hover:bg-[#EFEFEA] rounded-md transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F8F6] border-b border-[#E5E5E0] px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#5A5A58] hover:text-[#3158A8] hover:bg-[#F0F0EB] rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E5E5E0] mt-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Veera_Perumal_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-[#3158A8] hover:bg-[#264689] rounded-md transition-colors"
            >
              <FileText className="w-4 h-4" />
              Download Official Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
