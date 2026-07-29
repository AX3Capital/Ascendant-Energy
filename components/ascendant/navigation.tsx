'use client'

import { Server } from 'lucide-react'

interface NavigationProps {
  isScrolled: boolean
  onContactOpen: () => void
}

export function Navigation({ isScrolled, onContactOpen }: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#020617]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl'
          : 'py-6 bg-gradient-to-b from-[#020617]/90 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center">
            <Server className="w-5 h-5 text-cyan-400" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-100 leading-none tracking-tight">
              ASCENDANT COMPUTE
            </span>
            <span className="text-[10px] text-cyan-400 tracking-[0.2em] font-semibold uppercase mt-1">
              Hemispheric Infrastructure
            </span>
          </div>
        </div>

        <button
          onClick={onContactOpen}
          className="px-5 py-2.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
        >
          Initiate MSA Specs
        </button>
      </div>
    </nav>
  )
}
