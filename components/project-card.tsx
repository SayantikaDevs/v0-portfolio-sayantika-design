"use client"
import { useRef } from "react"
import type React from "react"

import Image from "next/image"
import { cn } from "@/lib/utils"

export default function ProjectCard({
  title,
  desc,
  tags,
  href,
  image,
  className,
}: {
  title: string
  desc: string
  tags: string[]
  href?: string
  image?: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    const rx = (y / r.height - 0.5) * -10
    const ry = (x / r.width - 0.5) * 10
    el.style.setProperty("transform", `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`)
    el.style.setProperty("--mx", `${(x / r.width) * 100}%`)
    el.style.setProperty("--my", `${(y / r.height) * 100}%`)
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty("transform", "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)")
  }

  const card = (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10",
        "transition shadow-lg hover:shadow-2xl hover:ring-1 hover:ring-[#3B82F6]/30",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(59,130,246,0.12), transparent 40%)",
          opacity: 0.0,
        }}
      />
      {image ? (
        <Image
          src={image || "/placeholder.svg"}
          alt=""
          width={1200}
          height={720}
          className="h-44 w-full object-cover opacity-90"
        />
      ) : (
        <div className="h-44 w-full bg-[#1A1A1A]" />
      )}
      <div className="p-5">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-300">{desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs rounded-full bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/30"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className="block">
        {card}
      </a>
    )
  }
  return card
}
