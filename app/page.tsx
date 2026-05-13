import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import ChatBox from '@/components/ChatBox'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Bento grid layout */}
      <main className="min-h-screen px-4 sm:px-6 pt-20 pb-6 max-w-350 mx-auto">
        {/* Row 1: Hero (left, tall) + Projects (right, wide) */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-3 mb-3">
          <Hero />
          <Projects />
        </div>

        {/* Row 2: Skills + Terminal/Chat + Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-3 mb-3">
          <Skills />
          <ChatBox />
          <Experience />
        </div>

        {/* Footer bar */}
        <Contact />
      </main>
    </>
  )
}