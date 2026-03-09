import type { Metadata } from 'next'
import Link from 'next/link'
import {
  CheckCircle, Phone, ArrowRight, Sparkles,
  Target, RotateCcw, Shield, UserCheck,
} from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { IMAGES } from '@/lib/imagePaths'
import { HOSPITAL } from '@/lib/constants'

const manualBenefits = [
  {
    icon: Target,
    title: '정확한 원인 치료',
    desc: '통증 부위뿐 아니라 근본 원인이 되는 근육·관절·인대를 직접 교정합니다.',
  },
  {
    icon: Shield,
    title: '비수술·무약물',
    desc: '수술이나 약물 없이 전문 치료사의 손으로 안전하게 치료합니다.',
  },
  {
    icon: RotateCcw,
    title: '재발 방지',
    desc: '일시적 통증 완화가 아닌, 체형 균형을 회복하여 재발을 예방합니다.',
  },
  {
    icon: UserCheck,
    title: '1:1 맞춤 치료',
    desc: '환자 상태에 따라 치료 강도와 방법을 개별 조정합니다.',
  },
]

const manualTargets = [
  '허리디스크·목디스크',
  '척추관협착증',
  '오십견·회전근개 손상',
  '무릎·고관절 통증',
  '교통사고 후유증',
  '수술 후 재활',
  '만성 어깨·목 결림',
  '스포츠 부상',
]

const postureSymptoms = [
  { symptom: '거북목·일자목', detail: '장시간 컴퓨터·스마트폰 사용으로 목이 앞으로 빠진 상태' },
  { symptom: '척추측만증', detail: '척추가 좌우로 휘어져 어깨 높이가 다른 상태' },
  { symptom: '골반 틀어짐', detail: '다리 꼬는 습관 등으로 골반이 비대칭인 상태' },
  { symptom: '라운드숄더', detail: '어깨가 앞으로 말려 등이 둥글게 굽은 상태' },
  { symptom: 'O다리·X다리', detail: '하지 정렬 불균형으로 무릎 통증 유발' },
  { symptom: '일자허리', detail: '요추의 정상 만곡이 소실되어 허리 통증 발생' },
]

const processSteps = [
  { step: '01', title: '정밀 검사', desc: 'X-ray, 체형분석 검사를 통해 체형 불균형과 통증 원인을 정확히 진단합니다.' },
  { step: '02', title: '치료 계획 수립', desc: '한의사·정형외과 전문의가 협진하여 환자 맞춤 치료 계획을 세웁니다.' },
  { step: '03', title: '도수·추나 치료', desc: '도수치료와 추나요법을 병행하여 근골격계를 교정하고 통증을 완화합니다.' },
  { step: '04', title: '유지·관리', desc: '교정 후 바른 자세 유지를 위한 운동법을 안내하고 정기 관리합니다.' },
]

const comparisons = [
  { item: '시술자', manual: '물리치료사', chuna: '한의사' },
  { item: '원리', manual: '근골격계 해부학 기반', chuna: '한의학 경혈·경락 기반' },
  { item: '주요 기법', manual: '관절 가동, 근막이완, 연부조직 기법', chuna: '척추·골반 교정, 기혈 순환 촉진' },
  { item: '보험 적용', manual: '비급여 (실비 가능)', chuna: '건강보험 적용 (횟수 제한)' },
]

export const metadata: Metadata = {
  title: '도수치료·체형교정 | 상무365한방병원',
  description: '도수치료, 체형교정, 추나요법으로 척추·관절 통증을 근본적으로 해결합니다. 비수술 1:1 맞춤 치료.',
}

