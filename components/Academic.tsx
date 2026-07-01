'use client'

import { useMemo, useState } from 'react'
import { certifications, publications } from '@/data/achievements'

export default function Academic() {
  const [activeTab, setActiveTab] = useState<'publications' | 'certifications'>('publications')

  const activeItems = useMemo(
    () => (activeTab === 'publications' ? publications : certifications),
    [activeTab],
  )

  const hasOverflowItems = activeItems.length > 3

  return (
    <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-base">🎓</span>
        <h2 className="text-sm font-semibold text-zinc-100">Academic & Certificates</h2>
      </div>

      <div className="inline-flex w-fit rounded-lg border border-zinc-800 bg-zinc-900/60 p-0.5">
        <button
          type="button"
          onClick={() => setActiveTab('publications')}
          className={`px-2.5 py-1 text-[10px] font-mono rounded-md transition-colors ${
            activeTab === 'publications'
              ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/20'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          📄 Publications
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('certifications')}
          className={`px-2.5 py-1 text-[10px] font-mono rounded-md transition-colors ${
            activeTab === 'certifications'
              ? 'bg-amber-500/15 text-amber-300 border border-amber-500/20'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          🏅 Certifications
        </button>
      </div>

      <div
        className={`rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-3 ${
          hasOverflowItems ? 'max-h-36 overflow-y-auto pr-2' : 'overflow-hidden'
        }`}
      >
        <ul className="space-y-2">
          {activeItems.map((item, index) => (
            <li key={`${item.title}-${item.subtitle}-${index}`} className="text-xs text-zinc-300 leading-relaxed">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  {item.title}
                </a>
              ) : (
                <span>{item.title}</span>
              )}
              <span className="text-zinc-500">, {item.subtitle}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
