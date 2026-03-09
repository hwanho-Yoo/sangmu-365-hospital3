import KenBurnsHero from '@/components/home/KenBurnsHero'
import QuickMenuGrid from '@/components/home/QuickMenuGrid'
import HeroCTA from '@/components/home/HeroCTA'
import { HOSPITAL } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* Fixed Ken Burns background */}
      <KenBurnsHero />

      {/* Hero content — fills exactly one viewport */}
      <section className="relative h-dvh flex flex-col pb-[60px] md:pb-0" style={{ zIndex: 2 }}>
        {/* 전체 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* 상단: 병원명(PC만) + CTA 버튼 */}
        <div className="relative flex-1 flex flex-col items-center justify-center px-4">
          {/* 병원명 — PC에서만 표시 */}
          <div className="hidden md:block text-center mb-8">
            <h1
              className="text-white text-5xl font-bold tracking-tight mb-2"
              style={{ textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}
            >
              {HOSPITAL.name}
            </h1>
            <p
              className="text-white/60 text-sm tracking-[0.15em] uppercase"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
            >
              {HOSPITAL.nameEn}
            </p>
          </div>
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
