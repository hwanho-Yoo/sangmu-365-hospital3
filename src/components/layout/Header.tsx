'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Phone, ChevronDown } from 'lucide-react'
import { HOSPITAL } from '@/lib/constants'
import MobileNav from './MobileNav'
import clsx from 'clsx'

const treatmentSubLinks = [
  { label: '교통사고 후유증', href: '/traffic-accident' },
  { label: '한방치료', href: '/treatment' },
  { label: '초음파유도하약침', href: '/ultrasound-acupuncture' },
  { label: '도수·체형교정', href: '/chiropractic' },
  { label: '체외충격파', href: '/shockwave' },
  { label: '피부진료', href: '/skin' },
]

const navLinks = [
  { label: '병원소개', href: '/about' },
  { label: '의료진', href: '/doctors' },
  { label: '치료안내', href: '/treatment', hasDropdown: true },
  { label: '의료장비', href: '/equipment' },
  { label: '입원안내', href: '/hospitalization' },
  { label: '진료예약', href: '/reservation' },
  { label: '오시는길', href: '/directions' },
]

const treatmentPaths = ['/traffic-accident', '/treatment', '/ultrasound-acupuncture', '/chiropractic', '/shockwave', '/skin']

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false)
  }, [pathname])

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
            solid ? 'h-16' : 'h-[72px]'
          )}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/sangmu_logo.png"
              alt="상무365한방병원"
              width={180}
              height={40}
              className={clsx(
                'h-8 sm:h-9 w-auto transition-all duration-300',
                solid ? '' : 'brightness-0 invert'
              )}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = link.hasDropdown
                ? treatmentPaths.some((p) => pathname === p || pathname.startsWith(p + '/'))
                : pathname === link.href || pathname.startsWith(link.href + '/')

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={clsx(
                        'flex items-center gap-1 text-[16px] font-semibold transition-colors duration-200',
                        solid
                          ? isActive ? 'text-primary' : 'text-text-body hover:text-primary'
                          : isActive ? 'text-white' : 'text-white/85 hover:text-white'
                      )}
                    >
                      {link.label}
                      <ChevronDown className={clsx('w-4 h-4 transition-transform', dropdownOpen && 'rotate-180')} />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={clsx(
                        'absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200',
                        dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      )}
                    >
                      <div className="bg-white rounded-xl shadow-lg border border-border-light py-2 min-w-[210px]">
                        {treatmentSubLinks.map((sub) => {
                          const subActive = pathname === sub.href
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={clsx(
                                'block px-5 py-2.5 text-base font-medium transition-colors',
                                subActive
                                  ? 'text-primary bg-primary-subtle'
                                  : 'text-text-body hover:text-primary hover:bg-gray-50'
                              )}
                            >
                              {sub.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'text-[16px] font-semibold transition-colors duration-200',
                    solid
                      ? isActive ? 'text-primary' : 'text-text-body hover:text-primary'
                      : isActive ? 'text-white' : 'text-white/85 hover:text-white'
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
              'hidden lg:inline-flex items-center gap-2 text-base font-semibold transition-colors duration-300',
              solid ? 'text-text-body hover:text-primary' : 'text-white/80 hover:text-white'
            )}
          >
            <Phone className="w-4 h-4" />
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
