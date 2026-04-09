import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone, MessageCircle,
  Car, Leaf, StretchHorizontal, Zap, Crosshair,
  Sparkles, BedDouble, UserRound, CalendarCheck, MapPin,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '피부진료 | 상무365한방병원',
  description: '한방 피부진료, 미주안 스킨부스터, 슈링크 유니버스 HIFU, INDIBA, 리포컷, 미주모. 상무365한방병원.',
}

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

const programs = [
  {
    image: '/images/skin-mijuan.png',
    title: '미주안 스킨부스터',
    sub: 'PN Skin Booster',
    desc: '연어 유래 고순도 PN 성분\n진피층 복원 · 콜라겐 촉진',
  },
  {
    image: '/images/skin-shrink.png',
    title: '슈링크 유니버스',
    sub: 'HIFU Lifting',
    desc: '비침습 초음파 리프팅\nSMAS층 도달 · 즉시 복귀',
  },
  {
    image: '/images/program/INDIVA.avif',
    title: 'INDIBA',
    sub: '448kHz Deep Care',
    desc: '심부 조직 재생 · 혈류 개선\n80개국 400편 이상 임상',
  },
  {
    image: '/images/program/lipocut.png',
    title: '리포컷',
    sub: '바디라인 케어',
    desc: '천연 한방 성분 약침\n비수술 국소 지방 감소',
  },
  {
    image: '/images/program/mizumo.png',
    title: '미주모',
    sub: 'PDRN 탈모치료',
    desc: '자가 재생 인자 활용\n두피 영양 · 모근 강화',
  },
  {
    image: '/images/program/hicooks.png',
    title: '하이쿡스',
    sub: 'High Frequency',
    desc: '고주파 열에너지 전달\n콜라겐 리모델링 · 탄력 회복',
  },
]

export default function SkinPage() {
  return (
    <div className="bg-white text-[#111]">

      {/* ═══════ 01. 히어로 ═══════ */}
      <section className="relative min-h-[calc(100dvh-64px)] overflow-hidden bg-[#f7f7f7]">
        <div className="absolute inset-0">
          <Image
            src="/images/skin-main.png"
            alt="피부진료"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-white/45 z-[5]" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <FadeIn>
            <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6">
              <span className="bg-[#b5548a]/15 text-[#b5548a] px-2 py-1 rounded">Dermatology &amp; Aesthetics</span>
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-[#111] text-[36px] md:text-[56px] lg:text-[72px] font-black leading-[1.1] mb-8">
              아름다움을,<br />건강하게
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-[#555] text-base md:text-xl max-w-[460px] leading-relaxed mb-10">
              미주안 · 슈링크 · INDIBA · 리포컷 · 미주모
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#b5548a] text-white text-base font-bold rounded-lg hover:bg-[#9e4578] transition"
            >
              <Phone className="w-5 h-5" />
              {HOSPITAL.phone}
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ═══════ 02. 퀵 메뉴 ═══════ */}
      <section className="py-8 md:py-10 bg-white border-b border-[#f0f0f0]">
        <Container>
          <div className="grid grid-cols-5 gap-2 md:gap-4">
            {quickMenu.map((item, i) => {
              const Icon = item.icon
              const isActive = item.href === '/skin'
              return (
                <FadeIn key={item.label} delay={i * 25}>
                  <Link
                    href={item.href}
                    className={`flex flex-col items-center gap-1.5 md:gap-2 py-2.5 md:py-4 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-[#b5548a]/10 text-[#b5548a]'
                        : 'hover:bg-[#fafafa] text-[#555]'
                    }`}
                  >
                    <Icon className={`w-5 h-5 md:w-7 md:h-7 ${isActive ? 'text-[#b5548a]' : 'text-[#bbb]'}`} strokeWidth={1.5} />
                    <span className={`text-[10px] md:text-sm font-medium ${isActive ? 'text-[#b5548a] font-bold' : ''}`}>
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
              { num: '365일', label: '연중무휴 진료' },
              { num: '2등급', label: '간호 인력 등급' },
              { num: '24시간', label: '입원 가능' },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 80}>
                <p className="text-[#111] text-[36px] md:text-[48px] font-black leading-none">{s.num}</p>
                <p className="text-[#999] text-sm mt-3">{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════ 04. 시술 프로그램 카드 ═══════ */}
      <section className="py-20 md:py-28 bg-[#f7f7f7]">
        <Container>
          <FadeIn>
            <div className="text-center mb-14 md:mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-[#999] mb-4">Programs</p>
              <h2 className="text-[28px] md:text-[44px] font-black">피부미용 시술</h2>
            </div>
          </FadeIn>

          {/* 상단 큰 카드 2개 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
            {programs.slice(0, 2).map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5 md:p-7">
                    <p className="text-[#999] text-xs tracking-[0.15em] uppercase mb-1.5">{item.sub}</p>
                    <h3 className="text-xl md:text-2xl font-black mb-2">{item.title}</h3>
                    <p className="text-[#555] text-sm md:text-base leading-[1.7] whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 하단 4개 카드 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {programs.slice(2).map((item, i) => (
              <FadeIn key={item.title} delay={i * 70}>
                <div className="group bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 md:p-5 flex-1">
                    <p className="text-[#999] text-[10px] md:text-xs tracking-[0.12em] uppercase mb-1">{item.sub}</p>
                    <h3 className="text-sm md:text-lg font-bold mb-1.5">{item.title}</h3>
                    <p className="text-[#555] text-[11px] md:text-sm leading-[1.6] whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════ 05. 감성 배너 ═══════ */}
      <section className="relative min-h-[340px] md:min-h-[440px] overflow-hidden">
        <Image src="/images/program/indiba-treatment2.jpg" alt="시술 장면" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-white/45" />
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6">
          <FadeIn>
            <h2 className="text-[#111] text-[22px] md:text-[40px] font-black leading-[1.35] mb-3">
              &ldquo;피부가 편안해지는 순간,<br />진짜 변화가 시작됩니다&rdquo;
            </h2>
            <p className="text-[#555] text-sm md:text-base">{HOSPITAL.name}</p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════ 06. CTA ═══════ */}
      <section className="py-24 md:py-32 bg-[#b5548a] text-center">
        <Container>
          <FadeIn>
            <h2 className="text-white text-[26px] md:text-[44px] font-black leading-[1.3] mb-6">
              피부 고민, 지금 상담하세요
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-12 max-w-[420px] mx-auto leading-relaxed">
              한방 체질 치료부터 최신 피부미용 시술까지<br />
              맞춤 솔루션을 제안합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#b5548a] text-base font-bold rounded-lg hover:bg-white/90 transition"
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
