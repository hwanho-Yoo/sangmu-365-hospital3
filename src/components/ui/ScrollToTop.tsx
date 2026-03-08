'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-5 lg:bottom-5 z-40 w-10 h-10 rounded-full bg-white border border-border-main shadow-md flex items-center justify-center text-text-body hover:text-primary transition-colors"
      aria-label="맨 위로"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
