'use client'

import dynamic from 'next/dynamic'
import { Phone } from 'lucide-react'
import { IMAGES } from '@/lib/imagePaths'
import { HOSPITAL } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'

const KenBurnsSlideshow = dynamic(() => import('@/components/home/KenBurnsSlideshow'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 w-full h-full">
      <div
        className="absolute inset-0 noise-overlay"
        style={{
          background:
            'linear-gradient(135deg, #3a3028 0%, #5a4a3a 30%, #4a3f35 60%, #2d2520 100%)',
        }}
      />
    </div>
  ),
})

const trafficImages = [
  IMAGES.subpage.traffic,
  IMAGES.hero[0],
  IMAGES.hero[1],
]

export default function TrafficHero() {
  return (
    <section className="relative w-full h-[480px] md:h-[560px] overflow-hidden">
      {/* 배경: 메인페이지와 동일한 KenBurns */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <KenBurnsSlideshow images={trafficImages} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.6) 100%)',
            zIndex: 1,
          }}
        />
      </div>

      {/* 콘텐츠 */}
      <div className="relative h-full flex items-center" style={{ zIndex: 2 }}>
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <Container className="relative py-14 md:py-20">
          <div className="text-center text-white">
            <p
              className="text-white/60 text-sm tracking-widest uppercase mb-3"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
            >
              TRAFFIC ACCIDENT
            </p>
            <h1
              className="text-[32px] md:text-[46px] font-bold mb-5"
              style={{ textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}
            >
              교통사고 후유증
            </h1>
            <Badge className="bg-white/20 text-white border-0 mb-5 text-[15px]">
              자동차보험 적용 · 본인부담금 0원
            </Badge>
            <p
              className="text-white/80 text-base md:text-lg leading-[1.8] max-w-[540px] mx-auto mb-8"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
            >
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
      </div>
    </section>
  )
}
