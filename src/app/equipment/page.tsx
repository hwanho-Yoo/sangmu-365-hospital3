import { CheckCircle } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { equipmentList } from '@/lib/data/equipment'

export default function EquipmentPage() {
  return (
    <>
      <SubPageHeader title="의료장비" subtitle="EQUIPMENT" />

      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="EQUIPMENT" title="의료장비 안내" />

          <div className="space-y-10 md:space-y-12">
            {equipmentList.map((eq, i) => (
              <div
                key={eq.id}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 items-center`}
              >
                {/* Image */}
                <div className="md:w-[40%] w-full shrink-0">
                  <div className="rounded-xl overflow-hidden">
                    <HospitalImage
                      src=""
                      alt={`${eq.name} 장비`}
                      className="w-full h-[200px] md:h-[260px]"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <Badge variant="muted" className="mb-2">{eq.manufacturer}</Badge>
                  <h3 className="text-xl font-bold text-text-main">{eq.name}</h3>
                  <p className="text-sm text-text-muted">{eq.model}</p>
                  <p className="text-[15px] text-text-body mt-3 leading-[1.7]">{eq.description}</p>
                  <ul className="mt-3 space-y-2">
                    {eq.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <CheckCircle className="w-[18px] h-[18px] text-primary shrink-0" strokeWidth={2} />
                        <span className="text-sm text-text-body">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
