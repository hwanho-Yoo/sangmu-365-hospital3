'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, MapPin } from 'lucide-react'
import SubPageHeader from '@/components/shared/SubPageHeader'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { HOSPITAL } from '@/lib/constants'

const subjects = [
  '선택해주세요',
  '교통사고 후유증',
  '한방치료',
  '도수·체형교정',
  '체외충격파',
  '피부진료',
  '입원상담',
  '기타',
]

export default function ReservationPage() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '', agreed: false })

  return (
    <>
      <SubPageHeader title="진료예약" subtitle="RESERVATION" />

      {/* Form */}
      <section className="py-10 md:py-14">
        <Container narrow>
          <SectionHeader subtitle="RESERVATION" title="진료예약" />
          <p className="text-[15px] text-text-muted text-center mb-8">
            아래 양식을 작성해주시면 상담사가 확인 후 연락드립니다.
          </p>

          <div className="max-w-[560px] mx-auto">
            <div className="mb-5">
              <label className="block text-base font-medium text-text-main mb-2">성함</label>
              <input
                type="text"
                placeholder="성함을 입력해주세요"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-12 border border-border-main rounded-lg px-4 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="mb-5">
              <label className="block text-base font-medium text-text-main mb-2">연락처</label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full h-12 border border-border-main rounded-lg px-4 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="mb-5">
              <label className="block text-base font-medium text-text-main mb-2">희망 진료과목</label>
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full h-12 border border-border-main rounded-lg px-4 text-base bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {subjects.map((s) => (
                  <option key={s} value={s === '선택해주세요' ? '' : s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-base font-medium text-text-main mb-2">증상 및 문의사항</label>
              <textarea
                rows={4}
                placeholder="증상이나 문의사항을 간단히 적어주세요"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border-main rounded-lg px-4 py-3 text-base min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.agreed}
                  onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-primary"
                />
                <span className="text-base text-text-body">
                  개인정보 수집 및 이용에 동의합니다. (필수)
                  <span className="block text-sm text-text-muted mt-1">
                    수집목적: 진료예약 상담 / 수집항목: 성함, 연락처 / 보유기간: 상담 완료 후 삭제
                  </span>
                </span>
              </label>
            </div>

            <button
              type="button"
              className="w-full h-12 bg-primary text-white rounded-lg font-semibold text-base hover:bg-primary-hover transition-colors"
            >
              예약 신청하기
            </button>
          </div>
        </Container>
      </section>

      {/* 다른 예약 방법 */}
      <section className="py-10 md:py-12 bg-bg-section">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Phone className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
              <p className="text-base font-bold text-text-main mt-3">전화예약</p>
              <a
                href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                className="block text-xl font-bold text-primary mt-1"
              >
                {HOSPITAL.phone}
              </a>
              <p className="text-[15px] text-text-muted mt-1">365일 상담 가능</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <MessageCircle className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
              <p className="text-base font-bold text-text-main mt-3">카카오톡 상담</p>
              <p className="text-base text-text-body mt-1">간편하게 상담하세요</p>
              <a
                href={HOSPITAL.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-primary font-medium mt-2 inline-block hover:underline"
              >
                카카오톡 바로가기 →
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <MapPin className="w-8 h-8 text-primary mx-auto" strokeWidth={1.5} />
              <p className="text-base font-bold text-text-main mt-3">방문 접수</p>
              <p className="text-base text-text-body mt-1 whitespace-pre-line">
                {'광주 서구 치평동\nH.K빌딩 9층'}
              </p>
              <Link
                href="/directions"
                className="text-[15px] text-primary font-medium mt-2 inline-block hover:underline"
              >
                오시는길 보기 →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
