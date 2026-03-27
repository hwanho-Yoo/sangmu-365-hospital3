import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, CheckCircle, Shield, ShieldCheck, Clock, Stethoscope, Users, Car, AlertTriangle, ArrowRight, ChevronRight, ChevronDown, Zap, Pill, Hand, Activity, Waves } from 'lucide-react'
import TrafficHero from '@/components/traffic/TrafficHero'
import NaverStaticMap from '@/components/traffic/NaverStaticMap'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { IMAGES } from '@/lib/imagePaths'
import { HOSPITAL } from '@/lib/constants'

/* ───── 데이터 ───── */

const urgentReasons = [
  {
    icon: Clock,
    title: '사고 후 72시간이 중요합니다',
    desc: '초기 골든타임에 치료를 시작해야 후유증을 최소화할 수 있습니다. 통증이 없더라도 반드시 검사를 받으세요.',
  },
  {
    icon: Shield,
    title: '자동차보험 — 본인부담금 0원',
    desc: '자동차보험 적용으로 치료비 부담 없이 한방·양방 모든 치료를 받으실 수 있습니다.',
  },
  {
    icon: Users,
    title: '한의사 + 정형외과 전문의 협진',
    desc: '한방과 양방 전문의가 함께 진단하고 치료합니다. 원인을 정확히 파악하여 효과적으로 치료합니다.',
  },
  {
    icon: Stethoscope,
    title: '365일 진료 — 사고 직후 바로 내원',
    desc: '주말, 공휴일에도 쉬지 않고 진료합니다. 야간 20시까지 운영하여 언제든 내원 가능합니다.',
  },
]

const symptoms = [
  { title: '목·어깨 통증', desc: '사고 충격으로 목이 뻣뻣하고 어깨가 무겁고 아픈 증상' },
  { title: '허리·골반 통증', desc: '허리가 아프고 오래 앉아있기 힘들며 골반이 틀어지는 증상' },
  { title: '두통·어지러움', desc: '경추 손상으로 인한 만성 두통, 어지러움, 이명 증상' },
  { title: '손발 저림', desc: '신경 압박으로 팔다리가 저리고 감각이 둔해지는 증상' },
  { title: '근육통·관절통', desc: '전신 근육의 긴장과 통증, 관절의 움직임 제한' },
  { title: '수면장애·피로', desc: '정신적 충격으로 인한 불면, 만성 피로, 집중력 저하' },
]

const insuranceInfo = [
  { title: '입원비·치료비', desc: '자동차보험 적용으로 본인부담금 0원. 입원 치료도 보험 적용됩니다.' },
  { title: '한방치료 보험', desc: '침, 추나, 한약, 약침 등 한방치료 전체가 자동차보험 적용됩니다.' },
  { title: '보험사 동의 불필요', desc: '상대방 보험사 동의 없이도 우선 치료 가능합니다.' },
  { title: '동승자·보행자', desc: '동승자, 보행자 사고도 자동차보험 적용 가능합니다.' },
]

const steps = [
  {
    num: '01',
    title: '내원 및 접수',
    desc: '사고접수번호와 보험사 정보만 있으면 됩니다. 서류가 없어도 우선 치료 가능합니다.',
  },
  {
    num: '02',
    title: '정밀 검사·진단',
    desc: 'X-RAY, 초음파 검사로 정확한 손상 부위를 진단합니다. 한의사와 정형외과 전문의가 함께 확인합니다.',
  },
  {
    num: '03',
    title: '맞춤 치료 계획',
    desc: '환자 상태에 맞는 최적의 한양방 복합 치료 계획을 수립합니다. 입원·외래 여부도 함께 결정합니다.',
  },
  {
    num: '04',
    title: '통합 치료 시작',
    desc: '침, 추나, 약침, 한약, 도수치료, 체외충격파 등을 병행하여 빠른 회복을 돕습니다.',
  },
]

