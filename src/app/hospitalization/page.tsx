import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Car, Bone, Activity, Moon, CheckCircle, Circle, Phone,
  Clock, Shield, Heart, Utensils, BedDouble,
} from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { HOSPITAL } from '@/lib/constants'
import { IMAGES } from '@/lib/imagePaths'

const reasons = [
  { icon: Car, title: '교통사고 후유증', desc: '사고 후 통증이 심하거나 집중 치료가 필요한 경우' },
  { icon: Bone, title: '척추·관절 수술 후', desc: '수술 후 한방 재활치료가 필요한 경우' },
  { icon: Activity, title: '심한 급성 통증', desc: '일상생활이 어려울 정도의 급성 통증' },
  { icon: Moon, title: '만성 질환 집중치료', desc: '외래 치료만으로 호전이 어려운 경우' },
]

const strengths = [
  { icon: Clock, title: '365일 입원 가능', desc: '주말·공휴일에도 입원 접수 및 치료가 가능합니다.' },
  { icon: Shield, title: '한양방 협진 치료', desc: '한의사와 정형외과 전문의가 함께 입원 치료 계획을 수립합니다.' },
  { icon: Heart, title: '전담 간호팀 케어', desc: '24시간 전담 간호팀이 환자분을 꼼꼼히 케어합니다.' },
  { icon: Utensils, title: '365파인다이닝 식단', desc: '영양사 관리 하에 맛과 영양을 갖춘 식사를 제공합니다.' },
]

const steps = [
  { num: '01', title: '진료 및 상담', desc: '전문의 진료 후 입원 필요 여부를 판단합니다.' },
  { num: '02', title: '입원 수속', desc: '원무과에서 입원 서류 작성 및 보험 관련 안내를 받습니다.' },
  { num: '03', title: '입원 치료', desc: '맞춤 치료 계획에 따라 한양방 통합 치료를 진행합니다.' },
  { num: '04', title: '퇴원 및 관리', desc: '회복 상태 확인 후 퇴원, 외래 통원 치료로 전환합니다.' },
]

const dailySchedule = [
  { time: '07:00', activity: '기상 및 체온·혈압 측정' },
  { time: '08:00', activity: '아침 식사' },
  { time: '09:00', activity: '오전 한방 치료 (침·뜸·부항·추나)' },
  { time: '10:30', activity: '물리치료 / 도수치료' },
  { time: '12:00', activity: '점심 식사' },
  { time: '14:00', activity: '오후 치료 (약침·충격파 등)' },
  { time: '15:30', activity: '회진 및 상담' },
  { time: '18:00', activity: '저녁 식사' },
  { time: '19:00', activity: '한약 복용 / 자유 시간' },
  { time: '22:00', activity: '소등 및 취침' },
]

const diningPoints = [
  '영양사 관리 하에 균형 잡힌 식단',
  '환자 상태에 맞는 맞춤 식이 관리',
  '매끼 정성껏 준비하는 신선한 식사',
  '특식 및 간식 제공',
]

const checklist = [
  '신분증, 건강보험증',
  '세면도구, 실내화',
  '개인 복용 중인 약 (해당 시)',
  '교통사고 환자: 사고접수번호, 보험사 연락처',
  '편한 복장 (환의 별도 제공)',
]

const insuranceInfo = [
  { type: '교통사고 환자', desc: '자동차보험 적용 — 본인부담금 없음', highlight: true },
  { type: '산재 환자', desc: '산재보험 적용 — 근로복지공단 승인 후 입원' },
  { type: '일반 환자', desc: '건강보험 + 실손보험 적용 가능' },
]

export const metadata: Metadata = {
  title: '입원안내 | 상무365한방병원',
  description: '365일 입원 가능. 교통사고 후유증, 척추·관절 통증 집중치료. 한양방 협진 입원 프로그램.',
}

