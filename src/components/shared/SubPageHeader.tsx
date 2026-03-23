'use client'

import { useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { IMAGES } from '@/lib/imagePaths'

interface SubPageHeaderProps {
  title: string
  subtitle?: string
  bgImage?: string
  images?: string[]
}

const subtitleToImage: Record<string, string> = {
  ABOUT: IMAGES.subpage.about,
  'TRAFFIC ACCIDENT': IMAGES.subpage.traffic,
  TREATMENT: IMAGES.subpage.treatment,
}

const kenburnsClasses = ['kenburns-active-a', 'kenburns-active-b', 'kenburns-active-c']

export default function SubPageHeader({ title, subtitle, bgImage, images }: SubPageHeaderProps) {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  const defaultImage = bgImage || (subtitle && subtitleToImage[subtitle]) || IMAGES.subpage.default
  const slideImages = images && images.length > 1 ? images : [defaultImage, ...IMAGES.hero].slice(0, 3)

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
    <div className="relative w-full flex items-center justify-center h-[280px] md:h-[420px] overflow-hidden">
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
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="relative text-center px-4 z-[2]">
        {subtitle && (
          <p className="text-white/60 text-sm tracking-widest uppercase mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="text-white text-[30px] md:text-[42px] font-bold">{title}</h1>
      </div>
    </div>
  )
}
