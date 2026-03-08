import KenBurnsHero from '@/components/home/KenBurnsHero'
import QuickMenuGrid from '@/components/home/QuickMenuGrid'
import HeroCTA from '@/components/home/HeroCTA'
import USPBar from '@/components/home/USPBar'
import TrafficAccidentSection from '@/components/home/TrafficAccidentSection'
import DoctorTeamSection from '@/components/home/DoctorTeamSection'
import TreatmentSection from '@/components/home/TreatmentSection'
import EquipmentSection from '@/components/home/EquipmentSection'
import ReviewSection from '@/components/home/ReviewSection'
import LocationSection from '@/components/home/LocationSection'

export default function HomePage() {
  return (
    <>
      {/* Zone 1: Hero (100vh fullscreen) */}
      <section className="relative w-full h-dvh flex flex-col items-center justify-center overflow-hidden">
        <KenBurnsHero />

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center gap-8 md:gap-10 px-4 w-full">
          {/* Hospital name */}
          <div className="text-center">
            <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-2">
              상무365한방병원
            </h1>
            <p className="text-white/70 text-sm md:text-base">
              광주 상무지구 | 교통사고·통증·추나 전문
            </p>
          </div>

          {/* Quick menu grid */}
          <QuickMenuGrid />

          {/* CTA buttons */}
          <HeroCTA />
        </div>
      </section>

      {/* Zone 2: Below fold sections */}
      <div className="pb-20 md:pb-0">
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
