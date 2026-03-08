import Link from 'next/link'
import { HOSPITAL } from '@/lib/constants'

const quickLinks = [
  { label: '비급여안내', href: '/nonpay' },
  { label: '진료예약', href: '/reservation' },
  { label: '오시는길', href: '/directions' },
  { label: '치료후기', href: '/community/reviews' },
]

export default function Footer() {
  return (
    <footer className="bg-text-main text-center pb-20 md:pb-0">
      <div className="mx-auto max-w-[1080px] px-4 md:px-6 py-8 md:py-12">
        {/* Hospital identity */}
        <div className="mb-6">
          <h3 className="text-white font-bold text-lg mb-1">{HOSPITAL.name}</h3>
          <p className="text-white/40 text-[11px] tracking-widest uppercase">
            {HOSPITAL.nameEn}
          </p>
        </div>

        {/* Contact info */}
        <div className="text-white/60 text-[15px] leading-[2] mb-6">
          <p>{HOSPITAL.address}</p>
          <p>
            대표번호 :{' '}
            <a
              href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
              className="text-white font-medium hover:text-primary transition-colors"
            >
              {HOSPITAL.phone}
            </a>
          </p>
          <p>사업자등록번호 : {HOSPITAL.businessNumber}</p>
          <p>대표자 : {HOSPITAL.representative}</p>
        </div>

        {/* Quick links */}
        <div className="flex items-center justify-center gap-4 text-[15px] mb-6">
          {quickLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-4">
              {i > 0 && <span className="text-white/20">·</span>}
              <Link href={link.href} className="text-white/50 hover:text-white transition-colors">
                {link.label}
              </Link>
            </span>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/30">
          © 2025 {HOSPITAL.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
