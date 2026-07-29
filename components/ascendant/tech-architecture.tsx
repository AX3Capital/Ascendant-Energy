import { Cpu, Globe } from 'lucide-react'

export function TechArchitecture() {
  return (
    <section className="py-24 bg-[#0a0f1c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Islanded Node */}
          <div>
            <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
              <Cpu className="w-7 h-7 text-cyan-400" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              The Islanded Node (Turbine A)
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              We physically isolate &apos;Turbine A&apos; off the primary sovereign grid to operate 24/7,
              hardwiring directly into localized, liquid-cooled hyperscale AI data centers.
            </p>
            <ul className="space-y-6" aria-label="Islanded node features">
              <li className="flex items-start gap-4 p-4 rounded-xl bg-[#020617] border border-slate-800">
                <div
                  className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <strong className="text-slate-200 block mb-1">Instantaneous Failover</strong>
                  <span className="text-sm text-slate-500 leading-relaxed block">
                    Supported by localized BESS (Battery Energy Storage System) arrays to ensure
                    zero-interruption electrical and thermal failover during mandatory hot-gas-path
                    inspections.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl bg-[#020617] border border-slate-800">
                <div
                  className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <strong className="text-slate-200 block mb-1">Direct BTM Integration</strong>
                  <span className="text-sm text-slate-500 leading-relaxed block">
                    Bypasses local grid transmission congestion, delivering raw, unadulterated
                    baseload power directly to the silicon layer.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Deployment Zones */}
          <div>
            <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-blue-400" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Hemispheric Deployment Zones
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Ascendant Compute nodes are strategically placed across nearshore jurisdictions to
              support U.S. and global data requirements.
            </p>
            <div className="space-y-4">
              {[
                { name: 'Project Equinox (USGC)', badge: 'UPSTREAM NODE' },
                { name: 'Project Forge (Mexico)', badge: '450MW BTM CCGT' },
                { name: 'Project Eclipse (Jamaica)', badge: 'PORT ESQUIVEL' },
              ].map((zone) => (
                <div
                  key={zone.name}
                  className="flex justify-between items-center p-4 bg-[#020617] border border-slate-800 rounded-lg"
                >
                  <span className="text-slate-300 font-medium">{zone.name}</span>
                  <span className="text-xs text-blue-400 font-bold bg-blue-500/10 px-2 py-1 rounded">
                    {zone.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
