import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone, MessageCircle,
  Car, Leaf, StretchHorizontal, Zap, Crosshair,
  Sparkles, BedDouble, UserRound, CalendarCheck, MapPin,
  Shield, Clock, Heart, Utensils, Stethoscope, Pill,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '입원안내 | 상무365한방병원',
  description: '365일 입원 가능. 교통사고 후유증, 척추·관절 통증 집중치료. INDIBA·도수치료·침·한약. 한양방 협진 입원 프로그램.',
}

/* ── data ── */

const quickMenu = [
  { label: '교통사고', href: '/traffic-accident', icon: Car },
  { label: '한방치료', href: '/treatment', icon: Leaf },
  { label: '도수·체형교정', href: '/chiropractic', icon: StretchHorizontal },
  { label: '체외충격파', href: '/shockwave', icon: Zap },
  { label: '초음파약침', href: '/ultrasound-acupuncture', icon: Crosshair },
  { label: '피부진료', href: '/skin', icon: Sparkles },
  { label: '입원안내', href: '/hospitalization', icon: BedDouble },
  { label: '의료진', href: '/doctors', icon: UserRound },
  { label: '진료예약', href: '/reservation', icon: CalendarCheck },
  { label: '오시는길', href: '/directions', icon: MapPin },
]

const heroCards = [
  {
    image: '/images/program/INDIVA.avif',
    title: 'INDIBA',
    desc: '448kHz 심부 재생',
  },
  {
    image: '/images/program/lipocut.png',
    title: '리포컷',
    desc: '한방 바디라인 케어',
  },
  {
    image: '/images/skin-mijuan.png',
    title: '미주안',
    desc: 'PN 스킨부스터',
  },
]

const treatments = [
  {
    icon: Stethoscope,
    title: '한양방 협진 치료',
    desc: '한의사와 정형외과 전문의가 함께 입원 치료 계획을 수립합니다.',
    highlight: true,
  },
  {
    icon: Shield,
    title: '교통사고 입원',
    desc: '자동차보험 적용, 본인부담금 없이 입원 치료가 가능합니다.',
  },
  {
    icon: Clock,
    title: '365일 입원 가능',
    desc: '주말·공휴일에도 입원 접수 및 치료를 받으실 수 있습니다.',
  },
  {
    icon: Heart,
    title: '간호등급 2등급',
    desc: '24시간 전담 간호팀이 환자분을 꼼꼼히 케어합니다.',
  },
  {
    icon: Utensils,
    title: '365파인다이닝',
    desc: '영양사 관리 하에 맛과 영양을 갖춘 식사를 제공합니다.',
  },
  {
    icon: Pill,
    title: '입원 중 프리미엄 케어',
    desc: 'INDIBA·도수치료·침·한약을 입원 기간 중 함께 받으실 수 있습니다.',
  },
]

