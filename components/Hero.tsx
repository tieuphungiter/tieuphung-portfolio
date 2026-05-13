"use client"

import React from "react"
import Image from 'next/image'
import { useEffect, useState } from "react"

const roles = [
  "Senior DevOps Engineer",
  "MLOps Engineer",
  "AI Engineer",
  "Software Engineer",
]

function TerminalRole() {
  const [displayed, setDisplayed] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIndex((c) => c + 1)
        }
      } else {
        setDisplayed(current.slice(0, Math.max(0, charIndex - 1)))
        if (charIndex - 1 <= 0) {
          setDeleting(false)
          setRoleIndex((r) => (r + 1) % roles.length)
          setCharIndex(0)
        } else {
          setCharIndex((c) => c - 1)
        }
      }
    }, deleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <p className="mt-1.5 text-sm text-zinc-400 font-mono flex items-center gap-1">
      <span className="text-cyan-500">&gt;</span>
      <span>{displayed}</span>
      <span className="inline-block w-[2px] h-[1em] bg-cyan-400 animate-pulse" />
    </p>
  )
}

export default function Hero() {
  // Handler to force download the resume (works even if browser would otherwise open PDF)
  const handleDownloadResume = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const url = 'https://github.com/tieuphungiter/tieuphung-portfolio/blob/main/public/CV_DevOps_Nguyen_Tieu_Phung.pdff' // adjust path if your file is located elsewhere
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error('Network response was not ok')
      const blob = await res.blob()
      const blobUrl = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = blobUrl
      a.download = 'CV_Nguyen_Tieu_Phung.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(blobUrl)
    } catch (err) {
      console.error('Download failed', err)
      // Fallback: navigate to the file so the browser can handle it
      window.location.href = url
    }
  }

  return (
    <div className="relative bg-[#111111] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between overflow-hidden min-h-80 lg:min-h-0">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-size-[3rem_3rem] rounded-2xl" />

      <div className="relative z-10 flex flex-col h-full gap-4">
        {/* Top: status + avatar */}
        <div className="flex items-start justify-between">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </div>
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-zinc-700 shadow-lg shrink-0">
            <Image src="https://github.com/tieuphungiter/tieuphung-portfolio/blob/main/public/images/profile.png" alt="Tieu_Phung" fill sizes="(max-width: 1024px) 100vw, 340px" className="object-cover" priority />
          </div>
        </div>

        {/* Name & role */}
        <div>
          <p className="text-zinc-500 font-mono text-xs mb-1">Hi, I&apos;m</p>
          <h1 className="text-3xl font-bold tracking-tight leading-tight">
            <span className="text-white">Tieu </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-violet-400">Phung</span>
          </h1>
          <TerminalRole />
        </div>

        {/* Location, email & Zalo */}
        <div className="space-y-1 text-xs text-zinc-500 font-mono">
          <p className="flex items-center gap-1.5">
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Ho Chi Minh City, Vietnam
          </p>
          <a href="mailto:tieuphungiter@gmail.com" className="flex items-center gap-1.5 text-cyan-400/70 hover:text-cyan-400 transition-colors">
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            tieuphungiter@gmail.com
          </a>
          <a href="https://zalo.me/0981172400" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-cyan-400/70 hover:text-cyan-400 transition-colors">
            <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 2.89 1.23 5.494 3.196 7.334L4.5 21.5l2.303-.766A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-1.5 5.5h1.25c.138 0 .25.112.25.25v.5c0 .138-.112.25-.25.25H10.5v1h1.25c.138 0 .25.112.25.25v.5c0 .138-.112.25-.25.25H10.5v1h1.25c.138 0 .25.112.25.25v.5c0 .138-.112.25-.25.25h-2a.25.25 0 01-.25-.25v-4.5c0-.138.112-.25.25-.25h1zm3.25 0h.5c.138 0 .25.112.25.25v4.5c0 .138-.112.25-.25.25h-.5c-.138 0-.25-.112-.25-.25v-4.5c0-.138.112-.25.25-.25zm-5 5.5h5a.5.5 0 010 1h-5a.5.5 0 010-1zm0 2h3a.5.5 0 010 1h-3a.5.5 0 010-1z"/>
            </svg>
            Zalo · 0981 172 400
          </a>
        </div>

        {/* Description */}
        <p className="text-xs text-zinc-400 leading-relaxed">
          Specializing in
          <span className="text-blue-400"> DevOps </span> automation &amp;
          high availability infrastructure. Passionate about
          <span className="text-cyan-400"> Computer Vision, LLMs </span>,
          <span className="text-violet-400"> MLOps </span>, and scaling cloud-native AI solutions.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-2 mt-auto pt-2">
          <a
            href="https://github.com/tieuphungiter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 transition-all"
            title="GitHub"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com/in/phung-nguyen82"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 transition-all"
            title="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/tieuphungiter/tieuphung-portfolio/blob/main/public/CV_DevOps_Nguyen_Tieu_Phung.pdf"
            onClick={handleDownloadResume}
            className="ml-auto text-xs px-3 py-1.5 rounded-lg border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all font-mono"
            aria-label="Download resume"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </div>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
