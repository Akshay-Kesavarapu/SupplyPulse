import React from 'react';
import { Link } from 'react-router-dom';

const Overview: React.FC = () => {
    return (
        <div className="overflow-hidden bg-[#121317] text-[#e3e2e8] font-body min-h-screen">
            {/* SideNavBar (Left Vertical) */}
            <aside className="w-64 h-screen fixed left-0 top-0 bg-slate-950/80 backdrop-blur-xl flex flex-col py-8 shadow-2xl shadow-black/50 z-50 transition-all duration-300 font-manrope text-sm tracking-wide">
                <div className="px-6 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary-container flex items-center justify-center shadow-lg shadow-cyan-900/20">
                            <span className="material-symbols-outlined text-on-primary text-2xl">rocket_launch</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-blue-100 tracking-tighter">SupplyPulse</h1>
                            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Global Intelligence</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 space-y-1">
                    {/* Active Item: Overview */}
                    <Link className="bg-blue-900/40 text-blue-200 border-l-4 border-cyan-400 font-semibold px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 ease-in-out transform active:scale-95" to="/overview">
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
                    <Link className="text-slate-400 hover:text-slate-100 px-6 py-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 ease-in-out transform active:scale-95" to="/admin">
                        <span className="material-symbols-outlined">analytics</span>
                        <span>Admin Insights</span>
                    </Link>
                </nav>

                <div className="px-6 mt-auto space-y-1 pt-8 border-t border-white/5">
                    <span className="text-slate-400 hover:text-slate-100 py-3 flex items-center gap-3 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">settings</span>
                        <span>Settings</span>
                    </span>
                    <span className="text-slate-400 hover:text-slate-100 py-3 flex items-center gap-3 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">help_center</span>
                        <span>Support</span>
                    </span>
                </div>
            </aside>

            {/* Main Content Shell */}
            <main className="ml-64 min-h-screen flex flex-col">
                {/* TopNavBar */}
                <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-slate-900/50 backdrop-blur-md flex items-center justify-between px-8 z-40 shadow-[0_1px_0_0_rgba(255,255,255,0.05)] font-manrope text-xs font-medium uppercase tracking-widest">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-white/5 w-96 group">
                            <span className="material-symbols-outlined text-slate-500 group-focus-within:text-cyan-400 transition-colors">search</span>
                            <input className="bg-transparent border-none focus:ring-0 text-on-surface placeholder-slate-600 text-sm w-full ml-2" placeholder="Search Logistics Grid..." type="text" />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 text-slate-400">
                            <button className="hover:text-blue-200 transition-colors cursor-pointer active:opacity-70 flex items-center">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <button className="hover:text-blue-200 transition-colors cursor-pointer active:opacity-70 flex items-center">
                                <span className="material-symbols-outlined">hub</span>
                            </button>
                            <button className="hover:text-blue-200 transition-colors cursor-pointer active:opacity-70 flex items-center">
                                <span className="material-symbols-outlined">language</span>
                            </button>
                        </div>
                        <div className="h-8 w-[1px] bg-white/10"></div>
                        <div className="flex items-center gap-3">
                            <span className="text-blue-100">Akshay</span>
                            <div className="w-10 h-10 rounded-full border-2 border-cyan-500/30 p-0.5 overflow-hidden">
                                <img alt="Executive User Profile" className="w-full h-full object-cover rounded-full" data-alt="Professional portrait of a male logistics executive in a sharp navy suit with modern office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCITWZs5pCq7vtilOfO-UKSDUknvE8Bu3qv1Bd5dZxj4nP7sOIgwM3YH3Uy2W5oOsyVoOJ0BpFzEgiScG2etX75-HWoMdRrZCBjxddHb3pKlus0PrTZxs44DtZOoM4TSn2IAj7iswLUaAUzpaRijdbTGuyUoilnRLpD2SahnjVxLup72_suvoDj4R5mEL-YOsqmdx-FNgK6BAi--3k8By-XkPBxuHf1H_qNyU10XKph95_3d-3RakBzhFKWhfxBY9cuwkQhOYQWdcYo" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Canvas */}
                <div className="mt-16 p-8 space-y-8 flex-1 overflow-y-auto">
                    {/* KPI Top Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="surface-container-low p-6 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl">local_shipping</span>
                            </div>
                            <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Active Shipments</p>
                            <h2 className="text-3xl font-headline font-bold text-blue-100">1,240</h2>
                            <div className="mt-4 flex items-center gap-2 text-xs text-tertiary">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                <span>12.5% vs last hour</span>
                            </div>
                        </div>

                        <div className="surface-container-low p-6 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-error">warning</span>
                            </div>
                            <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Critical Alerts</p>
                            <h2 className="text-3xl font-headline font-bold text-error">3</h2>
                            <div className="mt-4 flex items-center gap-2 text-xs text-error">
                                <span className="material-symbols-outlined text-sm">priority_high</span>
                                <span>Action Required</span>
                            </div>
                        </div>

                        <div className="surface-container-low p-6 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl">hourglass_empty</span>
                            </div>
                            <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Queue Depth</p>
                            <h2 className="text-3xl font-headline font-bold text-blue-100">85%</h2>
                            <div className="mt-4 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-cyan-400 h-full w-[85%] rounded-full shadow-[0_0_8px_rgba(76,214,251,0.5)]"></div>
                            </div>
                        </div>

                        <div className="surface-container-low p-6 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-tertiary">verified_user</span>
                            </div>
                            <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">System Health</p>
                            <h2 className="text-3xl font-headline font-bold text-blue-100">99.9%</h2>
                            <div className="mt-4 flex items-center gap-2 text-xs text-tertiary">
                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                <span>All clusters operational</span>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Body: Asymmetric Grid */}
                    <div className="grid grid-cols-12 gap-8 h-full">
                        {/* Center: Route Intelligence */}
                        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                            <section className="surface-container-low rounded-xl overflow-hidden flex flex-col flex-1 relative min-h-[500px]">
                                <div className="p-6 flex items-center justify-between z-10">
                                    <div>
                                        <h3 className="text-xl font-headline font-bold text-on-surface">Route Intelligence</h3>
                                        <p className="text-sm text-on-surface-variant">Real-time vector tracking: Chennai <span className="text-cyan-400">→</span> Bangalore</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-bold px-3 py-1 rounded-full border border-cyan-500/20 uppercase tracking-tighter">In-Transit</span>
                                        <span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-500/20 uppercase tracking-tighter">Expedited</span>
                                    </div>
                                </div>

                                {/* Map Mockup */}
                                <div className="absolute inset-0 z-0">
                                    <div className="w-full h-full bg-slate-900 overflow-hidden">
                                        <img alt="Dark satellite map view" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" data-alt="Futuristic dark satellite map of a region in India with glowing blue and cyan data lines indicating shipping routes" data-location="Bangalore" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhSD7gk3BS_eQx230ud-4ofF8HaQ9cG0Ij_SW1G3pcLRBg4yC1wyAv4pIuHpJM2Gy-2tKDDSpyHpMCZ2RrKpuoFaFYvDOrbG_NZPUkbguRojDSjjANXcr6pplWtfiaeNNeW0o23R4QmfUR8GFablwfVP5_ogMzp2wJHVkYyCDhOyUD7P8qqCkptdgdyxy3UZ5AYPWAJbNxa_-ZOZdqOWzsjsD36Liz1fh0iIuH2PH51jqxKO_TMx63XDi9Ui_ILNh2MCWB0N1IGl_7" />
                                        {/* Route Overlay Graphic */}
                                        <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                                            <path className="opacity-80" d="M150 450 C 300 400, 500 450, 650 150" stroke="#4cd6fb" strokeDasharray="10 5" strokeWidth="4"></path>
                                            <circle cx="150" cy="450" fill="#4cd6fb" r="6"></circle>
                                            <circle className="animate-pulse" cx="650" cy="150" fill="#4cd6fb" r="10"></circle>
                                        </svg>
                                    </div>
                                </div>

                                {/* Route Detail Floating Overlay */}
                                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4 z-10">
                                    <div className="glass-panel p-4 rounded-xl">
                                        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Estimated Arrival</p>
                                        <p className="text-lg font-headline font-bold text-blue-100">4h 12m</p>
                                        <p className="text-[10px] text-cyan-400">On Schedule</p>
                                    </div>
                                    <div className="glass-panel p-4 rounded-xl">
                                        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Risk Score</p>
                                        <div className="flex items-end gap-2">
                                            <p className="text-lg font-headline font-bold text-blue-100">Low - 12</p>
                                            <div className="h-2 w-16 bg-white/5 rounded-full overflow-hidden mb-1.5">
                                                <div className="bg-green-500 h-full w-[12%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="glass-panel p-4 rounded-xl">
                                        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Current Speed</p>
                                        <p className="text-lg font-headline font-bold text-blue-100">62 km/h</p>
                                        <p className="text-[10px] text-on-surface-variant">Avg: 58 km/h</p>
                                    </div>
                                </div>
                            </section>

                            {/* Bottom Status Row */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="surface-container-low p-5 rounded-xl flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-cyan-400">
                                        <span className="material-symbols-outlined">engineering</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-on-surface">Active Workers</h4>
                                        <p className="text-xs text-on-surface-variant">842 Personnel On-Field</p>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <span className="text-xs font-mono text-cyan-500 bg-cyan-500/5 px-2 py-1 rounded">LIVE</span>
                                    </div>
                                </div>
                                <div className="surface-container-low p-5 rounded-xl flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                                        <span className="material-symbols-outlined">memory</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-on-surface">Queue Processing</h4>
                                        <p className="text-xs text-on-surface-variant">Latency: 42ms</p>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <span className="text-xs font-mono text-tertiary bg-tertiary/5 px-2 py-1 rounded">OPTIMAL</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Live AI Alert Feed */}
                        <div className="col-span-12 lg:col-span-4 space-y-6">
                            <section className="surface-container-low rounded-xl flex flex-col h-full">
                                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                                    <h3 className="text-sm font-headline font-bold uppercase tracking-widest text-on-surface">Live AI Alert Feed</h3>
                                    <span className="material-symbols-outlined text-slate-500 text-lg">more_vert</span>
                                </div>

                                <div className="p-2 flex-1 overflow-y-auto space-y-2">
                                    {/* Alert 1 */}
                                    <div className="p-4 rounded-lg bg-error-container/10 border-l-2 border-error hover:bg-error-container/20 transition-colors cursor-pointer">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-bold text-error uppercase">Critical</span>
                                            <span className="text-[10px] text-on-surface-variant">2m ago</span>
                                        </div>
                                        <h5 className="text-sm font-bold text-on-surface mb-1">Weather delay in Bangalore hub</h5>
                                        <p className="text-xs text-on-surface-variant leading-relaxed">Heavy thunderstorm detected. 12 shipments redirected to temporary storage.</p>
                                    </div>

                                    {/* Alert 2 */}
                                    <div className="p-4 rounded-lg bg-white/5 border-l-2 border-cyan-400 hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-bold text-cyan-400 uppercase">Optimization</span>
                                            <span className="text-[10px] text-on-surface-variant">12m ago</span>
                                        </div>
                                        <h5 className="text-sm font-bold text-on-surface mb-1">Traffic congestion on NH44</h5>
                                        <p className="text-xs text-on-surface-variant leading-relaxed">AI suggested bypass via Alternate Route A. Saving 14m on current trip.</p>
                                    </div>

                                    {/* Alert 3 */}
                                    <div className="p-4 rounded-lg bg-white/5 border-l-2 border-slate-500 hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase">Information</span>
                                            <span className="text-[10px] text-on-surface-variant">28m ago</span>
                                        </div>
                                        <h5 className="text-sm font-bold text-on-surface mb-1">Fleet Maintenance Completed</h5>
                                        <p className="text-xs text-on-surface-variant leading-relaxed">Vehicle unit CH-4402 has re-entered the active shipping pool.</p>
                                    </div>

                                    {/* Alert 4 */}
                                    <div className="p-4 rounded-lg bg-white/5 border-l-2 border-cyan-400 hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-bold text-cyan-400 uppercase">Insight</span>
                                            <span className="text-[10px] text-on-surface-variant">1h ago</span>
                                        </div>
                                        <h5 className="text-sm font-bold text-on-surface mb-1">Chennai Port Throttling</h5>
                                        <p className="text-xs text-on-surface-variant leading-relaxed">Port latency increased by 15%. AI recalibrating dispatch schedules.</p>
                                    </div>
                                </div>

                                <div className="p-4 border-t border-white/5">
                                    <button className="w-full py-2 bg-primary text-on-primary rounded-lg text-xs font-bold font-headline transition-transform active:scale-95 hover:shadow-[0_0_15px_rgba(187,198,226,0.3)]">
                                        View Full Intelligence Log
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Overview;
