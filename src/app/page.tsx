import KenBurnsHero from '@/components/home/KenBurnsHero'
import QuickMenuGrid from '@/components/home/QuickMenuGrid'
import HeroCTA from '@/components/home/HeroCTA'

export default function HomePage() {
  return (
    <>
      {/* Fixed Ken Burns background */}
      <KenBurnsHero />

      {/* Hero content — fills exactly one viewport */}
      <section className="relative h-dvh flex flex-col pb-[60px] md:pb-0" style={{ zIndex: 2 }}>
        {/* 전체 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* 상단: CTA 버튼 */}
        <div className="relative flex-1 flex flex-col items-center justify-center px-4">
          <HeroCTA />
        </div>

        {/* 하단: 퀵메뉴 격자 */}
        <div className="relative w-full">
          <QuickMenuGrid />
        </div>
      </section>
    </>
  )
}
