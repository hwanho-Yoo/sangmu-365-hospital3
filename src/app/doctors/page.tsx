import type { Metadata } from 'next'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { doctors } from '@/lib/data/doctors'
import { IMAGES } from '@/lib/imagePaths'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: '의료진 소개 | 상무365한방병원',
}

export default function DoctorsPage() {
  return (
    <>
      <SubPageHeader title="의료진 소개" subtitle="MEDICAL TEAM" />

      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="MEDICAL TEAM" title="의료진 소개" />

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
    </>
  )
}
