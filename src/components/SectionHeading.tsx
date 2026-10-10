import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ label, title, description, id }) => {
  return (
    <div className="mb-10 md:mb-14" id={id}>
      <div className="flex items-center gap-3 mb-2.5">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3158A8]">
          {label}
        </span>
        <span className="h-px flex-1 max-w-[60px] bg-[#E5E5E0]"></span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#171717]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-[#5A5A58] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
