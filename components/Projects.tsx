import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4">
      {/* Projects grid — horizontal scroll on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 h-full">
        {projects.slice(0, 3).map((project, i) => (
          <div
            key={i}
            className="group relative bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all duration-300 flex flex-col"
          >
            {/* Gradient preview area */}
            <div className={`relative h-32 bg-linear-to-br ${project.gradient} opacity-20 flex items-center justify-center`}>
              <div className="absolute inset-0 bg-linear-to-br from-zinc-900/50 to-transparent" />
              <ProjectIcon className="w-10 h-10 text-white/30" />
              {/* External link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-md bg-zinc-800/80 text-zinc-400 hover:text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="p-3 flex flex-col gap-2 flex-1">
              <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white leading-tight">{project.name}</h3>
              <p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-2 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-800 text-zinc-400 rounded border border-zinc-700/50">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-1.5 py-0.5 text-[10px] font-mono text-zinc-600">+{project.tags.length - 3}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="self-end text-xs text-zinc-500 hover:text-zinc-300 font-mono transition-colors"
      >
        View all on GitHub →
      </a>
    </div>
  )
}

function ProjectIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )
}
