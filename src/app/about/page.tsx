import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Users, Shield, Award, Phone, Building2, Stethoscope, Heart } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import HospitalImage from '@/components/ui/HospitalImage'
import { IMAGES } from '@/lib/imagePaths'
import { HOSPITAL } from '@/lib/constants'

const strengths = [
  {
    icon: Clock,
    title: '365일 진료',
    desc: '주말·공휴일 포함 매일 진료\n야간 20시까지 · 점심시간 없음',
  },
  {
    icon: Users,
    title: '전문의 5인 협진',
    desc: '한의사 4인 + 정형외과 전문의\n정확한 진단과 맞춤 치료',
  },
  {
    icon: Shield,
    title: '24시간 간호 케어',
    desc: '전담 간호팀 운영\n입원 환자 24시간 케어',
  },
  {
    icon: Award,
    title: '프리미엄 장비',
    desc: '스위스 Storz Medical 충격파\n삼성메디슨 초음파 등',
  },
]

const philosophy = [
  { icon: Stethoscope, title: '정확한 진단', desc: '한양방 협진으로 통증의 근본 원인을 정확히 파악합니다.' },
  { icon: Heart, title: '환자 중심 치료', desc: '환자 한분 한분의 상태에 맞는 최적의 치료 계획을 수립합니다.' },
  { icon: Building2, title: '쾌적한 환경', desc: '최신 시설과 쾌적한 입원 환경으로 빠른 회복을 돕습니다.' },
]

const facilities = ['대기실', '치료실', '입원실', '도수치료실']

export const metadata: Metadata = {
  title: '병원소개 | 상무365한방병원',
  description: '상무365한방병원 - 365일 진료, 한양방 협진, 전문의 5인. 교통사고 후유증, 척추·관절 통증 전문.',
}

export default function AboutPage() {
  return (
    <>
      <SubPageHeader title="병원소개" subtitle="ABOUT US" />

      {/* 인사말 */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <SectionHeader subtitle="GREETING" title="환자분의 건강한 일상을 위해" centered={false} />
              <div className="text-base text-text-body leading-[1.9] space-y-4">
                <p>
                  안녕하세요, 상무365한방병원 대표원장 <strong className="text-text-main">박준규</strong>입니다.
                </p>
                <p>
                  저희 병원은 <strong className="text-text-main">한의사와 정형외과 전문의가 함께 진료하는 한양방 협진 병원</strong>으로,
                  교통사고 후유증, 척추·관절 통증, 체형교정, 피부질환 등
                  다양한 분야에서 기본에 충실한 치료를 제공합니다.
                </p>
                <p>
                  365일 쉬지 않고, 야간 20시까지 진료하여
                  <strong className="text-text-main"> 언제든 필요할 때 찾아주실 수 있는 병원</strong>이 되겠습니다.
                  환자분 한분 한분의 빠른 회복과 건강한 일상 복귀를 위해 최선을 다하겠습니다.
                </p>
              </div>
              <p className="text-lg font-bold text-text-main mt-6">
                대표원장 박준규
              </p>
            </div>
            <div className="md:w-[38%] w-full shrink-0">
              <div className="rounded-xl overflow-hidden">
                <HospitalImage
                  src={IMAGES.doctors['park-junkyu']}
                  alt="대표원장 박준규"
                  className="w-full h-[300px] md:h-[400px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 핵심 강점 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="STRENGTHS" title="상무365의 강점" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {strengths.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-text-main">{s.title}</h3>
                <p className="text-[15px] text-text-muted mt-2 whitespace-pre-line">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 진료 철학 */}
      <section className="py-10 md:py-14">
        <Container>
          <SectionHeader subtitle="PHILOSOPHY" title="진료 철학" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {philosophy.map((p) => (
              <div key={p.title} className="bg-primary-subtle rounded-xl p-6 text-center">
                <p.icon className="w-8 h-8 text-primary mx-auto mb-3" strokeWidth={1.5} />
                <p className="text-base font-bold text-text-main mb-2">{p.title}</p>
                <p className="text-base text-text-body leading-[1.7]">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 시설 안내 */}
      <section className="py-10 md:py-14 bg-bg-section">
        <Container>
          <SectionHeader subtitle="FACILITY" title="병원 시설" />
          <div className="grid grid-cols-2 gap-4">
            {facilities.map((label, i) => (
              <div key={label} className="rounded-xl overflow-hidden relative">
                <HospitalImage src={IMAGES.facility[i] || ''} alt={label} className="w-full h-[200px] md:h-[280px]" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-bold text-base">{label}</p>
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
            <Badge className="mb-4">상무365한방병원</Badge>
            <h3 className="text-2xl md:text-[28px] font-bold text-text-main mb-4">
              365일 언제든 찾아주세요
            </h3>
            <p className="text-base text-text-body leading-[1.8] mb-8">
              야간 20시까지, 점심시간 없이 연속진료.<br />
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
