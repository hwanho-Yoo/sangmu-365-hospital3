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
    <div className="grid grid-cols-5 w-full border-t border-white/15">
      {menuItems.map((item) => {
        const Icon = iconMap[item.iconName]
        return (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-col items-center justify-center gap-1 min-[400px]:gap-1.5 md:gap-3 py-3 min-[400px]:py-4 md:py-7 border-r border-b border-white/15 last:border-r-0 [&:nth-child(5)]:border-r-0 [&:nth-child(n+6)]:border-b-0 transition-all hover:bg-white/15 active:scale-95"
          >
            {Icon && (
              <Icon
                className="w-6 h-6 min-[400px]:w-7 min-[400px]:h-7 md:w-11 md:h-11 text-white drop-shadow-md"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            )}
            <span
              className="text-white text-[11px] min-[400px]:text-[13px] md:text-base font-bold text-center leading-tight"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
            >
              {item.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
