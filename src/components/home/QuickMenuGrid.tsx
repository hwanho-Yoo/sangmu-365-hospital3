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
    <div className="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-5 gap-2.5 min-[400px]:gap-3 md:gap-4 w-full max-w-[400px] min-[500px]:max-w-[520px] md:max-w-[800px] mx-auto">
      {menuItems.map((item) => {
        const Icon = iconMap[item.iconName]
        return (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-col items-center justify-center gap-2 md:gap-3 py-5 md:py-6 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 transition-all hover:bg-white/30 hover:scale-[1.03] active:scale-95"
          >
            {Icon && (
              <Icon
                className="w-8 h-8 min-[400px]:w-9 min-[400px]:h-9 md:w-10 md:h-10 text-white"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            )}
            <span className="text-white text-[13px] min-[400px]:text-[14px] md:text-[15px] font-bold text-center leading-tight">
              {item.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
