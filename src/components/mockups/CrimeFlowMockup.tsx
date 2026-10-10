import React, { useState } from 'react';
import { Shield, Database, BarChart3, MapPin, Calendar, CheckCircle } from 'lucide-react';

export const CrimeFlowMockup: React.FC = () => {
  const [selectedSubdivision, setSelectedSubdivision] = useState<string>('all');

  const subdivisions = [
    {
      id: 'all',
      name: 'All Subdivisions (District-Wide)',
      count: '1,420 Incidents',
      resolution: '78.4%',
      peakTime: '19:00 – 23:00 hrs',
      hotspotName: 'Thoothukudi Harbor & Market Sector',
      hotspotNote: 'Peak Activity: Friday & Saturday Nights',
      coastalName: 'Tiruchendur Temple Perimeter',
      coastalNote: 'Crowd Transit & Traffic Management Focus',
      categories: [
        { label: 'Property & Theft Offenses', count: '412 cases', pct: 29, color: '#3B82F6' },
        { label: 'Traffic & Transit Violations', count: '524 cases', pct: 37, color: '#10B981' },
        { label: 'Public Order & Community Disputes', count: '298 cases', pct: 21, color: '#F59E0B' },
        { label: 'Financial & Cyber Reports', count: '186 cases', pct: 13, color: '#EC4899' },
      ],
    },
    {
      id: 'thoothukudi-town',
      name: 'Thoothukudi Town Division',
      count: '480 Incidents',
      resolution: '81.2%',
      peakTime: '20:00 – 01:00 hrs',
      hotspotName: 'Commercial Port & Fish Landing Dock',
      hotspotNote: 'Heavy cargo transit & dock patrol watch',
      coastalName: 'Old Bus Stand Corridor',
      coastalNote: 'Nighttime commercial vigilance deployment',
      categories: [
        { label: 'Property & Theft Offenses', count: '168 cases', pct: 35, color: '#3B82F6' },
        { label: 'Traffic & Transit Violations', count: '154 cases', pct: 32, color: '#10B981' },
        { label: 'Public Order & Community Disputes', count: '96 cases', pct: 20, color: '#F59E0B' },
        { label: 'Financial & Cyber Reports', count: '62 cases', pct: 13, color: '#EC4899' },
      ],
    },
    {
      id: 'tiruchendur',
      name: 'Tiruchendur Division',
      count: '310 Incidents',
      resolution: '76.5%',
      peakTime: '06:00 – 12:00 hrs',
      hotspotName: 'Subramanya Swamy Temple Perimeter',
      hotspotNote: 'Pilgrim influx & festival crowd regulation',
      coastalName: 'Beach Road & Bus Terminal Zone',
      coastalNote: 'Traffic diversion & tourist transit management',
      categories: [
        { label: 'Property & Theft Offenses', count: '74 cases', pct: 24, color: '#3B82F6' },
        { label: 'Traffic & Transit Violations', count: '146 cases', pct: 47, color: '#10B981' },
        { label: 'Public Order & Community Disputes', count: '65 cases', pct: 21, color: '#F59E0B' },
        { label: 'Financial & Cyber Reports', count: '25 cases', pct: 8, color: '#EC4899' },
      ],
    },
    {
      id: 'kovilpatti',
      name: 'Kovilpatti Division',
      count: '390 Incidents',
      resolution: '79.1%',
      peakTime: '18:00 – 22:00 hrs',
      hotspotName: 'NH44 Bypass & Match Factory Industrial Belt',
      hotspotNote: 'Heavy freight transit and highway patrols',
      coastalName: 'Railway Feeder Junction',
      coastalNote: 'Commuter logistics & junction checkpoints',
      categories: [
        { label: 'Property & Theft Offenses', count: '109 cases', pct: 28, color: '#3B82F6' },
        { label: 'Traffic & Transit Violations', count: '156 cases', pct: 40, color: '#10B981' },
        { label: 'Public Order & Community Disputes', count: '82 cases', pct: 21, color: '#F59E0B' },
        { label: 'Financial & Cyber Reports', count: '43 cases', pct: 11, color: '#EC4899' },
      ],
    },
    {
      id: 'srivaikuntam',
      name: 'Srivaikuntam Division',
      count: '240 Incidents',
      resolution: '74.2%',
      peakTime: '14:00 – 19:00 hrs',
      hotspotName: 'Thamirabarani River Belt & Market Bazaar',
      hotspotNote: 'Agricultural transport & seasonal market focus',
      coastalName: 'Rural Feeder Road Junctions',
      coastalNote: 'Inter-village perimeter mobile monitoring',
      categories: [
        { label: 'Property & Theft Offenses', count: '61 cases', pct: 25, color: '#3B82F6' },
        { label: 'Traffic & Transit Violations', count: '68 cases', pct: 28, color: '#10B981' },
        { label: 'Public Order & Community Disputes', count: '75 cases', pct: 31, color: '#F59E0B' },
        { label: 'Financial & Cyber Reports', count: '36 cases', pct: 15, color: '#EC4899' },
      ],
    },
  ];

  const currentData = subdivisions.find((s) => s.id === selectedSubdivision) || subdivisions[0];

  return (
    <div className="w-full bg-[#16171B] text-[#E4E4E7] rounded-lg border border-[#27272A] overflow-hidden shadow-sm font-sans text-xs">
      {/* Law Enforcement BI Header */}
      <div className="bg-[#1C1D22] px-4 py-2.5 border-b border-[#27272A] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded bg-[#1E3A8A]/30 text-[#60A5FA] border border-[#1D4ED8]/30">
            <Shield className="w-4 h-4 text-[#93C5FD]" />
          </div>
          <div>
            <div className="font-semibold text-white tracking-wide text-xs flex items-center gap-2">
              Office of the Superintendent of Police, Thoothukudi
              <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#27272A] text-[#A1A1AA]">
                BI ANALYTICS v1.2
              </span>
            </div>
            <div className="text-[11px] text-[#A1A1AA] flex items-center gap-2">
              <span>Crime Flow Analyzer Portal</span>
              <span>•</span>
              <span className="text-[#34D399] flex items-center gap-1 font-mono text-[10px]">
                <Database className="w-3 h-3 text-[#34D399]" />
                Google Sheets Live Ingest: {currentData.count} Synced
              </span>
            </div>
          </div>
        </div>

        {/* Division Selector */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={selectedSubdivision}
              onChange={(e) => setSelectedSubdivision(e.target.value)}
              className="bg-[#27272A] hover:bg-[#323238] text-white border border-[#3F3F46] rounded px-2.5 py-1 text-[11px] font-medium appearance-none pr-7 focus:outline-none focus:ring-1 focus:ring-[#3158A8]"
            >
              {subdivisions.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.name}
                </option>
              ))}
            </select>
            <MapPin className="w-3 h-3 text-[#A1A1AA] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Real-time KPI Metric Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 bg-[#121316] border-b border-[#27272A] divide-x divide-[#27272A]">
        <div className="p-2.5 px-3.5">
          <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Total Logged Records</span>
          <span className="font-mono text-sm font-semibold text-white">{currentData.count}</span>
        </div>
        <div className="p-2.5 px-3.5">
          <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Case Resolution Rate</span>
          <span className="font-mono text-sm font-semibold text-[#34D399] flex items-center gap-1">
            {currentData.resolution} <CheckCircle className="w-3 h-3" />
          </span>
        </div>
        <div className="p-2.5 px-3.5">
          <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Peak Time Band</span>
          <span className="font-mono text-sm font-semibold text-[#FBBF24]">{currentData.peakTime}</span>
        </div>
        <div className="p-2.5 px-3.5">
          <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Backend Pipeline</span>
          <span className="font-mono text-sm font-semibold text-[#38BDF8]">Node.js Express</span>
        </div>
      </div>

      {/* Main Analytical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 p-3.5 gap-3.5 bg-[#141518]">
        {/* Crime Category Distribution (7 Cols) */}
        <div className="md:col-span-7 bg-[#1A1B20] p-3 rounded border border-[#27272A] space-y-2.5">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#27272A]">
            <span className="font-semibold text-white text-[11px] flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-[#38BDF8]" />
              Crime Typology & Frequency Distribution
            </span>
            <span className="font-mono text-[10px] text-[#A1A1AA]">{currentData.name.split(' (')[0]}</span>
          </div>

          <div className="space-y-2">
            {currentData.categories.map((cat, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-[#E4E4E7]">{cat.label}</span>
                  <span className="font-mono text-[#A1A1AA]">{cat.count} ({cat.pct}%)</span>
                </div>
                <div className="w-full bg-[#101114] h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${cat.pct}%`, backgroundColor: cat.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Temporal Patrol & Heatmap Insights (5 Cols) */}
        <div className="md:col-span-5 bg-[#1A1B20] p-3 rounded border border-[#27272A] space-y-2.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1.5 border-b border-[#27272A]">
              <span className="font-semibold text-white text-[11px] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FBBF24]" />
                Temporal Patrol Priority
              </span>
              <span className="font-mono text-[10px] text-[#34D399]">Live Insights</span>
            </div>

            <div className="space-y-1.5 mt-2">
              <div className="bg-[#121316] p-2 rounded border border-[#27272A]">
                <div className="text-[10px] text-[#A1A1AA] uppercase font-mono">High Density Hotspot</div>
                <div className="text-xs font-semibold text-white">{currentData.hotspotName}</div>
                <div className="text-[10px] text-[#93C5FD]">{currentData.hotspotNote}</div>
              </div>

              <div className="bg-[#121316] p-2 rounded border border-[#27272A]">
                <div className="text-[10px] text-[#A1A1AA] uppercase font-mono">Sector Surveillance</div>
                <div className="text-xs font-semibold text-white">{currentData.coastalName}</div>
                <div className="text-[10px] text-[#93C5FD]">{currentData.coastalNote}</div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#27272A] flex items-center justify-between text-[10px] text-[#71717A]">
            <span>ETL: Node.js ➔ Google Sheets API</span>
            <span className="font-mono text-[#38BDF8]">Vanilla JS UI</span>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="px-4 py-2 bg-[#121316] border-t border-[#27272A] flex items-center justify-between text-[10px] text-[#71717A]">
        <span className="italic">
          Illustrative interface preview. Business Intelligence dashboard developed for the Office of the Superintendent of Police, Thoothukudi.
        </span>
        <span className="font-mono text-[#E4E4E7]">Police Department Internship</span>
      </div>
    </div>
  );
};
