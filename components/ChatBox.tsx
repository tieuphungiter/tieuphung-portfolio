'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

// Static knowledge base — no API needed
const KB = {
  skills: `I specialize in:\n• **AI & Research**: Federated Learning, LLMs, RAG, Computer Vision (OpenCV/Neural Networks)\n• **DevOps/MLOps**: AWS, Docker, Kubernetes, Jenkins (Groovy), CI/CD Automation\n• **Backend**: Python (FastAPI/Flask), Distributed Systems\n• **Observability**: Prometheus, Grafana, SkyWalking, Glowroot\n• **System**: Linux/Windows Server Administration, Shell Scripting`,
  projects: `Notable projects & Research:\n1. **Federated Learning Framework** — Developing FL Framework for non-IID data distributions (Q1 Journal Research)\n2. **Rice Disease Classification** — Deep Learning models for agricultural image processing\n3. **Automated CI/CD for BM Tests** — Jenkins-based automation for high-availability infrastructure at DXC\n4. **AI-Integrated ERP** — Researching chatbot & data pipeline integration for manufacturing`,
  experience: `Professional Experience:\n• **DevOps Engineer** at **DXC Technology** (Dec 2021 – Present)\n• **Python Instructor** at **ICANTECH** (May 2022 – May 2025)\n• **Software Engineer Intern** at **Turbo Technology** (May – Nov 2021)`,
  contact: `Let's connect:\n•📞 **Zalo/Phone**: 0981172400\n•📧 **Email**: tieuphungiter@gmail.com\n• 💼 **LinkedIn**: linkedin.com/in/phung-nguyen82\n• 🐙 **GitHub**: github.com/phung-nguyen82\n\nI'm currently **open to new challenges** in AI Infrastructure & MLOps!`,
  about: `I am **Tieu Phung**, a DevOps Engineer & Computer Vision Researcher based in Ho Chi Minh City.\n\nWith 4+ years in DevOps Engineer and a Master’s focus on **Federated Learning**, I bridge the gap between robust DevOps practices and cutting-edge AI research. I'm passionate about building scalable AI systems and high-availability environments.`,
  hire: `🎉 I'm currently looking for roles as an **AI Specialist**, **MLOps Engineer**, or **Senior DevOps Engineer**.\n\nReach out to discuss how I can help your team:\n• 📞 **Zalo/Phone**: 0981172400\n• 📧 **Email**: tieuphungiter@gmail.com\n• 💼 **LinkedIn**: linkedin.com/in/phung-nguyen82\n\nLet's build the future of AI Infrastructure together!`,
}

function getReply(input: string): string {
  const q = input.toLowerCase().trim()

  if (q.includes('sudo hire') || q.includes('hire me') || q.includes('hire you')) return KB.hire
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('know')) return KB.skills
  if (q.includes('project') || q.includes('built') || q.includes('work on') || q.includes('portfolio')) return KB.projects
  if (q.includes('experience') || q.includes('job') || q.includes('work') || q.includes('company') || q.includes('career')) return KB.experience
  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('linkedin') || q.includes('github')) return KB.contact
  if (q.includes('about') || q.includes('who') || q.includes('yourself') || q.includes('tell me') || q.includes('introduce')) return KB.about
  if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('chào')) {
    return "Hey there! 👋 I'm Phụng's AI assistant. Ask me about **skills**, **projects**, **experience**, or try typing `sudo hire phung`!"
  }
  if (q.includes('thank') || q.includes('cảm ơn')) return "You're welcome! 😊 Feel free to ask anything else."

  return `Hmm, I'm not sure about that. Try asking me about:\n• Skills & tech stack\n• Projects I've built\n• Work experience\n• How to contact me\n\nOr try: \`sudo hire phung\` 😄`
}

const SUGGESTIONS = ['skills', 'projects', 'experience', 'contact', 'sudo hire phung']

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey! I'm Phụng's AI 👋\n\nAsk me about skills, projects, experience, or anything else!\n\n**Pro tip:** Try typing `sudo hire phung`",
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = messagesRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [messages, isTyping])

  function send(text?: string) {
    const value = (text ?? input).trim()
    if (!value) return

    const userMsg: Message = { role: 'user', content: value }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const reply = getReply(value)
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
      setIsTyping(false)
    }, 600 + Math.random() * 400)
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  // Render markdown-lite (bold + newlines + code)
  function renderContent(text: string) {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
      return (
        <span key={i} className="block">
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**'))
              return <strong key={j} className="text-zinc-100 font-semibold">{part.slice(2, -2)}</strong>
            if (part.startsWith('`') && part.endsWith('`'))
              return <code key={j} className="px-1 py-0.5 rounded bg-zinc-700/60 text-cyan-300 text-[11px] font-mono">{part.slice(1, -1)}</code>
            return <span key={j}>{part}</span>
          })}
        </span>
      )
    })
  }

  return (
    <div className="relative z-10 bg-[#111111] border border-zinc-800 rounded-2xl flex flex-col overflow-hidden h-115">
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/60 shrink-0">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-xs text-zinc-500 font-mono ml-1">tieuphung-ai ~</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-emerald-400 font-mono">LIVE</span>
        </div>
      </div>

      {/* Messages */}
      <div ref={messagesRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="w-6 h-6 rounded-full bg-linear-to-br from-cyan-500 to-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[10px]">🤖</span>
              </div>
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-cyan-500/15 border border-cyan-500/20 text-zinc-200 rounded-tr-sm'
                  : 'bg-zinc-800/60 border border-zinc-700/40 text-zinc-400 rounded-tl-sm'
              }`}
            >
              {renderContent(msg.content)}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-2 justify-start">
            <div className="w-6 h-6 rounded-full bg-linear-to-br from-cyan-500 to-violet-600 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[10px]">🤖</span>
            </div>
            <div className="bg-zinc-800/60 border border-zinc-700/40 rounded-2xl rounded-tl-sm px-3 py-2.5">
              <div className="flex gap-1 items-center h-3">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick suggestions */}
      <div className="px-4 pb-2 flex gap-1.5 flex-wrap shrink-0">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => send(s)}
            className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-zinc-700 text-zinc-500 hover:border-cyan-500/40 hover:text-cyan-400 transition-all bg-zinc-900/50 cursor-pointer"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="px-3 pb-3 shrink-0">
        <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 focus-within:border-cyan-500/40 transition-colors">
          <span className="text-cyan-400 font-mono text-xs shrink-0">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent text-xs text-zinc-300 placeholder:text-zinc-600 font-mono outline-none"
          />
          <button
            type="button"
            onClick={() => send()}
            disabled={!input.trim() || isTyping}
            className="shrink-0 w-6 h-6 flex items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
