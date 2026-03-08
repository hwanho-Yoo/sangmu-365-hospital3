'use client'

import { ChevronDown } from 'lucide-react'

export default function HeroScrollIndicator() {
  return (
    <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1">
      <span className="text-white/40 text-[10px] tracking-widest uppercase">Scroll</span>
      <ChevronDown className="w-5 h-5 text-white/40 animate-bounce-arrow" />
    </div>
  )
}
