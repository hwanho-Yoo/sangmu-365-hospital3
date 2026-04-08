import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, CheckCircle, Shield, ShieldCheck, Clock, Stethoscope, Users, Car, AlertTriangle, ChevronRight, ChevronDown, Zap, Pill, Hand, Activity, Waves, Bone, Brain, Moon, MessageCircle, GraduationCap, Briefcase, Award, type LucideIcon } from 'lucide-react'
import TrafficHero from '@/components/traffic/TrafficHero'
import NaverStaticMap from '@/components/traffic/NaverStaticMap'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import HospitalImage from '@/components/ui/HospitalImage'
import FadeIn from '@/components/ui/FadeIn'
import { HOSPITAL } from '@/lib/constants'

/* ───── 데이터 ───── */

const urgentReasons = [
  {
    icon: Clock,
    title: '사고 후 72시간이 중요합니다',
    desc: '골든타임 내 치료 시작이 후유증을 최소화합니다.',
  },
  {
    icon: Shield,
    title: '본인부담금 0원',
    desc: '자동차보험 적용, 치료비 걱정 없이 치료받으세요.',
  },
  {
    icon: Users,
    title: '한의사 + 정형외과 전문의 협진',
    desc: '한방·양방 전문의가 함께 진단하고 치료합니다.',
  },
  {
    icon: Stethoscope,
    title: '365일 진료, 야간 20시까지',
    desc: '주말·공휴일 포함, 사고 직후 바로 내원 가능합니다.',
  },
]

const symptoms: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Bone, title: '목·어깨 통증', desc: '목이 뻣뻣하고 어깨가 무거운 증상' },
  { icon: Activity, title: '허리·골반 통증', desc: '오래 앉기 힘들고 골반이 틀어지는 증상' },
  { icon: Brain, title: '두통·어지러움', desc: '만성 두통, 어지러움, 이명 증상' },
  { icon: Hand, title: '손발 저림', desc: '팔다리 저림, 감각 둔화 증상' },
  { icon: Zap, title: '근육통·관절통', desc: '전신 근육 긴장, 관절 움직임 제한' },
  { icon: Moon, title: '수면장애·피로', desc: '불면, 만성 피로, 집중력 저하' },
]

const insuranceInfo = [
  { icon: ShieldCheck, title: '입원비·치료비 0원', desc: '자동차보험 적용, 본인부담금 없음' },
  { icon: Pill, title: '한방치료 전액 보험', desc: '침·추나·한약·약침 모두 보험 적용' },
  { icon: CheckCircle, title: '보험사 동의 불필요', desc: '동의 없이 우선 치료 가능' },
  { icon: Users, title: '동승자·보행자 가능', desc: '동승자·보행자 사고도 보험 적용' },
]

const steps = [
  {
    num: '01',
    title: '내원 및 접수',
    desc: '사고접수번호만 있으면 OK, 서류 없어도 우선 치료 가능',
  },
  {
    num: '02',
    title: '정밀 검사·진단',
    desc: 'X-RAY·초음파로 손상 부위 정확 진단',
  },
  {
    num: '03',
    title: '맞춤 치료 계획',
    desc: '한양방 복합 치료 계획 수립, 입원·외래 결정',
  },
  {
    num: '04',
    title: '통합 치료 시작',
    desc: '침·추나·약침·한약·도수치료 병행, 빠른 회복',
  },
]

const treatmentProgram = [
  {
    icon: Zap,
    name: '침·약침·레이저침',
    desc: '통증 완화 + 기혈 순환 촉진, 레이저침으로 무통 치료 가능',
  },
  {
    icon: Hand,
    name: '추나요법',
    desc: '틀어진 척추·관절을 손으로 직접 교정, 재발 방지',
  },
  {
    icon: Pill,
    name: '한약치료',
    desc: '근육·인대·신경 회복을 돕는 맞춤 처방',
  },
  {
    icon: Activity,
    name: '도수치료',
    desc: '1:1 맞춤 근골격 교정 + 근육 이완 시술',
  },
  {
    icon: Waves,
    name: '체외충격파',
    desc: '수술 없이 조직 재생·혈류 개선 촉진',
  },
  {
    icon: Stethoscope,
    name: '물리치료',
    desc: '전기자극·온열·견인치료로 매일 꾸준한 회복',
  },
]

