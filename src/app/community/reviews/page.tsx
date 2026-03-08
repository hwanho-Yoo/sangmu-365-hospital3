import { Star } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import { reviews } from '@/lib/data/reviews'

export default function ReviewsPage() {
  return (
    <>
      <SubPageHeader title="치료후기" subtitle="REVIEWS" />

      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="REVIEWS" title="치료후기" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border border-border-light rounded-xl p-6"
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
                  <p className="text-sm text-text-body leading-[1.7] -mt-3 pl-1">
                    {review.content}
                  </p>
                </div>

                <div className="text-[13px] text-text-muted">
                  {review.author} · {review.date.slice(0, 7).replace('-', '.')}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
