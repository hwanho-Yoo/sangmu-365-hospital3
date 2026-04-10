'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Phone, MessageCircle } from 'lucide-react'
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
        INDIBA 심부열,<br />
        <span className="text-white/45 font-light text-[0.65em]">깊은 곳부터 재생합니다</span>
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
        리포컷 바디케어,<br />
        <span className="text-white/45 font-light text-[0.65em]">한방 체형 관리의 새로운 기준</span>
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
        미주모 두피 재생,<br />
        <span className="text-white/45 font-light text-[0.65em]">모근부터 되살리는 한방 솔루션</span>
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
        한방 입원,<br />
        <span className="text-white/45 font-light text-[0.65em]">통합 치료의 시작</span>
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
  2: [430, 235],
  3: [570, 310],
}
const scaleMap: Record<number, number> = { 0: 1, 1: 0.85, 2: 0.72, 3: 0.62 }
const opacityMap: Record<number, number> = { 0: 1, 1: 0.75, 2: 0.42, 3: 0.18 }

export default function HeroCarousel() {
  const [cur, setCur] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const total = slides.length
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
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

  return (
    <section
      className="relative h-dvh overflow-hidden flex flex-col"
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
      <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent pointer-events-none hidden md:block" />

      {/* ── 사이드 도트 네비 ── */}
      <div className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-50">
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
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-10 md:px-16 flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-0 items-center w-full">

          {/* 왼쪽: 슬라이드 텍스트 */}
          <div className="relative min-h-[260px] md:min-h-[320px] overflow-hidden pr-0 md:pr-7 mb-8 md:mb-0">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`transition-all duration-400 ease-out ${
                  i === cur
                    ? 'relative opacity-100 translate-y-0 pointer-events-auto'
                    : 'absolute top-0 left-0 w-full opacity-0 translate-y-3.5 pointer-events-none'
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-px bg-[#3aaa80]" />
                  <p className="text-xs tracking-[0.3em] uppercase text-[#3aaa80]/80 font-medium">
                    Sangmu 365 · Hospitalization
                  </p>
                </div>

                <h1
                  className="text-white text-[28px] md:text-[44px] lg:text-[52px] font-black leading-[1.1] mb-4"
                  style={{ textShadow: '0 2px 18px rgba(0,0,0,.35)' }}
                >
                  {slide.heading}
                </h1>

                <p className="text-white/70 text-sm md:text-[15px] leading-[1.85] mb-6 max-w-[400px]">
                  {slide.body}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#3aaa80] text-white text-[15px] font-bold rounded-xl hover:bg-[#2f9670] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(58,170,128,0.35)]"
                  >
                    <Phone className="w-5 h-5" />
                    입원 상담 {HOSPITAL.phone}
                  </a>
                  <a
                    href={HOSPITAL.kakao}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-white/15 text-white/80 text-sm font-medium rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    카카오톡 상담
                  </a>
                </div>

              </div>
            ))}
          </div>

          {/* 오른쪽: 스택형 카드 — 모바일에서는 숨기고 텍스트만 */}
          <div className="hidden md:block relative h-[55dvh] min-h-[400px]">
            {slides.map((slide, i) => {
              const pos = posOf(i)
              return (
                <div
                  key={i}
                  onClick={() => go(i)}
                  className={`absolute left-0 top-1/2 w-[320px] rounded-2xl overflow-hidden border-[1.5px] cursor-pointer group
                    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                    hover:brightness-110
                    ${pos === 0 ? 'w-[350px]' : ''}
                  `}
                  style={{
                    transform: `translateY(-50%) translateX(${txMap[pos]?.[0] ?? 0}px) scale(${scaleMap[pos] ?? 0.62})`,
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
                    style={{ height: pos === 0 ? 360 : 300 }}
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

      {/* ── 하단 퀵메뉴 ── */}
      <div className="relative z-10 w-full mt-auto">
        <QuickMenuGrid />
      </div>
    </section>
  )
}
