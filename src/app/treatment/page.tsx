import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, ArrowRight, ChevronRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import NaverStaticMap from '@/components/traffic/NaverStaticMap'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '한방치료 프로그램 | 상무365한방병원',
  description: 'INDIBA 심부재생·미주모 탈모치료·리포컷 약침·간호등급 2등급. 프리미엄 입원 케어. 062-385-9000',
}

export default function TreatmentPage() {
  return (
    <div className="bg-white">

      {/* ━━ HERO — 풀스크린 비주얼 ━━ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/treatment-hero-visual.jpg"
            alt="한방치료 프로그램"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410] via-[#2d2318] to-[#1a1410]" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center px-6 py-20">
          <FadeIn>
            <p className="text-white/40 text-[13px] tracking-[0.4em] uppercase mb-6">Treatment Program</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h1 className="text-white text-[44px] md:text-[80px] lg:text-[96px] font-black leading-[1.05] tracking-tight mb-8">
              회복 그 이상의<br />프리미엄
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-white/50 text-base md:text-xl max-w-[420px] mx-auto leading-relaxed mb-12">
              INDIBA · 미주모 · 리포컷 · 간호등급 2등급
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-text-main rounded-full font-bold text-base hover:bg-white/90 transition"
            >
              <Phone className="w-4 h-4" />
              상담 {HOSPITAL.phone}
            </a>
          </FadeIn>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/30 mx-auto mb-2" />
          <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase">Scroll</p>
        </div>
      </section>

      {/* ━━ 한 줄 소개 ━━ */}
      <section className="py-24 md:py-36">
        <Container>
          <FadeIn>
            <div className="max-w-[780px] mx-auto text-center">
              <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-6">About Program</p>
              <h2 className="text-[24px] md:text-[40px] lg:text-[46px] font-black text-text-main leading-[1.35] tracking-tight">
                입원 기간 동안, 치료와 함께<br />
                <span className="text-primary">아름다움까지</span> 챙기는 시간
              </h2>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ━━ 4대 프로그램 — 비주얼 카드 그리드 ━━ */}
      <section className="pb-24 md:pb-36">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

            {/* INDIBA — 큰 카드 (2열 차지) */}
            <FadeIn className="md:col-span-2">
              <Link href="#indiba" className="group block relative rounded-2xl md:rounded-3xl overflow-hidden">
                <div className="relative aspect-[21/9] md:aspect-[21/8] bg-gray-100">
                  <Image
                    src="/images/treatment-indiba-wide.jpg"
                    alt="INDIBA 심부재생 치료"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <p className="text-primary text-xs tracking-[0.2em] uppercase font-bold mb-2">Premium Recovery</p>
                  <h3 className="text-white text-[28px] md:text-[44px] font-black leading-tight">INDIBA 심부재생</h3>
                  <p className="text-white/50 text-sm md:text-base mt-2 max-w-[400px]">448kHz 고주파로 일반 치료가 닿지 못하는 깊은 곳까지</p>
                </div>
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            </FadeIn>

            {/* 미주모 */}
            <FadeIn>
              <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden">
                <div className="relative aspect-[4/5] bg-gray-100">
                  <Image
                    src="/images/treatment-mizumo.jpg"
                    alt="미주모 탈모치료"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-primary text-xs tracking-[0.2em] uppercase font-bold mb-2">Hair Restoration</p>
                  <h3 className="text-white text-[24px] md:text-[32px] font-black leading-tight">미주모 탈모치료</h3>
                  <p className="text-white/50 text-sm mt-2">PDRN 기반 한방 메디컬 두피 재생</p>
                </div>
              </div>
            </FadeIn>

            {/* 리포컷 */}
            <FadeIn delay={80}>
              <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden">
                <div className="relative aspect-[4/5] bg-gray-100">
                  <Image
                    src="/images/treatment-lipocut.jpg"
                    alt="리포컷 약침"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-primary text-xs tracking-[0.2em] uppercase font-bold mb-2">Body Line Care</p>
                  <h3 className="text-white text-[24px] md:text-[32px] font-black leading-tight">리포컷 약침</h3>
                  <p className="text-white/50 text-sm mt-2">천연물 기반 국소라인 집중 케어</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ━━ INDIBA 상세 — 다크 섹션 ━━ */}
      <section id="indiba" className="py-24 md:py-36 bg-text-main text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-start gap-16 md:gap-20">
            <FadeIn className="flex-1">
              <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-6">INDIBA Activ</p>
              <h2 className="text-[32px] md:text-[52px] font-black leading-[1.1] tracking-tight mb-6">
                일반 물리치료로는<br />닿지 못하는 곳
              </h2>
              <p className="text-white/40 text-base md:text-lg leading-[1.8] mb-10 max-w-[460px]">
                448kHz 특허 주파수가 피부 손상 없이 심부 조직까지 도달합니다.
                세포 재생과 혈류 개선을 동시에 촉진하여 일반 치료 대비 빠른 회복을 돕습니다.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  '수술·절개 없이 편안하게',
                  '급성기부터 즉시 적용 가능',
                  '부종·염증·통증 동시 해소',
                  '세포 재생 + 혈류 개선 촉진',
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <p className="text-white/60 text-sm md:text-base">{text}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-x-12">
                {[
                  { value: '80+', label: '도입 국가' },
                  { value: '400+', label: '임상 논문' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-[36px] md:text-[48px] font-black text-primary leading-none">{s.value}</p>
                    <p className="text-white/30 text-sm mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={150} className="w-full md:w-[42%] shrink-0">
              <div className="space-y-4">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[3/4] bg-gray-800 relative">
                  <Image src="/images/treatment-indiba-detail1.jpg" alt="INDIBA 시술 장면" fill className="object-cover" sizes="(max-width: 768px) 100vw, 42vw" />
                </div>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] bg-gray-800 relative">
                  <Image src="/images/treatment-indiba-detail2.jpg" alt="INDIBA 장비" fill className="object-cover" sizes="(max-width: 768px) 100vw, 42vw" />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ━━ 미주모 상세 ━━ */}
      <section className="py-24 md:py-36">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <FadeIn className="w-full md:w-[45%] shrink-0">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[3/4] bg-gray-100 relative">
                <Image src="/images/treatment-mizumo-detail.jpg" alt="미주모 탈모치료 시술" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
              </div>
            </FadeIn>

            <FadeIn delay={100} className="flex-1">
              <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-6">Mizumo</p>
              <h2 className="text-[28px] md:text-[44px] font-black text-text-main leading-[1.15] tracking-tight mb-6">
                빠지는 머리카락,<br />다시 채워드립니다
              </h2>
              <p className="text-text-body text-base md:text-lg leading-[1.8] mb-8 max-w-[440px]">
                PDRN 기반 한방 메디컬 탈모 치료. 두피에 직접 영양을 공급하여 모낭을 활성화하고,
                한약 처방과 병행하여 근본적인 원인을 치료합니다.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: 'PDRN 두피 주입', desc: '연어 유래 DNA 성분으로 모낭 세포 재생' },
                  { title: '한방 두피 케어', desc: '체질별 한약 처방 + 침 치료 병행' },
                  { title: '입원 중 동시 진행', desc: '치료와 함께 탈모 케어까지' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 py-3 border-b border-border-light last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                    <div>
                      <p className="text-base font-bold text-text-main">{item.title}</p>
                      <p className="text-sm text-text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ━━ 리포컷 상세 ━━ */}
      <section className="py-24 md:py-36 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <FadeIn className="w-full md:w-[45%] shrink-0">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[3/4] bg-gray-200 relative">
                <Image src="/images/treatment-lipocut-detail.jpg" alt="리포컷 약침 시술" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
              </div>
            </FadeIn>

            <FadeIn delay={100} className="flex-1">
              <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-6">Lipocut</p>
              <h2 className="text-[28px] md:text-[44px] font-black text-text-main leading-[1.15] tracking-tight mb-6">
                천연물 기반<br />국소라인 집중 케어
              </h2>
              <p className="text-text-body text-base md:text-lg leading-[1.8] mb-8 max-w-[440px]">
                리포컷 약침은 천연물 성분을 활용한 한방 바디라인 케어입니다.
                원하는 부위에 정밀 시술하여 국소적인 라인 개선을 돕습니다.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: '천연물 기반', desc: '한방 원료 사용, 부작용 최소화' },
                  { title: '국소 부위 집중', desc: '원하는 부위만 정밀 시술' },
                  { title: '의료진 직접 시술', desc: '한의사가 직접 시술하여 안전' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 py-3 border-b border-border-light last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                    <div>
                      <p className="text-base font-bold text-text-main">{item.title}</p>
                      <p className="text-sm text-text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ━━ 간호등급 2등급 ━━ */}
      <section className="py-24 md:py-36">
        <Container>
          <FadeIn>
            <div className="max-w-[800px] mx-auto text-center mb-16">
              <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-6">Nursing Grade</p>
              <div className="flex items-baseline justify-center gap-3 mb-6">
                <span className="text-[100px] md:text-[140px] font-black text-primary leading-none">2</span>
                <span className="text-[32px] md:text-[40px] font-black text-text-main">등급</span>
              </div>
              <h2 className="text-[24px] md:text-[40px] font-black text-text-main leading-[1.3] tracking-tight mb-4">
                입원하시는 순간부터<br />퇴원하시는 순간까지
              </h2>
              <p className="text-text-muted text-base md:text-lg max-w-[480px] mx-auto">
                충분한 간호 인력이 확보되어야만 가능한 등급입니다.
              </p>
            </div>
          </FadeIn>

          {/* 3 포인트 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-light rounded-2xl md:rounded-3xl overflow-hidden max-w-[960px] mx-auto mb-16">
            {[
              { num: '24시간', title: '야간에도 즉시 대응', desc: '밤에 통증이 심해져도 바로 간호사가 달려옵니다' },
              { num: '전담', title: '담당 간호사 배정', desc: '환자 한 분 한 분의 상태를 파악한 전담 간호사' },
              { num: '안심', title: '보호자 없어도 안심', desc: '충분한 간호 인력이 보호자 역할까지 해드립니다' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="bg-white p-8 md:p-10 text-center h-full">
                  <p className="text-primary text-[32px] md:text-[40px] font-black mb-2">{item.num}</p>
                  <p className="text-lg font-bold text-text-main mb-2">{item.title}</p>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 입원실 비주얼 */}
          <FadeIn>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[21/9] bg-gray-100 relative max-w-[960px] mx-auto">
              <Image src="/images/treatment-ward.jpg" alt="프라이빗 입원실" fill className="object-cover" sizes="100vw" />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ━━ 숫자 스트립 ━━ */}
      <section className="border-y border-border-light">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border-light">
            {[
              { num: '5', suffix: '인', label: '전문의 협진' },
              { num: '365', suffix: '일', label: '연중무휴' },
              { num: '2', suffix: '등급', label: '간호 인력' },
              { num: '20', suffix: '시', label: '야간 진료' },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 60}>
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

      {/* ━━ 진료시간 + 오시는 길 ━━ */}
      <section className="py-24 md:py-36 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
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
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${row.accent ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>{row.note}</span>
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

            <FadeIn delay={100}>
              <div>
                <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-3">Location</p>
                <h2 className="text-[28px] md:text-[36px] font-black text-text-main tracking-tight mb-8">오시는 길</h2>
                <div className="rounded-2xl overflow-hidden border border-border-light mb-5">
                  <NaverStaticMap />
                </div>
                <p className="text-lg font-bold text-text-main">상무365한방병원</p>
                <p className="text-text-body mt-1">광주 서구 상무중앙로 96, H.K 복합빌딩 9~11층</p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ━━ CTA ━━ */}
      <section className="py-28 md:py-40 text-center">
        <Container>
          <FadeIn>
            <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-6">Contact</p>
            <h2 className="text-[32px] md:text-[52px] lg:text-[60px] font-black text-text-main leading-[1.1] tracking-tight mb-4">
              입원 상담,<br />지금 바로
            </h2>
            <p className="text-text-muted text-base md:text-lg mb-12">
              INDIBA · 미주모 · 리포컷 · 간호등급 2등급
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
            <p className="text-text-muted text-sm">{HOSPITAL.addressShort} · 365일 진료 · 야간 20시</p>
          </FadeIn>
        </Container>
      </section>

    </div>
  )
}
