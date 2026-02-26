export default function SportSection() {
  return (
    <section className="sticky top-0 w-full h-[60vh] z-0 relative overflow-hidden">
      <div 
        className="absolute bg-cover bg-center bg-no-repeat ken-burns"
        style={{
          backgroundImage: 'url(/images/fit-to-close_sport_01.webp)',
          width: '150%',
          height: '150%',
          top: '-25%',
          left: '-25%',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black z-30 pointer-events-none" />
      <div className="absolute inset-0 bg-black/50 z-30 pointer-events-none" />
    </section>
  )
}
