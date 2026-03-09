import KenBurnsHero from '@/components/home/KenBurnsHero'
import QuickMenuGrid from '@/components/home/QuickMenuGrid'
import HeroCTA from '@/components/home/HeroCTA'
import { HOSPITAL } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* Fixed Ken Burns background */}
      <KenBurnsHero />

      {/* Hero content (100vh) */}
      <section className="relative h-dvh flex flex-col" style={{ zIndex: 2 }}>
        {/* 전체 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 상단: 병원명 + CTA */}
        <div className="relative flex-1 flex flex-col items-center justify-center px-4">
          <div className="text-center mb-6 md:mb-8">
            <h1
              className="text-white text-[32px] md:text-5xl font-bold tracking-tight mb-2"
              style={{ textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}
            >
              {HOSPITAL.name}
            </h1>
            <p
              className="text-white/60 text-[11px] md:text-sm tracking-[0.15em] uppercase"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
            >
              {HOSPITAL.nameEn}
            </p>
          </div>
          <HeroCTA />
        </div>

        {/* 하단: 퀵메뉴 */}
        <div className="relative w-full">
          <QuickMenuGrid />
        </div>
      </section>
    </>
  )
}
