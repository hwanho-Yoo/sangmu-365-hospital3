import type { Metadata } from 'next'
import { Phone, CheckCircle, Shield, Clock, Stethoscope, Users } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { IMAGES } from '@/lib/imagePaths'
import { HOSPITAL } from '@/lib/constants'

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

const treatmentMethods = [
  {
    name: '침·약침치료',
    desc: '경혈을 자극하여 통증을 완화하고 기혈 순환을 촉진합니다. 초음파유도하약침으로 정확한 부위에 시술합니다.',
  },
  {
    name: '추나요법',
    desc: '사고 충격으로 틀어진 척추와 관절을 교정합니다. 구조적 원인을 해결하여 재발을 방지합니다.',
  },
  {
    name: '한약치료',
    desc: '손상된 근육·인대·신경의 회복을 돕는 맞춤 한약을 처방합니다. 내부적 치유력을 높여줍니다.',
  },
  {
    name: '도수치료',
    desc: '전문 치료사가 직접 근골격계를 교정하고 긴장된 근육을 이완시킵니다.',
  },
  {
    name: '체외충격파',
    desc: '만성화된 통증 부위에 충격파를 가해 조직 재생과 혈류 개선을 촉진합니다.',
  },
  {
    name: '물리치료',
    desc: '전기자극, 온열치료, 견인치료 등으로 통증을 완화하고 기능 회복을 돕습니다.',
  },
]

const insurancePoints = [
  '자동차보험으로 본인부담금 없이 치료 가능합니다',
  '사고 후 14일 이내 내원을 권장합니다 (늦어도 치료 가능)',
  '상대방 보험사 동의 없이도 우선 치료 가능합니다',
  '한방치료(침, 추나, 한약)와 양방치료 모두 보험 적용됩니다',
  '입원 치료도 자동차보험 적용 가능합니다',
  '동승자·보행자 사고도 자동차보험 적용됩니다',
]

export const metadata: Metadata = {
  title: '교통사고 후유증 치료 | 상무365한방병원',
  description: '교통사고 후유증 치료 전문. 자동차보험 본인부담금 0원. 한의사+정형외과 전문의 협진. 365일 진료, 야간 20시. 062-385-9000',
}

export default function TrafficAccidentPage() {
  return (
    <>
      <SubPageHeader title="교통사고 후유증" subtitle="TRAFFIC ACCIDENT" />

      {/* 핵심 메시지 + CTA */}
      <section className="py-10 md:py-14 bg-primary text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1">
              <Badge className="bg-white/20 text-white border-0 mb-4">자동차보험 적용</Badge>
              <h2 className="text-[24px] md:text-[32px] font-bold leading-snug mb-4">
                교통사고 후유증,<br />
                본인부담금 0원으로<br />
                치료받으세요
              </h2>
              <p className="text-white/80 text-base leading-[1.8] mb-6">
                사고 직후 통증이 없더라도 반드시 검사를 받으셔야 합니다.
                시간이 지나면서 후유증이 심해질 수 있습니다.
                상무365한방병원은 365일 쉬지 않고 진료합니다.
              </p>
              <div className="flex flex-col min-[400px]:flex-row gap-3">
                <a
                  href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary rounded-lg font-bold text-base hover:bg-gray-50 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  전화상담 {HOSPITAL.phone}
                </a>
                <a
                  href={HOSPITAL.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-white/40 text-white rounded-lg font-bold text-base hover:bg-white/10 transition-colors"
                >
                  카카오톡 상담
                </a>
              </div>
            </div>
            <div className="md:w-[42%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage
                  src={IMAGES.subpage.traffic}
                  alt="교통사고 치료"
                  className="w-full h-[260px] md:h-[340px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 왜 빨리 와야 하는가 */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader title="교통사고, 왜 빨리 치료해야 할까요?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {urgentReasons.map((r) => (
              <div key={r.title} className="border border-border-light rounded-xl p-6 flex items-start gap-4">
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

      {/* 증상 체크 */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <SectionHeader title="이런 증상이 있으신가요?" />
          <p className="text-base text-text-body text-center mb-8 -mt-2">
            아래 증상 중 하나라도 해당되면 교통사고 후유증일 수 있습니다
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {symptoms.map((s) => (
              <div
                key={s.title}
                className="bg-white border-l-[3px] border-l-primary rounded-lg p-5"
              >
                <p className="text-base font-bold text-text-main">{s.title}</p>
                <p className="text-[15px] text-text-muted mt-1 leading-[1.6]">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 치료 프로세스 */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader title="교통사고 치료 프로세스" />
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

      {/* 치료 방법 + 이미지 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader title="교통사고 후유증 치료 방법" />
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            {/* 치료법 리스트 */}
            <div className="flex-1">
              <div className="space-y-0">
                {treatmentMethods.map((t) => (
                  <div key={t.name} className="flex items-start gap-4 py-4 border-b border-border-light last:border-b-0">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-text-main">{t.name}</p>
                      <p className="text-base text-text-body mt-1 leading-[1.7]">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* 이미지 */}
            <div className="md:w-[38%] w-full shrink-0 space-y-4">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage
                  src={IMAGES.traffic.treatment}
                  alt="교통사고 추나 치료"
                  className="w-full h-[200px] md:h-[220px]"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <HospitalImage
                  src={IMAGES.traffic.xray}
                  alt="X-ray 진단 상담"
                  className="w-full h-[200px] md:h-[220px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 자동차보험 안내 — 강조 */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="bg-primary-subtle rounded-2xl p-6 md:p-10 max-w-[800px] mx-auto">
            <div className="text-center mb-6">
              <Badge className="mb-3">꼭 알아두세요</Badge>
              <h3 className="text-2xl md:text-[28px] font-bold text-text-main">
                자동차보험 치료 안내
              </h3>
            </div>
            <ul className="space-y-3 mb-8">
              {insurancePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-[20px] h-[20px] text-success shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-base text-text-body leading-[1.7]">{point}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-hover transition-colors"
              >
                <Phone className="w-5 h-5" />
                지금 바로 상담하기 {HOSPITAL.phone}
              </a>
              <p className="text-[15px] text-text-muted mt-3">
                365일 진료 · 야간 20시까지 · 점심시간 없음
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
