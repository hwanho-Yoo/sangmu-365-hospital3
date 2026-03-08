'use client'

import Link from 'next/link'
import { Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import { reviews } from '@/lib/data/reviews'

export default function ReviewSection() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionHeader subtitle="REVIEWS" title="환자분들의 치료 후기" />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white border border-border-light rounded-xl p-6 min-h-[220px] flex flex-col">
                {/* Stars + badge */}
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

                {/* Content */}
                <div className="flex-1 mb-4">
                  <span className="text-primary/20 text-3xl font-serif leading-none">&ldquo;</span>
                  <p className="text-sm text-text-body leading-[1.7] line-clamp-4 -mt-3 pl-1">
                    {review.content}
                  </p>
                </div>

                {/* Author */}
                <div className="text-[13px] text-text-muted">
                  {review.author} · {review.date.slice(0, 7).replace('-', '.')}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-2">
          <Link href="/community/reviews" className="text-sm text-primary font-medium hover:underline">
            후기 더보기 →
          </Link>
        </div>
      </Container>
    </section>
  )
}