const treatmentProgram = [
  {
    icon: Zap,
    name: '침·약침치료',
    desc: '경혈을 자극하여 통증을 완화하고 기혈 순환을 촉진합니다. 초음파유도하약침으로 정확한 부위에 시술합니다.',
  },
  {
    icon: Hand,
    name: '추나요법',
    desc: '사고 충격으로 틀어진 척추와 관절을 교정합니다. 구조적 원인을 해결하여 재발을 방지합니다.',
  },
  {
    icon: Pill,
    name: '한약치료',
    desc: '손상된 근육·인대·신경의 회복을 돕는 맞춤 한약을 처방합니다. 내부적 치유력을 높여줍니다.',
  },
  {
    icon: Activity,
    name: '도수치료',
    desc: '전문 치료사가 직접 근골격계를 교정하고 긴장된 근육을 이완시킵니다.',
  },
  {
    icon: Waves,
    name: '체외충격파',
    desc: '만성화된 통증 부위에 충격파를 가해 조직 재생과 혈류 개선을 촉진합니다.',
  },
  {
    icon: Stethoscope,
    name: '물리치료',
    desc: '전기자극, 온열치료, 견인치료 등으로 통증을 완화하고 기능 회복을 돕습니다.',
  },
]

const selfDamageItems = [
  {
    icon: Car,
    title: '자차 단독사고',
    desc: '가드레일, 전봇대 등 자차 단독사고도 자동차보험으로 치료 가능합니다. 자차보험(자기신체사고) 또는 무보험차상해 담보로 치료받으실 수 있습니다.',
  },
  {
    icon: Shield,
    title: '자손·자상 보험',
    desc: '자기신체사고(자손)와 자기신체상해(자상) 모두 한방병원 치료가 가능합니다. 운전자보험이 있다면 입원일당 등 추가 보상도 받으실 수 있습니다.',
  },
  {
    icon: AlertTriangle,
    title: '뺑소니·무보험차 사고',
    desc: '뺑소니, 무보험차 사고도 정부보장사업을 통해 치료비 지원을 받을 수 있습니다. 걱정 마시고 먼저 내원하세요.',
  },
  {
    icon: Users,
    title: '동승자 사고',
    desc: '택시, 버스, 지인 차량 등 동승 중 사고를 당하신 경우에도 자동차보험으로 치료 가능합니다.',
  },
]

const storyPoints = [
  {
    title: '늦은 밤 사고도 걱정 마세요',
    desc: '매일 24시간 진료하며, 응급 입원이 가능합니다. 늦은 시간 사고에도 바로 치료받으실 수 있습니다. 어두운 밤에도 상무365의 문은 열려 있습니다.',
    highlight: '매일, 당신의 건강을 위합니다',
    image: '/images/traffic/traffic-adv-02.png',
    imageAlt: '야간 사고 즉시 대응 — 밤 8시까지 진료 및 응급 입원',
  },
  {
    title: '복잡한 서류? 우리가 맡겠습니다',
    desc: '사고접수번호만 있으면 됩니다. 보험사 동의나 복잡한 서류 없이도 먼저 입원 후 처리 가능합니다. 환자분은 치료에만 집중하세요. 행정은 저희가 해결합니다.',
    highlight: '먼저 입원, 서류는 나중에',
    image: '/images/traffic/traffic-adv-03.png',
    imageAlt: '보험사 동의 없이 우선 입원 — 간편한 입원 절차',
  },
  {
    title: '걱정할 금액은 0원입니다',
    desc: '입원비, 치료비, 식대 전액 자동차보험으로 처리됩니다. 본인부담금이 없습니다. 비용 걱정 없이 오직 회복에만 집중하실 수 있습니다.',
    highlight: '입원비·치료비·식대, 전액 보험 처리',
    image: '/images/traffic/traffic-adv-04.png',
    imageAlt: '자동차보험 입원비 0원 — 본인부담금 없는 치료',
  },
  {
    title: '입원 당일, 치유가 시작됩니다',
    desc: '입원 당일부터 침, 추나, 약침, 물리치료 등 한양방 복합 치료를 바로 시작합니다. 하루도 허비하지 않는 집중 치료로 빠른 회복을 돕습니다.',
    highlight: '쉼 없는 치유, 입원 즉시 시작',
    image: '/images/traffic/traffic-adv-05.png',
    imageAlt: '입원 즉시 한양방 복합 치료 시작 — 침 추나 약침 물리치료',
  },
  {
    title: '퇴원하는 순간까지, 함께합니다',
    desc: '입원 기간 동안 매일 담당 의료진이 회진하고, 환자 상태에 맞춤 치료를 제공합니다. 사고 전보다 더 건강한 일상으로 돌아가실 수 있도록 끝까지 함께합니다.',
    highlight: '사고 전보다 더 건강한 일상으로',
    image: '/images/traffic/traffic-adv-06.png',
    imageAlt: '퇴원까지 전담 케어 — 매일 의료진 회진과 맞춤 치료',
  },
]

