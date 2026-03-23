'use client'

import dynamic from 'next/dynamic'
import { Phone } from 'lucide-react'
import { HOSPITAL } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'

const TrafficSlideshow = dynamic(() => import('./TrafficSlideshow'), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(135deg, #3a3028 0%, #5a4a3a 30%, #4a3f35 60%, #2d2520 100%)',
      }}
    />
  ),
})

export default function TrafficHero() {
  return (
    <section className="relative w-full min-h-[420px] md:min-h-[520px] flex items-center overflow-hidden">
      {/* Ken Burns 슬라이드쇼 배경 */}
      <TrafficSlideshow />

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      {/* 콘텐츠 */}
      <Container className="relative z-[2] py-14 md:py-20">
        <div className="text-center text-white">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-3">
            TRAFFIC ACCIDENT
          </p>
          <h1 className="text-[32px] md:text-[46px] font-bold mb-5">
            교통사고 후유증
          </h1>
          <Badge className="bg-white/20 text-white border-0 mb-5 text-[15px]">
            자동차보험 적용 · 본인부담금 0원
          </Badge>
          <p className="text-white/80 text-base md:text-lg leading-[1.8] max-w-[540px] mx-auto mb-8">
            사고 직후 통증이 없더라도 반드시 검사를 받으셔야 합니다.<br />
            시간이 지나면서 후유증이 심해질 수 있습니다.<br />
            상무365한방병원은 365일 쉬지 않고 진료합니다.
          </p>
          <div className="flex flex-col min-[400px]:flex-row gap-3 justify-center">
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-primary rounded-xl font-bold text-base hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              전화상담 {HOSPITAL.phone}
            </a>
            <a
              href={HOSPITAL.kakao}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-4 border-2 border-white/40 text-white rounded-xl font-bold text-base hover:bg-white/10 transition-colors"
            >
              카카오톡 상담
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
