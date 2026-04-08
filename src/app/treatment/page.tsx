import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, CheckCircle, Stethoscope, Users, Zap, Pill, Hand, Activity, Waves, MessageCircle, GraduationCap, Briefcase, Award, ArrowRight } from 'lucide-react'
import TrafficHero from '@/components/traffic/TrafficHero'
import NaverStaticMap from '@/components/traffic/NaverStaticMap'
import Container from '@/components/ui/Container'
import HospitalImage from '@/components/ui/HospitalImage'
import FadeIn from '@/components/ui/FadeIn'
import { HOSPITAL } from '@/lib/constants'

/* ── 치료 프로그램 데이터 ── */

const corePrograms = [
  {
    icon: Zap,
    name: '침·약침·레이저침',
    desc: '통증 완화 + 기혈 순환 촉진',
    detail: '정밀 진단 후 최적의 경혈에 시술합니다. 레이저침으로 무통 치료도 가능합니다.',
  },
  {
    icon: Hand,
    name: '추나요법',
    desc: '척추·관절 수기 교정',
    detail: '틀어진 척추와 관절을 손으로 직접 교정하여 근본 원인을 치료합니다.',
  },
  {
    icon: Pill,
    name: '한약치료',
    desc: '체질별 맞춤 처방',
    detail: '근육·인대·신경 회복을 돕는 1:1 맞춤 한약을 처방합니다.',
  },
  {
    icon: Activity,
    name: '도수치료',
    desc: '1:1 근골격 교정',
    detail: '전문 치료사가 직접 근골격을 교정하고 근육을 이완합니다.',
  },
  {
    icon: Waves,
    name: '체외충격파',
    desc: '비수술 조직 재생',
    detail: '수술 없이 충격파로 조직 재생과 혈류 개선을 촉진합니다.',
  },
  {
    icon: Stethoscope,
    name: '물리치료',
    desc: '매일 꾸준한 회복',
    detail: '전기자극·온열·견인치료로 매일 체계적으로 회복합니다.',
  },
]

const stats = [
  { num: '5', unit: '인', label: '한·양방 전문의' },
  { num: '365', unit: '일', label: '연중무휴 진료' },
  { num: '2', unit: '등급', label: '간호 인력 등급' },
  { num: '20', unit: '시', label: '평일 야간 진료' },
]

const strengths = [
  {
    title: '한양방 협진 시스템',
    desc: '한의사 4인과 양방 전문의 1인이 함께 진단합니다. 한쪽에서 놓칠 수 있는 부분을 다른 쪽에서 잡아냅니다.',
    highlight: '한방 + 양방, 동시에',
  },
  {
    title: '환자 중심 맞춤 치료',
    desc: '같은 증상이라도 원인은 다릅니다. 정밀 검사 후 환자 한 분 한 분에 맞는 복합 치료 계획을 세웁니다.',
    highlight: '나만을 위한 치료 설계',
  },
  {
    title: '입원부터 퇴원까지 전담 케어',
    desc: '간호등급 2등급. 24시간 전담 간호사가 배정되어 보호자 없이도 안심하고 입원 치료를 받을 수 있습니다.',
    highlight: '혼자 오셔도 괜찮습니다',
  },
]

/* ── 의료진 데이터 ── */

