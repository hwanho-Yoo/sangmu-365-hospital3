'use client'

import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { HOSPITAL } from '@/lib/constants'

export default function FloatingCTA() {
  return (
    <div className="fixed right-5 bottom-24 z-40 hidden lg:flex flex-col gap-3">
      <a
        href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
        className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-hover transition-colors"
        aria-label="전화"
        title="전화상담"
      >
        <Phone className="w-5 h-5" />
      </a>
      <a
        href={HOSPITAL.kakao}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-kakao text-[#3C1E1E] flex items-center justify-center shadow-lg hover:brightness-95 transition-all"
        aria-label="카카오톡"
        title="카카오톡 상담"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
      <a
        href="/directions"
        className="w-12 h-12 rounded-full bg-white text-text-body border border-border-main flex items-center justify-center shadow-lg hover:text-primary transition-colors"
        aria-label="오시는길"
        title="오시는길"
      >
        <MapPin className="w-5 h-5" />
      </a>
    </div>
  )
}
