'use client'

import { useState } from 'react'
import { CircleHelp, ChevronDown } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { faqList } from '@/lib/data/faq'
import clsx from 'clsx'

export default function FaqPage() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <>
      <SubPageHeader title="자주 묻는 질문" subtitle="FAQ" />

      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="FAQ" title="자주 묻는 질문" />

          <div className="divide-y divide-border-light max-w-[800px] mx-auto">
            {faqList.map((faq) => {
              const isOpen = openId === faq.id
              return (
                <div key={faq.id}>
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex items-center gap-3 w-full py-4 text-left cursor-pointer"
                  >
                    <CircleHelp className="w-[18px] h-[18px] text-primary shrink-0" strokeWidth={2} />
                    <span className="text-base font-medium text-text-main flex-1">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={clsx(
                        'w-[18px] h-[18px] text-text-muted shrink-0 transition-transform duration-200',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </button>

                  <div
                    className={clsx(
                      'overflow-hidden transition-all duration-200',
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <p className="text-base text-text-body leading-[1.8] pb-4 pl-[30px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
