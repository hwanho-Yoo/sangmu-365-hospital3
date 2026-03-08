import { Bus, Car, Clock } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import HospitalImage from '@/components/ui/HospitalImage'
import Badge from '@/components/ui/Badge'
import { HOSPITAL } from '@/lib/constants'

export default function DirectionsPage() {
  return (
    <>
      <SubPageHeader title="오시는길" subtitle="DIRECTIONS" />

      {/* 지도 */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="DIRECTIONS" title="오시는길" />
          <div className="rounded-xl overflow-hidden">
            <HospitalImage src="" alt="카카오맵 연동 예정" className="w-full h-[260px] md:h-[400px]" />
          </div>
          <p className="text-base font-bold text-text-main mt-4">{HOSPITAL.address}</p>
        </Container>
      </section>

      {/* 교통 안내 */}
      <section className="py-8 md:py-10 bg-bg-section">
        <Container narrow>
          <div className="max-w-[720px] mx-auto">
            <div className="flex items-start gap-3">
              <Bus className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-text-main">대중교통</p>
                <p className="text-sm text-text-body mt-1">상무지구 정류장 하차 후 도보 5분</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-6">
              <Car className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-text-main">자가용</p>
                <p className="text-sm text-text-body mt-1">
                  네비게이션 &apos;상무365한방병원&apos; 또는 &apos;H.K빌딩&apos; 검색
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 주차안내 */}
      <section className="py-8 md:py-10">
        <Container narrow>
          <div className="border border-border-light rounded-xl p-6 max-w-[560px] mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <Car className="w-5 h-5 text-primary" />
              <h3 className="text-base font-bold text-text-main">주차안내</h3>
            </div>
            <p className="text-[15px] font-bold text-text-main mt-3">{HOSPITAL.parking.name} (전용주차장)</p>
            <p className="text-sm text-text-body">{HOSPITAL.parking.address}</p>
            <p className="text-sm text-text-muted">{HOSPITAL.parking.note}</p>
            <Badge variant="muted" className="mt-3 !bg-success/10 !text-success">주차 가능</Badge>
          </div>
        </Container>
      </section>

      {/* 진료시간 */}
      <section className="py-8 md:py-10 bg-bg-section">
        <Container narrow>
          <div className="max-w-[480px] mx-auto">
            <div className="flex items-center gap-2 mb-5">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-base font-bold text-text-main">진료시간</h3>
            </div>

            <div className="divide-y divide-dashed divide-border-light">
              <div className="flex justify-between items-center py-3">
                <span className="text-[15px] text-text-body">평일</span>
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-medium">{HOSPITAL.hours.weekday}</span>
                  <span className="text-[11px] bg-primary-light text-primary px-1.5 py-0.5 rounded-full">야간진료</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-[15px] text-text-body">토요일</span>
                <span className="text-[15px] font-medium">{HOSPITAL.hours.weekend}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-[15px] text-text-body">일요일·공휴일</span>
                <span className="text-[15px] font-medium">{HOSPITAL.hours.holiday}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-[15px] text-text-body">점심시간</span>
                <span className="text-[15px] font-medium text-success">없음 (연속진료)</span>
              </div>
            </div>

            <p className="text-[13px] text-text-muted mt-4">
              ※ 365일 진료 · 야간 및 공휴일 입원 가능
            </p>
          </div>

          <div className="text-center mt-6">
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold text-[15px] hover:bg-primary-hover transition-colors"
            >
              전화 문의 {HOSPITAL.phone}
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
