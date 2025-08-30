"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"

const NAV_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = useCallback(() => setOpen(false), [])
  const toggleMenu = useCallback(() => setOpen((v) => !v), [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  useEffect(() => {
    const prev = document.body.style.overflow
    if (open) document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0F0F0F]/70 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="#overview" className="font-semibold text-white tracking-tight">
            <span className="sr-only">Home</span>
            <span aria-hidden className="text-white">
              Portfolio
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-black"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            <svg
              className={`h-6 w-6 transition-transform ${open ? "rotate-90" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/60" onClick={closeMenu} aria-hidden="true" />
          <div
            className="fixed top-16 left-4 right-4 z-50 rounded-xl border border-white/10 bg-[#121212]/95 backdrop-blur-xl shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            <nav className="p-2" aria-label="Mobile">
              <ul className="flex flex-col">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-gray-200 hover:bg-white/5 hover:text-white"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