export default function ChiropracticPage() {
  return (
    <>
      <SubPageHeader title="도수치료·체형교정" subtitle="MANUAL THERAPY & POSTURE CORRECTION" />

      {/* 도수치료 소개 */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <SectionHeader subtitle="MANUAL THERAPY" title="도수치료" centered={false} />
              <p className="text-base text-text-body leading-[1.8] mb-4">
                도수치료는 <strong className="text-text-main">전문 물리치료사가 손으로 직접</strong> 근육, 관절, 인대를
                교정하는 치료법입니다. 약물이나 수술 없이 통증의 근본 원인을 해결하며,
                척추·관절 질환은 물론 교통사고 후유증, 수술 후 재활까지 폭넓게 적용됩니다.
              </p>
              <p className="text-base text-text-body leading-[1.8] mb-6">
                상무365한방병원에서는 <strong className="text-text-main">한의사와 정형외과 전문의의 협진 진단</strong> 후
                전문 치료사가 1:1로 맞춤 도수치료를 시행합니다.
              </p>

              {/* 대상 증상 */}
              <div className="bg-bg-section rounded-xl p-5">
                <p className="text-[15px] font-bold text-text-main mb-3">이런 분들에게 효과적입니다</p>
                <div className="grid grid-cols-2 gap-2">
                  {manualTargets.map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
                      <span className="text-[15px] text-text-body">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-[42%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage src={IMAGES.facility[2]} alt="도수치료 장면" className="w-full h-[260px] md:h-[380px]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 도수치료 장점 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="ADVANTAGES" title="도수치료의 장점" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {manualBenefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-base font-bold text-text-main mb-2">{b.title}</p>
                <p className="text-[15px] text-text-body leading-[1.7]">{b.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 체형교정 */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <SectionHeader subtitle="POSTURE CORRECTION" title="체형교정 프로그램" centered={false} />
              <p className="text-base text-text-body leading-[1.8] mb-4">
                <strong className="text-text-main">틀어진 체형은 만성 통증의 근본 원인</strong>입니다.
                잘못된 자세가 오래 지속되면 근육 불균형, 관절 변형, 신경 압박으로 이어져
                목·어깨·허리·무릎까지 다양한 부위에 통증을 유발합니다.
              </p>
              <p className="text-base text-text-body leading-[1.8] mb-6">
                상무365한방병원은 정밀 체형분석 검사를 통해 불균형을 정확히 진단하고,
                <strong className="text-text-main"> 추나요법 + 도수치료를 병행</strong>하여 바른 체형으로 교정합니다.
              </p>
            </div>
            <div className="md:w-[42%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage src={IMAGES.facility[3]} alt="체형교정 치료" className="w-full h-[260px] md:h-[380px]" />
              </div>
            </div>
          </div>

          {/* 체형 증상 카드 */}
          <div className="mt-10">
            <p className="text-lg font-bold text-text-main mb-5 text-center">이런 체형 문제, 교정이 필요합니다</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {postureSymptoms.map((s) => (
                <div key={s.symptom} className="flex items-start gap-3 bg-bg-section rounded-xl p-5">
                  <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-base font-bold text-text-main">{s.symptom}</p>
                    <p className="text-[14px] text-text-muted mt-1 leading-[1.6]">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 치료 과정 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container narrow>
          <SectionHeader subtitle="PROCESS" title="치료 과정" />
          <div className="space-y-0">
            {processSteps.map((s, i) => (
              <div key={s.step} className="flex gap-5 relative">
                {/* 타임라인 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base shrink-0">
                    {s.step}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-px flex-1 bg-primary/20 my-1" />
                  )}
                </div>
                {/* 내용 */}
                <div className="pb-8">
                  <p className="text-base font-bold text-text-main mt-3">{s.title}</p>
                  <p className="text-[15px] text-text-body mt-1 leading-[1.7]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 도수치료 vs 추나요법 비교 */}
      <section className="py-10 md:py-14">
        <Container narrow>
          <SectionHeader subtitle="COMPARISON" title="도수치료 vs 추나요법" />
          <p className="text-base text-text-body text-center mb-8 leading-[1.8]">
            도수치료와 추나요법은 모두 손으로 교정하는 치료이지만, 원리와 적용이 다릅니다.<br />
            상무365한방병원은 <strong className="text-text-main">두 가지를 병행</strong>하여 최상의 결과를 이끌어냅니다.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[15px] border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 text-left font-bold rounded-tl-lg">구분</th>
                  <th className="py-3 px-4 text-left font-bold">도수치료</th>
                  <th className="py-3 px-4 text-left font-bold rounded-tr-lg">추나요법</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((c, i) => (
                  <tr key={c.item} className={i % 2 === 0 ? 'bg-bg-section' : 'bg-white'}>
                    <td className="py-3 px-4 font-bold text-text-main">{c.item}</td>
                    <td className="py-3 px-4 text-text-body">{c.manual}</td>
                    <td className="py-3 px-4 text-text-body">{c.chuna}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[14px] text-text-muted text-center mt-4">
            * 추나요법은 건강보험 적용이 가능하며, 도수치료는 실손보험 청구가 가능합니다.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-primary-subtle">
        <Container narrow>
          <div className="text-center max-w-[640px] mx-auto">
            <Badge className="mb-4">도수·체형교정</Badge>
            <h3 className="text-xl md:text-2xl font-bold text-text-main mb-4">
              통증, 더 이상 참지 마세요
            </h3>
            <p className="text-base text-text-body leading-[1.8] mb-8">
              만성 통증, 잦은 재발, 체형 불균형으로 고민이시라면<br className="hidden sm:inline" />
              한양방 협진 전문의가 정확한 원인을 찾아 맞춤 치료해 드립니다.<br />
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
