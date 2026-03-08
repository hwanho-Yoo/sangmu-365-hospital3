import { Car, CheckCircle } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { HOSPITAL } from '@/lib/constants'

const symptoms = [
  { title: '목·어깨 통증', desc: '사고 후 목이 뻣뻣하고 어깨가 아픈 증상' },
  { title: '허리·골반 통증', desc: '허리가 아프고 앉아있기 힘든 증상' },
  { title: '두통·어지러움', desc: '만성 두통, 어지러움, 이명' },
  { title: '손발 저림', desc: '팔다리가 저리고 감각이 둔해지는 증상' },
  { title: '근육통·관절통', desc: '전신 근육통, 관절 움직임 제한' },
  { title: '수면장애·피로', desc: '불면, 만성 피로, 집중력 저하' },
]

const steps = [
  { num: '01', title: '내원 및 접수', desc: '사고 관련 서류 지참\n자동차보험 접수' },
  { num: '02', title: '정밀 검사', desc: 'X-RAY, 초음파 검사\n정확한 손상 부위 진단' },
  { num: '03', title: '협진 진료', desc: '한의사 + 정형외과 전문의\n맞춤 치료 계획 수립' },
  { num: '04', title: '통합 치료', desc: '침, 추나, 한약, 도수치료\n체외충격파 등 복합 치료' },
]

const treatmentMethods = [
  { name: '침·약침치료', desc: '경혈을 자극하여 통증을 완화하고 기혈 순환을 촉진합니다' },
  { name: '추나요법', desc: '틀어진 척추와 관절을 교정하여 통증의 원인을 해결합니다' },
  { name: '한약치료', desc: '손상된 근육과 인대의 회복을 돕는 맞춤 한약을 처방합니다' },
  { name: '도수치료', desc: '전문 치료사가 직접 근골격계를 교정합니다' },
  { name: '체외충격파', desc: '만성 통증 부위의 조직 재생을 촉진합니다' },
  { name: '물리치료', desc: '전기자극, 초음파 등으로 통증을 완화합니다' },
]

const insurancePoints = [
  '자동차보험으로 본인부담금 없이 치료 가능합니다',
  '사고 후 14일 이내 내원을 권장합니다',
  '상대방 보험사 동의 없이도 우선 치료 가능합니다',
  '한방치료와 양방치료 모두 보험 적용됩니다',
  '입원 치료도 자동차보험 적용 가능합니다',
]

export default function TrafficAccidentPage() {
  return (
    <>
      <SubPageHeader title="교통사고 후유증" subtitle="TRAFFIC ACCIDENT" />

      {/* Hero statement */}
      <section className="py-10 md:py-12 bg-primary-subtle">
        <Container narrow>
          <div className="text-center">
            <Car className="w-12 h-12 text-primary mx-auto" strokeWidth={1.5} />
            <h2 className="text-[22px] md:text-[26px] font-bold text-text-main mt-4">
              교통사고 후유증, 치료가 중요합니다
            </h2>
            <p className="text-[15px] text-text-body mt-3">
              자동차보험 적용으로 본인부담금 없이 치료받으실 수 있습니다
            </p>
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold text-[15px] mt-6 hover:bg-primary-hover transition-colors"
            >
              전화상담 {HOSPITAL.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* 증상 */}
      <section className="py-10 md:py-12">
        <Container>
          <SectionHeader title="이런 증상이 있으신가요?" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {symptoms.map((s) => (
              <div
                key={s.title}
                className="border border-border-light border-l-[3px] border-l-primary rounded-lg p-4 md:p-5"
              >
                <p className="text-[15px] font-bold text-text-main">{s.title}</p>
                <p className="text-[13px] text-text-muted mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 치료 프로세스 */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <SectionHeader title="교통사고 치료 프로세스" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-lg p-5 text-center">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto">
                  {step.num}
                </div>
                <p className="text-[15px] font-bold text-text-main mt-3">{step.title}</p>
                <p className="text-[13px] text-text-muted mt-2 whitespace-pre-line">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 치료 방법 */}
      <section className="py-10 md:py-12">
        <Container>
          <SectionHeader title="교통사고 후유증 치료 방법" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {treatmentMethods.map((t) => (
              <div key={t.name} className="flex items-start gap-4 p-4 border-b border-border-light">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[15px] font-medium text-text-main">{t.name}</p>
                  <p className="text-[13px] text-text-muted mt-0.5">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 자동차보험 안내 */}
      <section className="py-10 md:py-12 bg-primary-subtle">
        <Container narrow>
          <div className="bg-white rounded-xl p-6 md:p-8 max-w-[640px] mx-auto">
            <h3 className="text-lg font-bold text-text-main text-center mb-5">
              자동차보험 치료 안내
            </h3>
            <ul className="space-y-0">
              {insurancePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 py-2.5">
                  <CheckCircle className="w-[18px] h-[18px] text-success shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-text-body">{point}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-6">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold text-[15px] hover:bg-primary-hover transition-colors"
              >
                지금 바로 상담하기
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