export default function HospitalizationPage() {
  return (
    <div className="bg-white text-[#111]">

      {/* ═══════════════════════════════════════════
          01. 히어로 — 그래디언트 + 스태거드 카드
          ═══════════════════════════════════════════ */}
      <section
        className="relative min-h-[520px] md:min-h-[580px] overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #1a2e28 0%, #1e3a30 30%, #24503c 55%, #2a6a4e 75%, #2a7d6a 100%)',
        }}
      >
        {/* 하단 글로우 레이어 */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 130% 80% at 50% 110%, rgba(42,125,106,0.6) 0%, rgba(30,80,65,0.4) 35%, transparent 70%)',
          }}
        />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* 왼쪽 텍스트 */}
            <FadeIn>
              <div>
                <p className="text-sm tracking-[0.25em] uppercase text-white/50 mb-6">
                  Sangmu 365 · Hospitalization
                </p>
                <h1 className="text-white text-[32px] md:text-[48px] lg:text-[58px] font-black leading-[1.1] mb-6" style={{ textShadow: '0 2px 18px rgba(0,0,0,.35)' }}>
                  한방 입원,<br />
                  <span className="text-white/60 font-normal text-[0.75em]">통합 치료의 시작</span>
                </h1>
                <p className="text-white/75 text-sm md:text-base leading-[1.85] mb-8 max-w-[420px]">
                  한양방 전문의 5인 협진으로 입원 치료 계획을 수립하고,
                  INDIBA·도수치료·침·한약 등 통합 치료를 집중적으로 시행합니다.
                </p>
                <a
                  href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#3aaa80] text-white text-base font-bold rounded-lg hover:bg-[#2f9670] transition"
                >
                  <Phone className="w-5 h-5" />
                  입원 상담 {HOSPITAL.phone}
                </a>
              </div>
            </FadeIn>

            {/* 오른쪽 스태거드 카드 3장 */}
            <div className="flex gap-3 md:gap-4 items-start justify-center md:justify-end">
              {heroCards.map((card, i) => {
                const sizes = [
                  'w-[160px] md:w-[200px] mt-0',
                  'w-[140px] md:w-[175px] mt-6 md:mt-8',
                  'w-[120px] md:w-[150px] mt-12 md:mt-16',
                ]
                const heights = [
                  'h-[160px] md:h-[200px]',
                  'h-[140px] md:h-[170px]',
                  'h-[120px] md:h-[140px]',
                ]
                return (
                  <FadeIn key={card.title} delay={i * 120}>
                    <div
                      className={`${sizes[i]} rounded-2xl overflow-hidden border-[1.5px] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.4)] ${
                        i === 0
                          ? 'border-white/60 shadow-[0_0_0_2px_rgba(255,255,255,0.3)]'
                          : 'border-white/20'
                      } ${i === 2 ? 'opacity-80' : ''}`}
                      style={{ backdropFilter: 'blur(4px)', background: 'rgba(0,0,0,0.18)' }}
                    >
                      <div className={`relative ${heights[i]} overflow-hidden`}>
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                          sizes="200px"
                        />
                      </div>
                      <div className="p-3 md:p-3.5">
                        <h3 className="text-sm md:text-[15px] font-bold text-white mb-0.5">{card.title}</h3>
                        <p className="text-[11px] md:text-xs text-white/55">{card.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 02. 퀵 메뉴 ═══════ */}
      <section className="py-8 md:py-10 bg-white border-b border-[#f0f0f0]">
        <Container>
          <div className="grid grid-cols-5 gap-2 md:gap-4">
            {quickMenu.map((item, i) => {
              const Icon = item.icon
              const isActive = item.href === '/hospitalization'
              return (
                <FadeIn key={item.label} delay={i * 25}>
                  <Link
                    href={item.href}
                    className={`flex flex-col items-center gap-1.5 md:gap-2 py-2.5 md:py-4 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-[#2a7d6a]/10 text-[#2a7d6a]'
                        : 'hover:bg-[#fafafa] text-[#555]'
                    }`}
                  >
                    <Icon className={`w-5 h-5 md:w-7 md:h-7 ${isActive ? 'text-[#2a7d6a]' : 'text-[#bbb]'}`} strokeWidth={1.5} />
                    <span className={`text-[10px] md:text-sm font-medium ${isActive ? 'text-[#2a7d6a] font-bold' : ''}`}>
                      {item.label}
                    </span>
                  </Link>
                </FadeIn>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ═══════ 03. 숫자 바 ═══════ */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { num: '5인', label: '한·양방 전문의' },
              { num: '365일', label: '연중무휴 입원' },
              { num: '2등급', label: '간호 인력 등급' },
              { num: '24시간', label: '전담 간호 케어' },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 80}>
                <p className="text-[#111] text-[36px] md:text-[48px] font-black leading-none">{s.num}</p>
                <p className="text-[#999] text-sm mt-3">{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════ 04. 갤러리 모자이크 ═══════ */}
      <section className="py-16 md:py-24 bg-[#f7f7f2]">
        <Container>
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-[#999] mb-4">Facilities</p>
              <h2 className="text-[28px] md:text-[44px] font-black">입원 환경</h2>
            </div>
          </FadeIn>

          {/* 모자이크 그리드 */}
          <div className="grid grid-cols-2 md:grid-cols-[280px_1fr_380px] md:grid-rows-[260px_260px] gap-3 md:gap-4">
            {/* g1 — 왼쪽 상단 */}
            <FadeIn>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-full">
                <Image src="/images/facility-01.png" alt="입원실" fill className="object-cover" sizes="(max-width: 768px) 50vw, 280px" />
              </div>
            </FadeIn>
            {/* g2 — 왼쪽 하단 */}
            <FadeIn delay={80}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-full">
                <Image src="/images/program/휴게실.png" alt="휴게실" fill className="object-cover" sizes="(max-width: 768px) 50vw, 280px" />
              </div>
            </FadeIn>
            {/* g3 — 가운데 큰 이미지 */}
            <FadeIn delay={120}>
              <div className="relative rounded-2xl overflow-hidden col-span-2 md:col-span-1 md:row-span-2 aspect-[16/9] md:aspect-auto md:h-full">
                <Image src="/images/program/indiba-treatment.jpg" alt="치료 장면" fill className="object-cover" sizes="(max-width: 768px) 100vw, 440px" />
              </div>
            </FadeIn>
            {/* g4 — 오른쪽 큰 이미지 */}
            <FadeIn delay={160}>
              <div className="relative rounded-2xl overflow-hidden col-span-2 md:col-span-1 md:row-span-2 aspect-[16/9] md:aspect-auto md:h-full">
                <Image src="/images/landing/nurse-care.jpg" alt="간호 케어" fill className="object-cover" sizes="(max-width: 768px) 100vw, 380px" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ═══════ 05. 다크 배너 — 감성 문구 ═══════ */}
      <section
        className="relative min-h-[420px] md:min-h-[490px] flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #081818 0%, #0e2820 25%, #1a4035 55%, #245848 80%, #2a7060 100%)',
        }}
      >
        {/* 스트라이프 오버레이 */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(175deg, transparent 0, transparent 18px, rgba(42,125,106,0.3) 18px, rgba(42,125,106,0.3) 20px)',
          }}
        />

        <div className="relative z-10 max-w-[680px] px-8 md:px-16 py-16 md:py-20">
          <FadeIn>
            <h2 className="text-white text-[24px] md:text-[40px] font-black leading-[1.3] mb-7">
              입원하시는 그 순간부터,<br />
              회복만 생각하시면 됩니다.
            </h2>
            <p className="text-white/75 text-sm md:text-base leading-[1.95] mb-10 max-w-[520px]">
              한양방 전문의 5인이 함께 진단하고 맞춤 치료 계획을 수립합니다.
              INDIBA·도수치료·침·한약·물리치료를 입원 기간 동안 집중적으로 받으실 수 있으며,
              24시간 전담 간호팀이 곁에서 케어합니다.
            </p>
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3aaa80] text-white text-base font-bold rounded-lg hover:bg-[#2f9670] transition"
            >
              <Phone className="w-5 h-5" />
              {HOSPITAL.phone}
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ═══════ 06. 입원 프로그램 — 6카드 그리드 ═══════ */}
      <section className="py-20 md:py-28 bg-[#f0f0ea]">
        <Container>
          <FadeIn>
            <div className="text-center mb-14 md:mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-[#999] mb-4">Programs</p>
              <h2 className="text-[28px] md:text-[44px] font-black text-[#1a2a3a]">입원 프로그램</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-[1100px] mx-auto">
            {treatments.map((item, i) => {
              const Icon = item.icon
              return (
                <FadeIn key={item.title} delay={i * 70}>
                  <div
                    className={`rounded-2xl p-8 md:p-9 ${
                      item.highlight
                        ? 'bg-[#2a7d6a] border-[#2a7d6a]'
                        : 'bg-white border-[1.5px] border-[#d4d9d0]'
                    }`}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                      item.highlight ? 'bg-white/20' : 'bg-[#e8f4f0]'
                    }`}>
                      <Icon className={`w-5 h-5 ${item.highlight ? 'text-white' : 'text-[#2a7d6a]'}`} strokeWidth={1.8} />
                    </div>
                    <h3 className={`text-lg font-bold mb-3 ${item.highlight ? 'text-white' : 'text-[#1a2a3a]'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-[1.85] ${item.highlight ? 'text-white/88' : 'text-[#555]'}`}>
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ═══════ 07. 소개 — 이미지 + 텍스트 2컬럼 ═══════ */}
      <section className="py-20 md:py-28 bg-[#f5f5ef]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_6px_30px_rgba(0,0,0,0.12)]">
                <Image src="/images/landing/ward.jpg" alt="병실" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div>
                <p className="text-sm text-[#1a2a3a] italic mb-5">Korean Medicine · Integrated Care</p>
                <h2 className="text-[#1a2a3a] text-[26px] md:text-[40px] font-black leading-[1.3] mb-7">
                  한방의 깊이,<br />현대의학의 정밀함
                </h2>
                <p className="text-[#555] text-sm md:text-[14px] leading-[1.95] mb-8">
                  상무365한방병원은 전통 한의학의 체질 치료와 현대 의료 장비를
                  결합한 통합 입원 프로그램을 운영합니다. 침·뜸·추나·한약으로
                  근본 원인을 치료하는 동시에, INDIBA·도수치료·체외충격파 등
                  첨단 장비로 통증을 빠르게 완화합니다.
                  <br /><br />
                  교통사고 환자는 자동차보험으로 본인부담금 없이,
                  일반 환자는 건강보험과 실손보험을 적용하여 입원하실 수 있습니다.
                </p>
                <p className="font-serif text-[24px] md:text-[28px] text-[#333] italic">
                  {HOSPITAL.name}
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ═══════ 08. CTA ═══════ */}
      <section className="py-24 md:py-32 bg-[#2a7d6a] text-center">
        <Container>
          <FadeIn>
            <h2 className="text-white text-[26px] md:text-[44px] font-black leading-[1.3] mb-6">
              입원 상담이 필요하신가요?
            </h2>
            <p className="text-white/65 text-base md:text-lg mb-12 max-w-[460px] mx-auto leading-relaxed">
              365일 입원 가능, 한양방 협진 집중치료로<br />
              빠른 회복을 도와드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#2a7d6a] text-base font-bold rounded-lg hover:bg-white/90 transition"
              >
                <Phone className="w-5 h-5" /> {HOSPITAL.phone}
              </a>
              <a
                href={HOSPITAL.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-white/30 text-white text-base font-bold rounded-lg hover:bg-white/10 transition"
              >
                <MessageCircle className="w-5 h-5" /> 카카오톡 상담
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

    </div>
  )
}