const doctors = [
  {
    name: '박준규',
    position: '대표원장',
    src: '/images/profile/박준규.jpg',
    specialty: '한방부인과 · 교통사고 후유증',
    education: ['경희대학교 한의과대학 졸업', '경희대학교 한의과대학원 한방부인과 졸업'],
    career: ['전) 서울한방병원 진료원장', '전) 경희한방병원 진료원장', '전) 매곡한방병원 대표원장', '현) 상무365한방병원 대표원장'],
  },
  {
    name: '박정열',
    position: '원장 · 1과',
    src: '/images/profile/박정열.jpg',
    specialty: '처방제형학 박사 · 한방피부미용',
    education: ['경희대학교 한의과대학 졸업', '경희대학교 한의과대학원 졸업', '경희대학교 처방제형학 박사'],
    career: ['전) 미래솔한의원 광주점 진료원장', '전) 매곡한방병원 진료원장', '현) 상무365한방병원 진료원장'],
    activities: ['한방피부미용학회 정회원', '한방부인과학회 정회원', 'Harvard Univ. Protein Science 학회 논문발표'],
  },
  {
    name: '백상철',
    position: '원장 · 2과',
    src: '/images/profile/백상철.jpg',
    specialty: '한방안이비인후피부과 전문의',
    education: ['원광대학교 한의과대학 졸업', '원광대학교 한의과대학원 석사'],
    career: ['전) 무등한방병원 진료원장', '전) 민한방병원 진료원장', '현) 상무365한방병원 진료원장'],
  },
  {
    name: '안규상',
    position: '원장 · 3과',
    src: '/images/profile/안규상.jpg',
    specialty: '한방내과 · 한방피부과',
    education: ['동신대학교 한의학과 졸업'],
    career: ['전) 수완청연한방병원 부원장', '전) 더조은한방병원 부원장', '전) 천지인한방병원 부원장', '현) 상무365한방병원 진료원장'],
    activities: ['한방피부과학회', '대한스포츠한의학회'],
  },
  {
    name: '이동욱',
    position: '원장 · 가정의학과',
    src: '/images/profile/이동욱.jpg',
    specialty: '가정의학과 전문의',
    education: ['관동대학교 의과대학 졸업'],
    career: ['전) SD서울의원 대표원장', '전) 목포요양병원 진료원장', '현) 상무365한방병원 진료원장'],
  },
]

export const metadata: Metadata = {
  title: '한방치료 프로그램 | 상무365한방병원',
  description: '한양방 협진 통합치료. 침·추나·한약·도수·체외충격파. 365일 진료, 야간 20시. 062-385-9000',
}

