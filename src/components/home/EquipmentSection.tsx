import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import HospitalImage from '@/components/ui/HospitalImage'
import Badge from '@/components/ui/Badge'
import { equipmentList } from '@/lib/data/equipment'
import { IMAGES } from '@/lib/imagePaths'

export default function EquipmentSection() {
  return (
    <section className="py-10 md:py-16 bg-bg-section">
      <Container>
        <SectionHeader subtitle="EQUIPMENT" title="프리미엄 의료장비" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {equipmentList.map((eq) => (
            <div
              key={eq.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <HospitalImage
                src={IMAGES.equipment[eq.id as keyof typeof IMAGES.equipment] || ''}
                alt={`${eq.name} 장비`}
                className="w-full h-[140px] md:h-[180px]"
              />
              <div className="p-4 md:p-5">
                <p className="text-[15px] font-bold text-text-main mb-1">{eq.name}</p>
                <p className="text-[13px] text-text-muted mb-2">{eq.model}</p>
                <Badge variant="muted" className="mb-2">{eq.manufacturer}</Badge>
                <p className="text-[13px] text-text-body line-clamp-2">{eq.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
