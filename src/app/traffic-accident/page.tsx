import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, MessageCircle } from 'lucide-react'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import VisitInfoCard from '@/components/chiropractic/VisitInfoCard'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '교통사고 후유증 | 상무365한방병원',
  description: '교통사고 후유증 한방치료. 자동차보험 적용, 본인부담금 0원. INDIBA·도수치료·침·한약. 한양방 협진. 062-385-9000',
}

export default function TrafficAccidentPage() {
  return (
    <div className="bg-white text-[#111]">

      {/* ════════════════════════════════════════
          01. 히어로 — INDIBA 영상 풀스크린
          ════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100dvh-64px)] overflow-hidden" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <FadeIn>
            <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6">
              <span className="bg-[#2a7d6a]/15 text-[#2a7d6a] px-2 py-1 rounded">Traffic Accident · After Care</span>
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-[#111] text-[36px] md:text-[56px] lg:text-[72px] font-black leading-[1.1] mb-8">
              사고 이후가,<br />더 중요합니다
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-[#555] text-base md:text-xl max-w-[520px] leading-relaxed mb-10">
              자동차보험 적용 · 본인부담금 0원<br />
              한·양방 협진으로 후유증을 근본부터
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#2a7d6a] text-white text-base font-bold rounded-lg hover:bg-[#237060] transition"
            >
              <Phone className="w-5 h-5" />
              {HOSPITAL.phone}
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          02. 숫자 바 — 풀와이드 다크
          ════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
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

      {/* ════════════════════════════════════════
          03. INDIBA 섹션 — 왼쪽 텍스트 + 오른쪽 영상
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#f7f7f7' }}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <div>
                <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6">
                  <span className="bg-[#2a7d6a]/15 text-[#2a7d6a] px-2 py-1 rounded">Sangmu 365 · Total Care</span>
                </p>
                <h2 className="text-[#111] text-[30px] md:text-[48px] lg:text-[56px] font-black leading-[1.1] mb-6">
                  한 곳에서,<br />모든 치료를
                </h2>
                <p className="text-[#555] text-base md:text-lg leading-[1.8] mb-10">
                  INDIBA · 도수치료 · 체외충격파 · 침 · 한약<br />
                  미주모 · 리포컷 · 간호등급 2등급
                </p>
                <a
                  href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 px-10 py-5 bg-[#2a7d6a] text-white text-base font-bold rounded-lg hover:bg-[#237060] transition"
                >
                  <Phone className="w-5 h-5" />
                  {HOSPITAL.phone}
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/program/INDIVA.avif"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ clipPath: 'inset(0 8% 0 8% round 16px)' }}
                >
                  <source src="/images/program/INDIVA.mp4" type="video/mp4" />
                </video>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          04. 핵심 치료 — 큼직한 2컬럼 카드
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full px-5 md:px-6 max-w-[1400px]">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-[#999] mb-4">Core Treatment</p>
              <h2 className="text-[28px] md:text-[44px] font-black">핵심 치료 프로그램</h2>
            </div>
          </FadeIn>

          {/* 큰 카드 2개 — 도수치료 + 체외충격파 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              {
                image: '/images/program/도수치료.png',
                title: '도수치료',
                desc: '전문 도수치료사가 손으로 직접 근막과 관절을 교정합니다.\n틀어진 체형을 바로잡고 통증의 근본 원인을 해소합니다.',
              },
              {
                image: '/images/program/체외충격파.png',
                title: '체외충격파',
                desc: '고에너지 음파를 통증 부위에 집중 전달하여\n손상된 조직의 재생과 혈류 개선을 촉진합니다.',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="group relative overflow-hidden bg-[#fafafa] rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-black mb-3">{item.title}</h3>
                    <p className="text-[#555] text-sm md:text-base leading-[1.8] whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 중간 카드 3개 — 침, 한약, 물리치료 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: '/images/program/침.png',
                title: '침 치료',
                desc: '경혈을 자극하여 통증 완화와 기혈 순환을 촉진합니다.',
              },
              {
                image: '/images/program/한약.png',
                title: '한약 처방',
                desc: '체질과 증상에 맞는 맞춤 한약으로 내부부터 회복합니다.',
              },
              {
                image: '/images/program/물리치료.png',
                title: '물리치료',
                desc: '전문 재활 장비로 통증을 줄이고 기능을 회복합니다.',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="group bg-[#fafafa] rounded-2xl overflow-hidden h-full flex flex-col shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5 md:p-6 flex-1">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          05. INDIBA 시술 — 풀와이드 이미지
          ════════════════════════════════════════ */}
      <section className="relative min-h-[400px] md:min-h-[500px] overflow-hidden">
        <Image src="/images/program/indiba-treatment2.jpg" alt="INDIBA 시술 장면" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6">
          <FadeIn>
            <h2 className="text-[#111] text-[24px] md:text-[40px] font-black leading-[1.3] mb-4">
              &ldquo;치료받는 순간,<br />따뜻한 온기가 깊숙이 퍼집니다&rdquo;
            </h2>
            <p className="text-[#555] text-sm md:text-base">상무365한방병원 의료진</p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          06. 특수 프로그램 — 미주모 + 리포컷
          ════════════════════════════════════════ */}
      <section className="pt-20 pb-10 md:pt-28 md:pb-14">
        <div className="mx-auto w-full px-5 md:px-6 max-w-[1400px]">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-[#999] mb-4">Special Program</p>
              <h2 className="text-[28px] md:text-[44px] font-black">특수 치료 프로그램</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                image: '/images/program/mizumo.png',
                title: '미주모 탈모치료',
                sub: 'PDRN 한방 메디컬',
                desc: '자가 재생 인자(PDRN)를 활용한 한방 탈모 치료.\n두피 깊숙이 영양을 공급하여 모근을 강화합니다.',
              },
              {
                image: '/images/program/lipocut.png',
                title: '리포컷 약침',
                sub: '천연물 바디라인 케어',
                desc: '천연 한방 성분을 활용한 국소 지방 감소 약침.\n비수술로 바디라인을 관리합니다.',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="group bg-[#fafafa] rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-[#999] text-xs tracking-[0.15em] uppercase mb-2">{item.sub}</p>
                    <h3 className="text-xl md:text-2xl font-black mb-3">{item.title}</h3>
                    <p className="text-[#555] text-sm md:text-base leading-[1.8] whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          07. 의료진 — 5인 대형 프로필
          ════════════════════════════════════════ */}
      <section className="pt-10 pb-20 md:pt-14 md:pb-28 bg-[#f7f7f7]">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-[#999] mb-4">Medical Team</p>
              <h2 className="text-[28px] md:text-[44px] font-black">한양방 전문의 5인 협진</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { image: '/images/profile/박준규.jpg', name: '박준규', role: '대표원장' },
              { image: '/images/profile/박정열.jpg', name: '박정열', role: '원장' },
              { image: '/images/profile/백상철.jpg', name: '백상철', role: '원장' },
              { image: '/images/profile/안규상.jpg', name: '안규상', role: '원장' },
              { image: '/images/profile/이동욱.jpg', name: '이동욱', role: '원장' },
            ].map((doc, i) => (
              <FadeIn key={doc.name} delay={i * 60}>
                <div className="text-center">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#e8e8e8]">
                    <Image
                      src={doc.image}
                      alt={`${doc.name} ${doc.role}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  <div className="py-4">
                    <h3 className="text-lg md:text-xl font-black">{doc.name}</h3>
                    <p className="text-[#999] text-sm md:text-base mt-1">{doc.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          08. 입원 안내 — 큰 3카드
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full px-5 md:px-6 max-w-[1400px]">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-[#999] mb-4">Hospitalization</p>
              <h2 className="text-[28px] md:text-[44px] font-black">입원하시면</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: '/images/program/휴게실.png',
                title: '쾌적한 휴게 시설',
                desc: '넓은 휴게실과 편의시설을 갖추고 있어 입원 기간 동안 편안하게 쉬실 수 있습니다.',
              },
              {
                image: '/images/landing/nurse-care.jpg',
                title: '간호등급 2등급',
                desc: '24시간 전담 간호사 배정. 밤에 통증이 심해져도 바로 대응합니다.',
              },
              {
                image: '/images/program/indiba-treatment.jpg',
                title: '입원 중 프리미엄 케어',
                desc: 'INDIBA · 도수치료 · 침·한약을 입원 기간 동안 함께 받으실 수 있습니다.',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="bg-[#fafafa] rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[#555] text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          09. 진료 안내 — Visit Card
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f7f7f7]">
        <div className="mx-auto w-full px-5 md:px-6 max-w-[1400px]">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-sm tracking-[0.2em] uppercase text-[#999] mb-4">Information</p>
              <h2 className="text-[28px] md:text-[44px] font-black">진료 안내</h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <VisitInfoCard />
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          10. CTA — 큼직하게
          ════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#2a7d6a] text-center">
        <Container>
          <FadeIn>
            <h2 className="text-white text-[26px] md:text-[44px] font-black leading-[1.3] mb-6">
              통증, 더 이상 참지 마세요
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-12 max-w-[480px] mx-auto leading-relaxed">
              한양방 전문의 5인이 함께 진단하고<br />
              환자 맞춤형 통합 치료를 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#2a7d6a] text-base font-bold rounded-lg hover:bg-white/90 transition"
              >
                <Phone className="w-5 h-5" /> 전화 상담 {HOSPITAL.phone}
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
