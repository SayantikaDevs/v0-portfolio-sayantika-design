import dynamic from "next/dynamic"
import Particles from "@/components/particles"
import Typing from "@/components/typing"
import Section from "@/components/section"
import SkillsConstellation from "@/components/skills-constellation"
import Timeline, { type TimelineItem } from "@/components/timeline"
import { Inter } from "next/font/google"
import { PenTool, FileText, ScrollText, Mail, Linkedin, Instagram, Twitter, Facebook, Github } from "lucide-react"

const inter = Inter({ subsets: ["latin"], display: "swap" })
const ContactForm = dynamic(() => import("@/components/contact-form"), { ssr: false })

export default function Page() {
  const timeline: TimelineItem[] = [
    {
      period: "Present",
      title: "Social Media Manager",
      org: "Jagadhatri Puja Committee",
      details: "Managing content calendars, publishing schedules, and engagement strategies across platforms.",
    },
    {
      period: "Previous",
      title: "Content Writer (Intern)",
      org: "Code Visionary Studio",
      details: "Wrote SEO-friendly posts, technical docs, and campaign microcopy with measurable uplift.",
    },
  ]

  const poems = [
    {
      title: "বন্ধু শব্দটা থেকে",
      content:
        "বন্ধু শব্দটা থেকে দিন দিন বিশ্বাস উঠে যাচ্ছে  \nবন্ধুত্ব ও আজকাল এক তরফাই হচ্ছে \nবন্ধু ভাবতাম যাদের তারাই আজ হারিয়ে যাচ্ছে \nবন্ধু আর বন্ধুত্বের কথা বললে যার কথা মনে পড়ত \nসেই ও আজকার আমাকে ভুলে যাচ্ছে \nশুনেছিলাম নতুন বন্ধুদের ভিড়ে  \nসবাই খুব ব্যস্ত হয়ে পড়েছে  \nহয়তঃ বন্ধু আমি খুব খারাপ \nতাই আমাকেই সবাই ভুলে যাচ্ছে  \nনতুন বন্ধুর ভিড়ে আমি একা  \nসবার থেকে বহু দূর দাড়িয়ে আচ্ছি  \nআমার নতুন পুরানো সব বন্ধুরা \nকেমন ভাবে সবাই হারিয়ে যাচ্ছে",
    },
    {
      title: "Love and Unlove",
      content:
        "We don't unlove the people we love, \nWe just stop expecting love; \nWe shower over them. \nWe just learn that love can't be forced, \nWe just silently accept the fact; \nWe were immature to fall for them. \nBut have you ever wondered! \nYou still remember your first crush! \nYou still remember your first high school love! \nYou still remember your every firsts in love! \nYes we all do the same. \nBecause we never unlove the people we love, \nWe never learnt to unlove anyone; \nBut just to love the people we love.",
    },
    {
      title: "I AM STILL WAITING FOR YOU",
      content:
        "I am still waiting for you,\nMy life is a bit void without you,\nI can see you , feel you; \nIn my dreams everyday.\nHowever, don't know how you look,\nStill I love you from the bottom of my heart!\nYou are the reason,\nBehind my every unconditional smiles and laughter.\nYou are that person with whom,\nI want to share my everything!\nEvery moments of love and sorrows...\nMoreover, my whole life till my death.\nI am still waiting for you,\nMy life is a bit void without you.\nI know it's weird to think of you,\nA person whom I have never met in my life ;\nBut in my dreams daily at late nights.\nI really don't know anything about you!\nWhere you stay?\nWhere you go?\nWhat are your dreams?\nWhat I really know!\nIs nothing about you?\nHowever, I know,\nThat oneday we will surely meet,\nNot in my dreams...\nBut in my real life.\nI am still waiting for you,\nMy life is a bit void without you.\nI am still waiting for you...",
    },
    {
      title: "বন্ধু",
      content:
        "বন্ধু আর বন্ধুত্বের কথা বললে ,\nআমার সবার আগে তোর কথাই মনে পড়ে।\nহ্যাঁ...বন্ধু তো আমার প্রচুর আছে ;\nকিন্তু তুই একটু বেশি স্পেশাল আমার কাছে ।\nতোর কাছেই প্রথম, বন্ধু কাকে বলে চেনা \nআর তোর কাছেই প্রথম বন্ধুত্বের মনে বোঝা ,\nআমার ঐ প্রচুর বন্ধুদের থেকে তুই অনেক আলাদা।\nসেই একদম ছোটবেলার বন্ধু তুই!\nতোর সাথেই প্রথম ঝগড়া করা !\nআর তোর সাথেই প্রথম খেলতে যাওয়া!\nমনে পড়ে সেই ছোটবেলার দিন গুলোর কথা!\nএক  সাথে সেই দলে রং খেলা;\nআর দুর্গা পুজোতে অঞ্জলি দেওয়া;\nতোর সাথেই সেই আড়ি আর ভাব করা!\nআর তোর সাথেই প্যান্ডেলে প্যান্ডেলে ঘোড়া ফেরা !\nমনে পড়ে সেই ছোটবেলার দিন গুলোর কথা!\nএক সাথে সেই অলি - গলি তে পাঁচিল টপকানো,\nআর মাঠে ক্রিকেট - ব্যাদমিন্টন কত কি খেলা।\nকত ভালো ছিল সেই আমাদের ছোটবেলাটা...\nকোনো চিন্তা নেই, একসাথে শুধু মজা - আদ্দা - হুল্লোড়,\nতোর সাথেই তো আমার ছোটবেলার দিন গুলো কেটেছিল,\nআর তোর সাথেই তো আমার স্মৃতির খাতা ভরেছিল।\nতাই সব সময় প্রার্থনা করি,\nআমরা যেনো এরকম ই বন্ধু থাকি।\nআমাদের বন্ধুত্ব যেনো সারাজীবন এরকম ই থাকে।\nতাই আবারও একটাই কথা বলতে চাই তোকে:\nবন্ধু আর বন্ধুত্বের কথা বললে,\nআমার সবার আগে তোর কথা মনে পড়ে।\nহ্যাঁ... তোর কথা মনে পড়ে , বন্ধু!",
    },
    {
      title: "Mess is the new life",
      content:
        "Life is all about creating the mess. \nA mess that's hard to be tidied up! \nA total chaos of messing up; \nThen trying hard to clean up. \nMess gets messier and \nLife gets entangled. \nEntangled with the beauty; \nOf being imperfect. \nThe imperfections that define us... \nOur entangled chaotic thoughts: \nOf being an adult, \nOf being responsible, \nOf being successful. \nChaos becomes chaotic over time, \nImperfections become signatures, \nBeauty still lies in the mess... \nThe mess of imperfections, \nThe mess of chaotic thoughts, \nThe mess of adulting, \nThe mess is in: \nEverything, everywhere, \nThe part of life, we share. \nMess is the new life! \nHoping to embrace imperfections! \nAnd manifest the chaos... \nA chaotic, messy, imperfect \nBut beautiful as a life.",
    },
    {
      title: "Random 2am Thoughts — 1",
      content:
        "এই বৃষ্টির ফোঁটা গুলো আমাকে তোর কথা মনে করায়ে \nএই ঝড় হাওয়া আমাকে তোর উপস্থিতি অনুভব করায়ে \nএই ভাবে আমার তোর সাথে আখন কথা হয়ে \nএই ভাবে আমার তোর সাথে প্রতিটা বৃষ্টির দিনে দেখা হয়ে",
    },
    {
      title: "Random 2am Thoughts — 2",
      content: "They never told \nThey never expressed \nThey just made me realised \nI'm not their cup of tea",
    },
    {
      title: "Random 2am Thoughts — 3",
      content:
        "Jaha pyaar hoga, woha dard hoga, \nAur jaha dard hoga, woha bhi pyaar hi hoga \nKaro uss dard se itna pyaar \nKi wo dard, dard na rahe, ban jaye pyaar",
    },
    {
      title: "Random 2am Thoughts — 4",
      content:
        "We all have a different version , appearance, energy, vibe and interest when we meet different persons. For some we feel super excited, for some we feel nervous, for some we feel chill vibes and for some we feel just a responsibility. So, we might think we are the same version of ourselves to every single person we meet in our lives but that's not true. We are actually the different versions of the same soul but not of the same personality.",
    },
    {
      title: "Random 2am Thoughts — 5",
      content:
        "Going through my journals today just to recall the years. I found on this very day four years back. We had a family picnic and that day I decided or rather I had some new year's resolutions ... We just learned to live with them...",
    },
  ]

  return (
    <main className={`${inter.className} relative min-h-screen bg-[#0F0F0F] text-white`}>
      {/* Floating particles background */}
      <Particles />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-semibold tracking-tight">
            Sayantika Nayak
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#work" className="hover:text-white transition">
              Experience
            </a>
            <a href="#writing" className="hover:text-white transition">
              Writing
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
          <details className="md:hidden relative">
            <summary aria-label="Open menu" className="cursor-pointer rounded-md px-2 py-1 hover:bg-white/5">
              Menu
            </summary>
            <div className="absolute right-0 top-full mt-2 z-50 w-64 rounded-lg bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 p-2 flex flex-col text-sm text-gray-300">
              <a href="#about" className="px-2 py-1 rounded hover:bg-white/5">
                About
              </a>
              <a href="#services" className="px-2 py-1 rounded hover:bg-white/5">
                Services
              </a>
              <a href="#work" className="px-2 py-1 rounded hover:bg-white/5">
                Experience
              </a>
              <a href="#writing" className="px-2 py-1 rounded hover:bg-white/5">
                Writing
              </a>
              <a href="#contact" className="px-2 py-1 rounded hover:bg-white/5">
                Contact
              </a>
            </div>
          </details>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-lg bg-[#3B82F6] hover:opacity-95 text-white px-3 py-1.5 text-sm transition"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <Section bleed>
        <div className="container mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1
                className="text-5xl md:text-7xl font-black text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #3B82F6, #FFFFFF)" }}
              >
                Content Writer & Developer
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                Crafting compelling stories and building digital experiences that connect and convert —{" "}
                <Typing words={["SEO articles", "Web copy", "Technical docs", "Social content", "Modern web apps"]} />
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center rounded-xl bg-[#3B82F6] hover:opacity-95 text-white px-4 py-2 text-sm transition shadow-lg"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 text-gray-300 hover:bg-white/10 transition"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="floating">
              <div className="rounded-2xl bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 p-6">
                <SkillsConstellation />
                <p className="mt-4 text-sm text-gray-300">
                  Hover to explore skills. Lines indicate relationships and depth of experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About Me" subtitle="Overview">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 rounded-2xl bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 p-6">
            <p className="text-gray-300 leading-relaxed">
              Currently studying as a college student but thrilled enthusiast in content writing and blog posts.
              Creative writing, editing, and storytelling skills with a proven ability to meet deadlines and align
              content with brand objectives to meet client requirements, I bridge the gap between storytelling and
              technology. I help businesses communicate their message through both written content and digital
              experiences.
            </p>
            <ul className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-300">
              {["Descriptive Writing", "Poetry", "Technical Writing", "Copywriting", "Blog Posts", "Social Media"].map(
                (s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#3B82F6]" />
                    {s}
                  </li>
                ),
              )}
            </ul>
            {/* Achievements as bullet points for clarity and accessibility */}
            <div className="mt-6 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/30 p-4 text-gray-300">
              <h3 className="text-white font-semibold">Achievements</h3>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Recognised as Top 10 in India’s Youngest Poet (2023)</li>
                <li>Recognised as Top 100, Internationally in Heartfulness Essay Event (2019)</li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 p-6 flex flex-col items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DP%20Titir.jpg-97ABzBDoEDZnyeuqAJHTAh0kEFCv5J.jpeg"
              alt="Portrait photo at a café"
              className="size-48 rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-4 text-sm text-gray-300 text-center">
              Based in India • Available for freelance projects and collaborations.
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" title="What I Do" subtitle="Services">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              Icon: FileText,
              title: "Content Writing",
              desc: "SEO-optimized articles, blog posts, and web copy that engage readers and drive conversions.",
            },
            {
              Icon: PenTool,
              title: "Poetry",
              desc: "Original Bengali and English poetry—imagery-rich, intimate, and thoughtful.",
            },
            {
              Icon: ScrollText,
              title: "Technical Writing",
              desc: "Clear, comprehensive documentation and technical content for software products.",
            },
          ].map((s) => (
            <div key={s.title} className="group">
              <div className="rounded-2xl bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 p-6 transition hover:shadow-2xl">
                <s.Icon className="text-[#3B82F6]" size={24} aria-hidden />
                <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience / Projects */}
      <Section id="work" title="Working Experience" subtitle="Experience">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 p-6">
            <Timeline items={timeline} />
          </div>
        </div>
      </Section>

      {/* Writing Samples */}
      <Section id="writing" title="Writing Samples" subtitle="Poetry & Thoughts">
        <div className="grid md:grid-cols-3 gap-6">
          {poems.map((p) => (
            <article key={p.title} className="rounded-2xl bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 p-6">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-300 leading-7">{p.content}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-300">More writings available on request. Bengali originals included.</p>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Let’s Work Together" subtitle="Contact">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            {/* @ts-expect-error async dynamic */}
            <ContactForm />
          </div>
          <div className="rounded-2xl bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 p-6">
            <h3 className="text-white font-semibold">Contact info</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:sayantikanayak04@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 border border-white/10">
                    <Mail size={16} aria-hidden />
                  </span>
                  <span className="text-[#3B82F6] hover:underline">sayantikanayak04@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sayantika-nayak"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 border border-white/10">
                    <Linkedin size={16} aria-hidden />
                  </span>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/_unspoken.feelings_04"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 border border-white/10">
                    <Instagram size={16} aria-hidden />
                  </span>
                  <span>@_unspoken.feelings_04</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Sayantika_Devs"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 border border-white/10">
                    <Twitter size={16} aria-hidden />
                  </span>
                  <span>Twitter / X</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/fQnran4qxVH9U9CD/?mibextid=qi2Omg"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 border border-white/10">
                    <Facebook size={16} aria-hidden />
                  </span>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SayantikaDevs"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 border border-white/10">
                    <Github size={16} aria-hidden />
                  </span>
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 text-xs text-gray-300">Response time: within 24–48 hours.</div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} Sayantika Nayak. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#about" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#services" className="text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#work" className="text-gray-300 hover:text-white">
              Experience
            </a>
            <a href="#writing" className="text-gray-300 hover:text-white">
              Writing
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
