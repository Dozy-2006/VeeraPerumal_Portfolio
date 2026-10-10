import React, { useState } from 'react';
import { Volume2, Sparkles, CheckCircle2, UserCheck, Activity, Terminal, Clock, FileText } from 'lucide-react';

export const AiNotetakerMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'summary' | 'decisions' | 'transcript'>('summary');

  return (
    <div className="w-full bg-[#18191D] text-[#E4E4E7] rounded-lg border border-[#27272A] overflow-hidden shadow-sm font-sans text-xs">
      {/* Desktop Application Window Bar */}
      <div className="bg-[#121316] px-3 py-2 border-b border-[#27272A] flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* OS Window Buttons */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block"></span>
          </div>
          <span className="font-mono text-[11px] text-[#A1A1AA] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
            AI NoteTaker v2.0 • Desktop Assistant
            <span className="text-[#52525B]">|</span>
            <span className="text-[#34D399] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse"></span>
              Stereo Mix Loopback Active
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-[#71717A]">
          <span>Python 3.11</span>
          <span>•</span>
          <span>Gemini 2.0 Flash</span>
        </div>
      </div>

      {/* Main Grid: Pipeline HUD (Left) & Gemini Structured Output (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px]">
        {/* Left: Real-Time Capture Pipeline (5 Cols) */}
        <div className="lg:col-span-5 p-3.5 border-b lg:border-b-0 lg:border-r border-[#27272A] bg-[#141518] flex flex-col justify-between space-y-3">
          {/* Stereo Mix Audio Pipeline Card */}
          <div className="bg-[#1B1C22] p-2.5 rounded border border-[#27272A]">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                Audio Loopback (Stereo Mix)
              </span>
              <span className="font-mono text-[10px] text-[#34D399] bg-[#064E3B]/40 px-1.5 py-0.5 rounded border border-[#047857]/40">
                0% Mic Echo
              </span>
            </div>
            
            {/* Live Audio Visualizer Waveform Bar */}
            <div className="flex items-end gap-1 h-6 px-1 bg-[#101114] rounded py-1 border border-[#27272A]/50">
              {[40, 75, 25, 90, 60, 30, 85, 95, 45, 60, 80, 50, 70, 35, 90, 45, 65, 85, 30, 55].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#3158A8] rounded-t-sm transition-all duration-300"
                  style={{ height: `${height}%`, opacity: height > 70 ? 1 : 0.6 }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-[#71717A] mt-1.5">
              <span>Source: Google Meet / Zoom</span>
              <span>Rate: 44.1 kHz • Dual Channel</span>
            </div>
          </div>

          {/* YOLO Computer Vision Participant Tracker */}
          <div className="bg-[#1B1C22] p-2.5 rounded border border-[#27272A]">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-[#A78BFA]" />
                YOLO Participant Detection
              </span>
              <span className="font-mono text-[10px] text-[#A78BFA] bg-[#4C1D95]/30 px-1.5 py-0.5 rounded border border-[#7C3AED]/40">
                3 Active Detected
              </span>
            </div>

            {/* Visual HUD Simulation */}
            <div className="relative h-20 bg-[#0F1013] rounded border border-[#27272A] overflow-hidden flex items-center justify-around px-2">
              {/* Detection Box 1 */}
              <div className="relative border border-[#38BDF8] bg-[#38BDF8]/10 rounded px-2 py-1 text-center">
                <span className="absolute -top-3 left-1 bg-[#0284C7] text-white font-mono text-[8px] px-1 rounded">
                  person 0.94
                </span>
                <span className="text-[10px] text-[#E0F2FE] font-medium">Speaker 01</span>
                <div className="text-[8px] text-[#7DD3FC] font-mono">Present</div>
              </div>

              {/* Detection Box 2 */}
              <div className="relative border border-[#34D399] bg-[#34D399]/10 rounded px-2 py-1 text-center">
                <span className="absolute -top-3 left-1 bg-[#059669] text-white font-mono text-[8px] px-1 rounded">
                  person 0.91
                </span>
                <span className="text-[10px] text-[#D1FAE5] font-medium">Lead Arch</span>
                <div className="text-[8px] text-[#6EE7B7] font-mono">Active Talk</div>
              </div>

              {/* Detection Box 3 */}
              <div className="relative border border-[#A78BFA] bg-[#A78BFA]/10 rounded px-2 py-1 text-center">
                <span className="absolute -top-3 left-1 bg-[#7C3AED] text-white font-mono text-[8px] px-1 rounded">
                  person 0.88
                </span>
                <span className="text-[10px] text-[#EDE9FE] font-medium">Reviewer</span>
                <div className="text-[8px] text-[#C4B5FD] font-mono">Listening</div>
              </div>
            </div>
          </div>

          {/* Real-time Threaded STT Log */}
          <div className="bg-[#101114] p-2 rounded border border-[#27272A] font-mono text-[10px] text-[#A1A1AA] space-y-1">
            <div className="flex items-center gap-1.5 text-[#71717A] text-[9px] border-b border-[#27272A] pb-1">
              <Clock className="w-3 h-3" /> Threaded Speech-to-Text Stream
            </div>
            <div className="truncate">
              <span className="text-[#38BDF8]">[14:02:18] Speaker 01:</span> "Let's review the API token limits..."
            </div>
            <div className="truncate">
              <span className="text-[#34D399]">[14:02:35] Lead Arch:</span> "Gemini 2.0 Flash handles the parser latency well."
            </div>
          </div>
        </div>

        {/* Right: Gemini 2.0 Flash Intelligence Tab (7 Cols) */}
        <div className="lg:col-span-7 p-3.5 bg-[#18191D] flex flex-col justify-between">
          <div>
            {/* Tab Navigation */}
            <div className="flex items-center justify-between pb-2 border-b border-[#27272A]">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab('summary')}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1 transition-colors ${
                    activeTab === 'summary' ? 'bg-[#3158A8] text-white' : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-[#93C5FD]" />
                  Gemini Summary
                </button>
                <button
                  onClick={() => setActiveTab('decisions')}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1 transition-colors ${
                    activeTab === 'decisions' ? 'bg-[#3158A8] text-white' : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <CheckCircle2 className="w-3 h-3 text-[#86EFAC]" />
                  Key Decisions (4)
                </button>
                <button
                  onClick={() => setActiveTab('transcript')}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium flex items-center gap-1 transition-colors ${
                    activeTab === 'transcript' ? 'bg-[#3158A8] text-white' : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <FileText className="w-3 h-3 text-[#FDE047]" />
                  Synchronized Logs
                </button>
              </div>

              <span className="font-mono text-[10px] text-[#34D399] flex items-center gap-1">
                <Activity className="w-3 h-3" /> API Latency: 320ms
              </span>
            </div>

            {/* Tab Content */}
            <div className="mt-3">
              {activeTab === 'summary' && (
                <div className="space-y-2.5">
                  <div className="bg-[#1F2026] p-2.5 rounded border border-[#27272A]">
                    <div className="text-[10px] text-[#38BDF8] uppercase font-mono font-semibold mb-1">
                      Meeting Context & Scope
                    </div>
                    <div className="text-xs text-[#E4E4E7] leading-relaxed">
                      Architecture evaluation for automated meeting documentation. Synchronized audio loopback capture
                      successfully parsed into structured JSON schemas without feedback distortion.
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[10px] text-[#A1A1AA] uppercase font-mono tracking-wider">
                      Core Discussion Items
                    </div>
                    <ul className="space-y-1 text-xs text-[#D4D4D8]">
                      <li className="flex items-start gap-2 bg-[#141518] p-1.5 rounded border border-[#27272A]/60">
                        <span className="text-[#38BDF8] font-mono mt-0.5">01</span>
                        <span>Stereo Mix loopback successfully isolates system output from local room ambient audio.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141518] p-1.5 rounded border border-[#27272A]/60">
                        <span className="text-[#38BDF8] font-mono mt-0.5">02</span>
                        <span>YOLO participant detection tracks video participant count with confidence &gt; 90%.</span>
                      </li>
                      <li className="flex items-start gap-2 bg-[#141518] p-1.5 rounded border border-[#27272A]/60">
                        <span className="text-[#38BDF8] font-mono mt-0.5">03</span>
                        <span>Gemini 2.0 Flash prompt produces deterministic action items and timestamped milestones.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'decisions' && (
                <div className="space-y-2">
                  <div className="text-[10px] text-[#A1A1AA] uppercase font-mono tracking-wider">
                    Extracted Action Items & Assigned Roles
                  </div>
                  <div className="space-y-1.5">
                    <div className="bg-[#15231E] border border-[#059669]/40 p-2 rounded flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-white">Deploy audio buffer queue optimization</div>
                        <div className="text-[10px] text-[#A7F3D0]">Assigned to: Speaker 01 • Target: 100ms chunk processing</div>
                      </div>
                    </div>
                    <div className="bg-[#15231E] border border-[#059669]/40 p-2 rounded flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-white">Export structured summary to markdown & JSON</div>
                        <div className="text-[10px] text-[#A7F3D0]">Assigned to: Lead Arch • Target: Local file persistence</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'transcript' && (
                <div className="bg-[#121316] p-2.5 rounded border border-[#27272A] font-mono text-[11px] text-[#A1A1AA] space-y-1.5 max-h-[160px] overflow-y-auto">
                  <div className="text-[#38BDF8]">[14:00:02] Session initialized. Virtual device: Stereo Mix loopback.</div>
                  <div>[14:00:15] Audio stream verified. 0 dropped frames.</div>
                  <div>[14:01:10] YOLO model yolov8n.pt loaded (3 classes tracking).</div>
                  <div className="text-[#34D399]">[14:02:18] Google Gemini 2.0 Flash stream response received (200 OK).</div>
                  <div>[14:03:00] Timestamped summary written to meeting_log_2024.json.</div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-2.5 border-t border-[#27272A] mt-3 flex items-center justify-between text-[10px] text-[#71717A]">
            <span className="italic">
              Illustrative interface preview. Desktop assistant pipeline combining Python, Stereo Mix, YOLO & Gemini.
            </span>
            <span className="font-mono text-[#38BDF8]">Tkinter GUI</span>
          </div>
        </div>
      </div>
    </div>
  );
};
