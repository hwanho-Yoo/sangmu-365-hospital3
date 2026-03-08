import type { Metadata } from 'next'
import Link from 'next/link'
import { Leaf, Activity, Flame, Circle, Pill, Syringe, Hand, Package, StretchHorizontal, Zap } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { treatments } from '@/lib/data/treatments'
import type { LucideIcon } from 'lucide-react'

const koreanIcons: Record<string, LucideIcon> = {
  acupuncture: Leaf,
  moxibustion: Flame,
  cupping: Circle,
  'herbal-medicine': Pill,
  pharmacopuncture: Syringe,
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
}

export default function TreatmentPage() {
  const korean = treatments.filter((t) => t.category === 'korean')
  const western = treatments.filter((t) => t.category === 'western')

  return (
    <>
      <SubPageHeader title="치료 프로그램" subtitle="TREATMENT" />

      {/* 한방치료 */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="KOREAN MEDICINE" title="한방치료" />
          <div className="divide-y divide-border-light">
            {korean.map((t) => {
              const Icon = koreanIcons[t.id] || Leaf
              return (
                <div key={t.id} className="flex items-center gap-4 py-5">
                  <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-text-main">{t.name}</p>
                    <p className="text-[15px] text-text-body mt-1">{t.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 양방·협진치료 */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <SectionHeader subtitle="WESTERN &amp; COMBINED" title="양방·협진치료" />
          <div className="divide-y divide-border-light">
            {western.map((t) => {
              const Icon = westernIcons[t.id] || Activity
              return (
                <div key={t.id} className="flex items-center gap-4 py-5">
                  <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-text-main">{t.name}</p>
                    <p className="text-[15px] text-text-body mt-1">{t.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/reservation"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold text-base hover:bg-primary-hover transition-colors"
            >
              진료예약 하기
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
