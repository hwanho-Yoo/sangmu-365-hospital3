import type { Metadata } from 'next'
import HeroCarousel from '@/components/hospitalization/HeroCarousel'

export const metadata: Metadata = {
  title: '입원안내 | 상무365한방병원',
  description: '365일 입원 가능. 교통사고 후유증, 척추·관절 통증 집중치료. INDIBA·도수치료·침·한약. 한양방 협진 입원 프로그램.',
}

export default function HospitalizationPage() {
  return (
    <div className="-mt-16">
      <HeroCarousel />
    </div>
  )
}
