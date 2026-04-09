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
    video: '/images/program/INDIVA.mp4',
    title: 'INDIBA',
    desc: '448kHz 심부열 재생 치료',
  },
  {
    image: '/images/program/lipocut.png',
    title: '리포컷',
    desc: '한방 바디라인 케어',
  },
  {
    image: '/images/program/mizumo.png',
    title: '미주모',
    desc: '두피·탈모 집중 케어',
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
          01. 히어로 — 다크 시네마틱 + 균일 카드
          ═══════════════════════════════════════════ */}
      <section
        className="relative min-h-[600px] md:min-h-[700px] overflow-hidden"
        style={{
          background: 'linear-gradient(155deg, #0a1a14 0%, #0f2a1f 20%, #163828 45%, #1d4d38 65%, #1a5040 80%, #185545 100%)',
        }}
      >
        {/* 메쉬 그라데이션 오버레이 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 75% 40%, rgba(42,125,106,0.25) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(58,170,128,0.15) 0%, transparent 60%)',
          }}
        />
        {/* 노이즈 텍스처 */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* 하단 비네트 */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(10,26,20,0.7) 0%, transparent 100%)',
          }}
        />
        {/* 장식 라인 */}
        <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent pointer-events-none hidden md:block" />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* 왼쪽 텍스트 */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-[#3aaa80]" />
                  <p className="text-xs tracking-[0.3em] uppercase text-[#3aaa80]/80 font-medium">
                    Sangmu 365 · Hospitalization
                  </p>
                </div>
                <h1 className="text-white text-[36px] md:text-[52px] lg:text-[64px] font-black leading-[1.08] mb-4" style={{ textShadow: '0 4px 24px rgba(0,0,0,.4)' }}>
                  한방 입원,
                </h1>
                <h2 className="text-white/50 text-[24px] md:text-[36px] lg:text-[44px] font-light leading-[1.2] mb-8">
                  통합 치료의 시작
                </h2>
                <p className="text-white/65 text-sm md:text-[15px] leading-[1.9] mb-10 max-w-[440px]">
                  한양방 전문의 5인 협진으로 입원 치료 계획을 수립하고,<br className="hidden md:block" />
                  INDIBA·도수치료·침·한약 등 통합 치료를 집중적으로 시행합니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#3aaa80] text-white text-[15px] font-bold rounded-xl hover:bg-[#2f9670] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(58,170,128,0.35)]"
                  >
                    <Phone className="w-5 h-5" />
                    입원 상담 {HOSPITAL.phone}
                  </a>
                  <a
                    href={HOSPITAL.kakao}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-white/15 text-white/80 text-sm font-medium rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    카카오톡 상담
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* 오른쪽 균일 카드 3장 */}
            <div className="flex gap-4 md:gap-5 items-end justify-center md:justify-end">
              {heroCards.map((card, i) => (
                <FadeIn key={card.title} delay={i * 150}>
                  <div
                    className={`w-[150px] md:w-[195px] rounded-2xl overflow-hidden border-[1.5px] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/40 group ${
                      i === 0
                        ? 'border-[#3aaa80]/60 shadow-[0_0_20px_rgba(58,170,128,0.15)]'
                        : 'border-white/15'
                    }`}
                    style={{ backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.25)' }}
                  >
                    <div className="relative h-[180px] md:h-[230px] overflow-hidden">
                      {'video' in card && card.video ? (
                        <video
                          src={card.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <Image
                          src={card.image!}
                          alt={card.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="200px"
                        />
                      )}
                      {/* 이미지 하단 그라데이션 */}
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-3.5 md:p-4">
                      <h3 className="text-[14px] md:text-[16px] font-bold text-white mb-1 tracking-tight">{card.title}</h3>
                      <p className="text-[11px] md:text-xs text-white/50 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
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
