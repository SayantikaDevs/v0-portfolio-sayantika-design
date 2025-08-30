"use client"
import { useEffect, useRef } from "react"
import type React from "react"

import { cn } from "@/lib/utils"

export default function Section({
  id,
  className,
  children,
  bleed = false,
  title,
  subtitle,
}: {
  id?: string
  className?: string
  children: React.ReactNode
  bleed?: boolean
  title?: string
  subtitle?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.classList.add("revealed")
        })
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <section
      id={id}
      ref={ref}
      className={cn("reveal", bleed ? "" : "container mx-auto max-w-6xl px-6", "py-16 md:py-24")}
    >
      {(title || subtitle) && (
        <header className="mb-10">
          {subtitle && <p className="text-xs uppercase tracking-widest text-[#3B82F6]/80">{subtitle}</p>}
          {title && <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">{title}</h2>}
        </header>
      )}
      <div className={className}>{children}</div>
    </section>
  )
}
