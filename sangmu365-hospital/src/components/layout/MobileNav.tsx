'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { HOSPITAL } from '@/lib/constants'

const allLinks = [
  { label: '병원소개', href: '/about' },
  { label: '의료진 소개', href: '/doctors' },
  { label: '교통사고 후유증', href: '/traffic-accident' },
  { label: '한방치료', href: '/treatment' },
  { label: '도수치료·체형교정', href: '/chiropractic' },
  { label: '체외충격파', href: '/shockwave' },
  { label: '피부진료', href: '/skin' },
  { label: '입원안내', href: '/hospitalization' },
  { label: '의료장비', href: '/equipment' },
  { label: '오시는길', href: '/directions' },
  { label: '온라인 예약', href: '/reservation' },
  { label: '공지사항', href: '/community/notice' },
  { label: '후기', href: '/community/reviews' },
  { label: 'FAQ', href: '/community/faq' },
  { label: '비급여 안내', href: '/nonpay' },
]

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Panel */}
      <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-xl overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-border-main">
          <span className="font-bold text-text-main">{HOSPITAL.name}</span>
          <button onClick={onClose} aria-label="닫기" className="p-1">
            <X className="w-6 h-6 text-text-body" />
          </button>
        </div>
        <nav className="p-4">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block py-2.5 text-sm text-text-body hover:text-primary transition-colors border-b border-border-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-border-main">
          <a
            href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
            className="block w-full py-2.5 text-center bg-primary text-white rounded-lg font-semibold text-sm"
          >
            전화상담 {HOSPITAL.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
