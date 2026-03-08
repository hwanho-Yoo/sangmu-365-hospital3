'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Phone } from 'lucide-react'
import { HOSPITAL } from '@/lib/constants'
import MobileNav from './MobileNav'
import clsx from 'clsx'

const navLinks = [
  { label: '병원소개', href: '/about' },
  { label: '의료진', href: '/doctors' },
  { label: '교통사고', href: '/traffic-accident' },
  { label: '치료안내', href: '/treatment' },
  { label: '입원안내', href: '/hospitalization' },
  { label: '진료예약', href: '/reservation' },
  { label: '오시는길', href: '/directions' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/'
  const solid = isScrolled || !isHome

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          solid
            ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        )}
      >
        <div
          className={clsx(
            'mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300',
            solid ? 'h-14' : 'h-[60px]'
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className={clsx(
              'font-bold text-lg tracking-tight transition-colors duration-300',
              solid ? 'text-primary' : 'text-white'
            )}
          >
            <span className="hidden sm:inline">상무365한방병원</span>
            <span className="sm:hidden">상무365</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'text-[14px] font-medium transition-colors duration-200',
                    solid
                      ? isActive
                        ? 'text-primary'
                        : 'text-text-body hover:text-primary'
                      : isActive
                        ? 'text-white'
                        : 'text-white/85 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop phone */}
          <a
            href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
            className={clsx(
              'hidden lg:inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300',
              solid ? 'text-text-body hover:text-primary' : 'text-white/80 hover:text-white'
            )}
          >
            <Phone className="w-3.5 h-3.5" />
            {HOSPITAL.phone}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={clsx(
              'lg:hidden p-2 transition-colors duration-300',
              solid ? 'text-text-main' : 'text-white'
            )}
            aria-label="메뉴 열기"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
