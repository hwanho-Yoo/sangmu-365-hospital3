import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, MessageCircle, Mail, MapPin, Clock, ChevronRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '체외충격파 치료 | 상무365한방병원',
  description: '체외충격파·도수치료·침·한약·INDIBA 통합 치료. 한양방 전문의 5인 협진. 365일 진료. 062-385-9000',
}

export default function ShockwavePage() {
  return (
    <div className="bg-white text-[#222]" style={{ fontFamily: 'Pretendard, sans-serif' }}>

      {/* ════════════════════════════════════════
          01. 히어로 — 풀스크린 + 다크 오버레이 + 센터 텍스트
          ════════════════════════════════════════ */}
      <section className="relative h-[100dvh] min-h-[600px] overflow-hidden">
        <Image
          src="/images/program/체외충격파.png"
          alt="체외충격파 치료"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <FadeIn>
            <p className="text-white/50 text-sm tracking-[0.2em] uppercase mb-6">Shockwave Therapy</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-white text-[32px] md:text-[42px] lg:text-[52px] font-bold leading-[1.2] mb-6">
              통증의 근본 원인을<br />찾아 치료합니다
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-white/60 text-base md:text-lg max-w-[500px] leading-relaxed mb-10">
              체외충격파로 손상 조직을 재생하고,<br />
              한양방 협진으로 근본적인 회복을 돕습니다.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#32373c] text-white text-sm font-bold hover:bg-[#23272b] transition-colors"
              >
                <Phone className="w-4 h-4" />
                전화 상담
              </a>
              <a
                href={HOSPITAL.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                카카오톡 상담
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          02. 빠른 문의 — 3박스
          ════════════════════════════════════════ */}
      <section className="py-14 md:py-16 bg-[#f9f9f9] border-b border-[#eee]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: '전화 문의',
                line1: HOSPITAL.phone,
                line2: '365일 상담 가능',
              },
              {
                icon: Clock,
                title: '진료 시간',
                line1: '평일 09:00 — 20:00',
                line2: '토·일·공휴일 09:00 — 16:00',
              },
              {
                icon: MapPin,
                title: '오시는 길',
                line1: '광주 서구 상무중앙로 96',
                line2: 'H.K 복합빌딩 9~11층',
              },
            ].map((item) => (
              <FadeIn key={item.title}>
                <div className="flex items-start gap-4 bg-white p-6 md:p-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f4f4f4] flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#555]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{item.line1}</p>
                    <p className="text-[#999] text-sm">{item.line2}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          03. 소개 — 텍스트 좌 + 이미지 우
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-4">About Treatment</p>
                <h2 className="text-[24px] md:text-[36px] font-bold leading-[1.3] mb-6">
                  체외충격파 치료란?
                </h2>
                <p className="text-[#555] text-[15px] leading-[1.9] mb-6">
                  체외충격파(ESWT)는 고에너지 음파를 통증 부위에 집중 전달하여
                  손상된 조직의 재생과 혈류 개선을 촉진하는 비수술 치료법입니다.
                  수술 없이 만성 통증과 근골격계 질환을 효과적으로 치료하며,
                  세계적으로 검증된 안전한 치료 방법입니다.
                </p>
                <p className="text-[#555] text-[15px] leading-[1.9] mb-8">
                  상무365한방병원은 체외충격파에 침·한약·도수치료를 결합한
                  한양방 통합 치료로 통증의 근본 원인까지 접근합니다.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden bg-[#f0f0f0]">
                    <Image src="/images/profile/박준규.jpg" alt="박준규 원장" fill className="object-cover" sizes="64px" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">박준규 원장</p>
                    <p className="text-[#999] text-xs">대표원장 · 한방재활의학과 전문의</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f0f0f0]">
                <Image
                  src="/images/program/체외충격파.png"
                  alt="체외충격파 시술 장면"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          04. 치료 프로그램 — 8카드 4열 그리드
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f9f9f9]">
        <Container>
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-3">Treatment Program</p>
              <h2 className="text-[24px] md:text-[36px] font-bold">통합 치료 프로그램</h2>
              <p className="text-[#666] text-sm mt-3 max-w-[480px] mx-auto">
                체외충격파를 중심으로 한양방 치료를 결합하여<br />
                환자 맞춤형 통합 치료를 제공합니다.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { image: '/images/program/체외충격파.png', title: '체외충격파', desc: '고에너지 음파 조직 재생' },
              { image: '/images/program/도수치료.png', title: '도수치료', desc: '전문 도수 체형교정' },
              { image: '/images/program/침.png', title: '침 치료', desc: '경혈 자극 통증 완화' },
              { image: '/images/program/한약.png', title: '한약 처방', desc: '체질별 맞춤 한약' },
              { image: '/images/program/물리치료.png', title: '물리치료', desc: '재활·통증 물리 치료' },
              { image: '/images/program/indiba-treatment2.jpg', title: 'INDIBA', desc: '448kHz 심부재생 고주파' },
              { image: '/images/program/mizumo.png', title: '미주모', desc: 'PDRN 한방 탈모치료' },
              { image: '/images/program/lipocut.png', title: '리포컷', desc: '천연물 바디라인 케어' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 60}>
                <div className="group bg-white cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f0f0f0]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 md:p-5 text-center">
                    <h3 className="text-sm md:text-base font-bold mb-1">{item.title}</h3>
                    <p className="text-[#999] text-xs md:text-sm">{item.desc}</p>
                    <p className="text-xs text-[#aaa] mt-2 flex items-center justify-center gap-1 group-hover:text-[#555] transition-colors">
                      자세히 보기 <ChevronRight className="w-3 h-3" />
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          05. 의료진 — 5인 프로필
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-3">Medical Team</p>
              <h2 className="text-[24px] md:text-[36px] font-bold">한양방 전문의 5인 협진</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6">
            {[
              { image: '/images/profile/박준규.jpg', name: '박준규', role: '대표원장' },
              { image: '/images/profile/박정열.jpg', name: '박정열', role: '원장' },
              { image: '/images/profile/백상철.jpg', name: '백상철', role: '원장' },
              { image: '/images/profile/안규상.jpg', name: '안규상', role: '원장' },
              { image: '/images/profile/이동욱.jpg', name: '이동욱', role: '원장' },
            ].map((doc, i) => (
              <FadeIn key={doc.name} delay={i * 80}>
                <div className="text-center">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#f0f0f0] mb-4">
                    <Image
                      src={doc.image}
                      alt={`${doc.name} ${doc.role}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-bold">{doc.name}</h3>
                  <p className="text-[#999] text-xs md:text-sm mt-0.5">{doc.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          06. 통계 — 4 메트릭
          ════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#32373c] text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { num: '5인', label: '한·양방 전문의' },
              { num: '365일', label: '연중무휴 진료' },
              { num: '2등급', label: '간호 인력 등급' },
              { num: '24시간', label: '입원 가능' },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 80}>
                <p className="text-[36px] md:text-[48px] font-bold leading-none">{s.num}</p>
                <p className="text-white/50 text-xs md:text-sm mt-2">{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          07. INDIBA 심부재생 — 풀와이드 이미지 + 오버레이
          ════════════════════════════════════════ */}
      <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden" style={{ backgroundColor: '#1a1612' }}>
        <div className="absolute inset-0 flex items-center justify-center py-10 md:py-16">
          <Image src="/images/program/INDIVA.avif" alt="INDIBA Premium NS" fill className="object-contain" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 z-10 flex items-center">
          <Container>
            <FadeIn>
              <div className="max-w-[520px]">
                <p className="text-white/50 text-xs tracking-[0.25em] uppercase mb-4">INDIBA Premium NS</p>
                <h2 className="text-white text-[24px] md:text-[40px] font-bold leading-[1.2] mb-5">
                  체외충격파와 함께<br />깊은 곳까지 치료합니다
                </h2>
                <p className="text-white/50 text-sm leading-[1.8] mb-8">
                  INDIBA Premium NS는 448kHz 특허 주파수로 심부 조직까지 안전하게 도달합니다.
                  체외충격파로 손상 조직을 재생하고, INDIBA로 세포 회복과 혈류 개선을 동시에 촉진하여
                  더 빠르고 근본적인 치료 효과를 경험하실 수 있습니다.
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
          08. 적응증 — 이런 분께 추천합니다
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-3">Who Needs It</p>
              <h2 className="text-[24px] md:text-[36px] font-bold">이런 분께 추천합니다</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] mx-auto">
            {[
              '어깨 통증이 만성적으로 반복되는 분',
              '발뒤꿈치·족저근막에 통증이 있는 분',
              '테니스엘보·골프엘보로 고생하시는 분',
              '무릎 관절 주변 통증이 있는 분',
              '석회화 건염 진단을 받으신 분',
              '수술 없이 통증을 치료하고 싶은 분',
            ].map((text, i) => (
              <FadeIn key={text} delay={i * 60}>
                <div className="flex items-center gap-4 p-5 bg-[#f9f9f9]">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#32373c] text-white flex items-center justify-center text-xs font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm md:text-[15px] font-medium">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          08. 치료 과정
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f9f9f9]">
        <Container>
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-3">Process</p>
              <h2 className="text-[24px] md:text-[36px] font-bold">치료 과정</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: '01', title: '정밀 진단', desc: '한양방 전문의가 통증 부위와 원인을 정밀 진단합니다.' },
              { step: '02', title: '치료 계획 수립', desc: '환자 상태에 맞는 맞춤형 통합 치료 계획을 세웁니다.' },
              { step: '03', title: '충격파 + 한양방 치료', desc: '체외충격파와 침·도수치료를 병행하여 집중 치료합니다.' },
              { step: '04', title: '회복 관리', desc: '재발 방지를 위한 운동 처방과 정기적 관리를 진행합니다.' },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 100}>
                <div className="bg-white p-6 md:p-8 text-center h-full">
                  <p className="text-[32px] md:text-[40px] font-bold text-[#ddd] mb-4">{item.step}</p>
                  <h3 className="text-base font-bold mb-3">{item.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          09. 진료시간 + 오시는 길
          ════════════════════════════════════════ */}
      <section className="py-16 md:py-20 border-b border-[#eee]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-3">Hours</p>
              <h3 className="text-lg md:text-xl font-bold mb-6">진료시간</h3>
              {[
                { day: '평일', time: '09:00 — 20:00', note: '야간진료' },
                { day: '토·일·공휴일', time: '09:00 — 16:00', note: '365일 진료' },
              ].map((row, i) => (
                <div key={row.day} className={`flex items-center justify-between py-4 ${i < 1 ? 'border-b border-[#eee]' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold">{row.day}</span>
                    <span className="text-[10px] font-bold bg-[#32373c] text-white px-2 py-0.5">{row.note}</span>
                  </div>
                  <span className="text-sm font-bold tabular-nums">{row.time}</span>
                </div>
              ))}
              <div className="mt-6 bg-[#32373c] text-white text-center py-4">
                <p className="text-sm font-bold">365일 · 24시간 야간 입원 가능</p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-3">Location</p>
              <h3 className="text-lg md:text-xl font-bold mb-6">오시는 길</h3>
              <p className="text-sm font-bold">{HOSPITAL.name}</p>
              <p className="text-[#666] text-sm mt-2">광주 서구 상무중앙로 96, H.K 복합빌딩 9~11층</p>
              <p className="text-[#999] text-xs mt-1">주차 가능 · 영효주차장 도보 2분</p>
              <div className="mt-6">
                <a href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`} className="text-2xl md:text-3xl font-bold hover:underline">
                  {HOSPITAL.phone}
                </a>
              </div>
              <div className="flex gap-3 mt-6">
                <a
                  href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#32373c] text-white text-xs font-bold hover:bg-[#23272b] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> 전화
                </a>
                <a
                  href={HOSPITAL.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#ddd] text-xs font-bold hover:bg-[#f9f9f9] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> 카카오톡
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          10. CTA
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 text-center">
        <Container>
          <FadeIn>
            <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-4">Contact Us</p>
            <h2 className="text-[22px] md:text-[36px] font-bold mb-4">
              통증, 더 이상 참지 마세요
            </h2>
            <p className="text-[#666] text-sm md:text-base mb-10 max-w-[400px] mx-auto leading-relaxed">
              체외충격파 + 한양방 협진으로<br />
              근본적인 회복을 시작하세요.
            </p>
            <div className="flex gap-3 justify-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#32373c] text-white text-sm font-bold hover:bg-[#23272b] transition-colors"
              >
                <Phone className="w-4 h-4" /> 전화 상담
              </a>
              <a
                href={HOSPITAL.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#ddd] text-sm font-bold hover:bg-[#f9f9f9] transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> 카카오톡
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

    </div>
  )
}
