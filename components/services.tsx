const services = [
  // remove: { title: "Web Development", ... }
  { title: "UI Engineering", desc: "Accessible, responsive interfaces with modern CSS and micro-animations." },
  { title: "Content Strategy", desc: "Clear, structured storytelling that elevates products and portfolios." },
  { title: "Poetry", desc: "Original Bengali and English poetry—imagery-rich, intimate, and thoughtful." },
]
\
<section id="services" className="scroll-mt-24">
  <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">What I Do</h2>
  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
{
  services.map((s) => (
    <div
      key={s.title}
      className="rounded-xl bg-[#1A1A1A]/80 backdrop-blur-xl ring-1 ring-white/10 p-5 md:p-6 shadow-lg hover:shadow-2xl transition-shadow"
    >
      <h3 className="text-white font-semibold">{s.title}</h3>
      <p className="mt-2 text-gray-300 leading-7">{s.desc}</p>
    </div>
  ))
}
</div>
</section>