/* 배경색: 차가운 톤 → 따뜻한 톤 전환 */
const storyBgColors = [
  'bg-slate-800',    // Point 1 — 차가운 불안
  'bg-neutral-200',  // Point 2 — 완충 (다크→라이트 전환)
  'bg-amber-50',     // Point 3 — 따뜻한 안심
  'bg-orange-50',    // Point 4 — 치유
  'bg-amber-100/50', // Point 5 — 완전한 회복
]

/* 텍스트 색상: 어두운 배경 → 밝은 배경 전환 */
const storyTextColors = [
  { title: 'text-white', desc: 'text-white/80', highlight: 'text-amber-300' },
  { title: 'text-text-main', desc: 'text-text-body', highlight: 'text-primary' },
  { title: 'text-text-main', desc: 'text-text-body', highlight: 'text-primary' },
  { title: 'text-text-main', desc: 'text-text-body', highlight: 'text-primary' },
  { title: 'text-text-main', desc: 'text-text-body', highlight: 'text-primary' },
]

export const metadata: Metadata = {
  title: '교통사고 후유증 치료 | 상무365한방병원',
  description: '교통사고 후유증 치료 전문. 자동차보험 본인부담금 0원. 한의사+정형외과 전문의 협진. 365일 진료, 야간 20시. 062-385-9000',
}

