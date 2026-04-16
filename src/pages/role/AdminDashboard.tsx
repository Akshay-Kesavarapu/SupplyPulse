import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [autoScale, setAutoScale] = useState(true);
    const [neuralCache, setNeuralCache] = useState(false);

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
                    <Link className="bg-blue-900/40 text-blue-200 border-l-4 border-cyan-400 font-semibold px-6 py-4 flex items-center gap-3 transition-all duration-300 ease-in-out transform active:scale-95" to="/admin">
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
                                placeholder="Global Logistics Search..."
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
                                <p className="text-[10px] text-on-surface leading-none font-bold">AKSHAY</p>
                                <p className="text-[9px] text-slate-500 mt-1">SUPPLY ADMIN</p>
                            </div>
                            <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-white/5 group-hover:border-cyan-400 transition-colors">
                                <img
                                    alt="Admin User Profile"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv-TaKqc8raYHTy3acVYmjDnfj31znd5vFrknpIbuQKNh7UXDAmrX1GHLu7u-9Y0WPYKqUj4QO_sFwXFvmRBHVnlbfcIsqiEK_7DXfA0_JWiJxFv3IKpvTyeWOTHMRwd7-EVlxFR71VROB0jlPLtR8xxYQSz5YV15DPPUOZx3-5mCjQCuGVP9rX-s4ujDXzJi4EAv9klG7wvjn6bDQx1EK3djfVGXONW3NkmjNJPQW6UFekiQ3ZjbZdFm9UOc94qc3Iz7CbYYy0oDM"
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
                            <p className="text-on-surface-variant font-medium mt-1">Unified control plane for global supply chains.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-5 py-2.5 rounded-lg bg-secondary-container text-blue-100 font-bold flex items-center gap-2 text-xs uppercase tracking-widest">
                                <span className="material-symbols-outlined text-sm">shield</span>
                                Admin View
                            </button>
                            <button
                                onClick={() => navigate('/analyst')}
                                className="px-5 py-2.5 rounded-lg bg-surface-container-high border border-outline-variant/20 text-on-surface-variant font-bold flex items-center gap-2 text-xs uppercase tracking-widest hover:bg-surface-variant transition-colors"
                            >
                                <span className="material-symbols-outlined text-sm">query_stats</span>
                                Analyst View
                            </button>
                        </div>
                    </div>

                    {/* Main Bento Grid */}
                    <div className="grid grid-cols-12 gap-6">
                        {/* Active User Sessions */}
                        <div className="col-span-12 lg:col-span-5 glass-panel rounded-xl p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-on-surface-variant">groups</span>
                                    <h3 className="text-lg font-bold text-on-surface font-headline">Active User Sessions</h3>
                                </div>
                                <span className="px-2 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded uppercase">Real-Time</span>
                            </div>
                            <div className="space-y-4">
                                {/* User Session 1 */}
                                <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-sm font-bold text-blue-200">AK</div>
                                        <div>
                                            <p className="text-sm font-bold text-on-surface">Akshay Kumar • Logistics Lead</p>
                                            <p className="text-[10px] text-on-surface-variant">IP: 192.168.1.104 • Chennai Node</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] text-on-surface-variant">Active 2m ago</span>
                                        <span className="material-symbols-outlined text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-error">logout</span>
                                    </div>
                                </div>
                                {/* User Session 2 */}
                                <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-sm font-bold text-primary">KR</div>
                                        <div>
                                            <p className="text-sm font-bold text-on-surface">Karthik Rajan • Analyst</p>
                                            <p className="text-[10px] text-on-surface-variant">IP: 172.16.254.1 • Bangalore Terminal</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] text-on-surface-variant">Active 14s ago</span>
                                        <span className="material-symbols-outlined text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-error">logout</span>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-6 text-xs text-primary font-bold uppercase tracking-widest flex items-center gap-2 hover:text-tertiary transition-colors">
                                View All 24 Active Sessions
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>

                        {/* Global Risk Heatmap */}
                        <div className="col-span-12 lg:col-span-7 glass-panel rounded-xl p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-on-surface font-headline">Global Risk Heatmap</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-on-surface-variant uppercase font-bold">Critical Zone:</span>
                                    <span className="text-[10px] text-error font-bold uppercase">SUEZ</span>
                                </div>
                            </div>
                            {/* Heatmap Grid */}
                            <div className="grid grid-cols-6 gap-1.5 mb-6">
                                <div className="h-10 rounded bg-secondary-container/40"></div>
                                <div className="h-10 rounded bg-secondary-container/60"></div>
                                <div className="h-10 rounded bg-secondary-container/30"></div>
                                <div className="h-10 rounded bg-secondary-container/50"></div>
                                <div className="h-10 rounded bg-secondary-container/40"></div>
                                <div className="h-10 rounded bg-primary/40"></div>
                                <div className="h-10 rounded bg-secondary-container/30"></div>
                                <div className="h-10 rounded bg-error/60"></div>
                                <div className="h-10 rounded bg-secondary-container/40"></div>
                                <div className="h-10 rounded bg-secondary-container/30"></div>
                                <div className="h-10 rounded bg-secondary-container/50"></div>
                                <div className="h-10 rounded bg-secondary-container/40"></div>
                                <div className="h-10 rounded bg-secondary-container/50"></div>
                                <div className="h-10 rounded bg-secondary-container/30"></div>
                                <div className="h-10 rounded bg-secondary-container/40"></div>
                                <div className="h-10 rounded bg-secondary-container/60"></div>
                                <div className="h-10 rounded bg-secondary-container/30"></div>
                                <div className="h-10 rounded bg-secondary-container/40"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-[10px] font-bold">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-error"></span>
                                        <span className="text-on-surface-variant">EXTREME</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                                        <span className="text-on-surface-variant">WARNING</span>
                                    </div>
                                </div>
                                <button className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/20 text-[10px] font-bold text-on-surface-variant uppercase hover:bg-surface-variant transition-colors">
                                    Reroute AI
                                </button>
                            </div>
                        </div>

                        {/* Active Defense */}
                        <div className="col-span-12 lg:col-span-4 glass-panel rounded-xl p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-error">shield</span>
                                    <h3 className="text-lg font-bold text-on-surface font-headline">Active Defense</h3>
                                </div>
                                <span className="text-[10px] text-on-surface-variant font-bold uppercase">Firewall</span>
                            </div>
                            <p className="text-sm text-on-surface-variant mb-6">System is currently mitigating 42 low-level scan attempts.</p>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] text-on-surface-variant font-bold uppercase">Threat Level</span>
                                <span className="text-[10px] text-tertiary font-bold uppercase">Nominal</span>
                            </div>
                            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                                <div className="h-full w-[25%] bg-gradient-to-r from-tertiary to-primary rounded-full"></div>
                            </div>
                        </div>

                        {/* System Overrides */}
                        <div className="col-span-12 lg:col-span-4 glass-panel rounded-xl p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-sm font-bold text-on-surface font-headline uppercase tracking-widest">System Overrides</h3>
                                <span className="material-symbols-outlined text-on-surface-variant">tune</span>
                            </div>
                            <div className="space-y-5">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-on-surface">Auto-Scale Nodes</span>
                                    <button
                                        onClick={() => setAutoScale(!autoScale)}
                                        className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${autoScale ? 'bg-tertiary' : 'bg-surface-container-highest'}`}
                                    >
                                        <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${autoScale ? 'translate-x-5' : 'translate-x-0'}`}></span>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-on-surface">Neural Cache Force</span>
                                    <button
                                        onClick={() => setNeuralCache(!neuralCache)}
                                        className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${neuralCache ? 'bg-tertiary' : 'bg-surface-container-highest'}`}
                                    >
                                        <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${neuralCache ? 'translate-x-5' : 'translate-x-0'}`}></span>
                                    </button>
                                </div>
                            </div>
                            <button className="mt-6 w-full py-2.5 rounded-lg border-2 border-error/40 text-error text-xs font-bold uppercase tracking-widest hover:bg-error/10 transition-colors">
                                Emergency Kill Switch
                            </button>
                        </div>

                        {/* Regional Latency */}
                        <div className="col-span-12 lg:col-span-4 glass-panel rounded-xl p-6 border border-white/5">
                            <h3 className="text-sm font-bold text-on-surface font-headline uppercase tracking-widest mb-6">Regional Latency (ms)</h3>
                            <div className="h-32 flex items-end gap-3 mb-4">
                                <div className="flex-1 flex flex-col items-center gap-1">
                                    <div className="w-full bg-secondary-container/40 rounded-t h-[60%]"></div>
                                    <span className="text-[9px] text-on-surface-variant font-bold">NA</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center gap-1">
                                    <div className="w-full bg-secondary-container/50 rounded-t h-[45%]"></div>
                                    <span className="text-[9px] text-on-surface-variant font-bold">EMEA</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center gap-1">
                                    <div className="w-full bg-secondary-container/40 rounded-t h-[55%]"></div>
                                    <span className="text-[9px] text-on-surface-variant font-bold">APAC</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center gap-1">
                                    <div className="w-full bg-secondary-container/30 rounded-t h-[35%]"></div>
                                    <span className="text-[9px] text-on-surface-variant font-bold">LATAM</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center gap-1">
                                    <div className="w-full bg-tertiary/40 rounded-t h-[85%]"></div>
                                    <span className="text-[9px] text-tertiary font-bold">MENA</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center gap-1">
                                    <div className="w-full bg-secondary-container/40 rounded-t h-[50%]"></div>
                                    <span className="text-[9px] text-on-surface-variant font-bold">SEA</span>
                                </div>
                            </div>
                        </div>

                        {/* Route Efficiency */}
                        <div className="col-span-12 lg:col-span-5 glass-panel rounded-xl p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Route Efficiency</span>
                                <span className="material-symbols-outlined text-tertiary text-lg">trending_up</span>
                            </div>
                            <h3 className="text-5xl font-extrabold text-on-surface tracking-tighter font-headline mb-2">94.2<span className="text-2xl text-on-surface-variant">%</span></h3>
                            {/* Mini Chart */}
                            <div className="h-16 mt-4 relative">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 60">
                                    <defs>
                                        <linearGradient id="routeGrad" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#4cd6fb" stopOpacity={0.3} />
                                            <stop offset="100%" stopColor="#4cd6fb" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,45 Q50,40 80,35 T150,25 T220,30 T300,15" fill="none" stroke="#4cd6fb" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M0,45 Q50,40 80,35 T150,25 T220,30 T300,15 V60 H0 Z" fill="url(#routeGrad)" />
                                </svg>
                            </div>
                            <p className="text-xs text-on-surface-variant mt-3">AI optimization reduced fuel consumption by 12% across North Atlantic corridors this week.</p>
                        </div>

                        {/* Quick Access Panel */}
                        <div className="col-span-12 lg:col-span-7 glass-panel rounded-xl p-6 border border-white/5">
                            <h3 className="text-sm font-bold text-on-surface font-headline uppercase tracking-widest mb-6">Administrative Actions</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="p-4 bg-surface-container-low rounded-xl flex items-center gap-4 hover:bg-surface-container-high transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-primary">security</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold text-on-surface">Access Control</p>
                                        <p className="text-[10px] text-on-surface-variant">Manage roles & permissions</p>
                                    </div>
                                </button>
                                <button className="p-4 bg-surface-container-low rounded-xl flex items-center gap-4 hover:bg-surface-container-high transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center group-hover:bg-tertiary/20 transition-colors">
                                        <span className="material-symbols-outlined text-tertiary">dns</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold text-on-surface">Node Registry</p>
                                        <p className="text-[10px] text-on-surface-variant">1,204 nodes across 14 zones</p>
                                    </div>
                                </button>
                                <button className="p-4 bg-surface-container-low rounded-xl flex items-center gap-4 hover:bg-surface-container-high transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                        <span className="material-symbols-outlined text-secondary">description</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold text-on-surface">Audit Logs</p>
                                        <p className="text-[10px] text-on-surface-variant">Full compliance trail</p>
                                    </div>
                                </button>
                                <button className="p-4 bg-surface-container-low rounded-xl flex items-center gap-4 hover:bg-surface-container-high transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-error/10 flex items-center justify-center group-hover:bg-error/20 transition-colors">
                                        <span className="material-symbols-outlined text-error">report</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold text-on-surface">Incident Reports</p>
                                        <p className="text-[10px] text-on-surface-variant">3 open investigations</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom KPI Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="glass-panel rounded-xl p-6 border border-white/5">
                            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">Global Nodes</p>
                            <h3 className="text-3xl font-extrabold text-on-surface tracking-tighter font-headline">1,204</h3>
                        </div>
                        <div className="glass-panel rounded-xl p-6 border border-white/5">
                            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">Active Ships</p>
                            <h3 className="text-3xl font-extrabold text-on-surface tracking-tighter font-headline">45,920</h3>
                        </div>
                        <div className="glass-panel rounded-xl p-6 border border-white/5">
                            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">Security Events</p>
                            <h3 className="text-3xl font-extrabold text-error tracking-tighter font-headline">12</h3>
                        </div>
                        <div className="glass-panel rounded-xl p-6 border border-white/5">
                            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-2">AI Predictions</p>
                            <h3 className="text-3xl font-extrabold text-tertiary tracking-tighter font-headline">8.4M</h3>
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

export default AdminDashboard;
