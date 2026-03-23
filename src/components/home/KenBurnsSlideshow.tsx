'use client'

import { useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { IMAGES } from '@/lib/imagePaths'

const defaultImages = IMAGES.hero
const kenburnsClasses = ['kenburns-active-a', 'kenburns-active-b', 'kenburns-active-c']

interface KenBurnsSlideshowProps {
  images?: string[]
}

export default function KenBurnsSlideshow({ images }: KenBurnsSlideshowProps = {}) {
  const slideImages = images && images.length > 0 ? images : defaultImages
  const slides = slideImages.map((image, i) => ({
    image,
    kenburns: kenburnsClasses[i % kenburnsClasses.length],
  }))
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  const resetAndAnimate = useCallback((index: number) => {
    const el = slideRefs.current[index]
    if (!el) return
    const animClass = slides[index % slides.length].kenburns
    el.classList.remove(animClass)
    el.classList.add('kenburns-reset')
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
              backgroundImage: `url(${slide.image})`,
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
