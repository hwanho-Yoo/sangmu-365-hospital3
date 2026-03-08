'use client'

import Link from 'next/link'
import {
  Car,
  Leaf,
  StretchHorizontal,
  Zap,
  Sparkles,
  BedDouble,
  UserRound,
  Microscope,
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
  Sparkles,
  BedDouble,
  UserRound,
  Microscope,
  CalendarCheck,
  MapPin,
}

export default function QuickMenuGrid() {
  return (
    <div className="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-5 w-full border-t border-white/15">
      {menuItems.map((item) => {
        const Icon = iconMap[item.iconName]
        return (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-col items-center justify-center gap-2.5 md:gap-3 py-6 md:py-7 border-r border-b border-white/15 transition-all hover:bg-white/15 active:scale-95"
          >
            {Icon && (
              <Icon
                className="w-9 h-9 md:w-11 md:h-11 text-white drop-shadow-md"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            )}
            <span
              className="text-white text-[14px] md:text-[16px] font-bold text-center leading-tight"
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
