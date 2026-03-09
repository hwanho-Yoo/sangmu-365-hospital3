import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, CheckCircle, Droplets, Zap, Phone } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { IMAGES } from '@/lib/imagePaths'
import { HOSPITAL } from '@/lib/constants'

const conditions = [
  { name: '아토피 피부염', desc: '체질 개선 + 외용제' },
  { name: '여드름·흉터', desc: '한약 + 약침 치료' },
  { name: '건선·습진', desc: '면역 조절 치료' },
  { name: '두드러기', desc: '원인 분석 + 체질 치료' },
  { name: '탈모', desc: '두피 환경 개선' },
  { name: '피부미용', desc: '스킨부스터 + 리프팅' },
]

const mijuanPoints = [
  '연어에서 추출·정제한 고순도 PN(Polynucleotide) 성분',
  '피부 진피층 환경 개선 및 구조 복원',
  '콜라겐 생성 촉진으로 탄력·잔주름 개선',
  '항염작용으로 붉고 예민한 피부 진정',
  '사람 DNA와 95% 이상 흡사한 높은 생체적합성',
]

const mijuanTargets = [
  '거칠고 푸석푸석한 피부',
  '모공이 많고 늘어진 피부',
  '노화가 진행중인 피부',
  '붉고 예민한 피부',
  '건조하고 당기는 피부',
  '재생이 더딘 피부',
]

const mijuanSteps = [
  { num: '01', title: '피부 상태 진단' },
  { num: '02', title: '원장 1:1 상담' },
  { num: '03', title: '마취 크림 도포' },
  { num: '04', title: '미주안 주사 시술' },
  { num: '05', title: '모델링팩 진정 관리' },
]

const shrinkFeatures = [
  '비침습적 리프팅 — 절개 없이 피부 탄력 회복',
  'SMAS층까지 도달하는 깊은 초음파 에너지',
  '콜라겐 재생 촉진으로 장기적 효과 지속',
  '시술 시간 30~60분, 일상생활 즉시 복귀',
  '처진 턱선·이중턱·볼 탄력 개선',
]

const shrinkTargets = [
  '피부 처짐이 신경 쓰이는 분',
  '턱선·볼라인 리프팅을 원하는 분',
  '비침습 시술을 선호하는 분',
  '시술 후 바로 일상으로 복귀하고 싶은 분',
  '탄력 있는 피부를 오래 유지하고 싶은 분',
]

export const metadata: Metadata = {
  title: '피부진료 | 상무365한방병원',
  description: '한방 피부진료, 미주안 스킨부스터, 슈링크 유니버스 HIFU 리프팅. 체질 개선부터 피부 미용까지.',
}

