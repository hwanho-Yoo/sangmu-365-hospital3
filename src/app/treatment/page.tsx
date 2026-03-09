import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Leaf, Activity, Flame, Circle, Pill, Syringe, Hand, Package,
  StretchHorizontal, Zap, Crosshair, Phone, ArrowRight,
} from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { IMAGES } from '@/lib/imagePaths'
import { HOSPITAL } from '@/lib/constants'
import { treatments } from '@/lib/data/treatments'
import type { LucideIcon } from 'lucide-react'

const koreanIcons: Record<string, LucideIcon> = {
  acupuncture: Leaf,
  moxibustion: Flame,
  cupping: Circle,
  'herbal-medicine': Pill,
  pharmacopuncture: Syringe,
  'ultrasound-pharmacopuncture': Crosshair,
  chuna: Hand,
  'herbal-patch': Package,
}

const westernIcons: Record<string, LucideIcon> = {
  chiropractic: StretchHorizontal,
  'body-correction': Activity,
  shockwave: Zap,
  physiotherapy: Activity,
}

export const metadata: Metadata = {
  title: '치료 프로그램 | 상무365한방병원',
  description: '침, 추나, 약침, 한약, 도수치료, 체외충격파 등 한양방 통합 치료 프로그램. 환자 맞춤 협진 시스템.',
}

export default function TreatmentPage() {
  const korean = treatments.filter((t) => t.category === 'korean')
  const western = treatments.filter((t) => t.category === 'western')

  return (
    <>
      <SubPageHeader title="치료 프로그램" subtitle="TREATMENT" />

      {/* 소개 */}
      <section className="py-10 md:py-14">
        <Container narrow>
          <SectionHeader subtitle="TREATMENT" title="한양방 통합 치료 프로그램" />
          <p className="text-base text-text-body leading-[1.8] text-center">
            상무365한방병원은 한의사와 정형외과 전문의가 함께 진단하고 치료하는 협진 시스템을 운영합니다.
            환자 한분 한분의 상태에 맞는 최적의 치료 계획을 수립하여 빠른 회복을 돕습니다.
          </p>
        </Container>
      </section>

      {/* 한방치료 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="KOREAN MEDICINE" title="한방치료" />

          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            {/* 이미지 */}
            <div className="md:w-[35%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden mb-4">
                <HospitalImage
                  src={IMAGES.treatment.korean}
                  alt="한방 침 치료"
                  className="w-full h-[240px] md:h-[300px]"
                />
              </div>
              <p className="text-[15px] text-text-muted text-center">
                전통 한의학의 원리와 현대 의료 기술을 결합한 치료
              </p>
            </div>

            {/* 치료 리스트 */}
            <div className="flex-1">
              <div className="space-y-0">
                {korean.map((t) => {
                  const Icon = koreanIcons[t.id] || Leaf
                  return (
                    <div key={t.id} className="flex items-start gap-4 py-5 border-b border-border-light last:border-b-0">
                      <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-base font-bold text-text-main">{t.name}</p>
                          {t.link && (
                            <Link href={t.link} className="text-primary text-[14px] font-medium hover:underline flex items-center gap-0.5">
                              자세히 <ArrowRight className="w-3 h-3" />
                            </Link>
                          )}
                        </div>
                        <p className="text-base text-text-body mt-1 leading-[1.7]">{t.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 양방·협진치료 */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="WESTERN &amp; COMBINED" title="양방·협진치료" />

          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-10">
            {/* 이미지 */}
            <div className="md:w-[35%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden mb-4">
                <HospitalImage
                  src={IMAGES.treatment.western}
                  alt="도수치료 장면"
                  className="w-full h-[240px] md:h-[300px]"
                />
              </div>
              <p className="text-[15px] text-text-muted text-center">
                정형외과 전문의와 전문 치료사의 정밀 치료
              </p>
            </div>

            {/* 치료 리스트 */}
            <div className="flex-1">
              <div className="space-y-0">
                {western.map((t) => {
                  const Icon = westernIcons[t.id] || Activity
                  return (
                    <div key={t.id} className="flex items-start gap-4 py-5 border-b border-border-light last:border-b-0">
                      <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-base font-bold text-text-main">{t.name}</p>
                        <p className="text-base text-text-body mt-1 leading-[1.7]">{t.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 협진 안내 + CTA */}
      <section className="py-10 md:py-14 bg-primary-subtle">
        <Container narrow>
          <div className="text-center max-w-[640px] mx-auto">
            <Badge className="mb-4">한양방 협진</Badge>
            <h3 className="text-2xl md:text-[28px] font-bold text-text-main mb-4">
              어떤 치료가 필요한지 모르겠다면?
            </h3>
            <p className="text-base text-text-body leading-[1.8] mb-8">
              먼저 내원하시면 한의사와 정형외과 전문의가 함께 진단하여
              환자분께 가장 적합한 치료 방법을 안내해 드립니다.
              교통사고 환자는 자동차보험으로 본인부담금 없이 치료 가능합니다.
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
