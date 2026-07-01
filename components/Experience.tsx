'use client'

import { useMemo, useState } from 'react'
import { certifications, publications } from '@/data/achievements'
import { experiences } from '@/data/experience'

const typeColors: Record<string, string> = {
  'Full-time': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  'Part-time': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Intern': 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  'Freelance': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'publications' | 'certifications'>('publications')

  const activeItems = useMemo(
    () => (activeTab === 'publications' ? publications : certifications),
    [activeTab],
  )

  const hasOverflowItems = activeItems.length > 3

  return (
    <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-base">💼</span>
        <h2 className="text-sm font-semibold text-zinc-100">Experience</h2>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col gap-3">
        {/* Vertical line */}
        <div className="absolute left-1.25 top-2 bottom-2 w-px bg-linear-to-b from-cyan-500/50 via-zinc-700/40 to-transparent" />

        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-5">
            {/* Dot */}
            <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border-2 border-cyan-500 bg-[#111111]" />

            <div className="bg-zinc-900/50 border border-zinc-800/60 rounded-xl p-3 hover:border-zinc-700 transition-colors">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <p className="text-sm font-medium text-zinc-100 leading-tight">{exp.role}</p>
                  <p className="text-xs text-cyan-400/80 mt-0.5">{exp.company}</p>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded border font-mono shrink-0 ${typeColors[exp.type] ?? 'text-zinc-400 bg-zinc-800 border-zinc-700'}`}>
                  {exp.type === 'Full-time' ? 'Full' : exp.type}
                </span>
              </div>
              <p className="text-[10px] text-zinc-600 font-mono mb-2">
                {exp.period} · {exp.location}
              </p>
              <div className="flex flex-wrap gap-1">
                {exp.tags.map((tag) => (
                  <span key={tag} className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-800 text-zinc-400 rounded border border-zinc-700/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Publications & Certifications */}
      <div className="pt-2 border-t border-zinc-800/70 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold text-zinc-200 tracking-wide">Academic & Certificates</h3>
          <div className="inline-flex rounded-lg border border-zinc-800 bg-zinc-900/60 p-0.5">
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
        </div>

        <div
          className={`rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-3 ${
            hasOverflowItems ? 'max-h-36 overflow-y-auto pr-2' : 'overflow-hidden'
          }`}
        >
          <ul className="space-y-2">
            {activeItems.map((item) => (
              <li key={item.title} className="text-xs text-zinc-300 leading-relaxed">
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
    </div>
  )
}
