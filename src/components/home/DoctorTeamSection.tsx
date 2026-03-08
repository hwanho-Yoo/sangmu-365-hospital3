import Link from 'next/link'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import HospitalImage from '@/components/ui/HospitalImage'
import { doctors } from '@/lib/data/doctors'

export default function DoctorTeamSection() {
  return (
    <section className="py-10 md:py-16 bg-bg-section">
      <Container>
        <SectionHeader subtitle="MEDICAL TEAM" title="전문의 5인 협진 시스템" />

        {/* Desktop: row, Mobile: horizontal scroll */}
        <div className="flex gap-4 md:gap-5 overflow-x-auto pb-4 md:pb-0 md:overflow-visible md:justify-center scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
          {doctors.map((doctor) => (
            <Link
              key={doctor.id}
              href="/doctors"
              className="flex-shrink-0 w-[160px] md:w-[200px] snap-start group"
            >
              <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-1">
                <HospitalImage
                  src=""
                  alt={`${doctor.name} 의료진`}
                  className="w-full h-[200px] md:h-[240px]"
                />
                <div className="p-4 text-center">
                  <p className="text-base font-bold text-text-main">{doctor.name}</p>
                  <p className="text-[13px] text-primary font-medium">{doctor.position}</p>
                  <p className="text-xs text-text-muted truncate mt-1">{doctor.specialty[0]}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/doctors" className="text-sm text-primary font-medium hover:underline">
            의료진 전체보기 →
          </Link>
        </div>
      </Container>
    </section>
  )
}
