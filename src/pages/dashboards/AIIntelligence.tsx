import React from 'react';
import { Link } from 'react-router-dom';

const AIIntelligence: React.FC = () => {
    return (
        <div className="overflow-hidden bg-[#121317] text-[#e3e2e8] font-body min-h-screen">
            {/* SideNavBar */}
            <aside className="w-64 h-screen fixed left-0 top-0 bg-slate-950/80 backdrop-blur-xl flex flex-col py-8 z-50 shadow-2xl shadow-black/50 font-headline text-sm tracking-wide">
                <div className="px-6 mb-10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg signature-pulse flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-primary text-sm">hub</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-blue-100 tracking-tighter">SupplyPulse</h1>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-tight">Global Intelligence</p>
                    </div>
                </div>

                <nav className="flex-1 space-y-1">
                    <Link className="text-slate-400 hover:text-slate-100 px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 ease-in-out transform active:scale-95" to="/overview">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span>Overview</span>
                    </Link>
                    <Link className="bg-blue-900/40 text-blue-200 border-l-4 border-cyan-400 font-semibold px-6 py-4 flex items-center gap-3 transition-all duration-300 ease-in-out transform active:scale-95" to="/ai-intelligence">
                        <span className="material-symbols-outlined">psychology</span>
                        <span>AI Intelligence</span>
                    </Link>
                    <Link className="text-slate-400 hover:text-slate-100 px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 ease-in-out transform active:scale-95" to="/operations">
                        <span className="material-symbols-outlined">conveyor_belt</span>
                        <span>Operations</span>
                    </Link>
                    <Link className="text-slate-400 hover:text-slate-100 px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 ease-in-out transform active:scale-95" to="/admin">
                        <span className="material-symbols-outlined">analytics</span>
                        <span>Admin Insights</span>
                    </Link>
                </nav>

                <div className="mt-auto pt-8 border-t border-white/5 space-y-1">
                    <span className="text-slate-400 hover:text-slate-100 px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 ease-in-out transform active:scale-95 cursor-pointer">
                        <span className="material-symbols-outlined">settings</span>
                        <span>Settings</span>
                    </span>
                    <span className="text-slate-400 hover:text-slate-100 px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 ease-in-out transform active:scale-95 cursor-pointer">
                        <span className="material-symbols-outlined">help_center</span>
                        <span>Support</span>
                    </span>
                </div>
            </aside>

            {/* Main Content Shell */}
            <main className="ml-64 min-h-screen flex flex-col">
                {/* TopNavBar */}
                <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-slate-900/50 backdrop-blur-md flex items-center justify-between px-8 z-40 shadow-[0_1px_0_0_rgba(255,255,255,0.05)] font-headline text-xs font-medium uppercase tracking-widest text-blue-100">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative max-w-md w-full">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                            <input
                                className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-xs w-full focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-500"
                                placeholder="Global supply search..."
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 mr-4 border-r border-white/10 pr-4">
                            <button className="text-slate-400 hover:text-blue-200 transition-colors cursor-pointer active:opacity-70">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <button className="text-slate-400 hover:text-blue-200 transition-colors cursor-pointer active:opacity-70">
                                <span className="material-symbols-outlined">hub</span>
                            </button>
                            <button className="text-slate-400 hover:text-blue-200 transition-colors cursor-pointer active:opacity-70">
                                <span className="material-symbols-outlined">language</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <div className="text-right">
                                <p className="text-blue-100 font-bold tracking-tight normal-case">Akshay</p>
                                <p className="text-[9px] text-slate-500 normal-case">Supply Admin</p>
                            </div>
                            <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-white/5 group-hover:border-cyan-400 transition-colors">
                                <img
                                    alt="Executive User Profile"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv-TaKqc8raYHTy3acVYmjDnfj31znd5vFrknpIbuQKNh7UXDAmrX1GHLu7u-9Y0WPYKqUj4QO_sFwXFvmRBHVnlbfcIsqiEK_7DXfA0_JWiJxFv3IKpvTyeWOTHMRwd7-EVlxFR71VROB0jlPLtR8xxYQSz5YV15DPPUOZx3-5mCjQCuGVP9rX-s4ujDXzJi4EAv9klG7wvjn6bDQx1EK3djfVGXONW3NkmjNJPQW6UFekiQ3ZjbZdFm9UOc94qc3Iz7CbYYy0oDM"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Canvas */}
                <div className="mt-16 p-8 space-y-8 flex-1 overflow-y-auto">
                    {/* Header Section */}
                    <header className="flex justify-between items-end">
                        <div>
                            <h2 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2 font-headline">AI Intelligence Hub</h2>
                            <p className="text-on-surface-variant max-w-2xl font-body">
                                Deep-reasoning agent active across 4,209 global nodes. Real-time telemetry processing at 12.4ms latency.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col items-end mr-4">
                                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">System Health</span>
                                <span className="text-lg font-mono text-on-surface">NOMINAL / 99.9%</span>
                            </div>
                            <button className="signature-pulse text-on-primary px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-cyan-900/20 hover:scale-[1.02] transition-transform">
                                <span className="material-symbols-outlined text-sm">bolt</span>
                                Optimize Flow
                            </button>
                        </div>
                    </header>

                    {/* AI Workflow Bento Grid */}
                    <div className="grid grid-cols-12 gap-6">
                        {/* 1. Perception Card */}
                        <div className="col-span-12 lg:col-span-4 glass-panel rounded-xl p-6 border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 shadow-[0_0_15px_rgba(76,214,251,0.5)]"></div>
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-1 block">Phase 01</span>
                                    <h3 className="text-xl font-bold text-on-surface font-headline">Perception</h3>
                                </div>
                                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-cyan-400">sensors</span>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="p-4 bg-surface-container-low rounded-lg">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-xs text-on-surface-variant">Incoming Telemetry</span>
                                        <span className="text-xs font-mono text-cyan-400">Active</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                            <div className="w-[85%] h-full signature-pulse"></div>
                                        </div>
                                        <span className="text-xs font-bold">85%</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-surface-container-low rounded-lg border-l-2 border-primary/20">
                                        <span className="text-[10px] text-on-surface-variant uppercase block">RFID Nodes</span>
                                        <span className="text-xl font-bold text-on-surface">14.2k</span>
                                    </div>
                                    <div className="p-4 bg-surface-container-low rounded-lg border-l-2 border-primary/20">
                                        <span className="text-[10px] text-on-surface-variant uppercase block">GPS Stream</span>
                                        <span className="text-xl font-bold text-on-surface">9.1k</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-surface-container-low/50 rounded-lg border border-white/5">
                                    <span className="material-symbols-outlined text-primary text-sm">cloud_sync</span>
                                    <p className="text-[11px] text-on-surface-variant italic">
                                        Integrating satellite weather data for North Atlantic sector...
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Reasoning Card */}
                        <div className="col-span-12 lg:col-span-8 glass-panel rounded-xl p-6 border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary shadow-[0_0_15px_rgba(187,198,226,0.3)]"></div>
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">Phase 02</span>
                                    <h3 className="text-xl font-bold text-on-surface font-headline">Reasoning &amp; Analysis</h3>
                                </div>
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary">psychology</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-cyan-400">
                                        <span className="material-symbols-outlined text-sm animate-pulse">model_training</span>
                                        <span className="text-xs font-bold tracking-widest uppercase">LLM Context Processing</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 node-glow"></div>
                                            <p className="text-sm text-on-surface-variant">
                                                Analyzing route alternatives for <span className="text-on-surface font-semibold">Vessel SP-409</span> due to port congestion.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-1.5 opacity-50"></div>
                                            <p className="text-sm text-on-surface-variant">
                                                Evaluating fuel consumption impact of 2-knot speed increase.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-1.5 opacity-50"></div>
                                            <p className="text-sm text-on-surface-variant">
                                                Simulating ripple effects on <span className="text-on-surface font-semibold">Tier 2 suppliers</span> in regional hub.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-surface-container-low p-5 rounded-xl border border-white/5">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Network Graph</span>
                                        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded">High Fidelity</span>
                                    </div>
                                    <div className="h-32 flex items-center justify-center relative">
                                        <img
                                            alt="Neural network visualization"
                                            className="w-full h-full object-cover rounded opacity-40 mix-blend-screen"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZQCIkQhDRQ8P2Fm-eBQ3ZRZBkVoi9pjRs_okQeVGLBJ63ElQWRvmbVku2Dhfbs72oiKTM4vjG8MwMRbap60oLilqJT8759OxLYFykgIWaTYWqaA_BwDX0bt9jXvICmQTXJ2NH088nwhOUbGHiQ_YZCbxrmEYFz0WMJcSq1Qf8cixusnbGTFmWE_uJU-KRv8s1PNWVfXdDRDgZD7R4VJPlvlgfqsCxoZTSvEXnrFrdtRZ38JpIswF38qPuut9L4KL8rImotsAbBuAf"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-[10px] font-mono text-cyan-400 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-cyan-400/30">
                                                Reasoning Engine v4.2 Active
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Decision Card */}
                        <div className="col-span-12 lg:col-span-7 glass-panel rounded-xl p-6 border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-secondary shadow-[0_0_15px_rgba(175,201,234,0.3)]"></div>
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1 block">Phase 03</span>
                                    <h3 className="text-xl font-bold text-on-surface font-headline">Decision Synthesis</h3>
                                </div>
                                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-secondary">balance</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="bg-surface-container-low p-4 rounded-xl text-center">
                                    <p className="text-[10px] text-on-surface-variant uppercase mb-1">Risk Score</p>
                                    <p className="text-2xl font-extrabold text-on-surface">0.12</p>
                                    <p className="text-[10px] text-cyan-400">ULTRALOW</p>
                                </div>
                                <div className="bg-surface-container-low p-4 rounded-xl text-center">
                                    <p className="text-[10px] text-on-surface-variant uppercase mb-1">Cost Impact</p>
                                    <p className="text-2xl font-extrabold text-on-surface">-₹10.3L</p>
                                    <p className="text-[10px] text-primary">SAVINGS</p>
                                </div>
                                <div className="bg-surface-container-low p-4 rounded-xl text-center">
                                    <p className="text-[10px] text-on-surface-variant uppercase mb-1">Confidence</p>
                                    <p className="text-2xl font-extrabold text-on-surface">98%</p>
                                    <p className="text-[10px] text-secondary">OPTIMAL</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Recommended Action Path</h4>
                                <div className="p-4 bg-primary-container rounded-xl border border-primary/20 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary">alt_route</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-on-surface">Reroute via Port of Savannah</p>
                                            <p className="text-xs text-on-surface-variant">Avoids 48-hour delay in Charleston hub.</p>
                                        </div>
                                    </div>
                                    <button className="bg-surface-container-highest px-4 py-2 rounded-lg text-xs font-bold hover:bg-white/10 transition-colors">
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 4. Action Card */}
                        <div className="col-span-12 lg:col-span-5 glass-panel rounded-xl p-6 border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-tertiary shadow-[0_0_15px_rgba(76,214,251,0.5)]"></div>
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest mb-1 block">Phase 04</span>
                                    <h3 className="text-xl font-bold text-on-surface font-headline">Executed Commands</h3>
                                </div>
                                <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-tertiary">rocket_launch</span>
                                </div>
                            </div>
                            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                <div className="p-4 bg-surface-container-low rounded-xl border-l-2 border-tertiary flex items-center gap-4 transition-all hover:bg-surface-container-high cursor-default">
                                    <div className="w-8 h-8 rounded bg-tertiary/20 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-tertiary text-lg">quick_phrases</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-on-surface">Sent alert to driver (Truck #291)</p>
                                        <p className="text-[10px] text-on-surface-variant">Automated SMS/Push: Route change confirmed.</p>
                                    </div>
                                    <span className="text-[10px] font-mono text-on-surface-variant whitespace-nowrap">2m ago</span>
                                </div>
                                <div className="p-4 bg-surface-container-low rounded-xl border-l-2 border-tertiary flex items-center gap-4 transition-all hover:bg-surface-container-high cursor-default">
                                    <div className="w-8 h-8 rounded bg-tertiary/20 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-tertiary text-lg">published_with_changes</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-on-surface">Rerouted carrier SP-9112</p>
                                        <p className="text-[10px] text-on-surface-variant">Manifest updated in Global Ledger.</p>
                                    </div>
                                    <span className="text-[10px] font-mono text-on-surface-variant whitespace-nowrap">14m ago</span>
                                </div>
                                <div className="p-4 bg-surface-container-low rounded-xl border-l-2 border-tertiary flex items-center gap-4 transition-all hover:bg-surface-container-high cursor-default">
                                    <div className="w-8 h-8 rounded bg-tertiary/20 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-tertiary text-lg">inventory_2</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-on-surface">Triggered Restock: Hub Alpha</p>
                                        <p className="text-[10px] text-on-surface-variant">Safety stock threshold hit (Item: CR-49).</p>
                                    </div>
                                    <span className="text-[10px] font-mono text-on-surface-variant whitespace-nowrap">31m ago</span>
                                </div>
                                <div className="p-4 bg-surface-container-low rounded-xl border-l-2 border-tertiary/30 flex items-center gap-4 transition-all hover:bg-surface-container-high cursor-default opacity-60">
                                    <div className="w-8 h-8 rounded bg-tertiary/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-tertiary text-lg">account_balance</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-on-surface">Settled Smart Contract: SVC-7</p>
                                        <p className="text-[10px] text-on-surface-variant">Payment released to maritime partner.</p>
                                    </div>
                                    <span className="text-[10px] font-mono text-on-surface-variant whitespace-nowrap">1h ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Global Map Perspective */}
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 glass-panel rounded-xl h-80 overflow-hidden relative border border-white/5">
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background to-transparent z-10"></div>
                            <div className="absolute top-6 left-6 z-20">
                                <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3 font-headline">Operational Vista</h4>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                                            <span className="text-[10px] font-medium">Real-time Telemetry Active</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                                            <span className="text-[10px] font-medium">Predicted Congestion Points</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-6 right-6 z-20 flex gap-2">
                                <button className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-white/10 text-on-surface hover:bg-primary hover:text-on-primary transition-colors">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                                <button className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-white/10 text-on-surface hover:bg-primary hover:text-on-primary transition-colors">
                                    <span className="material-symbols-outlined">remove</span>
                                </button>
                            </div>
                            <img
                                alt="Global logistics world map"
                                className="w-full h-full object-cover grayscale brightness-50 opacity-40"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpHKMUUJ9jXcp9IloUvuoGN7a-RqEBv7WPFLEsakg9mHz74zg5cMYooqLiPIdCHATP6g4Pgvsr1uEspAM9rr8yydPdit8l1Ss84SCivSR5DkMz9cE9NX1WOyLjY23_3h1ZeoCSxDnxEP4cJw-oMUg5zOj_BNKXwB-cQNexgKHIb4dqr5Kd2nfHf5uhB1sXHo79i9yEUa6BNJTXoKkhoO1pko3lCxk1qEgcisacHtXSEhjvRhwNjJqLmTHAiLMAkjj-zvUExbrhnX_L"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AIIntelligence;
