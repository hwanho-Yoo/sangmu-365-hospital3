import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { equipmentList } from '@/lib/data/equipment'
import { IMAGES } from '@/lib/imagePaths'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '의료장비 | 상무365한방병원',
  description: '스위스 Storz Medical 체외충격파, 삼성메디슨 초음파, 디지털 X-ray 등 프리미엄 의료장비 보유.',
}

export default function EquipmentPage() {
  return (
    <>
      <SubPageHeader title="의료장비" subtitle="EQUIPMENT" />

      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="PREMIUM EQUIPMENT" title="프리미엄 의료장비" />
          <p className="text-base text-text-body text-center mb-10 leading-[1.8]">
            상무365한방병원은 <strong className="text-text-main">정확한 진단과 효과적인 치료</strong>를 위해<br className="hidden sm:inline" />
            세계적으로 검증된 프리미엄 의료장비를 보유하고 있습니다.
          </p>

          <div className="space-y-10 md:space-y-12">
            {equipmentList.map((eq, i) => (
              <div
                key={eq.id}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 items-center`}
              >
                {/* Image */}
                <div className="md:w-[42%] w-full shrink-0">
                  <div className="rounded-xl overflow-hidden bg-bg-section">
                    <HospitalImage
                      src={IMAGES.equipment[eq.id as keyof typeof IMAGES.equipment] || ''}
                      alt={`${eq.name} 장비`}
                      className="w-full h-[220px] md:h-[280px]"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <Badge variant="muted" className="mb-2">{eq.manufacturer}</Badge>
                  <h3 className="text-xl font-bold text-text-main">{eq.name}</h3>
                  <p className="text-[15px] text-text-muted">{eq.model}</p>
                  <p className="text-base text-text-body mt-3 leading-[1.8]">{eq.description}</p>
                  <ul className="mt-4 space-y-2">
                    {eq.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <CheckCircle className="w-[18px] h-[18px] text-primary shrink-0" strokeWidth={2} />
                        <span className="text-base text-text-body">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-primary-subtle">
        <Container narrow>
          <div className="text-center max-w-[640px] mx-auto">
            <Badge className="mb-4">의료장비</Badge>
            <h3 className="text-2xl md:text-[28px] font-bold text-text-main mb-4">
              최신 장비로 정확한 진단과 치료
            </h3>
            <p className="text-base text-text-body leading-[1.8] mb-8">
              프리미엄 의료장비와 전문 의료진의 협진으로<br className="hidden sm:inline" />
              통증의 원인을 정확히 파악하고 효과적으로 치료합니다.
            </p>
            <div className="flex flex-col min-[400px]:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-lg font-bold text-base hover:bg-primary-hover transition-colors"
              >
                <Phone className="w-5 h-5" />
                전화상담 {HOSPITAL.phone}
              </a>
              <Link
                href="/reservation"
                className="inline-flex items-center px-7 py-3.5 border-2 border-primary text-primary rounded-lg font-bold text-base hover:bg-primary hover:text-white transition-colors"
              >
                진료예약 하기
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
