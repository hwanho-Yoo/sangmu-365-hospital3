'use client'

import { useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { Phone } from 'lucide-react'
import { IMAGES } from '@/lib/imagePaths'
import { HOSPITAL } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'

const slideImages = [
  IMAGES.subpage.traffic,
  IMAGES.hero[0],
  IMAGES.hero[1],
]

const kenburnsClasses = ['kenburns-active-a', 'kenburns-active-b', 'kenburns-active-c']

export default function TrafficHero() {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  const resetAndAnimate = useCallback((index: number) => {
    const el = slideRefs.current[index]
    if (!el) return
    const animClass = kenburnsClasses[index % kenburnsClasses.length]
    el.classList.remove(animClass)
    el.classList.add('kenburns-reset')
    void el.offsetWidth
    el.classList.remove('kenburns-reset')
    el.classList.add(animClass)
  }, [])

  const handleSlideChange = useCallback(
    (swiper: SwiperType) => resetAndAnimate(swiper.realIndex),
    [resetAndAnimate]
  )

  const handleInit = useCallback(
    (swiper: SwiperType) => resetAndAnimate(swiper.realIndex),
    [resetAndAnimate]
  )

  return (
    <section className="relative w-full min-h-[420px] md:min-h-[520px] flex items-center overflow-hidden">
      {/* Ken Burns 슬라이드쇼 배경 */}
      <Swiper
        className="hero-swiper absolute inset-0 w-full h-full"
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        speed={1500}
        allowTouchMove={false}
        onSlideChange={handleSlideChange}
        onInit={handleInit}
      >
        {slideImages.map((image, i) => (
          <SwiperSlide key={i}>
            <div
              ref={(el) => {
                slideRefs.current[i] = el
              }}
              className={`absolute inset-0 w-full h-full ${kenburnsClasses[i % kenburnsClasses.length]}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                willChange: 'transform',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

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