export default function HospitalizationPage() {
  return (
    <>
      <SubPageHeader title="입원안내" subtitle="HOSPITALIZATION" />

      {/* 소개 */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <SectionHeader subtitle="HOSPITALIZATION" title="입원 프로그램" centered={false} />
              <p className="text-base text-text-body leading-[1.8] mb-4">
                상무365한방병원은 <strong className="text-text-main">365일 입원이 가능</strong>하며,
                야간 및 공휴일에도 전담 간호팀이 환자분을 꼼꼼히 케어합니다.
              </p>
              <p className="text-base text-text-body leading-[1.8]">
                한의사와 정형외과 전문의가 <strong className="text-text-main">협진하여 입원 치료 계획을 수립</strong>하고,
                침·뜸·추나·도수치료·물리치료·한약 등 통합 치료를 집중적으로 시행합니다.
                교통사고 환자는 자동차보험으로 본인부담금 없이 입원이 가능합니다.
              </p>
            </div>
            <div className="md:w-[40%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage src={IMAGES.facility[0]} alt="입원실" className="w-full h-[260px] md:h-[340px]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 입원 장점 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="WHY US" title="상무365 입원의 장점" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-base font-bold text-text-main mb-2">{s.title}</p>
                <p className="text-base text-text-body leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 입원이 필요한 경우 */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="WHEN" title="이런 경우 입원을 추천합니다" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div key={r.title} className="bg-bg-section rounded-xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <r.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-base font-bold text-text-main">{r.title}</p>
                  <p className="text-[15px] text-text-muted mt-1">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 입원 절차 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container narrow>
          <SectionHeader subtitle="PROCESS" title="입원 절차" />
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={s.num} className="flex gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base shrink-0">
                    {s.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-primary/20 my-1" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-base font-bold text-text-main mt-3">{s.title}</p>
                  <p className="text-base text-text-body mt-1 leading-[1.7]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 하루 일과 */}
      <section className="py-10 md:py-14">
        <Container narrow>
          <SectionHeader subtitle="DAILY SCHEDULE" title="입원 하루 일과" />
          <div className="bg-white border border-border-light rounded-xl overflow-hidden">
            {dailySchedule.map((item, i) => (
              <div
                key={item.time}
                className={`flex items-center gap-4 px-5 py-3 ${i < dailySchedule.length - 1 ? 'border-b border-border-light' : ''}`}
              >
                <span className="text-base font-bold text-primary w-16 shrink-0">{item.time}</span>
                <span className="text-base text-text-body">{item.activity}</span>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-text-muted text-center mt-3">* 환자 상태에 따라 일과는 조정될 수 있습니다.</p>
        </Container>
      </section>

      {/* 365파인다이닝 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="FINE DINING" title="365파인다이닝 입원 식단" />
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="md:w-[42%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage src={IMAGES.facility[2]} alt="입원 식단" className="w-full h-[240px] md:h-[300px]" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-base text-text-body leading-[1.8] mb-5">
                상무365한방병원은 입원 환자분의 빠른 회복을 위해
                <strong className="text-text-main"> 맛과 영양의 균형</strong>을 고려한 식단을 제공합니다.
                매끼 정성을 담아 준비하며, 개인별 건강 상태에 맞춘 식이 관리를 진행합니다.
              </p>
              <ul className="space-y-2.5">
                {diningPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <CheckCircle className="w-[18px] h-[18px] text-primary shrink-0" strokeWidth={2} />
                    <span className="text-base text-text-body">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 보험 안내 + 준비물 */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 보험 안내 */}
            <div className="border border-border-light rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                보험 안내
              </h3>
              <div className="space-y-3">
                {insuranceInfo.map((info) => (
                  <div
                    key={info.type}
                    className={`rounded-lg p-4 ${info.highlight ? 'bg-primary-subtle border border-primary/20' : 'bg-bg-section'}`}
                  >
                    <p className={`text-base font-bold ${info.highlight ? 'text-primary' : 'text-text-main'}`}>{info.type}</p>
                    <p className="text-base text-text-body mt-1">{info.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 준비물 */}
            <div className="border border-border-light rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
                <BedDouble className="w-5 h-5 text-primary" />
                입원 시 준비물
              </h3>
              <ul className="space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Circle className="w-3 h-3 text-primary fill-primary shrink-0" />
                    <span className="text-base text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-primary-subtle">
        <Container narrow>
          <div className="text-center max-w-[640px] mx-auto">
            <Badge className="mb-4">입원안내</Badge>
            <h3 className="text-2xl md:text-[28px] font-bold text-text-main mb-4">
              입원 상담이 필요하신가요?
            </h3>
            <p className="text-base text-text-body leading-[1.8] mb-8">
              365일 입원 가능, 한양방 협진 집중치료 프로그램으로<br className="hidden sm:inline" />
              빠른 회복을 도와드립니다.<br />
              교통사고 환자는 자동차보험으로 본인부담금 없이 입원 가능합니다.
            </p>
            <div className="flex flex-col min-[400px]:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-lg font-bold text-base hover:bg-primary-hover transition-colors"
              >
                <Phone className="w-5 h-5" />
                입원 상담 {HOSPITAL.phone}
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