const selfDamageItems = [
  {
    icon: Car,
    title: '자차 단독사고',
    desc: '가드레일·전봇대 충돌 등 단독사고도 자동차보험 치료 가능',
  },
  {
    icon: Shield,
    title: '자손·자상 보험',
    desc: '자기신체사고·자기신체상해 모두 한방병원 치료 가능',
  },
  {
    icon: AlertTriangle,
    title: '뺑소니·무보험차 사고',
    desc: '정부보장사업으로 치료비 지원, 먼저 내원하세요',
  },
  {
    icon: Users,
    title: '동승자 사고',
    desc: '택시·버스·지인 차량 동승 사고도 보험 적용',
  },
]

const storyPoints = [
  {
    title: '늦은 밤 사고도 걱정 마세요',
    desc: '24시간 응급 입원 가능, 평일 야간 20시까지 진료. 어두운 밤에도 상무365의 문은 열려 있습니다.',
    highlight: '매일, 당신의 건강을 위합니다',
    image: '/images/traffic/traffic-adv-02.png',
    imageAlt: '야간 사고 즉시 대응 — 밤 8시까지 진료 및 응급 입원',
  },
  {
    title: '복잡한 서류? 우리가 맡겠습니다',
    desc: '사고접수번호만 있으면 됩니다. 보험사 동의 없이 먼저 입원, 환자분은 치료에만 집중하세요.',
    highlight: '먼저 입원, 서류는 나중에',
    image: '/images/traffic/traffic-adv-03.png',
    imageAlt: '보험사 동의 없이 우선 입원 — 간편한 입원 절차',
  },
  {
    title: '걱정할 금액은 0원입니다',
    desc: '입원비·치료비·식대 전액 자동차보험 처리. 본인부담금 없이 회복에만 집중하세요.',
    highlight: '입원비·치료비·식대, 전액 보험 처리',
    image: '/images/traffic/traffic-adv-04.png',
    imageAlt: '자동차보험 입원비 0원 — 본인부담금 없는 치료',
  },
  {
    title: '퇴원하는 순간까지 함께합니다',
    desc: '매일 담당 의료진 회진, 맞춤 치료 제공. 간호등급 2등급, 24시간 케어합니다.',
    highlight: '사고 전보다 더 건강한 일상으로',
    image: '/images/traffic/traffic-adv-06.png',
    imageAlt: '퇴원까지 전담 케어 — 매일 의료진 회진과 맞춤 치료',
  },
]

const storyStyle = {
  bg: 'bg-white',
  title: 'text-text-main',
  desc: 'text-text-body',
  highlight: 'text-primary',
}

/* ── 의료진 데이터 ── */

const doctors = [
  {
    name: '박준규',
    position: '대표원장',
    src: '/images/profile/박준규.jpg',
    specialty: '한방부인과 · 교통사고 후유증',
    education: [
      '경희대학교 한의과대학 졸업',
      '경희대학교 한의과대학원 한방부인과 졸업',
    ],
    career: [
      '전) 서울한방병원 진료원장',
      '전) 경희한방병원 진료원장',
      '전) 매곡한방병원 대표원장',
      '현) 상무365한방병원 대표원장',
    ],
  },
  {
    name: '박정열',
    position: '원장 · 1과',
    src: '/images/profile/박정열.jpg',
    specialty: '처방제형학 박사 · 한방피부미용',
    education: [
      '경희대학교 한의과대학 졸업',
      '경희대학교 한의과대학원 졸업',
      '경희대학교 처방제형학 박사',
    ],
    career: [
      '전) 미래솔한의원 광주점 진료원장',
      '전) 매곡한방병원 진료원장',
      '현) 상무365한방병원 진료원장',
    ],
    activities: [
      '한방피부미용학회 정회원',
      '한방부인과학회 정회원',
      'Harvard Univ. Protein Science 학회 논문발표',
    ],
  },
  {
    name: '백상철',
    position: '원장 · 2과',
    src: '/images/profile/백상철.jpg',
    specialty: '한방안이비인후피부과 전문의',
    education: [
      '원광대학교 한의과대학 졸업',
      '원광대학교 한의과대학원 석사',
    ],
    career: [
      '전) 무등한방병원 진료원장',
      '전) 민한방병원 진료원장',
      '현) 상무365한방병원 진료원장',
    ],
  },
  {
    name: '안규상',
    position: '원장 · 3과',
    src: '/images/profile/안규상.jpg',
    specialty: '한방내과 · 한방피부과',
    education: [
      '동신대학교 한의학과 졸업',
    ],
    career: [
      '전) 수완청연한방병원 부원장',
      '전) 더조은한방병원 부원장',
      '전) 천지인한방병원 부원장',
      '현) 상무365한방병원 진료원장',
    ],
    activities: [
      '한방피부과학회',
      '대한스포츠한의학회',
    ],
  },
  {
    name: '이동욱',
    position: '원장 · 가정의학과',
    src: '/images/profile/이동욱.jpg',
    specialty: '가정의학과 전문의',
    education: [
      '관동대학교 의과대학 졸업',
    ],
    career: [
      '전) SD서울의원 대표원장',
      '전) 목포요양병원 진료원장',
      '현) 상무365한방병원 진료원장',
    ],
  },
]

