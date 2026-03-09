import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { doctors } from '@/lib/data/doctors'
import { IMAGES } from '@/lib/imagePaths'
import { HOSPITAL } from '@/lib/constants'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: '의료진 소개 | 상무365한방병원',
  description: '한의사 4인 + 정형외과 전문의 협진. 교통사고, 척추·관절, 체형교정, 피부 전문 의료진.',
}

export default function DoctorsPage() {
  return (
    <>
      <SubPageHeader title="의료진 소개" subtitle="MEDICAL TEAM" />

      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="MEDICAL TEAM" title="전문 의료진 소개" />
          <p className="text-base text-text-body text-center mb-10 leading-[1.8]">
            상무365한방병원은 <strong className="text-text-main">한의사 4인과 정형외과 전문의</strong>가 협진하여<br className="hidden sm:inline" />
            정확한 진단과 환자 맞춤 치료를 제공합니다.
          </p>

          <div className="space-y-10 md:space-y-12">
            {doctors.map((doctor, i) => (
              <div key={doctor.id}>
                <div
                  className={clsx(
                    'flex flex-col md:flex-row md:items-stretch gap-6 md:gap-10',
                    doctor.isRepresentative && 'bg-primary-subtle rounded-xl p-5 md:p-8'
                  )}
                >
                  {/* Image */}
                  <div className="md:w-[35%] shrink-0">
                    <div className="rounded-xl overflow-hidden h-[280px] md:h-[360px]">
                      <HospitalImage
                        src={IMAGES.doctors[doctor.id as keyof typeof IMAGES.doctors] || ''}
                        alt={`${doctor.name} 의료진`}
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <Badge>{doctor.position}</Badge>
                    <h3 className="text-2xl font-bold text-text-main mt-2">{doctor.name}</h3>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {doctor.specialty.map((s) => (
                        <span key={s} className="inline-block bg-bg-section text-text-body text-sm px-2.5 py-1 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-border-light my-4" />

                    <div className="space-y-3">
                      <div>
                        <p className="text-[15px] text-text-muted tracking-wide uppercase mb-1">학력</p>
                        {doctor.education.map((e) => (
                          <p key={e} className="text-[15px] text-text-body">{e}</p>
                        ))}
                      </div>
                      <div>
                        <p className="text-[15px] text-text-muted tracking-wide uppercase mb-1">경력</p>
                        {doctor.career.map((c) => (
                          <p key={c} className="text-[15px] text-text-body">{c}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {i < doctors.length - 1 && !doctor.isRepresentative && (
                  <div className="border-b border-border-light mt-10 md:mt-12" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-primary-subtle">
        <Container narrow>
          <div className="text-center max-w-[640px] mx-auto">
            <Badge className="mb-4">의료진</Badge>
            <h3 className="text-xl md:text-2xl font-bold text-text-main mb-4">
              전문 의료진에게 상담받으세요
            </h3>
            <p className="text-base text-text-body leading-[1.8] mb-8">
              어떤 치료가 필요한지 모르겠다면, 먼저 내원하시면<br className="hidden sm:inline" />
              한양방 전문의가 함께 진단하여 최적의 치료를 안내해 드립니다.
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
