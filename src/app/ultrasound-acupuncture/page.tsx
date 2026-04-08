import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, ArrowRight, ChevronRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import FadeIn from '@/components/ui/FadeIn'
import NaverStaticMap from '@/components/traffic/NaverStaticMap'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '상무365한방병원 | 메인 테스트 v3',
  description: '광주 서구 상무365한방병원. 한양방 협진, 365일 진료, 야간 20시. 062-385-9000',
}

export default function MainPageTestV3() {
  return (
    <div className="bg-white">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — 이미지가 바로 보이는 풀 비주얼
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[100dvh] overflow-hidden">
        {/* 실제 병원 이미지 — 바로 노출 */}
        <Image
          src="/images/hero-01.png"
          alt="상무365한방병원"
          fill
          priority
          className="object-cover"
        />
        {/* 하단만 살짝 어둡게 (글씨 가독성) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        {/* 텍스트 — 하단 좌측 정렬 */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-12 lg:p-16">
          <Container>
            <FadeIn>
              <p className="text-white/50 text-[13px] tracking-[0.3em] uppercase mb-3">
                Sangmu 365 Korean Medicine Hospital
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-white text-[36px] md:text-[56px] lg:text-[72px] font-black leading-[1.08] tracking-tight mb-4">
                당신의 회복을<br />설계합니다
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-white/60 text-sm md:text-base mb-6 max-w-[360px]">
                전문의 5인 협진 · 365일 진료 · 야간 20시
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="flex gap-3">
                <a
                  href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-text-main rounded-full font-bold text-sm hover:bg-white/90 transition"
                >
                  <Phone className="w-4 h-4" />
                  {HOSPITAL.phone}
                </a>
                <a
                  href={HOSPITAL.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full font-bold text-sm hover:bg-white/10 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  카카오톡
                </a>
              </div>
            </FadeIn>
          </Container>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          서비스 — 이미지 카드 그리드
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-6 md:py-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { title: '교통사고 후유증', sub: '본인부담금 0원', image: '/images/traffic/traffic-adv-02.png', href: '/traffic-accident' },
              { title: 'INDIBA 심부재생', sub: '프리미엄 회복', image: '/images/program/indiba-treatment.jpg', href: '/treatment' },
              { title: '한양방 통합치료', sub: '전문의 5인 협진', image: '/images/traffic/traffic-adv-03.png', href: '/treatment' },
            ].map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 60}>
                <Link href={svc.href} className="group block relative rounded-2xl overflow-hidden">
                  <div className="relative aspect-[4/3] bg-gray-100">
                    <Image src={svc.image} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white/60 text-xs mb-1">{svc.sub}</p>
                    <h3 className="text-white text-xl md:text-2xl font-black">{svc.title}</h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* 서비스 링크 바 */}
          <div className="mt-3 md:mt-4 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {[
              { label: '도수교정', href: '/chiropractic' },
              { label: '체외충격파', href: '/shockwave' },
              { label: '피부진료', href: '/skin' },
              { label: '입원안내', href: '/hospitalization' },
              { label: '의료진', href: '/doctors' },
              { label: '오시는길', href: '/directions' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center justify-center py-3.5 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition-all text-sm font-bold text-text-main"
              >
                <span className="group-hover:text-white transition-colors">{item.label}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          한 줄 카피
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeIn>
            <h2 className="text-center text-[24px] md:text-[40px] lg:text-[48px] font-black text-text-main leading-[1.3] tracking-tight max-w-[700px] mx-auto">
              같은 통증이라도 원인은 다릅니다.<br />
              <span className="text-primary">5인의 전문의</span>가 함께 찾습니다.
            </h2>
          </FadeIn>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          입원 — 큰 비주얼 + 텍스트
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative">
        <div className="relative aspect-[16/7] md:aspect-[21/8]">
          <Image
            src="/images/traffic/traffic-adv-07.png"
            alt="상무365 입원실"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <Container>
            <FadeIn>
              <div className="max-w-[480px]">
                <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-3">Hospitalization</p>
                <h2 className="text-white text-[28px] md:text-[44px] font-black leading-tight tracking-tight mb-4">
                  입원하시면,<br />퇴원까지 책임집니다
                </h2>
                <p className="text-white/50 text-sm md:text-base leading-relaxed mb-6">
                  간호등급 2등급 · 24시간 전담 간호사 · 보호자 없어도 안심
                </p>
                <Link href="/hospitalization" className="inline-flex items-center gap-1.5 text-white text-sm font-bold border border-white/30 px-5 py-2.5 rounded-full hover:bg-white/10 transition">
                  자세히 보기 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </Container>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          숫자
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-b border-border-light">
        <Container>
          <div className="grid grid-cols-4 divide-x divide-border-light">
            {[
              { num: '5', suffix: '인', label: '전문의' },
              { num: '365', suffix: '일', label: '연중무휴' },
              { num: '2', suffix: '등급', label: '간호등급' },
              { num: '20', suffix: '시', label: '야간진료' },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 60}>
                <div className="py-8 md:py-12 text-center">
                  <p className="text-[32px] md:text-[48px] font-black text-text-main leading-none tracking-tight">
                    {s.num}<span className="text-[16px] md:text-[20px] text-text-muted font-bold">{s.suffix}</span>
                  </p>
                  <p className="text-xs md:text-sm text-text-muted mt-1">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          의료진 — 사진 중심
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-2">Doctors</p>
                <h2 className="text-[24px] md:text-[36px] font-black text-text-main tracking-tight">의료진</h2>
              </div>
              <Link href="/doctors" className="hidden md:inline-flex items-center gap-1 text-text-muted text-sm hover:text-primary transition">
                전체 보기 <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-5 gap-3 md:gap-4">
            {[
              { name: '박준규', position: '대표원장', src: '/images/profile/박준규.jpg' },
              { name: '박정열', position: '1과 원장', src: '/images/profile/박정열.jpg' },
              { name: '백상철', position: '2과 원장', src: '/images/profile/백상철.jpg' },
              { name: '안규상', position: '3과 원장', src: '/images/profile/안규상.jpg' },
              { name: '이동욱', position: '가정의학과', src: '/images/profile/이동욱.jpg' },
            ].map((doc, i) => (
              <FadeIn key={doc.name} delay={i * 50}>
                <div className="group">
                  <div className="aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden bg-[#EDE5DB] relative mb-3">
                    <img src={doc.src} alt={`${doc.name} ${doc.position}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-[11px] md:text-xs text-text-muted">{doc.position}</p>
                  <p className="text-sm md:text-lg font-black text-text-main">{doc.name}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          시설 — 벤토 그리드
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pb-16 md:pb-24">
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-4 gap-2 md:gap-3 max-w-[1400px] mx-auto">
            {[
              { src: '/images/facility-01.png', span: 'col-span-2 row-span-2', aspect: 'aspect-square' },
              { src: '/images/facility-02.png', span: '', aspect: 'aspect-square' },
              { src: '/images/facility-03.png', span: '', aspect: 'aspect-square' },
              { src: '/images/facility-room.jpg', span: '', aspect: 'aspect-square' },
              { src: '/images/facility-04.png', span: '', aspect: 'aspect-square' },
            ].map((img, i) => (
              <FadeIn key={img.src} delay={i * 50} className={img.span}>
                <div className={`${img.aspect} rounded-lg md:rounded-xl overflow-hidden bg-gray-100 relative`}>
                  <Image src={img.src} alt={`시설 ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          진료시간 + 오시는 길
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <FadeIn>
              <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-2">Hours</p>
              <h2 className="text-[24px] md:text-[32px] font-black text-text-main tracking-tight mb-6">진료시간</h2>
              {[
                { day: '평일', time: '09:00 — 20:00', badge: '야간진료', accent: true },
                { day: '토·일', time: '09:00 — 15:00', badge: '365일', accent: false },
                { day: '공휴일', time: '09:00 — 15:00', badge: '365일', accent: false },
              ].map((row, i) => (
                <div key={row.day} className={`flex items-center justify-between py-4 ${i < 2 ? 'border-b border-border-light' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-base font-black text-text-main">{row.day}</span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${row.accent ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>{row.badge}</span>
                  </div>
                  <span className="text-base font-bold text-text-main tabular-nums">{row.time}</span>
                </div>
              ))}
              <div className="mt-6 bg-text-main rounded-xl p-5 text-center text-white">
                <p className="text-lg md:text-xl font-black">24시간 야간 입원 가능</p>
              </div>
            </FadeIn>

            <FadeIn delay={80}>
              <p className="text-primary text-[13px] tracking-[0.3em] uppercase font-bold mb-2">Location</p>
              <h2 className="text-[24px] md:text-[32px] font-black text-text-main tracking-tight mb-6">오시는 길</h2>
              <div className="rounded-xl overflow-hidden border border-border-light mb-4">
                <NaverStaticMap />
              </div>
              <p className="text-base font-bold text-text-main">상무365한방병원</p>
              <p className="text-sm text-text-body mt-1">광주 서구 상무중앙로 96, H.K 복합빌딩 9~11층</p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 text-center">
        <Container>
          <FadeIn>
            <h2 className="text-[28px] md:text-[44px] font-black text-text-main leading-[1.15] tracking-tight mb-3">
              건강한 일상으로
            </h2>
            <p className="text-text-muted text-sm md:text-base mb-10">상무365한방병원이 함께합니다.</p>
            <div className="flex gap-3 justify-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-text-main text-white rounded-full font-bold text-base hover:bg-text-main/90 transition"
              >
                <Phone className="w-4 h-4" />
                {HOSPITAL.phone}
              </a>
              <a
                href={HOSPITAL.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border-main text-text-main rounded-full font-bold text-base hover:bg-gray-50 transition"
              >
                <MessageCircle className="w-4 h-4" />
                카카오톡
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

    </div>
  )
}
