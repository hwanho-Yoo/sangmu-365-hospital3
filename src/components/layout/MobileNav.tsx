'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  X,
  Phone,
  MessageCircle,
  CalendarCheck,
  Building2,
  UserRound,
  Car,
  Leaf,
  StretchHorizontal,
  Zap,
  Crosshair,
  Sparkles,
  BedDouble,
  Microscope,
  MapPin,
  FileText,
  Bell,
  MessageSquare,
  CircleHelp,
} from 'lucide-react'
import { HOSPITAL } from '@/lib/constants'
import clsx from 'clsx'

const menuLinks = [
  { icon: Building2, label: '병원소개', href: '/about' },
  { icon: UserRound, label: '의료진 소개', href: '/doctors' },
  { icon: Car, label: '교통사고 후유증', href: '/traffic-accident' },
  { icon: Leaf, label: '한방치료', href: '/treatment' },
  { icon: StretchHorizontal, label: '도수·체형교정', href: '/chiropractic' },
  { icon: Zap, label: '체외충격파', href: '/shockwave' },
  { icon: Crosshair, label: '초음파유도하약침', href: '/ultrasound-acupuncture' },
  { icon: Sparkles, label: '피부진료', href: '/skin' },
  { icon: BedDouble, label: '입원안내', href: '/hospitalization' },
  { icon: Microscope, label: '의료장비', href: '/equipment' },
  { icon: CalendarCheck, label: '진료예약', href: '/reservation' },
  { icon: MapPin, label: '오시는길', href: '/directions' },
  { icon: FileText, label: '비급여 안내', href: '/nonpay' },
  { icon: Bell, label: '공지사항', href: '/community/notice' },
  { icon: MessageSquare, label: '치료후기', href: '/community/reviews' },
  { icon: CircleHelp, label: 'FAQ', href: '/community/faq' },
]

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname()

  // Close on route change
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [open])

  // Escape key
  useEffect(() => {
    if (!open) return
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [open, onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          'fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="메뉴"
        className={clsx(
          'fixed top-0 right-0 z-[70] h-full w-[85vw] max-w-[360px] bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 h-[60px] border-b border-border-light shrink-0">
          <span className="font-bold text-lg text-text-main">메뉴</span>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="w-11 h-11 flex items-center justify-center"
          >
            <X className="w-6 h-6 text-text-body" />
          </button>
        </div>

        {/* CTA section */}
        <div className="p-4 flex flex-col gap-3 border-b-8 border-bg-section shrink-0">
          <a
            href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
            className="flex items-center justify-center gap-2 h-[52px] bg-primary text-white rounded-lg font-semibold text-base"
          >
            <Phone className="w-5 h-5" />
            전화상담 {HOSPITAL.phone}
          </a>
          <a
            href={HOSPITAL.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-[52px] bg-kakao text-[#3C1E1E] rounded-lg font-semibold text-base"
          >
            <MessageCircle className="w-5 h-5" />
            카카오톡 상담
          </a>
          <Link
            href="/reservation"
            className="flex items-center justify-center gap-2 h-[52px] bg-white border border-primary text-primary rounded-lg font-semibold text-base"
          >
            <CalendarCheck className="w-5 h-5" />
            진료예약
          </Link>
        </div>

        {/* Menu list */}
        <nav className="flex-1 overflow-y-auto">
          {menuLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'flex items-center gap-3 h-[54px] px-5 border-b border-border-light transition-colors',
                  isActive
                    ? 'text-primary border-l-[3px] border-l-primary bg-primary-subtle'
                    : 'text-text-body hover:bg-gray-50'
                )}
              >
                <link.icon className={clsx('w-5 h-5', isActive ? 'text-primary' : 'text-text-muted')} strokeWidth={1.5} />
                <span className="text-base font-medium">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Bottom info */}
        <div className="p-4 border-t border-border-light shrink-0">
          <p className="text-[13px] text-text-muted text-center">
            365일 진료 | 야간 20시 | 점심시간 없음
          </p>
        </div>
      </div>
    </>
  )
}
