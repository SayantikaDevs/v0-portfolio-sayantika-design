import Link from "next/link"

const socials = [
  { label: "Email", href: "mailto:you@example.com", icon: "✉️" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle", icon: "in" },
  { label: "GitHub", href: "https://github.com/your-handle", icon: "{ }" },
  { label: "Twitter/X", href: "https://x.com/your-handle", icon: "𝕏" },
  { label: "Instagram", href: "https://instagram.com/your-handle", icon: "📷" },
]

export default function ContactInfo() {
  return (
    <div className="space-y-3">
      {socials.map((s) => (
        <Link
          key={s.label}
          href={s.href}
          className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
        >
          <span
            aria-hidden
            className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1A1A1A] ring-1 ring-white/10 text-sm"
          >
            {s.icon}
          </span>
          <span className="underline-offset-4 hover:underline">{s.label}</span>
        </Link>
      ))}
    </div>
  )
}
