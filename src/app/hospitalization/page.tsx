import { Car, Bone, Activity, Moon, CheckCircle, Circle } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import HospitalImage from '@/components/ui/HospitalImage'
import { HOSPITAL } from '@/lib/constants'

const reasons = [
  { icon: Car, title: '교통사고 후유증', desc: '사고 후 통증이 심하거나 집중 치료가 필요한 경우' },
  { icon: Bone, title: '척추·관절 수술 후', desc: '수술 후 한방 재활치료가 필요한 경우' },
  { icon: Activity, title: '심한 통증', desc: '일상생활이 어려울 정도의 급성 통증' },
  { icon: Moon, title: '만성 질환 집중치료', desc: '외래 치료만으로 호전이 어려운 경우' },
]

const steps = [
  { num: '01', title: '진료 및 상담', desc: '전문의 진료 후\n입원 필요 여부 판단' },
  { num: '02', title: '입원 수속', desc: '원무과에서 입원 서류 작성\n보험 관련 안내' },
  { num: '03', title: '입원 치료', desc: '맞춤 치료 계획에 따라\n한양방 통합 치료 진행' },
]

const diningPoints = [
  '영양사 관리 하에 균형 잡힌 식단',
  '환자 상태에 맞는 맞춤 식이',
  '매끼 정성껏 준비하는 신선한 식사',
]

const checklist = [
  '신분증, 건강보험증',
  '세면도구, 실내화',
  '개인 복용 중인 약 (해당 시)',
  '교통사고 환자: 사고접수번호, 보험사 연락처',
  '편한 복장 (환의 제공)',
]

export default function HospitalizationPage() {
  return (
    <>
      <SubPageHeader title="입원안내" subtitle="HOSPITALIZATION" />

      {/* 소개 */}
      <section className="py-9 md:py-14">
        <Container narrow>
          <SectionHeader subtitle="HOSPITALIZATION" title="입원안내" />
          <p className="text-[15px] text-text-body leading-[1.8] text-center">
            상무365한방병원은 야간 및 공휴일에도 입원이 가능하며, 전담 간호팀이 환자분 한분 한분을 꼼꼼히 케어합니다.
            교통사고, 수술 후 재활, 통증 치료 등 다양한 입원 프로그램을 운영하고 있습니다.
          </p>
        </Container>
      </section>

      {/* 입원이 필요한 경우 */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <SectionHeader title="이런 경우 입원을 추천합니다" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white rounded-lg p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <r.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-text-main">{r.title}</p>
                  <p className="text-[13px] text-text-muted mt-1">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 입원 절차 */}
      <section className="py-10 md:py-12">
        <Container>
          <SectionHeader title="입원 절차" />
          <div className="grid grid-cols-3 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-lg border border-border-light p-5 text-center">
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

      {/* 365파인다이닝 */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <SectionHeader title="365파인다이닝 입원 식단" />
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="md:w-[45%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage src="" alt="입원 식단" className="w-full h-[200px] md:h-[280px]" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[15px] text-text-body leading-[1.8] mb-5">
                상무365한방병원은 입원 환자분의 빠른 회복을 위해 맛과 영양의 균형을 고려한 식단을 제공합니다.
                매끼 정성을 담아 준비하며, 개인별 건강 상태에 맞춘 식이 관리를 진행합니다.
              </p>
              <ul className="space-y-2.5">
                {diningPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <CheckCircle className="w-[18px] h-[18px] text-primary shrink-0" strokeWidth={2} />
                    <span className="text-sm text-text-body">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 입원 준비물 */}
      <section className="py-10 md:py-12">
        <Container narrow>
          <div className="border border-border-light rounded-xl p-6 md:p-7 max-w-[640px] mx-auto">
            <h3 className="text-base font-bold text-text-main mb-4">입원 시 준비물</h3>
            <ul className="space-y-2.5">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Circle className="w-3 h-3 text-primary fill-primary shrink-0" />
                  <span className="text-sm text-text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-8">
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold text-[15px] hover:bg-primary-hover transition-colors"
            >
              입원 상담하기
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
