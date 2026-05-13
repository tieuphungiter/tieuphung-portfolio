const skillCategories = [
  {
    name: 'AI / ML',
    icon: '🤖',
    color: 'from-violet-500 to-purple-500' as const,
    skills: [
      { name: 'LLMs', level: 90 },
      { name: 'RAG', level: 88 },
      { name: 'LangChain', level: 85 },
      { name: 'LangGraph', level: 82 },
    ],
  },
  {
    name: 'Backend',
    icon: '⚡',
    color: 'from-cyan-500 to-blue-500' as const,
    skills: [
      { name: 'Python', level: 92 },
      { name: 'FastAPI', level: 88 },
      { name: 'Celery', level: 78 },
      { name: 'RabbitMQ', level: 75 },
    ],
  },
  {
    name: 'Database',
    icon: '🗄️',
    color: 'from-emerald-500 to-teal-500' as const,
    skills: [
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'Neo4J', level: 72 },
    ],
  },
  {
    name: 'MLOps',
    icon: '☁️',
    color: 'from-orange-500 to-red-500' as const,
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'GCP', level: 78 },
      { name: 'AWS', level: 72 },
      { name: 'Kubernetes', level: 70 },
    ],
  },
]

export default function Skills() {
  return (
    <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-base">⚡</span>
        <h2 className="text-sm font-semibold text-zinc-100">Skills</h2>
      </div>

      {/* 2-column grid of skill groups */}
      <div className="grid grid-cols-2 gap-4">
        {skillCategories.map((cat) => (
          <div key={cat.name}>
            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mb-2">{cat.name}</p>
            <div className="space-y-2">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-[11px] text-zinc-300 font-mono">{skill.name}</span>
                    <span className="text-[10px] text-zinc-600 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-linear-to-r ${cat.color}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


