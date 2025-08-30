"use client"
import { useEffect, useRef } from "react"

type P = { x: number; y: number; vx: number; vy: number; r: number }

export default function Particles({ density = 0.00012 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  const pts = useRef<P[]>([])
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext("2d")!
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const init = () => {
      pts.current = []
      const count = Math.min(220, Math.floor(w * h * density))
      for (let i = 0; i < count; i++) {
        pts.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.6 + 0.4,
        })
      }
    }

    const dpr = Math.min(2, window.devicePixelRatio || 1)
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.scale(dpr, dpr)
    init()

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      // particles
      for (const p of pts.current) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(209,213,219,0.28)" // gray-300 with opacity (neutral)
        ctx.fill()
      }
      // connections
      for (let i = 0; i < pts.current.length; i++) {
        for (let j = i + 1; j < pts.current.length; j++) {
          const a = pts.current[i],
            b = pts.current[j]
          const dx = a.x - b.x,
            dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < 110) {
            const alpha = 1 - d / 110
            ctx.strokeStyle = `rgba(59,130,246,${alpha * 0.25})` // #3B82F6 with opacity
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      raf.current = requestAnimationFrame(draw)
    }
    raf.current = requestAnimationFrame(draw)

    const onResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      const dprR = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = w * dprR
      canvas.height = h * dprR
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dprR, dprR)
      init()
    }
    window.addEventListener("resize", onResize)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      window.removeEventListener("resize", onResize)
    }
  }, [density])

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 -z-10 opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      aria-hidden
    />
  )
}
