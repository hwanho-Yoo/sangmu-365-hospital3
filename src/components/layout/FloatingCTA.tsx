'use client'

import { Phone, MapPin } from 'lucide-react'
import { HOSPITAL } from '@/lib/constants'

export default function FloatingCTA() {
  return (
    <div className="fixed right-5 bottom-24 z-40 hidden lg:flex flex-col gap-4">
      <a
        href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
        className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-hover transition-colors"
        aria-label="전화"
        title="전화상담"
      >
        <Phone className="w-10 h-10" />
      </a>
      <a
        href={HOSPITAL.naver}
        target="_blank"
        rel="noopener noreferrer"
        className="w-24 h-24 rounded-full bg-[#03C75A] text-white flex items-center justify-center shadow-lg hover:brightness-90 transition-all"
        aria-label="네이버"
        title="네이버 예약"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-10 h-10"
          aria-hidden="true"
        >
          <path d="M13.54 10.78L6.19 0H0v20h6.46V9.22L13.81 20H20V0h-6.46v10.78z" />
        </svg>
      </a>
      <a
        href="/directions"
        className="w-24 h-24 rounded-full bg-white text-text-body border border-border-main flex items-center justify-center shadow-lg hover:text-primary transition-colors"
        aria-label="오시는길"
        title="오시는길"
      >
        <MapPin className="w-10 h-10" />
      </a>
    </div>
  )
}
