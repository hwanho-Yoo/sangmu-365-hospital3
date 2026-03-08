import type { Metadata } from 'next'
import { Sparkles } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'

const conditions = [
  '아토피 피부염',
  '여드름·흉터',
  '건선·습진',
  '두드러기',
  '탈모',
  '피부미용',
]

export const metadata: Metadata = {
  title: '피부진료 | 상무365한방병원',
}

export default function SkinPage() {
  return (
    <>
      <SubPageHeader title="피부진료" subtitle="DERMATOLOGY" />

      {/* 소개 */}
      <section className="py-10 md:py-14">
        <Container narrow>
          <SectionHeader subtitle="DERMATOLOGY" title="한방 피부진료" />
          <p className="text-base text-text-body leading-[1.8] text-center">
            한방 피부진료는 피부 증상의 외적 치료뿐 아니라 체질과 내부 원인을 함께 살펴
            근본적인 치료를 추구합니다. 한약, 약침, 외용제 등을 활용하여 다양한 피부질환을 치료합니다.
          </p>
        </Container>
      </section>

      {/* 진료 분야 */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <SectionHeader title="진료 분야" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {conditions.map((c) => (
              <div key={c} className="bg-white rounded-lg p-5 text-center">
                <Sparkles className="w-6 h-6 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-base font-bold text-text-main mt-2">{c}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
