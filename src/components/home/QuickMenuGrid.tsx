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
    <div className="grid grid-cols-5 gap-x-2 gap-y-4 min-[400px]:gap-x-4 min-[400px]:gap-y-5 md:gap-x-8 md:gap-y-7 w-full max-w-[340px] min-[400px]:max-w-[560px] md:max-w-[720px] mx-auto">
      {menuItems.map((item) => {
        const Icon = iconMap[item.iconName]
        return (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-col items-center gap-1.5 min-[400px]:gap-2 md:gap-3 group"
          >
            <div className="w-12 h-12 min-[400px]:w-14 min-[400px]:h-14 md:w-16 md:h-16 rounded-full bg-white/15 flex items-center justify-center transition-colors group-hover:bg-white/30">
              {Icon && <Icon className="w-5 h-5 min-[400px]:w-6 min-[400px]:h-6 md:w-7 md:h-7 text-white" strokeWidth={1.5} aria-hidden="true" />}
            </div>
            <span className="text-white text-[11px] min-[400px]:text-[13px] md:text-sm font-semibold text-center leading-tight">
              {item.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
