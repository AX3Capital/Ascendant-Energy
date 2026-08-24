'use client';

import React, { useState, useEffect } from 'react';
import { 
  Ship, Zap, ShieldCheck, Factory, 
  ArrowRight, X, Globe, BatteryCharging,
  Database, Shield, Lock
} from 'lucide-react';
import OperationalMap from '@/components/ascendant/operational-map';

export default function CalaOfftakerApp() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-[#020617]/95 backdrop-blur-md border-b border-blue-500/20 shadow-2xl' : 'py-6 bg-gradient-to-b from-[#020617]/90 to-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-100 leading-none tracking-tight">ASCENDANT ENERGY</span>
            <span className="text-[10px] text-blue-400 tracking-[0.2em] font-semibold uppercase mt-1">Utility & Industrial Supply</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setContactOpen(true)}
            className="px-5 py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            Request PPA Specs
          </button>
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-blue-500/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-[0.2em] rounded uppercase">
          Sovereign Baseload | Fuel Transition Logistics
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Secure Hemispheric <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Power Delivery.</span>
        </h1>
        <p className="text-xl text-slate-400 font-light max-w-3xl mb-10 leading-relaxed border-l-2 border-blue-500/30 pl-6">
          Ascendant Energy delivers turnkey, U.S.-sourced LNG and Behind-The-Meter (BTM) generation to critical utility and industrial corridors across Latin America and the Caribbean. We solve grid scarcity through modular marine infrastructure and guaranteed baseload delivery.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-3 bg-[#0f172a] border border-slate-800 rounded-lg p-4">
            <ShieldCheck className="w-8 h-8 text-blue-400" />
            <div>
              <div className="text-white font-bold">Resilient</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">U.S. Supply Chain</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#0f172a] border border-slate-800 rounded-lg p-4">
            <BatteryCharging className="w-8 h-8 text-cyan-400" />
            <div>
              <div className="text-white font-bold">Turnkey</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">BTM Generation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const LogisticsArchitecture = () => (
    <section className="py-24 bg-[#0a0f1c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Ship className="w-7 h-7 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Marine Logistics & Transition</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              We execute high-velocity infrastructure deployments to rapidly transition island and coastal grids away from volatile Heavy Fuel Oil (HFO) to clean, reliable U.S. natural gas.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 p-4 rounded-xl bg-[#020617] border border-slate-800">
                <div className="mt-1 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)] flex-shrink-0"></div>
                <div>
                  <strong className="text-slate-200 block mb-1">Modular Marine Drops (FSRU/FSU)</strong>
                  <span className="text-sm text-slate-500 leading-relaxed block">Rapid deployment of Floating Storage and Regasification Units to bypass multi-year onshore terminal construction delays.</span>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl bg-[#020617] border border-slate-800">
                <div className="mt-1 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)] flex-shrink-0"></div>
                <div>
                  <strong className="text-slate-200 block mb-1">Virtual Pipeline Solutions (ISO)</strong>
                  <span className="text-sm text-slate-500 leading-relaxed block">Agile delivery of cryogenic ISO containers directly to inland industrial facilities and remote micro-grids, providing immediate baseload access.</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
              <Factory className="w-7 h-7 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Dedicated BTM Generation</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Ascendant Energy builds, owns, and operates dedicated generation facilities directly Behind-The-Meter (BTM) for Tier-1 industrial clients and sovereign utilities.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 p-4 rounded-xl bg-[#020617] border border-slate-800">
                <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] flex-shrink-0"></div>
                <div>
                  <strong className="text-slate-200 block mb-1">Guaranteed Baseload Delivery</strong>
                  <span className="text-sm text-slate-500 leading-relaxed block">We construct modular Combined Cycle Gas Turbine (CCGT) plants to provide firm, uninterruptible power, neutralizing local grid scarcity.</span>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl bg-[#020617] border border-slate-800">
                <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] flex-shrink-0"></div>
                <div>
                  <strong className="text-slate-200 block mb-1">Predictable Fixed-Cost Economics</strong>
                  <span className="text-sm text-slate-500 leading-relaxed block">Long-term Power Purchase Agreements (PPAs) and Gas Sales Agreements (GSAs) insulate your operations from spot market fuel volatility.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );

  const AxialProject = () => (
    <section className="py-24 bg-[#020617] relative overflow-hidden border-t border-b border-emerald-500/10">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="absolute -left-[20%] top-0 w-[50%] h-[50%] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-[0.2em] rounded uppercase">
            Upstream OpCo | Ascendant Upstream SPV
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">The Physical Anchor.</span>
          </h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed border-l-2 border-emerald-500/30 pl-6">
            Functioning as a heavily ring-fenced, bankruptcy-remote entity, Ascendant Upstream aggregates stranded natural gas directly at the wellhead. We secure the physical molecule to feed the broader AX3 downstream ecosystem without exposing upstream LP capital to international logistics risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          <div className="bg-[#0a0f1c] border border-slate-800 hover:border-emerald-500/30 transition-colors rounded-2xl p-8">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
              <Database className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">1.0 Bcf/d Aggregation</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Targeting distressed Proved Developed Producing (PDP) reserves and stranded Marcellus surface rights to lock in a fixed-cost molecular baseload.
            </p>
          </div>

          <div className="bg-[#0a0f1c] border border-slate-800 hover:border-emerald-500/30 transition-colors rounded-2xl p-8">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Bankruptcy-Remote</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Structurally isolated from Ascendant Americas. The Upstream vehicle strictly capitalizes the extraction and gathering infrastructure, eliminating cross-default contagion.
            </p>
          </div>

          <div className="bg-[#0a0f1c] border border-slate-800 hover:border-emerald-500/30 transition-colors rounded-2xl p-8">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Thermal-to-Digital</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Direct, on-site monetization. Selling raw thermal energy to co-located Ascendant Compute data centers via arm&apos;s-length Master Service Agreements (MSAs).
            </p>
          </div>

        </div>

        <div className="bg-[#050810] border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 blur-[80px] rounded-full pointer-events-none"></div>

          <h3 className="text-lg font-bold text-white mb-8 text-center">Master Structural Architecture</h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">

            <div className="w-full md:w-1/4 text-center px-4 py-6 bg-slate-900/50 border border-slate-700 rounded-xl relative z-10">
              <Shield className="w-8 h-8 text-slate-300 mx-auto mb-3" />
              <div className="font-bold text-white text-sm">AX3 CAPITAL</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">Master HoldCo</div>
            </div>

            <div className="hidden md:flex flex-col gap-4 items-center justify-center">
              <ArrowRight className="w-6 h-6 text-emerald-500 -translate-y-6" />
              <ArrowRight className="w-6 h-6 text-cyan-500 translate-y-6" />
            </div>

            <div className="w-full md:w-2/3 flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between px-6 py-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl">
                <div>
                  <div className="font-bold text-emerald-400 text-sm">ASCENDANT UPSTREAM SPV</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">The Supplier</div>
                </div>
              </div>

              <div className="flex items-center justify-between px-6 py-4 bg-cyan-950/20 border border-cyan-500/30 rounded-xl">
                <div>
                  <div className="font-bold text-cyan-400 text-sm">ASCENDANT AMERICAS SPV</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">Downstream Logistics (The Buyer)</div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <span className="inline-block px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-xs text-slate-400 font-medium">
              * Protected by Arm&apos;s-Length Firm Gas Supply Agreements (FGSA)
            </span>
          </div>

        </div>

      </div>
    </section>
  );

  const ContactModal = () => {
    if (!contactOpen) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-sm" onClick={() => setContactOpen(false)}></div>
        <div className="relative bg-[#0a0f1c] border border-slate-800 w-full max-w-md rounded-2xl shadow-2xl p-8">
          <button onClick={() => setContactOpen(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Initiate Commercial Supply</h2>
            <p className="text-sm text-slate-400">Request PPA/GSA Structuring Details</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <input 
              type="text" 
              placeholder="Utility / Industrial Entity" 
              className="w-full bg-[#020617] border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none focus:border-blue-500/50 transition-colors"
            />
            <input 
              type="email" 
              placeholder="Corporate Email" 
              className="w-full bg-[#020617] border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none focus:border-blue-500/50 transition-colors"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-lg transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#020617] min-h-screen font-sans selection:bg-blue-500/30">
      <Navigation />
      <main>
        <HeroSection />
        <LogisticsArchitecture />
        <AxialProject />
        <OperationalMap />
      </main>
      <footer className="bg-[#020617] border-t border-slate-900 py-8 text-center text-xs text-slate-600 font-mono tracking-wider">
        <p>ASCENDANT ENERGY AMERICAS | UTILITY & INDUSTRIAL INFRASTRUCTURE</p>
      </footer>
      <ContactModal />
    </div>
  );
}
