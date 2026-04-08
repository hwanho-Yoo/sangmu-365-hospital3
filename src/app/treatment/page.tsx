import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, CheckCircle, MessageCircle, ArrowRight, Sparkles, Droplets, Scissors } from 'lucide-react'
import TrafficHero from '@/components/traffic/TrafficHero'
import NaverStaticMap from '@/components/traffic/NaverStaticMap'
import Container from '@/components/ui/Container'
import HospitalImage from '@/components/ui/HospitalImage'
import FadeIn from '@/components/ui/FadeIn'
import { HOSPITAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '한방치료 프로그램 | 상무365한방병원',
  description: 'INDIBA 심부재생·미주모 탈모치료·리포컷 약침·간호등급 2등급. 입원부터 퇴원까지 프리미엄 케어. 062-385-9000',
}

export default function TreatmentPage() {
  return (
    <>
      {/* ══ 1. 히어로 ══ */}
      <TrafficHero />

      {/* ══ 2. 4대 핵심 프로그램 요약 스트립 ══ */}
      <section className="bg-primary">
        <Container>
          <div className="py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-white text-center">
            {[
              { label: 'INDIBA', title: '심부재생 치료', sub: '깊은 조직까지' },
              { label: 'MIZUMO', title: '미주모 탈모치료', sub: 'PDRN 한방 메디컬' },
              { label: 'LIPOCUT', title: '리포컷 약침', sub: '국소라인 집중 케어' },
              { label: 'GRADE 2', title: '간호등급 2등급', sub: '24시간 전담 케어' },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 80}>
                <div className="py-3">
                  <p className="text-white/50 text-xs tracking-[0.2em] uppercase font-bold mb-1">{item.label}</p>
                  <p className="text-xl md:text-2xl font-black leading-tight">{item.title}</p>
                  <p className="text-white/60 text-sm mt-1">{item.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ 3. INDIBA — 풀와이드 다크 히어로 섹션 ══ */}
      <section className="py-24 md:py-36 bg-text-main text-white overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <FadeIn className="flex-1">
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-4 block">INDIBA ACTIV · PREMIUM RECOVERY</span>
              <h2 className="text-[36px] md:text-[56px] font-black leading-[1.1] tracking-tight mb-6">
                일반 물리치료로는<br />
                닿지 못하는<br />
                <span className="text-primary">깊은 곳까지</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl leading-[1.8] mb-8 max-w-[500px]">
                사고 후 겉으로는 멀쩡해 보여도, 깊은 조직은 여전히 손상된 상태입니다.
                INDIBA 심부재생 치료는 448kHz 고주파로 손상 부위 깊숙이 온열에너지를 투여하여
                일반 치료로는 도달할 수 없는 곳의 조직재생을 촉진합니다.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  { title: '수술 없이, 절개 없이', desc: '448kHz 고주파가 피부 손상 없이 심부 조직까지 도달' },
                  { title: '사고 직후부터 바로 적용', desc: '급성기에도 시술 가능 — 골든타임을 놓치지 않습니다' },
                  { title: '일반 치료 대비 2배 빠른 회복', desc: '세포 재생과 혈류 개선을 동시에 촉진' },
                  { title: '부종·염증·통증, 한 번에', desc: '줄 효과(Joule Effect)로 부기와 염증까지 빠르게 해소' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">{item.title}</p>
                      <p className="text-white/50 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex gap-x-10 gap-y-3 flex-wrap">
                {[
                  { value: '80+', label: '도입 국가' },
                  { value: '400+', label: '임상 논문' },
                  { value: '448kHz', label: '특허 주파수' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-[32px] md:text-[40px] font-black text-primary leading-none">{s.value}</p>
                    <p className="text-white/40 text-sm mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={150} className="w-full md:w-[45%] shrink-0">
              <div className="flex flex-col gap-4">
                <div className="rounded-3xl overflow-hidden">
                  <Image
                    src="/images/program/indiba-treatment.jpg"
                    alt="INDIBA 심부재생 치료 시술"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-black/50">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay loop muted playsInline
                    poster="https://static.wixstatic.com/media/387e19_beabc265f25047cfb62d1d2cdcb660aff000.jpg/v1/fill/w_640,h_1080,al_c,q_85,enc_avif,quality_auto/387e19_beabc265f25047cfb62d1d2cdcb660aff000.jpg"
                  >
                    <source src="https://video.wixstatic.com/video/387e19_beabc265f25047cfb62d1d2cdcb660af/720p/mp4/file.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 이런 분께 추천 */}
          <FadeIn>
            <div className="mt-20 pt-16 border-t border-white/10">
              <h3 className="text-center text-[24px] md:text-[32px] font-black text-white mb-10">이런 분이라면, 인디바를 꼭 받아보세요</h3>
              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  '치료를 받아도 통증이 계속 남는 분',
                  '부종·염증이 좀처럼 빠지지 않는 분',
                  '근육·인대 손상이 깊은 분',
                  '수술 없이 회복하고 싶은 분',
                  '사고 후 수면장애·만성피로가 있는 분',
                  '빠르게 일상으로 복귀해야 하는 분',
                ].map((text, i) => (
                  <FadeIn key={text} delay={i * 50}>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <p className="text-base font-medium text-white/80">{text}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ══ 4. 미주모 탈모치료 — 이미지 + 텍스트 ══ */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="w-full md:w-[48%] shrink-0">
                <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/images/program/mizumo.png"
                    alt="미주모 탈모치료"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-4 block">MIZUMO · HAIR RESTORATION</span>
                <h2 className="text-[32px] md:text-[48px] font-black text-text-main leading-[1.15] tracking-tight mb-6">
                  빠지는 머리카락,<br />
                  <span className="text-primary">다시 채워드립니다</span>
                </h2>
                <p className="text-lg md:text-xl text-text-body leading-[1.8] mb-8">
                  미주모는 PDRN 기반 한방 메디컬 탈모 치료입니다.
                  두피에 직접 영양을 공급하여 모낭을 활성화하고,
                  한약 처방과 병행하여 근본적인 탈모 원인을 치료합니다.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Droplets, title: 'PDRN 두피 주입', desc: '연어 유래 DNA 성분으로 모낭 세포 재생 촉진' },
                    { icon: Sparkles, title: '한방 두피 케어', desc: '체질별 한약 처방 + 침 치료로 두피 환경 개선' },
                    { icon: Scissors, title: '입원 중 병행 가능', desc: '교통사고 입원 치료 중에도 탈모 치료 동시 진행' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-text-main">{item.title}</p>
                        <p className="text-base text-text-body mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl px-6 py-4">
                  <p className="text-lg font-bold text-primary">&ldquo;입원 기간, 회복과 함께 탈모 치료까지&rdquo;</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ══ 5. 리포컷 약침 — 역방향 ══ */}
      <section className="py-20 md:py-32 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
              <div className="w-full md:w-[48%] shrink-0">
                <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/images/program/lipocut.png"
                    alt="리포컷 약침"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-4 block">LIPOCUT · BODY LINE CARE</span>
                <h2 className="text-[32px] md:text-[48px] font-black text-text-main leading-[1.15] tracking-tight mb-6">
                  천연물 기반<br />
                  <span className="text-primary">국소라인 집중 케어</span>
                </h2>
                <p className="text-lg md:text-xl text-text-body leading-[1.8] mb-8">
                  리포컷 약침은 천연물 성분을 활용한 한방 바디라인 케어 프로그램입니다.
                  원하는 부위에 직접 약침을 시술하여 국소적인 라인 개선을 돕습니다.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    '천연물 기반 — 한방 원료 사용으로 부작용 최소화',
                    '국소 부위 집중 — 원하는 부위만 정밀하게 시술',
                    '입원 중 병행 — 치료와 동시에 바디 케어 가능',
                    '의료진 직접 시술 — 한의사가 직접 시술하여 안전',
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-base text-text-body leading-[1.7]">{text}</p>
                    </li>
                  ))}
                </ul>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl px-6 py-4">
                  <p className="text-lg font-bold text-primary">&ldquo;입원 중, 회복과 함께 바디라인까지&rdquo;</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ══ 6. 간호등급 2등급 — 대형 임팩트 ══ */}
      <section className="py-24 md:py-36 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-4 block">NURSING GRADE</span>
              <div className="inline-flex items-center gap-5 mb-8">
                <span className="text-[120px] md:text-[160px] font-black text-primary leading-none">2</span>
                <div className="text-left">
                  <p className="text-3xl md:text-5xl font-black text-text-main">등급</p>
                  <p className="text-lg md:text-xl text-text-body">간호 인력 등급</p>
                </div>
              </div>
              <h2 className="text-[28px] md:text-[48px] font-black text-text-main leading-[1.2] mb-4">
                입원하시는 순간부터<br />퇴원하시는 순간까지
              </h2>
              <p className="text-lg md:text-xl text-text-body max-w-[600px] mx-auto leading-relaxed">
                간호등급 2등급은 아무 병원이나 받을 수 없습니다.<br />
                <span className="text-primary font-bold">충분한 간호 인력</span>이 확보되어야만 가능한 등급입니다.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto mb-12">
            {[
              { num: '24시간', title: '야간에도 즉시 대응', desc: '밤에 통증이 심해져도, 바로 간호사가 달려옵니다. 혼자 참고 기다리실 필요 없습니다.' },
              { num: '전담', title: '담당 간호사 배정', desc: '환자 한 분 한 분의 상태를 파악한 전담 간호사가 매일 케어합니다.' },
              { num: '안심', title: '보호자 없어도 안심', desc: '충분한 간호 인력이 보호자 역할까지 해드립니다. 혼자 입원하셔도 걱정 마세요.' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="text-center p-8 md:p-10 rounded-3xl bg-gray-50 hover:shadow-xl transition-all duration-300 h-full">
                  <p className="text-primary text-[40px] md:text-[48px] font-black mb-3">{item.num}</p>
                  <p className="text-xl md:text-2xl font-bold text-text-main mb-3">{item.title}</p>
                  <p className="text-base text-text-body leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 입원실 이미지 */}
          <FadeIn>
            <div className="rounded-3xl overflow-hidden max-w-[900px] mx-auto mb-10">
              <HospitalImage src="/images/traffic/traffic-adv-07.png" alt="프라이빗 회복 입원실" className="w-full h-auto" />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl px-6 py-5 max-w-[700px] mx-auto">
              <p className="text-lg md:text-xl font-bold text-text-main text-center">
                &ldquo;환자분은 <span className="text-primary">회복에만 집중</span>하세요. 나머지는 저희가 하겠습니다.&rdquo;
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ══ 7. 중간 CTA ══ */}
      <section className="py-14 md:py-20 bg-primary">
        <Container>
          <div className="text-center text-white">
            <h3 className="text-[28px] md:text-[40px] font-black mb-3">입원 상담, 지금 바로</h3>
            <p className="text-white/70 text-lg mb-8">365일 진료 · 야간 20시 · 24시간 입원 가능</p>
            <div className="flex flex-col min-[400px]:flex-row gap-4 justify-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary rounded-2xl font-bold text-xl hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {HOSPITAL.phone}
              </a>
              <a
                href={HOSPITAL.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/40 text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                카카오톡 상담
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ 8. 입원 중 프리미엄 혜택 요약 ══ */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-3 block">INPATIENT BENEFITS</span>
              <h2 className="text-[28px] md:text-[44px] font-black text-text-main tracking-tight">
                입원하시면, 이 모든 것을 함께 받으실 수 있습니다
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-[1000px] mx-auto">
            {[
              { image: '/images/program/indiba-treatment.jpg', title: 'INDIBA 심부재생', desc: '깊은 조직까지 온열 치료' },
              { image: '/images/program/mizumo.png', title: '미주모 탈모치료', desc: 'PDRN 한방 메디컬' },
              { image: '/images/program/lipocut.png', title: '리포컷 약침', desc: '국소라인 집중 케어' },
              { image: '/images/program/hicooks.png', title: '하이쿡스 스킨부스터', desc: '진공압 피부 개선' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="rounded-3xl overflow-hidden bg-gray-50 hover:shadow-xl transition-all duration-300 h-full group">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <div className="p-5 text-center">
                    <p className="text-lg font-black text-text-main">{item.title}</p>
                    <p className="text-sm text-text-body mt-1">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ 9. 진료시간 + 오시는 길 ══ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="flex-1">
              <FadeIn>
                <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-3 block">HOURS</span>
                <h2 className="text-[28px] md:text-[40px] font-black text-text-main mb-8 tracking-tight">진료시간</h2>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-border-light">
                  {[
                    { day: '평일', time: '09:00 ~ 20:00', sub: '점심 12:30~14:00', badge: '야간진료', badgeColor: 'bg-primary text-white' },
                    { day: '토·일', time: '09:00 ~ 15:00', sub: '점심시간 없이', badge: '365일', badgeColor: 'bg-primary-light text-primary' },
                    { day: '공휴일', time: '09:00 ~ 15:00', sub: '점심시간 없이', badge: '365일', badgeColor: 'bg-primary-light text-primary' },
                  ].map((row, i) => (
                    <div key={row.day} className={`flex items-center justify-between py-5 ${i < 2 ? 'border-b border-border-light' : ''}`}>
                      <div className="flex items-center gap-4">
                        <span className="text-lg md:text-xl font-black text-text-main min-w-[60px]">{row.day}</span>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${row.badgeColor}`}>{row.badge}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-lg md:text-xl font-bold text-text-main">{row.time}</p>
                        <p className="text-xs text-text-muted">{row.sub}</p>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6 bg-primary rounded-2xl p-5 text-center text-white">
                    <p className="text-2xl md:text-3xl font-black">24시간 야간 입원 가능</p>
                    <p className="text-white/70 text-sm mt-1">365일 평일, 주말, 공휴일</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="flex-1">
              <FadeIn>
                <span className="text-primary text-sm tracking-[0.2em] uppercase font-bold mb-3 block">LOCATION</span>
                <h2 className="text-[28px] md:text-[40px] font-black text-text-main mb-8 tracking-tight">오시는 길</h2>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="rounded-3xl overflow-hidden border border-border-light">
                  <NaverStaticMap />
                </div>
                <div className="mt-4">
                  <p className="text-lg font-bold text-text-main">상무365한방병원</p>
                  <p className="text-base text-text-body mt-1">광주 서구 상무중앙로 96, H.K 복합빌딩 9~11층</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ 10. 최종 CTA ══ */}
      <section className="py-24 md:py-36 bg-white text-center">
        <Container>
          <FadeIn>
            <h2 className="text-[36px] md:text-[56px] font-black text-text-main leading-[1.1] tracking-tight mb-6">
              회복 그 이상의<br /><span className="text-primary">프리미엄 케어</span>
            </h2>
            <p className="text-text-body text-lg md:text-2xl max-w-[520px] mx-auto mb-10 leading-relaxed">
              INDIBA · 미주모 · 리포컷 · 간호등급 2등급<br />
              상무365에서만 가능한 입원 치료
            </p>
            <div className="flex flex-col min-[400px]:flex-row gap-4 justify-center">
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-primary text-white rounded-2xl font-bold text-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                <Phone className="w-6 h-6" />
                {HOSPITAL.phone}
              </a>
              <a
                href={HOSPITAL.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 border-2 border-primary/30 text-primary rounded-2xl font-bold text-2xl hover:bg-primary-light transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                카카오톡 상담
              </a>
            </div>
            <p className="text-text-muted text-base mt-6">{HOSPITAL.addressShort} · 365일 진료 · 야간 20시</p>
          </FadeIn>
        </Container>
      </section>
    </>
  )
}
