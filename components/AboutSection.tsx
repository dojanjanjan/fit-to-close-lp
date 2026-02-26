export default function AboutSection() {
  return (
    <section className="relative w-full min-h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/photo_2026-02-26_21-39-23.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-4xl mx-auto px-8 py-32 text-center">
        <h2 className="font-display text-5xl md:text-6xl font-black italic mb-8 bg-gradient-to-b from-white to-accent bg-clip-text text-transparent">
          FIT TO CLOSE: The Urban Pulse of Performance.
        </h2>
        <div className="font-mono text-lg md:text-xl leading-relaxed text-text space-y-6">
          <p>
            Where the raw, high-intensity energy of New York meets the visionary landscape of Bangkok. This is not another corporate seminar; it is a 5-hour high-stakes evolution designed for those who refuse to settle. We bridge the gap between sales mastery, mental resilience, and physical performance.
          </p>
          <p>
            Through a curated stack of elite sales experience, mindset training, and strategic nutrition, we equip you with the tools to dominate your field. You leave with fresh impulses, a sustainable community, and the definitive FTC Playbook. Leave the noise behind. Strengthen your mindset. Master the close.
          </p>
        </div>
      </div>
    </section>
  )
}
