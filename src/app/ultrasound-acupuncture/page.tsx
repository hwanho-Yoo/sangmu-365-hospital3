import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Shield, Eye, Target, Syringe, Phone, Stethoscope } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { IMAGES } from '@/lib/imagePaths'
import { HOSPITAL } from '@/lib/constants'

const advantages = [
  {
    icon: Eye,
    title: '실시간 영상 확인',
    desc: '초음파로 근육·신경·혈관을 실시간으로 보면서 정확한 위치에 시술합니다.',
  },
  {
    icon: Target,
    title: '정확한 목표 도달',
    desc: '통증의 원인 부위에 약침액을 정밀하게 주입하여 치료 효과를 극대화합니다.',
  },
  {
    icon: Shield,
    title: '안전성 향상',
    desc: '주요 신경과 혈관을 시각화하여 손상 위험을 줄이고 부작용을 최소화합니다.',
  },
  {
    icon: Syringe,
    title: '침·한약 복합 효과',
    desc: '한약 추출물을 경혈에 직접 주입하여 침과 한약의 효과를 동시에 얻습니다.',
  },
]

const conditions = [
  { name: '허리디스크', desc: '요추 추간판 탈출증' },
  { name: '목디스크', desc: '경추 추간판 탈출증' },
  { name: '척추관 협착증', desc: '신경 통로 좁아짐' },
  { name: '만성 목·허리 통증', desc: '근막·인대 손상' },
  { name: '오십견·회전근개', desc: '어깨 통증·운동 제한' },
  { name: '교통사고 후유증', desc: '경추·요추 염좌' },
  { name: '무릎·관절 통증', desc: '퇴행성·외상성 관절염' },
  { name: '좌골신경통', desc: '엉덩이~다리 방사통' },
]

const researchPoints = [
  '초음파 유도 약침치료군의 통증 호전율이 비유도군 대비 17% 높음',
  '척추질환 호전 비율은 비유도군 대비 27% 더 높은 것으로 확인',
  '시각통증척도(VAS) 평가에서 치료 직후 평균 1.04점 더 개선',
  '허리 기능 장애(ODI) 1개월 시점에서 평균 12.78점 앞서는 결과',
  '심각한 부작용이나 이상 반응 보고 없음 — 안전성 확인',
]

const steps = [
  { num: '01', title: '문진 및 진찰', desc: '증상·병력 파악 후 한방 진단 실시' },
  { num: '02', title: '초음파 진단', desc: '고해상도 초음파로 정밀 영상 진단' },
  { num: '03', title: '약침 조제', desc: '환자 상태에 맞는 한약 추출물 선별' },
  { num: '04', title: '초음파유도 시술', desc: '실시간 영상 하에 정확한 약침 주입' },
]

const comparisons = [
  { item: '시술 방법', guided: '초음파로 실시간 확인하며 주입', normal: '한의사의 촉진·경험으로 주입' },
  { item: '정확도', guided: '영상 유도로 목표 부위 직접 도달', normal: '해부학적 랜드마크 기반' },
  { item: '안전성', guided: '신경·혈관 시각화로 손상 방지', normal: '시술자 경험에 의존' },
  { item: '적용 범위', guided: '심부 조직, 척추 주변까지 가능', normal: '주로 표층~중간 깊이' },
]

export const metadata: Metadata = {
  title: '초음파유도하약침 | 상무365한방병원',
  description: '초음파 영상을 보면서 정확한 위치에 약침을 시술하여 치료 효과를 극대화합니다. 허리디스크, 목디스크, 교통사고 후유증 등.',
}

