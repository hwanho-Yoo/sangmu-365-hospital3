import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone, MessageCircle, Clock, MapPin,
  Car, Leaf, StretchHorizontal, Zap, Crosshair,
  Sparkles, BedDouble, UserRound, CalendarCheck,
  CheckCircle, Droplets,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import NaverStaticMap from '@/components/traffic/NaverStaticMap'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '피부진료 | 상무365한방병원',
  description: '한방 피부진료, 미주안 스킨부스터, 슈링크 유니버스 HIFU 리프팅, INDIBA, 리포컷, 미주모. 체질 개선부터 피부 미용까지.',
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

const conditions = [
  { name: '아토피 피부염', desc: '체질 개선 + 외용제' },
  { name: '여드름·흉터', desc: '한약 + 약침 치료' },
  { name: '건선·습진', desc: '면역 조절 치료' },
  { name: '두드러기', desc: '원인 분석 + 체질 치료' },
  { name: '탈모', desc: '두피 환경 개선' },
  { name: '피부미용', desc: '스킨부스터 + 리프팅' },
]

const products = [
  {
    image: '/images/skin-mijuan.png',
    title: '미주안 스킨부스터',
    sub: 'PN Skin Booster',
    desc: '연어 유래 고순도 PN 성분으로 진피층을 복원하고\n콜라겐 생성을 촉진하는 프리미엄 스킨부스터.',
  },
  {
    image: '/images/skin-shrink.png',
    title: '슈링크 유니버스 HIFU',
    sub: 'Non-invasive Lifting',
    desc: '고강도 집속 초음파로 SMAS층까지 도달하여\n절개 없이 자연스러운 리프팅 효과를 제공합니다.',
  },
  {
    image: '/images/program/INDIVA.avif',
    title: 'INDIBA',
    sub: '448kHz Deep Care',
    desc: '448kHz 특허 주파수로 심부 조직까지 안전하게 도달.\n세포 재생과 혈류 개선을 동시에 촉진합니다.',
  },
  {
    image: '/images/program/lipocut.png',
    title: '리포컷 약침',
    sub: '천연물 바디라인 케어',
    desc: '천연 한방 성분을 활용한 국소 지방 감소 약침.\n비수술로 바디라인을 관리합니다.',
  },
  {
    image: '/images/program/mizumo.png',
    title: '미주모 탈모치료',
    sub: 'PDRN 한방 메디컬',
    desc: '자가 재생 인자(PDRN)를 활용한 한방 탈모 치료.\n두피 깊숙이 영양을 공급하여 모근을 강화합니다.',
  },
  {
    image: '/images/program/hicooks.png',
    title: '하이쿡스',
    sub: 'High Frequency Treatment',
    desc: '고주파 에너지로 피부 깊숙이 열에너지를 전달.\n콜라겐 리모델링과 피부 탄력 회복에 효과적입니다.',
  },
]

const mijuanPoints = [
  '연어에서 추출·정제한 고순도 PN(Polynucleotide) 성분',
  '피부 진피층 환경 개선 및 구조 복원',
  '콜라겐 생성 촉진으로 탄력·잔주름 개선',
  '항염작용으로 붉고 예민한 피부 진정',
  '사람 DNA와 95% 이상 흡사한 높은 생체적합성',
]

const shrinkFeatures = [
  '비침습적 리프팅 — 절개 없이 피부 탄력 회복',
  'SMAS층까지 도달하는 깊은 초음파 에너지',
  '콜라겐 재생 촉진으로 장기적 효과 지속',
  '시술 시간 30~60분, 일상생활 즉시 복귀',
  '처진 턱선·이중턱·볼 탄력 개선',
]

