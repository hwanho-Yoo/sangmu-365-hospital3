import KenBurnsHero from '@/components/home/KenBurnsHero'
import QuickMenuGrid from '@/components/home/QuickMenuGrid'
import HeroCTA from '@/components/home/HeroCTA'
import HeroScrollIndicator from '@/components/home/HeroScrollIndicator'
import USPBar from '@/components/home/USPBar'
import TrafficAccidentSection from '@/components/home/TrafficAccidentSection'
import DoctorTeamSection from '@/components/home/DoctorTeamSection'
import TreatmentSection from '@/components/home/TreatmentSection'
import EquipmentSection from '@/components/home/EquipmentSection'
import ReviewSection from '@/components/home/ReviewSection'
import LocationSection from '@/components/home/LocationSection'
import { HOSPITAL } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* Fixed Ken Burns background */}
      <KenBurnsHero />

      {/* Zone 1: Hero content (100vh, overlaid on Ken Burns) */}
      <section className="relative h-dvh flex flex-col" style={{ zIndex: 2 }}>
        {/* 상단: 히어로 이미지 위 병원명 + CTA */}
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="text-center mb-6 md:mb-8">
            <h1
              className="text-white text-[32px] md:text-5xl font-bold tracking-tight mb-2"
              style={{ textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}
            >
              {HOSPITAL.name}
            </h1>
            <p
              className="text-white/60 text-xs md:text-sm tracking-[0.15em] uppercase"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
            >
              {HOSPITAL.nameEn}
            </p>
          </div>
          <HeroCTA />
        </div>

        {/* 하단: 퀵메뉴 - 짙은 배경으로 선명하게 */}
        <div className="w-full">
          <QuickMenuGrid />
        </div>

        {/* Scroll indicator */}
        <HeroScrollIndicator />
      </section>

      {/* Zone 2: Content (scrolls over fixed hero) */}
      <div className="relative rounded-t-2xl overflow-hidden pb-20 md:pb-0" style={{ zIndex: 2, background: 'white' }}>
        <USPBar />
        <TrafficAccidentSection />
        <DoctorTeamSection />
        <TreatmentSection />
        <EquipmentSection />
        <ReviewSection />
        <LocationSection />
      </div>
    </>
  )
}
