import React from 'react';
import { Link } from 'react-router-dom';

const Operations: React.FC = () => {
    return (
        <div className="bg-background text-on-surface flex min-h-screen font-body">
            {/* SideNavBar */}
            <aside className="w-64 h-screen fixed left-0 top-0 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-black/50 flex flex-col py-8 font-headline text-sm tracking-wide z-50">
                <div className="px-8 mb-10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-primary text-lg">hub</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-blue-100 tracking-tighter">SupplyPulse</h1>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500">Global Intelligence</p>
                    </div>
                </div>

                <nav className="flex-1 space-y-1">
                    <Link className="text-slate-400 hover:text-slate-100 px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 ease-in-out transform active:scale-95" to="/overview">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span>Overview</span>
                    </Link>
                    <Link className="text-slate-400 hover:text-slate-100 px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 ease-in-out transform active:scale-95" to="/ai-intelligence">
                        <span className="material-symbols-outlined">psychology</span>
                        <span>AI Intelligence</span>
                    </Link>
                    <Link className="bg-blue-900/40 text-blue-200 border-l-4 border-cyan-400 font-semibold px-6 py-4 flex items-center gap-3 transition-all duration-300" to="/operations">
                        <span className="material-symbols-outlined">conveyor_belt</span>
                        <span>Operations</span>
                    </Link>
                    <Link className="text-slate-400 hover:text-slate-100 px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 ease-in-out transform active:scale-95" to="/admin">
                        <span className="material-symbols-outlined">analytics</span>
                        <span>Admin Insights</span>
                    </Link>
                </nav>

                <div className="mt-auto space-y-1 pt-8 border-t border-white/5">
                    <span className="text-slate-400 hover:text-slate-100 px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 cursor-pointer">
                        <span className="material-symbols-outlined">settings</span>
                        <span>Settings</span>
                    </span>
                    <span className="text-slate-400 hover:text-slate-100 px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 cursor-pointer">
                        <span className="material-symbols-outlined">help_center</span>
                        <span>Support</span>
                    </span>
                </div>
            </aside>

            {/* Main Content Canvas */}
            <main className="flex-1 ml-64 min-h-screen flex flex-col relative overflow-hidden">
                {/* TopNavBar */}
                <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-slate-900/50 backdrop-blur-md flex items-center justify-between px-8 z-40 shadow-[0_1px_0_0_rgba(255,255,255,0.05)] font-headline text-xs font-medium uppercase tracking-widest text-blue-100">
                    <div className="flex items-center gap-6 flex-1">
                        <div className="relative w-full max-w-md">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
                            <input
                                className="w-full bg-surface-container-lowest border-none rounded-lg pl-10 pr-4 py-2 text-on-surface focus:ring-1 focus:ring-primary-container transition-all"
                                placeholder="Search operational entities..."
                                type="text"
                            />
                        </div>
                        <div className="flex items-center gap-4 text-slate-400">
                            <span className="text-cyan-400 border-b-2 border-cyan-400 py-5">Node Status</span>
                            <span className="hover:text-blue-200 cursor-pointer py-5 transition-colors">Queue Monitor</span>
                            <span className="hover:text-blue-200 cursor-pointer py-5 transition-colors">Telemetry</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 pl-6">
                        <div className="flex items-center gap-4">
                            <button className="relative hover:text-blue-200 transition-colors cursor-pointer active:opacity-70">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute -top-1 -right-1 w-2 h-2 bg-tertiary rounded-full"></span>
                            </button>
                            <button className="hover:text-blue-200 transition-colors cursor-pointer active:opacity-70">
                                <span className="material-symbols-outlined">hub</span>
                            </button>
                            <button className="hover:text-blue-200 transition-colors cursor-pointer active:opacity-70">
                                <span className="material-symbols-outlined">language</span>
                            </button>
                        </div>
                        <div className="h-8 w-[1px] bg-white/10 mx-2"></div>
                        <div className="flex items-center gap-3">
                            <span className="text-right hidden lg:block">
                                <p className="text-[10px] text-on-surface leading-none font-bold">AKSHAY</p>
                                <p className="text-[9px] text-slate-500 mt-1">SUPPLY ADMIN</p>
                            </span>
                            <img
                                alt="Executive User Profile"
                                className="w-10 h-10 rounded-lg object-cover ring-2 ring-white/5"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_AwLmM8Ned9kz4Fxbw0vcmO9hIYIyy0VP5WYzXrev3sXRyeMoxjdaHUPTg3itR9ssKAYjBC379Y5Ad6ejtt7emOXhnbn7xP02_4LS-LbOPgKMt6x9Y-jZupT-T05UmXhpP_Y4KtsG1DROz8dWOIO3NmblolBQI5xLX5wPCmLKL0ma9nZSqCGp-AxfOOjeMG7R6jA0Rv6QGJwg6pmdT_3Mj8yeiawp2lZ8jLjKtEKRXS7wLyZwWfywJtF2sqi2kV4Lu6VJYcb-Wk1g"
                            />
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="mt-16 p-8 space-y-8 flex-1 overflow-y-auto">
                    {/* Page Header */}
                    <div className="flex justify-between items-end">
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline">Global Operations</h2>
                            <p className="text-on-surface-variant font-medium mt-1">Real-time observability and cross-region node management</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 rounded-lg bg-surface-container-high border border-outline-variant/20 flex items-center gap-2 hover:bg-surface-variant transition-colors text-sm font-semibold">
                                <span className="material-symbols-outlined text-sm">sync</span>
                                Force Refresh
                            </button>
                            <button className="px-6 py-2 rounded-lg bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 flex items-center gap-2 hover:opacity-90 transition-all text-sm">
                                <span className="material-symbols-outlined text-sm">bolt</span>
                                Execute Override
                            </button>
                        </div>
                    </div>

                    {/* Dashboard Bento Grid */}
                    <div className="grid grid-cols-12 gap-6">
                        {/* Queue Depth Large Metric */}
                        <div className="col-span-12 lg:col-span-5 glass-panel rounded-xl p-8 flex flex-col justify-between overflow-hidden relative">
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Global Queue Depth</span>
                                    <span className="px-2 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded">LIVE</span>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <h3 className="text-6xl font-extrabold text-on-surface tracking-tighter font-headline">14,282</h3>
                                    <span className="text-tertiary flex items-center text-sm font-bold">
                                        <span className="material-symbols-outlined text-sm">trending_up</span>
                                        12.4%
                                    </span>
                                </div>
                                <p className="text-on-surface-variant text-sm mt-2 font-medium">Items pending resolution across 14 zones</p>
                            </div>
                            {/* Decorative Radial Gauge */}
                            <div className="absolute -bottom-12 -right-12 w-64 h-64 opacity-20">
                                <div className="w-full h-full rounded-full border-[12px] border-tertiary/30 relative">
                                    <div className="absolute inset-0 rounded-full border-[12px] border-tertiary border-t-transparent border-l-transparent rotate-45"></div>
                                </div>
                            </div>
                            <div className="mt-12 h-32 flex items-end gap-1.5">
                                <div className="flex-1 bg-surface-container-highest rounded-t h-1/2"></div>
                                <div className="flex-1 bg-surface-container-highest rounded-t h-3/4"></div>
                                <div className="flex-1 bg-surface-container-highest rounded-t h-2/3"></div>
                                <div className="flex-1 bg-tertiary/40 rounded-t h-[90%]"></div>
                                <div className="flex-1 bg-tertiary rounded-t h-full"></div>
                                <div className="flex-1 bg-tertiary rounded-t h-4/5"></div>
                                <div className="flex-1 bg-surface-container-highest rounded-t h-1/2"></div>
                                <div className="flex-1 bg-surface-container-highest rounded-t h-1/3"></div>
                            </div>
                        </div>

                        {/* Processing Metrics Chart Area */}
                        <div className="col-span-12 lg:col-span-7 glass-panel rounded-xl p-6">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h4 className="text-lg font-bold text-on-surface font-headline">Throughput Efficiency</h4>
                                    <p className="text-xs text-on-surface-variant">Shipments processed per hour vs target</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-2 text-[10px] font-bold">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span> ACTUAL
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-bold">
                                        <span className="w-2 h-2 rounded-full bg-outline-variant"></span> TARGET
                                    </div>
                                </div>
                            </div>
                            <div className="h-64 relative">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
                                    <defs>
                                        <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#bbc6e2" stopOpacity={0.3} />
                                            <stop offset="100%" stopColor="#bbc6e2" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,150 L100,140 L200,160 L300,130 L400,120 L500,145 L600,110 L700,90 L800,105" fill="none" stroke="#44474c" strokeDasharray="4,4" strokeWidth="2" />
                                    <path d="M0,160 Q100,140 200,170 T400,130 T600,90 T800,110" fill="none" stroke="#bbc6e2" strokeLinecap="round" strokeWidth="4" />
                                    <path d="M0,160 Q100,140 200,170 T400,130 T600,90 T800,110 V200 H0 Z" fill="url(#chartFill)" />
                                </svg>
                                <div className="absolute inset-0 flex justify-between items-end pb-2 px-2 text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                                    <span>00:00</span>
                                    <span>04:00</span>
                                    <span>08:00</span>
                                    <span>12:00</span>
                                    <span>16:00</span>
                                    <span>20:00</span>
                                </div>
                            </div>
                        </div>

                        {/* Worker Status Grid */}
                        <div className="col-span-12 lg:col-span-8 space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Worker Node Availability</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {/* Worker Card 1 */}
                                <div className="glass-panel p-4 rounded-xl border-l-4 border-emerald-500">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="material-symbols-outlined text-emerald-500">robot_2</span>
                                        <span className="text-[10px] font-bold text-emerald-500">ACTIVE</span>
                                    </div>
                                    <p className="text-sm font-bold">SP-AUTO-01</p>
                                    <div className="mt-2 w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                                        <div className="bg-emerald-500 h-full w-[85%]"></div>
                                    </div>
                                    <p className="text-[10px] text-on-surface-variant mt-2 font-medium">Load: 85%</p>
                                </div>
                                {/* Worker Card 2 */}
                                <div className="glass-panel p-4 rounded-xl border-l-4 border-emerald-500">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="material-symbols-outlined text-emerald-500">robot_2</span>
                                        <span className="text-[10px] font-bold text-emerald-500">ACTIVE</span>
                                    </div>
                                    <p className="text-sm font-bold">SP-AUTO-02</p>
                                    <div className="mt-2 w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                                        <div className="bg-emerald-500 h-full w-[42%]"></div>
                                    </div>
                                    <p className="text-[10px] text-on-surface-variant mt-2 font-medium">Load: 42%</p>
                                </div>
                                {/* Worker Card 3 */}
                                <div className="glass-panel p-4 rounded-xl border-l-4 border-amber-500">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="material-symbols-outlined text-amber-500">person</span>
                                        <span className="text-[10px] font-bold text-amber-500">BUSY</span>
                                    </div>
                                    <p className="text-sm font-bold">OP-HUMAN-X</p>
                                    <div className="mt-2 w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                                        <div className="bg-amber-500 h-full w-[98%]"></div>
                                    </div>
                                    <p className="text-[10px] text-on-surface-variant mt-2 font-medium">Handling: 12 tickets</p>
                                </div>
                                {/* Worker Card 4 */}
                                <div className="glass-panel p-4 rounded-xl border-l-4 border-slate-600">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="material-symbols-outlined text-slate-500">smart_toy</span>
                                        <span className="text-[10px] font-bold text-slate-500">STANDBY</span>
                                    </div>
                                    <p className="text-sm font-bold">SP-AUTO-03</p>
                                    <div className="mt-2 w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                                        <div className="bg-slate-600 h-full w-[0%]"></div>
                                    </div>
                                    <p className="text-[10px] text-on-surface-variant mt-2 font-medium">Idle for 12m</p>
                                </div>
                            </div>

                            {/* System Uptime */}
                            <div className="glass-panel rounded-xl p-6 overflow-hidden">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-sm font-bold text-on-surface font-headline">Microservice Health (24h)</h4>
                                    <span className="text-[10px] text-on-surface-variant font-bold uppercase">Average Uptime: 99.98%</span>
                                </div>
                                <div className="space-y-4">
                                    {/* Ingest Service */}
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-bold text-on-surface-variant w-32 uppercase">Ingest Service</span>
                                        <div className="flex-1 flex gap-[2px]">
                                            {Array.from({ length: 20 }).map((_, i) => (
                                                <div key={`ingest-${i}`} className={`h-4 flex-1 rounded-[2px] ${i === 6 ? 'bg-amber-500/80' : 'bg-emerald-500/80'}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Neural Compute */}
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-bold text-on-surface-variant w-32 uppercase">Neural Compute</span>
                                        <div className="flex-1 flex gap-[2px]">
                                            {Array.from({ length: 20 }).map((_, i) => (
                                                <div key={`neural-${i}`} className="h-4 flex-1 bg-emerald-500/80 rounded-[2px]"></div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Relay Nodes */}
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-bold text-on-surface-variant w-32 uppercase">Relay Nodes</span>
                                        <div className="flex-1 flex gap-[2px]">
                                            {Array.from({ length: 20 }).map((_, i) => (
                                                <div key={`relay-${i}`} className={`h-4 flex-1 rounded-[2px] ${(i === 12 || i === 13) ? 'bg-error/80' : 'bg-emerald-500/80'}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Live Logs Panel */}
                        <div className="col-span-12 lg:col-span-4 glass-panel rounded-xl flex flex-col h-full border-t-2 border-primary/20">
                            <div className="p-4 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span className="text-xs font-bold text-on-surface uppercase tracking-widest">Live Telemetry</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-500 text-sm cursor-pointer">fullscreen</span>
                            </div>
                            <div className="flex-1 p-4 font-mono text-[11px] leading-relaxed custom-scrollbar overflow-y-auto max-h-[500px]">
                                <div className="space-y-2">
                                    <div className="flex gap-3">
                                        <span className="text-slate-600">14:22:01</span>
                                        <span className="text-primary font-bold">[INGEST]</span>
                                        <span className="text-slate-300">Packet received from SIN-NODE-12</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-slate-600">14:22:02</span>
                                        <span className="text-cyan-400 font-bold">[AI_PRO]</span>
                                        <span className="text-slate-300">Route optimization confirmed (Hash: 0x24F...)</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-slate-600">14:22:04</span>
                                        <span className="text-emerald-500 font-bold">[SYS]</span>
                                        <span className="text-slate-300">Auth handshake successful for SP-AUTO-01</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-slate-600">14:22:12</span>
                                        <span className="text-amber-500 font-bold">[WARN]</span>
                                        <span className="text-slate-300">Latency spike detected in Frankfurt relay</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-slate-600">14:22:15</span>
                                        <span className="text-primary font-bold">[INGEST]</span>
                                        <span className="text-slate-300">Batch processing started for EU-WEST-1</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-slate-600">14:22:18</span>
                                        <span className="text-emerald-500 font-bold">[SYS]</span>
                                        <span className="text-slate-300">Database reconciliation (14,282 entries)</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-slate-600">14:22:21</span>
                                        <span className="text-primary font-bold">[INGEST]</span>
                                        <span className="text-slate-300">Packet received from JFK-TERM-09</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-slate-600">14:22:23</span>
                                        <span className="text-primary font-bold">[INGEST]</span>
                                        <span className="text-slate-300">Validation complete for shipment #AF-9921</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-slate-600">14:22:25</span>
                                        <span className="text-cyan-400 font-bold">[AI_PRO]</span>
                                        <span className="text-slate-300">Predictive analysis: Weather delay LHR (0.82 prob)</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-slate-600">14:22:29</span>
                                        <span className="text-slate-300">... and 244 more events in buffer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 bg-surface-container-highest/50 border-t border-white/5">
                                <div className="bg-surface-container-lowest rounded-md px-3 py-1.5 flex items-center gap-2">
                                    <span className="text-primary text-xs font-bold">$</span>
                                    <input
                                        className="bg-transparent border-none focus:ring-0 text-[11px] font-mono text-on-surface w-full"
                                        placeholder="Send operational command..."
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-tertiary/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
            </main>
        </div>
    );
};

export default Operations;