export default function SkinPage() {
  return (
    <div className="bg-white text-[#111]">

      {/* ════════════════════════════════════════
          01. 히어로 — 피부진료 풀스크린
          ════════════════════════════════════════ */}
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
        <div className="absolute inset-0 bg-white/50 z-[5]" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <FadeIn>
            <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6">
              <span className="bg-[#b5548a]/15 text-[#b5548a] px-2 py-1 rounded">Sangmu 365 · Dermatology &amp; Aesthetics</span>
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="text-[#111] text-[36px] md:text-[56px] lg:text-[72px] font-black leading-[1.1] mb-8">
              아름다움을,<br />건강하게
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-[#555] text-base md:text-xl max-w-[500px] leading-relaxed mb-10">
              미주안 · 슈링크 · INDIBA · 리포컷 · 미주모<br />
              한방 체질 치료 + 최신 피부미용 시술
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

      {/* ════════════════════════════════════════
          02. 퀵 메뉴 — 10개 아이콘 격자
          ════════════════════════════════════════ */}
      <section className="py-10 md:py-14 bg-white border-b border-[#f0f0f0]">
        <Container>
          <div className="grid grid-cols-5 gap-3 md:gap-4">
            {quickMenu.map((item, i) => {
              const Icon = item.icon
              const isActive = item.href === '/skin'
              return (
                <FadeIn key={item.label} delay={i * 30}>
                  <Link
                    href={item.href}
                    className={`flex flex-col items-center gap-2 py-3 md:py-4 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-[#b5548a]/10 text-[#b5548a]'
                        : 'hover:bg-[#fafafa] text-[#555]'
                    }`}
                  >
                    <Icon className={`w-6 h-6 md:w-7 md:h-7 ${isActive ? 'text-[#b5548a]' : 'text-[#999]'}`} strokeWidth={1.5} />
                    <span className={`text-[11px] md:text-sm font-medium ${isActive ? 'text-[#b5548a] font-bold' : ''}`}>
                      {item.label}
                    </span>
                  </Link>
                </FadeIn>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          03. 숫자 바 — 핵심 지표
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
          04. 진료 분야 — 6가지 피부질환 카드
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f7f7f7]">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-[#999] mb-4">Dermatology</p>
              <h2 className="text-[28px] md:text-[44px] font-black">한방 피부 진료 분야</h2>
              <p className="text-[#555] text-base md:text-lg mt-4 max-w-[560px] mx-auto leading-relaxed">
                피부 증상의 외적 치료뿐 아니라 체질과 내부 원인을 함께 살펴<br className="hidden md:block" />
                근본적인 치료를 추구합니다.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {conditions.map((c, i) => (
              <FadeIn key={c.name} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                  <Sparkles className="w-8 h-8 text-[#b5548a] mx-auto mb-4" strokeWidth={1.5} />
                  <p className="text-lg font-bold text-[#111]">{c.name}</p>
                  <p className="text-sm text-[#999] mt-2">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          05. 시술 프로그램 — 상품 카드 6개
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-[#999] mb-4">Aesthetic Programs</p>
              <h2 className="text-[28px] md:text-[44px] font-black">프리미엄 피부미용 시술</h2>
            </div>
          </FadeIn>

          {/* 상단 큰 카드 2개 — 미주안 + 슈링크 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {products.slice(0, 2).map((item, i) => (
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
                    <p className="text-[#999] text-xs tracking-[0.15em] uppercase mb-2">{item.sub}</p>
                    <h3 className="text-xl md:text-2xl font-black mb-3">{item.title}</h3>
                    <p className="text-[#555] text-sm md:text-base leading-[1.8] whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 하단 중간 카드 4개 — INDIBA, 리포컷, 미주모, 하이쿡스 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {products.slice(2).map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="group bg-[#fafafa] rounded-2xl overflow-hidden h-full flex flex-col shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 md:p-5 flex-1">
                    <p className="text-[#999] text-[10px] md:text-xs tracking-[0.15em] uppercase mb-1">{item.sub}</p>
                    <h3 className="text-base md:text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-[#555] text-xs md:text-sm leading-relaxed whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          06. 미주안 상세 — 특징 + 시술과정
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f7f7f7]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <div>
                <p className="text-[#999] text-sm tracking-[0.3em] uppercase mb-5">Skin Booster</p>
                <h2 className="text-[#111] text-[30px] md:text-[48px] font-black leading-[1.15] mb-6">
                  미주안,<br />피부 깊숙이 채우다
                </h2>
                <p className="text-[#555] text-base md:text-lg leading-[1.8] mb-8">
                  연어에서 추출한 고순도 PN 성분의 스킨부스터로<br className="hidden md:block" />
                  진피층 환경을 개선하고 구조를 복원합니다.
                </p>
                <ul className="space-y-3">
                  {mijuanPoints.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <CheckCircle className="w-[18px] h-[18px] text-[#b5548a] shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-sm md:text-base text-[#555]">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image src="/images/skin-mijuan.png" alt="미주안 스킨부스터" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </FadeIn>
          </div>

          {/* 연령대별 효과 */}
          <FadeIn>
            <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-4 mt-16">
              {[
                { age: '10대', desc: '여드름 흉터 재생 및 피부톤 유지' },
                { age: '20~30대', desc: '모공 축소·탄력 증가 피부톤 개선' },
                { age: '40~60대', desc: '잔주름 개선·탄력 증가 안티에이징' },
              ].map((item) => (
                <div key={item.age} className="bg-white rounded-2xl p-6 text-center shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                  <span className="inline-block bg-[#b5548a]/10 text-[#b5548a] text-sm font-bold px-3 py-1 rounded-full mb-3">{item.age}</span>
                  <p className="text-sm text-[#555]">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          07. 슈링크 유니버스 상세
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn delay={150}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden md:order-first">
                <Image src="/images/skin-shrink.png" alt="슈링크 유니버스 HIFU" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </FadeIn>
            <FadeIn>
              <div>
                <p className="text-[#999] text-sm tracking-[0.3em] uppercase mb-5">HIFU Lifting</p>
                <h2 className="text-[#111] text-[30px] md:text-[48px] font-black leading-[1.15] mb-6">
                  슈링크 유니버스,<br />당기지 않는 리프팅
                </h2>
                <p className="text-[#555] text-base md:text-lg leading-[1.8] mb-8">
                  고강도 집속 초음파(HIFU)를 이용한 비침습 리프팅.<br className="hidden md:block" />
                  SMAS층까지 에너지를 전달하여 자연스러운 효과를 제공합니다.
                </p>
                <ul className="space-y-3">
                  {shrinkFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle className="w-[18px] h-[18px] text-[#b5548a] shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-sm md:text-base text-[#555]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          08. INDIBA 풀와이드 이미지 배너
          ════════════════════════════════════════ */}
      <section className="relative min-h-[400px] md:min-h-[500px] overflow-hidden">
        <Image src="/images/program/indiba-treatment2.jpg" alt="INDIBA 시술 장면" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6">
          <FadeIn>
            <h2 className="text-[#111] text-[24px] md:text-[40px] font-black leading-[1.3] mb-4">
              &ldquo;피부가 편안해지는 순간,<br />진짜 변화가 시작됩니다&rdquo;
            </h2>
            <p className="text-[#555] text-sm md:text-base">상무365한방병원 피부진료팀</p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          09. 의료진 — 5인 프로필
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f7f7f7]">
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
          10. 입원 안내 — 3카드
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-[#999] mb-4">Hospitalization</p>
              <h2 className="text-[28px] md:text-[44px] font-black">입원하시면</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
        </Container>
      </section>

      {/* ════════════════════════════════════════
          11. 진료시간 + 오시는 길
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#f7f7f7]">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-[#999] mb-4">Information</p>
              <h2 className="text-[28px] md:text-[44px] font-black">진료 안내</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-10 h-full shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#f5e5ee] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#b5548a]" />
                  </div>
                  <h3 className="text-xl font-black">진료시간</h3>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-[#999] text-sm">평일</span>
                    <span className="text-lg font-bold tabular-nums">09:00 — 20:00</span>
                  </div>
                  <div className="w-full h-px bg-[#f0f0f0]" />
                  <div className="flex justify-between items-center">
                    <span className="text-[#999] text-sm">토·일·공휴일</span>
                    <span className="text-lg font-bold tabular-nums">09:00 — 16:00</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold bg-[#f5e5ee] text-[#b5548a] px-3 py-1.5 rounded-full">365일 진료</span>
                  <span className="text-xs font-semibold bg-[#f5e5ee] text-[#b5548a] px-3 py-1.5 rounded-full">야간진료</span>
                  <span className="text-xs font-semibold bg-[#f5e5ee] text-[#b5548a] px-3 py-1.5 rounded-full">점심시간 없음</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="bg-white rounded-2xl p-8 md:p-10 h-full shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#f5e5ee] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#b5548a]" />
                  </div>
                  <h3 className="text-xl font-black">오시는 길</h3>
                </div>
                <p className="text-lg font-bold mb-1">{HOSPITAL.name}</p>
                <p className="text-[#555] text-base leading-relaxed mb-6">
                  광주 서구 상무중앙로 96<br />
                  H.K 복합빌딩 9~11층
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-semibold bg-[#f5e5ee] text-[#b5548a] px-3 py-1.5 rounded-full">주차 가능</span>
                  <span className="text-xs font-semibold bg-[#f5e5ee] text-[#b5548a] px-3 py-1.5 rounded-full">영효주차장 도보 2분</span>
                </div>
                <a
                  href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 text-[#b5548a] font-bold hover:underline transition"
                >
                  <Phone className="w-4 h-4" />
                  {HOSPITAL.phone}
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={150}>
            <div className="mt-5">
              <NaverStaticMap />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          12. CTA — 대형
          ════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#b5548a] text-center">
        <Container>
          <FadeIn>
            <h2 className="text-white text-[26px] md:text-[44px] font-black leading-[1.3] mb-6">
              피부 고민, 지금 상담하세요
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-12 max-w-[480px] mx-auto leading-relaxed">
              한방 체질 치료부터 최신 피부미용 시술까지<br />
              맞춤 솔루션을 제안합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#b5548a] text-base font-bold rounded-lg hover:bg-white/90 transition"
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
