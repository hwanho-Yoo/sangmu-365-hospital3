import { Clock, Users, Shield, Award } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import HospitalImage from '@/components/ui/HospitalImage'

const strengths = [
  {
    icon: Clock,
    title: '365일 진료',
    desc: '점심시간 없이 매일 진료\n야간 20시까지 운영',
  },
  {
    icon: Users,
    title: '전문의 5인 협진',
    desc: '한의사 4인 + 정형외과 전문의\n정확한 진단과 치료',
  },
  {
    icon: Shield,
    title: '상급 간호 서비스',
    desc: '전담 간호팀 운영\n환자 한분 한분 꼼꼼한 케어',
  },
  {
    icon: Award,
    title: '프리미엄 의료장비',
    desc: '스톨즈 체외충격파 등\n최신 장비 보유',
  },
]

const facilities = ['대기실', '치료실', '입원실', '도수치료실']

export default function AboutPage() {
  return (
    <>
      <SubPageHeader title="병원소개" subtitle="ABOUT" />

      {/* 인사말 */}
      <section className="py-9 md:py-14">
        <Container narrow>
          <SectionHeader subtitle="ABOUT" title="상무365한방병원을 소개합니다" />
          <div className="text-[15px] text-text-body leading-[1.9] text-center space-y-4">
            <p>
              상무365한방병원은 환자분의 빠른 회복과 건강한 일상 복귀를 위해
              한의사와 정형외과 전문의가 함께 진료하는 한양방 협진 병원입니다.
            </p>
            <p>
              교통사고 후유증, 척추·관절 통증, 체형교정, 피부질환 등
              다양한 분야에서 기본에 충실한 치료를 제공합니다.
            </p>
            <p>
              365일 쉬지 않고, 야간진료까지 운영하여
              언제든 필요할 때 찾아주실 수 있습니다.
            </p>
          </div>
          <p className="text-base font-bold text-text-main text-center mt-6">
            대표원장 박준규
          </p>
        </Container>
      </section>

      {/* 핵심 강점 */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {strengths.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 md:p-7 text-center shadow-sm">
                <s.icon className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
                <h3 className="text-base font-bold text-text-main mt-3">{s.title}</h3>
                <p className="text-[13px] text-text-muted mt-2 whitespace-pre-line">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 시설 안내 */}
      <section className="py-10 md:py-12">
        <Container>
          <SectionHeader subtitle="FACILITY" title="병원 시설" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {facilities.map((label) => (
              <div key={label} className="rounded-xl overflow-hidden">
                <HospitalImage src="" alt={label} className="w-full h-[200px] md:h-[280px]" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
