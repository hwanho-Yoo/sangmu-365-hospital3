'use client'

import { Phone, MessageCircle, CalendarCheck } from 'lucide-react'
import { HOSPITAL } from '@/lib/constants'

export default function MobileBottomCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border-main pb-safe">
      <div className="grid grid-cols-3 h-14">
        <a
          href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
          className="flex flex-col items-center justify-center gap-0.5 text-text-main active:bg-gray-50"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-medium">전화상담</span>
        </a>
        <a
          href={HOSPITAL.kakao}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 bg-kakao text-[#3C1E1E] active:brightness-95"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-medium">카카오상담</span>
        </a>
        <a
          href="/reservation"
          className="flex flex-col items-center justify-center gap-0.5 bg-primary text-white active:bg-primary-hover"
        >
          <CalendarCheck className="w-5 h-5" />
          <span className="text-[10px] font-medium">진료예약</span>
        </a>
      </div>
    </div>
  )
}
