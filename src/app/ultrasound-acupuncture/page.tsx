import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, Car, Leaf, Zap, Crosshair, Sparkles, BedDouble, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import HospitalImage from '@/components/ui/HospitalImage'
import NaverStaticMap from '@/components/traffic/NaverStaticMap'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '상무365한방병원 | 메인 테스트',
  description: '광주 서구 상무365한방병원. 한양방 협진, 365일 진료, 야간 20시. 교통사고·한방치료·도수교정·체외충격파. 062-385-9000',
}

/* ── 퀵메뉴 ── */
const quickMenu = [
  { icon: Car, label: '교통사고', href: '/traffic-accident', color: 'bg-red-500' },
  { icon: Leaf, label: '한방치료', href: '/treatment', color: 'bg-green-600' },
  { icon: Zap, label: '체외충격파', href: '/shockwave', color: 'bg-amber-500' },
  { icon: Crosshair, label: '초음파약침', href: '/ultrasound-acupuncture', color: 'bg-blue-500' },
  { icon: Sparkles, label: '피부진료', href: '/skin', color: 'bg-pink-500' },
  { icon: BedDouble, label: '입원안내', href: '/hospitalization', color: 'bg-purple-500' },
]

/* ── 스탯 ── */
const stats = [
  { num: '5', unit: '인', title: '한·양방 전문의', desc: '한의사 4인 + 양방 전문의 1인 협진' },
  { num: '365', unit: '일', title: '연중무휴 진료', desc: '주말·공휴일 포함 매일 진료' },
  { num: '2', unit: '등급', title: '간호 인력', desc: '24시간 전담 간호사 케어' },
  { num: '20', unit: '시', title: '야간 진료', desc: '평일 오후 8시까지 진료' },
]

/* ── 주요 진료 ── */
const mainServices = [
  {
    title: '교통사고 후유증',
    desc: '사고 직후 72시간이 중요합니다. 자동차보험 적용, 본인부담금 0원으로 한양방 협진 치료를 받으세요.',
    image: '/images/traffic/traffic-adv-02.png',
    href: '/traffic-accident',
    badge: '본인부담금 0원',
  },
  {
    title: '한양방 통합치료',
    desc: '침·추나·한약·도수·체외충격파까지. 5인의 전문의가 함께 진단하고 최적의 복합 치료를 설계합니다.',
    image: '/images/traffic/traffic-adv-03.png',
    href: '/treatment',
    badge: '전문의 5인 협진',
  },
  {
    title: 'INDIBA 심부재생',
    desc: '448kHz 고주파로 일반 물리치료가 닿지 못하는 깊은 조직까지. 수술 없이 빠른 회복을 돕습니다.',
    image: '/images/program/indiba-treatment.jpg',
    href: '/treatment',
    badge: 'PREMIUM',
  },
]

/* ── 의료진 미리보기 ── */
const doctorPreview = [
  { name: '박준규', position: '대표원장', specialty: '한방부인과 · 교통사고', src: '/images/profile/박준규.jpg' },
  { name: '박정열', position: '1과 원장', specialty: '처방제형학 박사', src: '/images/profile/박정열.jpg' },
  { name: '백상철', position: '2과 원장', specialty: '한방안이비인후피부과', src: '/images/profile/백상철.jpg' },
  { name: '안규상', position: '3과 원장', specialty: '한방내과 · 한방피부과', src: '/images/profile/안규상.jpg' },
  { name: '이동욱', position: '가정의학과', specialty: '가정의학과 전문의', src: '/images/profile/이동욱.jpg' },
]

