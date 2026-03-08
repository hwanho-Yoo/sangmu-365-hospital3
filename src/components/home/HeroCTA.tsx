'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { HOSPITAL } from '@/lib/constants'

export default function HeroCTA() {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center gap-4">
        <a
          href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-text-main rounded-full shadow-lg font-bold text-base hover:bg-gray-50 transition-colors"
        >
          <Phone className="w-5 h-5" />
          전화상담 {HOSPITAL.phone}
        </a>
        <a
          href={HOSPITAL.kakao}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-kakao text-[#3C1E1E] rounded-full shadow-lg font-bold text-base hover:brightness-95 transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          카카오톡 상담
        </a>
      </div>
      <p className="text-white/70 text-sm md:text-base">
        365일 진료 | 야간 20시 | 점심시간 없음
      </p>
    </div>
  )
}
