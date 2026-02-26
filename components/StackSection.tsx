const stackItems = [
  {
    num: '01 / MINDSET',
    title: 'BREATHWORK',
    description: 'Controlled stress response for high-pressure negotiations.',
  },
  {
    num: '02 / MOVEMENT',
    title: 'PERFORMANCE',
    description: 'Gym & Yoga designed for endurance and mental clarity.',
  },
  {
    num: '03 / FUEL',
    title: 'NUTRITION',
    description: 'Strategic eating protocols to master the sales day.',
  },
  {
    num: '04 / REVENUE',
    title: 'THE CLOSE',
    description: 'Advanced strategies for closing high-ticket deals.',
  },
]

export default function StackSection() {
  return (
    <section id="program" className="relative z-10 bg-bg/80 py-32 border-t border-muted w-full">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="mb-16">
          <h2 className="font-display text-5xl uppercase text-accent">
            THE 5H STACK
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stackItems.map((item, index) => (
            <div
              key={index}
              className="border border-muted p-8 transition-all duration-300 bg-bg hover:border-accent hover:-translate-y-1"
            >
              <span className="text-sm text-accent mb-4 block">{item.num}</span>
              <h3 className="font-display text-2xl mb-4 uppercase">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
