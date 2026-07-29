'use client';

import React, { useState, useEffect } from 'react';
import { 
  Ship, Zap, ShieldCheck, Factory, 
  X, Globe, BatteryCharging
} from 'lucide-react';

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

  const nodes = [
    {
      region: 'Eastern Caribbean',
      markets: ['Jamaica', 'Trinidad & Tobago', 'Barbados', 'Guyana'],
      tag: 'Island Grid Transition',
      solution: 'Marine FSU & Onshore CCGT',
      description: 'Displacing Heavy Fuel Oil across island utilities with modular floating LNG infrastructure and firm baseload contracts.',
      accent: 'blue',
    },
    {
      region: 'Western Caribbean',
      markets: ['Cayman Islands', 'Belize', 'Honduras', 'Cuba'],
      tag: 'Sovereign Baseload',
      solution: 'FSRU & Virtual Pipeline',
      description: 'Marine terminal drops and ISO container networks delivering U.S.-sourced LNG to remote coastline and inland grids.',
      accent: 'cyan',
    },
    {
      region: 'Central America',
      markets: ['Panama', 'Costa Rica', 'Guatemala', 'El Salvador'],
      tag: 'Industrial Supply',
      solution: 'BTM Generation & GSA',
      description: 'Dedicated behind-the-meter gas supply agreements for industrial parks, free zones, and critical infrastructure operators.',
      accent: 'blue',
    },
    {
      region: 'Northern South America',
      markets: ['Colombia', 'Venezuela', 'Ecuador', 'Peru'],
      tag: 'Andean Corridor',
      solution: 'CCGT & Regasification',
      description: 'Onshore regasification terminals and combined cycle plants serving sovereign utilities and mining sector industrials.',
      accent: 'cyan',
    },
    {
      region: 'Mexico',
      markets: ['Nuevo León', 'Jalisco', 'Bajío Corridor', 'Yucatán'],
      tag: 'Nearshoring Corridor',
      solution: 'BTM Generation & FSRU',
      description: 'Private power infrastructure for Tier-1 multinational manufacturers reshoring operations to Mexican industrial corridors.',
      accent: 'blue',
    },
    {
      region: 'Southern Cone',
      markets: ['Chile', 'Argentina', 'Uruguay', 'Bolivia'],
      tag: 'Southern Supply',
      solution: 'Virtual Pipeline & Minigrid',
      description: 'Agile ISO container logistics and off-grid LNG micro-grids for mining, agriculture, and remote industrial operations.',
      accent: 'cyan',
    },
  ];

  const RegionalNodes = () => (
    <section className="py-24 bg-[#020617] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-[0.2em] rounded uppercase">
            Caribbean &amp; Latin America
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Hemispheric Operational Nodes</h2>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Delivering critical LNG supply and BTM generation infrastructure across six strategic CALA markets — from island grid transitions to industrial nearshoring corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {nodes.map((node) => (
            <div
              key={node.region}
              className="group bg-[#0a0f1c] p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5 ${node.accent === 'cyan' ? 'text-cyan-500' : 'text-blue-500'}`}>
                    {node.tag}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">{node.region}</h3>
                </div>
                <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${node.accent === 'cyan' ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]' : 'bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.7)]'}`} />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {node.markets.map((m) => (
                  <span key={m} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-medium tracking-wide">
                    {m}
                  </span>
                ))}
              </div>

              <div className={`text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-md w-fit ${node.accent === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                {node.solution}
              </div>

              <p className="text-slate-500 text-sm leading-relaxed">{node.description}</p>
            </div>
          ))}
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
        <RegionalNodes />
      </main>
      <footer className="bg-[#020617] border-t border-slate-900 py-8 text-center text-xs text-slate-600 font-mono tracking-wider">
        <p>ASCENDANT ENERGY AMERICAS | UTILITY & INDUSTRIAL INFRASTRUCTURE</p>
      </footer>
      <ContactModal />
    </div>
  );
}
