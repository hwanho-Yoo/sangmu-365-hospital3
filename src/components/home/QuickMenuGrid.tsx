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
    <div className="grid grid-cols-5 gap-x-3 gap-y-4 md:gap-x-6 md:gap-y-5 w-full max-w-[500px] md:max-w-[600px] mx-auto">
      {menuItems.map((item) => {
        const Icon = iconMap[item.iconName]
        return (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-col items-center gap-1.5 md:gap-2 group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 flex items-center justify-center transition-colors group-hover:bg-white/30">
              {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.5} />}
            </div>
            <span className="text-white text-[11px] md:text-xs font-medium text-center leading-tight">
              {item.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
