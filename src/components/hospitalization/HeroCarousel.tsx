'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { HOSPITAL } from '@/lib/constants'
import QuickMenuGrid from '@/components/home/QuickMenuGrid'

/* ── slide data ── */
const slides = [
  {
    video: '/images/program/INDIVA.mp4',
    title: 'INDIBA',
    cardDesc: '448kHz 심부열 재생',
    heading: (
      <>
        INDIBA 심부열<br />
        <span className="text-white/45 font-light text-[0.55em]">깊은 곳부터 재생합니다</span>
      </>
    ),
    body: '448kHz 고주파 에너지가 근육·관절 깊숙이 침투하여 세포 재생을 촉진하고, 만성 통증과 부종을 빠르게 완화합니다.',
  },
  {
    image: '/images/program/lipocut.png',
    title: '리포컷',
    cardDesc: '한방 바디라인 케어',
    heading: (
      <>
        리포컷 바디케어<br />
        <span className="text-white/45 font-light text-[0.55em]">한방 체형 관리의 새로운 기준</span>
      </>
    ),
    body: '고주파 에너지와 한방 치료를 결합하여 체형 밸런스를 맞추고, 입원 기간 동안 집중적인 바디라인 케어를 제공합니다.',
  },
  {
    image: '/images/program/mizumo.png',
    title: '미주모',
    cardDesc: '두피·탈모 집중 케어',
    heading: (
      <>
        미주모 두피 재생<br />
        <span className="text-white/45 font-light text-[0.55em]">모근부터 되살리는 한방 솔루션</span>
      </>
    ),
    body: '한방 약침과 두피 전용 고주파를 결합한 프리미엄 탈모 케어. 모근 환경을 개선하고 건강한 모발 성장을 촉진합니다.',
  },
  {
    image: '/images/program/indiba-treatment.jpg',
    title: '통합 입원치료',
    cardDesc: '한양방 5인 협진',
    heading: (
      <>
        한방 입원<br />
        <span className="text-white/45 font-light text-[0.55em]">통합 치료의 시작</span>
      </>
    ),
    body: '한양방 전문의 5인 협진으로 입원 치료 계획을 수립하고, INDIBA·도수치료·침·한약 등 통합 치료를 집중적으로 시행합니다.',
  },
]

const AUTO_INTERVAL = 5000

/* card translateX values by position: [desktop, mobile] */
const txMap: Record<number, [number, number]> = {
  0: [0, 0],
  1: [240, 130],
  2: [430, 230],
  3: [570, 305],
}
const scaleMap: Record<number, number> = { 0: 1, 1: 0.85, 2: 0.72, 3: 0.62 }
const opacityMap: Record<number, number> = { 0: 1, 1: 0.75, 2: 0.42, 3: 0.18 }

/* 데스크톱 디자인 기준 너비 */
const DESIGN_WIDTH = 1500
const MIN_SCALE = 0.62

