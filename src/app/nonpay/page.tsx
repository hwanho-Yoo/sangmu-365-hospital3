import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
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
  { category: '피부미용', name: '미주안 스킨부스터 (1회)', price: '상담 후 결정', note: '' },
  { category: '피부미용', name: '슈링크 유니버스 (1회)', price: '상담 후 결정', note: '' },
  { category: '매선', name: '매선치료 (1회)', price: '100,000원~', note: '부위에 따라 상이' },
  { category: '진단서', name: '일반진단서', price: '20,000원', note: '' },
  { category: '진단서', name: '통원확인서', price: '3,000원', note: '' },
]

export const metadata: Metadata = {
  title: '비급여 안내 | 상무365한방병원',
  description: '비급여 진료비용 안내. 추나요법, 약침, 도수치료, 체외충격파 등.',
}

export default function NonpayPage() {
  return (
    <>
      <SubPageHeader title="비급여 안내" subtitle="NON-COVERED ITEMS" />

      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="NON-COVERED" title="비급여 진료비 안내" />
          <p className="text-[15px] text-text-muted text-center mb-8">
            의료법 제45조 및 시행규칙 제42조의2에 의거하여 비급여 진료비용을 안내합니다.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left text-[15px] font-bold px-5 py-3 rounded-tl-lg">구분</th>
                  <th className="text-left text-[15px] font-bold px-5 py-3">항목</th>
                  <th className="text-right text-[15px] font-bold px-5 py-3">가격</th>
                  <th className="text-left text-[15px] font-bold px-5 py-3 rounded-tr-lg">비고</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-bg-section' : 'bg-white'}>
                    <td className="text-base text-text-body px-5 py-3 font-medium">{item.category}</td>
                    <td className="text-base text-text-body px-5 py-3">{item.name}</td>
                    <td className="text-[15px] text-text-main font-bold text-right px-5 py-3">{item.price}</td>
                    <td className="text-[15px] text-text-muted px-5 py-3">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {items.map((item, i) => (
              <div key={i} className="border border-border-light rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[14px] text-text-muted">{item.category}</span>
                    <p className="text-base font-medium text-text-main">{item.name}</p>
                  </div>
                  <span className="text-[15px] font-bold text-primary">{item.price}</span>
                </div>
                {item.note && (
                  <p className="text-[14px] text-text-muted mt-1">{item.note}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-bg-section rounded-xl p-5">
            <p className="text-base text-text-body leading-[1.8]">
              <strong className="text-text-main">안내사항</strong><br />
              · 상기 금액은 변동될 수 있으며, 자세한 사항은 원무과로 문의해 주세요.<br />
              · 교통사고 환자는 자동차보험 적용으로 본인부담금이 없습니다.<br />
              · 실손보험 청구 가능 항목이 있으며, 보험사별로 상이할 수 있습니다.
            </p>
          </div>

          <div className="text-center mt-8">
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-lg font-bold text-base hover:bg-primary-hover transition-colors"
            >
              <Phone className="w-5 h-5" />
              원무과 문의 {HOSPITAL.phone}
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
