"use client"
import { useState } from "react"

type Sample = { title: string; language: "bn" | "en"; category?: string; content?: string }

const samples: Sample[] = [
  { title: "নৈশব্দ", language: "bn", category: "Poem" },
  { title: "অপরাহ্নের জানালা", language: "bn", category: "Poem" },
  { title: "The Quiet Hour", language: "en", category: "Poem" },
  { title: "Cities Breathe", language: "en", category: "Micro" },
  // Add all remaining items from your provided list
]

export default function WritingSamples() {
  const [filter, setFilter] = useState<"all" | "bn" | "en">("all")
  const filtered = samples.filter((s) => (filter === "all" ? true : s.language === filter))
  return (
    <section id="writing" className="scroll-mt-24">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">Writing Samples</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-md text-sm ${filter === "all" ? "bg-[#3B82F6] text-white" : "bg-[#1A1A1A] text-gray-300 ring-1 ring-white/10"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("bn")}
            className={`px-3 py-1 rounded-md text-sm ${filter === "bn" ? "bg-[#3B82F6] text-white" : "bg-[#1A1A1A] text-gray-300 ring-1 ring-white/10"}`}
          >
            Bengali
          </button>
          <button
            onClick={() => setFilter("en")}
            className={`px-3 py-1 rounded-md text-sm ${filter === "en" ? "bg-[#3B82F6] text-white" : "bg-[#1A1A1A] text-gray-300 ring-1 ring-white/10"}`}
          >
            English
          </button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {filtered.map((s) => (
          <article
            key={s.title}
            className="rounded-xl bg-[#1A1A1A]/80 backdrop-blur-xl ring-1 ring-white/10 p-5 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-white font-semibold">{s.title}</h3>
            <p className="mt-1 text-xs text-gray-400 uppercase tracking-wide">
              {s.language === "bn" ? "Bengali" : "English"}
              {s.category ? ` · ${s.category}` : ""}
            </p>
            {s.content ? <p className="mt-3 text-gray-300 leading-7">{s.content}</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}
