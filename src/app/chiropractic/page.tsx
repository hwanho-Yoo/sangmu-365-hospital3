import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import HospitalImage from '@/components/ui/HospitalImage'

const chiroPoints = [
  '척추·관절 통증 개선',
  '자세 불균형 교정',
  '수술 후 재활',
  '교통사고 후유증 치료',
]

const posturePoints = [
  '골반 틀어짐 교정',
  '척추측만 개선',
  '거북목·일자목 교정',
  '체형분석 검사',
]

export const metadata: Metadata = {
  title: '도수치료·체형교정 | 상무365한방병원',
}

export default function ChiropracticPage() {
  return (
    <>
      <SubPageHeader title="도수치료·체형교정" subtitle="MANUAL THERAPY" />

      {/* 도수치료 */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <SectionHeader subtitle="MANUAL THERAPY" title="도수치료" centered={false} />
              <p className="text-[15px] text-text-body leading-[1.8] mb-6">
                도수치료는 전문 치료사가 손으로 직접 근육과 관절을 교정하는 치료법입니다.
                약물이나 수술 없이 통증의 원인을 근본적으로 해결합니다.
              </p>
              <ul className="space-y-3">
                {chiroPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <CheckCircle className="w-[18px] h-[18px] text-primary shrink-0" strokeWidth={2} />
                    <span className="text-[15px] text-text-body">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-[42%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage src="" alt="도수치료" className="w-full h-[220px] md:h-[320px]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 체형교정 */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <SectionHeader subtitle="POSTURE CORRECTION" title="체형교정" centered={false} />
              <p className="text-[15px] text-text-body leading-[1.8] mb-6">
                틀어진 체형은 만성 통증의 원인이 됩니다. 정밀 검사를 통해 체형 불균형을 진단하고,
                추나요법과 도수치료를 병행하여 바른 체형으로 교정합니다.
              </p>
              <ul className="space-y-3">
                {posturePoints.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <CheckCircle className="w-[18px] h-[18px] text-primary shrink-0" strokeWidth={2} />
                    <span className="text-[15px] text-text-body">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-[42%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage src="" alt="체형교정 치료" className="w-full h-[220px] md:h-[320px]" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
