import type { Metadata } from 'next'
import { Sparkles, CheckCircle, Droplets, Zap } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

const conditions = [
  '아토피 피부염',
  '여드름·흉터',
  '건선·습진',
  '두드러기',
  '탈모',
  '피부미용',
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
  '피부 상태 진단',
  '원장 1:1 상담',
  '마취 크림 도포',
  '미주안 주사 시술',
  '모델링팩 진정 관리',
]

const mijuanPoints = [
  '연어에서 추출·정제한 고순도 PN(Polynucleotide) 성분',
  '피부 진피층 환경 개선 및 구조 복원',
  '콜라겐 생성 촉진으로 탄력·잔주름 개선',
  '항염작용으로 붉고 예민한 피부 진정',
  '사람 DNA와 95% 이상 흡사한 높은 생체적합성',
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
}

export default function SkinPage() {
  return (
    <>
      <SubPageHeader title="피부진료" subtitle="DERMATOLOGY" />

      {/* 소개 */}
      <section className="py-10 md:py-14">
        <Container narrow>
          <SectionHeader subtitle="DERMATOLOGY" title="한방 피부진료" />
          <p className="text-base text-text-body leading-[1.8] text-center">
            한방 피부진료는 피부 증상의 외적 치료뿐 아니라 체질과 내부 원인을 함께 살펴
            근본적인 치료를 추구합니다. 한약, 약침, 외용제 등을 활용하여 다양한 피부질환을 치료합니다.
          </p>
        </Container>
      </section>

      {/* 진료 분야 */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <SectionHeader title="진료 분야" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {conditions.map((c) => (
              <div key={c} className="bg-white rounded-lg p-5 text-center">
                <Sparkles className="w-6 h-6 text-primary mx-auto" strokeWidth={1.5} />
                <p className="text-base font-bold text-text-main mt-2">{c}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 미주안 스킨부스터 */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="SKIN BOOSTER" title="미주안 (美主顔)" />
          <p className="text-base text-text-body leading-[1.8] text-center mb-8 max-w-[720px] mx-auto">
            미주안은 연어에서 추출·정제한 고순도 PN(Polynucleotide) 성분의 스킨부스터 약침입니다.
            피부 진피층 환경을 개선하고 구조를 복원하여 손상된 피부를 회복시키고 콜라겐 생성을 촉진합니다.
          </p>

          {/* 핵심 특징 */}
          <div className="bg-primary-subtle rounded-xl p-6 md:p-8 mb-8">
            <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
              <Droplets className="w-5 h-5 text-primary" />
              미주안 핵심 특징
            </h3>
            <ul className="space-y-3">
              {mijuanPoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <CheckCircle className="w-[18px] h-[18px] text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-base text-text-body">{p}</span>
                </li>
              ))}
            </ul>
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
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            {mijuanSteps.map((step, i) => (
              <div key={step} className="flex-1 flex items-center gap-3 bg-white border border-border-light rounded-lg p-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-[15px] shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <span className="text-[15px] font-medium text-text-main">{step}</span>
              </div>
            ))}
          </div>

          {/* 시술 주기 */}
          <div className="bg-bg-section rounded-lg p-5">
            <p className="text-[15px] text-text-body leading-[1.8]">
              <strong className="text-text-main">시술 주기:</strong> 1개월 간격으로 총 3회 초기 집중 시술 후,
              6개월~1년에 한 번 리터치를 추천합니다. 지속시간은 평균 6개월 이상입니다.
            </p>
          </div>
        </Container>
      </section>

      {/* 슈링크 유니버스 HIFU */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="HIFU LIFTING" title="슈링크 유니버스" />
          <p className="text-base text-text-body leading-[1.8] text-center mb-8 max-w-[720px] mx-auto">
            슈링크 유니버스는 고강도 집속 초음파(HIFU)를 이용한 비침습 리프팅 기기입니다.
            피부 깊숙한 SMAS층까지 초음파 에너지를 전달하여 콜라겐 재생을 촉진하고 자연스러운 리프팅 효과를 제공합니다.
          </p>

          {/* 특징 */}
          <div className="bg-white rounded-xl p-6 md:p-8 mb-8">
            <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              슈링크 유니버스 특징
            </h3>
            <ul className="space-y-3">
              {shrinkFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckCircle className="w-[18px] h-[18px] text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-base text-text-body">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 추천 대상 */}
          <h3 className="text-lg font-bold text-text-main mb-4">이런 분께 추천합니다</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {shrinkTargets.map((t) => (
              <div key={t} className="flex items-center gap-2.5 px-4 py-3 bg-white border border-border-light rounded-lg">
                <CheckCircle className="w-5 h-5 text-success shrink-0" strokeWidth={2} />
                <span className="text-[15px] font-medium text-text-main">{t}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
