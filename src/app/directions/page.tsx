import type { Metadata } from 'next'
import Link from 'next/link'
import { Bus, Car, Clock, Phone, MapPin, Building2 } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '오시는길 | 상무365한방병원',
  description: `상무365한방병원 - ${HOSPITAL.address}. 365일 진료, 야간 20시까지.`,
}

export default function DirectionsPage() {
  return (
    <>
      <SubPageHeader title="오시는길" subtitle="DIRECTIONS" />

      {/* 지도 + 주소 */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="LOCATION" title="오시는길" />

          {/* 카카오맵 iframe */}
          <div className="rounded-xl overflow-hidden border border-border-light">
            <iframe
              src="https://map.kakao.com/link/map/상무365한방병원,35.1481,126.8514"
              className="w-full h-[300px] md:h-[420px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="상무365한방병원 위치"
            />
          </div>

          {/* 주소 정보 */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex items-start gap-3 flex-1 bg-bg-section rounded-xl p-5">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-base font-bold text-text-main">주소</p>
                <p className="text-[15px] text-text-body mt-1">{HOSPITAL.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 flex-1 bg-bg-section rounded-xl p-5">
              <Building2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-base font-bold text-text-main">위치</p>
                <p className="text-[15px] text-text-body mt-1">H.K 복합빌딩 {HOSPITAL.floors}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 교통 안내 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="TRANSPORTATION" title="교통 안내" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <Bus className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-base font-bold text-text-main mb-2">대중교통</p>
              <p className="text-[15px] text-text-body leading-[1.7]">
                상무지구 정류장 하차 후 도보 5분
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-base font-bold text-text-main mb-2">자가용</p>
              <p className="text-[15px] text-text-body leading-[1.7]">
                네비게이션 &apos;상무365한방병원&apos; 또는<br />&apos;H.K빌딩&apos; 검색
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-base font-bold text-text-main mb-2">주차안내</p>
              <p className="text-[15px] text-text-body leading-[1.7]">
                <strong className="text-text-main">{HOSPITAL.parking.name}</strong> (전용주차장)<br />
                {HOSPITAL.parking.address}<br />
                <span className="text-text-muted">{HOSPITAL.parking.note}</span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 진료시간 */}
      <section className="py-10 md:py-14">
        <Container narrow>
          <SectionHeader subtitle="HOURS" title="진료시간" />
          <div className="max-w-[560px] mx-auto">
            <div className="bg-white border border-border-light rounded-xl overflow-hidden">
              <div className="flex justify-between items-center px-5 py-4 border-b border-border-light">
                <span className="text-base font-medium text-text-body">평일</span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-text-main">{HOSPITAL.hours.weekday}</span>
                  <Badge>야간진료</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center px-5 py-4 border-b border-border-light">
                <span className="text-base font-medium text-text-body">토요일</span>
                <span className="text-base font-bold text-text-main">{HOSPITAL.hours.weekend}</span>
              </div>
              <div className="flex justify-between items-center px-5 py-4 border-b border-border-light">
                <span className="text-base font-medium text-text-body">일요일·공휴일</span>
                <span className="text-base font-bold text-text-main">{HOSPITAL.hours.holiday}</span>
              </div>
              <div className="flex justify-between items-center px-5 py-4 bg-primary-subtle">
                <span className="text-base font-medium text-text-body">점심시간</span>
                <span className="text-base font-bold text-success">없음 (연속진료)</span>
              </div>
            </div>

            <p className="text-[14px] text-text-muted mt-4 text-center">
              ※ 365일 진료 · 야간 및 공휴일 입원 가능
            </p>

            <div className="flex flex-col min-[400px]:flex-row items-center justify-center gap-3 mt-6">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-lg font-bold text-base hover:bg-primary-hover transition-colors"
              >
                <Phone className="w-5 h-5" />
                전화 문의 {HOSPITAL.phone}
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
