import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, MessageCircle } from 'lucide-react'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '상무365한방병원',
  description: 'INDIBA 심부재생. 도수치료. 침. 한약. 체외충격파. 미주모. 리포컷. 간호등급 2등급. 365일 24시간 입원. 062-385-9000',
}

export default function LandingPage() {
  return (
    <div className="bg-white text-[#0a0a0a]">

      {/* ════════════════════════════════════════
          01. 풀스크린 히어로 — INDIBA 영상 배경
          ════════════════════════════════════════ */}
      <section className="relative h-[70dvh] md:h-[80dvh] overflow-hidden">
        {/* 영상 배경 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/program/INDIVA.avif"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/program/INDIVA.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />

        {/* 센터 정렬 텍스트 */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <FadeIn>
            <p className="text-white/60 text-xs md:text-sm tracking-[0.25em] uppercase mb-5">Premium Recovery · INDIBA Activ</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-white text-[28px] md:text-[48px] lg:text-[60px] font-bold leading-[1.15] mb-6" style={{ fontWeight: 700 }}>
              깊은 곳까지,<br />따뜻하게 치료합니다
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-white/50 text-sm md:text-base max-w-[400px] leading-relaxed mb-8">
              448kHz 심부재생 고주파 · 도수치료 · 침·한약<br />
              365일 24시간 입원 · 간호등급 2등급
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <a href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`} className="inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white text-sm font-bold hover:bg-black/80 transition">
              지금 바로 상담하기
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          02. 브랜드 소개
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-b border-[#efefef]">
        <Container>
          <FadeIn>
            <div className="text-center">
              <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#999] mb-4">Sangmu 365</p>
              <h2 className="text-[22px] md:text-[36px] font-bold leading-[1.4]">
                회복이 시작되는 곳
              </h2>
              <p className="text-[#666] text-sm md:text-base mt-4 max-w-[520px] mx-auto leading-relaxed">
                한양방 전문의 5인이 함께 진단하고,<br />
                INDIBA · 도수치료 · 침·한약 · 체외충격파로<br />
                치료 그 이상의 케어를 제공합니다.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          03. 숫자 바
          ════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-[#f8f8f8]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { num: '5인', label: '한·양방 전문의 협진' },
              { num: '365일', label: '연중무휴 진료' },
              { num: '2등급', label: '간호 인력 등급' },
              { num: '24시간', label: '입원 가능' },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 80}>
                <p className="text-[32px] md:text-[44px] font-bold leading-none">{s.num}</p>
                <p className="text-[#999] text-xs md:text-sm mt-2">{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          04. 시술 카드 8개 그리드
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#999] mb-3">Treatment</p>
              <h2 className="text-[22px] md:text-[36px] font-bold">프리미엄 치료 프로그램</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { image: '/images/program/indiba-treatment2.jpg', title: 'INDIBA 심부재생', desc: '448kHz 고주파 심부 치료' },
              { image: '/images/program/도수치료.png', title: '도수치료', desc: '전문 도수 체형교정' },
              { image: '/images/program/침.png', title: '침 치료', desc: '경혈 자극 통증 완화' },
              { image: '/images/program/한약.png', title: '한약 처방', desc: '체질별 맞춤 한약' },
              { image: '/images/program/체외충격파.png', title: '체외충격파', desc: '근골격계 집중 치료' },
              { image: '/images/program/물리치료.png', title: '물리치료', desc: '재활·통증 물리 치료' },
              { image: '/images/program/mizumo.png', title: '미주모', desc: 'PDRN 한방 탈모치료' },
              { image: '/images/program/lipocut.png', title: '리포컷', desc: '천연물 바디라인 케어' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 60}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#f0f0f0]">
                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <div className="mt-3 md:mt-4">
                    <h3 className="text-sm md:text-base font-bold">{item.title}</h3>
                    <p className="text-[#999] text-xs md:text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          05. INDIBA 상세 — AVIF 배경 + 텍스트 오버레이
          ════════════════════════════════════════ */}
      <section className="relative min-h-[400px] md:min-h-[480px] overflow-hidden">
        <Image src="/images/program/INDIVA.avif" alt="INDIBA Premium NS" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 z-10 flex items-center">
          <Container>
            <FadeIn>
              <div className="max-w-[520px]">
                <p className="text-white/50 text-xs tracking-[0.25em] uppercase mb-4">About INDIBA</p>
                <h2 className="text-white text-[24px] md:text-[40px] font-bold leading-[1.2] mb-5">
                  일반 물리치료로는<br />닿지 못하는 곳까지
                </h2>
                <p className="text-white/50 text-sm leading-[1.8] mb-8">
                  INDIBA Premium NS는 448kHz 특허 주파수로 피부 손상 없이 심부 조직까지 안전하게 도달합니다.
                  수술·절개 없이 세포 재생과 혈류 개선을 동시에 촉진하며,
                  전 세계 80개국 의료기관에서 400건 이상의 임상 논문으로 효과가 입증되었습니다.
                </p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-white text-[28px] md:text-[36px] font-bold leading-none">80+</p>
                    <p className="text-white/40 text-xs mt-1">도입 국가</p>
                  </div>
                  <div>
                    <p className="text-white text-[28px] md:text-[36px] font-bold leading-none">400+</p>
                    <p className="text-white/40 text-xs mt-1">임상 논문</p>
                  </div>
                  <div>
                    <p className="text-white text-[28px] md:text-[36px] font-bold leading-none">448kHz</p>
                    <p className="text-white/40 text-xs mt-1">특허 주파수</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </Container>
        </div>
      </section>

      {/* ════════════════════════════════════════
          06. 감성 카피
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeIn>
            <div className="text-center max-w-[600px] mx-auto">
              <h2 className="text-[20px] md:text-[32px] font-bold leading-[1.5]">
                &ldquo;치료받는 순간,<br />
                따뜻한 온기가 깊숙이 퍼지는 걸<br />
                느끼실 수 있습니다&rdquo;
              </h2>
              <p className="text-[#999] text-sm mt-6">상무365한방병원 의료진</p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          07. 입원 안내 — 3컬럼 카드
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f8f8f8]">
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#999] mb-3">Hospitalization</p>
              <h2 className="text-[22px] md:text-[36px] font-bold">입원하시면</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                image: '/images/landing/hospital-room.jpg',
                title: '쾌적한 휴게 시설',
                desc: '넓은 휴게실과 편의시설을 갖추고 있어 입원 기간 동안 편안하게 쉬실 수 있습니다.',
              },
              {
                image: '/images/landing/nurse-care.jpg',
                title: '간호등급 2등급',
                desc: '24시간 전담 간호사 배정. 밤에 통증이 심해져도 바로 대응합니다. 보호자 없어도 안심.',
              },
              {
                image: '/images/program/indiba-treatment.jpg',
                title: '입원 중 프리미엄 케어',
                desc: 'INDIBA · 도수치료 · 침·한약을 입원 기간 동안 함께 받으실 수 있습니다.',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="bg-white">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#f0f0f0]">
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-base md:text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          08. 진료시간
          ════════════════════════════════════════ */}
      <section className="py-16 md:py-20 border-b border-[#efefef]">
        <Container>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="flex-1">
              <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-3">Hours</p>
              <h3 className="text-lg md:text-xl font-bold mb-6">진료시간</h3>
              {[
                { day: '평일', time: '09:00 — 20:00', note: '야간진료' },
                { day: '토·일·공휴일', time: '09:00 — 15:00', note: '365일 진료' },
              ].map((row, i) => (
                <div key={row.day} className={`flex items-center justify-between py-4 ${i < 1 ? 'border-b border-[#efefef]' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold">{row.day}</span>
                    <span className="text-[10px] font-bold bg-black text-white px-2 py-0.5">{row.note}</span>
                  </div>
                  <span className="text-sm font-bold tabular-nums">{row.time}</span>
                </div>
              ))}
              <div className="mt-6 bg-black text-white text-center py-4">
                <p className="text-sm font-bold">365일 · 24시간 야간 입원 가능</p>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-3">Location</p>
              <h3 className="text-lg md:text-xl font-bold mb-6">오시는 길</h3>
              <p className="text-sm">상무365한방병원</p>
              <p className="text-[#666] text-sm mt-1">광주 서구 상무중앙로 96, H.K 복합빌딩 9~11층</p>
              <p className="text-[#999] text-xs mt-1">주차 가능 · 영효주차장 도보 2분</p>
              <div className="mt-6">
                <a href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`} className="text-2xl md:text-3xl font-bold hover:underline">
                  {HOSPITAL.phone}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          09. CTA
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 text-center">
        <Container>
          <FadeIn>
            <h2 className="text-[20px] md:text-[32px] font-bold mb-8">
              건강한 일상으로 돌아가는 첫걸음,<br />
              상무365와 함께
            </h2>
            <div className="flex gap-3 justify-center">
              <a href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`} className="inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white text-sm font-bold hover:bg-black/80 transition">
                <Phone className="w-4 h-4" /> 전화 상담
              </a>
              <a href={HOSPITAL.kakao} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#ddd] text-sm font-bold hover:bg-[#f8f8f8] transition">
                <MessageCircle className="w-4 h-4" /> 카카오톡
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

    </div>
  )
}
