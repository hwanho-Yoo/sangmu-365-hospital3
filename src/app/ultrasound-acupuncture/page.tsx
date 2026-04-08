import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '상무365한방병원',
  description: 'INDIBA 심부재생 치료. 미주모 탈모치료. 리포컷 약침. 간호등급 2등급. 365일 24시간 입원. 062-385-9000',
}

export default function LandingPage() {
  return (
    <div className="bg-white">

      {/* ════════════════════════════════════════
          01. HERO — INDIBA 풀스크린 비주얼
          촬영 가이드: INDIBA 장비를 환자 등/어깨에 대고 시술하는 장면.
          따뜻한 오렌지빛 조명. 의료진 손 + 장비 + 환자 피부 클로즈업.
          ════════════════════════════════════════ */}
      <section className="relative h-[100dvh] overflow-hidden">
        <Image
          src="/images/landing/hero-indiba.jpg"
          alt="INDIBA 심부재생 치료"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-12 lg:p-16 pb-12 md:pb-16">
          <Container>
            <FadeIn>
              <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-3">INDIBA Activ</p>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-white text-[36px] md:text-[60px] lg:text-[76px] font-black leading-[1.06] tracking-tight mb-5">
                깊은 곳까지,<br />따뜻하게 치료합니다
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-white/50 text-sm md:text-lg max-w-[420px] leading-relaxed mb-8">
                448kHz 심부재생 고주파 · 간호등급 2등급 · 365일 24시간 입원
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="flex gap-3">
                <a href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`} className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary/90 transition shadow-lg shadow-primary/30">
                  <Phone className="w-4 h-4" /> {HOSPITAL.phone}
                </a>
                <a href={HOSPITAL.kakao} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white rounded-full font-bold text-sm hover:bg-white/10 transition">
                  <MessageCircle className="w-4 h-4" /> 상담하기
                </a>
              </div>
            </FadeIn>
          </Container>
        </div>
      </section>

      {/* ════════════════════════════════════════
          02. INDIBA 핵심 카피
          ════════════════════════════════════════ */}
      <section className="py-24 md:py-36">
        <Container>
          <FadeIn>
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-[24px] md:text-[44px] font-black text-text-main leading-[1.3] tracking-tight">
                일반 물리치료로는 닿지 못하는 곳,<br />
                <span className="text-primary">INDIBA가 도달합니다</span>
              </h2>
              <p className="text-text-muted text-sm md:text-base mt-6 max-w-[480px] mx-auto leading-relaxed">
                전 세계 80개국 의료기관이 신뢰하는 심부재생 치료.
                수술 없이, 절개 없이, 따뜻한 온기로 깊은 조직을 회복합니다.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          03. INDIBA 상세 — 이미지 + 포인트
          촬영 가이드: 시술실 전경. INDIBA 장비 전체 + 시술받는 환자.
          밝고 청결한 느낌. 의료진이 장비를 조작하는 모습.
          ════════════════════════════════════════ */}
      <section className="pb-24 md:pb-36">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <FadeIn className="w-full md:w-[50%] shrink-0">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden">
                <Image src="/images/landing/indiba-detail.jpg" alt="INDIBA 시술 장면" width={700} height={500} className="w-full h-auto object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={100} className="flex-1">
              <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-4">Why INDIBA</p>
              <div className="space-y-6">
                {[
                  { num: '01', title: '448kHz 특허 주파수', desc: '피부 손상 없이 심부 조직까지 안전하게 도달' },
                  { num: '02', title: '급성기부터 즉시 적용', desc: '사고 직후에도 시술 가능, 골든타임을 놓치지 않습니다' },
                  { num: '03', title: '부종·염증·통증 동시 해소', desc: 'Joule Effect로 부기와 염증까지 빠르게 개선' },
                  { num: '04', title: '전 세계 80개국 도입', desc: '400건 이상의 임상 논문이 증명하는 효과' },
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-4">
                    <span className="text-primary/20 text-[28px] font-black leading-none shrink-0 w-8">{item.num}</span>
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

      {/* ════════════════════════════════════════
          04. 프로그램 3종 — 비주얼 카드
          촬영 가이드:
          - INDIBA: 오렌지빛 시술 장면 클로즈업 (장비+피부)
          - 미주모: 두피에 주사하는 시술 장면 or PDRN 앰플 클로즈업
          - 리포컷: 복부/허벅지에 약침 시술 장면 or 슬림한 바디라인
          ════════════════════════════════════════ */}
      <section className="py-4 md:py-6 bg-gray-50">
        <Container>
          <FadeIn>
            <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-2 pt-16 md:pt-20">Premium Program</p>
            <h2 className="text-[24px] md:text-[36px] font-black text-text-main tracking-tight mb-10">입원 중 함께 받을 수 있는 프로그램</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 pb-16 md:pb-20">
            {[
              {
                image: '/images/landing/treatment-mood.jpg',
                label: 'INDIBA',
                title: '심부재생 치료',
                desc: '448kHz 고주파로 깊은 조직까지 온열에너지를 투여하여 세포 재생을 촉진합니다.',
              },
              {
                image: '/images/landing/mizumo.jpg',
                label: 'MIZUMO',
                title: '미주모 탈모치료',
                desc: 'PDRN 기반 한방 메디컬 두피 재생. 모낭을 활성화하고 탈모의 근본 원인을 치료합니다.',
              },
              {
                image: '/images/landing/lipocut.jpg',
                label: 'LIPOCUT',
                title: '리포컷 약침',
                desc: '천연물 성분 한방 바디라인 케어. 원하는 부위에 정밀 시술하여 국소 라인을 개선합니다.',
              },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 80}>
                <div className="group rounded-2xl md:rounded-3xl overflow-hidden bg-white">
                  <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <p className="text-primary text-xs tracking-[0.2em] uppercase font-bold mb-1">{item.label}</p>
                      <h3 className="text-white text-xl md:text-2xl font-black">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-sm text-text-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          05. 간호등급 + 입원 — 와이드 비주얼
          촬영 가이드: 깨끗한 1인실 입원실. 창문에서 자연광.
          침대 + 사이드테이블 + TV. 호텔 느낌으로 정돈된 모습.
          ════════════════════════════════════════ */}
      <section className="relative">
        <div className="relative aspect-[16/7] md:aspect-[21/8] min-h-[400px]">
          <Image src="/images/landing/ward.jpg" alt="상무365 입원실" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <FadeIn>
              <div className="max-w-[500px]">
                <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-3">365 Days · 24 Hours</p>
                <h2 className="text-white text-[32px] md:text-[52px] font-black leading-[1.1] tracking-tight mb-4">
                  입원하시면,<br />퇴원까지 책임집니다
                </h2>
                <div className="flex gap-6 md:gap-10 mt-8 mb-8">
                  {[
                    { val: '2등급', label: '간호 인력' },
                    { val: '24H', label: '전담 케어' },
                    { val: '365일', label: '입원 가능' },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-[28px] md:text-[36px] font-black text-primary leading-none">{s.val}</p>
                      <p className="text-white/40 text-xs mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/40 text-sm leading-relaxed max-w-[380px]">
                  간호등급 2등급. 24시간 전담 간호사 배정.
                  보호자 없이 혼자 입원하셔도 안심하실 수 있습니다.
                </p>
              </div>
            </FadeIn>
          </Container>
        </div>
      </section>

      {/* ════════════════════════════════════════
          06. 간호 케어 상세 — 이미지 + 텍스트
          촬영 가이드: 간호사가 환자 손목을 잡고 상태 체크하는 장면.
          따뜻한 표정, 밝은 병실 배경.
          ════════════════════════════════════════ */}
      <section className="py-24 md:py-36">
        <Container>
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <FadeIn className="w-full md:w-[45%] shrink-0">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden">
                <Image src="/images/landing/nursing.jpg" alt="24시간 전담 간호 케어" width={600} height={400} className="w-full h-auto object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={100} className="flex-1">
              <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-4">Nursing Grade 2</p>
              <h2 className="text-[28px] md:text-[40px] font-black text-text-main leading-[1.15] tracking-tight mb-6">
                환자분은<br /><span className="text-primary">회복에만 집중</span>하세요
              </h2>
              <div className="space-y-5">
                {[
                  { title: '24시간 즉시 대응', desc: '밤에 통증이 심해져도 바로 간호사가 달려옵니다' },
                  { title: '전담 간호사 배정', desc: '환자 한 분 한 분의 상태를 파악한 담당 간호사' },
                  { title: '보호자 없어도 안심', desc: '충분한 간호 인력이 보호자 역할까지 해드립니다' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 py-3 border-b border-border-light last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
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

      {/* ════════════════════════════════════════
          07. 숫자 스트립
          ════════════════════════════════════════ */}
      <section className="border-y border-border-light">
        <Container>
          <div className="grid grid-cols-4 divide-x divide-border-light">
            {[
              { num: '80+', label: 'INDIBA 도입국' },
              { num: '400+', label: '임상 논문' },
              { num: '2', suffix: '등급', label: '간호 인력' },
              { num: '24', suffix: 'H', label: '입원 가능' },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 50}>
                <div className="py-8 md:py-12 text-center">
                  <p className="text-[28px] md:text-[44px] font-black text-text-main leading-none tracking-tight">
                    {s.num}{s.suffix && <span className="text-[16px] md:text-[20px] text-text-muted font-bold">{s.suffix}</span>}
                  </p>
                  <p className="text-xs text-text-muted mt-1">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          08. 최종 CTA
          ════════════════════════════════════════ */}
      <section className="py-24 md:py-36 text-center">
        <Container>
          <FadeIn>
            <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-6">Contact</p>
            <h2 className="text-[28px] md:text-[48px] font-black text-text-main leading-[1.1] tracking-tight mb-3">
              지금 바로 상담하세요
            </h2>
            <p className="text-text-muted text-sm md:text-base mb-10">
              365일 진료 · 야간 20시 · 24시간 입원 가능
            </p>
            <div className="flex gap-3 justify-center mb-6">
              <a href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`} className="inline-flex items-center gap-2 px-8 py-4 bg-text-main text-white rounded-full font-bold text-base hover:bg-text-main/90 transition">
                <Phone className="w-4 h-4" /> {HOSPITAL.phone}
              </a>
              <a href={HOSPITAL.kakao} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-border-main text-text-main rounded-full font-bold text-base hover:bg-gray-50 transition">
                <MessageCircle className="w-4 h-4" /> 카카오톡
              </a>
            </div>
            <p className="text-text-muted text-xs">광주 서구 상무중앙로 96, H.K 복합빌딩 9~11층</p>
          </FadeIn>
        </Container>
      </section>

    </div>
  )
}