export default function MainPageTest() {
  return (
    <>
      {/* ══ 1. 히어로 — 풀스크린 ══ */}
      <section className="relative w-full min-h-[100dvh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image src="/images/hero-01.png" alt="상무365한방병원" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>

        <div className="relative z-10 flex flex-col min-h-[100dvh]">
          <div className="pt-24 md:pt-32 px-6 flex-1 flex flex-col items-center justify-center text-center">
            <FadeIn>
              <p className="text-white/50 text-sm md:text-base tracking-[0.3em] uppercase font-medium mb-4">
                Sangmu 365 Korean Medicine Hospital
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-white text-[40px] md:text-[72px] font-black leading-[1.1] tracking-tight mb-6">
                한양방 협진으로<br />
                <span className="text-primary">빠른 회복</span>을 약속합니다
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-white/70 text-lg md:text-2xl leading-relaxed max-w-[600px] mb-10">
                전문의 5인 협진 · 365일 진료 · 야간 20시<br />
                교통사고 자동차보험 본인부담금 0원
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="flex flex-col min-[400px]:flex-row gap-4">
                <a
                  href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
                >
                  <Phone className="w-5 h-5" />
                  {HOSPITAL.phone}
                </a>
                <a
                  href={HOSPITAL.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  카카오톡 상담
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="pb-8 text-center">
            <div className="animate-bounce text-white/40">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. 퀵메뉴 ══ */}
      <section className="py-10 md:py-14 bg-white border-b border-border-light">
        <Container>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {quickMenu.map((item, i) => (
              <FadeIn key={item.label} delay={i * 50}>
                <Link href={item.href} className="group flex flex-col items-center gap-3 py-4 md:py-6 rounded-2xl hover:bg-gray-50 transition-all">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm md:text-base font-bold text-text-main">{item.label}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ 3. 숫자로 보는 상무365 ══ */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <FadeIn>
            <p className="text-center text-white/60 text-sm tracking-[0.2em] uppercase font-bold mb-10">WHY SANGMU 365</p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <FadeIn key={s.title} delay={i * 100}>
                <div className="text-center text-white">
                  <p className="text-[60px] md:text-[88px] font-black leading-none tracking-tight">
                    {s.num}<span className="text-[24px] md:text-[32px] font-bold opacity-70">{s.unit}</span>
                  </p>
                  <p className="text-lg md:text-xl font-bold mt-2">{s.title}</p>
                  <p className="text-sm text-white/60 mt-1">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ 4. 주요 진료 — 대형 카드 ══ */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-3 block">MAIN SERVICES</span>
              <h2 className="text-[32px] md:text-[52px] font-black text-text-main leading-tight tracking-tight">
                상무365의 핵심 진료
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-8 md:space-y-12">
            {mainServices.map((svc, i) => {
              const isReversed = i % 2 !== 0
              return (
                <FadeIn key={svc.title} delay={i * 100}>
                  <Link href={svc.href} className="group block">
                    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} rounded-3xl overflow-hidden bg-gray-50 hover:shadow-2xl transition-all duration-500`}>
                      <div className="md:w-[55%] shrink-0 relative overflow-hidden">
                        <div className="aspect-[16/10] md:aspect-auto md:h-full relative min-h-[280px]">
                          <Image src={svc.image} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 55vw" />
                        </div>
                      </div>
                      <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        <span className="inline-block text-primary text-xs tracking-[0.15em] uppercase font-bold bg-primary/10 px-3 py-1 rounded-full w-fit mb-4">{svc.badge}</span>
                        <h3 className="text-[28px] md:text-[40px] font-black text-text-main leading-tight mb-4 group-hover:text-primary transition-colors">{svc.title}</h3>
                        <p className="text-lg md:text-xl text-text-body leading-[1.8] mb-6">{svc.desc}</p>
                        <div className="flex items-center gap-2 text-primary font-bold text-lg group-hover:gap-4 transition-all">
                          자세히 보기 <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ══ 5. 입원 안내 — 다크 ══ */}
      <section className="py-20 md:py-32 bg-text-main text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <FadeIn className="flex-1">
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-4 block">HOSPITALIZATION</span>
              <h2 className="text-[32px] md:text-[52px] font-black leading-[1.1] mb-6 tracking-tight">
                입원하시면,<br /><span className="text-primary">퇴원까지 책임집니다</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl leading-[1.8] mb-8 max-w-[500px]">
                간호등급 2등급, 24시간 전담 간호사 배정.
                보호자 없이도 안심하고 치료에 집중할 수 있는 환경을 만들어 드립니다.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { val: '24H', label: '야간 케어' },
                  { val: '전담', label: '간호사 배정' },
                  { val: '0원', label: '자보 본인부담' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-[32px] md:text-[40px] font-black text-primary leading-none">{s.val}</p>
                    <p className="text-white/50 text-sm mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/hospitalization" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all">
                입원 안내 보기 <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
            <FadeIn delay={150} className="w-full md:w-[45%] shrink-0">
              <div className="rounded-3xl overflow-hidden">
                <HospitalImage src="/images/traffic/traffic-adv-07.png" alt="상무365 입원실" className="w-full h-auto" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ══ 6. 의료진 ══ */}
      <section className="py-20 md:py-32 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-3 block">DOCTORS</span>
                <h2 className="text-[32px] md:text-[48px] font-black text-text-main leading-tight tracking-tight">한·양방 전문 의료진</h2>
              </div>
              <Link href="/doctors" className="hidden md:inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-3 transition-all">
                전체 보기 <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {doctorPreview.map((doc, i) => (
              <FadeIn key={doc.name} delay={i * 80}>
                <div className="bg-white rounded-3xl overflow-hidden border border-border-light hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-[3/4] bg-[#EDE5DB] relative overflow-hidden">
                    <HospitalImage src={doc.src} alt={`${doc.name} ${doc.position}`} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 md:p-5 text-center">
                    <p className="text-xs text-text-muted mb-1">{doc.position}</p>
                    <h3 className="text-xl md:text-2xl font-black text-text-main">{doc.name}</h3>
                    <p className="text-xs text-primary font-medium mt-1">{doc.specialty}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="md:hidden text-center mt-8">
            <Link href="/doctors" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              전체 의료진 보기 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ══ 7. 시설 갤러리 ══ */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-3 block">FACILITY</span>
              <h2 className="text-[28px] md:text-[44px] font-black text-text-main tracking-tight">쾌적한 치료 환경</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {['/images/facility-01.png', '/images/facility-02.png', '/images/facility-03.png', '/images/facility-04.png'].map((img, i) => (
              <FadeIn key={img} delay={i * 80}>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3]">
                  <Image src={img} alt={`시설 ${i + 1}`} width={400} height={300} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ 8. 진료시간 + 오시는 길 ══ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="flex-1">
              <FadeIn>
                <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-3 block">HOURS</span>
                <h2 className="text-[28px] md:text-[40px] font-black text-text-main mb-8 tracking-tight">진료시간</h2>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-border-light">
                  {[
                    { day: '평일', time: '09:00 ~ 20:00', sub: '점심 12:30~14:00', badge: '야간진료', badgeColor: 'bg-primary text-white' },
                    { day: '토·일', time: '09:00 ~ 15:00', sub: '점심시간 없이', badge: '365일', badgeColor: 'bg-primary-light text-primary' },
                    { day: '공휴일', time: '09:00 ~ 15:00', sub: '점심시간 없이', badge: '365일', badgeColor: 'bg-primary-light text-primary' },
                  ].map((row, i) => (
                    <div key={row.day} className={`flex items-center justify-between py-5 ${i < 2 ? 'border-b border-border-light' : ''}`}>
                      <div className="flex items-center gap-4">
                        <span className="text-lg md:text-xl font-black text-text-main min-w-[60px]">{row.day}</span>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${row.badgeColor}`}>{row.badge}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-lg md:text-xl font-bold text-text-main">{row.time}</p>
                        <p className="text-xs text-text-muted">{row.sub}</p>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6 bg-primary rounded-2xl p-5 text-center text-white">
                    <p className="text-2xl md:text-3xl font-black">24시간 야간 입원 가능</p>
                    <p className="text-white/70 text-sm mt-1">365일 평일, 주말, 공휴일</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="flex-1">
              <FadeIn>
                <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-3 block">LOCATION</span>
                <h2 className="text-[28px] md:text-[40px] font-black text-text-main mb-8 tracking-tight">오시는 길</h2>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="rounded-3xl overflow-hidden border border-border-light">
                  <NaverStaticMap />
                </div>
                <div className="mt-4">
                  <p className="text-lg font-bold text-text-main">상무365한방병원</p>
                  <p className="text-base text-text-body mt-1">광주 서구 상무중앙로 96, H.K 복합빌딩 9~11층</p>
                  <p className="text-sm text-text-muted mt-1">주차 가능 · 영효주차장 도보 2분</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ 9. 최종 CTA ══ */}
      <section className="py-24 md:py-36 bg-white text-center">
        <Container>
          <FadeIn>
            <h2 className="text-[36px] md:text-[60px] font-black text-text-main leading-[1.1] tracking-tight mb-6">
              건강한 일상으로<br /><span className="text-primary">돌아가는 첫걸음</span>
            </h2>
            <p className="text-text-body text-lg md:text-2xl max-w-[500px] mx-auto mb-10 leading-relaxed">
              상무365한방병원이 함께합니다.
            </p>
            <div className="flex flex-col min-[400px]:flex-row gap-4 justify-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-primary text-white rounded-2xl font-bold text-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                <Phone className="w-6 h-6" />
                {HOSPITAL.phone}
              </a>
              <a
                href={HOSPITAL.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 border-2 border-primary/30 text-primary rounded-2xl font-bold text-2xl hover:bg-primary-light transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                카카오톡 상담
              </a>
            </div>
            <p className="text-text-muted text-base mt-6">{HOSPITAL.addressShort} · 365일 진료 · 야간 20시</p>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}