/* ── 중간 CTA 컴포넌트 ── */

function MidCTA({ message }: { message: string }) {
  return (
    <section className="py-10 md:py-14 bg-primary/5">
      <Container>
        <div className="text-center">
          <p className="text-xl md:text-2xl font-bold text-text-main mb-6">{message}</p>
          <div className="flex flex-col min-[400px]:flex-row gap-3 justify-center">
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {HOSPITAL.phone}
            </a>
            <a
              href={HOSPITAL.kakao}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/40 text-primary rounded-xl font-bold text-lg hover:bg-primary-light transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              카카오톡 상담
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}


export const metadata: Metadata = {
  title: '교통사고 후유증 치료 | 상무365한방병원',
  description: '교통사고 후유증 치료 전문. 자동차보험 본인부담금 0원. 한양방 전문의 협진. 365일 진료, 야간 20시. 062-385-9000',
}

export default function TrafficAccidentPage() {
  return (
    <>
      {/* ── 1. 히어로 ── */}
      <TrafficHero />

      {/* ── 2. 3대 강점 요약 스트립 (INDIBA + 간호2등급 + 한양방협진) ── */}
      <section className="py-10 md:py-14 bg-gray-50 border-b border-border-light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: 'INDIBA',
                title: '심부재생 치료',
                desc: '448kHz 고주파로 일반 물리치료가 닿지 못하는 깊은 조직까지 치료',
                accent: 'PREMIUM',
              },
              {
                label: '간호등급',
                title: '2등급 케어',
                desc: '24시간 전담 간호사 배정, 보호자 없어도 안심할 수 있는 입원 환경',
                accent: '24H CARE',
              },
              {
                label: '한양방 협진',
                title: '전문의 5인 진료',
                desc: '한의사 4인 + 양방 전문의 1인이 함께 진단하고 치료합니다',
                accent: 'TEAM CARE',
              },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 md:p-7 border border-border-light hover:shadow-lg transition-all duration-300 h-full">
                  <span className="text-primary text-xs tracking-[0.15em] uppercase font-bold">{item.accent}</span>
                  <div className="flex items-baseline gap-2 mt-2 mb-2">
                    <span className="text-text-muted text-sm font-medium">{item.label}</span>
                    <h3 className="text-xl md:text-2xl font-black text-text-main">{item.title}</h3>
                  </div>
                  <p className="text-base text-text-body leading-[1.7]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. 증상 체크 ── */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-text-muted text-base tracking-[0.15em] uppercase font-medium mb-2 block">SYMPTOMS</span>
              <h2 className="text-[28px] md:text-[36px] font-bold leading-tight break-keep text-text-main">교통사고 후유증, 이런 증상이 있나요?</h2>
              <p className="text-text-body text-lg mt-3">하나라도 해당되면 빠른 검사가 필요합니다</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-4">
            {symptoms.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80} className="h-full">
                <div className="bg-white border border-border-light border-l-2 border-l-primary rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full flex items-start gap-3">
                  <s.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <p className="text-lg font-bold text-text-main">{s.title}</p>
                    <p className="text-base text-text-body mt-1 leading-[1.6]">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. 왜 빨리 치료? ── */}
      <section className="py-14 md:py-20 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-text-muted text-base tracking-[0.15em] uppercase font-medium mb-2 block">WHY EARLY TREATMENT</span>
              <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-text-main">왜 빨리 치료해야 할까요?</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {urgentReasons.map((r, i) => (
              <FadeIn key={r.title} delay={i * 100} className="h-full">
                <div className="bg-white border border-border-light rounded-xl p-7 flex items-start gap-4 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <r.icon className="w-7 h-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-text-main">{r.title}</p>
                    <p className="text-lg text-text-body mt-1 leading-[1.7]">{r.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. 자동차보험 안내 ── */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <FadeIn>
            <SectionHeader title="교통사고 자동차보험 안내" subtitle="AUTO INSURANCE" />
            <p className="text-center text-lg text-text-body -mt-6 mb-10">
              입원비·치료비 전액 자동차보험으로 처리됩니다
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] mx-auto">
            {insuranceInfo.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100} className="h-full">
                <div className="bg-white rounded-xl p-7 border border-border-light hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full min-h-[140px]">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-6 h-6 text-primary/70" aria-hidden="true" />
                    <p className="text-xl font-bold text-text-main">{item.title}</p>
                  </div>
                  <p className="text-lg text-text-body leading-[1.7]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. 진료 절차 ── */}
      <section className="py-14 md:py-20 bg-gray-50">
        <Container>
          <FadeIn>
            <SectionHeader title="자동차보험 진료 절차" subtitle="PROCESS" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 120} className="h-full">
                <div className="relative bg-white border border-border-light rounded-xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.num}
                  </div>
                  <p className="text-xl font-bold text-text-main mt-3">{step.title}</p>
                  <p className="text-base text-text-body mt-2 leading-[1.7]">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <>
                      <div className="hidden md:block absolute top-1/2 -right-3" aria-hidden="true"><ChevronRight className="w-5 h-5 text-border-main" /></div>
                      <div className="md:hidden flex justify-center mt-4" aria-hidden="true"><ChevronDown className="w-5 h-5 text-border-main" /></div>
                    </>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 중간 CTA 1 ── */}
      <MidCTA message="사고 직후, 지금 바로 전화하세요" />

      {/* ── 7. 치료 프로그램 ── */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <FadeIn>
            <SectionHeader title="교통사고 집중치료 프로그램" subtitle="TREATMENT" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {treatmentProgram.map((t, i) => (
              <FadeIn key={t.name} delay={i * 80} className="h-full">
                <div className="bg-white border border-border-light rounded-xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-4">
                    <t.icon className="w-7 h-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <p className="text-xl font-bold text-text-main">{t.name}</p>
                  <p className="text-base text-text-body mt-2 leading-[1.7]">{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 8. INDIBA 심부재생 치료 (통합 섹션) ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-primary text-base tracking-[0.15em] uppercase font-semibold mb-3 block">PREMIUM RECOVERY</span>
              <h2 className="text-[30px] md:text-[42px] font-black leading-[1.25] text-text-main mb-4">
                &ldquo;일반 물리치료로는<br />닿지 못하는 깊은 곳까지&rdquo;
              </h2>
              <p className="text-lg md:text-xl text-text-body max-w-[600px] mx-auto leading-relaxed">
                사고 후 겉으로는 멀쩡해 보여도,<br className="md:hidden" />
                깊은 조직은 여전히 손상된 상태입니다.<br />
                <span className="text-primary font-bold">INDIBA 심부재생 치료</span>는 의료진 진단하에<br className="md:hidden" />
                손상 부위 깊숙이 온열에너지를 투여하여<br />
                일반 치료로는 도달할 수 없는 곳의 조직재생을 촉진합니다.
              </p>
            </div>
          </FadeIn>

          {/* INDIBA 치료 설명 + 장비 통합 */}
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
              {/* 좌측: 시술 사진 + 장비 동영상 */}
              <div className="w-full md:w-[45%] shrink-0 flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/images/program/indiba-treatment.jpg"
                    alt="INDIBA 심부재생 치료 시술 장면"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-black">
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

              {/* 우측: 핵심 포인트 + 장비 스펙 */}
              <div className="flex-1">
                <h3 className="text-[26px] md:text-[32px] font-bold leading-snug mb-6 text-text-main">
                  왜 인디바여야 할까요?
                </h3>
                <ul className="space-y-5 mb-8">
                  {[
                    { title: '수술 없이, 절개 없이', desc: '448kHz 고주파가 피부 손상 없이 심부 조직까지 도달합니다' },
                    { title: '사고 직후부터 바로 적용', desc: '급성기에도 시술 가능 — 골든타임을 놓치지 않습니다' },
                    { title: '일반 치료 대비 2배 빠른 회복', desc: '세포 재생과 혈류 개선을 동시에 촉진합니다' },
                    { title: '부종·염증·통증, 한 번에', desc: '줄 효과(Joule Effect)로 부기와 염증까지 빠르게 해소' },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-text-main">{item.title}</p>
                        <p className="text-base text-text-body mt-1">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* 장비 스펙 요약 */}
                <div className="bg-white border border-border-light rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-bold text-text-main">INDIBA® NS 프리미엄</span>
                    <span className="text-xs text-text-muted">· 전 세계 도입 현황</span>
                  </div>
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    {[
                      { label: '도입 국가', value: '80+개국' },
                      { label: '임상 논문', value: '400+건' },
                      { label: '사용 분야', value: '재활·정형·통증' },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="text-xl font-bold text-text-main">{stat.value}</p>
                        <p className="text-sm text-text-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 이런 분께 추천 */}
          <FadeIn>
            <div className="pt-12 border-t border-border-light">
              <h3 className="text-center text-[26px] md:text-[32px] font-bold text-text-main mb-3">이런 분이라면, 인디바를 꼭 받아보세요</h3>
              <p className="text-center text-lg text-text-body mb-10">일반 물리치료만으로 한계를 느끼셨다면</p>
              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  '치료를 받아도 통증이 계속 남는 분',
                  '부종·염증이 좀처럼 빠지지 않는 분',
                  '근육·인대 손상이 깊은 분',
                  '수술 없이 회복하고 싶은 분',
                  '사고 후 수면장애·만성피로가 있는 분',
                  '빠르게 일상으로 복귀해야 하는 분',
                ].map((text, i) => (
                  <FadeIn key={text} delay={i * 60}>
                    <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-border-light">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-base font-medium text-text-main">{text}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── 9. 입원 스토리텔링 + 간호등급 ── */}
      <div style={{ background: '#ffffff' }}>
        <HospitalImage
          src="/images/traffic/traffic-adv-0.png"
          alt="상무365 입원이 특별한 이유"
          className="w-full h-auto max-w-[1100px] mx-auto block"
        />
      </div>

      {storyPoints.map((point, i) => {
        const isReversed = i % 2 !== 0
        return (
          <section key={point.title} className={`${storyStyle.bg} py-12 md:py-16`}>
            <Container>
              <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
                <div className="md:w-[55%] w-full shrink-0">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={point.image}
                      alt={point.imageAlt}
                      width={640}
                      height={420}
                      sizes="(max-width: 768px) 100vw, 55vw"
                      priority={i === 0}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-[28px] md:text-[36px] font-bold leading-snug mb-4 ${storyStyle.title}`}>
                    {point.title}
                  </h3>
                  <p className={`text-lg md:text-xl leading-[1.85] mb-5 ${storyStyle.desc}`}>
                    {point.desc}
                  </p>
                  <p className={`text-xl md:text-2xl font-bold ${storyStyle.highlight}`}>
                    &ldquo;{point.highlight}&rdquo;
                  </p>
                </div>
              </div>
            </Container>
          </section>
        )
      })}

      {/* 입원실 이미지 */}
      <HospitalImage
        src="/images/traffic/traffic-adv-07.png"
        alt="프라이빗 회복 입원실"
        className="w-full h-auto"
      />

      {/* 간호등급 2등급 */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-primary text-base tracking-[0.15em] uppercase font-semibold mb-3 block">NURSING GRADE</span>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-primary text-white text-[48px] md:text-[64px] font-black w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-2xl flex items-center justify-center leading-none">
                  2
                </div>
                <div className="text-left">
                  <p className="text-2xl md:text-3xl font-black text-text-main">등급</p>
                  <p className="text-base md:text-lg text-text-body">간호 인력 등급</p>
                </div>
              </div>
              <h2 className="text-[28px] md:text-[40px] font-black leading-[1.3] text-text-main mb-4">
                &ldquo;입원하시는 순간부터,<br />퇴원하시는 순간까지&rdquo;
              </h2>
              <p className="text-lg md:text-xl text-text-body max-w-[560px] mx-auto leading-relaxed">
                간호등급 2등급은 아무 병원이나 받을 수 없습니다.<br />
                <span className="text-primary font-bold">충분한 간호 인력</span>이 확보되어야만 가능한 등급입니다.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto mb-12">
            {[
              {
                num: '24시간',
                title: '야간에도 즉시 대응',
                desc: '밤에 통증이 심해져도, 바로 간호사가 달려옵니다. 혼자 참고 기다리실 필요 없습니다.',
              },
              {
                num: '전담',
                title: '담당 간호사 배정',
                desc: '환자 한 분 한 분의 상태를 파악하고 있는 전담 간호사가 매일 케어합니다.',
              },
              {
                num: '안심',
                title: '보호자 없어도 안심',
                desc: '충분한 간호 인력이 보호자 역할까지 해드립니다. 혼자 입원하셔도 걱정 마세요.',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="text-center p-7 rounded-2xl border border-border-light hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-primary text-[32px] md:text-[36px] font-black mb-2">{item.num}</div>
                  <p className="text-xl font-bold text-text-main mb-2">{item.title}</p>
                  <p className="text-base text-text-body leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl px-6 py-5 max-w-[700px] mx-auto">
              <p className="text-lg md:text-xl font-bold text-text-main text-center">
                &ldquo;환자분은 <span className="text-primary">회복에만 집중</span>하세요.<br />
                나머지는 저희가 하겠습니다.&rdquo;
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── 10. 의료진 ── */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <span className="text-primary text-base tracking-[0.15em] uppercase font-medium mb-2 block">
              DOCTORS
            </span>
            <h2 className="text-[28px] md:text-[36px] font-bold text-text-main leading-tight">
              교통사고 전문 의료진
            </h2>
            <p className="text-text-body text-lg mt-3">
              한·양방 의료진 협진으로 정확한 진단과 빠른 회복
            </p>
          </div>

          <div className="space-y-6">
            {doctors.map((doc, i) => {
              const isReversed = i % 2 !== 0
              return (
                <div
                  key={doc.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E8E0D6]"
                >
                  <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <div className="md:w-[45%] shrink-0 bg-[#EDE5DB] relative overflow-hidden">
                      <div className={`absolute top-4 ${isReversed ? 'right-4' : 'left-4'} z-10 select-none pointer-events-none`}>
                        <Image src="/images/sangmu_logo.png" alt="" width={224} height={224} className="object-contain opacity-[0.15]" />
                      </div>
                      <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-primary" />

                      <div className="relative h-full min-h-[320px] md:min-h-[400px] flex flex-col justify-end p-6 md:p-8">
                        <div className={`relative z-10 mb-4 ${isReversed ? 'text-right' : 'text-left'}`}>
                          <p className="text-text-muted text-sm font-medium mb-1">{doc.position}</p>
                          <h3 className="text-[32px] md:text-[38px] font-black text-text-main leading-tight tracking-tight">
                            {doc.name} <span className="text-[24px] md:text-[28px] font-bold">원장</span>
                          </h3>
                        </div>

                        <div className={`absolute ${isReversed ? 'left-0' : 'right-0'} bottom-0 w-[55%] h-full`}>
                          <HospitalImage
                            src={doc.src}
                            alt={`${doc.name} ${doc.position}`}
                            className="w-full h-full object-bottom"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      <div className="mb-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium bg-primary-light text-primary">
                          {doc.specialty}
                        </span>
                      </div>

                      <div className="mb-5">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-4 h-4 text-primary" strokeWidth={2} />
                          <p className="text-[13px] font-bold text-text-main uppercase tracking-wider">학력</p>
                        </div>
                        <ul className="space-y-1 ml-6">
                          {doc.education.map((item) => (
                            <li key={item} className="text-[14px] text-text-body leading-relaxed flex items-start gap-2">
                              <span className="text-primary/50 mt-[7px] shrink-0">·</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-4 h-4 text-primary" strokeWidth={2} />
                          <p className="text-[13px] font-bold text-text-main uppercase tracking-wider">경력</p>
                        </div>
                        <ul className="space-y-1 ml-6">
                          {doc.career.map((item) => (
                            <li key={item} className={`text-[14px] leading-relaxed flex items-start gap-2 ${item.startsWith('현)') ? 'text-primary font-bold' : 'text-text-body'}`}>
                              <span className={`mt-[7px] shrink-0 ${item.startsWith('현)') ? 'text-primary' : 'text-primary/50'}`}>·</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {'activities' in doc && doc.activities && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="w-4 h-4 text-primary" strokeWidth={2} />
                            <p className="text-[13px] font-bold text-text-main uppercase tracking-wider">활동</p>
                          </div>
                          <ul className="space-y-1 ml-6">
                            {(doc.activities as string[]).map((item) => (
                              <li key={item} className="text-[14px] text-text-body leading-relaxed flex items-start gap-2">
                                <span className="text-primary/50 mt-[7px] shrink-0">·</span>
                                {item}
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

      {/* ── 중간 CTA 2 ── */}
      <MidCTA message="교통사고 후유증, 더 이상 참지 마세요" />

      {/* ── 11. 자손·자상 안내 ── */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <FadeIn>
            <SectionHeader title="이런 사고도 치료 가능합니다" subtitle="COVERAGE" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selfDamageItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 100} className="h-full">
                <div className="bg-white rounded-xl p-7 border border-border-light hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <p className="text-xl font-bold text-text-main">{item.title}</p>
                  </div>
                  <p className="text-lg text-text-body leading-[1.7]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 12. 진료시간 + 오시는 길 ── */}
      <section className="bg-gray-50" aria-label="진료시간 안내">
        <Container>
          <div className="text-text-main py-10 md:py-14 flex flex-col md:flex-row items-stretch gap-8 md:gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <svg viewBox="0 0 100 100" fill="none" className="w-10 h-10">
                  <circle cx="50" cy="54" r="34" stroke="currentColor" strokeWidth="5" fill="none"/>
                  <circle cx="50" cy="54" r="3" fill="currentColor"/>
                  <line x1="50" y1="54" x2="50" y2="32" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  <line x1="50" y1="54" x2="66" y2="54" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  <line x1="50" y1="22" x2="50" y2="26" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="50" y1="82" x2="50" y2="86" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="18" y1="54" x2="22" y2="54" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="78" y1="54" x2="82" y2="54" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M22 28 L34 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M78 28 L66 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  <circle cx="22" cy="24" r="8" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <circle cx="78" cy="24" r="8" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <line x1="32" y1="84" x2="26" y2="94" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  <line x1="68" y1="84" x2="74" y2="94" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                <div className="text-xl md:text-[22px] font-black tracking-widest border-2 border-text-main px-4 py-1 rounded">진료시간</div>
              </div>

              <div className="flex items-center gap-3 py-3 border-b border-border-light">
                <div className="min-w-[75px] md:min-w-[90px] text-center">
                  <div className="text-[15px] md:text-lg font-bold tracking-[3px]">평&nbsp;&nbsp;&nbsp;일</div>
                  <span className="inline-block text-[11px] font-bold bg-primary text-white px-2.5 py-0.5 rounded-sm mt-1">매일야간진료</span>
                </div>
                <div>
                  <div className="text-sm md:text-[17px] font-bold">오전 9시 ~ 오후 8시</div>
                  <div className="text-[11px] md:text-[13px] text-text-muted mt-0.5">(점심시간 : 오후 12시 30분 ~ 2시)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 py-3 border-b border-border-light">
                <div className="min-w-[75px] md:min-w-[90px] text-center">
                  <div className="text-[15px] md:text-lg font-bold tracking-[3px]">토·일요일</div>
                  <span className="inline-block text-[11px] font-bold bg-primary-light text-primary px-2.5 py-0.5 rounded-sm mt-1">365일 진료</span>
                </div>
                <div>
                  <div className="text-sm md:text-[17px] font-bold">오전 9시 ~ 오후 3시</div>
                  <div className="text-[11px] md:text-[13px] text-text-muted mt-0.5">(점심시간 없이 진료)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 py-3">
                <div className="min-w-[75px] md:min-w-[90px] text-center">
                  <div className="text-[15px] md:text-lg font-bold tracking-[3px]">공&nbsp;휴&nbsp;일</div>
                  <span className="inline-block text-[11px] font-bold bg-primary-light text-primary px-2.5 py-0.5 rounded-sm mt-1">365일 진료</span>
                </div>
                <div>
                  <div className="text-sm md:text-[17px] font-bold">오전 9시 ~ 오후 3시</div>
                  <div className="text-[11px] md:text-[13px] text-text-muted mt-0.5">(점심시간 없이 진료)</div>
                </div>
              </div>
            </div>

            <div className="md:w-[420px] shrink-0 flex flex-col">
              <div className="bg-white border border-border-light rounded-t-2xl text-center py-8 px-5 flex-1 flex flex-col items-center justify-center">
                <div className="text-xl md:text-[26px] font-black tracking-wider">
                  <span className="text-primary">365일</span> 평일, 주말, 공휴일
                </div>
                <div className="inline-block bg-primary text-white text-lg md:text-[26px] font-black px-4 md:px-6 py-2 mt-3 tracking-wider rounded">
                  매일 24시간 야간입원가능
                </div>
              </div>
              <div className="bg-primary-light rounded-b-2xl text-center py-6 px-5">
                <div className="text-lg md:text-xl font-black text-text-main tracking-wide mb-2">
                  365일진료 <span className="mx-1">·</span> 평일야간진료
                </div>
                <p className="text-[12px] md:text-[14px] text-text-body leading-[1.8]">
                  바쁜 일상으로 내원이 힘드셨던 분들을 위해<br />
                  평일 오후 8시까지 <span className="text-primary font-bold">야간진료</span><br />
                  주말·공휴일 포함 <span className="text-primary font-bold">365일 진료</span> 시행
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <SectionHeader title="오시는 길" subtitle="LOCATION" />
          <NaverStaticMap />
          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <p className="text-lg font-bold text-text-main">상무365한방병원</p>
              <p className="text-base text-text-body mt-1">광주 서구 상무중앙로 96, H.K 복합빌딩 9~11층</p>
            </div>
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              aria-label="상무365한방병원 전화 062-385-9000"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-lg hover:bg-primary/90 transition"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {HOSPITAL.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* ── 13. 최종 CTA ── */}
      <section className="bg-white py-14 md:py-20 text-center">
        <Container>
          <ShieldCheck className="w-12 h-12 mx-auto mb-5 text-primary" />
          <h3 className="text-[32px] md:text-[40px] font-bold mb-4 break-keep text-text-main">
            교통사고, 빠른 치료가 중요합니다
          </h3>
          <p className="text-text-body text-lg md:text-xl leading-[1.8] max-w-[540px] mx-auto mb-10 break-keep">
            증상이 없더라도 72시간 내 검사를 받으세요.<br />
            자동차보험 본인부담금 0원
          </p>
          <div className="flex flex-col min-[400px]:flex-row gap-4 justify-center">
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              aria-label="상무365한방병원 전화 062-385-9000"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-white rounded-xl font-bold text-xl hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {HOSPITAL.phone}
            </a>
            <a
              href={HOSPITAL.kakao}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡으로 상담하기"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-primary/40 text-primary rounded-xl font-bold text-xl hover:bg-primary-light transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              카카오톡 상담
            </a>
          </div>
          <p className="text-text-muted text-base mt-5">
            {HOSPITAL.addressShort} · 주차 가능
          </p>
        </Container>
      </section>
    </>
  )
}
