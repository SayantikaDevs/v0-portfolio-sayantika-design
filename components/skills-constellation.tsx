"use client"
import { useEffect, useRef, useState } from "react"

type Node = { x: number; y: number; r: number; label: string }

const skills = [
  "Descriptive Writing",
  "Poetry",
  "Technical Writing",
  "Copywriting",
  "Blog Posts",
  "Social Media",
  "React",
  "Next.js",
  "SEO",
  "Markdown",
]

export default function SkillsConstellation() {
  const ref = useRef<HTMLCanvasElement | null>(null)
  const [hover, setHover] = useState<string | null>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext("2d")!
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    canvas.width = (canvas.clientWidth || 800) * dpr
    canvas.height = (canvas.clientHeight || 360) * dpr
    ctx.scale(dpr, dpr)

    const w = canvas.width / dpr
    const h = canvas.height / dpr
    const pad = 48

    const nodes: Node[] = skills.map((s, i) => ({
      x: pad + (i * (w - pad * 2)) / (skills.length - 1),
      y: h / 2 + Math.sin((i / skills.length) * Math.PI * 2) * (Math.min(w, h) / 5.5),
      r: 8,
      label: s,
    }))

    const draw = (mx?: number, my?: number) => {
      ctx.clearRect(0, 0, w, h)
      // lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j]
          const dx = a.x - b.x,
            dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < 220) {
            const alpha = 1 - d / 220
            ctx.strokeStyle = `rgba(59,130,246,${alpha * 0.28})` // #3B82F6
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      // nodes
      nodes.forEach((n) => {
        const hl = mx !== undefined && my !== undefined ? Math.hypot(mx - n.x, my - n.y) < 48 : false
        if (hl) setHover(n.label)
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r + (hl ? 2 : 0), 0, Math.PI * 2)
        ctx.fillStyle = hl ? "rgba(59,130,246,0.9)" : "rgba(255,255,255,0.5)"
        ctx.fill()
        // draw label only when hovered to prevent overlapping/cut-off text
        if (hl) {
          ctx.font = "12px Inter, system-ui, sans-serif"
          ctx.fillStyle = "#FFFFFF"
          ctx.textAlign = "center"
          ctx.fillText(n.label, Math.max(12, Math.min(w - 12, n.x)), Math.max(14, n.y - 14))
        }
      })
    }

    draw()
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      setHover(null)
      draw(mx, my)
    }
    canvas.addEventListener("mousemove", onMove)
    return () => canvas.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <div className="relative">
      <canvas
        ref={ref}
        className="w-full h-[360px] rounded-2xl bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10"
      />
      {hover && (
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/50 text-xs text-gray-300 border border-white/10">
          {hover}
        </div>
      )}
    </div>
  )
}
