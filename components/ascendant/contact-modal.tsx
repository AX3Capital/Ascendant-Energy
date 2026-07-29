'use client'

import { Network, X } from 'lucide-react'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#020617]/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative bg-[#0a0f1c] border border-slate-800 w-full max-w-md rounded-2xl shadow-2xl p-8">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Network className="w-6 h-6 text-cyan-500" aria-hidden="true" />
          </div>
          <h2 id="contact-modal-title" className="text-2xl font-bold text-white mb-2">
            Initiate MSA Discussion
          </h2>
          <p className="text-sm text-slate-400">Request Node Power Density Data</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <label className="sr-only" htmlFor="enterprise-name">Enterprise Name</label>
          <input
            id="enterprise-name"
            type="text"
            placeholder="Enterprise Name"
            className="w-full bg-[#020617] border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none focus:border-cyan-500/50 transition-colors"
          />
          <label className="sr-only" htmlFor="corporate-email">Corporate Email</label>
          <input
            id="corporate-email"
            type="email"
            placeholder="Corporate Email"
            className="w-full bg-[#020617] border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none focus:border-cyan-500/50 transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-lg transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
}
