import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Premium Portfolio — Sayantika",
  description: "Content Writer & Developer — premium dark portfolio with work, writing, and contact.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Premium Portfolio — Sayantika",
    description: "Content Writer & Developer — premium dark portfolio with work, writing, and contact.",
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Portfolio — Sayantika",
    description: "Content Writer & Developer — premium dark portfolio with work, writing, and contact.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans bg-[#0F0F0F] text-zinc-200 selection:bg-blue-500/20 selection:text-blue-300">
        {children}
      </body>
    </html>
  )
}