export default function TreatmentPage() {
  return (
    <>
      {/* ── 1. 히어로 ── */}
      <TrafficHero />

      {/* ── 2. 숫자로 보는 상무365 — 풀와이드 대형 스탯 ── */}
      <section className="bg-primary">
        <Container>
          <div className="py-14 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center text-white">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 80}>
                <div>
                  <p className="text-[56px] md:text-[80px] font-black leading-none tracking-tight">
                    {s.num}<span className="text-[28px] md:text-[36px] font-bold opacity-80">{s.unit}</span>
                  </p>
                  <p className="text-base md:text-lg font-medium opacity-80 mt-2">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. 헤드 카피 — 큼직한 한 줄 ── */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <FadeIn>
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="text-[32px] md:text-[52px] font-black leading-[1.2] text-text-main tracking-tight">
                한방과 양방이 함께<br />
                <span className="text-primary">당신만을 위한 치료</span>를 설계합니다
              </h2>
              <p className="text-lg md:text-2xl text-text-body mt-6 md:mt-8 leading-relaxed max-w-[640px] mx-auto">
                같은 통증이라도 원인은 다릅니다.<br />
                5인의 전문의가 함께 진단하고, 최적의 복합 치료를 시작합니다.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── 4. 핵심 치료 프로그램 — 대형 카드 그리드 ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-3 block">TREATMENT PROGRAM</span>
              <h2 className="text-[28px] md:text-[44px] font-black text-text-main leading-tight">
                6가지 핵심 치료 프로그램
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePrograms.map((p, i) => (
              <FadeIn key={p.name} delay={i * 80} className="h-full">
                <div className="bg-white rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all duration-300 h-full border border-border-light group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <p.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl md:text-[28px] font-black text-text-main mb-2">{p.name}</h3>
                  <p className="text-primary font-bold text-base mb-4">{p.desc}</p>
                  <p className="text-text-body text-base leading-[1.8]">{p.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. INDIBA 프리미엄 — 풀와이드 임팩트 섹션 ── */}
      <section className="py-20 md:py-32 bg-text-main text-white overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <FadeIn className="flex-1">
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-4 block">PREMIUM RECOVERY</span>
              <h2 className="text-[32px] md:text-[48px] font-black leading-[1.15] mb-6">
                일반 물리치료로는<br />
                닿지 못하는<br />
                <span className="text-primary">깊은 곳까지</span>
              </h2>
              <p className="text-white/70 text-lg md:text-xl leading-[1.8] mb-8 max-w-[480px]">
                INDIBA 심부재생 치료는 448kHz 고주파로 피부 손상 없이 심부 조직까지 도달합니다.
                세포 재생과 혈류 개선을 동시에 촉진하여 일반 치료 대비 2배 빠른 회복을 돕습니다.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {['수술·절개 없음', '급성기 즉시 적용', '부종·염증 해소'].map((tag) => (
                  <span key={tag} className="px-5 py-2.5 rounded-full border border-white/20 text-sm font-medium text-white/90">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-x-10 gap-y-3 flex-wrap">
                {[
                  { value: '80+', label: '도입 국가' },
                  { value: '400+', label: '임상 논문' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-[36px] md:text-[44px] font-black text-primary leading-none">{s.value}</p>
                    <p className="text-white/50 text-sm mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={150} className="w-full md:w-[45%] shrink-0">
              <div className="flex flex-col gap-4">
                <div className="rounded-3xl overflow-hidden">
                  <Image
                    src="/images/program/indiba-treatment.jpg"
                    alt="INDIBA 심부재생 치료 시술 장면"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-black/50">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://static.wixstatic.com/media/387e19_beabc265f25047cfb62d1d2cdcb660aff000.jpg/v1/fill/w_640,h_1080,al_c,q_85,enc_avif,quality_auto/387e19_beabc265f25047cfb62d1d2cdcb660aff000.jpg"
                  >
                    <source
                      src="https://video.wixstatic.com/video/387e19_beabc265f25047cfb62d1d2cdcb660af/720p/mp4/file.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── 6. 왜 상무365인가 — 큰 텍스트 중심 ── */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-3 block">WHY US</span>
              <h2 className="text-[28px] md:text-[44px] font-black text-text-main leading-tight">
                상무365를 선택하는 이유
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-0">
            {strengths.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-12 py-12 md:py-16 ${i < strengths.length - 1 ? 'border-b border-border-light' : ''}`}>
                  <div className="md:w-[100px] shrink-0">
                    <span className="text-[64px] md:text-[80px] font-black text-primary/20 leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[24px] md:text-[36px] font-black text-text-main mb-3 leading-snug">{item.title}</h3>
                    <p className="text-lg md:text-xl text-text-body leading-[1.8] mb-4 max-w-[600px]">{item.desc}</p>
                    <p className="text-primary text-lg md:text-xl font-bold">&ldquo;{item.highlight}&rdquo;</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. 입원 안내 이미지 ── */}
      <div style={{ background: '#ffffff' }}>
        <HospitalImage
          src="/images/traffic/traffic-adv-0.png"
          alt="상무365 입원이 특별한 이유"
          className="w-full h-auto max-w-[1100px] mx-auto block"
        />
      </div>

      {/* ── 8. 간호등급 2등급 — 대형 넘버 ── */}
      <section className="py-20 md:py-32 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-4 block">NURSING GRADE</span>
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="text-[100px] md:text-[140px] font-black text-primary leading-none">2</span>
                <div className="text-left">
                  <p className="text-3xl md:text-4xl font-black text-text-main">등급</p>
                  <p className="text-lg text-text-body">간호 인력 등급</p>
                </div>
              </div>
              <h2 className="text-[28px] md:text-[44px] font-black text-text-main leading-[1.25] mb-4">
                입원하시는 순간부터<br />퇴원하시는 순간까지
              </h2>
              <p className="text-lg md:text-xl text-text-body max-w-[560px] mx-auto leading-relaxed">
                충분한 간호 인력이 확보되어야만 가능한 등급입니다.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {[
              { num: '24시간', title: '야간에도 즉시 대응', desc: '밤에 통증이 심해져도, 바로 간호사가 달려옵니다.' },
              { num: '전담', title: '담당 간호사 배정', desc: '환자 한 분 한 분의 상태를 파악한 전담 간호사가 매일 케어합니다.' },
              { num: '안심', title: '보호자 없어도 안심', desc: '충분한 간호 인력이 보호자 역할까지 해드립니다.' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="text-center p-8 md:p-10 rounded-3xl bg-white border border-border-light hover:shadow-xl transition-all duration-300 h-full">
                  <p className="text-primary text-[36px] md:text-[44px] font-black mb-3">{item.num}</p>
                  <p className="text-xl md:text-2xl font-bold text-text-main mb-3">{item.title}</p>
                  <p className="text-base text-text-body leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 중간 CTA ── */}
      <section className="py-14 md:py-20 bg-primary">
        <Container>
          <div className="text-center text-white">
            <h3 className="text-[28px] md:text-[40px] font-black mb-3">지금 바로 상담하세요</h3>
            <p className="text-white/70 text-lg mb-8">365일 진료, 평일 야간 20시까지</p>
            <div className="flex flex-col min-[400px]:flex-row gap-4 justify-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-primary rounded-2xl font-bold text-xl hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {HOSPITAL.phone}
              </a>
              <a
                href={HOSPITAL.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-white/40 text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                카카오톡 상담
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 9. 의료진 — 큼직한 카드 ── */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-3 block">DOCTORS</span>
              <h2 className="text-[28px] md:text-[44px] font-black text-text-main leading-tight">
                한·양방 전문 의료진
              </h2>
              <p className="text-text-body text-lg md:text-xl mt-4">정확한 진단과 빠른 회복을 위한 협진 시스템</p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {doctors.map((doc, i) => {
              const isReversed = i % 2 !== 0
              return (
                <div key={doc.name} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E8E0D6]">
                  <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <div className="md:w-[45%] shrink-0 bg-[#EDE5DB] relative overflow-hidden">
                      <div className={`absolute top-4 ${isReversed ? 'right-4' : 'left-4'} z-10 select-none pointer-events-none`}>
                        <Image src="/images/sangmu_logo.png" alt="" width={224} height={224} className="object-contain opacity-[0.15]" />
                      </div>
                      <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-primary" />
                      <div className="relative h-full min-h-[360px] md:min-h-[440px] flex flex-col justify-end p-8 md:p-10">
                        <div className={`relative z-10 mb-4 ${isReversed ? 'text-right' : 'text-left'}`}>
                          <p className="text-text-muted text-sm font-medium mb-1">{doc.position}</p>
                          <h3 className="text-[36px] md:text-[44px] font-black text-text-main leading-tight tracking-tight">
                            {doc.name} <span className="text-[28px] md:text-[32px] font-bold">원장</span>
                          </h3>
                        </div>
                        <div className={`absolute ${isReversed ? 'left-0' : 'right-0'} bottom-0 w-[55%] h-full`}>
                          <HospitalImage src={doc.src} alt={`${doc.name} ${doc.position}`} className="w-full h-full object-bottom" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                      <div className="mb-6">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary-light text-primary">
                          {doc.specialty}
                        </span>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-4 h-4 text-primary" strokeWidth={2} />
                          <p className="text-sm font-bold text-text-main uppercase tracking-wider">학력</p>
                        </div>
                        <ul className="space-y-1 ml-6">
                          {doc.education.map((item) => (
                            <li key={item} className="text-[15px] text-text-body leading-relaxed flex items-start gap-2">
                              <span className="text-primary/50 mt-[7px] shrink-0">·</span>{item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-4 h-4 text-primary" strokeWidth={2} />
                          <p className="text-sm font-bold text-text-main uppercase tracking-wider">경력</p>
                        </div>
                        <ul className="space-y-1 ml-6">
                          {doc.career.map((item) => (
                            <li key={item} className={`text-[15px] leading-relaxed flex items-start gap-2 ${item.startsWith('현)') ? 'text-primary font-bold' : 'text-text-body'}`}>
                              <span className={`mt-[7px] shrink-0 ${item.startsWith('현)') ? 'text-primary' : 'text-primary/50'}`}>·</span>{item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {'activities' in doc && doc.activities && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="w-4 h-4 text-primary" strokeWidth={2} />
                            <p className="text-sm font-bold text-text-main uppercase tracking-wider">활동</p>
                          </div>
                          <ul className="space-y-1 ml-6">
                            {(doc.activities as string[]).map((item) => (
                              <li key={item} className="text-[15px] text-text-body leading-relaxed flex items-start gap-2">
                                <span className="text-primary/50 mt-[7px] shrink-0">·</span>{item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── 10. 진료시간 + 오시는 길 ── */}
      <section className="bg-gray-50" aria-label="진료시간 안내">
        <Container>
          <div className="text-text-main py-14 md:py-20 flex flex-col md:flex-row items-stretch gap-8 md:gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-2xl md:text-[26px] font-black tracking-widest border-2 border-text-main px-5 py-2 rounded-lg">진료시간</div>
              </div>

              <div className="space-y-0">
                {[
                  { day: '평\u00A0\u00A0\u00A0일', time: '오전 9시 ~ 오후 8시', sub: '(점심시간 : 오후 12시 30분 ~ 2시)', badge: '매일야간진료', badgeStyle: 'bg-primary text-white' },
                  { day: '토·일요일', time: '오전 9시 ~ 오후 3시', sub: '(점심시간 없이 진료)', badge: '365일 진료', badgeStyle: 'bg-primary-light text-primary' },
                  { day: '공\u00A0휴\u00A0일', time: '오전 9시 ~ 오후 3시', sub: '(점심시간 없이 진료)', badge: '365일 진료', badgeStyle: 'bg-primary-light text-primary' },
                ].map((row, i) => (
                  <div key={row.day} className={`flex items-center gap-4 py-4 ${i < 2 ? 'border-b border-border-light' : ''}`}>
                    <div className="min-w-[90px] md:min-w-[100px] text-center">
                      <p className="text-lg font-bold tracking-[3px]">{row.day}</p>
                      <span className={`inline-block text-xs font-bold px-3 py-0.5 rounded-sm mt-1 ${row.badgeStyle}`}>{row.badge}</span>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{row.time}</p>
                      <p className="text-sm text-text-muted mt-0.5">{row.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-[420px] shrink-0 flex flex-col">
              <div className="bg-white border border-border-light rounded-t-3xl text-center py-10 px-6 flex-1 flex flex-col items-center justify-center">
                <p className="text-2xl md:text-[28px] font-black tracking-wider">
                  <span className="text-primary">365일</span> 평일, 주말, 공휴일
                </p>
                <div className="inline-block bg-primary text-white text-xl md:text-[28px] font-black px-6 py-3 mt-4 tracking-wider rounded-xl">
                  매일 24시간 야간입원가능
                </div>
              </div>
              <div className="bg-primary-light rounded-b-3xl text-center py-6 px-5">
                <p className="text-lg md:text-xl font-black text-text-main tracking-wide mb-2">
                  365일진료 · 평일야간진료
                </p>
                <p className="text-sm text-text-body leading-[1.8]">
                  평일 오후 8시까지 <span className="text-primary font-bold">야간진료</span><br />
                  주말·공휴일 포함 <span className="text-primary font-bold">365일 진료</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-3 block">LOCATION</span>
              <h2 className="text-[28px] md:text-[36px] font-black text-text-main">오시는 길</h2>
            </div>
          </FadeIn>
          <NaverStaticMap />
          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xl font-bold text-text-main">상무365한방병원</p>
              <p className="text-base text-text-body mt-1">광주 서구 상무중앙로 96, H.K 복합빌딩 9~11층</p>
            </div>
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-primary/90 transition"
            >
              <Phone className="w-5 h-5" />
              {HOSPITAL.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* ── 최종 CTA ── */}
      <section className="bg-white py-20 md:py-32 text-center">
        <Container>
          <FadeIn>
            <h3 className="text-[36px] md:text-[52px] font-black text-text-main leading-[1.15] mb-6 tracking-tight">
              통증, 더 이상<br />참지 마세요
            </h3>
            <p className="text-text-body text-lg md:text-2xl leading-[1.8] max-w-[500px] mx-auto mb-10">
              한양방 전문의 5인이 함께 진단하고<br />
              당신만을 위한 치료를 시작합니다.
            </p>
            <div className="flex flex-col min-[400px]:flex-row gap-4 justify-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-primary text-white rounded-2xl font-bold text-2xl hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-6 h-6" />
                {HOSPITAL.phone}
              </a>
              <a
                href={HOSPITAL.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 border-2 border-primary/40 text-primary rounded-2xl font-bold text-2xl hover:bg-primary-light transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                카카오톡 상담
              </a>
            </div>
            <p className="text-text-muted text-base mt-6">{HOSPITAL.addressShort} · 주차 가능</p>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}
