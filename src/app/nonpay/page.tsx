import type { Metadata } from 'next'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { HOSPITAL } from '@/lib/constants'

const items = [
  { category: '추나요법', name: '추나 (1회)', price: '통합 50,000원', note: '' },
  { category: '약침', name: '약침치료 (1회)', price: '통합 30,000원', note: '' },
  { category: '한약', name: '첩약 (20일)', price: '300,000원~', note: '처방에 따라 상이' },
  { category: '도수치료', name: '도수치료 (1회)', price: '50,000원', note: '' },
  { category: '체외충격파', name: '집중형 (1회)', price: '50,000원', note: '' },
  { category: '체외충격파', name: '방사형 (1회)', price: '30,000원', note: '' },
  { category: '매선', name: '매선치료 (1회)', price: '100,000원~', note: '부위에 따라 상이' },
  { category: '진단서', name: '일반진단서', price: '20,000원', note: '' },
  { category: '진단서', name: '통원확인서', price: '3,000원', note: '' },
]

export const metadata: Metadata = {
  title: '비급여 안내 | 상무365한방병원',
}

export default function NonpayPage() {
  return (
    <>
      <SubPageHeader title="비급여 안내" subtitle="NON-COVERED" />

      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="NON-COVERED" title="비급여 진료비 안내" />
          <p className="text-[15px] text-text-muted text-center mb-8">
            의료법 제45조 및 시행규칙 제42조의2에 의거하여 비급여 진료비용을 안내합니다.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-bg-section">
                  <th className="text-left text-[15px] font-medium text-text-muted px-4 py-3">구분</th>
                  <th className="text-left text-[15px] font-medium text-text-muted px-4 py-3">항목</th>
                  <th className="text-right text-[15px] font-medium text-text-muted px-4 py-3">가격</th>
                  <th className="text-left text-[15px] font-medium text-text-muted px-4 py-3">비고</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={i} className="border-b border-border-light">
                    <td className="text-[15px] text-text-body px-4 py-3">{item.category}</td>
                    <td className="text-[15px] text-text-body px-4 py-3">{item.name}</td>
                    <td className="text-[15px] text-text-main font-medium text-right px-4 py-3">{item.price}</td>
                    <td className="text-[15px] text-text-muted px-4 py-3">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {items.map((item, i) => (
              <div key={i} className="border border-border-light rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-text-muted">{item.category}</span>
                    <p className="text-[15px] font-medium text-text-main">{item.name}</p>
                  </div>
                  <span className="text-[15px] font-bold text-primary">{item.price}</span>
                </div>
                {item.note && (
                  <p className="text-sm text-text-muted mt-1">{item.note}</p>
                )}
              </div>
            ))}
          </div>

          <p className="text-[15px] text-text-muted mt-6">
            ※ 상기 금액은 변동될 수 있으며, 자세한 사항은 원무과({HOSPITAL.phone})로 문의해 주세요.
          </p>
        </Container>
      </section>
    </>
  )
}
