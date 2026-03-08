import type { Metadata } from 'next'
import { CheckCircle, Shield, Eye, Target, Syringe } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { IMAGES } from '@/lib/imagePaths'

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
  '허리디스크 (요추 추간판 탈출증)',
  '목디스크 (경추 추간판 탈출증)',
  '척추관 협착증',
  '만성 목·허리 통증',
  '어깨 통증 (오십견·회전근개)',
  '교통사고 후유증',
  '무릎·관절 통증',
  '좌골신경통',
]

const researchPoints = [
  '초음파 유도 약침치료군의 통증 호전율이 비유도군 대비 17% 높음',
  '척추질환 호전 비율은 비유도군 대비 27% 더 높은 것으로 확인',
  '시각통증척도(VAS) 평가에서 치료 직후 평균 1.04점 더 개선',
  '허리 기능 장애(ODI) 1개월 시점에서 평균 12.78점 앞서는 결과',
  '심각한 부작용이나 이상 반응 보고 없음 — 안전성 확인',
]

const steps = [
  { num: '01', title: '문진 및 진찰', desc: '증상·병력 파악 후\n한방 진단 실시' },
  { num: '02', title: '초음파 진단', desc: '고해상도 초음파로\n정밀 영상 진단' },
  { num: '03', title: '약침 조제', desc: '환자 상태에 맞는\n한약 추출물 선별' },
  { num: '04', title: '초음파유도 시술', desc: '실시간 영상 하에\n정확한 약침 주입' },
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
          <SectionHeader subtitle="ULTRASOUND-GUIDED" title="초음파유도하약침이란?" />
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <p className="text-base text-text-body leading-[1.8] mb-6">
                초음파유도하약침은 초음파 영상 장비를 이용하여 실시간으로 체내 구조를 확인하면서
                한약 추출물(약침액)을 정확한 부위에 주입하는 치료법입니다.
              </p>
              <p className="text-base text-text-body leading-[1.8]">
                기존 약침치료의 효과에 초음파의 정밀성을 더해 치료의 정확도와 안전성을 크게 높였습니다.
                상무365한방병원은 삼성메디슨 V7 초음파 장비를 보유하고 있어 고해상도 실시간 영상 하에 시술합니다.
              </p>
            </div>
            <div className="md:w-[40%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage
                  src={IMAGES.equipment.v7}
                  alt="초음파 장비"
                  className="w-full h-[220px] md:h-[300px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 장점 */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <SectionHeader title="초음파유도하약침의 장점" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advantages.map((a) => (
              <div key={a.title} className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <a.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-base font-bold text-text-main">{a.title}</p>
                  <p className="text-[15px] text-text-body mt-1">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 치료 절차 */}
      <section className="py-10 md:py-12">
        <Container>
          <SectionHeader title="치료 절차" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-lg border border-border-light p-5 text-center">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-[15px] mx-auto">
                  {step.num}
                </div>
                <p className="text-base font-bold text-text-main mt-3">{step.title}</p>
                <p className="text-[15px] text-text-muted mt-2 whitespace-pre-line">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 적응증 */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <SectionHeader title="이런 증상에 효과적입니다" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {conditions.map((c) => (
              <div key={c} className="flex items-center gap-2.5 px-4 py-3 bg-white border border-border-light rounded-lg">
                <CheckCircle className="w-5 h-5 text-success shrink-0" strokeWidth={2} />
                <span className="text-[15px] font-medium text-text-main">{c}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 연구 근거 */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader title="과학적 근거" />
          <div className="bg-primary-subtle rounded-xl p-6 md:p-8">
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
            <p className="text-[15px] text-text-muted mt-5">
              출처: 민족의학신문 (2025.04.30) — 자생한방병원 이진호 병원장 연구팀
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
