import type { Metadata } from 'next'
import Link from 'next/link'
import {
  CheckCircle, Phone, Zap, Timer, ShieldCheck, Repeat2, TrendingUp, Crosshair,
} from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { equipmentList } from '@/lib/data/equipment'
import { IMAGES } from '@/lib/imagePaths'
import { HOSPITAL } from '@/lib/constants'

const advantages = [
  {
    icon: Timer,
    title: '시술 시간 10~15분',
    desc: '1회 시술 시간이 짧아 바쁜 직장인도 부담 없이 치료받을 수 있습니다.',
  },
  {
    icon: ShieldCheck,
    title: '비수술·비침습',
    desc: '절개나 마취 없이 피부 위에서 충격파를 전달하여 안전합니다.',
  },
  {
    icon: TrendingUp,
    title: '조직 재생 촉진',
    desc: '손상 부위 혈류를 증가시키고 콜라겐 생성을 촉진하여 근본 치유합니다.',
  },
  {
    icon: Repeat2,
    title: '일상 즉시 복귀',
    desc: '시술 후 별도의 회복 기간 없이 바로 일상생활이 가능합니다.',
  },
]

const conditions = [
  { name: '오십견 (유착성 관절낭염)', desc: '어깨 통증 및 운동 제한' },
  { name: '테니스엘보 / 골프엘보', desc: '팔꿈치 외·내측 통증' },
  { name: '족저근막염', desc: '아침 첫발 디딜 때 발바닥 통증' },
  { name: '석회성 건염', desc: '어깨 힘줄 석회 침착 통증' },
  { name: '아킬레스건염', desc: '발뒤꿈치 뒷쪽 통증' },
  { name: '무릎 슬개건염', desc: '무릎 앞쪽 통증 (점퍼스니)' },
  { name: '만성 목·허리 통증', desc: '근막 긴장 및 유착' },
  { name: '근막 통증 증후군', desc: '트리거 포인트 통증' },
]

const processSteps = [
  { step: '01', title: '진단·검사', desc: '통증 부위 촉진, X-ray·초음파 검사로 정확한 병변 확인' },
  { step: '02', title: '치료 부위 설정', desc: '초음파 영상 또는 촉진으로 충격파 조사 포인트 결정' },
  { step: '03', title: '충격파 시술', desc: '집중형 또는 방사형 충격파를 1,000~3,000회 조사 (10~15분)' },
  { step: '04', title: '경과 관찰', desc: '주 1회, 총 3~5회 치료 후 경과 확인 및 추가 치료 판단' },
]

export const metadata: Metadata = {
  title: '체외충격파 치료 | 상무365한방병원',
  description: '스위스 Storz Medical 프리미엄 체외충격파. 오십견, 테니스엘보, 족저근막염 등 만성 통증 비수술 치료.',
}

export default function ShockwavePage() {
  const shockwaveEquipment = equipmentList.filter((e) => e.id === 'sd1' || e.id === 'mp100')

  return (
    <>
      <SubPageHeader title="체외충격파" subtitle="SHOCKWAVE THERAPY" />

      {/* 소개 */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <SectionHeader subtitle="ESWT" title="체외충격파 치료란?" centered={false} />
              <p className="text-base text-text-body leading-[1.8] mb-4">
                체외충격파(ESWT)는 <strong className="text-text-main">고에너지 충격파를 체외에서 통증 부위에 전달</strong>하여
                손상된 조직의 재생을 촉진하고, 석회 침착물을 분해하며, 혈류를 증가시키는 치료법입니다.
              </p>
              <p className="text-base text-text-body leading-[1.8] mb-4">
                수술 없이도 만성 근골격계 통증을 효과적으로 해결할 수 있어,
                <strong className="text-text-main"> 유럽·미국에서 먼저 도입</strong>되어 널리 사용되고 있습니다.
              </p>
              <p className="text-base text-text-body leading-[1.8]">
                상무365한방병원은 세계 1위 스위스 <strong className="text-text-main">Storz Medical社의 프리미엄 장비 2대</strong>를
                보유하여 집중형과 방사형 충격파를 환자 상태에 따라 선택·병행 치료합니다.
              </p>
            </div>
            <div className="md:w-[42%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage src={IMAGES.shockwave.treatment} alt="체외충격파 치료" className="w-full h-[260px] md:h-[380px]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 장점 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="ADVANTAGES" title="체외충격파의 장점" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((a) => (
              <div key={a.title} className="bg-white rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <a.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-base font-bold text-text-main mb-2">{a.title}</p>
                <p className="text-[15px] text-text-body leading-[1.7]">{a.desc}</p>
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
                <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-base font-bold text-text-main">{c.name}</p>
                  <p className="text-[14px] text-text-muted mt-1">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 집중형 vs 방사형 장비 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="PREMIUM EQUIPMENT" title="Storz Medical 프리미엄 장비" />
          <p className="text-base text-text-body text-center mb-8 leading-[1.8]">
            세계 체외충격파 시장 점유율 1위, 스위스 Storz Medical社의 장비를<br className="hidden sm:inline" />
            <strong className="text-text-main">집중형 + 방사형 2대 모두 보유</strong>하고 있습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shockwaveEquipment.map((eq) => (
              <div key={eq.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <HospitalImage
                  src={IMAGES.equipment[eq.id as keyof typeof IMAGES.equipment] || ''}
                  alt={`${eq.name} 장비`}
                  className="w-full h-[200px] md:h-[260px]"
                />
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>{eq.id === 'sd1' ? '집중형' : '방사형'}</Badge>
                    <span className="text-[14px] text-text-muted">{eq.model} · {eq.manufacturer}</span>
                  </div>
                  <h3 className="text-lg font-bold text-text-main mb-2">{eq.name}</h3>
                  <p className="text-[15px] text-text-body leading-[1.7] mb-4">{eq.description}</p>
                  <ul className="space-y-2">
                    {eq.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
                        <span className="text-[15px] text-text-body">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-white rounded-xl p-5 md:p-6">
            <div className="flex items-start gap-3">
              <Crosshair className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-base font-bold text-text-main mb-1">집중형 + 방사형 병행 치료</p>
                <p className="text-[15px] text-text-body leading-[1.7]">
                  집중형(Focused)은 깊은 병변에 정밀 조사하고, 방사형(Radial)은 넓은 범위의 근막 이완에 효과적입니다.
                  상무365한방병원은 환자 상태에 따라 두 가지를 선택 또는 병행하여 최적의 치료 효과를 이끌어냅니다.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 치료 과정 */}
      <section className="py-10 md:py-14">
        <Container narrow>
          <SectionHeader subtitle="PROCESS" title="치료 과정" />
          <div className="space-y-0">
            {processSteps.map((s, i) => (
              <div key={s.step} className="flex gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base shrink-0">
                    {s.step}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-px flex-1 bg-primary/20 my-1" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-base font-bold text-text-main mt-3">{s.title}</p>
                  <p className="text-[15px] text-text-body mt-1 leading-[1.7]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-primary-subtle">
        <Container narrow>
          <div className="text-center max-w-[640px] mx-auto">
            <Badge className="mb-4">체외충격파</Badge>
            <h3 className="text-xl md:text-2xl font-bold text-text-main mb-4">
              만성 통증, 비수술로 해결하세요
            </h3>
            <p className="text-base text-text-body leading-[1.8] mb-8">
              오십견, 테니스엘보, 족저근막염 등 오래된 통증도<br className="hidden sm:inline" />
              체외충격파로 효과적으로 치료할 수 있습니다.<br />
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
