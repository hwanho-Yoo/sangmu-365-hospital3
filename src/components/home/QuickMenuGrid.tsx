'use client'

import Link from 'next/link'
import {
  Car,
  Leaf,
  StretchHorizontal,
  Zap,
  Crosshair,
  Sparkles,
  BedDouble,
  UserRound,
  CalendarCheck,
  MapPin,
} from 'lucide-react'
import { menuItems } from '@/lib/data/menuItems'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Car,
  Leaf,
  StretchHorizontal,
  Zap,
  Crosshair,
  Sparkles,
  BedDouble,
  UserRound,
  CalendarCheck,
  MapPin,
}

export default function QuickMenuGrid() {
  return (
    <>
      {/* 모바일: 세로 스크롤 (드래그로 아래까지 확인) */}
      <div
        className="md:hidden border-t border-white/15 overflow-y-auto scrollbar-hide max-h-[40svh]"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="flex flex-col">
          {menuItems.map((item) => {
            const Icon = iconMap[item.iconName]
            return (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center gap-4 px-6 py-4 border-b border-white/10 transition-all hover:bg-white/10 active:scale-[0.98]"
              >
                {Icon && (
                  <Icon
                    className="w-6 h-6 text-white drop-shadow-md shrink-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                )}
                <span
                  className="text-white text-[15px] font-bold leading-tight"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* 데스크톱: 5컬럼 그리드 */}
      <div className="hidden md:grid grid-cols-5 w-full border-t border-white/15">
        {menuItems.map((item) => {
          const Icon = iconMap[item.iconName]
          return (
            <Link
              key={item.id}
              href={item.href}
              className="flex flex-col items-center justify-center gap-3 py-7 border-r border-b border-white/15 transition-all hover:bg-white/15 active:scale-95"
            >
              {Icon && (
                <Icon
                  className="w-11 h-11 text-white drop-shadow-md"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              )}
              <span
                className="text-white text-base font-bold text-center leading-tight"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </>
  )
}
