import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { equipmentList } from '@/lib/data/equipment'
import { IMAGES } from '@/lib/imagePaths'

const conditions = [
  '오십견 (어깨 통증)',
  '테니스/골프 엘보',
  '족저근막염 (발바닥 통증)',
  '석회성 건염',
  '만성 목·허리 통증',
  '근막 통증 증후군',
]

export const metadata: Metadata = {
  title: '체외충격파 | 상무365한방병원',
}

export default function ShockwavePage() {
  const shockwaveEquipment = equipmentList.filter((e) => e.id === 'sd1' || e.id === 'mp100')

  return (
    <>
      <SubPageHeader title="체외충격파" subtitle="SHOCKWAVE THERAPY" />

      {/* 소개 */}
      <section className="py-10 md:py-14">
        <Container narrow>
          <SectionHeader subtitle="SHOCKWAVE THERAPY" title="체외충격파 치료" />
          <p className="text-base text-text-body leading-[1.8] text-center">
            체외충격파는 고에너지 충격파를 통증 부위에 전달하여 손상된 조직의 재생을 촉진하고
            통증을 해소하는 치료법입니다.
          </p>
        </Container>
      </section>

      {/* 장비 소개 */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {shockwaveEquipment.map((eq) => (
              <div key={eq.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <HospitalImage src={IMAGES.equipment[eq.id as keyof typeof IMAGES.equipment] || ''} alt={`${eq.name} 장비`} className="w-full h-[180px] md:h-[220px]" />
                <div className="p-5 md:p-6">
                  <Badge className="mb-2">프리미엄 장비</Badge>
                  <h3 className="text-lg font-bold text-text-main">{eq.name}</h3>
                  <p className="text-[15px] text-text-muted">{eq.model} · {eq.manufacturer}</p>
                  <p className="text-[15px] text-text-body mt-3 leading-[1.7]">{eq.description}</p>
                  <ul className="mt-3 space-y-1.5">
                    {eq.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
                        <span className="text-[15px] text-text-body">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 적응증 */}
      <section className="py-10 md:py-12">
        <Container>
          <SectionHeader title="이런 분께 추천합니다" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {conditions.map((c) => (
              <div key={c} className="flex items-center gap-2.5 px-4 py-3 border border-border-light rounded-lg">
                <CheckCircle className="w-5 h-5 text-success shrink-0" strokeWidth={2} />
                <span className="text-[15px] font-medium text-text-main">{c}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
