import Image from 'next/image'

export default function TestimonialSection() {
  return (
    <section className="relative z-10 bg-bg py-32 border-t border-muted">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="relative flex flex-col items-center justify-center text-center">
          <div className="relative inline-block max-w-3xl md:pr-40">
            <div className="md:absolute -top-4 right-0 md:-right-8 z-10 mb-8 md:mb-0">
              <div className="flex flex-col items-center gap-2">
                <div className="polaroid-frame">
                  <Image
                    src="/images/fit-to-close_ceo_patrick_wilth.webp"
                    alt="Patrick Wilth - CEO of FIT TO CLOSE"
                    width={150}
                    height={180}
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-1 text-center">
                  <p className="font-display text-sm text-accent uppercase">
                    Patrick Wilth
                  </p>
                  <p className="text-xs text-muted uppercase tracking-wider">
                    CEO of FIT TO CLOSE
                  </p>
                </div>
              </div>
            </div>
            <blockquote className="font-mono text-xl md:text-2xl leading-relaxed text-text mb-6 text-center md:text-right">
              <span className="block">&ldquo;Winning is a habit.</span>
              <span className="block">You don&apos;t start winning at 9:00 AM;</span>
              <span className="block">you start at 5:00 AM in the gym.&rdquo;</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
