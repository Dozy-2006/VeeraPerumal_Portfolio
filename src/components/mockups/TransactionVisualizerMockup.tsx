import React, { useState } from 'react';
import { Network, AlertTriangle, RefreshCw, Info } from 'lucide-react';

interface NodeInfo {
  id: string;
  name: string;
  type: 'origin' | 'layer' | 'destination';
  amount: string;
  risk: 'Low' | 'Medium' | 'High' | 'Critical';
  flag: string;
}

export const TransactionVisualizerMockup: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'suspicious'>('all');
  const [selectedNode, setSelectedNode] = useState<NodeInfo>({
    id: 'ACC-4109',
    name: 'Primary Inflow Account #4109',
    type: 'origin',
    amount: '₹ 1.85 Cr',
    risk: 'Critical',
    flag: 'Rapid structuring into 3 secondary sub-accounts within 18 minutes',
  });

  const nodes: NodeInfo[] = [
    {
      id: 'ACC-8821',
      name: 'Remitter Entity [Alpha Export]',
      type: 'origin',
      amount: '₹ 2.10 Cr',
      risk: 'Medium',
      flag: 'High velocity international wire transfer',
    },
    {
      id: 'ACC-4109',
      name: 'Primary Inflow Account #4109',
      type: 'origin',
      amount: '₹ 1.85 Cr',
      risk: 'Critical',
      flag: 'Rapid structuring into 3 secondary sub-accounts within 18 minutes',
    },
    {
      id: 'HUB-01',
      name: 'Layering Conduit A [Transit Hub]',
      type: 'layer',
      amount: '₹ 1.40 Cr',
      risk: 'High',
      flag: 'Zero overnight balance retained; instant pass-through',
    },
    {
      id: 'HUB-02',
      name: 'Split Account B [Dispersal]',
      type: 'layer',
      amount: '₹ 95.00 L',
      risk: 'High',
      flag: 'Circular fund return identified back to origin cluster',
    },
    {
      id: 'DEST-99',
      name: 'Beneficiary [Venture Holding]',
      type: 'destination',
      amount: '₹ 1.62 Cr',
      risk: 'Critical',
      flag: 'Terminal account located in non-cooperative jurisdiction',
    },
    {
      id: 'DEST-42',
      name: 'Beneficiary [Asset Management]',
      type: 'destination',
      amount: '₹ 73.00 L',
      risk: 'Medium',
      flag: 'Multiple sub-threshold deposits aggregating into real estate purchase',
    },
  ];

  return (
    <div className="w-full bg-[#141517] text-[#E4E4E7] rounded-lg border border-[#27272A] overflow-hidden shadow-sm font-sans text-xs">
      {/* Visualizer Header */}
      <div className="bg-[#1C1D21] px-4 py-2.5 border-b border-[#27272A] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-[#3158A8]/20 text-[#60A5FA]">
            <Network className="w-4 h-4 text-[#7CA1ED]" />
          </div>
          <div>
            <div className="font-semibold text-white tracking-wide text-xs flex items-center gap-2">
              Transaction Trail Visualizer
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#27272A] text-[#A1A1AA]">
                FORENSIC GRAPH v2.1
              </span>
            </div>
            <div className="text-[11px] text-[#A1A1AA]">
              Dataset: <span className="font-mono text-[#E4E4E7]">AML_Case_TX_892.csv</span> • 24 Nodes • 38 Edges
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex items-center gap-2">
          <div className="bg-[#27272A] p-0.5 rounded flex items-center">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                activeFilter === 'all' ? 'bg-[#3158A8] text-white' : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              All Flows (38)
            </button>
            <button
              onClick={() => setActiveFilter('suspicious')}
              className={`px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1 transition-colors ${
                activeFilter === 'suspicious' ? 'bg-[#DC2626] text-white' : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              <AlertTriangle className="w-3 h-3" />
              Flagged Only (6)
            </button>
          </div>
          <button
            onClick={() => setSelectedNode(nodes[1])}
            className="p-1.5 bg-[#27272A] hover:bg-[#323238] text-[#A1A1AA] hover:text-white rounded transition-colors"
            title="Reset Graph Center"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 bg-[#18191D] border-b border-[#27272A] divide-x divide-[#27272A]">
        <div className="p-2.5 px-3.5">
          <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Total Volume Traced</span>
          <span className="font-mono text-sm font-semibold text-white">₹ 4.82 Cr</span>
        </div>
        <div className="p-2.5 px-3.5">
          <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Circular Loops</span>
          <span className="font-mono text-sm font-semibold text-[#F87171] flex items-center gap-1">
            2 Detected <AlertTriangle className="w-3 h-3" />
          </span>
        </div>
        <div className="p-2.5 px-3.5">
          <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Layering Conduits</span>
          <span className="font-mono text-sm font-semibold text-[#FBBF24]">3 Intermediaries</span>
        </div>
        <div className="p-2.5 px-3.5">
          <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Structuring Detection</span>
          <span className="font-mono text-sm font-semibold text-[#34D399]">98.2% Confidence</span>
        </div>
      </div>

      {/* Main Interactive Graph & Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[320px]">
        {/* Interactive SVG Network Graph (2 Cols) */}
        <div className="lg:col-span-2 p-4 relative bg-[#121316] overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between text-[11px] text-[#71717A] mb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Origin Clusters
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] ml-2"></span> Layering Hops
              <span className="w-2 h-2 rounded-full bg-[#EF4444] ml-2"></span> High-Risk Destination
            </span>
            <span className="font-mono text-[10px]">Click any node to inspect forensics</span>
          </div>

          {/* SVG Diagram Canvas */}
          <div className="w-full relative h-[250px] my-auto">
            <svg className="w-full h-full" viewBox="0 0 520 230" fill="none">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#52525B" />
                </marker>
                <marker id="arrow-flagged" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#EF4444" />
                </marker>
              </defs>

              {/* Edge lines */}
              {/* ACC-8821 to HUB-01 */}
              <g className={`transition-opacity duration-300 ${activeFilter === 'suspicious' ? 'opacity-20' : 'opacity-100'}`}>
                <path d="M 90 60 C 170 60, 190 90, 260 90" stroke="#52525B" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow)" />
                <text x="160" y="66" fill="#A1A1AA" fontSize="9" fontFamily="monospace">₹ 1.20 Cr</text>
              </g>

              {/* ACC-4109 to HUB-01 */}
              <g className="transition-opacity duration-300">
                <path d="M 90 150 C 170 150, 180 110, 260 100" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow-flagged)" />
                <text x="155" y="120" fill="#F87171" fontSize="9" fontFamily="monospace">₹ 95.0 L [Flagged]</text>
              </g>

              {/* ACC-4109 to HUB-02 */}
              <g className="transition-opacity duration-300">
                <path d="M 90 160 C 170 165, 180 175, 260 175" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow-flagged)" />
                <text x="150" y="180" fill="#F87171" fontSize="9" fontFamily="monospace">₹ 90.0 L [Structured]</text>
              </g>

              {/* HUB-01 to DEST-99 */}
              <g className="transition-opacity duration-300">
                <path d="M 290 95 C 360 95, 380 65, 430 65" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow-flagged)" />
                <text x="345" y="70" fill="#F87171" fontSize="9" fontFamily="monospace">₹ 1.40 Cr</text>
              </g>

              {/* HUB-02 to DEST-42 */}
              <g className={`transition-opacity duration-300 ${activeFilter === 'suspicious' ? 'opacity-20' : 'opacity-100'}`}>
                <path d="M 290 175 C 360 175, 380 165, 430 165" stroke="#52525B" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <text x="345" y="180" fill="#A1A1AA" fontSize="9" fontFamily="monospace">₹ 73.0 L</text>
              </g>

              {/* Circular loop feedback from HUB-02 to ACC-4109 */}
              <g className="transition-opacity duration-300">
                <path d="M 265 185 C 220 220, 130 220, 85 175" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-flagged)" />
                <text x="140" y="215" fill="#EF4444" fontSize="8.5" fontFamily="monospace">Loopback ₹ 25 L (Circular Flow)</text>
              </g>
            </svg>

            {/* Clickable Node Elements positioned over SVG */}
            {/* Origin Node 1 */}
            <button
              onClick={() => setSelectedNode(nodes[0])}
              className={`absolute top-[40px] left-[15px] p-2 rounded-md border text-left transition-all ${
                activeFilter === 'suspicious' ? 'opacity-35 hover:opacity-100' : 'opacity-100'
              } ${
                selectedNode.id === 'ACC-8821'
                  ? 'bg-[#1E293B] border-[#38BDF8] ring-2 ring-[#38BDF8]/20'
                  : 'bg-[#18191E] border-[#2E3036] hover:border-[#52525B]'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                <span className="font-mono text-[11px] font-bold text-white">ACC-8821</span>
              </div>
              <div className="text-[10px] text-[#A1A1AA] truncate max-w-[90px]">Alpha Export</div>
              <div className="font-mono text-[10px] text-[#34D399]">₹ 2.10 Cr</div>
            </button>

            {/* Origin Node 2 */}
            <button
              onClick={() => setSelectedNode(nodes[1])}
              className={`absolute top-[130px] left-[15px] p-2 rounded-md border text-left transition-all ${
                selectedNode.id === 'ACC-4109'
                  ? 'bg-[#2A1719] border-[#EF4444] ring-2 ring-[#EF4444]/30'
                  : 'bg-[#18191E] border-[#DC2626]/60 hover:border-[#EF4444]'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse"></span>
                <span className="font-mono text-[11px] font-bold text-white">ACC-4109</span>
              </div>
              <div className="text-[10px] text-[#F87171] truncate max-w-[90px]">Primary Inflow</div>
              <div className="font-mono text-[10px] text-[#FCA5A5]">₹ 1.85 Cr</div>
            </button>

            {/* Layering Node 1 */}
            <button
              onClick={() => setSelectedNode(nodes[2])}
              className={`absolute top-[75px] left-[235px] p-2 rounded-md border text-left transition-all ${
                selectedNode.id === 'HUB-01'
                  ? 'bg-[#292215] border-[#F59E0B] ring-2 ring-[#F59E0B]/30'
                  : 'bg-[#18191E] border-[#3F3F46] hover:border-[#71717A]'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                <span className="font-mono text-[11px] font-bold text-white">HUB-01</span>
              </div>
              <div className="text-[10px] text-[#A1A1AA] truncate max-w-[85px]">Conduit Transit</div>
              <div className="font-mono text-[10px] text-[#FDE68A]">₹ 1.40 Cr</div>
            </button>

            {/* Layering Node 2 */}
            <button
              onClick={() => setSelectedNode(nodes[3])}
              className={`absolute top-[155px] left-[235px] p-2 rounded-md border text-left transition-all ${
                selectedNode.id === 'HUB-02'
                  ? 'bg-[#292215] border-[#F59E0B] ring-2 ring-[#F59E0B]/30'
                  : 'bg-[#18191E] border-[#3F3F46] hover:border-[#71717A]'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                <span className="font-mono text-[11px] font-bold text-white">HUB-02</span>
              </div>
              <div className="text-[10px] text-[#A1A1AA] truncate max-w-[85px]">Dispersal Split</div>
              <div className="font-mono text-[10px] text-[#FDE68A]">₹ 95.0 L</div>
            </button>

            {/* Destination Node 1 */}
            <button
              onClick={() => setSelectedNode(nodes[4])}
              className={`absolute top-[45px] right-[15px] p-2 rounded-md border text-left transition-all ${
                selectedNode.id === 'DEST-99'
                  ? 'bg-[#2A1719] border-[#EF4444] ring-2 ring-[#EF4444]/30'
                  : 'bg-[#18191E] border-[#7F1D1D] hover:border-[#DC2626]'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EF4444]"></span>
                <span className="font-mono text-[11px] font-bold text-white">DEST-99</span>
              </div>
              <div className="text-[10px] text-[#F87171] truncate max-w-[95px]">Venture Holding</div>
              <div className="font-mono text-[10px] text-[#EF4444]">₹ 1.62 Cr</div>
            </button>

            {/* Destination Node 2 */}
            <button
              onClick={() => setSelectedNode(nodes[5])}
              className={`absolute top-[145px] right-[15px] p-2 rounded-md border text-left transition-all ${
                activeFilter === 'suspicious' ? 'opacity-35 hover:opacity-100' : 'opacity-100'
              } ${
                selectedNode.id === 'DEST-42'
                  ? 'bg-[#1E293B] border-[#38BDF8] ring-2 ring-[#38BDF8]/20'
                  : 'bg-[#18191E] border-[#2E3036] hover:border-[#52525B]'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
                <span className="font-mono text-[11px] font-bold text-white">DEST-42</span>
              </div>
              <div className="text-[10px] text-[#A1A1AA] truncate max-w-[95px]">Asset Management</div>
              <div className="font-mono text-[10px] text-[#BAE6FD]">₹ 73.0 L</div>
            </button>
          </div>

          <div className="pt-2 border-t border-[#27272A] flex items-center justify-between text-[11px] text-[#71717A]">
            <span className="flex items-center gap-1 text-[#DC2626]">
              <AlertTriangle className="w-3 h-3" /> Circular Loop Identified: ACC-4109 ➔ HUB-02 ➔ ACC-4109
            </span>
            <span className="font-mono text-[10px]">Algorithm: Tarjan SCC & Flow Hierarchical DAG</span>
          </div>
        </div>

        {/* Forensic Inspector Sidebar (1 Col) */}
        <div className="border-t lg:border-t-0 lg:border-l border-[#27272A] bg-[#16171B] p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#27272A]">
              <span className="font-semibold text-white uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#38BDF8]" /> Entity Inspector
              </span>
              <span
                className={`font-mono text-[10px] px-1.5 py-0.5 rounded uppercase font-bold ${
                  selectedNode.risk === 'Critical'
                    ? 'bg-red-950 text-red-400 border border-red-800'
                    : selectedNode.risk === 'High'
                    ? 'bg-amber-950 text-amber-400 border border-amber-800'
                    : 'bg-blue-950 text-blue-400 border border-blue-800'
                }`}
              >
                {selectedNode.risk} Risk
              </span>
            </div>

            <div className="mt-3 space-y-2.5">
              <div>
                <span className="text-[10px] text-[#71717A] uppercase block">Selected Account</span>
                <div className="font-mono text-sm text-white font-bold">{selectedNode.id}</div>
                <div className="text-xs text-[#A1A1AA]">{selectedNode.name}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 bg-[#1F2025] p-2 rounded border border-[#27272A]">
                <div>
                  <span className="text-[10px] text-[#71717A] uppercase block">Cumulative Vol.</span>
                  <span className="font-mono text-xs font-semibold text-white">{selectedNode.amount}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#71717A] uppercase block">Topology Class</span>
                  <span className="capitalize font-mono text-xs text-[#E4E4E7]">{selectedNode.type} Node</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-[#71717A] uppercase block mb-1">Forensic Pattern Flag</span>
                <div className="bg-[#26171A] border border-[#DC2626]/40 p-2 rounded text-[11px] text-[#FCA5A5] leading-relaxed">
                  {selectedNode.flag}
                </div>
              </div>

              <div>
                <span className="text-[10px] text-[#71717A] uppercase block mb-1">Recommended Action</span>
                <ul className="space-y-1 text-[11px] text-[#D4D4D8]">
                  <li className="flex items-start gap-1">
                    <span className="text-[#38BDF8]">•</span> Issue Suspicious Transaction Report (STR)
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-[#38BDF8]">•</span> Freeze linked destination hop DEST-99
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-[#38BDF8]">•</span> Export hierarchical edge trail to CSV/JSON
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#27272A] mt-3">
            <div className="text-[10px] text-[#71717A] italic leading-tight">
              Illustrative forensic interface preview. Network visualization model designed for anti-money laundering investigations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
