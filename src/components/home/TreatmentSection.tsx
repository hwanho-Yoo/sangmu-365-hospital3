import Link from 'next/link'
import { Leaf, Activity } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { treatments } from '@/lib/data/treatments'

export default function TreatmentSection() {
  const korean = treatments.filter((t) => t.category === 'korean')
  const western = treatments.filter((t) => t.category === 'western')

  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionHeader subtitle="TREATMENT" title="기본에 충실한 한방·양방 치료" />

        {/* Korean treatments */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-5 h-5 text-primary" />
            <h3 className="text-base font-bold text-text-main">한방치료</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {korean.map((t) => (
              <div
                key={t.id}
                className="flex items-center gap-3 p-3 md:p-4 rounded-lg border border-border-light hover:border-primary-light transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-medium text-text-main">{t.name}</p>
                  <p className="text-[15px] text-text-muted truncate">{t.description.slice(0, 20)}…</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Western treatments */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-primary" />
            <h3 className="text-base font-bold text-text-main">양방·협진치료</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {western.map((t) => (
              <div
                key={t.id}
                className="flex items-center gap-3 p-3 md:p-4 rounded-lg border border-border-light hover:border-primary-light transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-medium text-text-main">{t.name}</p>
                  <p className="text-[15px] text-text-muted truncate">{t.description.slice(0, 20)}…</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/treatment" className="text-[15px] text-primary font-medium hover:underline">
            치료 프로그램 자세히 →
          </Link>
        </div>
      </Container>
    </section>
  )
}
