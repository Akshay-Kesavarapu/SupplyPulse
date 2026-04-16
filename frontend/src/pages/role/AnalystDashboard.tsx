import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AnalystDashboard: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background text-on-surface flex min-h-screen font-body">
            {/* SideNavBar */}
            <aside className="w-64 h-screen fixed left-0 top-0 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-black/50 flex flex-col py-8 font-headline text-sm tracking-wide z-50">
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
                    <Link className="text-slate-400 hover:text-slate-100 px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 ease-in-out transform active:scale-95" to="/ai-intelligence">
                        <span className="material-symbols-outlined">psychology</span>
                        <span>AI Intelligence</span>
                    </Link>
                    <Link className="text-slate-400 hover:text-slate-100 px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 ease-in-out transform active:scale-95" to="/operations">
                        <span className="material-symbols-outlined">conveyor_belt</span>
                        <span>Operations</span>
                    </Link>
                    <Link className="bg-blue-900/40 text-blue-200 border-l-4 border-cyan-400 font-semibold px-6 py-4 flex items-center gap-3 transition-all duration-300 ease-in-out transform active:scale-95" to="/analyst">
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

            {/* Main Content */}
            <main className="flex-1 ml-64 min-h-screen flex flex-col relative overflow-hidden">
                {/* TopNavBar */}
                <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-slate-900/50 backdrop-blur-md flex items-center justify-between px-8 z-40 shadow-[0_1px_0_0_rgba(255,255,255,0.05)] font-headline text-xs font-medium uppercase tracking-widest text-blue-100">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative max-w-md w-full">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                            <input
                                className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-xs w-full focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-500"
                                placeholder="Search analytics data..."
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
                                <p className="text-[10px] text-on-surface leading-none font-bold">KARTHIK</p>
                                <p className="text-[9px] text-slate-500 mt-1">SR. ANALYST</p>
                            </div>
                            <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-white/5 group-hover:border-cyan-400 transition-colors">
                                <img
                                    alt="Analyst User Profile"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_AwLmM8Ned9kz4Fxbw0vcmO9hIYIyy0VP5WYzXrev3sXRyeMoxjdaHUPTg3itR9ssKAYjBC379Y5Ad6ejtt7emOXhnbn7xP02_4LS-LbOPgKMt6x9Y-jZupT-T05UmXhpP_Y4KtsG1DROz8dWOIO3NmblolBQI5xLX5wPCmLKL0ma9nZSqCGp-AxfOOjeMG7R6jA0Rv6QGJwg6pmdT_3Mj8yeiawp2lZ8jLjKtEKRXS7wLyZwWfywJtF2sqi2kV4Lu6VJYcb-Wk1g"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="mt-16 p-8 space-y-8 flex-1 overflow-y-auto">
                    {/* Page Header */}
                    <div className="flex justify-between items-end">
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline">Sovereign Intelligence</h2>
                            <p className="text-on-surface-variant font-medium mt-1">Predictive analytics and deep supply chain insights.</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => navigate('/admin')}
                                className="px-5 py-2.5 rounded-lg bg-surface-container-high border border-outline-variant/20 text-on-surface-variant font-bold flex items-center gap-2 text-xs uppercase tracking-widest hover:bg-surface-variant transition-colors"
                            >
                                <span className="material-symbols-outlined text-sm">shield</span>
                                Admin View
                            </button>
                            <button className="px-5 py-2.5 rounded-lg bg-secondary-container text-blue-100 font-bold flex items-center gap-2 text-xs uppercase tracking-widest">
                                <span className="material-symbols-outlined text-sm">query_stats</span>
                                Analyst View
                            </button>
                        </div>
                    </div>

                    {/* Analyst Bento Grid */}
                    <div className="grid grid-cols-12 gap-6">
                        {/* Demand Forecast */}
                        <div className="col-span-12 lg:col-span-8 glass-panel rounded-xl p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-lg font-bold text-on-surface font-headline">Demand Forecast Model</h3>
                                    <p className="text-xs text-on-surface-variant">AI-powered 30-day prediction with 96.8% accuracy</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-2 text-[10px] font-bold">
                                        <span className="w-2 h-2 rounded-full bg-tertiary"></span> PREDICTED
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-bold">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span> ACTUAL
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-bold">
                                        <span className="w-2 h-2 rounded-full bg-outline-variant"></span> BASELINE
                                    </div>
                                </div>
                            </div>
                            <div className="h-56 relative">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 180">
                                    <defs>
                                        <linearGradient id="demandFill" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#4cd6fb" stopOpacity={0.15} />
                                            <stop offset="100%" stopColor="#4cd6fb" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    {/* Baseline */}
                                    <path d="M0,120 L800,120" fill="none" stroke="#44474c" strokeDasharray="4,4" strokeWidth="1" />
                                    {/* Actual */}
                                    <path d="M0,140 Q80,130 160,125 T320,110 T480,95 T640,100 T800,85" fill="none" stroke="#bbc6e2" strokeWidth="3" strokeLinecap="round" />
                                    {/* Predicted */}
                                    <path d="M0,135 Q80,125 160,120 T320,105 T480,90 T640,80 T800,60" fill="none" stroke="#4cd6fb" strokeWidth="3" strokeLinecap="round" strokeDasharray="8,4" />
                                    <path d="M0,135 Q80,125 160,120 T320,105 T480,90 T640,80 T800,60 V180 H0 Z" fill="url(#demandFill)" />
                                </svg>
                                <div className="absolute inset-0 flex justify-between items-end pb-2 px-2 text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                                    <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
                                </div>
                            </div>
                        </div>

                        {/* Prediction Confidence */}
                        <div className="col-span-12 lg:col-span-4 glass-panel rounded-xl p-6 border border-white/5 flex flex-col justify-between">
                            <div>
                                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest block mb-2">Model Confidence</span>
                                <h3 className="text-5xl font-extrabold text-on-surface tracking-tighter font-headline">96.8<span className="text-2xl text-tertiary">%</span></h3>
                                <p className="text-xs text-on-surface-variant mt-2">R² Score across 14 feature dimensions</p>
                            </div>
                            <div className="space-y-3 mt-6">
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold mb-1">
                                        <span className="text-on-surface-variant">Demand Signal</span>
                                        <span className="text-tertiary">98.1%</span>
                                    </div>
                                    <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                        <div className="h-full w-[98%] bg-tertiary rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold mb-1">
                                        <span className="text-on-surface-variant">Weather Impact</span>
                                        <span className="text-primary">91.4%</span>
                                    </div>
                                    <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                        <div className="h-full w-[91%] bg-primary rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold mb-1">
                                        <span className="text-on-surface-variant">Geopolitical Risk</span>
                                        <span className="text-secondary">87.2%</span>
                                    </div>
                                    <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                        <div className="h-full w-[87%] bg-secondary rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Supply Chain Bottleneck Analysis */}
                        <div className="col-span-12 lg:col-span-6 glass-panel rounded-xl p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-amber-500">warning</span>
                                    <h3 className="text-sm font-bold text-on-surface font-headline uppercase tracking-widest">Bottleneck Analysis</h3>
                                </div>
                                <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-[10px] font-bold rounded uppercase">5 Active</span>
                            </div>
                            <div className="space-y-3 custom-scrollbar max-h-[280px] overflow-y-auto pr-2">
                                <div className="p-4 bg-surface-container-low rounded-xl border-l-2 border-error hover:bg-surface-container-high transition-colors">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="text-sm font-bold text-on-surface">Suez Canal Congestion</p>
                                        <span className="text-[10px] font-bold text-error uppercase">Critical</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant">48-hour delay affecting 23 vessels. Est. cost impact: ₹35Cr</p>
                                    <div className="mt-2 flex gap-2">
                                        <span className="px-2 py-0.5 bg-error/10 text-error text-[9px] rounded font-bold">MARITIME</span>
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] rounded font-bold">EU-ASIA</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-surface-container-low rounded-xl border-l-2 border-amber-500 hover:bg-surface-container-high transition-colors">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="text-sm font-bold text-on-surface">Shanghai Port Backlog</p>
                                        <span className="text-[10px] font-bold text-amber-500 uppercase">Elevated</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant">Container dwell time up 34%. 8 vessels queued for berth allocation.</p>
                                    <div className="mt-2 flex gap-2">
                                        <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-[9px] rounded font-bold">PORT</span>
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] rounded font-bold">APAC</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-surface-container-low rounded-xl border-l-2 border-primary hover:bg-surface-container-high transition-colors">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="text-sm font-bold text-on-surface">Frankfurt Relay Latency</p>
                                        <span className="text-[10px] font-bold text-primary uppercase">Monitoring</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant">Network relay node showing intermittent 200ms spikes.</p>
                                    <div className="mt-2 flex gap-2">
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] rounded font-bold">NETWORK</span>
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] rounded font-bold">EMEA</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cost Optimization Insights */}
                        <div className="col-span-12 lg:col-span-6 glass-panel rounded-xl p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-tertiary">savings</span>
                                    <h3 className="text-sm font-bold text-on-surface font-headline uppercase tracking-widest">Cost Optimization</h3>
                                </div>
                                <span className="text-[10px] text-tertiary font-bold">THIS QUARTER</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-surface-container-low p-4 rounded-xl text-center">
                                    <p className="text-[10px] text-on-surface-variant uppercase mb-1 font-bold">Saved YTD</p>
                                    <p className="text-2xl font-extrabold text-tertiary font-headline">₹23.4Cr</p>
                                </div>
                                <div className="bg-surface-container-low p-4 rounded-xl text-center">
                                    <p className="text-[10px] text-on-surface-variant uppercase mb-1 font-bold">Cost / Unit</p>
                                    <p className="text-2xl font-extrabold text-on-surface font-headline">₹1,186</p>
                                    <p className="text-[10px] text-tertiary">↓ 8.3%</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-tertiary text-sm">local_shipping</span>
                                        <span className="text-xs font-bold text-on-surface">Route Consolidation</span>
                                    </div>
                                    <span className="text-xs text-tertiary font-bold">-₹7.4Cr</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm">ev_station</span>
                                        <span className="text-xs font-bold text-on-surface">Fuel Optimization AI</span>
                                    </div>
                                    <span className="text-xs text-tertiary font-bold">-₹10Cr</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-secondary text-sm">speed</span>
                                        <span className="text-xs font-bold text-on-surface">Predictive Scheduling</span>
                                    </div>
                                    <span className="text-xs text-tertiary font-bold">-₹5.9Cr</span>
                                </div>
                            </div>
                        </div>

                        {/* Carrier Performance Ranking */}
                        <div className="col-span-12 glass-panel rounded-xl p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-sm font-bold text-on-surface font-headline uppercase tracking-widest">Carrier Performance Ranking</h3>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 text-[10px] font-bold rounded bg-primary/10 text-primary">MARITIME</span>
                                    <span className="px-3 py-1 text-[10px] font-bold rounded bg-surface-container-high text-on-surface-variant">AIR</span>
                                    <span className="px-3 py-1 text-[10px] font-bold rounded bg-surface-container-high text-on-surface-variant">GROUND</span>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-white/5">
                                            <th className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest pb-3 pr-4">Carrier</th>
                                            <th className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest pb-3 pr-4">On-Time %</th>
                                            <th className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest pb-3 pr-4">Avg Transit</th>
                                            <th className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest pb-3 pr-4">Cost Efficiency</th>
                                            <th className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest pb-3">AI Score</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr className="border-b border-white/5 hover:bg-surface-container-low transition-colors">
                                            <td className="py-4 pr-4 font-bold text-on-surface">Maersk Line</td>
                                            <td className="py-4 pr-4 text-tertiary font-bold">97.2%</td>
                                            <td className="py-4 pr-4 text-on-surface-variant">18.4 days</td>
                                            <td className="py-4 pr-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-20 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                                        <div className="h-full w-[92%] bg-tertiary rounded-full"></div>
                                                    </div>
                                                    <span className="text-xs text-on-surface-variant">92%</span>
                                                </div>
                                            </td>
                                            <td className="py-4 text-tertiary font-extrabold">9.4</td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-surface-container-low transition-colors">
                                            <td className="py-4 pr-4 font-bold text-on-surface">CMA CGM</td>
                                            <td className="py-4 pr-4 text-primary font-bold">94.1%</td>
                                            <td className="py-4 pr-4 text-on-surface-variant">19.2 days</td>
                                            <td className="py-4 pr-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-20 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                                        <div className="h-full w-[88%] bg-primary rounded-full"></div>
                                                    </div>
                                                    <span className="text-xs text-on-surface-variant">88%</span>
                                                </div>
                                            </td>
                                            <td className="py-4 text-primary font-extrabold">8.7</td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-surface-container-low transition-colors">
                                            <td className="py-4 pr-4 font-bold text-on-surface">MSC</td>
                                            <td className="py-4 pr-4 text-primary font-bold">91.8%</td>
                                            <td className="py-4 pr-4 text-on-surface-variant">20.1 days</td>
                                            <td className="py-4 pr-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-20 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                                        <div className="h-full w-[85%] bg-secondary rounded-full"></div>
                                                    </div>
                                                    <span className="text-xs text-on-surface-variant">85%</span>
                                                </div>
                                            </td>
                                            <td className="py-4 text-secondary font-extrabold">8.2</td>
                                        </tr>
                                        <tr className="hover:bg-surface-container-low transition-colors">
                                            <td className="py-4 pr-4 font-bold text-on-surface">Evergreen</td>
                                            <td className="py-4 pr-4 text-amber-400 font-bold">88.5%</td>
                                            <td className="py-4 pr-4 text-on-surface-variant">21.8 days</td>
                                            <td className="py-4 pr-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-20 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                                        <div className="h-full w-[79%] bg-amber-500 rounded-full"></div>
                                                    </div>
                                                    <span className="text-xs text-on-surface-variant">79%</span>
                                                </div>
                                            </td>
                                            <td className="py-4 text-amber-400 font-extrabold">7.6</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Bottom KPI Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="glass-panel rounded-xl p-6 border border-white/5">
                            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">Datasets Analyzed</p>
                            <h3 className="text-3xl font-extrabold text-on-surface tracking-tighter font-headline">42.1M</h3>
                            <p className="text-[10px] text-tertiary mt-1">↑ 18.2% this week</p>
                        </div>
                        <div className="glass-panel rounded-xl p-6 border border-white/5">
                            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">Anomalies Detected</p>
                            <h3 className="text-3xl font-extrabold text-amber-400 tracking-tighter font-headline">847</h3>
                            <p className="text-[10px] text-on-surface-variant mt-1">142 auto-resolved</p>
                        </div>
                        <div className="glass-panel rounded-xl p-6 border border-white/5">
                            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">Prediction Accuracy</p>
                            <h3 className="text-3xl font-extrabold text-tertiary tracking-tighter font-headline">96.8%</h3>
                            <p className="text-[10px] text-tertiary mt-1">↑ 2.1% vs last month</p>
                        </div>
                        <div className="glass-panel rounded-xl p-6 border border-white/5">
                            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">Revenue Impact</p>
                            <h3 className="text-3xl font-extrabold text-on-surface tracking-tighter font-headline">+₹70Cr</h3>
                            <p className="text-[10px] text-tertiary mt-1">AI-driven optimization</p>
                        </div>
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-tertiary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
            </main>
        </div>
    );
};

export default AnalystDashboard;