export default function HeroCarousel() {
  const [cur, setCur] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [scale, setScale] = useState(1)
  const total = slides.length
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth
      setIsMobile(w < 768)
      // 768px 이상에서 비례 축소 (md 구간은 더 작게)
      if (w >= DESIGN_WIDTH) setScale(1)
      else if (w >= 1024) setScale(Math.max(MIN_SCALE, w / DESIGN_WIDTH))
      else if (w >= 768) setScale(Math.max(0.45, w / 1650))
      else setScale(1)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  /* 자동 슬라이드 */
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCur((prev) => (prev + 1) % total)
    }, AUTO_INTERVAL)
  }, [total])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const go = useCallback((next: number) => {
    setCur(((next % total) + total) % total)
    resetTimer()
  }, [total, resetTimer])

  const posOf = (i: number) => ((i - cur + total) % total)

  /* ── 모바일 스와이프 ── */
  const touchStartX = useRef<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const threshold = 40
    if (dx > threshold) go(cur - 1)
    else if (dx < -threshold) go(cur + 1)
    touchStartX.current = null
  }

  return (
    <section
      className="relative md:h-dvh overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(155deg, #0a1a14 0%, #0f2a1f 20%, #163828 45%, #1d4d38 65%, #1a5040 80%, #185545 100%)',
      }}
    >
      {/* ── 배경 레이어들 ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 75% 40%, rgba(42,125,106,0.25) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(58,170,128,0.15) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(10,26,20,0.7) 0%, transparent 100%)' }}
      />
      <div
        className="absolute bottom-0 left-[-10%] right-[-10%] h-[45%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 100% 60% at 30% 100%, rgba(42,125,106,0.25) 0%, rgba(30,80,60,0.15) 40%, transparent 65%)' }}
      />
      <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent pointer-events-none hidden lg:block" />

      {/* ── 우측 하단 워터마크 로고 (md+) ── */}
      <div className="hidden md:block absolute md:bottom-[310px] md:right-5 lg:bottom-[340px] lg:right-6 xl:bottom-80 xl:right-8 md:w-[280px] lg:w-[360px] xl:w-[clamp(320px,32vw,520px)] md:opacity-[0.1] xl:opacity-[0.08] pointer-events-none select-none z-[5]">
        <Image
          src="/images/sangmu_logo.png"
          alt=""
          width={520}
          height={120}
          className="w-full h-auto brightness-0 invert"
          aria-hidden="true"
        />
      </div>

      {/* ── 사이드 도트 네비 (데스크톱만) ── */}
      <div className="hidden md:flex absolute left-3 md:left-4 lg:left-5 top-1/2 -translate-y-1/2 flex-col gap-2.5 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === cur
                ? 'bg-white scale-[1.4]'
                : 'bg-white/35 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* ── 메인 콘텐츠 ── */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-10 lg:px-20 xl:px-24 pt-6 md:pt-0 pb-0 md:pb-0 flex-1 flex items-start md:items-center">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] gap-0 md:gap-x-6 lg:gap-x-8 xl:gap-x-12 items-center w-full">

          {/* ── 모바일 전용: 큰 활성 카드 이미지 ── */}
          <div
            className="md:hidden relative w-full aspect-[4/5] max-h-[50dvh] mb-6 rounded-2xl overflow-hidden border border-white/15 shadow-[0_18px_44px_rgba(0,0,0,0.5)] touch-pan-y select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === cur ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {'video' in slide && slide.video ? (
                  <video
                    src={slide.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={slide.image!}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                )}
              </div>
            ))}
            {/* 하단 그라데이션 + 라벨 */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between">
              <div>
                <p className="text-[#3aaa80] text-[11px] tracking-[0.2em] uppercase font-bold mb-1">
                  {slides[cur].title}
                </p>
                <p className="text-white/80 text-xs">{slides[cur].cardDesc}</p>
              </div>
              {/* 모바일 도트 네비 */}
              <div className="flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === cur ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 왼쪽: 슬라이드 텍스트 */}
          <div className="relative min-h-0 md:min-h-[260px] lg:min-h-[320px] overflow-hidden mb-0">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`transition-all duration-400 ease-out ${
                  i === cur
                    ? 'relative opacity-100 translate-y-0 pointer-events-auto'
                    : 'absolute top-0 left-0 w-full opacity-0 translate-y-3.5 pointer-events-none'
                }`}
              >
                <div className="relative flex items-center gap-3 mb-3 md:mb-4 lg:mb-5">
                  <div className="w-6 md:w-7 lg:w-8 h-px bg-[#3aaa80]" />
                  <p className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-[#3aaa80]/80 font-medium">
                    Sangmu 365 · Hospitalization
                  </p>
                </div>

                <div className="flex flex-row items-center gap-3 md:block">
                  <h1
                    className="relative flex-1 min-w-0 md:flex-none text-white font-black leading-[1.15] md:leading-[1.1] lg:leading-[1.05] mb-0 md:mb-4 lg:mb-6"
                    style={{
                      textShadow: '0 2px 18px rgba(0,0,0,.35)',
                      fontSize: 'clamp(24px, 4.6vw, 72px)',
                    }}
                  >
                    {slide.heading}
                  </h1>

                  <p
                    className="relative hidden md:block text-white/75 leading-[1.7] lg:leading-[1.85] mb-5 md:mb-6 lg:mb-8 max-w-[480px]"
                    style={{ fontSize: 'clamp(12px, 1vw, 17px)' }}
                  >
                    {slide.body}
                  </p>

                  <div className="relative shrink-0 flex flex-row gap-3">
                    <a
                      href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3.5 bg-[#3aaa80] text-white text-[12px] md:text-[14px] lg:text-[15px] font-bold rounded-xl hover:bg-[#2f9670] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(58,170,128,0.35)] whitespace-nowrap"
                    >
                      <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                      <span className="hidden md:inline">입원 상담 </span>{HOSPITAL.phone}
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* 오른쪽: 스택형 카드 — md 미만에서는 숨기고 텍스트만 */}
          <div className="hidden md:block relative" style={{ height: `${440 * scale}px`, minHeight: 220 }}>
            {slides.map((slide, i) => {
              const pos = posOf(i)
              const cardW = (pos === 0 ? 360 : 320) * scale
              const tx = (txMap[pos]?.[0] ?? 0) * scale
              const imgH = (pos === 0 ? 360 : 300) * scale
              return (
                <div
                  key={i}
                  onClick={() => go(i)}
                  className="absolute left-0 top-1/2 rounded-2xl overflow-hidden border-[1.5px] cursor-pointer group
                    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                    hover:brightness-110"
                  style={{
                    width: `${cardW}px`,
                    transform: `translateY(-50%) translateX(${tx}px) scale(${scaleMap[pos] ?? 0.62})`,
                    opacity: opacityMap[pos] ?? 0.18,
                    zIndex: 40 - pos * 10,
                    borderColor: pos === 0 ? 'rgba(58,170,128,0.7)' : `rgba(255,255,255,${pos === 1 ? 0.18 : pos === 2 ? 0.15 : 0.1})`,
                    boxShadow: pos === 0
                      ? '0 0 0 2px rgba(58,170,128,0.3), 0 18px 44px rgba(0,0,0,0.5)'
                      : '0 8px 24px rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(8px)',
                    background: 'rgba(0,0,0,0.25)',
                  }}
                >
                  <div
                    className="w-full overflow-hidden"
                    style={{ height: `${imgH}px` }}
                  >
                    {'video' in slide && slide.video ? (
                      <video
                        src={slide.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <Image
                          src={slide.image!}
                          alt={slide.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="350px"
                        />
                      </div>
                    )}
                  </div>
                  <div className="p-3.5 md:p-4">
                    <h3 className="text-[15px] md:text-[17px] font-bold text-white mb-1">{slide.title}</h3>
                    <p className="text-[12px] text-white/55">{slide.cardDesc}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>

      {/* ── 모바일 전용 로고 브릿지 ── */}
      <div className="md:hidden relative z-10 w-full flex justify-center pt-1 pb-2">
        <div className="w-[55%] max-w-[240px] opacity-[0.18] pointer-events-none select-none">
          <Image
            src="/images/sangmu_logo.png"
            alt=""
            width={520}
            height={120}
            className="w-full h-auto brightness-0 invert"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ── 하단 퀵메뉴 ── */}
      <div className="relative z-10 w-full mt-auto">
        <QuickMenuGrid />
      </div>
    </section>
  )
}
