import Link from 'next/link'
import { Clock, Car, Phone, MessageCircle } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import HospitalImage from '@/components/ui/HospitalImage'
import { HOSPITAL } from '@/lib/constants'

export default function LocationSection() {
  return (
    <section className="py-10 md:py-16 bg-bg-section">
      <Container>
        <SectionHeader subtitle="LOCATION" title="오시는길" />

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Map placeholder */}
          <div className="md:flex-[60] w-full">
            <div className="rounded-xl overflow-hidden mb-3">
              <HospitalImage
                src=""
                alt="지도 (카카오맵 연동 예정)"
                className="w-full h-[240px] md:h-[350px]"
              />
            </div>
            <p className="text-sm text-text-body">{HOSPITAL.address}</p>
          </div>

          {/* Info cards */}
          <div className="md:flex-[40] w-full flex flex-col gap-3">
            {/* 진료시간 */}
            <div className="bg-white rounded-lg border border-border-light p-5">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-base font-bold text-text-main">진료시간</h3>
              </div>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between items-center border-b border-dashed border-border-light pb-2.5">
                  <span className="text-text-body">평일</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{HOSPITAL.hours.weekday}</span>
                    <span className="text-[11px] bg-primary-light text-primary px-1.5 py-0.5 rounded-full">야간진료</span>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-border-light pb-2.5">
                  <span className="text-text-body">토·일·공휴일</span>
                  <span className="font-medium">{HOSPITAL.hours.weekend}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-body">점심시간</span>
                  <span className="font-medium text-success">없음 (연속진료)</span>
                </div>
              </div>
            </div>

            {/* 주차안내 */}
            <div className="bg-white rounded-lg border border-border-light p-5">
              <div className="flex items-center gap-2 mb-3">
                <Car className="w-5 h-5 text-primary" />
                <h3 className="text-base font-bold text-text-main">주차안내</h3>
              </div>
              <p className="text-sm text-text-body">{HOSPITAL.parking.name} (병원 건너편 도보 2분)</p>
              <p className="text-sm text-text-muted">{HOSPITAL.parking.address}</p>
            </div>

            {/* 연락처 */}
            <div className="bg-white rounded-lg border border-border-light p-5">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-5 h-5 text-primary" />
                <h3 className="text-base font-bold text-text-main">연락처</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-body">대표번호</span>
                  <a
                    href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                    className="text-xl font-bold text-primary"
                  >
                    {HOSPITAL.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <a
                    href={HOSPITAL.kakao}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-text-body hover:text-primary transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    카카오톡 상담
                  </a>
                  <Link
                    href="/reservation"
                    className="text-sm text-primary font-medium hover:underline"
                  >
                    진료예약
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
