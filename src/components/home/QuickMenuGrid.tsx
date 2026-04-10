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
      {/* 모바일: 가로 스크롤 (드래그 가능) */}
      <div className="md:hidden border-t border-white/15 overflow-x-auto scrollbar-hide">
        <div className="flex w-max">
          {menuItems.map((item) => {
            const Icon = iconMap[item.iconName]
            return (
              <Link
                key={item.id}
                href={item.href}
                className="flex flex-col items-center justify-center gap-1.5 py-4 px-5 border-r border-white/15 transition-all hover:bg-white/15 active:scale-95 shrink-0 min-w-[88px]"
              >
                {Icon && (
                  <Icon
                    className="w-7 h-7 text-white drop-shadow-md"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                )}
                <span
                  className="text-white text-[12px] font-bold text-center leading-tight whitespace-nowrap"
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
