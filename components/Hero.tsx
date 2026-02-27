export default function Hero() {
  return (
    <header className="h-screen flex flex-col justify-center relative w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/photo_2026-02-26_21-39-23.jpg)',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-20 max-w-[1200px] mx-auto px-8 w-full">
        <div className="inline-block bg-accent text-bg px-3 py-1 font-bold w-fit text-sm mb-4 relative z-30">
          BANGKOK 2026
        </div>
        <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] uppercase mb-8 tracking-[-0.02em] animate-slideIn font-black hero-bold italic bg-gradient-to-b from-white to-accent bg-clip-text text-transparent relative z-30">
          FIT TO<br />CLOSE<span className="text-[0.3em]">©</span>
        </h1>
        <div className="flex flex-col gap-6 max-w-[600px] relative z-30">
          <p className="text-xl text-text uppercase transition-all duration-700 opacity-0 translate-y-4 animate-[fadeIn_0.7s_ease-out_0.3s_forwards]">
            The 5H Performance Masterclass for high-stakes closers & sales leaders.
          </p>
          <p className="text-text transition-all duration-700 opacity-0 translate-y-4 animate-[fadeIn_0.7s_ease-out_0.5s_forwards]">Mindset. Movement. Nutrition. Sales Closing.</p>
          <div className="mt-4 transition-all duration-700 opacity-0 translate-y-4 animate-[fadeIn_0.7s_ease-out_0.7s_forwards]">
            <a
              href="/book-now"
              className="inline-block bg-accent text-bg px-8 py-4 font-display text-xl uppercase transition-all duration-500 hover:scale-105 hover:bg-white hover:text-bg"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
