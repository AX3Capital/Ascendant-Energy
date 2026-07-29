import { ShieldCheck, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-cyan-500/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#020617] to-[#020617]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold tracking-[0.2em] rounded uppercase">
          Master Service Agreements | Dedicated Capacity
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl text-balance">
          The Hemispheric{' '}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Power Node.
          </span>
        </h1>

        <p className="text-xl text-slate-400 font-light max-w-3xl mb-10 leading-relaxed border-l-2 border-cyan-500/30 pl-6">
          Ascendant provides Tier-1 Hyperscalers with dedicated, Behind-The-Meter (BTM) compute
          capacity across strategic USGC, Latin American, and Caribbean sovereign zones. We
          guarantee 99.999% SLA uptime through islanded generation architectures.
        </p>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-3 bg-[#0f172a] border border-slate-800 rounded-lg p-4">
            <ShieldCheck className="w-8 h-8 text-cyan-400" aria-hidden="true" />
            <div>
              <div className="text-white font-bold">99.999%</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Uptime SLA</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#0f172a] border border-slate-800 rounded-lg p-4">
            <Zap className="w-8 h-8 text-blue-400" aria-hidden="true" />
            <div>
              <div className="text-white font-bold">N-1 Redundant</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Generation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
