import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, ArrowRight, ChevronRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import NaverStaticMap from '@/components/traffic/NaverStaticMap'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '상무365한방병원 | 메인 테스트 v2',
  description: '광주 서구 상무365한방병원. 한양방 협진, 365일 진료, 야간 20시. 062-385-9000',
}

export default function MainPageTestV2() {
  return (
    <div className="bg-white">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — 풀스크린, 센터 정렬, 미니멀
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* 배경 — 큰 비주얼 */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-main-visual.jpg"
            alt="상무365한방병원 메인 비주얼"
            fill
            priority
            className="object-cover"
          />
          {/* 이미지 없으면 폴백 그라데이션 */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410] via-[#2d2318] to-[#1a1410]" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center px-6 py-20">
          <FadeIn>
            <p className="text-white/40 text-[13px] md:text-sm tracking-[0.4em] uppercase mb-6">
              Sangmu 365 Korean Medicine Hospital
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="text-white text-[44px] md:text-[80px] lg:text-[96px] font-black leading-[1.05] tracking-tight mb-8">
              당신의 회복을<br />
              설계합니다
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-white/50 text-base md:text-xl max-w-[460px] mx-auto leading-relaxed mb-12">
              한양방 전문의 5인 협진<br className="md:hidden" /> · 365일 진료 · 야간 20시
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex flex-col min-[400px]:flex-row gap-3 justify-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text-main rounded-full font-bold text-base hover:bg-white/90 transition"
              >
                <Phone className="w-4 h-4" />
                {HOSPITAL.phone}
              </a>
              <a
                href={HOSPITAL.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white rounded-full font-bold text-base hover:bg-white/10 transition"
              >
                <MessageCircle className="w-4 h-4" />
                카카오톡 상담
              </a>
            </div>
          </FadeIn>
        </div>

        {/* 하단 스크롤 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/30 mx-auto mb-2" />
          <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase">Scroll</p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ABOUT — 한 문장 소개
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 md:py-36">
        <Container>
          <FadeIn>
            <div className="max-w-[800px] mx-auto text-center">
              <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-6">About</p>
              <h2 className="text-[26px] md:text-[42px] lg:text-[48px] font-black text-text-main leading-[1.35] tracking-tight">
                같은 통증이라도 원인은 다릅니다.<br />
                한양방 전문의 5인이 함께 진단하고,<br />
                <span className="text-primary">당신만을 위한 치료</span>를 시작합니다.
              </h2>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SERVICES — 핵심 진료 (비주얼 카드)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pb-24 md:pb-36">
        <Container>
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-3">Services</p>
                <h2 className="text-[28px] md:text-[40px] font-black text-text-main tracking-tight">핵심 진료</h2>
              </div>
              <Link href="/treatment" className="hidden md:inline-flex items-center gap-1 text-text-muted text-sm hover:text-primary transition">
                전체 보기 <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          {/* 2x2 비주얼 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {[
              {
                title: '교통사고 후유증',
                sub: '자동차보험 본인부담금 0원',
                image: '/images/service-traffic.jpg',
                href: '/traffic-accident',
                span: 'md:col-span-2',
                aspect: 'aspect-[21/9]',
              },
              {
                title: 'INDIBA 심부재생',
                sub: '깊은 조직까지 프리미엄 회복',
                image: '/images/service-indiba.jpg',
                href: '/treatment',
                span: '',
                aspect: 'aspect-[4/3]',
              },
              {
                title: '한양방 통합치료',
                sub: '침·추나·한약·도수·충격파',
                image: '/images/service-treatment.jpg',
                href: '/treatment',
                span: '',
                aspect: 'aspect-[4/3]',
              },
            ].map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 80} className={svc.span}>
                <Link href={svc.href} className="group block relative rounded-2xl md:rounded-3xl overflow-hidden">
                  <div className={`relative ${svc.aspect} bg-gray-100`}>
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="text-white/60 text-sm mb-1">{svc.sub}</p>
                    <h3 className="text-white text-2xl md:text-3xl font-black">{svc.title}</h3>
                  </div>
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* 하단 서비스 링크 바 */}
          <FadeIn>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { label: '도수·체형교정', href: '/chiropractic' },
                { label: '체외충격파', href: '/shockwave' },
                { label: '피부진료', href: '/skin' },
                { label: '입원안내', href: '/hospitalization' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between px-5 py-4 md:px-6 md:py-5 rounded-xl md:rounded-2xl bg-gray-50 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <span className="font-bold text-sm md:text-base text-text-main group-hover:text-white transition-colors">{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          NUMBERS — 숫자 스트립 (미니멀)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-y border-border-light">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border-light">
            {[
              { num: '5', suffix: '인', label: '전문의 협진' },
              { num: '365', suffix: '일', label: '연중무휴' },
              { num: '2', suffix: '등급', label: '간호 인력' },
              { num: '20', suffix: '시', label: '야간 진료' },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 80}>
                <div className="py-10 md:py-14 text-center">
                  <p className="text-[40px] md:text-[56px] font-black text-text-main leading-none tracking-tight">
                    {s.num}<span className="text-[20px] md:text-[24px] text-text-muted font-bold">{s.suffix}</span>
                  </p>
                  <p className="text-sm text-text-muted mt-2">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PREMIUM — INDIBA + 간호등급 (가로 분할)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 md:py-36">
        <Container>
          <FadeIn>
            <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-3">Premium</p>
            <h2 className="text-[28px] md:text-[40px] font-black text-text-main tracking-tight mb-14">상무365만의 차별화</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* INDIBA */}
            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden bg-text-main text-white p-8 md:p-10 h-full min-h-[420px] flex flex-col justify-end">
                <div className="absolute inset-0">
                  <Image src="/images/premium-indiba.jpg" alt="INDIBA 심부재생 치료" fill className="object-cover opacity-40" />
                </div>
                <div className="relative z-10">
                  <p className="text-primary text-xs tracking-[0.2em] uppercase font-bold mb-3">INDIBA ACTIV</p>
                  <h3 className="text-[28px] md:text-[36px] font-black leading-tight mb-3">
                    일반 물리치료가<br />닿지 못하는 곳까지
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-[320px]">
                    448kHz 고주파로 심부 조직 재생을 촉진합니다. 전 세계 80개국 의료기관이 신뢰하는 프리미엄 장비.
                  </p>
                  <Link href="/treatment" className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-3 transition-all">
                    자세히 <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* 간호등급 2등급 */}
            <FadeIn delay={100}>
              <div className="relative rounded-3xl overflow-hidden bg-gray-50 p-8 md:p-10 h-full min-h-[420px] flex flex-col justify-between">
                <div>
                  <p className="text-primary text-xs tracking-[0.2em] uppercase font-bold mb-3">NURSING GRADE</p>
                  <h3 className="text-[28px] md:text-[36px] font-black text-text-main leading-tight mb-3">
                    입원하시면<br />퇴원까지 책임집니다
                  </h3>
                  <p className="text-text-body text-sm leading-relaxed max-w-[320px]">
                    24시간 전담 간호사 배정. 보호자 없이도 안심할 수 있는 환경을 만들어 드립니다.
                  </p>
                </div>
                <div className="flex items-end justify-between mt-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[80px] md:text-[100px] font-black text-primary leading-none">2</span>
                    <span className="text-2xl font-black text-text-main">등급</span>
                  </div>
                  <Link href="/hospitalization" className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-3 transition-all mb-4">
                    자세히 <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          DOCTORS — 의료진 (미니멀 가로)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 md:py-36 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-3">Doctors</p>
                <h2 className="text-[28px] md:text-[40px] font-black text-text-main tracking-tight">의료진 소개</h2>
              </div>
              <Link href="/doctors" className="hidden md:inline-flex items-center gap-1 text-text-muted text-sm hover:text-primary transition">
                전체 보기 <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
            {[
              { name: '박준규', position: '대표원장', src: '/images/profile/박준규.jpg' },
              { name: '박정열', position: '1과 원장', src: '/images/profile/박정열.jpg' },
              { name: '백상철', position: '2과 원장', src: '/images/profile/백상철.jpg' },
              { name: '안규상', position: '3과 원장', src: '/images/profile/안규상.jpg' },
              { name: '이동욱', position: '가정의학과', src: '/images/profile/이동욱.jpg' },
            ].map((doc, i) => (
              <FadeIn key={doc.name} delay={i * 60}>
                <div className="group">
                  <div className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-[#EDE5DB] relative mb-4">
                    <img
                      src={doc.src}
                      alt={`${doc.name} ${doc.position}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs text-text-muted">{doc.position}</p>
                  <p className="text-lg md:text-xl font-black text-text-main">{doc.name}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          GALLERY — 시설 (풀블리드 가로 스크롤 느낌)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 md:py-36">
        <Container>
          <FadeIn>
            <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-3">Facility</p>
            <h2 className="text-[28px] md:text-[40px] font-black text-text-main tracking-tight mb-12">치료 환경</h2>
          </FadeIn>
        </Container>

        {/* 풀와이드 이미지 그리드 */}
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-4 gap-2 md:gap-3 max-w-[1400px] mx-auto">
            {[
              { src: '/images/facility-01.png', span: 'col-span-2 row-span-2', aspect: 'aspect-square' },
              { src: '/images/facility-02.png', span: '', aspect: 'aspect-square' },
              { src: '/images/facility-03.png', span: '', aspect: 'aspect-square' },
              { src: '/images/facility-room.jpg', span: '', aspect: 'aspect-square' },
              { src: '/images/facility-04.png', span: '', aspect: 'aspect-square' },
            ].map((img, i) => (
              <FadeIn key={img.src} delay={i * 60} className={img.span}>
                <div className={`${img.aspect} rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 relative`}>
                  <Image
                    src={img.src}
                    alt={`시설 ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          INFO — 진료시간 + 오시는 길 (깔끔한 2컬럼)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 md:py-36 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* 진료시간 */}
            <FadeIn>
              <div>
                <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-3">Hours</p>
                <h2 className="text-[28px] md:text-[36px] font-black text-text-main tracking-tight mb-8">진료시간</h2>

                <div className="space-y-0">
                  {[
                    { day: '평일', time: '09:00 — 20:00', note: '야간진료', accent: true },
                    { day: '토·일', time: '09:00 — 15:00', note: '365일', accent: false },
                    { day: '공휴일', time: '09:00 — 15:00', note: '365일', accent: false },
                  ].map((row, i) => (
                    <div key={row.day} className={`flex items-center justify-between py-5 ${i < 2 ? 'border-b border-border-light' : ''}`}>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-black text-text-main">{row.day}</span>
                        {row.accent ? (
                          <span className="text-[11px] font-bold bg-primary text-white px-2 py-0.5 rounded">{row.note}</span>
                        ) : (
                          <span className="text-[11px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded">{row.note}</span>
                        )}
                      </div>
                      <span className="text-lg font-bold text-text-main tabular-nums">{row.time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-text-main rounded-2xl p-6 text-center text-white">
                  <p className="text-xl md:text-2xl font-black">24시간 야간 입원 가능</p>
                  <p className="text-white/50 text-sm mt-1">365일 · 주말 · 공휴일 포함</p>
                </div>
              </div>
            </FadeIn>

            {/* 오시는 길 */}
            <FadeIn delay={100}>
              <div>
                <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-3">Location</p>
                <h2 className="text-[28px] md:text-[36px] font-black text-text-main tracking-tight mb-8">오시는 길</h2>

                <div className="rounded-2xl overflow-hidden border border-border-light mb-5">
                  <NaverStaticMap />
                </div>

                <div className="space-y-2">
                  <p className="text-lg font-bold text-text-main">상무365한방병원</p>
                  <p className="text-text-body">광주 서구 상무중앙로 96, H.K 복합빌딩 9~11층</p>
                  <p className="text-text-muted text-sm">주차 가능 · 영효주차장 도보 2분</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA — 최종
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 md:py-40 text-center">
        <Container>
          <FadeIn>
            <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-6">Contact</p>
            <h2 className="text-[32px] md:text-[52px] lg:text-[60px] font-black text-text-main leading-[1.1] tracking-tight mb-4">
              건강한 일상으로<br />돌아가는 첫걸음
            </h2>
            <p className="text-text-muted text-base md:text-lg mb-12">
              상무365한방병원이 함께합니다.
            </p>

            <div className="flex flex-col min-[400px]:flex-row gap-3 justify-center mb-8">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-text-main text-white rounded-full font-bold text-lg hover:bg-text-main/90 transition"
              >
                <Phone className="w-5 h-5" />
                {HOSPITAL.phone}
              </a>
              <a
                href={HOSPITAL.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-border-main text-text-main rounded-full font-bold text-lg hover:bg-gray-50 transition"
              >
                <MessageCircle className="w-5 h-5" />
                카카오톡 상담
              </a>
            </div>

            <p className="text-text-muted text-sm">
              {HOSPITAL.addressShort} · 365일 진료 · 야간 20시
            </p>
          </FadeIn>
        </Container>
      </section>

    </div>
  )
}
