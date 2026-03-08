'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import clsx from 'clsx'

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

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        'fixed right-4 z-40 w-10 h-10 rounded-full bg-white border border-border-main shadow-md flex items-center justify-center text-text-body hover:text-primary transition-all duration-300',
        'bottom-[72px] md:bottom-5',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      aria-label="맨 위로"
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  )
}
