import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState<'Admin' | 'Analyst'>('Admin');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Add auth logic here. For now, navigate based on role
        if (role === 'Admin') {
            navigate('/admin');
        } else {
            navigate('/analyst');
        }
    };

    return (
        <main className="min-h-screen flex flex-col md:flex-row overflow-hidden bg-background text-on-surface font-body selection:bg-tertiary/30">
            {/* Left Section: Authentication */}
            <section className="w-full md:w-[45%] lg:w-[40%] flex flex-col justify-between p-8 lg:p-12 xl:p-16 relative z-10">
                {/* Branding */}
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-10 h-10 rounded-lg signature-pulse flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
                    </div>
                    <div>
                        <h1 className="font-headline font-extrabold text-xl tracking-tight text-on-surface">SupplyPulse AI</h1>
                        <p className="text-[10px] uppercase tracking-[0.1em] text-on-surface-variant font-medium">Real-Time Supply Chain Control Tower</p>
                    </div>
                </div>

                {/* Login Card */}
                <div className="glass-panel p-8 lg:p-10 rounded-2xl border border-outline-variant/10 shadow-[0px_0px_40px_rgba(227,226,232,0.03)]">
                    <header className="mb-8">
                        <h2 className="font-headline text-2xl font-bold text-on-surface mb-2">Welcome Back</h2>
                        <p className="text-on-surface-variant text-sm">Please enter your credentials to access the observatory.</p>
                    </header>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        {/* Role Selector */}
                        <div className="space-y-2">
                            <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant ml-1">Access Level</label>
                            <div className="flex p-1 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                                <button 
                                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all duration-300 ${role === 'Admin' ? 'bg-surface-container-high text-tertiary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`} 
                                    type="button"
                                    onClick={() => setRole('Admin')}
                                >
                                    Admin
                                </button>
                                <button 
                                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all duration-300 ${role === 'Analyst' ? 'bg-surface-container-high text-tertiary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`} 
                                    type="button"
                                    onClick={() => setRole('Analyst')}
                                >
                                    Analyst
                                </button>
                            </div>
                        </div>

                        {/* Inputs */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant ml-1">Work Email</label>
                                <div className="relative">
                                    <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:border-tertiary focus:ring-0 text-sm py-3 px-1 transition-all placeholder:text-on-surface-variant/40" placeholder="name@company.com" type="email" required />
                                    <span className="material-symbols-outlined absolute right-2 top-3 text-on-surface-variant/40 text-lg">alternate_email</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant ml-1">Password</label>
                                <div className="relative">
                                    <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:border-tertiary focus:ring-0 text-sm py-3 px-1 transition-all placeholder:text-on-surface-variant/40" placeholder="••••••••" type="password" required />
                                    <span className="material-symbols-outlined absolute right-2 top-3 text-on-surface-variant/40 text-lg">lock</span>
                                </div>
                            </div>

                            {/* Optional OTP Field (Hidden/State based) */}
                            <div className="space-y-2 opacity-60">
                                <label className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant ml-1">Verification Code (Optional)</label>
                                <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/20 focus:border-tertiary focus:ring-0 text-sm py-3 px-1 transition-all placeholder:text-on-surface-variant/40" placeholder="000000" type="text"/>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                            <label className="flex items-center gap-2 cursor-pointer text-on-surface-variant hover:text-on-surface transition-colors">
                                <input className="w-4 h-4 rounded border-outline-variant bg-surface-container-lowest text-tertiary focus:ring-tertiary/20" type="checkbox"/>
                                Remember session
                            </label>
                            <a className="text-tertiary hover:underline font-medium" href="#">Forgot security key?</a>
                        </div>

                        {/* Actions */}
                        <div className="space-y-4 pt-2">
                            <button type="submit" className="w-full signature-pulse text-on-primary font-headline font-bold py-4 rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                Sign In to Dashboard
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </button>

                            <div className="relative flex items-center py-2">
                                <div className="flex-grow border-t border-outline-variant/20"></div>
                                <span className="flex-shrink mx-4 text-[10px] uppercase tracking-widest text-on-surface-variant/50">OR</span>
                                <div className="flex-grow border-t border-outline-variant/20"></div>
                            </div>

                            <button className="w-full bg-surface-container-high text-on-surface border border-outline-variant/20 font-medium py-3 rounded-xl hover:bg-surface-variant active:scale-[0.98] transition-all flex items-center justify-center gap-3" type="button">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"></path>
                                </svg>
                                Continue with Google
                            </button>
                        </div>
                    </form>
                </div>

                {/* Left Footer */}
                <footer className="mt-12 text-center md:text-left">
                    <p className="font-inter text-[10px] uppercase tracking-[0.1em] text-on-surface-variant flex items-center justify-center md:justify-start gap-2">
                        <span className="material-symbols-outlined text-sm text-tertiary">verified_user</span>
                        Secure enterprise access with role-based intelligence
                    </p>
                </footer>
            </section>

            {/* Right Section: Hero Visuals */}
            <section className="hidden md:flex flex-1 bg-surface-container-lowest relative items-center justify-center p-12 overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-tertiary/5 blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary-container/10 blur-[100px]"></div>
                </div>

                {/* Top Right Status */}
                <div className="absolute top-12 right-12 flex items-center gap-3 bg-surface-container-high/40 backdrop-blur-md px-4 py-2 rounded-full border border-outline-variant/10 z-20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-on-surface/80">Secure Access Enabled</span>
                </div>

                {/* Abstract UI Canvas */}
                <div className="relative w-full h-full max-w-4xl max-h-[700px] z-10 flex items-center justify-center">
                    {/* Map Layer (Faded) */}
                    <div className="absolute inset-0 opacity-20 mask-image-gradient" style={{ WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)', maskImage: 'radial-gradient(circle, black 40%, transparent 80%)' }}>
                        <img alt="Global Logistics View" className="w-full h-full object-cover rounded-3xl" data-alt="abstract dark world map with neon glowing blue network connections and flight paths across continents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZRS0jXPknYuDPctIl1A1K7Hl_dbNmhiMLorQs6GvOOQKPvw8CncAU2Oxk_kCF3AYCNmL76wIHopG_5wckspw0r5GaUBCKNpBKSie2ChlEsYwhCq0epOSVbHIHH3G_FBHSfOi1s9ovp0e_mTWMvXFH7Mf-eeA9aExcQ2ua_YjE54HMUPVxblxxdujZrH8IRlISfKDI-3gox-di6wWmr1IEfJO26o6gOmEe94qdoUdfboGmaEoZLaXUUD6G_nQwgELNoeaZVVAVfrVq"/>
                    </div>

                    {/* Floating AI Intelligence Cards */}
                    <div className="grid grid-cols-12 grid-rows-6 w-full h-full gap-4 p-8">
                        {/* Route Flow Card */}
                        <div className="col-span-5 row-span-2 glass-panel border border-outline-variant/20 rounded-2xl p-6 shadow-2xl self-start">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Active Transit</p>
                                    <h3 className="text-xl font-headline font-extrabold text-tertiary">LN-8924</h3>
                                </div>
                                <span className="material-symbols-outlined text-tertiary/60">monitoring</span>
                            </div>
                            <div className="space-y-3">
                                <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                                    <div className="h-full w-[65%] signature-pulse"></div>
                                </div>
                                <div className="flex justify-between text-[10px] text-on-surface-variant font-medium">
                                    <span>SHANGHAI HUB</span>
                                    <span>ROTTERDAM PORT</span>
                                </div>
                            </div>
                        </div>

                        {/* AI Insights Node */}
                        <div className="col-start-8 col-span-4 row-start-2 row-span-2 glass-panel border border-outline-variant/20 rounded-2xl p-6 shadow-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center">
                                    <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                                </div>
                                <p className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">AI Predictive Analysis</p>
                            </div>
                            <p className="text-sm text-on-surface leading-relaxed italic">"Potential disruption detected in Suez corridor. Suggesting route adjustment +4h."</p>
                            <div className="mt-4 flex items-center gap-2">
                                <span className="px-2 py-1 bg-error-container/30 text-error text-[9px] rounded-md font-bold">HIGH RISK</span>
                                <span className="px-2 py-1 bg-tertiary/10 text-tertiary text-[9px] rounded-md font-bold">AUTO-REPLAN</span>
                            </div>
                        </div>

                        {/* Worker Activity Card */}
                        <div className="col-start-3 col-span-4 row-start-4 row-span-2 glass-panel border border-outline-variant/20 rounded-2xl p-6 shadow-2xl mt-4">
                            <p className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold mb-4">Worker Efficiency</p>
                            <div className="flex items-end gap-1 h-20">
                                <div className="flex-1 bg-secondary-container/40 rounded-t-sm h-[40%]"></div>
                                <div className="flex-1 bg-secondary-container/40 rounded-t-sm h-[60%]"></div>
                                <div className="flex-1 signature-pulse rounded-t-sm h-[90%]"></div>
                                <div className="flex-1 bg-secondary-container/40 rounded-t-sm h-[50%]"></div>
                                <div className="flex-1 bg-secondary-container/40 rounded-t-sm h-[70%]"></div>
                                <div className="flex-1 signature-pulse rounded-t-sm h-[85%]"></div>
                            </div>
                            <div className="flex justify-between mt-2 text-[9px] text-on-surface-variant">
                                <span>06:00</span>
                                <span>12:00</span>
                                <span>18:00</span>
                            </div>
                        </div>

                        {/* Metrics Pulse */}
                        <div className="col-start-8 col-span-3 row-start-5 row-span-1 glass-panel border border-outline-variant/20 rounded-2xl p-5 shadow-2xl flex items-center gap-4">
                            <div className="node-glow w-3 h-3 rounded-full bg-tertiary"></div>
                            <div>
                                <p className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold leading-none mb-1">Global Health</p>
                                <p className="text-lg font-headline font-black text-on-surface">98.4<span className="text-xs text-tertiary ml-1">%</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Glowing Lines (Simulated SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 800 600">
                        <path d="M150,200 Q400,100 650,300" fill="none" stroke="url(#cyan-grad)" strokeDasharray="5,5" strokeWidth="2"></path>
                        <path d="M200,450 Q450,550 700,350" fill="none" stroke="url(#cyan-grad)" strokeDasharray="10,5" strokeWidth="2"></path>
                        <circle className="node-glow" cx="150" cy="200" fill="#4cd6fb" r="4"></circle>
                        <circle className="node-glow" cx="650" cy="300" fill="#4cd6fb" r="4"></circle>
                        <circle className="node-glow" cx="200" cy="450" fill="#4cd6fb" r="4"></circle>
                        <circle className="node-glow" cx="700" cy="350" fill="#4cd6fb" r="4"></circle>
                        <defs>
                            <linearGradient id="cyan-grad" x1="0%" x2="100%" y1="0%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#4cd6fb', stopOpacity: 0 }}></stop>
                                <stop offset="50%" style={{ stopColor: '#4cd6fb', stopOpacity: 0.8 }}></stop>
                                <stop offset="100%" style={{ stopColor: '#4cd6fb', stopOpacity: 0 }}></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>
        </main>
    );
};

export default Login;