export default function SkinPage() {
  return (
    <>
      <SubPageHeader title="피부진료" subtitle="DERMATOLOGY & AESTHETICS" />

      {/* 소개 */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <SectionHeader subtitle="DERMATOLOGY" title="한방 피부진료" centered={false} />
              <p className="text-base text-text-body leading-[1.8] mb-4">
                한방 피부진료는 피부 증상의 외적 치료뿐 아니라
                <strong className="text-text-main"> 체질과 내부 원인을 함께 살펴 근본적인 치료</strong>를 추구합니다.
              </p>
              <p className="text-base text-text-body leading-[1.8]">
                한약, 약침, 외용제 등을 활용하여 다양한 피부질환을 치료하며,
                <strong className="text-text-main"> 미주안 스킨부스터</strong>와 <strong className="text-text-main">슈링크 유니버스 HIFU</strong> 등
                최신 피부미용 시술도 함께 제공합니다.
              </p>
            </div>
            <div className="md:w-[40%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage
                  src={IMAGES.skin.main}
                  alt="피부진료"
                  className="w-full h-[260px] md:h-[340px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 진료 분야 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="TREATMENTS" title="진료 분야" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {conditions.map((c) => (
              <div key={c.name} className="bg-white rounded-xl p-5 text-center">
                <Sparkles className="w-7 h-7 text-primary mx-auto mb-3" strokeWidth={1.5} />
                <p className="text-base font-bold text-text-main">{c.name}</p>
                <p className="text-[14px] text-text-muted mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ──────── 미주안 스킨부스터 ──────── */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="SKIN BOOSTER" title="미주안 (美主顔)" />
          <p className="text-base text-text-body leading-[1.8] text-center mb-10 max-w-[720px] mx-auto">
            미주안은 연어에서 추출·정제한 고순도 PN(Polynucleotide) 성분의 스킨부스터 약침입니다.
            피부 진피층 환경을 개선하고 구조를 복원하여 <strong className="text-text-main">콜라겐 생성을 촉진</strong>합니다.
          </p>

          <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
            {/* 이미지 */}
            <div className="md:w-[38%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage
                  src={IMAGES.skin.mijuan}
                  alt="미주안 스킨부스터"
                  className="w-full h-[260px] md:h-[340px]"
                />
              </div>
            </div>

            {/* 핵심 특징 */}
            <div className="flex-1">
              <div className="bg-primary-subtle rounded-xl p-6">
                <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-primary" />
                  미주안 핵심 특징
                </h3>
                <ul className="space-y-3">
                  {mijuanPoints.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <CheckCircle className="w-[18px] h-[18px] text-primary shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-[15px] text-text-body">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 추천 대상 */}
          <h3 className="text-lg font-bold text-text-main mb-4">이런 분께 추천합니다</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {mijuanTargets.map((t) => (
              <div key={t} className="flex items-center gap-2.5 px-4 py-3 border border-border-light rounded-lg">
                <CheckCircle className="w-5 h-5 text-success shrink-0" strokeWidth={2} />
                <span className="text-[15px] font-medium text-text-main">{t}</span>
              </div>
            ))}
          </div>

          {/* 연령대별 효과 */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-bg-section rounded-xl p-5 text-center">
              <Badge className="mb-2">10대</Badge>
              <p className="text-[15px] text-text-body">여드름 흉터 재생 및<br />피부톤 유지</p>
            </div>
            <div className="bg-bg-section rounded-xl p-5 text-center">
              <Badge className="mb-2">20~30대</Badge>
              <p className="text-[15px] text-text-body">모공 축소·탄력 증가<br />피부톤 개선</p>
            </div>
            <div className="bg-bg-section rounded-xl p-5 text-center">
              <Badge className="mb-2">40~60대</Badge>
              <p className="text-[15px] text-text-body">잔주름 개선·탄력 증가<br />안티에이징</p>
            </div>
          </div>

          {/* 시술 순서 */}
          <h3 className="text-lg font-bold text-text-main mb-4">시술 순서</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            {mijuanSteps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="bg-white border border-border-light rounded-xl p-4 text-center h-full">
                  <div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold text-[14px] mx-auto">
                    {step.num}
                  </div>
                  <p className="text-[15px] font-medium text-text-main mt-2">{step.title}</p>
                </div>
                {i < mijuanSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 text-primary/40 text-lg font-bold">›</div>
                )}
              </div>
            ))}
          </div>

          {/* 시술 주기 */}
          <div className="bg-bg-section rounded-xl p-5">
            <p className="text-[15px] text-text-body leading-[1.8]">
              <strong className="text-text-main">시술 주기:</strong> 1개월 간격으로 총 3회 초기 집중 시술 후,
              6개월~1년에 한 번 리터치를 추천합니다. 지속시간은 평균 6개월 이상입니다.
            </p>
          </div>
        </Container>
      </section>

      {/* ──────── 슈링크 유니버스 HIFU ──────── */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="HIFU LIFTING" title="슈링크 유니버스" />
          <p className="text-base text-text-body leading-[1.8] text-center mb-10 max-w-[720px] mx-auto">
            슈링크 유니버스는 고강도 집속 초음파(HIFU)를 이용한 <strong className="text-text-main">비침습 리프팅 기기</strong>입니다.
            피부 깊숙한 SMAS층까지 초음파 에너지를 전달하여 콜라겐 재생을 촉진하고 자연스러운 리프팅 효과를 제공합니다.
          </p>

          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-10 mb-10">
            {/* 이미지 */}
            <div className="md:w-[38%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage
                  src={IMAGES.skin.shrink}
                  alt="슈링크 유니버스 HIFU"
                  className="w-full h-[260px] md:h-[340px]"
                />
              </div>
            </div>

            {/* 특징 */}
            <div className="flex-1">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  슈링크 유니버스 특징
                </h3>
                <ul className="space-y-3">
                  {shrinkFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle className="w-[18px] h-[18px] text-primary shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-[15px] text-text-body">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 추천 대상 */}
          <h3 className="text-lg font-bold text-text-main mb-4">이런 분께 추천합니다</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {shrinkTargets.map((t) => (
              <div key={t} className="flex items-center gap-2.5 px-4 py-3 bg-white border border-border-light rounded-lg">
                <CheckCircle className="w-5 h-5 text-success shrink-0" strokeWidth={2} />
                <span className="text-[15px] font-medium text-text-main">{t}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 bg-primary-subtle">
        <Container narrow>
          <div className="text-center max-w-[640px] mx-auto">
            <Badge className="mb-4">피부진료</Badge>
            <h3 className="text-xl md:text-2xl font-bold text-text-main mb-4">
              건강한 피부, 아름다운 피부
            </h3>
            <p className="text-base text-text-body leading-[1.8] mb-8">
              피부 고민이 있으시다면 한방 피부 전문의와 상담하세요.<br className="hidden sm:inline" />
              체질 분석부터 최신 피부미용 시술까지 맞춤 솔루션을 제안합니다.
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
