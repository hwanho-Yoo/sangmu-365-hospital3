import type { Metadata } from 'next'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { notices } from '@/lib/data/notices'
import clsx from 'clsx'

const categoryColors: Record<string, string> = {
  '공지': 'bg-primary-light text-primary',
  '안내': 'bg-bg-section text-text-muted',
  '소식': 'bg-bg-section text-text-muted',
  '이벤트': 'bg-success/10 text-success',
}

export const metadata: Metadata = {
  title: '공지사항 | 상무365한방병원',
}

export default function NoticePage() {
  return (
    <>
      <SubPageHeader title="공지사항" subtitle="NOTICE" />

      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="NOTICE" title="공지사항" />

          <div className="divide-y divide-border-light">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="flex items-center gap-3 py-4 hover:bg-bg-section transition-colors px-2 -mx-2 rounded"
              >
                <span
                  className={clsx(
                    'inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium shrink-0',
                    categoryColors[notice.category] || 'bg-bg-section text-text-muted'
                  )}
                >
                  {notice.category}
                </span>
                <span className="text-sm text-text-main flex-1 truncate">{notice.title}</span>
                <span className="text-[13px] text-text-muted shrink-0">
                  {notice.date.replace(/-/g, '.')}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
