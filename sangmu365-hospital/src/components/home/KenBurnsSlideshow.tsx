'use client'

import { useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

const slides = [
  {
    gradient:
      'linear-gradient(135deg, #3a3028 0%, #5a4a3a 30%, #4a3f35 60%, #2d2520 100%)',
    kenburns: 'kenburns-active-a',
  },
  {
    gradient:
      'linear-gradient(135deg, #2c3e3a 0%, #3d524d 30%, #354a45 60%, #253530 100%)',
    kenburns: 'kenburns-active-b',
  },
  {
    gradient:
      'linear-gradient(135deg, #3a3540 0%, #4d4555 30%, #423d4a 60%, #2d2830 100%)',
    kenburns: 'kenburns-active-c',
  },
]

export default function KenBurnsSlideshow() {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  const resetAndAnimate = useCallback((index: number) => {
    const el = slideRefs.current[index]
    if (!el) return
    // Force animation reset by removing class, forcing reflow, then re-adding
    const animClass = slides[index % slides.length].kenburns
    el.classList.remove(animClass)
    el.classList.add('kenburns-reset')
    // Force reflow
    void el.offsetWidth
    el.classList.remove('kenburns-reset')
    el.classList.add(animClass)
  }, [])

  const handleSlideChange = useCallback(
    (swiper: SwiperType) => {
      resetAndAnimate(swiper.realIndex)
    },
    [resetAndAnimate]
  )

  const handleInit = useCallback(
    (swiper: SwiperType) => {
      resetAndAnimate(swiper.realIndex)
    },
    [resetAndAnimate]
  )

  return (
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
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div
            ref={(el) => {
              slideRefs.current[i] = el
            }}
            className={`absolute inset-0 w-full h-full noise-overlay ${slide.kenburns}`}
            style={{
              background: slide.gradient,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              willChange: 'transform',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
