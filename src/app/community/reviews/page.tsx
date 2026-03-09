import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, Phone } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import { reviews } from '@/lib/data/reviews'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '치료후기 | 상무365한방병원',
  description: '상무365한방병원 환자 치료후기. 교통사고, 척추·관절, 도수치료, 한방치료 후기.',
}

export default function ReviewsPage() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <>
      <SubPageHeader title="치료후기" subtitle="REVIEWS" />

      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="PATIENT REVIEWS" title="치료후기" />

          {/* 평균 평점 */}
          <div className="flex items-center justify-center gap-4 mb-10 bg-primary-subtle rounded-xl p-5">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">{avgRating}</p>
              <div className="flex gap-0.5 mt-1 justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
            </div>
            <div className="border-l border-primary/20 pl-4">
              <p className="text-base text-text-body">
                총 <strong className="text-text-main">{reviews.length}건</strong>의 후기
              </p>
              <p className="text-[14px] text-text-muted mt-0.5">환자분들의 소중한 후기입니다</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border border-border-light rounded-xl p-6 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-primary fill-primary' : 'text-border-main'}`}
                      />
                    ))}
                  </div>
                  <Badge variant="muted">{review.treatment}</Badge>
                </div>

                <div className="mb-4">
                  <span className="text-primary/20 text-3xl font-serif leading-none">&ldquo;</span>
                  <p className="text-base text-text-body leading-[1.8] -mt-3 pl-1">
                    {review.content}
                  </p>
                </div>

                <div className="text-[15px] text-text-muted">
                  {review.author} · {review.date.slice(0, 7).replace('-', '.')}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-primary-subtle">
        <Container narrow>
          <div className="text-center max-w-[680px] mx-auto">
            <h3 className="text-2xl md:text-[28px] font-bold text-text-main mb-4">
              통증 고민, 상담받아 보세요
            </h3>
            <p className="text-base text-text-body leading-[1.8] mb-8">
              교통사고 환자는 자동차보험으로 본인부담금 없이 치료 가능합니다.
            </p>
            <div className="flex flex-col min-[400px]:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-lg font-bold text-base hover:bg-primary-hover transition-colors"
              >
                <Phone className="w-5 h-5" />
                전화상담 {HOSPITAL.phone}
              </a>
              <Link
                href="/reservation"
                className="inline-flex items-center px-7 py-3.5 border-2 border-primary text-primary rounded-lg font-bold text-base hover:bg-primary hover:text-white transition-colors"
              >
                진료예약 하기
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
