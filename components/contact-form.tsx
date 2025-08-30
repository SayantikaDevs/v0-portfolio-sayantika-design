"use client"
import { useState } from "react"
import type React from "react"

function emailValid(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs: typeof errors = {}
    if (!name.trim()) errs.name = "Please enter your name."
    if (!email.trim() || !emailValid(email)) errs.email = "Please enter a valid email."
    if (message.trim().length < 10) errs.message = "Message should be at least 10 characters."
    setErrors(errs)
    if (Object.keys(errs).length) return

    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 800))
      setSent(true)
      setName("")
      setEmail("")
      setMessage("")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-300" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-[#3B82F6]/50 focus:ring-2 focus:ring-[#3B82F6]/20 text-white placeholder:text-gray-300/60"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-err" : undefined}
          />
          {errors.name && (
            <p id="name-err" className="mt-1 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className="text-sm text-gray-300" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-[#3B82F6]/50 focus:ring-2 focus:ring-[#3B82F6]/20 text-white placeholder:text-gray-300/60"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-err" : undefined}
          />
          {errors.email && (
            <p id="email-err" className="mt-1 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm text-gray-300" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-[#3B82F6]/50 focus:ring-2 focus:ring-[#3B82F6]/20 text-white placeholder:text-gray-300/60"
          placeholder="Tell me about your project..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-err" : undefined}
        />
        {errors.message && (
          <p id="message-err" className="mt-1 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#3B82F6] px-4 py-2 font-medium text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/50 disabled:opacity-60 transition"
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
      {sent && <p className="mt-3 text-sm text-green-400">Thanks! I’ll get back to you soon.</p>}
    </form>
  )
}
