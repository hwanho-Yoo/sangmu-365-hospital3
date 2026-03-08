import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { IMAGES } from '@/lib/imagePaths'

const keyPoints = [
  '자동차보험 적용 — 본인부담금 없음',
  '한방·양방 전문의 협진 진단',
  '침, 추나, 약침, 한약, 물리치료 통합 치료',
  '도수치료, 체외충격파 병행 가능',
  '365일 진료 — 사고 직후 바로 내원 가능',
]

export default function TrafficAccidentSection() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          {/* Text */}
          <div className="flex-[55] w-full">
            <Badge className="mb-4">핵심 특화 진료</Badge>
            <h2 className="text-[22px] md:text-[28px] font-bold text-text-main leading-snug mb-4">
              교통사고 후유증,<br />
              한방·양방 협진으로 치료합니다
            </h2>
            <p className="text-[15px] text-text-body leading-[1.8] mb-6">
              교통사고 후 목·허리 통증, 근육통, 두통, 어지러움 등 다양한 후유증이 발생할 수 있습니다.
              상무365한방병원은 한의사와 정형외과 전문의가 함께 진단하고 치료하는 협진 시스템으로 빠른 회복을 돕습니다.
            </p>
            <ul className="space-y-3 mb-8">
              {keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle className="w-[18px] h-[18px] text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-[15px] text-text-body">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/traffic-accident"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold text-[15px] hover:bg-primary-hover transition-colors"
            >
              교통사고 치료 자세히 보기 →
            </Link>
          </div>

          {/* Image */}
          <div className="flex-[45] w-full">
            <div className="rounded-xl overflow-hidden">
              <HospitalImage
                src={IMAGES.facility[0] || ''}
                alt="치료 장면"
                height={400}
                className="w-full h-[240px] md:h-[400px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
