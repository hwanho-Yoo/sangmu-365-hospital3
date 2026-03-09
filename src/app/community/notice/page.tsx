import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { notices } from '@/lib/data/notices'
import { HOSPITAL } from '@/lib/constants'
import clsx from 'clsx'

const categoryColors: Record<string, string> = {
  '공지': 'bg-primary-light text-primary',
  '안내': 'bg-bg-section text-text-muted',
  '소식': 'bg-bg-section text-text-muted',
  '이벤트': 'bg-success/10 text-success',
}

export const metadata: Metadata = {
  title: '공지사항 | 상무365한방병원',
  description: '상무365한방병원 공지사항 및 병원 소식.',
}

export default function NoticePage() {
  return (
    <>
      <SubPageHeader title="공지사항" subtitle="NOTICE" />

      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="NOTICE" title="공지사항" />

          {/* Desktop */}
          <div className="hidden md:block">
            <div className="bg-primary text-white rounded-t-lg px-5 py-3 flex">
              <span className="w-20 text-[15px] font-bold">구분</span>
              <span className="flex-1 text-[15px] font-bold">제목</span>
              <span className="w-28 text-[15px] font-bold text-right">날짜</span>
            </div>
            <div className="divide-y divide-border-light border border-t-0 border-border-light rounded-b-lg">
              {notices.map((notice) => (
                <div key={notice.id} className="flex items-center px-5 py-4 hover:bg-bg-section transition-colors">
                  <span className="w-20 shrink-0">
                    <span
                      className={clsx(
                        'inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-medium',
                        categoryColors[notice.category] || 'bg-bg-section text-text-muted'
                      )}
                    >
                      {notice.category}
                    </span>
                  </span>
                  <span className="text-[15px] text-text-main flex-1">{notice.title}</span>
                  <span className="text-[15px] text-text-muted w-28 text-right shrink-0">
                    {notice.date.replace(/-/g, '.')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden divide-y divide-border-light">
            {notices.map((notice) => (
              <div key={notice.id} className="py-4">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={clsx(
                      'inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium',
                      categoryColors[notice.category] || 'bg-bg-section text-text-muted'
                    )}
                  >
                    {notice.category}
                  </span>
                  <span className="text-[13px] text-text-muted">{notice.date.replace(/-/g, '.')}</span>
                </div>
                <p className="text-[15px] text-text-main">{notice.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold text-base hover:bg-primary-hover transition-colors"
            >
              <Phone className="w-5 h-5" />
              문의하기 {HOSPITAL.phone}
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
