const skillCategories = [
  {
    name: 'AI / ML',
    icon: '🤖',
    color: 'from-violet-500 to-purple-500' as const,
    skills: [
      { name: 'Federated Learning', level: 90 }, // Chuyên môn nghiên cứu chính
      { name: 'Computer Vision\nImage Processing', level: 85 }, // Phân loại bệnh trên lúa & Xử lý ảnh
      { name: 'LLMs & RAG', level: 80 }, // Tích hợp LLM vào sản phẩm, xây dựng RAG systems
      { name: 'Deep Learning', level: 80 }, // Mạng nơ-ron sâu, CNN, RNN, Transformers, v.v.
    ],
  },
{
    name: 'Infrastructure & OS',
    icon: '💻',
    color: 'from-gray-600 to-slate-800' as const,
    skills: [
      { name: 'Linux', level: 90 }, 
      { name: 'Windows Server', level: 80 },
      { name: 'Scripting (Python/Bash/Shell/Groovy)', level: 85 },
      { name: 'Virtualization (VMware/Hyper-V)', level: 82 },
    ],
  },
  {
    name: 'Database',
    icon: '🗄️',
    color: 'from-emerald-500 to-teal-500' as const,
    skills: [
      { name: 'MSSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    name: 'DevOps',
    icon: '☁️',
    color: 'from-orange-500 to-red-500' as const,
    skills: [
      { name: 'AWS Cloud', level: 83 },
      { name: 'Kubernetes & Docker', level: 80 },
      { name: 'Observability', level: 78 },
      { name: 'CI/CD Pipelines', level: 75 },
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


