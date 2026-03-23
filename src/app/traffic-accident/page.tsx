import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, Shield, Clock, Stethoscope, Users, Car, AlertTriangle, ArrowRight, Zap, Pill, Hand, Activity, Waves } from 'lucide-react'
import TrafficHero from '@/components/traffic/TrafficHero'
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
    title: '자차 단독사고',
    desc: '가드레일, 전봇대 등 자차 단독사고도 자동차보험으로 치료 가능합니다. 자차보험(자기신체사고) 또는 무보험차상해 담보로 치료받으실 수 있습니다.',
  },
  {
    title: '자손·자상 보험',
    desc: '자기신체사고(자손)와 자기신체상해(자상) 모두 한방병원 치료가 가능합니다. 운전자보험이 있다면 입원일당 등 추가 보상도 받으실 수 있습니다.',
  },
  {
    title: '뺑소니·무보험차 사고',
    desc: '뺑소니, 무보험차 사고도 정부보장사업을 통해 치료비 지원을 받을 수 있습니다. 걱정 마시고 먼저 내원하세요.',
  },
  {
    title: '동승자 사고',
    desc: '택시, 버스, 지인 차량 등 동승 중 사고를 당하신 경우에도 자동차보험으로 치료 가능합니다.',
  },
]

const roomFeatures = [
  '1~2인 프라이빗 입원실 운영',
  '24시간 간호 관리 시스템',
  '환자별 맞춤 식단 제공',
  '쾌적한 병실 환경 (TV, Wi-Fi, 개인 화장실)',
  '보호자 편의시설 완비',
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

      {/* ── 2. 프라이빗 입원실 안내 ── */}
      <section className="py-10 md:py-14 bg-[#eddfcf]">
        <Container>
          <SectionHeader title="프라이빗 회복 입원실" subtitle="HOSPITALIZATION" />
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-[55%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage
                  src={IMAGES.facility[0]}
                  alt="입원실 사진"
                  className="w-full h-[240px] md:h-[320px]"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-text-main mb-4">
                편안한 회복을 위한<br />
                쾌적한 입원 환경
              </h3>
              <ul className="space-y-3">
                {roomFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-base text-text-body leading-[1.7]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/hospitalization"
                className="inline-flex items-center gap-1 text-primary font-bold mt-6 hover:underline"
              >
                입원 안내 자세히 보기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. 자동차보험 입원비·치료비 안내 ── */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader title="교통사고 입원비·치료비 안내" subtitle="AUTO INSURANCE" />
          <p className="text-center text-base text-text-body -mt-6 mb-8">
            교통사고 후유증 치료는 자동차보험 진료가 가능합니다
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {insuranceInfo.map((item) => (
              <div key={item.title} className="bg-primary-light rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <p className="text-lg font-bold text-text-main">{item.title}</p>
                </div>
                <p className="text-base text-text-body leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. 자동차보험 진료 절차 ── */}
      <section className="py-10 md:py-14 bg-bg-section">
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
                  <div className="hidden md:block absolute top-1/2 -right-3 text-border-main text-xl">→</div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. 교통사고 후유증 증상 ── */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader title="교통사고 후유증 증상" subtitle="SYMPTOMS" />
          <p className="text-base text-text-body text-center mb-8 -mt-6">
            아래 증상 중 하나라도 해당되면 교통사고 후유증일 수 있습니다
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {symptoms.map((s) => (
              <div
                key={s.title}
                className="bg-white border-l-[3px] border-l-primary rounded-lg p-5 shadow-sm"
              >
                <p className="text-base font-bold text-text-main">{s.title}</p>
                <p className="text-[15px] text-text-muted mt-1 leading-[1.6]">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. 왜 빨리 치료해야 하는가 ── */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader title="교통사고, 왜 빨리 치료해야 할까요?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {urgentReasons.map((r) => (
              <div key={r.title} className="bg-white border border-border-light rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <r.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
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

      {/* ── 7. 진단 장비 (X-ray, 초음파) ── */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader title="정밀 진단 시스템" subtitle="DIAGNOSIS" />
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 rounded-xl overflow-hidden">
              <HospitalImage
                src={IMAGES.equipment.xray}
                alt="X-RAY 디지털 영상 진단"
                className="w-full h-[200px] md:h-[260px]"
              />
              <div className="bg-white border border-border-light border-t-0 rounded-b-xl p-5">
                <p className="font-bold text-text-main">디지털 X-RAY</p>
                <p className="text-[15px] text-text-body mt-1">골절, 관절 손상 등을 정밀하게 진단합니다</p>
              </div>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden">
              <HospitalImage
                src={IMAGES.equipment.v7}
                alt="초음파 진단 장비"
                className="w-full h-[200px] md:h-[260px]"
              />
              <div className="bg-white border border-border-light border-t-0 rounded-b-xl p-5">
                <p className="font-bold text-text-main">초음파 진단</p>
                <p className="text-[15px] text-text-body mt-1">연부조직 손상을 실시간으로 확인합니다</p>
              </div>
            </div>
          </div>
          <p className="text-center text-[15px] text-text-muted mt-6">
            영상진단 의료기관과 업무협약을 통해 MRI, CT 등 추가 정밀검사도 가능합니다
          </p>
        </Container>
      </section>

      {/* ── 8. 교통사고 집중치료 프로그램 ── */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader title="교통사고 집중치료 프로그램" subtitle="TREATMENT" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {treatmentProgram.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-border-light">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                  <t.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-lg font-bold text-text-main">{t.name}</p>
                <p className="text-base text-text-body mt-2 leading-[1.7]">{t.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 9. 추나요법 하이라이트 ── */}
      <section className="py-10 md:py-14">
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
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  자동차보험 적용 — 본인부담금 0원
                </li>
                <li className="flex items-start gap-2 text-base text-text-body">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  척추·골반 틀어짐 교정
                </li>
                <li className="flex items-start gap-2 text-base text-text-body">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  통증 원인 근본 치료
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 10. 자손·자상 안내 ── */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader title="이런 사고도 치료 가능합니다" subtitle="COVERAGE" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selfDamageItems.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-border-light">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <Car className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg font-bold text-text-main">{item.title}</p>
                </div>
                <p className="text-base text-text-body leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 11. 의료진 간략 ── */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader title="교통사고 전문 의료진" subtitle="DOCTORS" />
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {Object.entries(IMAGES.doctors).slice(0, 3).map(([key, src]) => (
                <div key={key} className="shrink-0 w-[160px] md:w-[180px]">
                  <div className="rounded-xl overflow-hidden">
                    <HospitalImage
                      src={src}
                      alt="의료진"
                      className="w-full h-[200px] md:h-[230px]"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-text-main mb-3">
                한양방 협진 시스템으로<br />
                빠르고 정확한 치료
              </h3>
              <p className="text-base text-text-body leading-[1.7] mb-4">
                한의사와 정형외과 전문의가 함께 진단하고 치료합니다.
                정확한 원인 파악과 체계적인 치료 프로그램으로 빠른 회복을 돕습니다.
              </p>
              <Link
                href="/doctors"
                className="inline-flex items-center gap-1 text-primary font-bold hover:underline"
              >
                의료진 소개 보기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 12. 시설·장비 간략 ── */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <SectionHeader title="최신 의료장비" centered={false} />
              <p className="text-base text-text-body leading-[1.7] mb-4">
                체외충격파, 초음파 진단기, 디지털 X-RAY 등 최신 장비를 갖추고
                정확한 진단과 효과적인 치료를 제공합니다.
              </p>
              <Link
                href="/equipment"
                className="inline-flex items-center gap-1 text-primary font-bold hover:underline"
              >
                장비 안내 보기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1">
              <SectionHeader title="쾌적한 병원 시설" centered={false} />
              <p className="text-base text-text-body leading-[1.7] mb-4">
                넓고 쾌적한 치료실, 프라이빗 입원실, 편안한 대기 공간까지
                환자분의 편안한 치료와 회복을 위한 환경을 갖추었습니다.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-primary font-bold hover:underline"
              >
                시설 안내 보기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {IMAGES.facility.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden">
                <HospitalImage
                  src={src}
                  alt={`병원 시설 ${i + 1}`}
                  className="w-full h-[120px] md:h-[160px]"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 13. 최종 CTA ── */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <AlertTriangle className="w-10 h-10 mx-auto mb-4 text-white/80" />
            <h3 className="text-2xl md:text-[30px] font-bold mb-3">
              교통사고, 빠른 치료가 중요합니다
            </h3>
            <p className="text-white/80 text-base leading-[1.8] max-w-[500px] mx-auto mb-8">
              사고 후 증상이 없더라도 72시간 내 검사를 받으세요.
              자동차보험으로 본인부담금 없이 치료 가능합니다.
            </p>
            <div className="flex flex-col min-[400px]:flex-row gap-3 justify-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {HOSPITAL.phone}
              </a>
              <a
                href={HOSPITAL.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                카카오톡 상담
              </a>
            </div>
            <p className="text-white/60 text-[15px] mt-4">
              365일 진료 · 야간 20시까지 · 점심시간 없음
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
