'use client'

import { useEffect, useState } from 'react'
import { Phone, MapPin, Navigation, CalendarCheck, Clock, ParkingCircle, Calendar } from 'lucide-react'
import NaverStaticMap from '@/components/traffic/NaverStaticMap'
import { HOSPITAL } from '@/lib/constants'

const NAVER_MAP_URL =
  'https://map.naver.com/p/search/%EC%83%81%EB%AC%B4365%ED%95%9C%EB%B0%A9%EB%B3%91%EC%9B%90/place/1090492719'

const DAY_NAMES = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

function getStatus(date: Date) {
  const day = date.getDay()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const now = hour + minute / 60

  const isWeekend = day === 0 || day === 6
  const open = 9
  const close = isWeekend ? 16 : 20

  if (now >= open && now < close) {
    const remaining = close - now
    if (remaining < 1) return { state: 'closing', label: '곧 마감', detail: `${close}:00 마감` }
    return { state: 'open', label: '진료중', detail: `오늘 ${close}:00까지` }
  }
  return { state: 'closed', label: '진료마감', detail: `다음 ${open}:00 오픈` }
}

export default function VisitInfoCard() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const t = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(t)
  }, [])

  const status = now ? getStatus(now) : null
  const todayName = now ? DAY_NAMES[now.getDay()] : ''
  const isWeekend = now ? now.getDay() === 0 || now.getDay() === 6 : false

  const stateColor =
    status?.state === 'open'
      ? 'bg-[#22c55e]'
      : status?.state === 'closing'
      ? 'bg-[#f59e0b]'
      : 'bg-[#ef4444]'

  return (
    <div className="space-y-6">
      {/* ─── 상단: 지도 + 정보 카드 (좌우) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-6 items-stretch">

        {/* 왼쪽: 지도 + 주소 */}
        <div className="flex flex-col rounded-3xl overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
          <div className="relative flex-1 min-h-[420px] lg:min-h-0">
            <div className="absolute inset-0 [&>div]:!h-full [&>div]:!rounded-none [&>a]:!block [&>a]:!h-full [&>a]:!rounded-none [&>a>img]:!h-full [&>a>img]:!w-full [&>a>img]:!object-cover">
              <NaverStaticMap />
            </div>
          </div>
          {/* 지도 하단 주소 바 */}
          <div className="flex items-center gap-4 px-6 md:px-8 py-5 border-t border-[#f0f0f0]">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-[#e8f4f0] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#2a7d6a]" />
            </div>
            <div className="min-w-0">
              <p className="text-[#111] text-base md:text-lg font-black mb-0.5">{HOSPITAL.name}</p>
              <p className="text-[#666] text-xs md:text-sm leading-relaxed">
                광주 서구 상무중앙로 96 · H.K 복합빌딩 9~11층
              </p>
            </div>
          </div>
        </div>

        {/* 오른쪽: 정보 카드 */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] flex flex-col">
          {/* 라이브 상태 배지 */}
          {status && (
            <div className="inline-flex items-center gap-2.5 self-start bg-[#f7faf9] border border-[#e8f4f0] rounded-full px-4 py-2 mb-7">
              <span className="relative flex w-2.5 h-2.5">
                {status.state === 'open' && (
                  <span className={`absolute inline-flex w-full h-full rounded-full ${stateColor} opacity-60 animate-ping`} />
                )}
                <span className={`relative inline-flex w-2.5 h-2.5 rounded-full ${stateColor}`} />
              </span>
              <span className="text-sm font-bold text-[#111]">{status.label}</span>
              <span className="text-xs text-[#888]">{status.detail}</span>
            </div>
          )}

          {/* 오늘 시간 강조 */}
          <div className="mb-7">
            <p className="text-[#999] text-sm tracking-wide mb-2">{todayName} 진료시간</p>
            <p className="text-[#111] text-[38px] md:text-[48px] font-black leading-none tabular-nums tracking-tight">
              {isWeekend ? '09:00 — 16:00' : '09:00 — 20:00'}
            </p>
          </div>

          {/* 주중/주말 시간 */}
          <div className="bg-[#fafafa] rounded-2xl p-5 mb-7 space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-[#666] text-sm">
                <Clock className="w-4 h-4" />
                <span>평일 (월~금)</span>
              </div>
              <span className="text-[#111] text-base font-bold tabular-nums">09:00 — 20:00</span>
            </div>
            <div className="h-px bg-[#eee]" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-[#666] text-sm">
                <Calendar className="w-4 h-4" />
                <span>토·일·공휴일</span>
              </div>
              <span className="text-[#111] text-base font-bold tabular-nums">09:00 — 16:00</span>
            </div>
          </div>

          {/* 신뢰 칩 */}
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#e8f4f0] text-[#2a7d6a] px-3 py-2 rounded-full">
              <ParkingCircle className="w-3.5 h-3.5" /> 주차 가능
            </span>
            <span className="text-xs font-semibold bg-[#e8f4f0] text-[#2a7d6a] px-3 py-2 rounded-full">
              365일 진료
            </span>
            <span className="text-xs font-semibold bg-[#e8f4f0] text-[#2a7d6a] px-3 py-2 rounded-full">
              야간진료
            </span>
            <span className="text-xs font-semibold bg-[#e8f4f0] text-[#2a7d6a] px-3 py-2 rounded-full">
              점심시간 없음
            </span>
          </div>
        </div>
      </div>

      {/* ─── 하단: 액션 버튼 바 (풀와이드) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1) 전화상담 — 브랜드 다크 그린 (Solid) */}
        <a
          href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
          className="group flex items-center justify-between gap-4 px-7 py-6 bg-[#1e5a4d] text-white rounded-2xl hover:bg-[#174a3f] transition-colors shadow-[0_8px_24px_rgba(30,90,77,0.25)]"
        >
          <div>
            <p className="text-xs text-white/70 tracking-wide mb-1">전화 상담</p>
            <p className="text-xl md:text-2xl font-black tabular-nums">{HOSPITAL.phone}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
            <Phone className="w-5 h-5" />
          </div>
        </a>

        {/* 2) 네이버 길찾기 — 화이트 + 네이버 그린 액센트 (Outline) */}
        <a
          href={NAVER_MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-4 px-7 py-6 bg-white text-[#111] border-[1.5px] border-[#03C75A] rounded-2xl hover:bg-[#f3fbf6] transition-colors shadow-[0_8px_24px_rgba(3,199,90,0.12)]"
        >
          <div>
            <p className="text-xs text-[#03C75A] tracking-wide mb-1 font-bold">NAVER MAP</p>
            <p className="text-xl md:text-2xl font-black">길찾기</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#03C75A]/10 flex items-center justify-center text-[#03C75A] group-hover:bg-[#03C75A]/20 transition-colors">
            <Navigation className="w-5 h-5" />
          </div>
        </a>

        {/* 3) 네이버 예약 — 네이버 그린 (Solid) */}
        <a
          href={HOSPITAL.naver}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-4 px-7 py-6 bg-[#03C75A] text-white rounded-2xl hover:brightness-95 transition shadow-[0_8px_24px_rgba(3,199,90,0.25)]"
        >
          <div>
            <p className="text-xs text-white/80 tracking-wide mb-1 font-bold">NAVER 예약</p>
            <p className="text-xl md:text-2xl font-black">간편 예약</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
            <CalendarCheck className="w-5 h-5" />
          </div>
        </a>
      </div>
    </div>
  )
}
