"use client"
export type TimelineItem = {
  period: string
  title: string
  org: string
  details: string
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-s border-white/10 pl-6">
      {items.map((it, idx) => (
        <li key={idx} className="mb-10 ms-4">
          <div className="absolute -left-[9px] mt-1 size-4 rounded-full border border-[#3B82F6]/40 bg-[#3B82F6]/25" />
          <time className="text-xs text-gray-300">{it.period}</time>
          <h3 className="mt-1 text-base font-semibold text-white">{it.title}</h3>
          <p className="text-sm text-[#3B82F6]">{it.org}</p>
          <p className="mt-2 text-sm text-gray-300">{it.details}</p>
        </li>
      ))}
    </ol>
  )
}
