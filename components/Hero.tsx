export default function Hero() {
  return (
    <header className="h-[80vh] flex flex-col justify-center relative">
      <div className="inline-block bg-accent text-bg px-3 py-1 font-bold w-fit text-sm mb-4">
        BANGKOK 2026
      </div>
      <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] uppercase mb-8 tracking-[-0.02em] animate-slideIn font-black hero-bold italic bg-gradient-to-b from-white to-accent bg-clip-text text-transparent">
        FIT TO<br />CLOSE<span className="text-[0.3em]">©</span>
      </h1>
      <div className="flex flex-col gap-4 max-w-[600px]">
        <p className="text-xl text-muted uppercase">
          The 5H Performance Masterclass for high-stakes closers & sales leaders.
        </p>
        <p>Mindset. Movement. Nutrition. Sales Closing.</p>
      </div>
    </header>
  )
}