export default function TrafficAccidentPage() {
  return (
    <>
      {/* ── 1. 히어로: Ken Burns 배경 + 타이틀 + CTA ── */}
      <TrafficHero />

      {/* ── 입원 장점 — 스토리텔링 섹션 ── */}
      <HospitalImage
        src="/images/traffic/traffic-adv-0.png"
        alt="상무365 입원이 특별한 이유"
        className="w-full h-auto"
      />

      {/* 6개 스토리 포인트 */}
      {storyPoints.map((point, i) => {
        const colors = storyTextColors[i]
        const isReversed = i % 2 !== 0
        return (
          <section key={point.title} className={`${storyBgColors[i]} py-12 md:py-16`}>
            <Container>
              <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
                {/* 이미지 */}
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
                {/* 텍스트 */}
                <div className="flex-1">
                  <h3 className={`text-2xl md:text-[28px] font-bold leading-snug mb-4 ${colors.title}`}>
                    {point.title}
                  </h3>
                  <p className={`text-base md:text-[17px] leading-[1.85] mb-5 ${colors.desc}`}>
                    {point.desc}
                  </p>
                  <p className={`text-lg md:text-xl font-bold ${colors.highlight}`}>
                    &ldquo;{point.highlight}&rdquo;
                  </p>
                </div>
              </div>
            </Container>
          </section>
        )
      })}

      {/* ── 2. 입원실 이미지 ── */}
      <HospitalImage
        src="/images/traffic/traffic-adv-07.png"
        alt="프라이빗 회복 입원실"
        className="w-full h-auto"
      />

      {/* ── 3. 자동차보험 입원비·치료비 안내 ── */}
      <section className="py-12 md:py-16">
        <Container>
          <SectionHeader title="교통사고 자동차보험 안내" subtitle="AUTO INSURANCE" />
          <p className="text-center text-base text-text-body -mt-6 mb-8">
            입원비·치료비 전액 자동차보험으로 처리됩니다
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {insuranceInfo.map((item) => (
              <div key={item.title} className="bg-primary-light rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-primary/70" aria-hidden="true" />
                  <p className="text-lg font-bold text-text-main">{item.title}</p>
                </div>
                <p className="text-base text-text-body leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. 자동차보험 진료 절차 ── */}
      <section className="py-12 md:py-16 bg-bg-section">
        <Container>
          <SectionHeader title="자동차보험 진료 절차" subtitle="PROCESS" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={step.num} className="relative bg-white rounded-xl border border-border-light p-6">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-[15px]">
                  {step.num}
                </div>
                <p className="text-lg font-bold text-text-main mt-3">{step.title}</p>
                <p className="text-base text-text-body mt-2 leading-[1.7]">{step.desc}</p>
                {i < steps.length - 1 && (
                  <>
                    <div className="hidden md:block absolute top-1/2 -right-3" aria-hidden="true"><ChevronRight className="w-5 h-5 text-border-main" /></div>
                    <div className="md:hidden flex justify-center mt-4" aria-hidden="true"><ChevronDown className="w-5 h-5 text-border-main" /></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. 교통사고 후유증 증상 ── */}
      <section className="py-12 md:py-16">
        <Container>
          <SectionHeader title="교통사고 후유증 증상" subtitle="SYMPTOMS" />
          <p className="text-base text-text-body text-center mb-8 -mt-6">
            아래 증상 중 하나라도 해당되면 교통사고 후유증일 수 있습니다
          </p>
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {symptoms.map((s) => (
              <div
                key={s.title}
                className="bg-white border-l-[3px] border-l-primary/60 rounded-lg p-5 shadow-md"
              >
                <p className="text-base font-bold text-text-main">{s.title}</p>
                <p className="text-[15px] text-text-body mt-1 leading-[1.6]">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 입원 치료 이미지 ── */}
      <HospitalImage
        src="/images/traffic/traffic-adv-08.png"
        alt="입원 치료 안내"
        className="w-full h-auto"
      />

      {/* ── 6. 왜 빨리 치료해야 하는가 ── */}
      <section className="py-12 md:py-16">
        <Container>
          <SectionHeader title="교통사고, 왜 빨리 치료해야 할까요?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {urgentReasons.map((r) => (
              <div key={r.title} className="bg-white border border-border-light rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <r.icon className="w-6 h-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-lg font-bold text-text-main">{r.title}</p>
                  <p className="text-base text-text-body mt-1 leading-[1.7]">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. 이미지 (09, 10, 11) ── */}
      <div className="bg-bg-section py-4 space-y-4">
        <HospitalImage
          src="/images/traffic/traffic-adv-09.png"
          alt="진단 및 치료 안내"
          className="w-full h-auto"
        />
        <HospitalImage
          src="/images/traffic/traffic-adv-10.png"
          alt="정밀 진단 시스템"
          className="w-full h-auto"
        />
        <HospitalImage
          src="/images/traffic/traffic-adv-11.png"
          alt="치료 프로그램 안내"
          className="w-full h-auto"
        />
      </div>

      {/* ── 8. 교통사고 집중치료 프로그램 ── */}
      <section className="py-12 md:py-16">
        <Container>
          <SectionHeader title="교통사고 집중치료 프로그램" subtitle="TREATMENT" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {treatmentProgram.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-border-light">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                  <t.icon className="w-6 h-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p className="text-[19px] font-bold text-text-main">{t.name}</p>
                <p className="text-[15px] text-text-body mt-2 leading-[1.7]">{t.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 9. 추나요법 하이라이트 ── */}
      <section className="py-12 md:py-16 bg-bg-section">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-[50%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage
                  src={IMAGES.traffic.treatment}
                  alt="추나요법 치료"
                  className="w-full h-[260px] md:h-[360px]"
                />
              </div>
            </div>
            <div className="flex-1">
              <Badge className="mb-4">핵심 치료</Badge>
              <h3 className="text-2xl md:text-[28px] font-bold text-text-main leading-snug mb-4">
                교통사고 후유증<br />
                추나요법으로 근본 치료
              </h3>
              <p className="text-base text-text-body leading-[1.8] mb-4">
                교통사고 충격으로 틀어진 척추·골반·관절을 한의사가 직접 손으로 교정하는 치료법입니다.
                구조적 원인을 바로잡아 통증의 근본을 해결하고, 재발을 방지합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-base text-text-body">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  자동차보험 적용 — 본인부담금 0원
                </li>
                <li className="flex items-start gap-2 text-base text-text-body">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  척추·골반 틀어짐 교정
                </li>
                <li className="flex items-start gap-2 text-base text-text-body">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  통증 원인 근본 치료
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 10. 자손·자상 안내 ── */}
      <section className="py-12 md:py-16">
        <Container>
          <SectionHeader title="이런 사고도 치료 가능합니다" subtitle="COVERAGE" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selfDamageItems.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-border-light">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <p className="text-lg font-bold text-text-main">{item.title}</p>
                </div>
                <p className="text-base text-text-body leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 11. 의료진 ── */}
      <section className="py-14 md:py-20 bg-slate-900 text-white">
        <Container>
          <div className="text-center mb-10">
            <span className="text-white/50 text-[15px] tracking-[0.15em] uppercase font-medium mb-2 block">
              DOCTORS
            </span>
            <h2 className="text-2xl md:text-[28px] font-bold leading-tight">
              교통사고 전문 의료진
            </h2>
            <p className="text-white/60 text-base mt-3">
              한의사 5인 중 대표 의료진을 소개합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
            {[
              {
                name: '박준규',
                position: '대표원장',
                src: IMAGES.doctors['park-junkyu'],
                specialty: '교통사고 후유증 · 추나요법',
                career: ['원광대 한의과대학 졸업', '대한추나의학회 정회원', '교통사고 후유증 치료 전문'],
                quote: '사고 전보다 더 건강하게, 끝까지 책임집니다',
              },
              {
                name: '백상철',
                position: '원장',
                src: IMAGES.doctors['baek-sangcheol'],
                specialty: '침구의학 · 통증치료',
                career: ['동신대 한의과대학 졸업', '대한침구의학회 정회원', '통증 질환 치료 전문'],
                quote: '통증의 근본 원인을 찾아 치료합니다',
              },
              {
                name: '박정열',
                position: '원장',
                src: IMAGES.doctors['park-jungyeol'],
                specialty: '한방재활 · 도수치료',
                career: ['동신대 한의과대학 졸업', '대한한방재활의학회 정회원', '도수치료 · 체형교정 전문'],
                quote: '몸의 균형을 되찾아 일상으로 돌려드립니다',
              },
            ].map((doc) => (
              <div key={doc.name} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                <div className="aspect-[3/4] overflow-hidden">
                  <HospitalImage
                    src={doc.src}
                    alt={`${doc.name} ${doc.position}`}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold">{doc.name}</span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                      {doc.position}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm mb-3">{doc.specialty}</p>
                  <ul className="space-y-1 mb-4">
                    {doc.career.map((item) => (
                      <li key={item} className="text-white/60 text-[13px] flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-primary/80 italic">&ldquo;{doc.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition"
            >
              전체 의료진 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── 13. 최종 CTA ── */}
      <section className="bg-primary py-14 md:py-20 text-white text-center">
        <Container>
          <ShieldCheck className="w-10 h-10 mx-auto mb-5 text-white/80" />
          <h3 className="text-2xl md:text-[32px] font-bold mb-4">
            교통사고, 빠른 치료가 중요합니다
          </h3>
          <p className="text-white/80 text-base md:text-lg leading-[1.8] max-w-[540px] mx-auto mb-10">
            사고 후 증상이 없더라도 72시간 내 검사를 받으세요.<br />
            자동차보험으로 본인부담금 없이 치료 가능합니다.
          </p>
          <div className="flex flex-col min-[400px]:flex-row gap-4 justify-center">
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              aria-label="상무365한방병원 전화 062-385-9000"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-primary rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {HOSPITAL.phone}
            </a>
            <a
              href={HOSPITAL.kakao}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡으로 상담하기"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              카카오톡 상담
            </a>
          </div>
          <p className="text-white/60 text-[15px] mt-5">
            365일 진료 · 야간 20시까지 · 점심시간 없음
          </p>
        </Container>
      </section>

      {/* ── 진료시간 안내 ── */}
      <section className="bg-slate-800" aria-label="진료시간 안내">
        <Container>
          <div className="text-white py-10 md:py-14 flex flex-col md:flex-row items-stretch gap-8 md:gap-10">
            {/* 좌측: 진료시간 테이블 */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <svg viewBox="0 0 100 100" fill="none" className="w-10 h-10">
                  <circle cx="50" cy="54" r="34" stroke="#fff" strokeWidth="5" fill="none"/>
                  <circle cx="50" cy="54" r="3" fill="#fff"/>
                  <line x1="50" y1="54" x2="50" y2="32" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
                  <line x1="50" y1="54" x2="66" y2="54" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
                  <line x1="50" y1="22" x2="50" y2="26" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="50" y1="82" x2="50" y2="86" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="18" y1="54" x2="22" y2="54" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="78" y1="54" x2="82" y2="54" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M22 28 L34 38" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M78 28 L66 38" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
                  <circle cx="22" cy="24" r="8" stroke="#fff" strokeWidth="4" fill="none"/>
                  <circle cx="78" cy="24" r="8" stroke="#fff" strokeWidth="4" fill="none"/>
                  <line x1="32" y1="84" x2="26" y2="94" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
                  <line x1="68" y1="84" x2="74" y2="94" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                <div className="text-xl md:text-[22px] font-black tracking-widest border-2 border-white px-4 py-1 rounded">진료시간</div>
              </div>

              <div className="flex items-center gap-3 py-3 border-b border-white/10">
                <div className="min-w-[75px] md:min-w-[90px] text-center">
                  <div className="text-[15px] md:text-lg font-bold tracking-[3px]">평&nbsp;&nbsp;&nbsp;일</div>
                  <span className="inline-block text-[11px] font-bold bg-primary text-white px-2.5 py-0.5 rounded-sm mt-1">매일야간진료</span>
                </div>
                <div>
                  <div className="text-sm md:text-[17px] font-bold">오전 9시 ~ 오후 8시</div>
                  <div className="text-[11px] md:text-[13px] text-white/60 mt-0.5">(점심시간 : 오후 12시 30분 ~ 2시)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 py-3 border-b border-white/10">
                <div className="min-w-[75px] md:min-w-[90px] text-center">
                  <div className="text-[15px] md:text-lg font-bold tracking-[3px]">토·일요일</div>
                  <span className="inline-block text-[11px] font-bold bg-white/20 text-white/90 px-2.5 py-0.5 rounded-sm mt-1">365일 진료</span>
                </div>
                <div>
                  <div className="text-sm md:text-[17px] font-bold">오전 9시 ~ 오후 3시</div>
                  <div className="text-[11px] md:text-[13px] text-white/60 mt-0.5">(점심시간 없이 진료)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 py-3">
                <div className="min-w-[75px] md:min-w-[90px] text-center">
                  <div className="text-[15px] md:text-lg font-bold tracking-[3px]">공&nbsp;휴&nbsp;일</div>
                  <span className="inline-block text-[11px] font-bold bg-white/20 text-white/90 px-2.5 py-0.5 rounded-sm mt-1">365일 진료</span>
                </div>
                <div>
                  <div className="text-sm md:text-[17px] font-bold">오전 9시 ~ 오후 3시</div>
                  <div className="text-[11px] md:text-[13px] text-white/60 mt-0.5">(점심시간 없이 진료)</div>
                </div>
              </div>
            </div>

            {/* 우측: 강조 배너 + 안내 */}
            <div className="md:w-[420px] shrink-0 flex flex-col">
              <div className="bg-slate-900 rounded-t-2xl text-center py-8 px-5 flex-1 flex flex-col items-center justify-center">
                <div className="text-xl md:text-[26px] font-black tracking-wider">
                  <span className="text-amber-300">365일</span> 평일, 주말, 공휴일
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

      {/* ── 14. 오시는 길 (네이버 지도) ── */}
      <section className="py-12 md:py-16 bg-bg-section">
        <Container>
          <SectionHeader title="오시는 길" subtitle="LOCATION" />
          <NaverStaticMap />
          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <p className="text-base font-bold text-text-main">상무365한방병원</p>
              <p className="text-[15px] text-text-body mt-1">광주 서구 상무중앙로 96, H.K 복합빌딩 9~11층</p>
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
    </>
  )
}
