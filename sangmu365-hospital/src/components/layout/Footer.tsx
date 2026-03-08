import Link from 'next/link'
import { HOSPITAL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-white/70 pb-20 md:pb-0">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">{HOSPITAL.name}</h3>
            <div className="space-y-1 text-sm">
              <p>{HOSPITAL.address}</p>
              <p>
                대표전화:{' '}
                <a
                  href={`tel:${HOSPITAL.phone.replace(/-/g, '')}`}
                  className="text-white hover:text-primary transition-colors"
                >
                  {HOSPITAL.phone}
                </a>
              </p>
              <p>대표: {HOSPITAL.representative}</p>
              <p>사업자등록번호: {HOSPITAL.businessNumber}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/nonpay" className="hover:text-white transition-colors">
              비급여 안내
            </Link>
            <Link href="/community/notice" className="hover:text-white transition-colors">
              공지사항
            </Link>
            <Link href="/directions" className="hover:text-white transition-colors">
              오시는길
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/40">
          &copy; {new Date().getFullYear()} {HOSPITAL.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