export default function UltrasoundAcupuncturePage() {
  return (
    <>
      <SubPageHeader title="초음파유도하약침" subtitle="ULTRASOUND-GUIDED PHARMACOPUNCTURE" />

      {/* 소개 */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <SectionHeader subtitle="ULTRASOUND-GUIDED" title="초음파유도하약침이란?" centered={false} />
              <p className="text-base text-text-body leading-[1.8] mb-4">
                초음파유도하약침은 <strong className="text-text-main">초음파 영상 장비로 체내 구조를 실시간 확인</strong>하면서
                한약 추출물(약침액)을 정확한 부위에 주입하는 치료법입니다.
              </p>
              <p className="text-base text-text-body leading-[1.8] mb-4">
                기존 약침치료의 효과에 초음파의 정밀성을 더해 <strong className="text-text-main">치료 정확도와 안전성을 크게 향상</strong>시켰습니다.
                특히 디스크, 척추관 협착증 등 깊은 부위의 질환에 탁월한 효과를 보입니다.
              </p>
              <p className="text-base text-text-body leading-[1.8]">
                상무365한방병원은 <strong className="text-text-main">삼성메디슨 V7 고해상도 초음파 장비</strong>를 보유하고 있어
                근골격계 정밀 진단부터 초음파 유도 시술까지 한 곳에서 진행합니다.
              </p>
            </div>
            <div className="md:w-[40%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden mb-3">
                <HospitalImage
                  src={IMAGES.equipment.v7}
                  alt="초음파유도하약침 시술"
                  className="w-full h-[220px] md:h-[340px]"
                />
              </div>
              <div className="bg-bg-section rounded-lg p-3 flex items-center gap-3">
                <Stethoscope className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                <p className="text-[14px] text-text-muted">삼성메디슨 V7 · 고해상도 근골격 초음파</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 장점 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="ADVANTAGES" title="초음파유도하약침의 장점" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {advantages.map((a) => (
              <div key={a.title} className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <a.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-base font-bold text-text-main mb-1">{a.title}</p>
                  <p className="text-base text-text-body leading-[1.7]">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 일반 약침 vs 초음파유도하약침 비교 */}
      <section className="py-10 md:py-14">
        <Container narrow>
          <SectionHeader subtitle="COMPARISON" title="일반 약침 vs 초음파유도하약침" />
          <div className="overflow-x-auto">
            <table className="w-full text-[15px] border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 text-left font-bold rounded-tl-lg">구분</th>
                  <th className="py-3 px-4 text-left font-bold">초음파유도하약침</th>
                  <th className="py-3 px-4 text-left font-bold rounded-tr-lg">일반 약침</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((c, i) => (
                  <tr key={c.item} className={i % 2 === 0 ? 'bg-bg-section' : 'bg-white'}>
                    <td className="py-3 px-4 font-bold text-text-main">{c.item}</td>
                    <td className="py-3 px-4 text-primary font-medium">{c.guided}</td>
                    <td className="py-3 px-4 text-text-body">{c.normal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 치료 절차 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="PROCESS" title="치료 절차" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="bg-white rounded-xl border border-border-light p-5 text-center h-full">
                  <div className="w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center font-bold text-[15px] mx-auto">
                    {step.num}
                  </div>
                  <p className="text-base font-bold text-text-main mt-3">{step.title}</p>
                  <p className="text-[14px] text-text-muted mt-2 leading-[1.6]">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2.5 -translate-y-1/2 text-primary/40 text-xl font-bold">›</div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 적응증 */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="CONDITIONS" title="이런 증상에 효과적입니다" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {conditions.map((c) => (
              <div key={c.name} className="flex items-start gap-3 bg-bg-section rounded-xl p-5">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <p className="text-base font-bold text-text-main">{c.name}</p>
                  <p className="text-[14px] text-text-muted mt-1">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 연구 근거 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="EVIDENCE" title="과학적 근거" />
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <Badge className="mb-4">SCI(E)급 국제학술지 게재</Badge>
            <p className="text-base text-text-body leading-[1.8] mb-5">
              자생한방병원 연구팀이 SCI(E)급 국제학술지 &apos;메디슨(Medicine)&apos;에 게재한 체계적 문헌고찰·메타분석 연구에 따르면,
              초음파 유도 약침치료는 대조군 대비 척추질환 통증 및 기능 개선에서 우수한 결과를 보였습니다.
            </p>
            <ul className="space-y-3">
              {researchPoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <CheckCircle className="w-[18px] h-[18px] text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-base text-text-body">{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-[14px] text-text-muted mt-5 pt-4 border-t border-border-light">
              출처: 민족의학신문 (2025.04.30) — 자생한방병원 이진호 병원장 연구팀
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-primary-subtle">
        <Container narrow>
          <div className="text-center max-w-[680px] mx-auto">
            <Badge className="mb-4">초음파유도하약침</Badge>
            <h3 className="text-2xl md:text-[28px] font-bold text-text-main mb-4">
              더 정확하고 안전한 약침 치료
            </h3>
            <p className="text-base text-text-body leading-[1.8] mb-8">
              디스크, 척추 통증, 교통사고 후유증 등<br className="hidden sm:inline" />
              정밀한 치료가 필요한 질환에 초음파유도하약침이 효과적입니다.<br />
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
